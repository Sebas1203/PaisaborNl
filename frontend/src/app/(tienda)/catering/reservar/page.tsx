// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/reservar_men_de_catering_paisabor
// y conectado al borrador de useCatering: varios platos, cada uno con sus porciones.
'use client';

import { CateringMenuPicker } from '@/components/catering/CateringMenuPicker';
import { ErrorCampo, ResumenCatering } from '@/components/catering/ResumenCatering';
import { CATERING_ANTICIPACION_HORAS, CATERING_MAX_PORCIONES, TIPOS_EVENTO } from '@/config/catering';
import { EMAIL_CONTACTO, whatsappLink } from '@/config/contact';
import { useEnviarSolicitud } from '@/features/catering/useEnviarSolicitud';
import { hoyIso, type CampoCatering } from '@/lib/catering';
import { useCatering } from '@/providers/CateringProvider';
import type { TipoEvento } from '@/services';

const inputClass =
  'w-full bg-surface-container-low text-primary font-body text-sm rounded-lg px-4 py-3 border-0 focus:outline-hidden focus:ring-2 focus:ring-secondary/30 transition-shadow aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error/60';
const labelClass = 'text-xs font-label uppercase tracking-wider font-semibold text-primary';
const FRANJAS = ['12:00', '14:00', '17:00', '19:30'];
const PRESETS = [15, 25, 40, 60];
const SUGERENCIAS = ['3 opciones vegetarianas', 'Alergia al maní'];

function Paso({ numero, titulo, extra, children }: { numero: number; titulo: string; extra?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">{numero}</span>
          <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">{titulo}</h2>
        </div>
        {extra}
      </div>
      {children}
    </section>
  );
}

