'use client';

import { useEffect } from 'react';
import { useCart } from './CartProvider';

// En la demo, llegar a "pago exitoso" cierra el pedido: la canasta queda vacía
export function ClearCartOnMount() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
    // solo al entrar en la página
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
