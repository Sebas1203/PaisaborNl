import React, { Suspense } from 'react';
import { AvisoAcceso } from '@/components/layout/AvisoAcceso';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Pantallas de cliente: comparten el Navbar y el Footer del catálogo
export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <AvisoAcceso />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
