'use client';

import Link from 'next/link';
import { CateringMenuPicker } from '@/components/catering/CateringMenuPicker';
import { AvisoPorciones, ErrorCampo } from '@/components/catering/ResumenCatering';
import { AvisoError } from '@/components/ui/Estados';
import { CATERING_MAX_PORCIONES, TIPOS_EVENTO } from '@/config/catering';
import { hoyIso, type CampoCatering } from '@/lib/catering';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { useCatering } from '@/providers/CateringProvider';
import type { TipoEvento } from '@/services';
import { useEnviarSolicitud } from './useEnviarSolicitud';

// Formulario "Presupuesto inmediato" de /catering. Comparte el borrador con /catering/reservar:
// invitados, fecha, ciudad y platos se escriben una sola vez.

const inputClass =
  'w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 border-0 focus:outline-hidden focus:bg-surface-container-lowest transition-colors aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error/60';
const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2';

export function FormularioPresupuesto() {
  const { borrador, actualizar, lineas, porciones, totales, estimado } = useCatering();
  const { errores, error, enviando, enviar } = useEnviarSolicitud();
  const invalido = (campo: CampoCatering) => ({
    'aria-invalid': Boolean(errores[campo]),
    'aria-describedby': errores[campo] ? `${campo}-error` : undefined,
  });

  return (
    <div className="space-y-6" id="catering-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="event-type">
            Tipo de Evento *
          </label>
          <select className={inputClass} id="event-type" value={borrador.tipoEvento} onChange={(e) => actualizar({ tipoEvento: e.target.value as TipoEvento | '' })} {...invalido('tipoEvento')}>
            <option value="">Selecciona una opción</option>
            {TIPOS_EVENTO.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nombre}
              </option>
            ))}
          </select>
          <ErrorCampo id="tipoEvento-error" mensaje={errores.tipoEvento} />
        </div>
        <div>
          <label className={labelClass} htmlFor="guest-count">
            Número de Invitados *
          </label>
          <input
            className={inputClass}
            id="guest-count"
            type="number"
            min={1}
            max={CATERING_MAX_PORCIONES}
            placeholder="Ej. 25"
            value={borrador.invitados || ''}
            onChange={(e) => actualizar({ invitados: Math.max(0, Math.round(Number(e.target.value)) || 0) })}
            {...invalido('invitados')}
          />
          <ErrorCampo id="invitados-error" mensaje={errores.invitados} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="event-date">
            Fecha Estimada *
          </label>
          <input className={inputClass} id="event-date" type="date" min={hoyIso()} value={borrador.fecha} onChange={(e) => actualizar({ fecha: e.target.value })} {...invalido('fecha')} />
          <ErrorCampo id="fecha-error" mensaje={errores.fecha} />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            Ciudad o Código Postal en NL *
          </label>
          <input className={inputClass} id="city" placeholder="Ej. Ámsterdam o 1012 AB" value={borrador.ciudad} onChange={(e) => actualizar({ ciudad: e.target.value })} {...invalido('ciudad')} />
          <ErrorCampo id="ciudad-error" mensaje={errores.ciudad} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className={labelClass.replace(' mb-2', '')}>Platos *</span>
          <Link href="/catering/reservar" className="text-xs font-semibold text-secondary hover:underline">
            Ver más detalles y elegir platos
          </Link>
        </div>
        <CateringMenuPicker compacto />
        <ErrorCampo id="items-error" mensaje={errores.items} />
        {lineas.length > 0 && (
          <p className="text-xs text-on-surface-variant">
            {lineas.length} {lineas.length === 1 ? 'plato' : 'platos'} · {porciones} porciones ·{' '}
            <strong className="text-primary">
              {estimado ? 'Total estimado' : 'Total'} {formatEUR(totales.total)}
            </strong>{' '}
            ({IVA_INCLUIDO}, logística por confirmar)
          </p>
        )}
        <AvisoPorciones />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="client-name">
            Nombre Completo *
          </label>
          <input className={inputClass} id="client-name" autoComplete="name" value={borrador.nombre} onChange={(e) => actualizar({ nombre: e.target.value })} {...invalido('nombre')} />
          <ErrorCampo id="nombre-error" mensaje={errores.nombre} />
        </div>
        <div>
          <label className={labelClass} htmlFor="client-email">
            Email de Contacto *
          </label>
          <input className={inputClass} id="client-email" type="email" autoComplete="email" value={borrador.email} onChange={(e) => actualizar({ email: e.target.value })} {...invalido('email')} />
          <ErrorCampo id="email-error" mensaje={errores.email} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="dietary-notes">
          Comentarios &amp; Restricciones Dietéticas
        </label>
        <textarea className={inputClass} id="dietary-notes" rows={3} placeholder="Alergias, opciones vegetarianas u otros detalles del evento" value={borrador.comentarios} onChange={(e) => actualizar({ comentarios: e.target.value })} />
      </div>
      <AvisoError mensaje={error} />
      <button
        type="button"
        onClick={() => void enviar()}
        disabled={lineas.length === 0 || enviando}
        className="w-full py-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined text-lg">send</span>
        {enviando ? 'Enviando solicitud…' : 'Enviar Solicitud de Reserva'}
      </button>
    </div>
  );
}
