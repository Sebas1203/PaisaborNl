'use client';

import { baseSinIva } from '@/config/fiscal';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { itemPorId } from '@/data';
import { lineasConItem, type LineaConItem } from '@/lib/pedidos';
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
  /**
   * Guarda el carrito como pedido por confirmar. No lo vacía: lo vacía /checkout/exito
   * cuando el pedido se crea, así un error no hace perder el carrito.
   */
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

export function clearLastOrder(): void {
  try {
    localStorage.removeItem(LAST_ORDER_KEY);
  } catch {
    // nada que borrar
  }
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
    const base = baseSinIva(subtotal);

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
          // sin localStorage la confirmación no podrá crear el pedido y lo indicará
        }
      },
    };
  }, [entries]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
