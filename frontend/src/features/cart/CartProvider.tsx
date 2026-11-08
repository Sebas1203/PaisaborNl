'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { BTW_ALIMENTOS, itemPorId } from '@/data';
import { lineasConItem, type LineaConItem } from '@/data/mock';
import type { LineaPedido } from '@/types';

const STORAGE_KEY = 'paisabor:carrito';
const LAST_ORDER_KEY = 'paisabor:ultimo-pedido';

interface CartContextValue {
  lineas: LineaConItem[];
  count: number;
  /** Total con IVA incluido */
  subtotal: number;
  /** Base sin IVA: subtotal / 1.09 */
  base: number;
  /** IVA contenido en el subtotal (nunca se suma encima) */
  iva: number;
  addItem: (id: string, cantidad?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  /** Guarda el carrito como último pedido (para la pantalla de éxito) y lo vacía */
  checkout: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return cart;
}

function readLines(key: string): LineaPedido[] {
  try {
    const raw = JSON.parse(localStorage.getItem(key) ?? '[]');
    return Array.isArray(raw)
      ? raw.filter((l) => typeof l?.id === 'string' && itemPorId(l.id) && Number(l.cantidad) > 0)
      : [];
  } catch {
    return [];
  }
}

export function readLastOrder(): LineaPedido[] {
  return readLines(LAST_ORDER_KEY);
}

// Carrito de la demo (sin backend): guarda id y cantidad en localStorage
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<LineaPedido[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setEntries(readLines(STORAGE_KEY));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // sin localStorage (modo privado): el carrito sigue en memoria
    }
  }, [entries, loaded]);

  const value = useMemo<CartContextValue>(() => {
    const lineas = lineasConItem(entries);
    const subtotal = lineas.reduce((acc, l) => acc + l.total, 0);
    const base = subtotal / (1 + BTW_ALIMENTOS);

    return {
      lineas,
      count: lineas.reduce((acc, l) => acc + l.cantidad, 0),
      subtotal,
      base,
      iva: subtotal - base,
      addItem: (id, cantidad = 1) =>
        setEntries((prev) =>
          prev.some((l) => l.id === id)
            ? prev.map((l) => (l.id === id ? { ...l, cantidad: l.cantidad + cantidad } : l))
            : [...prev, { id, cantidad }]
        ),
      updateQuantity: (id, delta) =>
        setEntries((prev) =>
          prev.map((l) => (l.id === id ? { ...l, cantidad: l.cantidad + delta } : l)).filter((l) => l.cantidad > 0)
        ),
      removeItem: (id) => setEntries((prev) => prev.filter((l) => l.id !== id)),
      clear: () => setEntries([]),
      checkout: () => {
        try {
          localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(entries));
        } catch {
          // sin localStorage no hay resumen del último pedido
        }
        setEntries([]);
      },
    };
  }, [entries]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
