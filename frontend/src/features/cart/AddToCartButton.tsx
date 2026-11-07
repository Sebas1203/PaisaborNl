'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { getProduct } from '@/data/products';
import { useCart } from './CartProvider';

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  productId: string;
  /** Si se indica, después de añadir lleva a esa ruta (p. ej. /carrito) */
  href?: string;
};

// Botón del diseño que añade un producto al carrito
export function AddToCartButton({ productId, href, type = 'button', ...props }: Props) {
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <button
      type={type}
      {...props}
      onClick={() => {
        addItem(getProduct(productId));
        if (href) router.push(href);
      }}
    />
  );
}
