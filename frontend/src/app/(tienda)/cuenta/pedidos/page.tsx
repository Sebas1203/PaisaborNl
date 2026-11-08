// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/mis_pedidos_y_reservas_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { itemPorId } from '@/data';
import { lineasConItem, PEDIDOS, RESERVAS, totales } from '@/data/mock';
import { formatEUR, formatFecha, IVA_INCLUIDO, ORDER_STATUS_LABELS } from '@/lib/format';

// MOCK: pedidos y reservas de ejemplo del cliente
const MIS_PEDIDOS = PEDIDOS.filter((p) => p.cliente === "Cliente de ejemplo 1");
const MIS_RESERVAS = RESERVAS.filter((r) => r.cliente === "Cliente de ejemplo 1");
const RESERVA_LABELS = { pendiente: "Pendiente de confirmación", confirmada: "Confirmada", finalizada: "Finalizada", rechazada: "Rechazada" } as const;

export default function CuentaPedidosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
              <nav className="flex items-center gap-2 text-xs font-label text-outline tracking-wider uppercase mb-5">
                <Link className="hover:text-secondary transition-colors" href="/cuenta">
                  Mi Cuenta
                </Link>
                {' '}
                <span className="text-outline-variant font-light">
                  /
                </span>
                {' '}
                <span className="text-primary font-medium">
                  Mis Pedidos y Reservas
                </span>
              </nav>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
                <div className="max-w-2xl space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-8 h-[2px] bg-secondary"></span>
                    {' '}
                    <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-semibold">
                      Portal del Comensal
                    </span>
                  </div>
                  <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
                    Mis Pedidos y Reservas
                  </h1>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed pt-1">
                    Consulta el estado de tus compras en tienda de amasijos y tus reservas de menús típicos y catering en Ámsterdam.
                  </p>
                </div>
                <div className="bg-surface-container-low px-5 py-3.5 rounded-lg flex items-center gap-6 shadow-xs self-start md:self-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-label uppercase tracking-wider text-outline">
                      Activos este mes
                    </span>
                    {' '}
                    <span className="font-headline text-lg font-bold text-primary leading-tight">
                      2 gestiones
                    </span>
                  </div>
                  <div className="h-8 w-px bg-surface-container-highest"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-label uppercase tracking-wider text-outline">
                      Recogida taller
                    </span>
                    {' '}
                    <span className="font-body text-xs font-medium text-secondary">
                      Prinsengracht 1016
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8">
                <div className="flex items-center gap-2 p-1 bg-surface-container-low rounded-lg overflow-x-auto" id="categoryFilterContainer">
                  <button className="cat-pill active-tab flex items-center gap-2.5 px-4 py-2 rounded-md font-label text-xs sm:text-sm font-semibold transition-all bg-primary text-on-primary shadow-xs" data-cat="all">
                    <span>
                      Todos
                    </span>
                    {' '}
                    <span className="w-5 h-5 rounded-full bg-surface/20 text-on-primary text-[11px] flex items-center justify-center font-bold">
                      5
                    </span>
                  </button>
                  {' '}
                  <button className="cat-pill flex items-center gap-2.5 px-4 py-2 rounded-md font-label text-xs sm:text-sm font-medium text-on-surface-variant hover:text-primary transition-all" data-cat="shop">
                    <span>
                      Pedidos de Tienda
                    </span>
                    {' '}
                    <span className="w-5 h-5 rounded-full bg-surface-container text-on-surface text-[11px] flex items-center justify-center font-bold">
                      3
                    </span>
                  </button>
                  {' '}
                  <button className="cat-pill flex items-center gap-2.5 px-4 py-2 rounded-md font-label text-xs sm:text-sm font-medium text-on-surface-variant hover:text-primary transition-all" data-cat="catering">
                    <span>
                      Reservas de Menú &amp; Catering
                    </span>
                    {' '}
                    <span className="w-5 h-5 rounded-full bg-surface-container text-on-surface text-[11px] flex items-center justify-center font-bold">
                      2
                    </span>
                  </button>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                    <label className="sr-only" htmlFor="statusFilter">
                      Filtrar por estado
                    </label>
                    <select className="w-full appearance-none bg-surface-container-low text-on-surface text-xs font-label px-3.5 py-2.5 pr-8 rounded-lg shadow-xs focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" id="statusFilter">
                      <option value="all">
                        Todos los estados
                      </option>
                      <option value="Pendiente">
                        Pendiente
                      </option>
                      <option value="Confirmado">
                        Confirmado
                      </option>
                      <option value="En preparación">
                        En preparación
                      </option>
                      <option value="Listo">
                        Listo
                      </option>
                      <option value="Enviado">
                        Enviado
                      </option>
                      <option value="Entregado">
                        Entregado
                      </option>
                      <option value="Cancelado">
                        Cancelado
                      </option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                      expand_more
                    </span>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">
                      search
                    </span>
                    {' '}
                    <input className="w-full bg-surface-container-low text-on-surface placeholder:text-outline text-xs font-label pl-9 pr-3 py-2.5 rounded-lg shadow-xs focus:outline-hidden focus:ring-1 focus:ring-secondary" id="orderSearch" placeholder="Buscar por código o producto..." type="text" />
                  </div>
                </div>
              </div>
              <div className="space-y-5" id="ordersList">
                {MIS_PEDIDOS.map((pedido) => {
                  const lineas = lineasConItem(pedido.lineas);
                  return (
                    <article key={pedido.id} className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="shop" data-status={ORDER_STATUS_LABELS[pedido.estado]}>
                      <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                            <ItemImage src={lineas[0]?.item.imagen} alt={lineas[0]?.item.nombre ?? pedido.id} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-primary/80 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[12px] text-on-primary">storefront</span>
                            </div>
                          </div>
                          <div className="space-y-1.5 min-w-0">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className={"font-headline font-bold text-base text-primary tracking-tight" + (pedido.estado === "cancelado" ? " line-through opacity-60" : "")}>
                                Pedido #{pedido.id}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-on-surface-variant">
                                {ORDER_STATUS_LABELS[pedido.estado]}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm text-secondary">calendar_today</span> {formatFecha(pedido.fecha)}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm text-secondary">{pedido.entrega === "domicilio" ? "local_shipping" : "storefront"}</span>{" "}
                                {pedido.entrega === "domicilio" ? "Domicilio" : "Recogida en tienda"}
                              </span>
                            </div>
                            <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                              <strong className="font-semibold text-primary">Artículos:</strong>{" "}
                              {lineas.map((l) => l.item.nombre + " (x" + l.cantidad + ")").join(", ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                          <div className="text-left lg:text-right">
                            <span className="text-[10px] font-label uppercase tracking-widest text-outline block">Total · {IVA_INCLUIDO}</span>
                            <span className="font-headline text-2xl font-bold text-primary">{formatEUR(totales(pedido.lineas).total)}</span>
                          </div>
                          <Go href={"/cuenta/pedidos/" + pedido.id} className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label text-xs font-medium hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-xs">
                            <span>Ver Detalle del Pedido</span> <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Go>
                        </div>
                      </div>
                    </article>
                  );
                })}
                {MIS_RESERVAS.map((reserva) => {
                  const plato = itemPorId(reserva.platoId);
                  if (!plato) return null;
                  return (
                    <article key={reserva.id} className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="catering">
                      <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                            <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="space-y-1.5 min-w-0">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className="font-headline font-bold text-base text-primary tracking-tight">Reserva #{reserva.id}</span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-secondary-fixed text-on-secondary-fixed-variant">
                                {RESERVA_LABELS[reserva.estado]}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                              <span className="flex items-center gap-1 font-medium text-secondary">
                                <span className="material-symbols-outlined text-sm">event</span> {formatFecha(reserva.fecha)}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">group</span> {reserva.porciones} porciones
                              </span>
                            </div>
                            <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                              <strong className="font-semibold text-primary">Especial:</strong> {plato.nombre} · Solo fines de semana · bajo reserva
                            </p>
                          </div>
                        </div>
                        <div className="text-left lg:text-right shrink-0">
                          <span className="text-[10px] font-label uppercase tracking-widest text-outline block">Importe estimado · {IVA_INCLUIDO}</span>
                          <span className="font-headline text-2xl font-bold text-primary">{formatEUR(plato.precio * reserva.porciones)}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="hidden py-16 text-center space-y-3 bg-surface-container-low rounded-lg" id="noResultsState">
                <span className="material-symbols-outlined text-4xl text-outline">
                  search_off
                </span>
                <h3 className="font-headline text-lg font-bold text-primary">
                  No se encontraron gestiones
                </h3>
                <p className="text-xs font-body text-on-surface-variant max-w-sm mx-auto">
                  No hay pedidos ni reservas que coincidan con los filtros aplicados. Intenta restablecer la búsqueda.
                </p>
                <button className="mt-2 px-4 py-2 bg-primary text-on-primary text-xs font-label rounded-lg font-medium" id="resetFiltersBtn">
                  Ver todos los registros
                </button>
              </div>
              <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-label text-on-surface-variant">
                <span className="order-2 sm:order-1">
                  Mostrando{' '}
                  <strong className="text-primary font-semibold">
                    1 a 5
                  </strong>
                  {' '}de 5 registros
                </span>
                <div className="order-1 sm:order-2 flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg bg-surface-container-low text-outline flex items-center justify-center cursor-not-allowed opacity-50" disabled>
                    <span className="material-symbols-outlined text-base">
                      chevron_left
                    </span>
                  </button>
                  {' '}
                  <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center shadow-xs">
                    1
                  </button>
                  {' '}
                  <button className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center">
                    2
                  </button>
                  {' '}
                  <button className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
              <section className="mt-16 bg-surface-container rounded-xl p-8 sm:p-10 shadow-xs relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-secondary/10 blur-2xl pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center gap-2 text-secondary text-xs font-label uppercase tracking-widest font-semibold">
                      <span className="material-symbols-outlined text-base">
                        support_agent
                      </span>
                      {' '}
                      <span>
                        Atención Personalizada en los Países Bajos
                      </span>
                    </div>
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                      ¿Deseas modificar un pedido o ajustar tu menú de catering?
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                      Entendemos que los eventos y antojos cambian. Puedes contactar directamente a nuestra jefa de taller en Ámsterdam a través de WhatsApp para ajustes de último minuto, alergias alimentarias o especificaciones de entrega en Ámsterdam.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-label">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}Horario de atención: Mar a Dom, 09:00 - 19:30 CET
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}Cancelaciones de catering hasta 72h antes
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
                    <a className="px-5 py-3 rounded-lg bg-primary text-on-primary font-label text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-xs text-center" href="https://wa.me/31208943210" rel="noopener noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-lg">
                        chat
                      </span>
                      {' '}
                      <span>
                        Chatear por WhatsApp (+31)
                      </span>
                    </a>
                    {' '}
                    <a className="px-5 py-3 rounded-lg bg-surface text-primary hover:bg-surface-bright font-label text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 text-center shadow-xs" href="#">
                      <span className="material-symbols-outlined text-lg">
                        receipt_long
                      </span>
                      {' '}
                      <span>
                        Descargar Facturas PDF
                      </span>
                    </a>
                  </div>
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
