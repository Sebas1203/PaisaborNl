// Reglas puras de entrega (sin estado): código postal neerlandés, fechas, franjas y dirección.
// Las usan el checkout (para avisar al cliente) y el servicio de pedidos (para no aceptar datos
// inválidos). Supabase debe validar lo mismo en la función que crea el pedido.

import { ENTREGA_DIAS_MAXIMOS, ENTREGA_DIAS_MINIMOS, FRANJAS, ZONA_REPARTO } from '@/config/entrega';
import type { DeliveryMethod } from '@/types';

export interface DireccionEntrega {
  calle: string;
  /** Formato "1234 AB" */
  codigoPostal: string;
  ciudad: string;
}

// 4 cifras (la primera no es 0), espacio opcional y 2 letras; SA, SD y SS no se usan en NL
const CP_NL = /^([1-9]\d{3})\s?([A-Z]{2})$/;
const LETRAS_NO_USADAS = ['SA', 'SD', 'SS'];

/** "1234ab" → "1234 AB"; null si no es un código postal neerlandés válido */
export function normalizarCodigoPostal(cp: string): string | null {
  const m = CP_NL.exec(cp.trim().toUpperCase());
  if (!m || LETRAS_NO_USADAS.includes(m[2])) return null;
  return `${m[1]} ${m[2]}`;
}

/** true si el código postal está en la zona de reparto (o si la zona aún no está definida) */
export function dentroDeZona(cp: string): boolean {
  if (!ZONA_REPARTO) return true;
  const numero = Number(cp.slice(0, 4));
  return ZONA_REPARTO.some((r) => numero >= r.desde && numero <= r.hasta);
}

export function validarCodigoPostal(cp: string): string | null {
  if (!cp.trim()) return 'Indica el código postal.';
  const normal = normalizarCodigoPostal(cp);
  if (!normal) return 'El código postal debe tener el formato 1234 AB.';
  if (!dentroDeZona(normal)) return 'Por ahora no repartimos en ese código postal. Puedes elegir recogida en el local.';
  return null;
}

const iso = (d: Date) => {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

/** Primera y última fecha aceptadas (YYYY-MM-DD, hora local) */
export function rangoFechasEntrega(hoy = new Date()): { min: string; max: string } {
  const dia = (n: number) => new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate() + n);
  return { min: iso(dia(ENTREGA_DIAS_MINIMOS)), max: iso(dia(ENTREGA_DIAS_MAXIMOS)) };
}

export function validarFechaEntrega(fecha: string, entrega: DeliveryMethod): string | null {
  const que = entrega === 'domicilio' ? 'de entrega' : 'de recogida';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return `Elige la fecha ${que}.`;
  const { min, max } = rangoFechasEntrega();
  if (fecha < min) return `La fecha ${que} debe ser a partir del ${formatFechaEntrega(min)}.`;
  if (fecha > max) return `La fecha ${que} no puede ser posterior al ${formatFechaEntrega(max)}.`;
  return null;
}

export function validarFranja(franja: string, entrega: DeliveryMethod): string | null {
  return FRANJAS[entrega].includes(franja) ? null : 'Elige una franja horaria.';
}

/** Primer error de los datos de entrega, o null si todo es válido */
export function validarEntrega(d: { entrega: DeliveryMethod; fechaEntrega: string; franja: string; direccion?: Partial<DireccionEntrega> }): string | null {
  if (d.entrega === 'domicilio') {
    if (!d.direccion?.calle?.trim()) return 'Indica la calle y el número de entrega.';
    const cp = validarCodigoPostal(d.direccion.codigoPostal ?? '');
    if (cp) return cp;
    if (!d.direccion.ciudad?.trim()) return 'Indica la ciudad de entrega.';
  }
  return validarFechaEntrega(d.fechaEntrega, d.entrega) || validarFranja(d.franja, d.entrega);
}

/** "Calle 5, 1012 AB Ámsterdam" */
export const direccionTexto = (d: DireccionEntrega) => `${d.calle}, ${d.codigoPostal} ${d.ciudad}`;

/** "sábado 14 de noviembre" */
export function formatFechaEntrega(fecha: string): string {
  return new Date(`${fecha}T12:00:00`).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).replace(',', '');
}
