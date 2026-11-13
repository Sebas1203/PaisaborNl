// Costo de envío: única fuente para carrito, checkout, confirmación y detalle de pedidos.

import { formatEUR } from '@/lib/format';
import type { DeliveryMethod } from '@/types';

/**
 * Euros con IVA incluido. null = aún sin precio: se confirma con el cliente por WhatsApp.
 * TODO (Diana): el precio del envío a domicilio lo define Diana. Cuando haya precio, ponerlo
 * aquí y confirmar con el contador el IVA que lleva el envío (hoy no entra en el desglose).
 */
export const COSTE_ENVIO: Record<DeliveryMethod, number | null> = {
  recogida: 0,
  domicilio: null,
};

export const ENVIO_POR_CONFIRMAR = 'Se confirma por WhatsApp';

export const costeEnvio = (entrega: DeliveryMethod) => COSTE_ENVIO[entrega];

/** "Gratis", "Se confirma por WhatsApp" o el importe ("€ 4,50") */
export function textoEnvio(entrega: DeliveryMethod): string {
  const coste = COSTE_ENVIO[entrega];
  if (coste === null) return ENVIO_POR_CONFIRMAR;
  return coste === 0 ? 'Gratis' : formatEUR(coste);
}
