// Datos de entrega que el cliente rellena en /checkout y que /checkout/exito usa para crear el pedido.
// Viven en sessionStorage: se borran al cerrar la pestaña y nunca se mezclan entre clientes.

import type { DireccionEntrega } from '@/lib/entrega';
import type { DeliveryMethod } from '@/types';

const CLAVE = 'paisabor:checkout';
const CLAVE_ENTREGA = 'paisabor:entrega-elegida';

export interface DatosCheckout {
  entrega: DeliveryMethod;
  nombre: string;
  email: string;
  telefono: string;
  /** Día de entrega o recogida (YYYY-MM-DD) */
  fechaEntrega: string;
  franja: string;
  /** Solo en domicilio */
  direccion?: DireccionEntrega;
  notas?: string;
}

export function guardarDatosCheckout(datos: DatosCheckout): void {
  try {
    sessionStorage.setItem(CLAVE, JSON.stringify(datos));
  } catch {
    // sin sessionStorage el pedido no se podrá crear y la confirmación lo indicará
  }
}

export function leerDatosCheckout(): DatosCheckout | null {
  try {
    const raw = sessionStorage.getItem(CLAVE);
    const datos = raw ? (JSON.parse(raw) as DatosCheckout) : null;
    // Datos de una versión anterior (sin fecha de entrega): se vuelven a pedir
    return datos?.fechaEntrega ? datos : null;
  } catch {
    return null;
  }
}

export function borrarDatosCheckout(): void {
  try {
    sessionStorage.removeItem(CLAVE);
  } catch {
    // nada que borrar
  }
}

/** Método de entrega elegido en el carrito, para que el checkout empiece con el mismo */
export function guardarEntregaElegida(entrega: DeliveryMethod): void {
  try {
    sessionStorage.setItem(CLAVE_ENTREGA, entrega);
  } catch {
    // sin sessionStorage el checkout empieza con su valor por defecto
  }
}

export function leerEntregaElegida(): DeliveryMethod | null {
  try {
    const valor = sessionStorage.getItem(CLAVE_ENTREGA);
    return valor === 'domicilio' || valor === 'recogida' ? valor : null;
  } catch {
    return null;
  }
}
