// MOCK: reinicio de los datos de prueba. Con Supabase los datos viven en el servidor y este
// botón dejará de tener sentido (se quita junto con la barra del prototipo).

import { borrarCookieSesion } from '@/services/mock/sesion';

const PREFIJO = 'paisabor:';

/**
 * Borra todo lo que la demo guarda en este navegador (pedidos, cuentas, reservas, carrito,
 * sesión y borradores). La próxima carga vuelve a crear los datos de ejemplo.
 */
export function reiniciarDatosPrueba(): void {
  for (const almacen of [globalThis.localStorage, globalThis.sessionStorage]) {
    try {
      Object.keys(almacen)
        .filter((clave) => clave.startsWith(PREFIJO))
        .forEach((clave) => almacen.removeItem(clave));
    } catch {
      // almacenamiento bloqueado (modo privado estricto): no hay nada que borrar
    }
  }
  borrarCookieSesion();
}
