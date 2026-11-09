// Reglas puras de pedidos (sin estado ni almacenamiento): flujo de estados y totales con IVA.
// Las usan el mock y la UI; la implementación de Supabase debe respetar las mismas reglas.

import { itemPorId, type ItemCatalogo } from '@/data';
import type { DeliveryMethod, LineaPedido, OrderStatus } from '@/types';
import type { LineaPedidoGuardada } from '@/services/tipos';
import { calcularTotales } from '@/lib/precios';

const FLUJO_DOMICILIO: OrderStatus[] = ['pendiente', 'confirmado', 'en_preparacion', 'listo', 'enviado', 'entregado'];
// "enviado" no existe para pedidos que el cliente recoge en la sede
const FLUJO_RECOGIDA: OrderStatus[] = FLUJO_DOMICILIO.filter((e) => e !== 'enviado');

/** Estados por los que pasa un pedido, en orden, según el tipo de entrega */
export const flujoDe = (entrega: DeliveryMethod) => (entrega === 'domicilio' ? FLUJO_DOMICILIO : FLUJO_RECOGIDA);

/** Único estado al que puede avanzar el pedido (el admin no puede saltarse pasos) */
export function siguienteEstado(pedido: { estado: OrderStatus; entrega: DeliveryMethod }): OrderStatus | null {
  if (pedido.estado === 'cancelado') return null;
  const flujo = flujoDe(pedido.entrega);
  const i = flujo.indexOf(pedido.estado);
  return i >= 0 && i < flujo.length - 1 ? flujo[i + 1] : null;
}

/** Solo se cancela un pedido que aún está pendiente */
export const puedeCancelar = (pedido: { estado: OrderStatus }) => pedido.estado === 'pendiente';

// ── Líneas y totales ─────────────────────────────────────────────────────────

export interface LineaConItem {
  item: Pick<ItemCatalogo, 'id' | 'nombre' | 'precio' | 'imagen'>;
  cantidad: number;
  total: number;
}

/** Líneas del carrito resueltas contra el catálogo (src/data) */
export function lineasConItem(lineas: LineaPedido[]): LineaConItem[] {
  return lineas.flatMap(({ id, cantidad }) => {
    const item = itemPorId(id);
    return item ? [{ item, cantidad, total: item.precio * cantidad }] : [];
  });
}

/** Líneas de un pedido guardado, con el precio del momento de la compra */
export function lineasGuardadasConItem(lineas: LineaPedidoGuardada[]): LineaConItem[] {
  return lineas.map(({ id, nombre, precio, imagen, cantidad }) => ({
    item: { id, nombre, precio, imagen },
    cantidad,
    total: precio * cantidad,
  }));
}

/** Totales de líneas con precio (pedidos y carrito): delega en calcularTotales */
export const totales = (lineas: { precio: number; cantidad: number }[]) =>
  calcularTotales(lineas.map((l) => ({ precioUnit: l.precio, cantidad: l.cantidad })));
