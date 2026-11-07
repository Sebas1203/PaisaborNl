import type { Metadata } from 'next';
import React from 'react';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paisabor — El Corazón de Colombia en tu Mesa',
  description:
    'Auténticos sabores de Colombia: horneados frescos, cafés de origen, platos típicos y despensa artesanal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full bg-[#fcf9f4]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full antialiased text-[#1c1c19] selection:bg-[#994621]/20">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
