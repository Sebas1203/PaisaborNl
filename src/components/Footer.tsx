import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f3ee] border-t border-[#e5e2dd] mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <BrandLogo variant="wordmark" className="text-2xl text-[#33210d]" />
            <p className="font-['Work_Sans'] text-sm text-[#4e453d] max-w-md leading-relaxed">
              © 2024 Paisabor Heritage Kitchen. El Corazón de Colombia en tu Mesa. Horneados tradicionales y café de especialidad.
            </p>
          </div>

          {/* Quick Legal & Contact Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-['Work_Sans'] text-sm text-[#4e453d]">
            <a
              href="#privacidad"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#994621] transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#terminos"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#994621] transition-colors"
            >
              Términos
            </a>
            <a
              href="#envios"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#994621] transition-colors"
            >
              Envíos & Devoluciones
            </a>
            <a
              href="#contacto"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#994621] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
