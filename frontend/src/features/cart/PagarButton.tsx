'use client';

import { useRouter } from 'next/navigation';
import { formatEUR } from '@/lib/format';
import { useCart } from './CartProvider';

// "Pagar" de la demo: sin pasarela real, guarda el pedido como último pedido y va a la confirmación
export function PagarButton({ className }: { className?: string }) {
  const { subtotal, lineas, checkout } = useCart();
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={lineas.length === 0}
      className={className}
      onClick={() => {
        checkout();
        router.push('/checkout/exito');
      }}
    >
      <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">lock</span>{' '}
      <span>Pagar {formatEUR(subtotal)}</span>
    </button>
  );
}
