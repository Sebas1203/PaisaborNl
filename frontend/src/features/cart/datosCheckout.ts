// Datos de entrega que el cliente rellena en /checkout y que /checkout/exito usa para crear el pedido.
// Viven en sessionStorage: se borran al cerrar la pestaña y nunca se mezclan entre clientes.

import type { DeliveryMethod } from '@/types';

const CLAVE = 'paisabor:checkout';

export interface DatosCheckout {
  entrega: DeliveryMethod;
  nombre: string;
  email: string;
  telefono: string;
  /** Solo en domicilio: "calle, código postal ciudad" */
  direccion?: string;
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
    return raw ? (JSON.parse(raw) as DatosCheckout) : null;
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
