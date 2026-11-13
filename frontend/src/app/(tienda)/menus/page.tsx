// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/men_bajo_reserva_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { ESPECIALES } from '@/data';
import { formatDias, formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { EMAIL_CONTACTO, whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
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
                    {' '}Cocina Lenta • Por Encargo
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
                    Preparado con receta tradicional antioqueña y sabor de casa. Para garantizar frescura y calidad suprema, todos nuestros platos calientes se preparan por encargo con mínimo{' '}
                    <span className="font-semibold text-primary">
                      24 a 48 horas de anticipación
                    </span>
                    .
                  </p>
                  <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-label text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        calendar_month
                      </span>
                      {' '}
                      <span>
                        Entregas Vie • Sáb • Dom
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        inventory_2
                      </span>
                      {' '}
                      <span>
                        Empaque térmico hermético
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
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <p className="text-xs font-headline uppercase tracking-wider text-primary font-bold">
                          Reserva Semanal Activa
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Cupos limitados por horneada dominical
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-tertiary-fixed font-headline font-bold text-sm shadow-xs">
                        100%
                      </span>
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
                      Elige con Tiempo
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Selecciona tu plato típico favorito con mínimo 24-48h previas a la fecha.
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
                      Retiro en {direccionCorta()} o delivery en caja térmica en Ámsterdam.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      Pago Seguro
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Confirma de inmediato con iDEAL o tarjeta para apartar lote.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline font-bold text-sm shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-primary">
                      Listo para la Mesa
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Recibe caliente, recién horneado y listo para disfrutar en familia.
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
                  Transparencia &amp; Logística Holandesa
                </span>
                <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
                  Modalidades y Política de Reserva
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Cada fin de semana preparamos un lote medido para preservar la sazón íntima y evitar cualquier desperdicio de ingredientes colombianos importados.
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
                      Los especiales se preparan con receta tradicional antioqueña solo los fines de semana, bajo reserva. Recibe o recoge tus pedidos durante los turnos habilitados:
                    </p>
                    <ul className="space-y-2 text-xs text-on-surface-variant font-medium pt-2">
                      <li className="flex items-center justify-between p-2 rounded-sm bg-surface-container-low">
                        <span>
                          Viernes
                        </span>
                        {' '}
                        <span className="font-semibold text-primary">
                          17:00 – 20:30 CET
                        </span>
                      </li>
                      <li className="flex items-center justify-between p-2 rounded-sm bg-surface-container-low">
                        <span>
                          Sábado
                        </span>
                        {' '}
                        <span className="font-semibold text-primary">
                          12:30 – 19:30 CET
                        </span>
                      </li>
                      <li className="flex items-center justify-between p-2 rounded-sm bg-surface-container-low">
                        <span>
                          Domingo
                        </span>
                        {' '}
                        <span className="font-semibold text-primary">
                          12:00 – 18:00 CET
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[11px] text-secondary font-semibold">
                    Cierre de pedidos: Jueves a las 22:00 para entregas de fin de semana.
                  </p>
                </div>
                <div className="bg-surface p-8 rounded-lg shadow-xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">
                        local_shipping
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Recogida &amp; Envíos NL
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Cuidamos la temperatura hasta tu mesa en cualquier rincón autorizado de Países Bajos.
                    </p>
                    <div className="space-y-3 pt-1">
                      <div className="p-3 rounded-lg bg-surface-container-low">
                        <span className="font-headline font-bold text-xs text-primary block">
                          Recogida Gratuita en Atelier
                        </span>
                        {' '}
                        <span className="text-xs text-on-surface-variant">
                          {direccionCorta()}. Pasa por tu pedido caliente sin costo extra.
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low">
                        <span className="font-headline font-bold text-xs text-primary block">
                          Domicilio en Ámsterdam
                        </span>
                        {' '}
                        <span className="text-xs text-on-surface-variant">
                          Ámsterdam, con empaque isotérmico.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary font-medium">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      verified_user
                    </span>
                    {' '}
                    <span>
                      Garantía de calor a la entrega
                    </span>
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
                      Pagos &amp; Confirmación
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Tu reserva se confirma en el instante de la transacción para que el equipo de cocina reserve tus insumos frescos.
                    </p>
                    <div className="space-y-2.5 pt-1 text-xs text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {' '}
                        <span>
                          Pagos directos vía{' '}
                          <strong className="text-primary font-semibold">
                            iDeal
                          </strong>
                          {' '}(bancos holandeses)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {' '}
                        <span>
                          Tarjetas de Crédito / Débito
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {' '}
                        <span>
                          Comprobante instantáneo con instrucciones térmicas
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {' '}
                        <span>
                          Cancelación flexible hasta 36h antes
                        </span>
                      </div>
                    </div>
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
                    Ven a recoger tu pedido directamente de nuestra cocina. Te recibimos con el aroma a café recién filtrado y una sonrisa de bienvenida.
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
                <div className="rounded-lg bg-surface-container-low overflow-hidden">
                  <button className="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between text-sm font-headline font-bold text-primary hover:text-secondary transition-colors" type="button">
                    <span>
                      ¿Por qué es obligatorio reservar con 24 o 48 horas de anticipación?
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg transition-transform faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="faq-content hidden px-6 pb-4 text-xs text-on-surface-variant leading-relaxed">
                    Platos como la Lechona o el Sancocho requieren procesos de adobo profundo de hasta 24 horas y cocción lenta. Cocinar bajo encargo garantiza que cada porción esté en su punto exacto de frescura, sin recalentados ni conservantes artificiales.
                  </div>
                </div>
                <div className="rounded-lg bg-surface-container-low overflow-hidden">
                  <button className="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between text-sm font-headline font-bold text-primary hover:text-secondary transition-colors" type="button">
                    <span>
                      ¿Cómo viajan los platos para no perder el calor ni la textura?
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg transition-transform faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="faq-content hidden px-6 pb-4 text-xs text-on-surface-variant leading-relaxed">
                    Utilizamos cajas térmicas isotérmicas reciclables de alto rendimiento diseñadas para gastronomía europea. La lechona viaja con ventilación controlada para que el cuero mantenga su "tostado crujiente", y los caldos se sellan al vacío para evitar derrames.
                  </div>
                </div>
                <div className="rounded-lg bg-surface-container-low overflow-hidden">
                  <button className="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between text-sm font-headline font-bold text-primary hover:text-secondary transition-colors" type="button">
                    <span>
                      ¿Puedo solicitar porciones para grupos familiares grandes (10+ personas)?
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg transition-transform faq-icon">
                      expand_more
                    </span>
                  </button>
                  <div className="faq-content hidden px-6 pb-4 text-xs text-on-surface-variant leading-relaxed">
                    ¡Totalmente! Puedes añadir múltiples porciones de cada plato en el formulario o escribirnos directamente {EMAIL_CONTACTO ? `a ${EMAIL_CONTACTO}` : `por WhatsApp al ${WHATSAPP_DISPLAY}`} para configurar bandejas familiares y servicio de menaje típico en barro.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-primary/60 backdrop-blur-xs" id="reservation-modal">
            <div className="bg-surface rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[921px] overflow-y-auto">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-bold">
                    Solicitud de Encargo
                  </span>
                  <h3 className="font-headline font-bold text-xl text-primary" id="modal-dish-title">
                    Nombre del Plato
                  </h3>
                </div>
                <button className="p-1 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low text-xs">
                <div>
                  <span className="text-outline block text-[10px]">
                    Precio unitario
                  </span>
                  {' '}
                  <span className="font-headline font-bold text-sm text-primary" id="modal-dish-price">
                    Según el plato
                  </span>
                </div>
                <div className="w-px h-6 bg-surface-variant"></div>
                <div>
                  <span className="text-outline block text-[10px]">
                    Tiempo anticipación
                  </span>
                  {' '}
                  <span className="font-headline font-bold text-sm text-secondary" id="modal-dish-time">
                    24h
                  </span>
                </div>
              </div>
              <div className="space-y-4" id="reservation-form">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-headline font-semibold text-primary">
                      Porciones
                    </label>
                    {' '}
                    <input className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" id="form-qty" max="25" min="1" type="number" defaultValue="2" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-headline font-semibold text-primary">
                      Día de Entrega
                    </label>
                    <select className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" id="form-day" defaultValue="Sábado">
                      <option value="Viernes">
                        Viernes próximo
                      </option>
                      <option value="Sábado">
                        Sábado próximo
                      </option>
                      <option value="Domingo">
                        Domingo próximo
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-headline font-semibold text-primary">
                    Modalidad
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 rounded-sm bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input defaultChecked className="text-secondary focus:ring-secondary" name="delivery_mode" type="radio" value="pickup" />
                      {' '}
                      <span>
                        Recoger en {SEDE_PRINCIPAL.direccion} (Gratis)
                      </span>
                    </label>
                    {' '}
                    <label className="flex items-center gap-2 p-2.5 rounded-sm bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input className="text-secondary focus:ring-secondary" name="delivery_mode" type="radio" value="delivery" />
                      {' '}
                      <span>
                        Domicilio (tarifa por confirmar)
                      </span>
                    </label>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-headline font-semibold text-primary">
                    Tu Nombre Completo
                  </label>
                  {' '}
                  <input className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="Nombre y apellido" required type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-headline font-semibold text-primary">
                      Email
                    </label>
                    {' '}
                    <input className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="tu@correo.com" required type="email" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-headline font-semibold text-primary">
                      Teléfono / WhatsApp
                    </label>
                    {' '}
                    <input className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="Tu número de WhatsApp" required type="tel" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-headline font-semibold text-primary">
                    Notas especiales (alergias, picante, etc.)
                  </label>
                  <textarea className="w-full px-3 py-2 text-sm rounded-sm bg-surface-container text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="Opcional. Ej. Sin cebolla en la ensalada / Ají extra aparte." rows={2}></textarea>
                </div>
                <div className="pt-3">
                  <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2" type="submit">
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Confirmar Encargo • Proceder al Pago
                    </span>
                  </button>
                  <p className="text-[11px] text-center text-outline mt-2">
                    Pago simulado en esta versión de prueba: no se cobra nada.
                  </p>
                </div>
              </div>
              <div className="hidden text-center py-6 space-y-4" id="modal-success-state">
                <div className="w-14 h-14 bg-secondary-fixed text-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">
                    done
                  </span>
                </div>
                <h4 className="font-headline font-bold text-xl text-primary">
                  ¡Reserva Pre-Registrada!
                </h4>
                <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                  Hemos apartado tus raciones para el día elegido. Te hemos enviado un correo de confirmación con la pasarela de pago iDeal.
                </p>
                <button className="px-5 py-2 rounded-lg bg-primary text-on-primary text-xs font-headline font-semibold" type="button">
                  Entendido, volver a la carta
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
