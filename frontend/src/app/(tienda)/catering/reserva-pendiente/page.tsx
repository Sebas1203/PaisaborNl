// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/reserva_pendiente_de_confirmaci_n_paisabor
// y conectado a reservasService: muestra solo los datos reales de la reserva ?id=.
'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { LineasCatering, TotalesCatering } from '@/components/catering/DesgloseCatering';
import { EstadoError, PantallaCargando } from '@/components/ui/Estados';
import { textoRespuesta } from '@/config/catering';
import { TEL_URL, whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { useCarga } from '@/hooks/useCarga';
import { formatFechaEvento } from '@/lib/catering';
import { TIPO_EVENTO_LABELS } from '@/lib/format';
import { reservasService, type Reserva } from '@/services';

// TODO: confirmar con Diana qué servicios incluye el catering; hasta entonces textos neutros.
const PASOS = [
  { icono: 'check', titulo: 'Solicitud recibida', texto: 'Hemos registrado tu solicitud con los platos y las porciones que elegiste.', estado: 'hecho' },
  { icono: 'fact_check', titulo: 'Revisión de disponibilidad y logística', texto: `Revisamos la fecha, las cantidades y la logística y te respondemos ${textoRespuesta()}.`, estado: 'actual' },
  { icono: 'request_quote', titulo: 'Presupuesto final y confirmación', texto: 'Te enviamos el presupuesto final con la logística incluida. Si estás de acuerdo, confirmamos la reserva.', estado: 'pendiente' },
  { icono: 'restaurant', titulo: 'Preparación y entrega', texto: 'Preparamos tu pedido con receta tradicional antioqueña para la fecha acordada.', estado: 'pendiente' },
] as const;

function BotonCopiar({ codigo }: { codigo: string }) {
  const [copiado, setCopiado] = useState(false);
  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo);
    } catch {
      // Sin permiso de portapapeles: se selecciona el código para copiarlo a mano
      const el = document.getElementById('booking-code');
      if (el) window.getSelection()?.selectAllChildren(el);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }
  return (
    <button
      type="button"
      onClick={() => void copiar()}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-surface-container text-primary hover:bg-surface-container-high transition-colors text-xs font-label font-medium"
    >
      <span className="material-symbols-outlined text-sm">{copiado ? 'check' : 'content_copy'}</span>
      <span aria-live="polite">{copiado ? 'Copiado' : 'Copiar'}</span>
    </button>
  );
}

function Dato({ icono, etiqueta, valor, detalle }: { icono: string; etiqueta: string; valor: React.ReactNode; detalle?: React.ReactNode }) {
  return (
    <div className="bg-surface-container-low/70 p-4 rounded-lg flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-secondary text-xl">{icono}</span>
      </div>
      <div className="min-w-0">
        <span className="text-[11px] uppercase font-label tracking-wider text-outline block">{etiqueta}</span>
        <span className="text-sm font-headline font-bold text-primary block mt-0.5 first-letter:uppercase">{valor}</span>
        {detalle && <span className="text-xs font-body text-on-surface-variant block">{detalle}</span>}
      </div>
    </div>
  );
}

