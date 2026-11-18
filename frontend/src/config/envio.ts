// Costo de envío: única fuente para carrito, checkout, confirmación y detalle de pedidos.

import { formatEUR } from '@/lib/format';
import type { DeliveryMethod } from '@/types';

/**
 * Euros con IVA incluido. null = aún sin precio: se confirma con el cliente por WhatsApp.
 * Domicilio: 10 € fijos (definido el 2026-11-18). Cada pedido guarda el envío que pagó
 * (Pedido.envio), así que cambiar este valor no altera los pedidos ya hechos.
 * TODO (contador): confirmar el IVA del envío; hoy la base y el IVA del desglose son solo de
 * los productos y el envío se suma aparte al total.
 */
export const COSTE_ENVIO: Record<DeliveryMethod, number | null> = {
  recogida: 0,
  domicilio: 10,
};

export const ENVIO_POR_CONFIRMAR = 'Se confirma por WhatsApp';

export const costeEnvio = (entrega: DeliveryMethod) => COSTE_ENVIO[entrega];

/** "Gratis", "Se confirma por WhatsApp" o el importe ("€ 10,00") de un costo de envío */
export function textoImporteEnvio(coste: number | null): string {
  if (coste === null) return ENVIO_POR_CONFIRMAR;
  return coste === 0 ? 'Gratis' : formatEUR(coste);
}

/** Texto del envío según el método de entrega (configuración actual) */
export const textoEnvio = (entrega: DeliveryMethod): string => textoImporteEnvio(COSTE_ENVIO[entrega]);
