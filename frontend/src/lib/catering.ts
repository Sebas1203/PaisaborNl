// Reglas puras del catering: validación de la solicitud y formato de fechas. Las usan los
// formularios, el servicio de reservas y la confirmación.

import { validarEmail, validarNombre, validarTelefono } from '@/services/auth';
import type { TipoEvento } from '@/services/tipos';

export type CampoCatering = 'tipoEvento' | 'invitados' | 'fecha' | 'ciudad' | 'nombre' | 'email' | 'telefono' | 'items';
export type ErroresCatering = Partial<Record<CampoCatering, string>>;

export interface DatosSolicitudCatering {
  tipoEvento: TipoEvento | '';
  invitados: number;
  fecha: string;
  ciudad: string;
  nombre: string;
  email: string;
  telefono?: string;
  items: { id: string; cantidad: number }[];
}

/** YYYY-MM-DD de hoy en hora local */
export function hoyIso(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** Errores por campo; objeto vacío si la solicitud es válida */
export function validarSolicitudCatering(d: DatosSolicitudCatering): ErroresCatering {
  const errores: ErroresCatering = {};
  if (!d.tipoEvento) errores.tipoEvento = 'Elige el tipo de evento.';
  if (!Number.isInteger(d.invitados) || d.invitados < 1) errores.invitados = 'Indica el número de invitados (un número entero mayor que 0).';
  if (!d.fecha) errores.fecha = 'Elige la fecha del evento.';
  else if (d.fecha <= hoyIso()) errores.fecha = 'La fecha del evento debe ser posterior a hoy.';
  if (!d.ciudad.trim()) errores.ciudad = 'Indica la ciudad o el código postal del evento.';
  const nombre = validarNombre(d.nombre);
  if (nombre) errores.nombre = nombre;
  const email = validarEmail(d.email);
  if (email) errores.email = email;
  const telefono = validarTelefono(d.telefono);
  if (telefono) errores.telefono = telefono;
  if (!d.items.length) errores.items = 'Elige al menos un plato.';
  return errores;
}

/** "sábado 14 de noviembre de 2026" a partir de YYYY-MM-DD */
export function formatFechaEvento(iso: string): string {
  return new Date(`${iso}T12:00:00`)
    .toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    .replace(',', '');
}
