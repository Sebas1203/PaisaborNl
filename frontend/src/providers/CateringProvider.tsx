'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CATERING_MAX_PORCIONES } from '@/config/catering';
import { itemPorId, type Plato } from '@/data';
import { calcularTotales, type Totales } from '@/lib/precios';
import { useAuth } from '@/providers/AuthProvider';
import type { TipoEvento } from '@/services';

// Borrador de la solicitud de catering, compartido por /catering y /catering/reservar.
// Vive en sessionStorage para no perder datos al pasar de una pantalla a otra.

const CLAVE = 'paisabor:catering-borrador';

export interface BorradorCatering {
  items: { id: string; cantidad: number }[];
  /** 0 mientras el cliente no lo ha escrito */
  invitados: number;
  tipoEvento: TipoEvento | '';
  /** YYYY-MM-DD */
  fecha: string;
  /** HH:MM, opcional */
  hora: string;
  /** Ciudad o código postal del evento */
  ciudad: string;
  nombre: string;
  email: string;
  telefono: string;
  comentarios: string;
}

export interface LineaCatering {
  item: Plato;
  cantidad: number;
  /** precio × cantidad de la línea */
  subtotal: number;
}

const VACIO: BorradorCatering = {
  items: [],
  invitados: 0,
  tipoEvento: '',
  fecha: '',
  hora: '',
  ciudad: '',
  nombre: '',
  email: '',
  telefono: '',
  comentarios: '',
};

interface CateringContextValue {
  borrador: BorradorCatering;
  /** true cuando ya se leyó el borrador guardado (evita parpadeos al hidratar) */
  cargado: boolean;
  actualizar: (cambios: Partial<Omit<BorradorCatering, 'items'>>) => void;
  agregarPlato: (id: string, cantidad?: number) => void;
  cambiarCantidad: (id: string, cantidad: number) => void;
  quitarPlato: (id: string) => void;
  limpiar: () => void;
  lineas: LineaCatering[];
  totales: Totales;
  /** Suma de porciones de todos los platos */
  porciones: number;
  /** Algún plato tiene precio estimado: el total también lo es */
  estimado: boolean;
}

const CateringContext = createContext<CateringContextValue | null>(null);

export function useCatering() {
  const ctx = useContext(CateringContext);
  if (!ctx) throw new Error('useCatering debe usarse dentro de <CateringProvider>');
  return ctx;
}

const limitar = (n: number) => Math.min(CATERING_MAX_PORCIONES, Math.max(1, Math.round(n) || 1));

function leer(): BorradorCatering {
  try {
    const raw = sessionStorage.getItem(CLAVE);
    return raw ? { ...VACIO, ...(JSON.parse(raw) as Partial<BorradorCatering>) } : VACIO;
  } catch {
    return VACIO;
  }
}

export function CateringProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [borrador, setBorrador] = useState<BorradorCatering>(VACIO);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    setBorrador(leer());
    setCargado(true);
  }, []);

  useEffect(() => {
    if (!cargado) return;
    try {
      sessionStorage.setItem(CLAVE, JSON.stringify(borrador));
    } catch {
      // sin sessionStorage el borrador vive solo en memoria
    }
  }, [borrador, cargado]);

  // Con sesión, rellena los datos de contacto que el cliente aún no escribió
  useEffect(() => {
    if (!cargado || !user) return;
    setBorrador((b) => ({
      ...b,
      nombre: b.nombre || user.nombre,
      email: b.email || user.email,
      telefono: b.telefono || user.telefono || '',
    }));
  }, [cargado, user]);

  const actualizar = useCallback((cambios: Partial<Omit<BorradorCatering, 'items'>>) => setBorrador((b) => ({ ...b, ...cambios })), []);

  const agregarPlato = useCallback(
    (id: string, cantidad = 1) =>
      setBorrador((b) =>
        b.items.some((i) => i.id === id) ? b : { ...b, items: [...b.items, { id, cantidad: limitar(cantidad) }] },
      ),
    [],
  );

  const cambiarCantidad = useCallback(
    (id: string, cantidad: number) =>
      setBorrador((b) => ({ ...b, items: b.items.map((i) => (i.id === id ? { ...i, cantidad: limitar(cantidad) } : i)) })),
    [],
  );

  const quitarPlato = useCallback((id: string) => setBorrador((b) => ({ ...b, items: b.items.filter((i) => i.id !== id) })), []);

  const limpiar = useCallback(() => {
    setBorrador(VACIO);
    try {
      sessionStorage.removeItem(CLAVE);
    } catch {
      // nada que borrar
    }
  }, []);

  const value = useMemo<CateringContextValue>(() => {
    const lineas = borrador.items.flatMap(({ id, cantidad }) => {
      const item = itemPorId(id);
      return item && item.tipo === 'menu' ? [{ item: item as Plato, cantidad, subtotal: item.precio * cantidad }] : [];
    });
    return {
      borrador,
      cargado,
      actualizar,
      agregarPlato,
      cambiarCantidad,
      quitarPlato,
      limpiar,
      lineas,
      totales: calcularTotales(lineas.map((l) => ({ precioUnit: l.item.precio, cantidad: l.cantidad }))),
      porciones: lineas.reduce((acc, l) => acc + l.cantidad, 0),
      estimado: lineas.some((l) => l.item.precioEstimado),
    };
  }, [borrador, cargado, actualizar, agregarPlato, cambiarCantidad, quitarPlato, limpiar]);

  return <CateringContext.Provider value={value}>{children}</CateringContext.Provider>;
}
