'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';

const LOGO = '/images/logo/paisabor-logo-192.png';

// Foto de un ítem del catálogo. Si la foto no existe o falla, muestra un placeholder de marca,
// así ninguna pantalla se rompe mientras faltan fotos.
export function ItemImage({ src, alt, className = '' }: { src?: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // si la imagen falló antes de hidratar, onError no se dispara
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex flex-col items-center justify-center gap-2 overflow-hidden bg-[#fcf9f4] p-3 text-center`}
      >
        <img src={LOGO} alt="" className="h-auto w-1/3 max-w-24 object-contain opacity-20" />
        <span className="font-label text-xs text-on-surface-variant">{alt}</span>
      </div>
    );
  }

  return <img ref={ref} src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
