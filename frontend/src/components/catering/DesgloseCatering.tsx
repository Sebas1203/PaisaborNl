import { formatEUR, IVA_INCLUIDO } from '@/lib/format';
import type { Totales } from '@/lib/precios';

// Desglose del presupuesto de catering. Lo usan el resumen de /catering/reservar, la confirmación
// y el detalle del admin, para que los tres muestren exactamente los mismos números.

export interface LineaDesglose {
  nombre: string;
  cantidad: number;
  precioUnit: number;
  precioEstimado?: boolean;
}

export function LineasCatering({ lineas, variante = 'resumen' }: { lineas: LineaDesglose[]; variante?: 'resumen' | 'tabla' }) {
  if (variante === 'tabla') {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant">
              <th scope="col" className="py-2 pr-3 font-semibold">Plato</th>
              <th scope="col" className="py-2 px-3 font-semibold text-right">Porciones</th>
              <th scope="col" className="py-2 px-3 font-semibold text-right whitespace-nowrap">Precio unit.</th>
              <th scope="col" className="py-2 pl-3 font-semibold text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/15">
            {lineas.map((l) => (
              <tr key={l.nombre}>
                <td className="py-2.5 pr-3 text-primary font-medium">
                  {l.nombre}
                  {l.precioEstimado && <span className="block text-[10px] text-secondary">Precio estimado</span>}
                </td>
                <td className="py-2.5 px-3 text-right">{l.cantidad}</td>
                <td className="py-2.5 px-3 text-right whitespace-nowrap">{formatEUR(l.precioUnit)}</td>
                <td className="py-2.5 pl-3 text-right font-semibold text-primary whitespace-nowrap">{formatEUR(l.precioUnit * l.cantidad)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <ul className="space-y-3">
      {lineas.map((l) => (
        <li key={l.nombre} className="flex items-start justify-between gap-3 pb-3 border-b border-outline-variant/15 text-xs">
          <div className="min-w-0">
            <p className="font-semibold text-primary truncate">{l.nombre}</p>
            <p className="text-[11px] text-on-surface-variant font-label">
              {l.cantidad} × {formatEUR(l.precioUnit)}
              {l.precioEstimado && <span className="text-secondary"> · Precio estimado</span>}
            </p>
          </div>
          <span className="font-headline font-semibold text-primary whitespace-nowrap">{formatEUR(l.precioUnit * l.cantidad)}</span>
        </li>
      ))}
    </ul>
  );
}

export function TotalesCatering({ totales, estimado }: { totales: Totales; estimado: boolean }) {
  const fila = 'flex items-center justify-between';
  return (
    <div className="space-y-2 text-xs">
      <div className={`${fila} text-on-surface-variant`}>
        <span>Subtotal platos:</span>
        <span className="font-medium text-primary">{formatEUR(totales.subtotal)}</span>
      </div>
      <div className={`${fila} text-on-surface-variant`}>
        <span>Logística y transporte:</span>
        <span className="font-medium text-primary">Por confirmar</span>
      </div>
      <div className={`${fila} text-[11px] text-on-surface-variant`}>
        <span>Base sin IVA:</span>
        <span>{formatEUR(totales.base)}</span>
      </div>
      <div className={`${fila} text-[11px] text-on-surface-variant`}>
        <span>IVA (9%) incluido:</span>
        <span>{formatEUR(totales.iva)}</span>
      </div>
      <div className="pt-4 mt-2 border-t border-outline-variant/20 flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wider font-label font-bold text-primary">Total estimado</span>
          <span className="text-[10px] text-on-surface-variant">
            {IVA_INCLUIDO}
            {estimado ? ' · incluye precios estimados' : ''}
          </span>
        </div>
        <span className="font-headline text-3xl font-extrabold text-secondary tracking-tight">{formatEUR(totales.total)}</span>
      </div>
    </div>
  );
}
