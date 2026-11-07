import type { Metadata } from 'next';
import React from 'react';
import '@fontsource-variable/epilogue';
import '@fontsource-variable/epilogue/wght-italic.css';
import '@fontsource-variable/work-sans';
import '@fontsource-variable/work-sans/wght-italic.css';
import './globals.css';
import { CartProvider } from '@/features/cart/CartProvider';

export const metadata: Metadata = {
  title: 'Paisabor — El Corazón de Colombia en tu Mesa',
  description:
    'Auténticos sabores de Colombia: horneados frescos, cafés de origen, platos típicos y despensa artesanal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-surface font-body text-on-surface antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
