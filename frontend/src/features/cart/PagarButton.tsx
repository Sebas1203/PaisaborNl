'use client';

import { useRouter } from 'next/navigation';
import { formatEUR } from '@/lib/format';
import { useCart } from './CartProvider';
import { leerDatosCheckout } from './datosCheckout';

// "Pagar" de la demo: sin pasarela real (TODO: Mollie). Guarda el carrito como pedido por
// confirmar y va a /checkout/exito, que crea el pedido. Sin datos de entrega vuelve al checkout.
export function PagarButton({ className }: { className?: string }) {
  const { subtotal, lineas, checkout } = useCart();
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={lineas.length === 0}
      className={className}
      onClick={() => {
        if (!leerDatosCheckout()) {
          router.push('/checkout');
          return;
        }
        checkout();
        router.push('/checkout/exito');
      }}
    >
      <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">lock</span>{' '}
      <span>Pagar {formatEUR(subtotal)}</span>
    </button>
  );
}
