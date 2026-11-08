import type { OrderStatus } from '@/types';

// "€ 17,00". Es el formato de nl-NL; es-NL formatearía "17,00 €".
const EUR = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });

export function formatEUR(amount: number): string {
  return EUR.format(amount);
}

/** Texto que acompaña a los precios: el catálogo ya incluye el IVA (BTW) */
export const IVA_INCLUIDO = 'IVA 9% incluido';

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pendiente: 'Pendiente',
  confirmado: 'Confirmado',
  en_preparacion: 'En preparación',
  listo: 'Listo',
  enviado: 'Enviado',
  entregado: 'Entregado',
  cancelado: 'Cancelado',
};

const DIAS: Record<string, string> = { sabado: 'Sábado', domingo: 'Domingo' };
export const formatDias = (dias: string[] = []) => dias.map((d) => DIAS[d] ?? d).join(' · ');

export function formatFecha(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}