function Confirmacion({ reserva }: { reserva: Reserva }) {
  const estimado = reserva.items.some((i) => i.precioEstimado);
  return (
    <div className="relative max-w-3xl mx-auto w-full space-y-8 sm:space-y-10">
      <section className="text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-label font-bold tracking-wider uppercase mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Solicitud en revisión
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary-fixed-dim/30 flex items-center justify-center mb-6 shadow-[0_20px_40px_-15px_rgba(153,70,33,0.25)]">
          <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            hourglass_top
          </span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">¡Solicitud de Reserva Recibida!</h1>
        <p className="mt-3 text-sm sm:text-base text-on-surface-variant max-w-xl font-body leading-relaxed">
          Tu reserva de catering está registrada con estado: <span className="font-medium text-secondary">Reserva pendiente de confirmación</span>.
        </p>
        <div className="mt-6 inline-flex flex-wrap sm:flex-nowrap items-center gap-3 bg-surface-container-lowest px-4 py-2.5 rounded-lg shadow-xs border border-outline-variant/15">
          <span className="text-xs uppercase font-label tracking-widest text-outline">Código de Reserva</span>
          <span className="font-headline text-lg sm:text-xl font-bold tracking-wider text-primary" id="booking-code">
            {reserva.codigo}
          </span>
          <BotonCopiar codigo={reserva.codigo} />
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-[0_25px_50px_-20px_rgba(51,33,13,0.08)] overflow-hidden">
        <div className="bg-surface-container-low px-6 sm:px-8 py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">restaurant_menu</span>
          <span className="font-headline text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">Platos solicitados</span>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <LineasCatering variante="tabla" lineas={reserva.items.map((i) => ({ nombre: i.nombre, cantidad: i.cantidad, precioUnit: i.precioUnit, precioEstimado: i.precioEstimado }))} />
          <div className="bg-surface-container-low p-5 rounded-lg space-y-2">
            <span className="text-xs font-label text-outline uppercase tracking-wider">Presupuesto estimado</span>
            <TotalesCatering totales={reserva} estimado={estimado} />
            <p className="pt-2 text-[11px] text-outline font-label">*Sujeto a confirmación tras revisión de disponibilidad y logística. No se realiza ningún cobro en este paso.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Dato icono="event" etiqueta="Fecha & hora" valor={formatFechaEvento(reserva.fecha)} detalle={reserva.hora ? `${reserva.hora} h` : 'Hora por confirmar'} />
            <Dato icono="location_on" etiqueta="Lugar del evento" valor={reserva.ciudad} detalle="Dirección exacta y logística por confirmar" />
            <Dato icono="group" etiqueta="Invitados" valor={`${reserva.invitados} invitados`} />
            <Dato icono="celebration" etiqueta="Tipo de evento" valor={TIPO_EVENTO_LABELS[reserva.tipoEvento]} />
          </div>
          {reserva.comentarios && (
            <div className="bg-surface p-4 rounded-lg flex items-start gap-3.5">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">note_alt</span>
              <div className="space-y-1">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">Observaciones registradas</span>
                <p className="text-xs sm:text-sm text-on-surface-variant whitespace-pre-line">{reserva.comentarios}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-surface-container-low rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block">Hoja de ruta</span>
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary mt-1">¿Qué sucede a continuación?</h2>
          </div>
          <span className="text-xs text-outline font-label">Respuesta {textoRespuesta()}</span>
        </div>
        <ol className="space-y-6">
          {PASOS.map((paso, i) => (
            <li key={paso.titulo} className="flex items-start gap-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md shrink-0 ${
                  paso.estado === 'hecho' ? 'bg-secondary text-on-secondary' : paso.estado === 'actual' ? 'bg-primary text-on-primary ring-4 ring-secondary/20' : 'bg-surface-container-high text-outline shadow-none'
                }`}
              >
                <span className="material-symbols-outlined text-base">{paso.icono}</span>
              </div>
              <div>
                <span className={`font-headline text-sm sm:text-base font-bold ${paso.estado === 'pendiente' ? 'text-on-surface-variant' : 'text-primary'}`}>
                  {i + 1}. {paso.titulo}
                </span>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1">{paso.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
        <Link className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all font-label font-semibold text-sm shadow-md" href="/catering">
          <span className="material-symbols-outlined text-lg">restaurant_menu</span> Volver al catering
        </Link>
        <Link className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all font-label font-medium text-sm" href="/catalogo">
          <span className="material-symbols-outlined text-lg">storefront</span> Ir a la tienda
        </Link>
      </section>

      <section className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 border border-outline-variant/15">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 mx-auto sm:mx-0">
            <span className="material-symbols-outlined text-secondary text-2xl">support_agent</span>
          </div>
          <div>
            <h3 className="font-headline text-sm sm:text-base font-bold text-primary">¿Dudas sobre tu solicitud?</h3>
            <p className="text-xs text-on-surface-variant mt-0.5">Escríbenos indicando el código {reserva.codigo}.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
          <a className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors text-xs font-label font-semibold" href={TEL_URL}>
            <span className="material-symbols-outlined text-base text-secondary">phone</span> {WHATSAPP_DISPLAY}
          </a>
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors text-xs font-label font-semibold shadow-xs"
            href={whatsappLink(`Hola Paisabor, tengo una consulta sobre mi reserva ${reserva.codigo}`)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-base">chat</span> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

function ReservaPendiente() {
  const id = useSearchParams().get('id');
  const router = useRouter();
  const { datos: reserva, error, cargando, recargar } = useCarga(() => (id ? reservasService.obtener(id) : Promise.resolve(null)), [id]);

  // Sin id o con un id que no existe, vuelve al catering con un aviso
  useEffect(() => {
    if (!cargando && !error && !reserva) router.replace('/catering?aviso=reserva-no-encontrada');
  }, [cargando, error, reserva, router]);

  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="relative w-full overflow-hidden py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-linear-to-b from-secondary/10 via-tertiary-fixed/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          {error ? (
            <div className="max-w-xl mx-auto">
              <EstadoError mensaje={error} onReintentar={recargar} />
            </div>
          ) : reserva ? (
            <Confirmacion reserva={reserva} />
          ) : (
            <PantallaCargando />
          )}
        </div>
      </main>
    </div>
  );
}

export default function CateringReservaPendientePage() {
  return (
    <Suspense fallback={<PantallaCargando />}>
      <ReservaPendiente />
    </Suspense>
  );
}
