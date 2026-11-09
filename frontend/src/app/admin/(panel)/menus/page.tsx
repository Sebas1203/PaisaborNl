// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_unificado_gesti_n_de_men_s_y_reservas_paisabor
/* eslint-disable @next/next/no-img-element */
import { ItemImage } from '@/components/ItemImage';
import { ESPECIALES, itemPorId } from '@/data';
import { RESERVAS } from '@/data/mock';
import { formatDias, formatEUR, formatFecha } from '@/lib/format';
import { Go } from '@/components/ui/Go';
import { SEDE_PRINCIPAL } from '@/config/sedes';

// MOCK: cifras calculadas con las reservas de ejemplo
const RESERVA_LABELS = { pendiente: "Pendiente", confirmada: "Confirmada", finalizada: "Finalizada", rechazada: "Rechazada" } as const;
const CONFIRMADAS = RESERVAS.filter((r) => r.estado === "confirmada");
const importe = (r: (typeof RESERVAS)[number]) => (itemPorId(r.platoId)?.precio ?? 0) * r.porciones;
const IMPORTE_CONFIRMADAS = CONFIRMADAS.reduce((acc, r) => acc + importe(r), 0);
const PORCIONES = RESERVAS.filter((r) => r.estado !== "rechazada").reduce((acc, r) => acc + r.porciones, 0);
const MAS_RESERVADO = [...ESPECIALES].sort(
  (a, b) => RESERVAS.filter((r) => r.platoId === b.id).length - RESERVAS.filter((r) => r.platoId === a.id).length
)[0];

export default function AdminMenusPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
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
                  Ámsterdam
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold text-primary tracking-tight">
                Gestión Unificada: Menús &amp; Reservas
              </h1>
              <p className="text-sm lg:text-base text-on-surface-variant leading-relaxed font-body">
                Control de producción por encargo (24h–48h de anticipación), capacidad de cocina semanal y asignación de reservas de platos típicos en Ámsterdam.
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
                    {PORCIONES}
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
                    {CONFIRMADAS.length}
                  </span>
                  {' '}
                  <span className="text-sm font-semibold text-secondary font-headline">
                    {formatEUR(IMPORTE_CONFIRMADAS)}
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
                  <span className="text-lg font-headline font-bold text-primary truncate" title={MAS_RESERVADO.nombre}>
                    {MAS_RESERVADO.nombre}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded-full font-label">
                      6 Fuentes (24 raciones)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-snug">
                  Preparación con receta tradicional antioqueña en {SEDE_PRINCIPAL.direccion}.
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
                    Logística Ámsterdam
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
                    {RESERVAS.length}
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
                    {ESPECIALES.length}
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
            <div className="p-4 rounded-xl bg-surface-container-low shadow-[0_2px_12px_rgba(28,28,25,0.03)] flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-between gap-4">
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
                    {ESPECIALES.map((plato) => (
                      <option key={plato.id} value={plato.id}>
                        {plato.nombre}
                      </option>
                    ))}
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
                      Domicilio Ámsterdam
                    </option>
                    <option value="Retiro">
                      Retiro en {SEDE_PRINCIPAL.direccion}
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
                    {RESERVAS.map((reserva) => {
                      const plato = ESPECIALES.find((p) => p.id === reserva.platoId);
                      if (!plato) return null;
                      return (
                        <tr key={reserva.id} className="res-row hover:bg-surface-container-low/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-mono font-bold text-secondary">#{reserva.id}</div>
                            <div className="text-[11px] text-outline">{formatFecha(reserva.fecha)}</div>
                          </td>
                          <td className="py-4 px-4 font-medium text-on-surface">{reserva.cliente}</td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-primary">{plato.nombre}</div>
                            <div className="text-[11px] text-outline">{reserva.porciones} porciones</div>
                          </td>
                          <td className="py-4 px-4 text-on-surface-variant">{formatDias(plato.dias)}</td>
                          <td className="py-4 px-4 text-on-surface-variant">Recogida o domicilio</td>
                          <td className="py-4 px-4">
                            <div className="font-headline font-bold text-primary">{formatEUR(plato.precio * reserva.porciones)}</div>
                            <div className="text-[10px] text-outline">IVA incl.</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase bg-secondary-fixed text-on-secondary-fixed">{RESERVA_LABELS[reserva.estado]}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant font-label">
                <div className="flex items-center gap-2">
                  <span>
                    Mostrando {RESERVAS.length} reservas de ejemplo
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
              {ESPECIALES.map((plato) => (
                <div key={plato.id} className="rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] overflow-hidden flex flex-col justify-between group">
                  <div className="relative h-44 bg-surface-container-low overflow-hidden">
                    <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed font-label">{formatDias(plato.dias)}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-headline font-bold text-primary text-base leading-snug">{plato.nombre}</h3>
                      <span className="text-base font-headline font-bold text-secondary text-right">
                        {formatEUR(plato.precio)}
                        {/* precio provisional si precioEstimado */}
                        {plato.precioEstimado && <span className="block text-[10px] font-normal text-on-surface-variant">Precio estimado</span>}
                      </span>
                    </div>
                    {plato.descripcion && <p className="text-xs text-on-surface-variant line-clamp-2">{plato.descripcion}</p>}
                    <p className="text-[11px] text-outline font-label">Solo fines de semana · bajo reserva</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-panel hidden flex-col gap-6 mt-6" id="tab-horneada-panel">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(28,28,25,0.04)] flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-headline font-bold text-primary">
                    Cronograma de Cocina de la Semana
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
                          Cocina 1
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Preparación de los especiales del sábado.
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
                        Domicilios en Ámsterdam y retiros en {SEDE_PRINCIPAL.direccion}.
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
                          Cocina 2
                        </span>
                      </div>
                      <span className="text-on-surface-variant">
                        Preparación de los especiales del domingo.
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
                        Entregas a domicilio en Ámsterdam.
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
