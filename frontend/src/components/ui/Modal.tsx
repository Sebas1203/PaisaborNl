'use client';

import { useEffect, useId } from 'react';

// Modal base y diálogo de confirmación para acciones destructivas.

export function Modal({
  abierto,
  titulo,
  onCerrar,
  children,
  ancho = 'max-w-lg',
}: {
  abierto: boolean;
  titulo: string;
  onCerrar: () => void;
  children: React.ReactNode;
  ancho?: string;
}) {
  const tituloId = useId();

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e: KeyboardEvent) => e.key === 'Escape' && onCerrar();
    window.addEventListener('keydown', alPulsar);
    return () => window.removeEventListener('keydown', alPulsar);
  }, [abierto, onCerrar]);

  if (!abierto) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-xs" onClick={onCerrar} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className={`relative w-full ${ancho} max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-xl shadow-2xl p-6 sm:p-8`}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <h2 id={tituloId} className="font-headline font-bold text-xl text-primary">
            {titulo}
          </h2>
          <button type="button" aria-label="Cerrar" onClick={onCerrar} className="text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ConfirmDialog({
  abierto,
  titulo,
  mensaje,
  textoConfirmar = 'Confirmar',
  peligro = false,
  procesando = false,
  onConfirmar,
  onCancelar,
}: {
  abierto: boolean;
  titulo: string;
  mensaje: React.ReactNode;
  textoConfirmar?: string;
  /** Pinta el botón como acción destructiva */
  peligro?: boolean;
  procesando?: boolean;
  onConfirmar: () => void;
  onCancelar: () => void;
}) {
  return (
    <Modal abierto={abierto} titulo={titulo} onCerrar={procesando ? () => {} : onCancelar} ancho="max-w-md">
      <div className="text-sm text-on-surface-variant leading-relaxed">{mensaje}</div>
      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
        <button
          type="button"
          onClick={onCancelar}
          disabled={procesando}
          className="px-5 py-2.5 rounded-lg bg-surface-container-high text-primary text-sm font-label font-semibold hover:bg-surface-container-highest transition-colors disabled:opacity-50"
        >
          Volver
        </button>
        <button
          type="button"
          onClick={onConfirmar}
          disabled={procesando}
          className={`px-5 py-2.5 rounded-lg text-sm font-label font-semibold transition-colors disabled:opacity-60 ${
            peligro ? 'bg-error text-on-error hover:opacity-90' : 'bg-primary text-on-primary hover:bg-primary-container'
          }`}
        >
          {procesando ? 'Procesando…' : textoConfirmar}
        </button>
      </div>
    </Modal>
  );
}
