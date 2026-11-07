// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/mis_pedidos_y_reservas_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

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
                <article className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="shop" data-status="Confirmado">
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Golden baked Colombian arepas and savory empanadas arranged rustic style on dark handmade ceramic pottery with soft natural window illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGEHOe6RF4evyU9dC1q6ecHFerKBM0BmdifSJ6vgnOOg7-hWosqGy8MXi8o2gb1pNK4ZH7TD6LqFVfGJSBbLL55nNtAVg-nljrqg_46B2YN75fR-FMt47yGRxyPJ4rFK3bulyknNJhOHbn9BhrIvpbr4uCb4d9vFJLS2AWCeOwf9a7JS6Do00uPKSu0gpUh2EF7EWQUa_Yc-eIvN5goykVnzSHcyf0mUkQnEuLCh5VbTlGOqtLMaA9" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-primary/80 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px] text-on-primary">
                            storefront
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline font-bold text-base text-primary tracking-tight">
                            Pedido Tienda #PSB-2025-4892
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-[#e7efe6] text-[#24532b]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#24532b] animate-pulse"></span>
                            {' '}Confirmado
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              calendar_today
                            </span>
                            {' '}Hoy, 18 Mayo 2025
                          </span>
                          {' '}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              local_shipping
                            </span>
                            {' '}Domicilio Ámsterdam (Hoy 18:00 - 20:00)
                          </span>
                        </div>
                        <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                          <strong className="font-semibold text-primary">
                            Artículos:
                          </strong>
                          {' '}Pack Arepas de Choclo (x2), Docena Empanadas Paisas (x1), Arequipe de Antaño
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                      <div className="text-left lg:text-right">
                        <span className="text-[10px] font-label uppercase tracking-widest text-outline block">
                          Total pagado
                        </span>
                        {' '}
                        <span className="font-headline text-2xl font-bold text-primary">
                          €42.50
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Go href="/cuenta/pedidos/PSB-2025-4892" className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label text-xs font-medium hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-xs">
                          <span>
                            Ver Detalle del Pedido
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Go>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low px-6 sm:px-7 py-2.5 flex items-center justify-between text-xs font-label">
                    <span className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base">
                        moped
                      </span>
                      {' '}En preparación artesanal en taller Prinsengracht para ruta vespertina.
                    </span>
                    {' '}
                    <span className="text-secondary font-semibold hover:underline cursor-pointer hidden sm:inline">
                      Rastrear envío →
                    </span>
                  </div>
                </article>
                <article className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="catering" data-status="Pendiente">
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Artisanal long banquet table prepared for private catering in Amsterdam, rustic terracotta plateware, warm candlelight, fresh plantain chips and Colombian culinary banquet presentation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJqbZDKgvbRq7wx06-N_8iDVwpWeBl65GWRjh5jq93kyVlbqYcLybsl32t2wSQqsjJJhNfQNve_b3KhMgzR-pbcA2GzSYLL2u-XOfvFEwscrl-QT0y1grVEAFm1UlyAfJguCshnV--rL7n8emexjxZYG4-8XdFWVHV5cZGPXXJMYPvGWflcZyLm6fdEYR17KGLurvZXkeb_4KD2QbrLS1o8Qln6A052Wblq5M4esq5wPiC60JbSPV" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px] text-on-secondary">
                            outdoor_grill
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline font-bold text-base text-primary tracking-tight">
                            Reserva Catering #CAT-2025-0814
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-secondary-fixed text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-[13px]">
                              pending
                            </span>
                            {' '}Reserva pendiente de confirmación
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                          <span className="flex items-center gap-1 font-medium text-secondary">
                            <span className="material-symbols-outlined text-sm">
                              event
                            </span>
                            {' '}Fecha de evento: 14 Junio 2025
                          </span>
                          {' '}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              group
                            </span>
                            {' '}25 comensales
                          </span>
                          {' '}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              room_service
                            </span>
                            {' '}Servicio a domicilio con chef
                          </span>
                        </div>
                        <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                          <strong className="font-semibold text-primary">
                            Servicio:
                          </strong>
                          {' '}Banquete Fiesta Tradicional Paisa (Cazuelas de fríjoles, chicharrón crocante, plátano maduro y arepa de arriero)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                      <div className="text-left lg:text-right">
                        <span className="text-[10px] font-label uppercase tracking-widest text-outline block">
                          Presupuesto estimado
                        </span>
                        {' '}
                        <span className="font-headline text-2xl font-bold text-primary">
                          €525.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Go href="/cuenta/pedidos/PSB-2025-4892" className="px-4 py-2 rounded-lg bg-surface-container-high text-primary font-label text-xs font-medium hover:bg-surface-variant transition-all flex items-center gap-1.5">
                          <span>
                            Ver Detalle
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Go>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low/70 px-6 sm:px-7 py-2.5 flex items-center justify-between text-xs font-label">
                    <span className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base">
                        info
                      </span>
                      {' '}Nuestro equipo culinario está revisando requerimientos de cocina y disponibilidad logística.
                    </span>
                    {' '}
                    <span className="text-secondary font-semibold hover:underline cursor-pointer hidden sm:inline">
                      Modificar solicitud
                    </span>
                  </div>
                </article>
                <article className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="shop" data-status="Entregado">
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Freshly baked Colombian pandebono cheese breads resting on linen kitchen fabric beside a small artisanal cup of specialty black coffee." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yyifx65VjG5R_Z1ZjSBRQno5nQU4tNz_d5ZR1W6lJn0aHzc-9pgfdq9kk9kcPqnijTaNenK5M1p68Z1lJTOXyFA6bmlKihrkBn28XUTBf0VN5PpSUeEPjnWfuupmfuvZoAzi1YqALAPKykGG-fSjo_Fh0ZzEddm8rxcLyZPDsYUsRoxHOXT_YRw6HCeoxv41x-77qS0fTWGqgK1acbnocJer7aKOKPhG4g-Zunc182NseOm31GM3" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-primary/80 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px] text-on-primary">
                            storefront
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline font-bold text-base text-primary tracking-tight">
                            Pedido Tienda #PSB-2025-3910
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-primary">
                            <span className="material-symbols-outlined text-[13px]">
                              check_circle
                            </span>
                            {' '}Entregado
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              calendar_today
                            </span>
                            {' '}02 Mayo 2025
                          </span>
                          {' '}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              pin_drop
                            </span>
                            {' '}Retiro en Taller Prinsengracht
                          </span>
                        </div>
                        <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                          <strong className="font-semibold text-primary">
                            Artículos:
                          </strong>
                          {' '}Pandebonos tradicionales x6, Café Huila 250g (Grano entero tueste medio)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                      <div className="text-left lg:text-right">
                        <span className="text-[10px] font-label uppercase tracking-widest text-outline block">
                          Total pagado
                        </span>
                        {' '}
                        <span className="font-headline text-2xl font-bold text-primary">
                          €35.90
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Go href="/cuenta/pedidos/PSB-2025-4892" className="px-3.5 py-2 rounded-lg bg-surface-container-low text-primary font-label text-xs font-medium hover:bg-surface-container transition-all">
                          Ver Detalle
                        </Go>
                        {' '}
                        <Go href="/carrito" className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label text-xs font-medium hover:bg-secondary/90 transition-all flex items-center gap-1.5 shadow-xs">
                          <span className="material-symbols-outlined text-sm">
                            replay
                          </span>
                          {' '}
                          <span>
                            Repetir Pedido
                          </span>
                        </Go>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden" data-category="catering" data-status="Entregado">
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Traditional gourmet Colombian lechona served in clay baking dish with crispy roasted skin, seasoned yellow rice and peas, garnished with lime wedges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2FgSvVwP0LC-lp9y3BhbLr8NNcG4sbZHNyMGQd0jB-KH24AGRGOwrhxNE5zn4rgCbbZ2s2JKTZkLo3lpXO4pD2CxRXL6lLjqGNJsmMwRB6bzVrKlzuKu2R4CoYqwpHPkc9RKdI_TkQgty2hIjeWSUX9WG0uX7FYchrTS-_3XZT8wCO-k0iTFenSSRjTS7TltI2Q8WoEl0TMD3YdmHQ0nz7CW-abTwc2lIr8ETDwn2tko6m0tUd070" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px] text-on-secondary">
                            restaurant_menu
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline font-bold text-base text-primary tracking-tight">
                            Reserva Menú #RES-2025-0211
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-primary">
                            <span className="material-symbols-outlined text-[13px]">
                              check_circle
                            </span>
                            {' '}Entregado
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              event
                            </span>
                            {' '}Fecha de evento: 26 Abril 2025
                          </span>
                          {' '}
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-secondary">
                              diversity_3
                            </span>
                            {' '}8 Pax
                          </span>
                        </div>
                        <p className="text-xs font-body text-on-surface-variant line-clamp-1 pt-0.5">
                          <strong className="font-semibold text-primary">
                            Menú Especial:
                          </strong>
                          {' '}Lechona Tolimense Familiar (8 Pax) con arepas redondas y ají casero paisa
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                      <div className="text-left lg:text-right">
                        <span className="text-[10px] font-label uppercase tracking-widest text-outline block">
                          Total pagado
                        </span>
                        {' '}
                        <span className="font-headline text-2xl font-bold text-primary">
                          €74.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Go href="/cuenta/pedidos/PSB-2025-4892" className="px-4 py-2 rounded-lg bg-surface-container-high text-primary font-label text-xs font-medium hover:bg-surface-variant transition-all flex items-center gap-1.5">
                          <span>
                            Ver Detalle
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Go>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="order-card group bg-surface-container-lowest rounded-lg shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden opacity-85 hover:opacity-100" data-category="shop" data-status="Cancelado">
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 overflow-hidden relative">
                        <img className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300" data-alt="Traditional raw corn dough and wooden rolling pin on flour-dusted dark wooden board in an artisanal kitchen setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhRFFxoH1nJTKAbFbXHAYERNMwxOmNr3Tq2zcIRaFysIKLxXhlW_Yh5-O8m3NkUNd9hSB19dw38CYvRGhuNBX75cD-aCxE4PXL1JU0lFosq7jpNJAhe3cuV-dPH31f5TCcw9PDFrI6KY13C6kLHYfHTHn-Al_9xznjCG1ew3dMYiCrOMFuJMURU0oATN7Veuj4OjcBb0f1fWoUJ51b9qV2U1tpdwr_MXE8D2YBDKpGfrY6-KrGLW2l" />
                        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-outline flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px] text-on-primary">
                            close
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline font-bold text-base text-primary/80 tracking-tight line-through">
                            Pedido Tienda #PSB-2025-1049
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-label font-semibold bg-error-container/70 text-on-error-container">
                            <span className="material-symbols-outlined text-[13px]">
                              cancel
                            </span>
                            {' '}Cancelado
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center text-xs font-label text-outline gap-x-4 gap-y-1">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              calendar_today
                            </span>
                            {' '}15 Marzo 2025
                          </span>
                          {' '}
                          <span className="text-error font-medium">
                            Motivo: Cancelado a solicitud del cliente
                          </span>
                        </div>
                        <p className="text-xs font-body text-outline line-clamp-1 pt-0.5">
                          Pack Arepas de Queso Doble Crema x4, Suero Costeño Artesanal (200g)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 shrink-0">
                      <div className="text-left lg:text-right">
                        <span className="text-[10px] font-label uppercase tracking-widest text-outline block">
                          Reembolsado
                        </span>
                        {' '}
                        <span className="font-headline text-2xl font-bold text-outline">
                          €28.00
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Go href="/cuenta/pedidos/PSB-2025-4892" className="px-4 py-2 rounded-lg bg-surface-container-low text-primary font-label text-xs font-medium hover:bg-surface-container transition-all">
                          Ver Detalle
                        </Go>
                      </div>
                    </div>
                  </div>
                </article>
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
                      Entendemos que los eventos y antojos cambian. Puedes contactar directamente a nuestra jefa de taller en Ámsterdam a través de WhatsApp para ajustes de último minuto, alergias alimentarias o especificaciones de entrega en la zona Randstad.
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
