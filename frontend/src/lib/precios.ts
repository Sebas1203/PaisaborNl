// Cálculo único de importes de la app (carrito, checkout, pedidos y catering).
// Los precios del catálogo ya incluyen el IVA (BTW): nunca se suma IVA encima.

import { BTW_RATE } from '@/config/fiscal';

export interface LineaPrecio {
  /** Precio unitario con IVA incluido */
  precioUnit: number;
  cantidad: number;
}

export interface Totales {
  /** Suma de precioUnit × cantidad (IVA incluido) */
  subtotal: number;
  /** Base imponible: subtotal / (1 + BTW_RATE), redondeada a céntimos */
  base: number;
  /** IVA contenido: subtotal − base (así base + iva = total al céntimo) */
  iva: number;
  /** Igual al subtotal: los gastos de logística o envío van aparte y están por confirmar */
  total: number;
}

const centimos = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export function calcularTotales(lineas: LineaPrecio[]): Totales {
  const subtotal = centimos(lineas.reduce((acc, l) => acc + l.precioUnit * l.cantidad, 0));
  const base = centimos(subtotal / (1 + BTW_RATE));
  const iva = centimos(subtotal - base);
  return { subtotal, base, iva, total: subtotal };
}
