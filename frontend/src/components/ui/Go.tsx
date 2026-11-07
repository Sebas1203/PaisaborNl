'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type GoProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  href: string;
  /** Acción opcional antes de navegar (p. ej. añadir al carrito) */
  onGo?: () => void;
};

// Botón del diseño que lleva al siguiente paso del flujo
export function Go({ href, onGo, type = 'button', ...props }: GoProps) {
  const router = useRouter();

  return (
    <button
      type={type}
      {...props}
      onClick={() => {
        onGo?.();
        router.push(href);
      }}
    />
  );
}
