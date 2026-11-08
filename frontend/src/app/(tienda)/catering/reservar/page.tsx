// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/reservar_men_de_catering_paisabor
/* eslint-disable @next/next/no-img-element */
import { baseSinIva, iva } from '@/config/fiscal';
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { PLATOS } from '@/data';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';

const PLATOS_CATERING = PLATOS.filter((plato) => plato.disponible);
// El resumen parte del primer plato y de los 25 comensales que propone el diseño
const PLATO_INICIAL = PLATOS_CATERING[0];
const COMENSALES_INICIALES = 25;
const SUBTOTAL = PLATO_INICIAL.precio * COMENSALES_INICIALES;

export default function CateringReservarPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-96 -left-32 w-80 h-80 rounded-full bg-tertiary-fixed/35 blur-3xl pointer-events-none -z-10"></div>
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-transparent">
                <div className="max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label uppercase tracking-widest font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {' '}Eventos &amp; Celebraciones en Ámsterdam
                  </div>
                  <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                    Reservar Menú de Catering
                  </h1>
                  <p className="font-body text-base lg:text-lg text-on-surface-variant font-normal leading-relaxed">
                    Llevamos el sabor de casa colombiano a tu evento corporativo, cumpleaños o reunión familiar en Ámsterdam.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-label text-on-surface-variant self-start md:self-end">
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      schedule
                    </span>
                    {' '}
                    <span>
                      Reserva mínima 72h antes
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      group
                    </span>
                    {' '}
                    <span>
                      Mín. 10 comensales
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-7 flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">
                          1
                        </span>
                        <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                          Selecciona tu Menú Artesanal
                        </h2>
                      </div>
                      <span className="text-xs font-label text-secondary font-medium">
                        Precios por persona
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4" id="menu-selector-group">
                      {PLATOS_CATERING.map((plato, i) => (
                        <label key={plato.id} className="group relative flex flex-col sm:flex-row gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 bg-surface-container-low hover:bg-surface-container shadow-xs border-2 border-transparent has-[:checked]:bg-surface-container-lowest has-[:checked]:border-secondary has-[:checked]:shadow-md">
                          <input defaultChecked={i === 0} className="sr-only" name="catering_menu" type="radio" value={plato.id} />
                          <div className="w-full sm:w-32 h-28 sm:h-auto rounded-lg overflow-hidden shrink-0 relative bg-surface-container">
                            <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="flex flex-col justify-between flex-grow gap-2">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-headline font-bold text-base text-primary group-hover:text-secondary transition-colors">{plato.nombre}</h3>
                              <span className="font-headline font-bold text-base text-secondary whitespace-nowrap">
                                {formatEUR(plato.precio)} <span className="text-[11px] font-normal text-on-surface-variant">/ plato</span>
                              </span>
                            </div>
                            {plato.descripcion && <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">{plato.descripcion}</p>}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">
                        2
                      </span>
                      <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                        Fecha &amp; Horario del Evento
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-label uppercase tracking-wider font-semibold text-primary" htmlFor="event-date">
                          Fecha deseada
                        </label>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low text-primary font-body text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-secondary/30 transition-shadow" id="event-date" min="2025-05-20" type="date" defaultValue="2025-06-14" />
                          {' '}
                          <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-lg">
                            calendar_today
                          </span>
                        </div>
                        <span className="text-[11px] text-on-surface-variant">
                          Se requiere confirmación mínima con 72h de anticipación.
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-label uppercase tracking-wider font-semibold text-primary" htmlFor="event-time">
                          Franja horaria estimada
                        </label>
                        <div className="relative">
                          <select className="w-full appearance-none bg-surface-container-low text-primary font-body text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-secondary/30 transition-shadow" id="event-time">
                            <option value="12:00 - 14:00 (Almuerzo)">
                              12:00 - 14:00 (Almuerzo temprano)
                            </option>
                            <option value="14:00 - 16:30 (Tarde)">
                              14:00 - 16:30 (Comida / Tardeo)
                            </option>
                            <option value="17:00 - 19:30 (After-work / Borrel)">
                              17:00 - 19:30 (After-work / Borrel)
                            </option>
                            <option value="19:30 - 22:00 (Cena)">
                              19:30 - 22:00 (Cena formal / Noche)
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-lg">
                            expand_more
                          </span>
                        </div>
                        <span className="text-[11px] text-on-surface-variant">
                          Llegamos 30 minutos antes de la hora acordada.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">
                          3
                        </span>
                        <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                          Número de Comensales
                        </h2>
                      </div>
                      <span className="text-xs font-label text-on-surface-variant font-medium">
                        Mínimo: 10 personas
                      </span>
                    </div>
                    <div className="bg-surface-container-low p-5 rounded-xl space-y-4">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <div className="flex items-center border border-outline-variant/30 rounded-lg bg-surface-container-lowest p-1 shadow-inner">
                          <button className="w-10 h-10 rounded-md flex items-center justify-center text-primary hover:bg-surface-container transition-colors" type="button">
                            <span className="material-symbols-outlined text-lg">
                              remove
                            </span>
                          </button>
                          {' '}
                          <input className="w-20 text-center font-headline font-bold text-xl text-primary bg-transparent focus:outline-hidden" id="guest-count" max="250" min="10" type="number" defaultValue="25" />
                          {' '}
                          <button className="w-10 h-10 rounded-md flex items-center justify-center text-primary hover:bg-surface-container transition-colors" type="button">
                            <span className="material-symbols-outlined text-lg">
                              add
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <button className="px-3.5 py-2 text-xs font-label font-medium rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary transition-all" type="button">
                            15 pax
                          </button>
                          {' '}
                          <button className="px-3.5 py-2 text-xs font-label font-medium rounded-lg bg-secondary text-on-secondary shadow-xs transition-all" id="preset-25" type="button">
                            25 pax
                          </button>
                          {' '}
                          <button className="px-3.5 py-2 text-xs font-label font-medium rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary transition-all" type="button">
                            40 pax
                          </button>
                          {' '}
                          <button className="px-3.5 py-2 text-xs font-label font-medium rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary transition-all" type="button">
                            60+ pax
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        Para eventos de más de 80 personas, incluye asesoría directa de nuestro equipo de cocina para coordinar estaciones en vivo.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">
                        4
                      </span>
                      <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                        Modalidad de Entrega &amp; Logística
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3" id="delivery-options">
                      <label className="p-4 rounded-xl cursor-pointer bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-3 border-2 border-transparent has-[:checked]:bg-surface-container-lowest has-[:checked]:border-secondary has-[:checked]:shadow-xs">
                        <div className="flex items-start gap-3">
                          <input defaultChecked className="mt-1 text-secondary focus:ring-secondary" name="delivery_type" type="radio" value="delivery" />
                          <div className="flex flex-col">
                            <span className="font-headline text-sm font-bold text-primary flex items-center gap-2">
                              <span className="material-symbols-outlined text-secondary text-base">
                                local_shipping
                              </span>
                              {' '}Entrega a Domicilio con Menaje Térmico (Ámsterdam)
                            </span>
                            {' '}
                            <span className="font-body text-xs text-on-surface-variant mt-0.5">
                              Llegada en cajas térmicas herméticas con calentadores chafing dish biodegradables. Tarifa de transporte por confirmar.
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 pl-7 grid grid-cols-1 sm:grid-cols-2 gap-3" id="address-container">
                          <div className="sm:col-span-2">
                            <input className="w-full bg-surface-container text-xs text-primary px-3 py-2.5 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-secondary" id="delivery-address" placeholder="Dirección completa (Calle, Número, Código Postal, Ciudad)" type="text" defaultValue="Keizersgracht 421, 1016 EK Ámsterdam" />
                          </div>
                          <div>
                            <input className="w-full bg-surface-container text-xs text-primary px-3 py-2.5 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="Piso / Apartamento / Nombre en el interfono" type="text" />
                          </div>
                          <div>
                            <input className="w-full bg-surface-container text-xs text-primary px-3 py-2.5 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-secondary" placeholder="Teléfono de contacto para el repartidor" type="text" defaultValue="+31 6 1234 5678" />
                          </div>
                        </div>
                      </label>
                      <label className="p-4 rounded-xl cursor-pointer bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-3 border-2 border-transparent has-[:checked]:bg-surface-container-lowest has-[:checked]:border-secondary has-[:checked]:shadow-xs">
                        <input className="mt-1 text-secondary focus:ring-secondary" name="delivery_type" type="radio" value="pickup" />
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-headline text-sm font-bold text-primary flex items-center gap-2">
                              <span className="material-symbols-outlined text-secondary text-base">
                                storefront
                              </span>
                              {' '}Retiro en el Taller Paisabor (Prinsengracht, Ámsterdam)
                            </span>
                            {' '}
                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-label bg-secondary/10 px-2 py-0.5 rounded-sm">
                              Sin costo adicional
                            </span>
                          </div>
                          <span className="font-body text-xs text-on-surface-variant mt-0.5">
                            Recoge tu pedido empaquetado en cajas térmicas listas para servir. Prinsengracht 1016 HK, Ámsterdam.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-headline font-bold flex items-center justify-center">
                        5
                      </span>
                      <h2 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                        Observaciones &amp; Requerimientos Especiales
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                      <textarea className="w-full bg-surface-container-low text-primary placeholder:text-on-surface-variant/60 font-body text-xs sm:text-sm rounded-xl p-4 focus:outline-hidden focus:ring-2 focus:ring-secondary/30 transition-shadow leading-relaxed" id="dietary-notes" placeholder="Indícanos alergias (gluten, frutos secos, mariscos), número de opciones vegetarianas/veganas deseadas, o si requieres vajilla de barro tradicional adicional o personal de servicio para tu evento..." rows={4}></textarea>
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-on-surface-variant">
                        <span className="font-medium">
                          Opciones populares:
                        </span>
                        {' '}
                        <button className="bg-surface-container px-2 py-1 rounded-sm hover:bg-secondary/10 hover:text-secondary transition-colors" type="button">
                          + 3 vegetarianos
                        </button>
                        {' '}
                        <button className="bg-surface-container px-2 py-1 rounded-sm hover:bg-secondary/10 hover:text-secondary transition-colors" type="button">
                          + Vajilla eco
                        </button>
                        {' '}
                        <button className="bg-surface-container px-2 py-1 rounded-sm hover:bg-secondary/10 hover:text-secondary transition-colors" type="button">
                          + Alergia maní
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 sticky top-24">
                  <div className="bg-[#F7F2E9] rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/5 rounded-full pointer-events-none"></div>
                    <div className="flex items-center justify-between pb-5 border-b border-outline-variant/20">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-label font-bold uppercase tracking-widest text-secondary">
                          Cotización Inmediata
                        </span>
                        <h3 className="font-headline text-xl font-bold text-primary">
                          Resumen del Catering
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-secondary">
                          receipt_long
                        </span>
                      </div>
                    </div>
                    <div className="py-6 space-y-4">
                      <div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/15">
                        <div className="flex items-center justify-between text-xs font-semibold text-primary">
                          <span className="truncate max-w-[240px]">{PLATO_INICIAL.nombre}</span>
                          <span className="whitespace-nowrap font-headline">{formatEUR(PLATO_INICIAL.precio)} / plato</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-label">
                          <span>Asistentes seleccionados:</span>
                          <span className="font-semibold text-primary">{COMENSALES_INICIALES} personas</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between text-on-surface-variant">
                          <span>Subtotal platos:</span>
                          <span className="font-medium text-primary">{formatEUR(SUBTOTAL)}</span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant">
                          <span>Logística y transporte:</span>
                          <span className="font-medium text-primary">Por confirmar</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                          <span>Base sin IVA:</span>
                          <span className="font-medium text-on-surface-variant">{formatEUR(baseSinIva(SUBTOTAL))}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                          <span>IVA (9%) incluido:</span>
                          <span className="font-medium text-on-surface-variant">{formatEUR(iva(SUBTOTAL))}</span>
                        </div>
                      </div>
                      <div className="pt-4 mt-2 border-t border-outline-variant/20 flex items-end justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider font-label font-bold text-primary">Total Estimado</span>
                          <span className="text-[10px] text-on-surface-variant">{IVA_INCLUIDO}</span>
                        </div>
                        <span className="font-headline text-3xl font-extrabold text-secondary tracking-tight">{formatEUR(SUBTOTAL)}</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest/80 backdrop-blur-xs p-4 rounded-xl flex items-start gap-3 text-xs text-on-surface-variant leading-relaxed">
                      <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">
                        verified
                      </span>
                      <div>
                        <strong className="text-primary font-medium">
                          Revisión artesanal de cupo:
                        </strong>
                        {' '}Al enviar la solicitud, nuestro chef revisará la disponibilidad de cupo en cocina y te confirmará en menos de 24 horas hábiles.{' '}
                        <em>
                          No se realiza ningún cobro en este paso.
                        </em>
                      </div>
                    </div>
                    <Go href="/catering/reserva-pendiente" className="mt-6 w-full bg-primary hover:bg-primary-container text-on-primary py-4 px-6 rounded-xl font-headline font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" type="button">
                      <span>
                        Solicitar Reserva de Catering
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </Go>
                    <div className="mt-6 pt-5 border-t border-outline-variant/15 flex flex-col gap-2.5">
                      <span className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant font-semibold">
                        ¿Dudas o requerimientos a medida?
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <a className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-primary text-xs font-label font-medium" href="https://wa.me/31208943210" rel="noopener" target="_blank">
                          <span className="material-symbols-outlined text-base text-secondary">
                            chat
                          </span>
                          {' '}
                          <span>
                            WhatsApp Chef
                          </span>
                        </a>
                        {' '}
                        <a className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-primary text-xs font-label font-medium" href="mailto:hola@paisabor.nl?subject=Consulta%20Catering%20Paisabor">
                          <span className="material-symbols-outlined text-base text-secondary">
                            mail
                          </span>
                          {' '}
                          <span>
                            Escribir Correo
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-surface-container-low flex items-center justify-around text-center text-xs text-on-surface-variant">
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-secondary text-lg mb-0.5">
                        restaurant
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        Hecho al día
                      </span>
                    </div>
                    <div className="w-px h-6 bg-outline-variant/40"></div>
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-secondary text-lg mb-0.5">
                        thermostat
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        Cajas térmicas
                      </span>
                    </div>
                    <div className="w-px h-6 bg-outline-variant/40"></div>
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-secondary text-lg mb-0.5">
                        eco
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        Menaje ecológico
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
