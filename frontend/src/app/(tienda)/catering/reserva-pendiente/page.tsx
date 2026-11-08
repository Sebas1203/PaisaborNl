// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/reserva_pendiente_de_confirmaci_n_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { BTW_ALIMENTOS, itemPorId } from '@/data';
import { RESERVAS } from '@/data/mock';
import { formatEUR, formatFecha } from '@/lib/format';

// MOCK: muestra la primera reserva de ejemplo con su especial del catálogo
const RESERVA = RESERVAS[0];
const PLATO = itemPorId(RESERVA.platoId)!;
const TOTAL = PLATO.precio * RESERVA.porciones;

export default function CateringReservaPendientePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-linear-to-b from-secondary/10 via-tertiary-fixed/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative max-w-3xl mx-auto w-full space-y-8 sm:space-y-10">
              <section className="text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-label font-bold tracking-wider uppercase mb-6 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  {' '}Solicitud en Revisión de Chef
                </div>
                <div className="relative mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary-fixed-dim/30 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(153,70,33,0.25)]">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/15 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        hourglass_top
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-secondary text-base font-bold">
                      outdoor_grill
                    </span>
                  </div>
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                  ¡Solicitud de Reserva Recibida!
                </h1>
                <p className="mt-3 text-sm sm:text-base text-on-surface-variant max-w-xl font-body leading-relaxed">
                  Tu reserva para evento de catering está registrada con estado:{' '}
                  <span className="font-medium text-secondary inline-block">
                    Reserva pendiente de confirmación
                  </span>
                  .
                </p>
                <div className="mt-6 inline-flex flex-wrap sm:flex-nowrap items-center gap-3 bg-surface-container-lowest px-4 py-2.5 rounded-lg shadow-xs border border-outline-variant/15">
                  <span className="text-xs uppercase font-label tracking-widest text-outline">
                    Código de Reserva
                  </span>
                  {' '}
                  <span className="font-headline text-lg sm:text-xl font-bold tracking-wider text-primary" id="booking-code">
                    #{RESERVA.id}
                  </span>
                  {' '}
                  <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-surface-container text-primary hover:bg-surface-container-high transition-colors text-xs font-label font-medium" id="copy-btn" type="button">
                    <span className="material-symbols-outlined text-sm">
                      content_copy
                    </span>
                    {' '}
                    <span id="copy-label">
                      Copiar
                    </span>
                  </button>
                </div>
              </section>
              <section className="bg-surface-container-lowest rounded-xl shadow-[0_25px_50px_-20px_rgba(51,33,13,0.08)] overflow-hidden">
                <div className="bg-surface-container-low px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      restaurant_menu
                    </span>
                    {' '}
                    <span className="font-headline text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Especificaciones del Banquete
                    </span>
                  </div>
                  <span className="text-xs font-label text-outline bg-surface px-2.5 py-1 rounded-sm">
                    Ámsterdam Central Delivery
                  </span>
                </div>
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-8 space-y-2">
                      <span className="text-xs uppercase font-label tracking-widest text-outline">
                        Menú Seleccionado
                      </span>
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h2 className="font-headline text-2xl font-bold text-primary">
                          {PLATO.nombre}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-label font-semibold">
                          {RESERVA.porciones} porciones
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {PLATO.descripcion}
                      </p>
                    </div>
                    <div className="md:col-span-4 bg-surface-container-low p-4 rounded-lg flex flex-col justify-between self-stretch">
                      <span className="text-xs font-label text-outline uppercase tracking-wider">
                        Presupuesto Estimado
                      </span>
                      <div className="mt-2">
                        <div className="text-2xl sm:text-3xl font-headline font-extrabold text-primary">
                          {formatEUR(TOTAL)}
                        </div>
                        <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                          <span className="material-symbols-outlined text-xs text-secondary">
                            check_circle
                          </span>
                          {' '}
                          <span>
                            IVA 9% incluido ({formatEUR(TOTAL - TOTAL / (1 + BTW_ALIMENTOS))})
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 text-[11px] text-outline font-label">
                        *Sujeto a confirmación tras revisión de vajilla y logística
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-surface-container-low/70 p-4 rounded-lg flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">
                          event
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase font-label tracking-wider text-outline block">
                          Fecha &amp; Horario
                        </span>
                        {' '}
                        <span className="text-sm font-headline font-bold text-primary block mt-0.5">
                          {formatFecha(RESERVA.fecha)}
                        </span>
                        {' '}
                        <span className="text-xs font-body text-on-surface-variant">
                          14:00 CET (Servicio de mediodía)
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/70 p-4 rounded-lg flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">
                          local_shipping
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] uppercase font-label tracking-wider text-outline block">
                          Modalidad &amp; Dirección
                        </span>
                        {' '}
                        <span className="text-sm font-headline font-bold text-primary block mt-0.5 truncate">
                          Entrega con menaje térmico
                        </span>
                        {' '}
                        <span className="text-xs font-body text-on-surface-variant block truncate">
                          Keizersgracht 421, Ámsterdam
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface p-4 rounded-lg flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                      note_alt
                    </span>
                    <div className="space-y-1">
                      <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
                        Observaciones Registradas
                      </span>
                      <p className="text-xs sm:text-sm text-on-surface-variant italic">
                        “Incluir opción vegetariana para 4 invitados sin carne de cerdo.”
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="px-2 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-semibold font-label">
                          Adaptación Cocina: Frijol vegetariano + Tofu al ahumado criollo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-surface-container-low rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary block">
                      Hoja de Ruta
                    </span>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary mt-1">
                      ¿Qué sucede a continuación?
                    </h3>
                  </div>
                  <span className="text-xs text-outline font-label">
                    Respuesta garantizada en &lt;24 horas
                  </span>
                </div>
                <div className="relative mt-6 space-y-6 sm:space-y-8">
                  <div className="relative flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md font-bold text-xs shrink-0 z-10">
                        <span className="material-symbols-outlined text-base">
                          check
                        </span>
                      </div>
                      <div className="w-0.5 h-full bg-secondary/30 mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline text-sm sm:text-base font-bold text-primary">
                          1. Solicitud Ingresada
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-label font-semibold bg-secondary-fixed text-on-secondary-fixed">
                          Completado
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                        Ficha de banquete generada y recibida con éxito en nuestro taller culinario en Prinsengracht.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md font-bold text-xs shrink-0 z-10 ring-4 ring-secondary/20 animate-pulse">
                        <span className="material-symbols-outlined text-base">
                          skillet
                        </span>
                      </div>
                      <div className="w-0.5 h-full bg-outline-variant/30 mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline text-sm sm:text-base font-bold text-primary">
                          2. Revisión Operativa de Cocina y Cupo
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-label font-semibold bg-tertiary-fixed text-on-tertiary-fixed animate-pulse">
                          En curso ahora
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                        El chef ejecutivo verifica disponibilidad de hornos de piedra, suministros frescos y slots de transporte en los canales.
                      </p>
                      <div className="mt-2.5 flex items-center gap-2 text-xs text-secondary font-medium font-label">
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        {' '}
                        <span>
                          Tiempo de respuesta estimado: menos de 24 horas laborables.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center font-bold text-xs shrink-0 z-10">
                        <span className="material-symbols-outlined text-base">
                          lock
                        </span>
                      </div>
                      <div className="w-0.5 h-full bg-outline-variant/30 mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <span className="font-headline text-sm sm:text-base font-bold text-on-surface-variant">
                        3. Aprobación y Enlace de Pago Seguro Mollie
                      </span>
                      <p className="text-xs sm:text-sm text-on-surface-variant/80 mt-1">
                        Recibirás una notificación por correo electrónico y WhatsApp con el presupuesto formal y un enlace cifrado (iDEAL o tarjeta) para reservar la fecha abonando el 30% de depósito.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high text-outline flex items-center justify-center font-bold text-xs shrink-0 z-10">
                        <span className="material-symbols-outlined text-base">
                          local_shipping
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="font-headline text-sm sm:text-base font-bold text-on-surface-variant">
                        4. Elaboración Artesanal y Entrega en Ámsterdam
                      </span>
                      <p className="text-xs sm:text-sm text-on-surface-variant/80 mt-1">
                        Preparado el día de la reserva, listo para recoger o para la entrega acordada.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
                <Link className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all transform hover:-translate-y-0.5 font-label font-semibold text-sm shadow-md" data-path="mis-pedidos" href="/cuenta/pedidos">
                  <span className="material-symbols-outlined text-lg">
                    receipt_long
                  </span>
                  {' '}Ver Mis Pedidos y Reservas
                </Link>
                {' '}
                <Link className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all font-label font-medium text-sm" data-path="inicio" href="/">
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                  {' '}Volver al Inicio
                </Link>
              </section>
              <section className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 border border-outline-variant/15">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      support_agent
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline text-sm sm:text-base font-bold text-primary">
                      ¿Dudas sobre el menú o ajuste de horarios?
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Contacta de inmediato a nuestro mayordomo culinario de eventos en Ámsterdam.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors text-xs font-label font-semibold" href="tel:+31208943210">
                    <span className="material-symbols-outlined text-base text-secondary">
                      phone
                    </span>
                    {' '}+31 20 894 3210
                  </a>
                  {' '}
                  <a className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors text-xs font-label font-semibold shadow-xs" href="https://wa.me/31208943210" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-base">
                      chat
                    </span>
                    {' '}WhatsApp Directo
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
