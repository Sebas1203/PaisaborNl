// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_inicio
/* eslint-disable @next/next/no-img-element */
import { ItemImage } from '@/components/ItemImage';
import { BTW_ALIMENTOS, CATALOGO, itemPorId } from '@/data';
import { lineasConItem, PEDIDOS, RESERVAS, STOCK, STOCK_MINIMO, totales } from '@/data/mock';
import { formatEUR, ORDER_STATUS_LABELS } from '@/lib/format';
import Link from 'next/link';

// MOCK: cifras calculadas con los pedidos, reservas y stock de ejemplo
const EN_CURSO = PEDIDOS.filter((p) => ["pendiente", "confirmado", "en_preparacion", "listo", "enviado"].includes(p.estado));
const VENTAS = PEDIDOS.filter((p) => p.estado !== "cancelado").reduce((acc, p) => acc + totales(p.lineas).total, 0);
const PROXIMAS = RESERVAS.filter((r) => r.estado === "pendiente" || r.estado === "confirmada");
const STOCK_BAJO = Object.entries(STOCK).flatMap(([id, stock]) => {
  const item = itemPorId(id);
  return item && stock < STOCK_MINIMO ? [{ item, stock }] : [];
});

export default function AdminPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                {' '}
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-secondary">
                  Operación en Vivo • Ámsterdam
                </span>
              </div>
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
                El Fogón Diario
              </h1>
              <p className="font-body text-sm text-on-surface-variant mt-1">
                Control de pedidos, preparaciones en cocina y despachos para hoy, sábado 24 de mayo.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-2 rounded-lg bg-surface-container flex items-center gap-2 text-xs font-medium text-on-surface">
                <span className="material-symbols-outlined text-secondary text-base">
                  search_off
                </span>
                {' '}
                <span>
                  Turno almuerzo:{' '}
                  <strong>
                    11:30 - 16:00
                  </strong>
                </span>
              </div>
              <button className="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold rounded-lg transition-all shadow-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  add_circle
                </span>
                {' '}
                <span>
                  Nuevo Pedido
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Despachos Pendientes
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-primary">
                      {EN_CURSO.length}
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-secondary">
                      por enviar
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">
                    soup_kitchen
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Total retenido en espera
                </span>
                {' '}
                <strong className="font-headline text-primary font-bold">
                  {formatEUR(EN_CURSO.reduce((acc, p) => acc + totales(p.lineas).total, 0))}
                </strong>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Próximos Eventos
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-primary">
                      {PROXIMAS.length}
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-on-surface-variant">
                      catering f. de s.
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-xl">
                    dinner_dining
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Capacidad comprometida
                </span>
                {' '}
                <strong className="font-headline text-primary font-bold">
                  {PROXIMAS.reduce((acc, r) => acc + r.porciones, 0)} porciones
                </strong>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Insumos Críticos
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-secondary">
                      {STOCK_BAJO.length}
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-secondary">
                      artículos bajo mínimo
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">
                    warning_amber
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span className="truncate max-w-[130px]">
                  {STOCK_BAJO.map((s) => s.item.nombre).slice(0, 2).join(" y ")}
                </span>
                {' '}
                <span className="text-secondary font-semibold text-[11px] uppercase tracking-wider">
                  Reponer
                </span>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-5 rounded-lg relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-primary-container font-label">
                    Facturación Mensual
                  </span>
                  <div className="mt-2">
                    <span className="font-headline text-2xl lg:text-3xl font-extrabold text-on-primary">
                      {formatEUR(VENTAS)}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined text-xl">
                    euro
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-primary-container bg-primary-container/40 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Incluye BTW 9% &amp; 21%
                </span>
                {' '}
                <span className="text-tertiary-fixed text-[11px] font-semibold">
                  +18.4% vs abr
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">
                        skillet
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-primary">
                        Flujo de Cocina y Pedidos
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        Actualiza el estado inmediato de la comanda
                      </p>
                    </div>
                  </div>
                  <Link className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1" href="/admin/pedidos">
                    <span>
                      Ver todos ({PEDIDOS.length})
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <div className="space-y-3.5 mt-2" id="orders-container">
                  {EN_CURSO.map((pedido) => (
                    <div key={pedido.id} className="p-4 rounded-lg bg-surface-container-low transition-all hover:bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-headline font-bold text-sm text-primary">#{pedido.id}</span>
                          <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed">
                            {pedido.entrega === "domicilio" ? "Domicilio" : "Recogida"} · {ORDER_STATUS_LABELS[pedido.estado]}
                          </span>
                        </div>
                        <p className="font-body text-xs font-medium text-on-surface">
                          {lineasConItem(pedido.lineas).map((l) => l.cantidad + "x " + l.item.nombre).join(", ")}
                        </p>
                        <div className="text-[11px] text-on-surface-variant flex items-center gap-3 pt-0.5">
                          <span>Cliente: <strong>{pedido.cliente}</strong></span>
                          <span>Importe: <strong>{formatEUR(totales(pedido.lineas).total)}</strong></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-sm font-bold text-primary uppercase tracking-wide">
                      Rendimiento Fiscal del Período
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Impuesto sobre valor añadido (Belastingdienst)
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-on-surface-variant tracking-wider block">IVA 9% incluido (ventas demo)</span>
                      <span className="font-headline text-base font-bold text-primary">{formatEUR(VENTAS - VENTAS / (1 + BTW_ALIMENTOS))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">
                        calendar_month
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-base font-bold text-primary">
                        Catering &amp; Banquetes
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        Próximos compromisos en Ámsterdam
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded-sm">
                    {RESERVAS.filter((r) => r.estado === "confirmada").length} Confirmadas
                  </span>
                </div>
                <div className="space-y-3 mt-2">
                  {PROXIMAS.map((reserva) => {
                    const plato = itemPorId(reserva.platoId);
                    const fecha = new Date(reserva.fecha + "T12:00:00");
                    return (
                      <div key={reserva.id} className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3.5">
                        <div className="w-12 text-center shrink-0 py-1 rounded-sm bg-surface-container text-primary">
                          <span className="block font-headline text-lg font-extrabold leading-none">{fecha.getDate()}</span>
                          <span className="block text-[9px] font-semibold text-on-surface-variant uppercase">
                            {fecha.toLocaleDateString("es-ES", { month: "short" })}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="font-headline text-xs font-bold text-primary truncate">{plato?.nombre}</h4>
                            <span className="text-[11px] font-bold text-secondary shrink-0">{reserva.porciones} porc.</span>
                          </div>
                          <p className="text-xs text-on-surface-variant mt-0.5">{reserva.cliente} · Reserva #{reserva.id}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-base">
                        emergency_home
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-base font-bold text-primary">
                        Inventario en Riesgo
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        {STOCK_BAJO.length} ítems bajo el mínimo (demo)
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">
                      inventory
                    </span>
                    {' '}
                    <span>
                      Entrada Stock
                    </span>
                  </button>
                </div>
                <div className="space-y-2 mt-2">
                  {STOCK_BAJO.map(({ item, stock }) => (
                    <div key={item.id} className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ItemImage src={item.imagen} alt={item.nombre} className="w-8 h-8 rounded-sm object-cover" />
                        <h4 className="font-headline text-xs font-bold text-primary">{item.nombre}</h4>
                      </div>
                      <div className="text-right">
                        <span className="block text-xs font-bold text-error">{stock} unidades</span>
                        <span className="text-[10px] text-on-surface-variant">Mín: {STOCK_MINIMO} unid.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4" id="stock-modal">
            <div className="bg-surface rounded-xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    add_box
                  </span>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Registrar Ingreso de Insumos
                  </h3>
                </div>
                <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high">
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              </div>
              <p className="text-xs text-on-surface-variant">
                Actualiza el inventario local tras recibir despachos en la cocina central de Ámsterdam.
              </p>
              <div className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                    Producto
                  </label>
                  <select className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high">
                    {CATALOGO.map((item) => (
                      <option key={item.id} value={item.id}>{item.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                      Cantidad Recibida
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high" placeholder="ej. 15.0" required step="0.5" type="number" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                      Unidad
                    </label>
                    <select className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high">
                      <option>
                        Kilogramos (kg)
                      </option>
                      <option>
                        Unidades / Piezas
                      </option>
                      <option>
                        Cajas
                      </option>
                      <option>
                        Litros (L)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                    Costo Total Factura (€ con BTW)
                  </label>
                  {' '}
                  <input className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high" placeholder="0,00" type="text" />
                </div>
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button className="px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface" type="button">
                    Cancelar
                  </button>
                  {' '}
                  <button className="px-5 py-2 bg-secondary text-on-secondary hover:bg-on-secondary-container text-xs font-bold rounded-lg shadow-xs" type="submit">
                    Guardar Entrada
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl text-xs font-medium z-50 transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-2" id="toast">
            <span className="material-symbols-outlined text-sm text-tertiary-fixed">
              check_circle
            </span>
            {' '}
            <span id="toast-message">
              Operación realizada con éxito
            </span>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
