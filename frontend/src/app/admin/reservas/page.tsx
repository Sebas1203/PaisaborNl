// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_reservas
/* eslint-disable @next/next/no-img-element */
import { itemPorId } from '@/data';
import { RESERVAS } from '@/data/mock';
import { formatEUR, formatFecha, IVA_INCLUIDO } from '@/lib/format';

// MOCK: cifras calculadas con las reservas de ejemplo
const RESERVA_LABELS = { pendiente: "Pendiente de confirmación", confirmada: "Confirmada", finalizada: "Finalizada", rechazada: "Rechazada" } as const;
const CUENTA = Object.fromEntries(
  (Object.keys(RESERVA_LABELS) as (keyof typeof RESERVA_LABELS)[]).map((e) => [e, RESERVAS.filter((r) => r.estado === e).length])
) as Record<keyof typeof RESERVA_LABELS, number>;
const PORCIONES = RESERVAS.filter((r) => r.estado !== "rechazada").reduce((acc, r) => acc + r.porciones, 0);
const IMPORTE = RESERVAS.filter((r) => r.estado !== "rechazada").reduce((acc, r) => acc + (itemPorId(r.platoId)?.precio ?? 0) * r.porciones, 0);

export default function AdminReservasPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full pb-16">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-6 sm:p-8 mb-8 shadow-xs">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>
            <div className="absolute right-32 -bottom-20 w-64 h-64 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold tracking-wider uppercase text-secondary mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {' '}Fogón &amp; Celebraciones · Países Bajos
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                  Gestión de Reservas &amp; Catering
                </h1>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                  Supervisión logística de banquetes colombianos, menaje tradicional y cotizaciones activas para la comunidad en Ámsterdam, Utrecht y Randstad.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Por Confirmar
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary mt-0.5">
                    {CUENTA.pendiente}
                  </div>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-secondary">
                      priority_high
                    </span>
                    {' '}2 urgentes
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Confirmadas
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    {CUENTA.confirmada}
                  </div>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-primary">
                      event
                    </span>
                    {' '}Este mes
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Total Pax Activo
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    {PORCIONES}
                  </div>
                  <span className="text-[11px] text-on-surface-variant">
                    Comensales
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Facturación Est.
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    {formatEUR(IMPORTE)}
                  </div>
                  <span className="text-[11px] text-outline">
                    Incl. 9% BTW
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl overflow-x-auto" id="filter-tab-group">
              <button className="filter-btn active-tab px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-primary text-on-primary transition-all">
                Todas ({RESERVAS.length})
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                {' '}Pendientes ({CUENTA.pendiente})
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Confirmadas ({CUENTA.confirmada})
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Finalizadas ({CUENTA.finalizada})
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Rechazadas ({CUENTA.rechazada})
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base">
                  search
                </span>
                {' '}
                <input className="w-full bg-surface-container-lowest text-xs text-on-surface pl-9 pr-3 py-2 rounded-lg outline-hidden placeholder:text-outline focus:bg-surface-container-low transition-colors shadow-xs" id="reservation-search" placeholder="Buscar cliente, código..." type="text" />
              </div>
              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary hover:bg-surface-container transition-all shadow-xs">
                <span className="material-symbols-outlined text-base">
                  calendar_view_week
                </span>
                {' '}
                <span>
                  Calendario
                </span>
              </button>
              {' '}
              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-xs font-semibold text-on-secondary hover:bg-primary-container transition-all shadow-xs">
                <span className="material-symbols-outlined text-base">
                  add
                </span>
                {' '}
                <span>
                  Crear Reserva
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6" id="cards-container">
            {RESERVAS.map((reserva) => {
              const plato = itemPorId(reserva.platoId);
              if (!plato) return null;
              return (
                <article key={reserva.id} className="reservation-card bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(28,28,25,0.04)] transition-all">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="font-mono text-xs font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-md">#{reserva.id}</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed-dim/30 text-[11px] font-semibold text-on-secondary-container">
                          {RESERVA_LABELS[reserva.estado]}
                        </span>
                      </div>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary mb-2">{plato.nombre}</h2>
                      <p className="text-xs text-on-surface-variant mb-4">Solo fines de semana · bajo reserva</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-surface-container-low p-4 rounded-lg text-sm">
                        <div>
                          <span className="block text-[10px] uppercase font-bold tracking-wider text-outline">Cliente</span>
                          {reserva.cliente}
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase font-bold tracking-wider text-outline">Fecha</span>
                          {formatFecha(reserva.fecha)}
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase font-bold tracking-wider text-outline">Porciones</span>
                          {reserva.porciones}
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-72 shrink-0 bg-surface-container-low rounded-xl p-5">
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">{IVA_INCLUIDO}</span>
                      <div className="font-headline text-3xl font-extrabold text-primary">{formatEUR(plato.precio * reserva.porciones)}</div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        {reserva.porciones} × {formatEUR(plato.precio)}
                        {/* precio provisional si precioEstimado */}
                        {plato.precioEstimado && " · Precio estimado"}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <span className="material-symbols-outlined">
                  inventory
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Stock &amp; Insumos Importados
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                Masa de Maíz Trillado &amp; Hojas de Plátano
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Inventario suficiente para 120 tamales adicionales. Próximo embarque desde Bogotá llega el viernes al puerto de Rotterdam.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <span className="material-symbols-outlined">
                  thermostat
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Protocolo Térmico HACCP
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                Menaje Caliente &amp; Cadena de Frío
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Los contenedores isotérmicos mantienen la lechona a &gt;68°C durante traslados de hasta 90 minutos dentro del anillo A10 de Ámsterdam.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Pasarela Mollie NL
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                iDEAL &amp; Tarjetas
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Los enlaces generados expiran en 48 horas. Se aplica un recargo automático del 50% como adelanto para confirmar la fecha del catering.
              </p>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden" id="modal-reject">
            <div className="bg-surface-container-lowest max-w-md w-full rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-error">
                  <span className="material-symbols-outlined">
                    cancel
                  </span>
                  <h3 className="font-headline text-lg font-bold">
                    Rechazar Reserva
                  </h3>
                </div>
                <button className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <p className="text-xs text-on-surface-variant mb-4">
                Indica el motivo para notificar al cliente cordialmente por correo y liberar la fecha en el calendario de cocina.
              </p>
              <div className="space-y-2 mb-4">
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input defaultChecked className="accent-secondary" name="reject_reason" type="radio" value="capacidad" />
                  {' '}
                  <span>
                    Capacidad de cocina al máximo en esta fecha
                  </span>
                </label>
                {' '}
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input className="accent-secondary" name="reject_reason" type="radio" value="distancia" />
                  {' '}
                  <span>
                    Ubicación fuera del radio logístico de Ámsterdam
                  </span>
                </label>
                {' '}
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input className="accent-secondary" name="reject_reason" type="radio" value="insumos" />
                  {' '}
                  <span>
                    Ingredientes o menaje artesanal no disponibles
                  </span>
                </label>
              </div>
              <textarea className="w-full bg-surface-container-low text-xs p-3 rounded-lg outline-hidden placeholder:text-outline mb-5 focus:bg-surface-container" placeholder="Mensaje personalizado opcional para el cliente..." rows={2}></textarea>
              <div className="flex items-center justify-end gap-2">
                <button className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
                  Cancelar
                </button>
                {' '}
                <button className="px-4 py-2 rounded-lg text-xs font-semibold bg-error text-on-error hover:opacity-90">
                  Confirmar Rechazo
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden" id="modal-adjust">
            <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-secondary">
                    request_quote
                  </span>
                  <h3 className="font-headline text-lg font-bold">
                    Ajustar Cotización de Catering
                  </h3>
                </div>
                <button className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                    Reserva Seleccionada
                  </label>
                  <div className="font-mono text-sm font-semibold text-secondary" id="modal-adjust-code">
                    #CAT-2025-XXXX
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                      Monto Base (€ sin BTW)
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm font-semibold p-2.5 rounded-lg outline-hidden focus:bg-surface-container" id="input-subtotal" type="number" defaultValue="1600.91" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                      Tasa BTW Aplicable
                    </label>
                    <select className="w-full bg-surface-container-low text-sm p-2.5 rounded-lg outline-hidden">
                      <option value="9">
                        9% (Alimentos y bebidas)
                      </option>
                      <option value="21">
                        21% (Servicio de garzones/alquiler)
                      </option>
                      <option value="mixto">
                        Mixto (9% + 21%)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                    Costos Adicionales / Descuentos
                  </label>
                  <div className="flex items-center gap-2">
                    <input className="flex-1 bg-surface-container-low text-xs p-2.5 rounded-lg outline-hidden" placeholder="Ej. Envío térmico especial Noord" type="text" />
                    {' '}
                    <input className="w-24 bg-surface-container-low text-xs p-2.5 rounded-lg outline-hidden" placeholder="€ + / -" type="number" />
                  </div>
                </div>
                <div className="p-3 bg-secondary-fixed/30 rounded-lg flex items-center justify-between">
                  <span className="text-xs font-medium text-on-secondary-fixed-variant">
                    Total Recalculado (con BTW):
                  </span>
                  {' '}
                  <span className="font-headline text-lg font-bold text-primary" id="recalculated-total">
                    Por calcular
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
                  Descartar
                </button>
                {' '}
                <button className="px-5 py-2 rounded-lg text-xs font-semibold bg-primary text-on-primary hover:bg-primary-container">
                  Guardar &amp; Notificar Cliente
                </button>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 text-xs font-medium translate-y-24 opacity-0 transition-all duration-300 z-50" id="toast">
            <span className="material-symbols-outlined text-secondary text-base" id="toast-icon">
              check_circle
            </span>
            {' '}
            <span id="toast-message">
              Operación completada con éxito
            </span>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
