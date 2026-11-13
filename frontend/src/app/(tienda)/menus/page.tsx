// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/men_bajo_reserva_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { ESPECIALES } from '@/data';
import { formatDias, formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { EMAIL_CONTACTO, whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { textoEnvio } from '@/config/envio';
import { direccionCorta, SEDE_PRINCIPAL } from '@/config/sedes';

export default function MenusPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <section className="relative bg-surface overflow-hidden py-12 md:py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed w-fit text-xs font-label uppercase tracking-widest font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    {' '}Por encargo
                  </div>
                  <div className="space-y-3">
                    <p className="font-headline text-xs md:text-sm uppercase tracking-[0.2em] text-secondary font-bold">
                      Receta tradicional antioqueña en Ámsterdam
                    </p>
                    <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.08]">
                      Platos Típicos Tradicionales{' '}
                      <span className="block text-secondary italic font-serif font-normal text-2xl sm:text-4xl lg:text-5xl mt-2">
                        Exclusivamente Bajo Reserva
                      </span>
                    </h1>
                  </div>
                  <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl font-normal">
                    Preparados con receta tradicional antioqueña. Los especiales se hacen por encargo: elige el plato y te confirmamos por
                    WhatsApp el día de entrega o recogida.
                    {/* TODO (Diana): anticipación mínima real para los especiales */}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-label text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        calendar_month
                      </span>
                      {' '}
                      <span>
                        Fines de semana · bajo reserva
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        storefront
                      </span>
                      {' '}
                      <span>
                        Recogida en {SEDE_PRINCIPAL.direccion}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="relative bg-surface-container rounded-xl p-6 sm:p-8 space-y-5">
                    <div className="relative rounded-lg overflow-hidden shadow-xs aspect-[4/3]">
                      <div className="w-full h-full bg-cover bg-center"></div>
                      <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-xs text-surface px-3 py-1.5 rounded-sm text-xs font-headline font-semibold tracking-wide flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-tertiary-fixed">
                          outdoor_grill
                        </span>
                        {' '}Sabor de casa
                      </div>
                    </div>
                    <div className="space-y-1 pt-2">
                      <p className="text-xs font-headline uppercase tracking-wider text-primary font-bold">
                        Especiales de fin de semana
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {ESPECIALES.filter((plato) => plato.disponible).length} platos disponibles bajo reserva
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-surface-container-low py-10 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      Elige tu plato
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Selecciona el especial que quieres y cuántas porciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      Fija tu Entrega
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Recogida en {direccionCorta()} o domicilio en Ámsterdam.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      Confirmación
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Te confirmamos el encargo y el día por WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      A la mesa
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Recíbelo o recógelo el día acordado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-surface py-16 px-6 lg:px-12" id="menu-reservas">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
                <div>
                  <span className="text-xs font-headline uppercase tracking-widest text-secondary font-bold block mb-1">
                    Carta Semanal
                  </span>
                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                    Especiales de Fin de Semana
                  </h2>
                </div>
                <span className="px-4 py-2 rounded-lg text-xs font-headline font-semibold tracking-wide bg-tertiary-fixed text-on-tertiary-fixed">
                  Solo fines de semana · bajo reserva
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="dishes-grid">
                {ESPECIALES.filter((plato) => plato.disponible).map((plato) => (
                  <article key={plato.id} className="dish-card flex flex-col rounded-lg overflow-hidden bg-surface-container-low transition-all duration-300 hover:shadow-lg group">
                    <div className="relative h-64 w-full bg-surface-container overflow-hidden">
                      <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-secondary text-on-secondary text-[11px] font-label font-bold uppercase tracking-wider">
                          <span className="material-symbols-outlined text-xs">event_available</span> Bajo reserva
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-sm bg-primary/80 backdrop-blur-xs text-surface text-[11px] font-label font-medium">
                          {formatDias(plato.dias)}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-xs px-3 py-1 rounded-sm font-headline font-bold text-primary text-base text-right">
                        {formatEUR(plato.precio)}
                        {/* precio provisional si precioEstimado */}
                        {plato.precioEstimado && (
                          <span className="block text-[10px] font-label font-normal text-on-surface-variant">Precio estimado</span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between bg-surface space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                          {plato.nombre}
                        </h3>
                        {plato.descripcion && <p className="text-xs text-on-surface-variant leading-relaxed">{plato.descripcion}</p>}
                        <p className="text-[11px] text-outline font-medium">Solo fines de semana · bajo reserva · {IVA_INCLUIDO}</p>
                      </div>
                      <div className="pt-3 flex items-center justify-end">
                        <Go href="/catering/reservar" className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-headline font-semibold transition-colors flex items-center gap-1.5" type="button">
                          <span>Reservar Plato</span> <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Go>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-surface-container py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-headline uppercase tracking-widest text-secondary font-bold">
                  Cómo funciona
                </span>
                <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
                  Entrega, recogida y pago
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Los especiales se preparan por encargo los fines de semana. Los detalles de cada encargo se confirman por WhatsApp.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-surface p-8 rounded-lg shadow-xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">
                        event_available
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Calendario de Entregas
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Los especiales se preparan con receta tradicional antioqueña solo los fines de semana, bajo reserva.
                    </p>
                    {/* TODO (Diana): horarios de entrega y recogida y hora de cierre de pedidos */}
                    <p className="p-3 rounded-sm bg-surface-container-low text-xs text-on-surface-variant">
                      Horarios por confirmar. Te indicamos la hora al confirmar el encargo.
                    </p>
                  </div>
                </div>
                <div className="bg-surface p-8 rounded-lg shadow-xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">
                        local_shipping
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Recogida y domicilio
                    </h3>
                    <div className="space-y-3 pt-1">
                      <div className="p-3 rounded-lg bg-surface-container-low">
                        <span className="font-headline font-bold text-xs text-primary block">
                          Recogida en el local
                        </span>
                        {' '}
                        <span className="text-xs text-on-surface-variant">
                          {direccionCorta()}. Envío: {textoEnvio('recogida').toLowerCase()}.
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low">
                        <span className="font-headline font-bold text-xs text-primary block">
                          Domicilio en Ámsterdam
                        </span>
                        {' '}
                        <span className="text-xs text-on-surface-variant">
                          Envío: {textoEnvio('domicilio').toLowerCase()}.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface p-8 rounded-lg shadow-xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">
                        account_balance_wallet
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Pago y confirmación
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      En esta versión de prueba el pago es simulado: no se cobra nada. En la tienda definitiva se pagará con iDEAL o tarjeta.
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Para cambiar o cancelar un encargo, escríbenos por WhatsApp.
                      {/* TODO (Diana): política de cancelación */}
                    </p>
                  </div>
                  <div className="p-3 rounded-sm bg-surface-container text-xs text-on-surface-variant">
                    ¿Evento grande o celebración especial? Consulta nuestra sección de{' '}
                    <Link className="text-secondary font-bold underline" data-path="catering" href="/catering">
                      Catering Completo
                    </Link>
                    .
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xs">
                <div className="md:w-1/2 space-y-3">
                  <span className="text-xs font-headline uppercase tracking-widest text-secondary font-bold">
                    Punto de Retiro
                  </span>
                  <h3 className="font-headline text-xl font-bold text-primary">
                    {SEDE_PRINCIPAL.nombre}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Ven a recoger tu pedido a nuestra sede.
                  </p>
                  <div className="text-xs text-primary font-semibold space-y-1 pt-1">
                    <p>
                      • {SEDE_PRINCIPAL.direccion}, {SEDE_PRINCIPAL.ciudad}
                    </p>
                    <p>
                      • WhatsApp:{' '}
                      <a className="underline underline-offset-2 hover:text-secondary" href={whatsappLink('Hola Paisabor, quiero reservar un plato especial.')} rel="noopener noreferrer" target="_blank">
                        {WHATSAPP_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-48 md:h-56 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-surface py-16 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-headline uppercase tracking-widest text-secondary font-bold">
                  Dudas Habituales
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-primary">
                  Preguntas Frecuentes sobre Encargos
                </h2>
              </div>
              <div className="space-y-3" id="faq-accordion">
                {[
                  {
                    p: '¿Con cuánta anticipación debo hacer el encargo?',
                    r: 'Los especiales se preparan bajo reserva para el fin de semana. Escríbenos o haz tu solicitud y te confirmamos por WhatsApp si llegamos a la fecha que necesitas.',
                  },
                  {
                    p: '¿Cómo se entregan los platos?',
                    r: `Puedes recogerlos en ${direccionCorta()} o pedirlos a domicilio en Ámsterdam. Los detalles de la entrega se confirman por WhatsApp.`,
                  },
                  {
                    p: '¿Puedo pedir porciones para un grupo grande?',
                    r: `Sí. Indica las porciones al reservar o escríbenos ${EMAIL_CONTACTO ? `a ${EMAIL_CONTACTO}` : `por WhatsApp al ${WHATSAPP_DISPLAY}`}. Para eventos, mira también la sección de catering.`,
                  },
                ].map(({ p, r }) => (
                  <details key={p} className="group rounded-lg bg-surface-container-low overflow-hidden">
                    <summary className="w-full px-6 py-4 cursor-pointer list-none flex items-center justify-between text-sm font-headline font-bold text-primary hover:text-secondary transition-colors">
                      <span>{p}</span>
                      <span className="material-symbols-outlined text-lg transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <p className="px-6 pb-4 text-xs text-on-surface-variant leading-relaxed">{r}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}
