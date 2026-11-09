// Resumen del panel (antes la maqueta panel_de_administraci_n_inicio). Todas las cifras salen de
// los servicios: pedidos, reservas e inventario.
'use client';

import Link from 'next/link';
import { EstadoBadge } from '@/components/order/EstadoPedido';
import { EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { nombreCategoria, STOCK_BAJO_UMBRAL } from '@/config/inventario';
import { CabeceraAdmin, PaginaAdmin, Tabla, TarjetaDato } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR, formatFechaHora } from '@/lib/format';
import { totales } from '@/lib/pedidos';
import { inventarioService, pedidosService, reservasService } from '@/services';

const mismoDia = (a: Date, b: Date) => a.toDateString() === b.toDateString();
const mismoMes = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

export default function AdminResumenPage() {
  const { datos, error, cargando, recargar } = useCarga(
    () => Promise.all([pedidosService.listar(), reservasService.listar(), inventarioService.listar()]),
    [],
  );

  const hoy = new Date();
  const [pedidos = [], reservas = [], inventario = []] = datos ?? [];
  const pedidosHoy = pedidos.filter((p) => mismoDia(new Date(p.fecha), hoy));
  const pendientes = pedidos.filter((p) => p.estado === 'pendiente');
  const porConfirmar = reservas.filter((r) => r.estado === 'pendiente');
  const stockBajo = inventario.filter((i) => i.stock < STOCK_BAJO_UMBRAL).sort((a, b) => a.stock - b.stock);
  const ventasMes = pedidos
    .filter((p) => p.estado !== 'cancelado' && mismoMes(new Date(p.fecha), hoy))
    .reduce((acc, p) => acc + totales(p.lineas).total, 0);
  const fechaHoy = hoy.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <PaginaAdmin>
      <CabeceraAdmin etiqueta="Operación en vivo • Ámsterdam" titulo="Resumen" descripcion={`Pedidos, reservas y stock de hoy, ${fechaHoy}.`} />

      {cargando ? (
        <Skeleton filas={3} className="[&>div]:h-24" />
      ) : error ? (
        <EstadoError mensaje={error} onReintentar={recargar} />
      ) : (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            <TarjetaDato icono="today" etiqueta="Pedidos de hoy" valor={pedidosHoy.length} href="/admin/pedidos" />
            <TarjetaDato icono="pending_actions" etiqueta="Pendientes" valor={pendientes.length} detalle="Por confirmar en cocina" href="/admin/pedidos?estado=pendiente" />
            <TarjetaDato icono="event_upcoming" etiqueta="Reservas por confirmar" valor={porConfirmar.length} href="/admin/reservas" />
            <TarjetaDato
              icono="inventory"
              etiqueta="Stock bajo"
              valor={stockBajo.length}
              detalle={`Menos de ${STOCK_BAJO_UMBRAL} uds`}
              alerta={stockBajo.length > 0}
              href="/admin/inventario?stock=bajo"
            />
            <TarjetaDato icono="euro" etiqueta="Ventas del mes" valor={formatEUR(ventasMes)} detalle="IVA incluido · sin cancelados" />
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <section className="xl:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-lg font-bold text-primary">Últimos pedidos</h2>
                <Link href="/admin/pedidos" className="text-xs font-semibold text-secondary hover:underline">
                  Ver todos
                </Link>
              </div>
              {pedidos.length === 0 ? (
                <EstadoVacio titulo="Aún no hay pedidos" icono="receipt_long" />
              ) : (
                <Tabla cabeceras={['Pedido', 'Cliente', 'Fecha', 'Entrega', 'Estado', 'Total']}>
                  {pedidos.slice(0, 5).map((p) => (
                    <tr key={p.id} className="hover:bg-surface-container-low/60">
                      <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">
                        <Link href={`/admin/pedidos?id=${p.id}`} className="hover:text-secondary">
                          {p.id}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{p.cliente}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-on-surface-variant">{formatFechaHora(p.fecha)}</td>
                      <td className="px-4 py-3">{p.entrega === 'domicilio' ? 'Domicilio' : 'Recoger'}</td>
                      <td className="px-4 py-3">
                        <EstadoBadge estado={p.estado} />
                      </td>
                      <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{formatEUR(totales(p.lineas).total)}</td>
                    </tr>
                  ))}
                </Tabla>
              )}
            </section>
            <section className="space-y-3">
              <h2 className="font-headline text-lg font-bold text-primary">Stock bajo</h2>
              {stockBajo.length === 0 ? (
                <EstadoVacio titulo="Todo el stock está por encima del umbral" icono="check_circle" />
              ) : (
                <ul className="bg-surface-container-lowest rounded-xl shadow-xs divide-y divide-surface-container">
                  {stockBajo.slice(0, 6).map((i) => (
                    <li key={i.id} className="px-4 py-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-primary">{i.nombre}</p>
                        <p className="text-[11px] text-on-surface-variant">{nombreCategoria(i.categoria)}</p>
                      </div>
                      <span className={`text-sm font-bold ${i.stock === 0 ? 'text-error' : 'text-secondary'}`}>
                        {i.stock === 0 ? 'Agotado' : `${i.stock} uds`}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <Link href="/admin/inventario" className="block text-xs font-semibold text-secondary hover:underline">
                Ir al inventario
              </Link>
            </section>
          </div>
        </>
      )}
    </PaginaAdmin>
  );
}
