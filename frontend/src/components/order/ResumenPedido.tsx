'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ItemImage } from '@/components/ItemImage';
import { costeEnvio, textoEnvio } from '@/config/envio';
import { useCart } from '@/features/cart/CartProvider';
import { leerEntregaElegida } from '@/features/cart/datosCheckout';
import type { LineaConItem } from '@/lib/pedidos';
import type { DeliveryMethod } from '@/types';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { calcularTotales } from '@/lib/precios';

// Resumen de un pedido (líneas + totales) con la plantilla del checkout de Stitch.
// Los precios ya incluyen el IVA: la base y el IVA se calculan a partir del total, nunca se suman.
export function ResumenPedido({
  lineas,
  titulo = 'Tu Canasta',
  editable = false,
  entrega,
}: {
  lineas: LineaConItem[];
  titulo?: string;
  /** Muestra el enlace "Editar" hacia el carrito */
  editable?: boolean;
  /** Con método de entrega se muestra la línea de envío (src/config/envio.ts); sin él, no */
  entrega?: DeliveryMethod;
}) {
  const { subtotal, base, iva } = calcularTotales(lineas.map((l) => ({ precioUnit: l.item.precio, cantidad: l.cantidad })));
  const envio = entrega ? costeEnvio(entrega) : undefined;
  const total = subtotal + (envio ?? 0);
  const articulos = lineas.reduce((acc, l) => acc + l.cantidad, 0);

  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <div>
          <h2 className="text-xl font-headline font-extrabold text-primary">{titulo}</h2>
          <p className="text-xs text-on-surface-variant">
            {articulos} {articulos === 1 ? 'artículo' : 'artículos'}
          </p>
        </div>
        {editable && (
          <Link className="text-xs font-label uppercase tracking-wider text-secondary font-semibold hover:underline" href="/carrito">
            Editar
          </Link>
        )}
      </div>
      {lineas.length === 0 && <p className="text-sm text-on-surface-variant">No hay artículos.</p>}
      {lineas.map(({ item, cantidad, total: totalLinea }) => (
        <div key={item.id} className="flex items-start gap-3.5 pt-3">
          <ItemImage src={item.imagen} alt={item.nombre} className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-headline font-bold text-sm text-primary truncate">{item.nombre}</h3>
              <span className="font-headline font-bold text-sm text-primary shrink-0">{formatEUR(totalLinea)}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm font-label">
                Cant: {cantidad} × {formatEUR(item.precio)}
              </span>
              <span className="text-[10px] text-on-secondary-container bg-secondary-fixed px-1.5 py-0.5 rounded-sm font-label">
                IVA 9% incl.
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-6 space-y-2.5 bg-surface-container-lowest p-5 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-on-surface-variant">Subtotal productos</span>
          <span className="font-medium text-primary">{formatEUR(subtotal)}</span>
        </div>
        {entrega && (
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="text-on-surface-variant">Costo de envío</span>
            <span className="font-bold text-secondary text-right">{textoEnvio(entrega)}</span>
          </div>
        )}
        <div className="pt-2 pb-1 space-y-1">
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Base sin IVA</span>
            <span>{formatEUR(base)}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>IVA (9%) incluido</span>
            <span>{formatEUR(iva)}</span>
          </div>
        </div>
        <div className="pt-3 flex items-baseline justify-between">
          <div>
            <span className="block text-xs uppercase font-label tracking-widest text-on-surface-variant">Total a Pagar</span>
            <span className="text-[11px] text-on-surface-variant">{IVA_INCLUIDO}</span>
          </div>
          <span className="font-headline font-black text-2xl lg:text-3xl text-primary tracking-tight">{formatEUR(total)}</span>
        </div>
      </div>
    </>
  );
}

/**
 * Resumen del carrito actual. entrega="elegida" usa el método elegido en el carrito o el
 * checkout (sessionStorage), para pantallas que no lo tienen a mano, como /checkout/pago.
 */
export function ResumenCarrito({ entrega, ...props }: { titulo?: string; editable?: boolean; entrega?: DeliveryMethod | 'elegida' }) {
  const { lineas } = useCart();
  const [elegida, setElegida] = useState<DeliveryMethod | undefined>();
  useEffect(() => {
    if (entrega === 'elegida') setElegida(leerEntregaElegida() ?? undefined);
  }, [entrega]);
  return <ResumenPedido lineas={lineas} entrega={entrega === 'elegida' ? elegida : entrega} {...props} />;
}
