'use client';

import { ItemImage } from '@/components/ItemImage';
import { CATERING_MAX_PORCIONES } from '@/config/catering';
import { MENU, type Plato } from '@/data';
import { formatDias, formatEUR } from '@/lib/format';
import { useCatering } from '@/providers/CateringProvider';

// Selector de platos del catering: varios platos a la vez, cada uno con sus porciones.
// compacto: versión en lista para el formulario de /catering.

const PLATOS_CATERING = MENU.filter((plato) => plato.disponible);

function SelectorCantidad({ plato, cantidad }: { plato: Plato; cantidad: number }) {
  const { cambiarCantidad, quitarPlato } = useCatering();
  const boton = 'w-8 h-8 rounded-md flex items-center justify-center text-primary hover:bg-surface-container transition-colors disabled:opacity-40';
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-outline-variant/30 rounded-lg bg-surface-container-lowest p-0.5">
        <button type="button" className={boton} aria-label={`Quitar una porción de ${plato.nombre}`} disabled={cantidad <= 1} onClick={() => cambiarCantidad(plato.id, cantidad - 1)}>
          <span className="material-symbols-outlined text-base">remove</span>
        </button>
        <input
          type="number"
          min={1}
          max={CATERING_MAX_PORCIONES}
          aria-label={`Porciones de ${plato.nombre}`}
          className="w-14 text-center font-headline font-bold text-sm text-primary bg-transparent border-0 focus:ring-0 p-0"
          value={cantidad}
          onChange={(e) => cambiarCantidad(plato.id, Number(e.target.value))}
        />
        <button
          type="button"
          className={boton}
          aria-label={`Añadir una porción de ${plato.nombre}`}
          disabled={cantidad >= CATERING_MAX_PORCIONES}
          onClick={() => cambiarCantidad(plato.id, cantidad + 1)}
        >
          <span className="material-symbols-outlined text-base">add</span>
        </button>
      </div>
      <button type="button" className="p-1.5 rounded-md text-on-surface-variant hover:text-error hover:bg-error-container/40 transition-colors" aria-label={`Quitar ${plato.nombre}`} onClick={() => quitarPlato(plato.id)}>
        <span className="material-symbols-outlined text-lg">delete</span>
      </button>
    </div>
  );
}

function Etiquetas({ plato }: { plato: Plato }) {
  return (
    <>
      {plato.bajoReserva && (
        <span className="inline-flex items-center gap-1 text-[10px] font-label font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-sm">
          Fines de semana · bajo reserva{plato.dias?.length ? ` (${formatDias(plato.dias)})` : ''}
        </span>
      )}
      {plato.precioEstimado && <span className="text-[10px] font-label text-on-surface-variant">Precio estimado</span>}
    </>
  );
}

export function CateringMenuPicker({ compacto = false }: { compacto?: boolean }) {
  const { borrador, agregarPlato } = useCatering();
  const cantidadDe = (id: string) => borrador.items.find((i) => i.id === id)?.cantidad;

  if (compacto) {
    return (
      <ul className="divide-y divide-surface-container max-h-80 overflow-y-auto rounded-lg bg-surface-container-low">
        {PLATOS_CATERING.map((plato) => {
          const cantidad = cantidadDe(plato.id);
          return (
            <li key={plato.id} className="flex flex-wrap items-center gap-3 p-3">
              <ItemImage src={plato.imagen} alt={plato.nombre} className="w-12 h-12 rounded-md object-cover bg-surface-container shrink-0" />
              <div className="flex-1 min-w-[8rem]">
                <p className="text-sm font-semibold text-primary">{plato.nombre}</p>
                <p className="text-xs text-on-surface-variant">{formatEUR(plato.precio)} / persona</p>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  <Etiquetas plato={plato} />
                </div>
              </div>
              {cantidad ? (
                <SelectorCantidad plato={plato} cantidad={cantidad} />
              ) : (
                <button type="button" onClick={() => agregarPlato(plato.id)} className="px-3 py-1.5 rounded-lg bg-surface-container-high text-primary text-xs font-label font-semibold hover:bg-primary hover:text-on-primary transition-colors">
                  Agregar
                </button>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {PLATOS_CATERING.map((plato) => {
        const cantidad = cantidadDe(plato.id);
        return (
          <div
            key={plato.id}
            className={`group relative flex flex-col sm:flex-row gap-4 p-4 rounded-xl transition-all duration-200 shadow-xs border-2 ${
              cantidad ? 'bg-surface-container-lowest border-secondary shadow-md' : 'bg-surface-container-low border-transparent hover:bg-surface-container'
            }`}
          >
            <div className="w-full sm:w-32 h-28 sm:h-auto rounded-lg overflow-hidden shrink-0 relative bg-surface-container">
              <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between flex-grow gap-3">
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-headline font-bold text-base text-primary">{plato.nombre}</h3>
                  <span className="font-headline font-bold text-base text-secondary whitespace-nowrap">
                    {formatEUR(plato.precio)} <span className="text-[11px] font-normal text-on-surface-variant">/ persona</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Etiquetas plato={plato} />
                </div>
                {plato.descripcion && <p className="font-body text-xs text-on-surface-variant leading-relaxed">{plato.descripcion}</p>}
              </div>
              <div className="flex justify-end">
                {cantidad ? (
                  <SelectorCantidad plato={plato} cantidad={cantidad} />
                ) : (
                  <button
                    type="button"
                    onClick={() => agregarPlato(plato.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-primary text-xs font-label font-semibold hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">add</span> Agregar
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
