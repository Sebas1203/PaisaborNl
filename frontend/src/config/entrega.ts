// Reglas de entrega a domicilio y recogida en el local: única fuente para checkout y pedidos.

import type { DeliveryMethod } from '@/types';
import { SEDE_PRINCIPAL } from './sedes';

// TODO (Diana): franjas tomadas del diseño de Stitch; confirmar los horarios reales de reparto
// y de recogida.
export const FRANJAS: Record<DeliveryMethod, string[]> = {
  domicilio: ['10:00 – 13:00', '13:30 – 17:00', '17:30 – 20:30'],
  recogida: ['11:30 – 13:00', '14:00 – 16:30', '17:00 – 18:45'],
};

// TODO (Diana): anticipación mínima real. Mientras tanto se acepta desde el día siguiente.
export const ENTREGA_DIAS_MINIMOS = 1;
// TODO (Diana): con cuánta antelación máxima se aceptan pedidos.
export const ENTREGA_DIAS_MAXIMOS = 30;

/**
 * Zona de reparto como rangos de los 4 dígitos del código postal (p. ej. { desde: 1011, hasta: 1109 }).
 * null = zona sin definir: no se filtra por código postal.
 * TODO (Diana): definir la zona de reparto real. No se inventa.
 */
export const ZONA_REPARTO: { desde: number; hasta: number }[] | null = null;

/** Ciudad que se propone en el formulario de domicilio */
export const CIUDAD_POR_DEFECTO = SEDE_PRINCIPAL.ciudad;
