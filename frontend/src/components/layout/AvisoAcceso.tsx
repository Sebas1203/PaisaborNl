'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

// Aviso cuando el proxy o RequireRole devuelven a un cliente que intentó entrar al panel admin
export function AvisoAcceso() {
  const denegado = useSearchParams().get('acceso') === 'denegado';
  const [visible, setVisible] = useState(true);
  if (!denegado || !visible) return null;
  return (
    <div role="alert" className="fixed top-20 inset-x-4 z-50 mx-auto max-w-xl flex items-start gap-3 rounded-lg bg-error-container text-on-error-container px-4 py-3 shadow-lg">
      <span className="material-symbols-outlined">lock</span>
      <p className="text-sm flex-1">Esa sección es solo para el equipo de Paisabor. Tu cuenta no tiene acceso al panel de administración.</p>
      <button type="button" aria-label="Cerrar aviso" onClick={() => setVisible(false)}>
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
}
