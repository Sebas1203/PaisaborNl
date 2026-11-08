// Fiscalidad de Paisabor: todos los precios del catálogo incluyen el IVA (BTW) neerlandés.
// Nunca se suma IVA encima del precio: la base y el IVA se calculan a partir del precio con IVA.

// TODO: confirmar con contador si bebidas y platos preparados llevan 9% o 21%.
export const BTW_RATE = 0.09;

/** Base imponible a partir de un precio con IVA incluido (precio / 1.09) */
export function baseSinIva(precioConIva: number, tasa: number = BTW_RATE): number {
  return precioConIva / (1 + tasa);
}

/** IVA contenido en un precio que ya lo incluye */
export function iva(precioConIva: number, tasa: number = BTW_RATE): number {
  return precioConIva - baseSinIva(precioConIva, tasa);
}
