'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error('useCart debe usarse dentro de <CartProvider>');
  }
  return cart;
}

// Carrito de la demo: vive en memoria y se pierde al recargar la página
export function CartProvider({
  children,
  initialItems = [],
}: {
  children: React.ReactNode;
  initialItems?: CartItem[];
}) {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (product: Product, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((item) => item.productId === product.id);
        if (existing) {
          return prev.map((item) =>
            item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            image: product.image,
            quantity,
          },
        ];
      });
    };

    const updateQuantity = (productId: string, delta: number) => {
      setItems((prev) =>
        prev
          .map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + delta } : item
          )
          .filter((item) => item.quantity > 0)
      );
    };

    const removeItem = (productId: string) => {
      setItems((prev) => prev.filter((item) => item.productId !== productId));
    };

    return {
      items,
      count: items.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      addItem,
      updateQuantity,
      removeItem,
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
