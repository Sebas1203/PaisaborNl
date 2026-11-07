// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_unificado_gesti_n_de_men_s_y_reservas_paisabor
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';

export default function AdminMenusPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface">
      <main className="relative pt-16 w-full px-8 bg-surface">
        <div className="flex flex-col w-full pb-16">
          <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 py-6 border-none">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary-fixed text-on-secondary-fixed font-label">
                  Control Operativo • Cocina de Autor
                </span>
                {' '}
                <span className="text-xs text-outline font-label tracking-wide">
                  Ámsterdam &amp; Randstad
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold text-primary tracking-tight">
                Gestión Unificada: Menús &amp; Reservas
              </h1>
              <p className="text-sm lg:text-base text-on-surface-variant leading-relaxed font-body">
                Control de producción por encargo (24h–48h de anticipación), capacidad de cocina semanal y asignación de reservas de platos típicos para Ámsterdam y Randstad.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-sm transition-all duration-200" type="button">
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                {' '}
                <span>
                  Configurar Cupos
                </span>
              </button>
              {' '}
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-sm transition-all duration-200" type="button">
                <span className="material-symbols-outlined text-lg">
                  print
                </span>
                {' '}
                <span>
                  Hoja de Cocina
                </span>
              </button>
              {' '}
              <Go href="/admin/menus/editar" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-linear-to-r from-primary to-primary-container text-on-primary font-medium text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200" type="button">
                <span className="material-symbols-outlined text-lg text-secondary-container">
                  add_circle
                </span>
                {' '}
                <span>
                  + Nuevo Menú Bajo Reserva
                </span>
              </Go>
            </div>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-4">
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-24 h-24 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between text-outline text-xs font-semibold uppercase tracking-wider font-label mb-2">
                  <span>
                    Capacidad Fin de Semana
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-lg">
                    oven_gen
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-headline font-bold text-primary tracking-tight">
                    88%
                  </span>
                  {' '}
                  <span className="text-xs font-medium text-secondary font-body bg-secondary-fixed/50 px-2 py-0.5 rounded-full">
                    Cupos Críticos
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-snug">
                  44 de 50 raciones asignadas entre sábado y domingo en Atelier.
                </p>
              </div>
              <div className="mt-4 pt-3">
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: "88%" }}></div>
                </div>
                <div className="flex justify-between items-center text-[11px] text-outline font-label mt-1.5">
                  <span>
                    Sábado: 95%
                  </span>
                  {' '}
                  <span>
                    Domingo: 78%
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between text-outline text-xs font-semibold uppercase tracking-wider font-label mb-2">
                  <span>
                    Reservas Confirmadas
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-primary text-lg">
                    receipt_long
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-headline font-bold text-primary tracking-tight">
                    14
                  </span>
                  {' '}
                  <span className="text-sm font-semibold text-secondary font-headline">
                    €842.50
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-snug">
                  Todas liquidadas vía iDEAL o tarjeta con 48h de antelación.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  {' '}100% Insumos Comprados
                </span>
                {' '}
                <span className="text-outline font-label">
                  Semana 43
                </span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between text-outline text-xs font-semibold uppercase tracking-wider font-label mb-2">
                  <span>
                    Plato Más Reservado
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-tertiary text-lg">
                    local_fire_department
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-headline font-bold text-primary truncate" title="Lechona Tolimense Tradicional">
                    Lechona Tolimense
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded-full font-label">
                      6 Fuentes (24 raciones)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-snug">
                  Horneado lento iniciado viernes 22:00 CET en Atelier De Pijp.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-2 text-xs text-outline">
                <span className="material-symbols-outlined text-sm">
                  timelapse
                </span>
                {' '}
                <span className="text-[11px]">
                  Requiere 48h de cocción lenta
                </span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between text-outline text-xs font-semibold uppercase tracking-wider font-label mb-2">
                  <span>
                    Logística Randstad
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-lg">
                    local_shipping
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                    <span className="text-2xl font-headline font-bold text-primary">
                      8
                    </span>
                    {' '}
                    <span className="text-[11px] font-medium text-on-surface-variant">
                      Domicilio Térmico
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                    <span className="text-2xl font-headline font-bold text-primary">
                      6
                    </span>
                    {' '}
                    <span className="text-[11px] font-medium text-on-surface-variant">
                      Pick-up Atelier
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-outline font-label">
                <span>
                  Rutas: AMS • UTR • ROT
                </span>
                {' '}
                <span className="text-secondary font-medium">
                  1 Chofer propio
                </span>
              </div>
            </div>
          </section>
          <div className="mt-8 flex items-center justify-between gap-4 border-none border-b-0 pb-1">
            <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl">
              <button className="tab-btn px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 bg-surface-container-lowest text-primary shadow-xs" id="tab-reservas-btn" type="button">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    dinner_dining
                  </span>
                  {' '}Reservas Activas de Menús{' '}
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-secondary-fixed text-on-secondary-fixed ml-1">
                    14
                  </span>
                </span>
              </button>
              {' '}
              <button className="tab-btn px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-catalogo-btn" type="button">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    menu_book
                  </span>
                  {' '}Catálogo de Menús (Bajo Reserva){' '}
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-surface-container-high text-outline ml-1">
                    4
                  </span>
                </span>
              </button>
              {' '}
              <button className="tab-btn px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-horneada-btn" type="button">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    calendar_view_week
                  </span>
                  {' '}Calendario de Horneada &amp; Capacidad
                </span>
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-sm text-secondary">
                info
              </span>
              {' '}
              <span>
                Cierre automático de reservas:{' '}
                <strong>
                  Jueves 20:00 CET
                </strong>
              </span>
            </div>
          </div>
          <div className="tab-panel flex flex-col gap-6 mt-6" id="tab-reservas-panel">
            <div className="p-4 rounded-xl bg-surface-container-low shadow-[0_2px_12px_rgba(28,28,25,0.03)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              <div className="flex-1 flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:w-72">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">
                    search
                  </span>
                  {' '}
                  <input className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-hidden focus:ring-1 focus:ring-secondary transition-all" id="filter-search" placeholder="Buscar cliente, tel, #RES..." type="text" />
                </div>
                <div className="relative w-full sm:w-auto">
                  <select className="w-full sm:w-auto text-xs px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary pr-8 cursor-pointer" id="filter-menu">
                    <option value="all">
                      Todos los menús
                    </option>
                    <option value="Lechona Tolimense">
                      Lechona Tolimense
                    </option>
                    <option value="Bandeja Paisa">
                      Bandeja Paisa
                    </option>
                    <option value="Ajiaco Santafereño">
                      Ajiaco Santafereño
                    </option>
                    <option value="Sancocho Trifásico">
                      Sancocho Trifásico
                    </option>
                    <option value="Sobrebarriga">
                      Sobrebarriga en Salsa Criolla
                    </option>
                  </select>
                </div>
                <div className="relative w-full sm:w-auto">
                  <select className="w-full sm:w-auto text-xs px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary pr-8 cursor-pointer" id="filter-day">
                    <option value="all">
                      Cualquier día
                    </option>
                    <option value="Viernes">
                      Viernes (25 Oct)
                    </option>
                    <option value="Sábado">
                      Sábado (26 Oct)
                    </option>
                    <option value="Domingo">
                      Domingo (27 Oct)
                    </option>
                  </select>
                </div>
                <div className="relative w-full sm:w-auto">
                  <select className="w-full sm:w-auto text-xs px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-hidden focus:ring-1 focus:ring-secondary pr-8 cursor-pointer" id="filter-type">
                    <option value="all">
                      Todas las modalidades
                    </option>
                    <option value="Domicilio">
                      Domicilio Randstad
                    </option>
                    <option value="Retiro">
                      Retiro en De Pijp
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button className="text-xs text-outline hover:text-primary px-3 py-2 rounded-lg hover:bg-surface-container transition-colors" type="button">
                  Limpiar filtros
                </button>
                <div className="h-4 w-px bg-surface-container-highest"></div>
                <span className="text-xs font-semibold text-primary font-label">
                  Mostrando:{' '}
                  <span id="res-count">
                    6
                  </span>
                  {' '}reservas
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-outline text-[11px] font-semibold uppercase tracking-wider font-label">
                      <th className="py-3.5 px-4">
                        Reserva &amp; Fecha
                      </th>
                      <th className="py-3.5 px-4">
                        Cliente &amp; Contacto
                      </th>
                      <th className="py-3.5 px-4">
                        Menú &amp; Raciones
                      </th>
                      <th className="py-3.5 px-4">
                        Horario Programado
                      </th>
                      <th className="py-3.5 px-4">
                        Modalidad
                      </th>
                      <th className="py-3.5 px-4">
                        Total &amp; Pago
                      </th>
                      <th className="py-3.5 px-4">
                        Estado Cocina
                      </th>
                      <th className="py-3.5 px-4 text-right">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-xs font-body text-on-surface" id="reservas-table-body">
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Lukas van den Berg" data-day="Sábado" data-menu="Lechona Tolimense" data-type="Domicilio">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-089
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            23 Oct, 11:20 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Lukas van den Berg
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 4821 9901
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            lukas.vdb@gmail.com
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Lechona Tolimense Tradicional
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}2 Fuentes Familiares (8 porciones)
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline italic">
                            Nota: Sin cuero extra para niños
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Sábado 26 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            13:00 - 14:00 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Ventana Almuerzo
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed w-max">
                            <span className="material-symbols-outlined text-xs">
                              local_shipping
                            </span>
                            {' '}Domicilio Térmico
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant truncate max-w-[150px]" title="Singel 342, 1016 AK Amsterdam">
                            Singel 342, Amsterdam
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €74.00
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-surface-container font-medium text-primary focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" defaultValue="fogon">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle / WhatsApp" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Camila Restrepo" data-day="Sábado" data-menu="Ajiaco Santafereño" data-type="Retiro">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-090
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            23 Oct, 14:05 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Camila Restrepo
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 1933 0082
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            c.restrepo@outlook.com
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Ajiaco Santafereño Bogotano
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}3 Porciones (Con alcaparras &amp; crema)
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Sábado 26 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            14:15 - 15:00 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Recogida Puntual
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-surface-container-high text-primary w-max">
                            <span className="material-symbols-outlined text-xs">
                              store
                            </span>
                            {' '}Retiro en Atelier
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            Gerard Doustraat 54, De Pijp
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €52.50
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-surface-container font-medium text-primary focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" defaultValue="cola">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Matthijs de Boer" data-day="Domingo" data-menu="Bandeja Paisa" data-type="Domicilio">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-091
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            23 Oct, 18:40 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Matthijs de Boer
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 9012 3456
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            matthijs@studioarch.nl
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Bandeja Paisa de la Hacienda
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}4 Raciones Completas (Chicharrón carnudo)
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline italic">
                            Nota: Empacar aguacate entero por separado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Domingo 27 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            12:30 - 13:30 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Utrecht Ruta Central
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed w-max">
                            <span className="material-symbols-outlined text-xs">
                              local_shipping
                            </span>
                            {' '}Domicilio Térmico
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant truncate max-w-[150px]" title="Oudegracht 118, Utrecht">
                            Oudegracht 118, Utrecht
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €84.00
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-surface-container font-medium text-primary focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" defaultValue="cola">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Valeria Montoya" data-day="Domingo" data-menu="Sancocho Trifásico" data-type="Domicilio">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-092
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            24 Oct, 09:15 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Valeria Montoya
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 7744 1290
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            valem@company.nl
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Sancocho Trifásico en Leña
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}2 Porciones (Costilla, pollo, cerdo)
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Domingo 27 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            14:00 - 15:00 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Ruta Róterdam
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed w-max">
                            <span className="material-symbols-outlined text-xs">
                              local_shipping
                            </span>
                            {' '}Domicilio Térmico
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant truncate max-w-[150px]" title="Witte de Withstraat 44, Rotterdam">
                            Witte de Withstraat 44
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €38.00
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-surface-container font-medium text-primary focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" defaultValue="cola">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Sander Bakker" data-day="Sábado" data-menu="Lechona Tolimense" data-type="Retiro">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-093
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            24 Oct, 10:02 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Sander Bakker
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 3320 8812
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            sbakker@kpnmail.nl
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Lechona Tolimense Tradicional
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}1 Fuente (4 porciones)
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Sábado 26 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            12:00 - 12:30 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Recogida Temprana
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-surface-container-high text-primary w-max">
                            <span className="material-symbols-outlined text-xs">
                              store
                            </span>
                            {' '}Retiro en Atelier
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            Gerard Doustraat 54
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €37.00
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-surface-container font-medium text-primary focus:outline-hidden focus:ring-1 focus:ring-secondary cursor-pointer" defaultValue="fogon">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="res-row hover:bg-surface-container-low transition-colors duration-150" data-client="Felipe Giraldo" data-day="Viernes" data-menu="Sobrebarriga" data-type="Retiro">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            #RES-2024-088
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline font-label">
                            22 Oct, 16:45 CET
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Felipe Giraldo
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            +31 6 5509 2311
                          </span>
                          {' '}
                          <span className="text-[11px] text-outline">
                            fgiraldo@techadam.nl
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-primary">
                            Sobrebarriga en Salsa Criolla
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-secondary font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {' '}2 Porciones (Con yuca al vapor)
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">
                            Viernes 25 Oct
                          </span>
                          {' '}
                          <span className="text-[11px] text-secondary font-label font-bold">
                            19:00 - 19:45 CET
                          </span>
                          {' '}
                          <span className="text-[10px] text-outline">
                            Cena de Viernes
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-surface-container-high text-primary w-max">
                            <span className="material-symbols-outlined text-xs">
                              store
                            </span>
                            {' '}Retiro en Atelier
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant">
                            Gerard Doustraat 54
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-headline font-bold text-primary text-sm">
                            €36.00
                          </span>
                          {' '}
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                            <span className="material-symbols-outlined text-xs">
                              check_circle
                            </span>
                            {' '}iDeal Pagado
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <select className="text-xs px-2.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-700 cursor-pointer" defaultValue="empaque">
                          <option value="cola">
                            En cola de cocción
                          </option>
                          <option value="fogon">
                            En Fogón / Horneada
                          </option>
                          <option value="empaque">
                            Listo para despacho
                          </option>
                          <option value="entregado">
                            Entregado
                          </option>
                        </select>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="Imprimir Etiqueta Térmica" type="button">
                            <span className="material-symbols-outlined text-base">
                              print
                            </span>
                          </button>
                          {' '}
                          <button className="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="Ver Detalle" type="button">
                            <span className="material-symbols-outlined text-base">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant font-label">
                <div className="flex items-center gap-2">
                  <span>
                    Mostrando 6 de 14 pedidos registrados
                  </span>
                  {' '}
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  {' '}
                  <span>
                    Próximo lote de horneada: Hoy 21:00 CET
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-md hover:bg-surface-container text-outline hover:text-primary disabled:opacity-30" disabled type="button">
                    <span className="material-symbols-outlined text-sm">
                      chevron_left
                    </span>
                  </button>
                  {' '}
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest font-bold text-primary shadow-xs">
                    1
                  </span>
                  {' '}
                  <button className="px-2.5 py-1 rounded-md hover:bg-surface-container text-on-surface" type="button">
                    2
                  </button>
                  {' '}
                  <button className="p-1.5 rounded-md hover:bg-surface-container text-outline hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-panel hidden flex-col gap-6 mt-6" id="tab-catalogo-panel">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-headline font-bold text-primary">
                  Platos Típicos Tradicionales Bajo Encargo
                </h2>
                <p className="text-xs text-on-surface-variant">
                  Menús con cocción prolongada que requieren aprovisionamiento con antelación fija.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-outline font-label">
                  Capacidad Semanal Total:{' '}
                  <strong>
                    50 Raciones
                  </strong>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional Colombian Lechona Tolimense served in an artisanal rustic clay platter, crispy golden pork skin, yellow peas and rice stuffing, garnished with arepa and lime wedge, warm natural overhead studio lighting on dark wooden table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcwf-rjW67LhVLKzPgYgZ_1Q2VP1wT-fLcEWykNmT7g42qj_CFcQ2YBlExoH6qC4pDI8559AG0yWEhNDAb9Lk8YE9lKUy6zi4LIpmWD4aM9h2M6XdYO1wWvX_vNZcYNMytlYDMVeA-7RHtQ6Qt1UqHv_Q4jv7SbmouGZI1FcW4P-k1WvTDfbCQDllWQOQeRjwCVAW7h4KBdFjUGEx8BLUUHyU041QeRw1L1k1NqLuwY84K0NghmPt5" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed font-label">
                        Requiere 48h
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                      </label>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-xs text-on-primary bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <span className="font-label text-[11px]">
                        Cupo Fin de Semana
                      </span>
                      {' '}
                      <span className="font-bold text-[11px]">
                        18 / 20 porciones
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline font-bold text-primary text-base leading-snug">
                        Lechona Tolimense
                      </h3>
                      <span className="text-base font-headline font-bold text-secondary">
                        €18.50
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      Cerdo relleno de arveja amarilla, arroz adobado y piel ultra crujiente horneada por 12 horas.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-outline font-label">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          room_service
                        </span>
                        {' '}48h Antelación
                      </span>
                      {' '}
                      <span>
                        •
                      </span>
                      {' '}
                      <span className="text-emerald-700 font-semibold status-label">
                        Activo en Web
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-xs transition-colors" type="button">
                    Ajustar Cupo
                  </button>
                  {' '}
                  <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" title="Editar Plato" type="button">
                    <span className="material-symbols-outlined text-base">
                      edit
                    </span>
                  </button>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional Bandeja Paisa in an artisanal ceramic bowl, crispy Colombian pork belly chicharrón, red beans, powdered ground beef, fried ripe plantain, fried egg, avocado slice and white arepa, cinematic warm lighting, gourmet editorial Colombian feast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKm8KxJKr4ibNAIPgNJOt-xHmG_h-6TpNYN0mD6Xz79MKHXoTp6835gQ29dDYJ0hd9Wt7VM8Re5iahwRLZ9FDguTxF2JrErTBnpAMl-OJ0_OlsnmB7AiCGfWhN_IW8NKtDwJ5en6OUT2PxoCHPec4XO2oFu_Wk3HLkaGPlXPNVLYVs3A_2RIGZkCjcIbFiY51mE8ipUar8ToeJFR2y2ePGhf9B_uOkLBESv30A13we-bQa1DHYUeIt" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed font-label">
                        Requiere 24h
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                      </label>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-xs text-on-primary bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <span className="font-label text-[11px]">
                        Cupo Fin de Semana
                      </span>
                      {' '}
                      <span className="font-bold text-[11px]">
                        11 / 15 porciones
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline font-bold text-primary text-base leading-snug">
                        Bandeja Paisa de la Hacienda
                      </h3>
                      <span className="text-base font-headline font-bold text-secondary">
                        €21.00
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      Frijoles cargamanto en leña, chicharrón de 7 cortes, carne molida especiada, chorizo santarrosano y arepa de chócolo.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-outline font-label">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          room_service
                        </span>
                        {' '}24h Antelación
                      </span>
                      {' '}
                      <span>
                        •
                      </span>
                      {' '}
                      <span className="text-emerald-700 font-semibold status-label">
                        Activo en Web
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-xs transition-colors" type="button">
                    Ajustar Cupo
                  </button>
                  {' '}
                  <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" title="Editar Plato" type="button">
                    <span className="material-symbols-outlined text-base">
                      edit
                    </span>
                  </button>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional Colombian Ajiaco soup in a traditional black La Chamba clay pot, shredded chicken, three kinds of native potatoes, corn cob wheel, fresh capers, cream swirl, and side of avocado and white rice, high culinary aesthetics, soft atmospheric lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbyG-R76zsOyQwqBDTRTI_vszodFKQGiTP6vJfoMQ1jwEyd8xhoocfjiDLNfdpYXWAuOdm1sBUUyf_OrDAtVis2dUEXxUnssNGBMvhjfuSob6zKipvktgNRk2hIgJy8uSmugPWfk5AjSrxyHQyW73Fk5f1KhBi5E0utMhUFnGgGSQAZ6wAjab8Tbsg7DGw-isT9ph5PeBzAtFxBHsDiBLAsJb6AXZ6GKQ5ccHDmM2YgncHYfapAjQQ" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed font-label">
                        Requiere 24h
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                      </label>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-xs text-on-primary bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <span className="font-label text-[11px]">
                        Cupo Fin de Semana
                      </span>
                      {' '}
                      <span className="font-bold text-[11px]">
                        8 / 12 porciones
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline font-bold text-primary text-base leading-snug">
                        Ajiaco Santafereño
                      </h3>
                      <span className="text-base font-headline font-bold text-secondary">
                        €17.50
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      Caldo denso de tres papas andinas aromatizado con guascas frescas traídas de Colombia, pollo desmechado y alcaparras.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-outline font-label">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          room_service
                        </span>
                        {' '}24h Antelación
                      </span>
                      {' '}
                      <span>
                        •
                      </span>
                      {' '}
                      <span className="text-emerald-700 font-semibold status-label">
                        Activo en Web
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-xs transition-colors" type="button">
                    Ajustar Cupo
                  </button>
                  {' '}
                  <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" title="Editar Plato" type="button">
                    <span className="material-symbols-outlined text-base">
                      edit
                    </span>
                  </button>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional Colombian Sancocho soup served in dark terracotta bowl with cuts of beef shank, pork, and chicken, plantain, yuca chunks, topped with fresh coriander, served alongside spicy aji picante and avocado, culinary food photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8n0Re6KuNtTSDhL0cCsx3ZCdaO0_vSqage6v2EZXRdJzAhjl_26SzlC7aWHjUJV4LMxX1k_aXV3g1owv9uloxtcT1IjM_0VajE5BBTIP3up1wQY1zRhSInlfqH5V5e_rAyAnfGUDA9HeLkwwS8SdaFjOcIPNuPMA1CaL-zaNt5G4m937_P0o26GYpDW7h9bGam-ffx_ctDS6Ncl8JMaEQHIfwbyp46meMKvJxFEVrZ_sAyQ9-ykne" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed font-label">
                        Requiere 48h
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                      </label>
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-xs text-on-primary bg-primary/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <span className="font-label text-[11px]">
                        Cupo Fin de Semana
                      </span>
                      {' '}
                      <span className="font-bold text-[11px]">
                        7 / 10 porciones
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline font-bold text-primary text-base leading-snug">
                        Sancocho Trifásico
                      </h3>
                      <span className="text-base font-headline font-bold text-secondary">
                        €19.00
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      Sopa montañera cocida con leña: costilla de res, lomo de cerdo y gallina campesina con mazorca tierna y plátano verde.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-outline font-label">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">
                          room_service
                        </span>
                        {' '}48h Antelación
                      </span>
                      {' '}
                      <span>
                        •
                      </span>
                      {' '}
                      <span className="text-emerald-700 font-semibold status-label">
                        Activo en Web
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-medium text-xs transition-colors" type="button">
                    Ajustar Cupo
                  </button>
                  {' '}
                  <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" title="Editar Plato" type="button">
                    <span className="material-symbols-outlined text-base">
                      edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-panel hidden flex-col gap-6 mt-6" id="tab-horneada-panel">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-headline font-bold text-primary">
                    Cronograma de Cocina &amp; Fogones de la Semana 43
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Control de tiempos críticos de marinado (24h) y horneado en lote (12h) para entregas óptimas.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold font-label">
                    Capacidad Máxima Semanal: 50 Cupos
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-headline font-bold text-primary">
                      Viernes 25 Oct
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-outline font-label">
                      4 Pedidos
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-primary font-semibold">
                        <span>
                          08:00 - 12:00 CET
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-surface-container text-outline">
                          Mise en place
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Recepción de carnes frescas y especias desde Rungis.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-secondary font-semibold">
                        <span>
                          21:00 CET (Noche)
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-secondary-fixed text-on-secondary-fixed">
                          Horno 1 Inicia
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Entrada de 6 lechonas a horno lento 110°C (12 horas).
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-headline font-bold text-primary">
                      Sábado 26 Oct (Pico)
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-secondary font-label">
                      18 Pedidos (95% Cupo)
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-primary font-semibold">
                        <span>
                          09:00 CET
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-tertiary-fixed text-on-tertiary-fixed">
                          Fogón 1
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Cocción de fondos de Ajiaco (Papas criollas y guascas).
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-primary font-semibold">
                        <span>
                          12:00 - 15:00 CET
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-secondary-fixed text-on-secondary-fixed">
                          Despacho
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Rutas Amsterdam Centro &amp; Retiros en Atelier De Pijp.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-headline font-bold text-primary">
                      Domingo 27 Oct
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-outline font-label">
                      12 Pedidos (78% Cupo)
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-primary font-semibold">
                        <span>
                          07:30 CET
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-tertiary-fixed text-on-tertiary-fixed">
                          Fogón 2
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Olla de Sancocho Trifásico y fritura de chicharrones.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest text-xs flex flex-col gap-1 shadow-xs">
                      <div className="flex justify-between items-center text-primary font-semibold">
                        <span>
                          11:30 CET
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 text-[10px] rounded-sm bg-secondary-fixed text-on-secondary-fixed">
                          Chofer Salida
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Ruta Randstad Sur (Utrecht &amp; Róterdam térmico).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-8 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none z-50" id="toast">
            <span className="material-symbols-outlined text-secondary-container text-base">
              check_circle
            </span>
            {' '}
            <span id="toast-text">
              Estado actualizado correctamente
            </span>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
