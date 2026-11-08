// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_inventario
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { EditarProductoModal } from '@/features/admin/EditarProductoModal';
import { CATALOGO, itemPorId } from '@/data';
import { lineasConItem, PEDIDOS, STOCK, STOCK_MINIMO } from '@/data/mock';
import { formatFecha } from '@/lib/format';

// MOCK: stock y movimientos de demostración a partir del catálogo y de los pedidos de ejemplo
const STOCK_ITEMS = Object.entries(STOCK).flatMap(([id, stock]) => {
  const item = itemPorId(id);
  return item ? [{ item, stock }] : [];
});
const MOVIMIENTOS = PEDIDOS.filter((p) => p.estado !== "cancelado").flatMap((p) =>
  lineasConItem(p.lineas).map((l) => ({ key: p.id + l.item.id, fecha: p.fecha, pedido: p.id, nombre: l.item.nombre, cantidad: l.cantidad }))
);

export default function AdminInventarioPage() {
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-6 md:p-8">
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-secondary font-body">
                    Cámara Fría &amp; Despensa Seca
                  </span>
                  {' '}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {' '}
                  <span className="text-xs text-on-surface-variant font-body">
                    Kloveniersburgwal, Ámsterdam
                  </span>
                </div>
                <h1 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
                  Control de Inventario y Movimientos de Stock
                </h1>
                <p className="text-sm text-on-surface-variant font-body">
                  Gestión de materias primas artesanales colombianas, trazabilidad de lotes importados y consumos del fogón en tiempo real.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-surface-container-lowest px-4 py-3 rounded-lg shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      package_2
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
                      Insumos Activos
                    </div>
                    <div className="text-lg font-bold font-headline text-primary leading-none mt-0.5">
                      38 Skus
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest px-4 py-3 rounded-lg shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      warning
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
                      Bajo Stock
                    </div>
                    <div className="text-lg font-bold font-headline text-secondary leading-none mt-0.5">
                      3 Críticos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 -top-24 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-6 md:p-7 shadow-xs relative">
              <div className="flex items-center justify-between pb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      add_shopping_cart
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline font-bold text-lg text-primary leading-none">
                      Registrar Entrada de Inventario
                    </h2>
                    <span className="text-[11px] text-on-surface-variant font-body">
                      Recepción de cargamento y reabastecimiento
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
                  Nuevo Lote
                </span>
              </div>
              <div className="space-y-4 pt-1" id="inventory-form">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="insumo-select">
                    Insumo / Producto
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low text-sm text-on-surface rounded-lg px-3.5 py-2.5 appearance-none focus:outline-hidden focus:bg-surface-container-high transition-colors cursor-pointer" id="insumo-select" required defaultValue="">
                      <option disabled value="">
                        Seleccionar insumo...
                      </option>
                      {CATALOGO.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nombre}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-outline text-base pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="qty-input">
                      Cantidad a Ingresar
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm text-on-surface px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high transition-colors" id="qty-input" min="1" placeholder="Ej. 25" required step="0.1" type="number" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="unit-select">
                      Unidad de Medida
                    </label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-low text-sm text-on-surface rounded-lg px-3.5 py-2.5 appearance-none focus:outline-hidden focus:bg-surface-container-high transition-colors cursor-pointer" id="unit-select">
                        <option value="kg">
                          Kilogramos (kg)
                        </option>
                        <option value="unidades">
                          Unidades (uds)
                        </option>
                        <option value="bolsas">
                          Bolsas / Empaques
                        </option>
                        <option value="cajas">
                          Cajas Maestras
                        </option>
                        <option value="litros">
                          Litros (L)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-outline text-base pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="date-input">
                      Fecha de Entrada
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm text-on-surface px-3 py-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high transition-colors" id="date-input" required type="date" defaultValue="2024-10-24" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="provider-input">
                      Lote o Proveedor
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm text-on-surface px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high transition-colors" id="provider-input" placeholder="Lote / Importador" required type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="cost-input">
                    Costo Unitario (€) &amp; Referencia
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-sm font-medium text-outline">
                      €
                    </span>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm text-on-surface pl-8 pr-3.5 py-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high transition-colors" id="cost-input" min="0" placeholder="0.00" step="0.01" type="number" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="notes-input">
                    Notas de Calidad / Condición
                  </label>
                  <textarea className="w-full bg-surface-container-low text-sm text-on-surface px-3.5 py-2 rounded-lg resize-none focus:outline-hidden focus:bg-surface-container-high transition-colors" id="notes-input" placeholder="Ej. Empaque sellado al vacío, cadena de frío verificada..." rows={2}></textarea>
                </div>
                <div className="pt-2">
                  <button className="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]" type="submit">
                    <span className="material-symbols-outlined text-[19px]">
                      archive
                    </span>
                    {' '}
                    <span>
                      Registrar Entrada de Stock
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden mt-4 p-3 rounded-lg bg-surface-container flex items-center gap-2.5 text-primary text-xs font-medium animate-fadeIn" id="success-banner">
                <span className="material-symbols-outlined text-secondary text-base">
                  check_circle
                </span>
                {' '}
                <span>
                  Entrada asentada en el libro mayor de Ámsterdam con éxito.
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        shelves
                      </span>
                      <h2 className="font-headline font-bold text-lg text-primary">
                        Niveles de Stock Críticos
                      </h2>
                    </div>
                    <p className="text-xs text-on-surface-variant font-body mt-0.5">
                      Insumos clave para la cocina y la tienda física
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium">
                    <span className="flex items-center gap-1 text-on-surface-variant">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      {' '}Óptimo
                    </span>
                    {' '}
                    <span className="flex items-center gap-1 text-secondary">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      {' '}Bajo
                    </span>
                    {' '}
                    <span className="flex items-center gap-1 text-error">
                      <span className="w-2 h-2 rounded-full bg-error"></span>
                      {' '}Agotado
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {STOCK_ITEMS.map(({ item, stock }) => {
                    const bajo = stock < STOCK_MINIMO;
                    const pct = Math.min(100, Math.round((stock / (STOCK_MINIMO * 4)) * 100));
                    return (
                      <div key={item.id} role="button" tabIndex={0} onClick={() => setEditing(item.id)} className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-xs font-bold font-headline text-primary">{item.nombre}</span>
                            <span className={"text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider " + (bajo ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container-high text-on-surface-variant")}>
                              {bajo ? "Stock Bajo" : "Óptimo"}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className={"text-sm font-bold font-headline " + (bajo ? "text-secondary" : "text-primary")}>{stock} uds</span>{" "}
                            <span className="text-xs text-on-surface-variant">/ {STOCK_MINIMO} uds min</span>
                          </div>
                        </div>
                        <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                          <div className={(bajo ? "bg-secondary" : "bg-primary-container") + " h-2 rounded-full transition-all duration-500"} style={{ width: pct + "%" }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-primary text-on-primary rounded-xl p-5 flex items-center justify-between gap-6 shadow-xs">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-secondary-fixed font-semibold">
                    Trazabilidad Colombo-Holandesa
                  </div>
                  <div className="font-headline font-bold text-sm md:text-base">
                    Control de Temperatura y Sanidad NVWA
                  </div>
                  <p className="text-xs text-on-primary-container max-w-md">
                    Todos los lácteos y cárnicos cuentan con registro fitosanitario de ingreso por el Puerto de Rotterdam.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end shrink-0">
                  <span className="px-3 py-1.5 rounded-lg bg-primary-container text-xs font-semibold text-primary-fixed">
                    Certificado NVWA-OK
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-7 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-xl">
                    receipt_long
                  </span>
                  <h2 className="font-headline font-bold text-lg text-primary">
                    Historial de Movimientos de Stock
                  </h2>
                </div>
                <p className="text-xs text-on-surface-variant font-body mt-0.5">
                  Registro auditado de compras, despachos de cocina, ventas de mostrador y mermas
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs" id="filter-container">
                <button className="filter-btn active-filter px-3 py-1.5 rounded-lg bg-primary text-on-primary font-medium transition-colors">
                  Todos
                </button>
                {' '}
                <button className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium">
                  Entradas
                </button>
                {' '}
                <button className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium">
                  Consumo Cocina
                </button>
                {' '}
                <button className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium">
                  Venta Tienda
                </button>
                {' '}
                <button className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium">
                  Ajuste / Merma
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] uppercase font-semibold text-on-surface-variant tracking-wider bg-surface-container-low/60">
                    <th className="py-3 px-4 rounded-l-lg">
                      Fecha &amp; Hora
                    </th>
                    <th className="py-3 px-4">
                      Tipo de Movimiento
                    </th>
                    <th className="py-3 px-4">
                      Producto / Insumo
                    </th>
                    <th className="py-3 px-4 text-right">
                      Cantidad
                    </th>
                    <th className="py-3 px-4 rounded-r-lg">
                      Responsable
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 text-sm font-body" id="movements-tbody">
                  {MOVIMIENTOS.map((mov) => (
                    <tr key={mov.key} className="hover:bg-surface-container-low/40 transition-colors movement-row" data-type="Tienda">
                      <td className="py-3.5 px-4 font-mono text-xs text-on-surface-variant whitespace-nowrap">{formatFecha(mov.fecha)}</td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-container text-primary">
                          <span className="material-symbols-outlined text-[15px] text-secondary">storefront</span> <span>Venta tienda</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-primary">
                        {mov.nombre} <span className="block text-[11px] text-on-surface-variant font-normal">Pedido #{mov.pedido}</span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-headline font-bold text-primary">
                        <span className="text-error font-semibold">-</span> {mov.cantidad} uds
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-xs font-medium text-on-surface">Sistema (demo)</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-on-surface-variant font-body">
                Mostrando{' '}
                <span className="font-semibold text-on-surface">
                  1 - 6
                </span>
                {' '}de{' '}
                <span className="font-semibold text-on-surface">
                  42
                </span>
                {' '}registros auditados
              </div>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Página anterior">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                {' '}
                <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-headline text-xs font-bold">
                  1
                </button>
                {' '}
                <button className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface font-headline text-xs hover:bg-surface-container transition-colors">
                  2
                </button>
                {' '}
                <button className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface font-headline text-xs hover:bg-surface-container transition-colors">
                  3
                </button>
                {' '}
                <span className="px-1 text-xs text-outline">
                  ...
                </span>
                {' '}
                <button className="w-8 h-8 rounded-lg bg-surface-container-low text-on-surface font-headline text-xs hover:bg-surface-container transition-colors">
                  7
                </button>
                {' '}
                <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Página siguiente">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <EditarProductoModal itemId={editing} onClose={() => setEditing(null)} />
    </>
  );
}
