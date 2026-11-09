'use client';

import { useMemo, useState } from 'react';
import { LineasCatering, TotalesCatering } from '@/components/catering/DesgloseCatering';
import { AvisoError, EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { ConfirmDialog } from '@/components/ui/Modal';
import { useCarga } from '@/hooks/useCarga';
import { formatFechaEvento } from '@/lib/catering';
import { formatEUR, formatFecha, formatFechaHora, RESERVATION_STATUS_LABELS, TIPO_EVENTO_LABELS } from '@/lib/format';
import { mensajeDeError, reservasService, type Reserva, type ReservationStatus } from '@/services';
import { TRANSICIONES_RESERVA } from '@/services/reservas';
import { botonPeligro, botonPrimario, botonSecundario, inputAdmin, Tabla } from './ui';

// Lista de reservas de catering con detalle (platos, porciones y desglose de IVA) y acciones
// (confirmar, marcar realizada, cancelar). La usan /admin/reservas y /admin/menus-reservas.

const COLORES: Record<ReservationStatus, string> = {
  pendiente: 'bg-tertiary-fixed text-on-tertiary-fixed',
  confirmada: 'bg-secondary-fixed text-on-secondary-fixed',
  realizada: 'bg-surface-container-highest text-primary',
  cancelada: 'bg-error-container text-on-error-container',
};

export function EstadoReservaBadge({ estado }: { estado: ReservationStatus }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-label font-semibold whitespace-nowrap ${COLORES[estado]}`}>
      {RESERVATION_STATUS_LABELS[estado]}
    </span>
  );
}

const ESTADOS = Object.keys(RESERVATION_STATUS_LABELS) as ReservationStatus[];
const porciones = (r: Reserva) => r.items.reduce((acc, i) => acc + i.cantidad, 0);

function DetalleReserva({ reserva, onActualizada, onCerrar }: { reserva: Reserva; onActualizada: (r: Reserva) => void; onCerrar: () => void }) {
  const [procesando, setProcesando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmarCancelar, setConfirmarCancelar] = useState(false);
  const posibles = TRANSICIONES_RESERVA[reserva.estado];

  async function cambiar(estado: ReservationStatus) {
    setProcesando(true);
    setError(null);
    try {
      onActualizada(await reservasService.cambiarEstado(reserva.id, estado));
    } catch (e) {
      setError(mensajeDeError(e));
    } finally {
      setProcesando(false);
      setConfirmarCancelar(false);
    }
  }

  const dato = (etiqueta: string, valor: React.ReactNode) => (
    <div className="bg-surface-container-low rounded-lg p-3">
      <p className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{etiqueta}</p>
      <div className="text-sm text-primary font-semibold mt-0.5 first-letter:uppercase">{valor}</div>
    </div>
  );

  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-xs p-5 sm:p-6 space-y-5">
      <header className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">Reserva de catering</span>
          <h2 className="font-headline text-2xl font-bold text-primary">{reserva.codigo}</h2>
          <EstadoReservaBadge estado={reserva.estado} />
        </div>
        <button type="button" aria-label="Cerrar detalle" onClick={onCerrar} className="text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>
      <div className="grid grid-cols-2 gap-3">
        {dato('Fecha del evento', formatFechaEvento(reserva.fecha))}
        {dato('Hora', reserva.hora ? `${reserva.hora} h` : 'Por confirmar')}
        {dato('Invitados', `${reserva.invitados} (${porciones(reserva)} porciones)`)}
        {dato('Tipo de evento', TIPO_EVENTO_LABELS[reserva.tipoEvento])}
        {dato('Lugar', reserva.ciudad)}
      </div>
      <section className="bg-surface-container rounded-xl p-4 space-y-4">
        <LineasCatering variante="tabla" lineas={reserva.items} />
        <TotalesCatering totales={reserva} estimado={reserva.items.some((i) => i.precioEstimado)} />
      </section>
      <div className="bg-surface-container-low rounded-lg p-3 text-sm space-y-0.5">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">Contacto</p>
        <p className="font-semibold text-primary">{reserva.nombre}</p>
        <p className="text-xs text-on-surface-variant break-all">{reserva.email}</p>
        {reserva.telefono && <p className="text-xs text-on-surface-variant">{reserva.telefono}</p>}
      </div>
      {reserva.comentarios && <p className="text-sm text-secondary italic whitespace-pre-line">“{reserva.comentarios}”</p>}
      <p className="text-xs text-on-surface-variant">Solicitada el {formatFechaHora(reserva.creada)}</p>
      <AvisoError mensaje={error} />
      {posibles.length === 0 ? (
        <p className="text-sm text-on-surface-variant">Esta reserva ya no admite cambios.</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {posibles.includes('confirmada') && (
            <button type="button" className={botonPrimario} disabled={procesando} onClick={() => void cambiar('confirmada')}>
              <span className="material-symbols-outlined text-base">check_circle</span> Confirmar
            </button>
          )}
          {posibles.includes('realizada') && (
            <button type="button" className={botonSecundario} disabled={procesando} onClick={() => void cambiar('realizada')}>
              <span className="material-symbols-outlined text-base">task_alt</span> Marcar realizada
            </button>
          )}
          {posibles.includes('cancelada') && (
            <button type="button" className={botonPeligro} disabled={procesando} onClick={() => setConfirmarCancelar(true)}>
              <span className="material-symbols-outlined text-base">cancel</span> Cancelar
            </button>
          )}
        </div>
      )}
      <ConfirmDialog
        abierto={confirmarCancelar}
        titulo={`¿Cancelar la reserva ${reserva.codigo}?`}
        mensaje="La reserva pasará a «Cancelada» y no se podrá reactivar. Avisa al cliente por su contacto."
        textoConfirmar="Sí, cancelar reserva"
        peligro
        procesando={procesando}
        onConfirmar={() => void cambiar('cancelada')}
        onCancelar={() => setConfirmarCancelar(false)}
      />
    </article>
  );
}

// En pantallas sin espacio para el panel lateral, al elegir una fila se baja hasta el detalle
const irAlPanel = (el: HTMLElement | null) => {
  if (el && window.innerWidth < 1536) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function GestionReservas() {
  const [estado, setEstado] = useState<ReservationStatus | 'todas'>('todas');
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const { datos: reservas, setDatos, error, cargando, recargar } = useCarga(() => reservasService.listar(), []);
  const filtradas = useMemo(() => (reservas ?? []).filter((r) => estado === 'todas' || r.estado === estado), [reservas, estado]);
  const seleccionada = reservas?.find((r) => r.id === seleccion);

  const actualizar = (r: Reserva) => setDatos((lista) => lista?.map((x) => (x.id === r.id ? r : x)) ?? null);

  return (
    <div className="space-y-4">
      <select aria-label="Filtrar reservas por estado" className={`${inputAdmin} max-w-xs`} value={estado} onChange={(e) => setEstado(e.target.value as ReservationStatus | 'todas')}>
        <option value="todas">Todos los estados</option>
        {ESTADOS.map((e) => (
          <option key={e} value={e}>
            {RESERVATION_STATUS_LABELS[e]}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 items-start">
        <section className={seleccionada ? '2xl:col-span-7' : '2xl:col-span-12'}>
          {cargando ? (
            <Skeleton filas={4} />
          ) : error ? (
            <EstadoError mensaje={error} onReintentar={recargar} />
          ) : !reservas?.length ? (
            <EstadoVacio titulo="Aún no hay reservas de catering" icono="event_available" />
          ) : filtradas.length === 0 ? (
            <EstadoVacio titulo="Ninguna reserva con ese estado" icono="filter_alt_off" />
          ) : (
            <Tabla cabeceras={['Código', 'Evento', 'Platos', 'Invitados', 'Contacto', 'Total', 'Estado']}>
              {filtradas.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => setSeleccion(r.id)}
                  className={`cursor-pointer transition-colors ${r.id === seleccion ? 'bg-secondary-fixed/40' : 'hover:bg-surface-container-low/60'}`}
                >
                  <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">
                    <button type="button" className="hover:text-secondary" onClick={() => setSeleccion(r.id)}>
                      {r.codigo}
                    </button>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {formatFecha(r.fecha)}
                    <span className="block text-[11px] text-on-surface-variant">{TIPO_EVENTO_LABELS[r.tipoEvento]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="block max-w-[14rem] truncate">{r.items.map((i) => `${i.nombre} ×${i.cantidad}`).join(', ')}</span>
                    <span className="block text-[11px] text-on-surface-variant">
                      {r.items.length} {r.items.length === 1 ? 'plato' : 'platos'} · {porciones(r)} porciones
                    </span>
                  </td>
                  <td className="px-4 py-3">{r.invitados}</td>
                  <td className="px-4 py-3">{r.nombre}</td>
                  <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{formatEUR(r.total)}</td>
                  <td className="px-4 py-3">
                    <EstadoReservaBadge estado={r.estado} />
                  </td>
                </tr>
              ))}
            </Tabla>
          )}
        </section>
        {seleccionada && (
          <aside key={seleccionada.id} ref={irAlPanel} className="2xl:col-span-5 2xl:sticky 2xl:top-24 scroll-mt-24">
            <DetalleReserva reserva={seleccionada} onActualizada={actualizar} onCerrar={() => setSeleccion(null)} />
          </aside>
        )}
      </div>
    </div>
  );
}