export default function CateringReservarPage() {
  const { borrador, actualizar } = useCatering();
  const { errores, error, enviando, enviar } = useEnviarSolicitud();
  const manana = new Date(`${hoyIso()}T12:00:00`);
  manana.setDate(manana.getDate() + 1);
  const minFecha = manana.toISOString().slice(0, 10);

  const invalido = (campo: CampoCatering) => ({
    'aria-invalid': Boolean(errores[campo]),
    'aria-describedby': errores[campo] ? `${campo}-error` : undefined,
  });

  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-96 -left-32 w-80 h-80 rounded-full bg-tertiary-fixed/35 blur-3xl pointer-events-none -z-10"></div>
          <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label uppercase tracking-widest font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Eventos &amp; Celebraciones en Ámsterdam
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">Reservar Menú de Catering</h1>
                <p className="font-body text-base lg:text-lg text-on-surface-variant font-normal leading-relaxed">
                  Elige uno o varios platos, indica las porciones de cada uno y te enviamos el presupuesto final.
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg text-xs font-label text-on-surface-variant self-start md:self-end">
                <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                <span>Reserva mínima {CATERING_ANTICIPACION_HORAS}h antes</span>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 flex flex-col gap-10">
                <Paso numero={1} titulo="Elige tus platos" extra={<span className="text-xs font-label text-secondary font-medium">Precios por persona</span>}>
                  <CateringMenuPicker />
                  <ErrorCampo id="items-error" mensaje={errores.items} />
                </Paso>

                <Paso numero={2} titulo="Fecha & Hora del Evento">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="event-date">
                        Fecha deseada *
                      </label>
                      <input className={inputClass} id="event-date" type="date" min={minFecha} value={borrador.fecha} onChange={(e) => actualizar({ fecha: e.target.value })} {...invalido('fecha')} />
                      <ErrorCampo id="fecha-error" mensaje={errores.fecha} />
                      <span className="text-[11px] text-on-surface-variant">Se requiere confirmación mínima con {CATERING_ANTICIPACION_HORAS}h de anticipación.</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="event-time">
                        Hora aproximada
                      </label>
                      <select className={inputClass} id="event-time" value={borrador.hora} onChange={(e) => actualizar({ hora: e.target.value })}>
                        <option value="">Por confirmar</option>
                        {FRANJAS.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Paso>

                <Paso numero={3} titulo="Número de Invitados">
                  <div className="bg-surface-container-low p-5 rounded-xl space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <input
                        className={`${inputClass} sm:w-32 text-center font-headline font-bold text-xl bg-surface-container-lowest`}
                        id="guest-count"
                        type="number"
                        min={1}
                        max={CATERING_MAX_PORCIONES}
                        aria-label="Número de invitados"
                        value={borrador.invitados || ''}
                        onChange={(e) => actualizar({ invitados: Math.max(0, Math.round(Number(e.target.value)) || 0) })}
                        {...invalido('invitados')}
                      />
                      <div className="flex items-center gap-2 flex-wrap">
                        {PRESETS.map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => actualizar({ invitados: n })}
                            className={`px-3.5 py-2 text-xs font-label font-medium rounded-lg transition-all ${
                              borrador.invitados === n ? 'bg-secondary text-on-secondary shadow-xs' : 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary'
                            }`}
                          >
                            {n} pax
                          </button>
                        ))}
                      </div>
                    </div>
                    <ErrorCampo id="invitados-error" mensaje={errores.invitados} />
                  </div>
                </Paso>

                <Paso numero={4} titulo="Evento y Lugar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="event-type">
                        Tipo de evento *
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
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="city">
                        Ciudad o código postal *
                      </label>
                      <input className={inputClass} id="city" placeholder="Ej. Ámsterdam o 1012 AB" value={borrador.ciudad} onChange={(e) => actualizar({ ciudad: e.target.value })} {...invalido('ciudad')} />
                      <ErrorCampo id="ciudad-error" mensaje={errores.ciudad} />
                    </div>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">La dirección exacta y la logística de entrega se confirman con el presupuesto.</p>
                </Paso>

                <Paso numero={5} titulo="Tus Datos de Contacto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="client-name">
                        Nombre completo *
                      </label>
                      <input className={inputClass} id="client-name" autoComplete="name" value={borrador.nombre} onChange={(e) => actualizar({ nombre: e.target.value })} {...invalido('nombre')} />
                      <ErrorCampo id="nombre-error" mensaje={errores.nombre} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="client-email">
                        Correo electrónico *
                      </label>
                      <input className={inputClass} id="client-email" type="email" autoComplete="email" value={borrador.email} onChange={(e) => actualizar({ email: e.target.value })} {...invalido('email')} />
                      <ErrorCampo id="email-error" mensaje={errores.email} />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className={labelClass} htmlFor="client-phone">
                        Teléfono / WhatsApp (opcional)
                      </label>
                      <input className={inputClass} id="client-phone" type="tel" autoComplete="tel" placeholder="+31 6 …" value={borrador.telefono} onChange={(e) => actualizar({ telefono: e.target.value })} {...invalido('telefono')} />
                      <ErrorCampo id="telefono-error" mensaje={errores.telefono} />
                    </div>
                  </div>
                </Paso>

                <Paso numero={6} titulo="Observaciones & Requerimientos Especiales">
                  <textarea
                    className={`${inputClass} rounded-xl p-4 leading-relaxed`}
                    id="dietary-notes"
                    rows={4}
                    placeholder="Indícanos alergias (gluten, frutos secos, mariscos), opciones vegetarianas o cualquier detalle de tu evento…"
                    value={borrador.comentarios}
                    onChange={(e) => actualizar({ comentarios: e.target.value })}
                  />
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-on-surface-variant">
                    <span className="font-medium">Añadir:</span>
                    {SUGERENCIAS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className="bg-surface-container px-2 py-1 rounded-sm hover:bg-secondary/10 hover:text-secondary transition-colors"
                        onClick={() => actualizar({ comentarios: borrador.comentarios ? `${borrador.comentarios}\n${s}` : s })}
                      >
                        + {s}
                      </button>
                    ))}
                  </div>
                </Paso>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
                <ResumenCatering onEnviar={() => void enviar()} enviando={enviando} error={error} />
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
                  <span className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant font-semibold">¿Dudas o requerimientos a medida?</span>
                  <div className={`grid gap-2 ${EMAIL_CONTACTO ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    <a
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-primary text-xs font-label font-medium"
                      href={whatsappLink('Hola Paisabor, quiero reservar un menú de catering.')}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-base text-secondary">chat</span> Escríbenos por WhatsApp
                    </a>
                    {EMAIL_CONTACTO && (
                      <a
                        className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-primary text-xs font-label font-medium"
                        href={`mailto:${EMAIL_CONTACTO}?subject=Consulta%20Catering%20Paisabor`}
                      >
                        <span className="material-symbols-outlined text-base text-secondary">mail</span> Escribir correo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
