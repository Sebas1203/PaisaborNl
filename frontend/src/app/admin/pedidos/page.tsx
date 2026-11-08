// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_pedidos
/* eslint-disable @next/next/no-img-element */
import { iva } from '@/config/fiscal';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { lineasConItem, PEDIDOS, totales } from '@/data/mock';
import { formatEUR, formatFecha, ORDER_STATUS_LABELS } from '@/lib/format';
import type { OrderStatus } from '@/types';

// MOCK: cifras calculadas con los pedidos de ejemplo
const ACTIVOS = PEDIDOS.filter((p) => p.estado !== "cancelado");
const FACTURACION = ACTIVOS.reduce((acc, p) => acc + totales(p.lineas).total, 0);
const TICKET = ACTIVOS.length ? FACTURACION / ACTIVOS.length : 0;
const CUENTA = Object.fromEntries(
  (Object.keys(ORDER_STATUS_LABELS) as OrderStatus[]).map((e) => [e, PEDIDOS.filter((p) => p.estado === e).length])
) as Record<OrderStatus, number>;
const PEDIDO_DETALLE = PEDIDOS.find((p) => p.estado === "en_preparacion") ?? PEDIDOS[0];

export default function AdminPedidosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {' '}Cocina &amp; Envíos Activos
                </span>
                {' '}
                <span className="text-xs text-on-surface-variant font-medium">
                  Ámsterdam Central · GMT+1
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Gestión de Pedidos
              </h1>
              <p className="text-sm text-on-surface-variant mt-1 font-body">
                Supervisión en tiempo real de despachos, retiros y flujo de cocina colonial.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-low p-2 rounded-xl">
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Pedidos Hoy
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    lunch_dining
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  {PEDIDOS.length}
                </div>
                <span className="text-[11px] text-secondary font-semibold mt-0.5">
                  Pedidos de ejemplo (demo)
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Facturación (BTW inc.)
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    payments
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  {formatEUR(FACTURACION)}
                </div>
                <span className="text-[11px] text-on-surface-variant mt-0.5">
                  IVA 9% incluido: {formatEUR(iva(FACTURACION))}
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    En Horno / Armado
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary-container">
                    skillet
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  {CUENTA.en_preparacion}
                </div>
                <span className="text-[11px] text-secondary font-medium mt-0.5">
                  {CUENTA.listo} listos para despacho
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Ticket Promedio
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    trending_up
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  {formatEUR(TICKET)}
                </div>
                <span className="text-[11px] text-on-surface-variant mt-0.5">
                  Ámsterdam
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between shadow-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0" id="filterStatusGroup">
              <button className="filter-pill active px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-on-primary transition-all whitespace-nowrap" data-status="all">
                Todos ({PEDIDOS.length})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="pending">
                Pendientes ({CUENTA.pendiente})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="confirmed">
                Confirmados ({CUENTA.confirmado})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="prep">
                En Preparación ({CUENTA.en_preparacion})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="ready">
                Listos ({CUENTA.listo})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="shipped">
                Enviados ({CUENTA.enviado})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="delivered">
                Entregados ({CUENTA.entregado})
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="canceled">
                Cancelados ({CUENTA.cancelado})
              </button>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="inline-flex p-1 bg-surface-container-high rounded-lg text-xs">
                <button className="px-2.5 py-1 rounded-sm bg-surface-container-lowest font-medium text-primary shadow-xs">
                  Hoy
                </button>
                {' '}
                <button className="px-2.5 py-1 rounded-sm text-on-surface-variant hover:text-on-surface font-medium transition-colors">
                  Esta Semana
                </button>
                {' '}
                <button className="px-2.5 py-1 rounded-sm text-on-surface-variant hover:text-on-surface font-medium flex items-center gap-1 transition-colors">
                  <span>
                    Personalizado
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>
                </button>
              </div>
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base pointer-events-none">
                  search
                </span>
                {' '}
                <input className="w-full bg-surface-container-lowest text-xs text-on-surface pl-9 pr-3 py-2 rounded-lg placeholder:text-outline focus:outline-hidden focus:bg-surface-container-highest transition-colors shadow-xs" id="searchInput" placeholder="Buscar por código (#PSB) o cliente..." type="text" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
              <div className="px-5 py-4 bg-surface-container flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    receipt_long
                  </span>
                  {' '}
                  <span className="font-headline font-bold text-sm text-primary uppercase tracking-wider">
                    Flujo de Órdenes
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">
                  Mostrando {PEDIDOS.length} órdenes de ejemplo
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs" id="ordersTable">
                  <thead>
                    <tr className="bg-surface-container-high/60 text-on-surface-variant uppercase text-[10px] tracking-wider font-semibold">
                      <th className="py-3 px-4">
                        Código &amp; Fecha
                      </th>
                      <th className="py-3 px-4">
                        Cliente
                      </th>
                      <th className="py-3 px-4">
                        Modalidad
                      </th>
                      <th className="py-3 px-4">
                        Total
                      </th>
                      <th className="py-3 px-4">
                        Pago
                      </th>
                      <th className="py-3 px-4">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {PEDIDOS.map((pedido) => (
                      <tr key={pedido.id} className="order-row group cursor-pointer bg-surface-container-lowest transition-colors hover:bg-surface-container-high/40">
                        <td className="py-3.5 px-4 font-body">
                          <div className="font-semibold text-secondary font-headline flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> #{pedido.id}
                          </div>
                          <div className="text-[11px] text-on-surface-variant mt-0.5">{formatFecha(pedido.fecha)}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-on-surface">{pedido.cliente}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                            <span className="material-symbols-outlined text-[13px] text-secondary">{pedido.entrega === "domicilio" ? "local_shipping" : "storefront"}</span>{" "}
                            {pedido.entrega === "domicilio" ? "Domicilio" : "Recogida"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-primary">{formatEUR(totales(pedido.lineas).total)}</div>
                          <div className="text-[10px] text-on-surface-variant">IVA incl.</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">Mollie</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-secondary-fixed text-on-secondary-fixed">
                            {ORDER_STATUS_LABELS[pedido.estado]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-surface-container flex items-center justify-between text-xs text-on-surface-variant">
                <span>
                  Página 1 de 8
                </span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    Anterior
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-primary text-on-primary font-medium">
                    1
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    2
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5 bg-surface-container-lowest rounded-xl p-6 shadow-md relative">
              <div className="flex items-start justify-between pb-3 border-b-0">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-semibold text-secondary tracking-widest font-body">
                      Detalle de Orden
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase tracking-wider" id="detailStatusBadge">
                      En preparación
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-primary mt-1" id="detailOrderCode">
                    #{PEDIDO_DETALLE.id}
                  </h2>
                  <span className="text-xs text-on-surface-variant font-medium">
                    {formatFecha(PEDIDO_DETALLE.fecha)} · Pago con Mollie
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">
                    restaurant
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">
                    Datos del Cliente
                  </span>
                  {' '}
                  <span className="text-[11px] font-medium text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      verified
                    </span>
                    {' '}Cliente Frecuente (4 pedidos)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline font-bold text-base">
                    CR
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-headline font-semibold text-sm text-primary" id="detailCustomerName">
                      {PEDIDO_DETALLE.cliente}
                    </div>
                    <div className="text-xs text-on-surface-variant flex items-center gap-1 font-mono" id="detailCustomerPhone">
                      <span className="material-symbols-outlined text-[13px] text-outline">
                        call
                      </span>
                      {' '}Teléfono del cliente pendiente
                    </div>
                  </div>
                </div>
                <div className="pt-2 text-xs text-on-surface flex items-start gap-2 bg-surface-container-lowest p-2.5 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0">
                    pin_drop
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-primary">
                      Dirección de Entrega:
                    </div>
                    <div className="text-on-surface-variant text-[11px]" id="detailAddress">
                      Dirección indicada en el pedido
                    </div>
                    <div className="text-[11px] text-secondary font-medium mt-1 italic">
                      Sin observaciones del cliente
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <ResumenPedido lineas={lineasConItem(PEDIDO_DETALLE.lineas)} titulo="Productos" envio={PEDIDO_DETALLE.entrega === "domicilio" ? null : undefined} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase font-semibold text-on-surface-variant tracking-wider">
                  Actualizar Estado de la Orden
                </label>
                <div className="relative">
                  <select className="w-full bg-surface-container-low text-xs font-semibold text-primary py-3 px-3.5 rounded-lg appearance-none focus:outline-hidden focus:bg-surface-container-high transition-colors" id="statusSelect" defaultValue="prep">
                    <option value="pending">
                      Pendiente de Aceptación
                    </option>
                    <option value="confirmed">
                      Confirmado
                    </option>
                    <option value="prep">
                      En preparación artesanal
                    </option>
                    <option value="ready">
                      Listo para retiro / despacho
                    </option>
                    <option value="shipped">
                      Enviado (solo a domicilio)
                    </option>
                    <option value="delivered">
                      Entregado al cliente
                    </option>
                    <option value="canceled">
                      Cancelado / Reembolsado
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-base">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button className="flex-1 py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs">
                  <span className="material-symbols-outlined text-base">
                    save
                  </span>
                  {' '}
                  <span>
                    Guardar Estado
                  </span>
                </button>
                {' '}
                <button className="py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-medium text-xs flex items-center justify-center gap-1.5 transition-colors">
                  <span className="material-symbols-outlined text-base text-secondary">
                    print
                  </span>
                  {' '}
                  <span className="hidden sm:inline">
                    Comprobante
                  </span>
                </button>
                {' '}
                {/* TODO: enlazar el WhatsApp del cliente cuando el pedido traiga su teléfono (backend) */}
                <span aria-disabled="true" className="py-2.5 px-3 rounded-lg bg-emerald-800 text-white font-medium text-xs flex items-center justify-center gap-1.5 opacity-60 cursor-not-allowed" title="Teléfono del cliente pendiente">
                  <span className="material-symbols-outlined text-base">
                    chat
                  </span>
                  {' '}
                  <span>
                    WhatsApp
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
