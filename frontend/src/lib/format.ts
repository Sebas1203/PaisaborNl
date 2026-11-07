import type { OrderStatus } from '@/types';

// Los precios de la tienda incluyen BTW: 9 % en alimentos, 21 % en servicios (logística).
export const BTW_ALIMENTOS = 0.09;
export const BTW_SERVICIOS = 0.21;

/** Formato del diseño: "€8.50" */
export function formatEUR(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

/** Parte de BTW contenida en un importe que ya la incluye */
export function btwIncluido(total: number, tasa: number = BTW_ALIMENTOS): number {
  return total - total / (1 + tasa);
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pendiente: 'Pendiente',
  confirmado: 'Confirmado',
  en_preparacion: 'En preparación',
  listo: 'Listo',
  enviado: 'Enviado',
  entregado: 'Entregado',
  cancelado: 'Cancelado',
};
