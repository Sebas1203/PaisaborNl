'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  /** id del ítem del catálogo */
  itemId: string;
  /** Si se indica, después de añadir lleva a esa ruta (p. ej. /carrito) */
  href?: string;
};

// Botón del diseño que añade un ítem del catálogo al carrito
export function AddToCartButton({ itemId, href, type = 'button', ...props }: Props) {
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <button
      type={type}
      {...props}
      onClick={() => {
        addItem(itemId);
        if (href) router.push(href);
      }}
    />
  );
}
