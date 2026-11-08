import type { Metadata } from 'next';
import React from 'react';
import '@fontsource-variable/epilogue';
import '@fontsource-variable/epilogue/wght-italic.css';
import '@fontsource-variable/work-sans';
import '@fontsource-variable/work-sans/wght-italic.css';
import './globals.css';
import { CartProvider } from '@/features/cart/CartProvider';

const DESCRIPCION =
  'Comida colombiana en Ámsterdam: platos típicos, empanadas, fritos, bebidas y catering con receta tradicional antioqueña.';

export const metadata: Metadata = {
  // TODO: dominio definitivo de Paisabor (NEXT_PUBLIC_SITE_URL) para las URLs absolutas de Open Graph.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Paisabor — El sabor de casa',
  description: DESCRIPCION,
  icons: {
    icon: [
      // favicon.ico sale de src/app/favicon.ico (convención de Next)
      { url: '/images/logo/paisabor-logo-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo/paisabor-logo-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/images/logo/paisabor-logo-192.png', sizes: '192x192' },
  },
  openGraph: {
    title: 'Paisabor — El sabor de casa',
    description: DESCRIPCION,
    siteName: 'Paisabor',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/images/logo/paisabor-logo-1024.png', width: 1024, height: 1024, alt: 'Logo de Paisabor' }],
  },
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
