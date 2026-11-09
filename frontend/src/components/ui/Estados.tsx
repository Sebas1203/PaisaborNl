// Estados de carga, vacío y error compartidos por tablas y listas (tienda y admin).

export function Skeleton({ filas = 4, className = '' }: { filas?: number; className?: string }) {
  return (
    <div aria-busy="true" aria-label="Cargando" className={`space-y-3 ${className}`}>
      {Array.from({ length: filas }, (_, i) => (
        <div key={i} className="h-14 rounded-lg bg-surface-container animate-pulse" />
      ))}
    </div>
  );
}

export function EstadoVacio({ titulo, children, icono = 'inbox' }: { titulo: string; children?: React.ReactNode; icono?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 py-12 px-6 rounded-xl bg-surface-container-low">
      <span className="material-symbols-outlined text-4xl text-outline">{icono}</span>
      <p className="font-headline font-bold text-primary">{titulo}</p>
      {children && <div className="text-sm text-on-surface-variant max-w-sm">{children}</div>}
    </div>
  );
}

export function EstadoError({ mensaje, onReintentar }: { mensaje: string; onReintentar?: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center text-center gap-3 py-10 px-6 rounded-xl bg-error-container/40">
      <span className="material-symbols-outlined text-3xl text-error">error</span>
      <p className="text-sm text-on-surface">{mensaje}</p>
      {onReintentar && (
        <button
          type="button"
          onClick={onReintentar}
          className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-label font-semibold hover:bg-primary-container transition-colors"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

/** Mensaje de error en línea para formularios */
export function AvisoError({ mensaje }: { mensaje?: string | null }) {
  if (!mensaje) return null;
  return (
    <p role="alert" className="flex items-start gap-2 text-sm text-error bg-error-container/40 rounded-lg px-3 py-2.5">
      <span className="material-symbols-outlined text-base mt-0.5">error</span>
      <span>{mensaje}</span>
    </p>
  );
}

/** Pantalla mínima mientras se resuelve la sesión */
export function PantallaCargando() {
  return (
    <div aria-busy="true" className="min-h-[60vh] flex items-center justify-center">
      <span className="material-symbols-outlined text-4xl text-secondary animate-spin">progress_activity</span>
      <span className="sr-only">Cargando…</span>
    </div>
  );
}
