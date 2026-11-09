'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

// Aviso de /catering cuando /catering/reserva-pendiente no encuentra la reserva pedida
export function AvisoCatering() {
  const aviso = useSearchParams().get('aviso');
  const [visible, setVisible] = useState(true);
  if (aviso !== 'reserva-no-encontrada' || !visible) return null;
  return (
    <div role="alert" className="fixed top-20 inset-x-4 z-50 mx-auto max-w-xl flex items-start gap-3 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed px-4 py-3 shadow-lg">
      <span className="material-symbols-outlined">search_off</span>
      <p className="text-sm flex-1">No encontramos esa reserva. Revisa el enlace o haz una nueva solicitud de catering.</p>
      <button type="button" aria-label="Cerrar aviso" onClick={() => setVisible(false)}>
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
}
