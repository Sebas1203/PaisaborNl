// Pedidos (antes la maqueta administrador_pedidos): búsqueda, filtros, paginación y detalle con
// cambio de estado en orden.
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { EstadoBadge } from '@/components/order/EstadoPedido';
import { EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { PanelPedido } from '@/features/admin/PanelPedido';
import { CabeceraAdmin, inputAdmin, PaginaAdmin, Paginacion, Tabla } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { formatFechaEntrega } from '@/lib/entrega';
import { formatEUR, formatFechaHora, ORDER_STATUS_LABELS } from '@/lib/format';
import { totales } from '@/lib/pedidos';
import { pedidosService, type Pedido } from '@/services';
import type { DeliveryMethod, OrderStatus } from '@/types';

const POR_PAGINA = 6;

// En pantallas sin espacio para el panel lateral, al elegir una fila se baja hasta el detalle
const irAlPanel = (el: HTMLElement | null) => {
  if (el && window.innerWidth < 1536) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
const ESTADOS = Object.keys(ORDER_STATUS_LABELS) as OrderStatus[];

function PedidosAdmin() {
  const params = useSearchParams();
  const estadoInicial = params.get('estado');
  const [busqueda, setBusqueda] = useState('');
  const [estado, setEstado] = useState<OrderStatus | 'todos'>(ESTADOS.includes(estadoInicial as OrderStatus) ? (estadoInicial as OrderStatus) : 'todos');
  const [entrega, setEntrega] = useState<DeliveryMethod | 'todas'>('todas');
  const [pagina, setPagina] = useState(1);
  const [seleccion, setSeleccion] = useState<string | null>(params.get('id'));
  const { datos: pedidos, setDatos, error, cargando, recargar } = useCarga(() => pedidosService.listar(), []);

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return (pedidos ?? []).filter(
      (p) =>
        (estado === 'todos' || p.estado === estado) &&
        (entrega === 'todas' || p.entrega === entrega) &&
        (!q || p.id.toLowerCase().includes(q) || p.cliente.toLowerCase().includes(q) || p.email.toLowerCase().includes(q)),
    );
  }, [pedidos, busqueda, estado, entrega]);

  const visibles = filtrados.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);
  const seleccionado = pedidos?.find((p) => p.id === seleccion) ?? null;
  const filtrar = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setPagina(1);
  };
  const actualizar = (p: Pedido) => setDatos((lista) => lista?.map((x) => (x.id === p.id ? p : x)) ?? null);

  return (
    <PaginaAdmin>
      <CabeceraAdmin
        etiqueta="Cocina y despachos"
        titulo="Pedidos"
        descripcion="Busca por número de pedido o cliente, filtra por estado o tipo de entrega y avanza cada pedido paso a paso."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label className="relative">
          <span className="sr-only">Buscar pedido</span>
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">search</span>
          <input
            className={`${inputAdmin} pl-10`}
            placeholder="Buscar por id o cliente…"
            value={busqueda}
            onChange={(e) => filtrar(setBusqueda)(e.target.value)}
          />
        </label>
        <select aria-label="Filtrar por estado" className={inputAdmin} value={estado} onChange={(e) => filtrar(setEstado)(e.target.value as OrderStatus | 'todos')}>
          <option value="todos">Todos los estados</option>
          {ESTADOS.map((e) => (
            <option key={e} value={e}>
              {ORDER_STATUS_LABELS[e]}
            </option>
          ))}
        </select>
        <select aria-label="Filtrar por tipo de entrega" className={inputAdmin} value={entrega} onChange={(e) => filtrar(setEntrega)(e.target.value as DeliveryMethod | 'todas')}>
          <option value="todas">Recoger y domicilio</option>
          <option value="recogida">Recoger en sede</option>
          <option value="domicilio">A domicilio</option>
        </select>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 items-start">
        <section className={`space-y-4 ${seleccionado ? '2xl:col-span-7' : '2xl:col-span-12'}`}>
          {cargando ? (
            <Skeleton filas={POR_PAGINA} />
          ) : error ? (
            <EstadoError mensaje={error} onReintentar={recargar} />
          ) : !pedidos?.length ? (
            <EstadoVacio titulo="Aún no hay pedidos" icono="receipt_long" />
          ) : filtrados.length === 0 ? (
            <EstadoVacio titulo="Ningún pedido coincide con los filtros" icono="filter_alt_off" />
          ) : (
            <>
              <Tabla cabeceras={['Pedido', 'Cliente', 'Fecha', 'Entrega', 'Estado', 'Total']}>
                {visibles.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => setSeleccion(p.id)}
                    className={`cursor-pointer transition-colors ${p.id === seleccion ? 'bg-secondary-fixed/40' : 'hover:bg-surface-container-low/60'}`}
                  >
                    <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">
                      <button type="button" className="hover:text-secondary" onClick={() => setSeleccion(p.id)}>
                        {p.id}
                      </button>
                    </td>
                    <td className="px-4 py-3">{p.cliente}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-on-surface-variant">{formatFechaHora(p.fecha)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {p.entrega === 'domicilio' ? 'Domicilio' : 'Recoger'}
                      <span className="block text-[11px] text-on-surface-variant first-letter:uppercase">
                        {formatFechaEntrega(p.fechaEntrega)} · {p.franja}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <EstadoBadge estado={p.estado} />
                    </td>
                    <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{formatEUR(totales(p.lineas).total)}</td>
                  </tr>
                ))}
              </Tabla>
              <Paginacion pagina={pagina} total={filtrados.length} porPagina={POR_PAGINA} onCambiar={setPagina} />
            </>
          )}
        </section>
        {seleccionado && (
          <aside key={seleccionado.id} ref={irAlPanel} className="2xl:col-span-5 2xl:sticky 2xl:top-24 scroll-mt-24">
            <PanelPedido key={seleccionado.id} pedido={seleccionado} onActualizado={actualizar} onCerrar={() => setSeleccion(null)} />
          </aside>
        )}
      </div>
    </PaginaAdmin>
  );
}

export default function AdminPedidosPage() {
  return (
    <Suspense fallback={null}>
      <PedidosAdmin />
    </Suspense>
  );
}
