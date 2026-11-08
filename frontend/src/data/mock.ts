// MOCK: pedidos, reservas y stock de demostración. Usan ids del catálogo (src/data/index.ts) y no son
// datos reales: los clientes, fechas y cantidades son de ejemplo hasta tener backend.
import { BTW_ALIMENTOS, itemPorId } from './index';
import type { ItemCatalogo } from './tipos';
import type { LineaPedido, Pedido, Reserva } from '@/types';

export const PEDIDOS: Pedido[] = [
  {
    id: 'PSB-2025-4892',
    fecha: '2025-05-18',
    estado: 'confirmado',
    entrega: 'domicilio',
    cliente: 'Cliente de ejemplo 1',
    lineas: [
      { id: 'bandeja-paisa', cantidad: 2 },
      { id: 'empanada-de-carne', cantidad: 4 },
      { id: 'hit-lulo', cantidad: 2 },
    ],
  },
  {
    id: 'PSB-2025-4891',
    fecha: '2025-05-18',
    estado: 'en_preparacion',
    entrega: 'recogida',
    cliente: 'Cliente de ejemplo 2',
    lineas: [
      { id: 'bowl-montanero', cantidad: 1 },
      { id: 'papa-rellena', cantidad: 2 },
      { id: 'pony-malta', cantidad: 1 },
    ],
  },
  {
    id: 'PSB-2025-4890',
    fecha: '2025-05-18',
    estado: 'pendiente',
    entrega: 'domicilio',
    cliente: 'Cliente de ejemplo 3',
    lineas: [
      { id: 'picada-x1-persona', cantidad: 2 },
      { id: 'coca-cola', cantidad: 2 },
    ],
  },
  {
    id: 'PSB-2025-3910',
    fecha: '2025-05-02',
    estado: 'entregado',
    entrega: 'recogida',
    cliente: 'Cliente de ejemplo 1',
    lineas: [
      { id: 'porcion-de-lechona', cantidad: 1 },
      { id: 'almojabana', cantidad: 3 },
      { id: 'agua', cantidad: 1 },
    ],
  },
  {
    id: 'PSB-2025-1049',
    fecha: '2025-03-15',
    estado: 'cancelado',
    entrega: 'domicilio',
    cliente: 'Cliente de ejemplo 1',
    lineas: [
      { id: 'empanada-de-queso', cantidad: 4 },
      { id: 'bunuelo', cantidad: 4 },
    ],
  },
];

export const RESERVAS: Reserva[] = [
  { id: 'RES-2025-0814', platoId: 'tamal-antioqueno-trifasico', fecha: '2025-06-14', porciones: 6, estado: 'pendiente', cliente: 'Cliente de ejemplo 1' },
  { id: 'RES-2025-0812', platoId: 'sancocho-de-res-pecho', fecha: '2025-06-14', porciones: 4, estado: 'confirmada', cliente: 'Cliente de ejemplo 4' },
  { id: 'RES-2025-0807', platoId: 'mondongo', fecha: '2025-06-15', porciones: 2, estado: 'confirmada', cliente: 'Cliente de ejemplo 5' },
  { id: 'RES-2025-0211', platoId: 'arroz-paisa', fecha: '2025-04-27', porciones: 8, estado: 'finalizada', cliente: 'Cliente de ejemplo 1' },
];

/** MOCK: unidades en stock por id del catálogo, para la vista de inventario */
export const STOCK: Record<string, number> = {
  'empanada-de-carne': 40,
  'empanada-de-pollo': 12,
  'empanada-de-queso': 6,
  'papa-rellena': 18,
  'hit-lulo': 3,
  'pony-malta': 24,
};
export const STOCK_MINIMO = 10;

export interface LineaConItem {
  item: ItemCatalogo;
  cantidad: number;
  total: number;
}

export function lineasConItem(lineas: LineaPedido[]): LineaConItem[] {
  return lineas.flatMap(({ id, cantidad }) => {
    const item = itemPorId(id);
    return item ? [{ item, cantidad, total: item.precio * cantidad }] : [];
  });
}

/** Total con IVA incluido; base e IVA salen del total (los precios ya incluyen el 9 %) */
export function totales(lineas: LineaPedido[]) {
  const total = lineasConItem(lineas).reduce((acc, l) => acc + l.total, 0);
  const base = total / (1 + BTW_ALIMENTOS);
  return { total, base, iva: total - base };
}

export const pedidoPorId = (id: string) => PEDIDOS.find((p) => p.id === id);
