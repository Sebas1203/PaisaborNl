// Piezas visuales compartidas del panel admin (estilo de las pantallas de administración de Stitch).
import Link from 'next/link';

export const inputAdmin =
  'w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-3.5 py-2.5 border-0 focus:outline-hidden focus:ring-2 focus:ring-secondary/40 placeholder:text-outline aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error/60';
export const labelAdmin = 'block text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1.5';
export const botonPrimario =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-headline text-xs font-bold hover:bg-primary-container transition-colors shadow-xs disabled:opacity-60';
export const botonSecundario =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high text-primary font-headline text-xs font-bold hover:bg-surface-container-highest transition-colors disabled:opacity-60';
export const botonPeligro =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-error-container text-on-error-container font-headline text-xs font-bold hover:opacity-90 transition-opacity disabled:opacity-60';

export function PaginaAdmin({ children }: { children: React.ReactNode }) {
  return <main className="w-full bg-surface min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-8">{children}</main>;
}

export function CabeceraAdmin({
  etiqueta,
  titulo,
  descripcion,
  acciones,
}: {
  etiqueta: string;
  titulo: string;
  descripcion?: React.ReactNode;
  acciones?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-secondary">{etiqueta}</span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-primary">{titulo}</h1>
        {descripcion && <p className="font-body text-sm text-on-surface-variant mt-1 max-w-2xl">{descripcion}</p>}
      </div>
      {acciones && <div className="flex flex-wrap items-center gap-3">{acciones}</div>}
    </div>
  );
}

export function TarjetaDato({
  icono,
  etiqueta,
  valor,
  detalle,
  alerta = false,
  href,
}: {
  icono: string;
  etiqueta: string;
  valor: React.ReactNode;
  detalle?: React.ReactNode;
  alerta?: boolean;
  href?: string;
}) {
  const contenido = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{etiqueta}</span>
        <span className={`material-symbols-outlined ${alerta ? 'text-error' : 'text-secondary'}`}>{icono}</span>
      </div>
      <div className={`font-headline text-3xl font-extrabold tracking-tight ${alerta ? 'text-error' : 'text-primary'}`}>{valor}</div>
      {detalle && <div className="text-xs text-on-surface-variant">{detalle}</div>}
    </>
  );
  const clase = 'bg-surface-container-lowest rounded-xl p-5 shadow-xs flex flex-col gap-2 transition-shadow';
  return href ? (
    <Link href={href} className={`${clase} hover:shadow-md`}>
      {contenido}
    </Link>
  ) : (
    <div className={clase}>{contenido}</div>
  );
}

export function Tabla({ cabeceras, children }: { cabeceras: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-surface-container-lowest shadow-xs">
      <table className="w-full text-sm text-left">
        <thead className="bg-surface-container-low">
          <tr>
            {cabeceras.map((c) => (
              <th key={c} scope="col" className="px-4 py-3 text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant whitespace-nowrap">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container">{children}</tbody>
      </table>
    </div>
  );
}

export function Paginacion({
  pagina,
  total,
  porPagina,
  onCambiar,
}: {
  pagina: number;
  total: number;
  porPagina: number;
  onCambiar: (pagina: number) => void;
}) {
  const paginas = Math.max(1, Math.ceil(total / porPagina));
  if (total <= porPagina) return null;
  return (
    <nav aria-label="Paginación" className="flex items-center justify-between gap-3 text-xs text-on-surface-variant">
      <span>
        {(pagina - 1) * porPagina + 1}–{Math.min(pagina * porPagina, total)} de {total}
      </span>
      <div className="flex items-center gap-2">
        <button type="button" className={botonSecundario} disabled={pagina <= 1} onClick={() => onCambiar(pagina - 1)}>
          <span className="material-symbols-outlined text-base">chevron_left</span> Anterior
        </button>
        <span className="font-semibold text-primary">
          {pagina} / {paginas}
        </span>
        <button type="button" className={botonSecundario} disabled={pagina >= paginas} onClick={() => onCambiar(pagina + 1)}>
          Siguiente <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </nav>
  );
}

/** Mensaje de éxito breve tras guardar */
export function AvisoExito({ mensaje }: { mensaje?: string | null }) {
  if (!mensaje) return null;
  return (
    <p role="status" className="flex items-center gap-2 text-sm text-primary bg-tertiary-fixed/40 rounded-lg px-3 py-2.5">
      <span className="material-symbols-outlined text-base text-secondary">check_circle</span>
      {mensaje}
    </p>
  );
}
