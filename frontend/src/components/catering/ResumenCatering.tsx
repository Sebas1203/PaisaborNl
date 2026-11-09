'use client';

import { AvisoError } from '@/components/ui/Estados';
import { textoRespuesta } from '@/config/catering';
import { useCatering } from '@/providers/CateringProvider';
import { LineasCatering, TotalesCatering } from './DesgloseCatering';

// Resumen del catering (columna derecha de /catering/reservar), calculado con calcularTotales.

/** Error en línea bajo un campo de los formularios de catering */
export function ErrorCampo({ id, mensaje }: { id: string; mensaje?: string }) {
  return mensaje ? (
    <p id={id} className="text-[11px] text-error mt-1">
      {mensaje}
    </p>
  ) : null;
}

/** Aviso no bloqueante cuando las porciones no coinciden con los invitados */
export function AvisoPorciones() {
  const { borrador, porciones } = useCatering();
  if (!borrador.invitados || !porciones || porciones === borrador.invitados) return null;
  return (
    <p role="status" className="flex items-start gap-2 text-xs text-on-tertiary-fixed bg-tertiary-fixed/60 rounded-lg px-3 py-2.5">
      <span className="material-symbols-outlined text-base">info</span>
      <span>
        Tienes {borrador.invitados} invitados y {porciones} porciones seleccionadas. Revisa si es lo que necesitas.
      </span>
    </p>
  );
}

export function ResumenCatering({ onEnviar, enviando, error }: { onEnviar: () => void; enviando: boolean; error: string | null }) {
  const { lineas, totales, estimado, porciones } = useCatering();
  const sinPlatos = lineas.length === 0;

  return (
    <div className="bg-[#F7F2E9] rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/5 rounded-full pointer-events-none"></div>
      <div className="flex items-center justify-between pb-5 border-b border-outline-variant/20">
        <div className="flex flex-col">
          <span className="text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Cotización inmediata</span>
          <h3 className="font-headline text-xl font-bold text-primary">Resumen del Catering</h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xs">
          <span className="material-symbols-outlined text-secondary">receipt_long</span>
        </div>
      </div>
      <div className="py-6 space-y-4">
        {sinPlatos ? (
          <p className="text-sm text-on-surface-variant text-center py-4">Aún no has elegido platos.</p>
        ) : (
          <>
            <LineasCatering lineas={lineas.map((l) => ({ nombre: l.item.nombre, cantidad: l.cantidad, precioUnit: l.item.precio, precioEstimado: l.item.precioEstimado }))} />
            <p className="text-[11px] text-on-surface-variant font-label">
              {lineas.length} {lineas.length === 1 ? 'plato' : 'platos'} · {porciones} porciones
            </p>
            <TotalesCatering totales={totales} estimado={estimado} />
          </>
        )}
        <AvisoPorciones />
      </div>
      <div className="bg-surface-container-lowest/80 backdrop-blur-xs p-4 rounded-xl flex items-start gap-3 text-xs text-on-surface-variant leading-relaxed">
        <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">verified</span>
        <div>
          <strong className="text-primary font-medium">Revisión de disponibilidad:</strong> al enviar la solicitud revisamos la disponibilidad y la logística y te
          respondemos {textoRespuesta()}. <em>No se realiza ningún cobro en este paso.</em>
        </div>
      </div>
      <div className="mt-4">
        <AvisoError mensaje={error} />
      </div>
      <button
        type="button"
        onClick={onEnviar}
        disabled={sinPlatos || enviando}
        className="mt-4 w-full bg-primary hover:bg-primary-container text-on-primary py-4 px-6 rounded-xl font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{enviando ? 'Enviando solicitud…' : 'Solicitar Reserva de Catering'}</span>
        <span className="material-symbols-outlined text-lg">arrow_forward</span>
      </button>
    </div>
  );
}
