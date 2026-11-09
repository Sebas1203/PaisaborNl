// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/mis_pedidos_y_reservas_paisabor
// y conectado a pedidosService: lista solo los pedidos del usuario actual.
'use client';

import Link from 'next/link';
import { ItemImage } from '@/components/ItemImage';
import { EstadoBadge } from '@/components/order/EstadoPedido';
import { EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { whatsappLink } from '@/config/contact';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR, formatFechaHora, IVA_INCLUIDO } from '@/lib/format';
import { totales } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { pedidosService } from '@/services';

export default function MisPedidosPage() {
  const { user } = useAuth();
  const { datos: pedidos, error, cargando, recargar } = useCarga(
    () => pedidosService.listar({ clienteId: user!.id }),
    [user?.id],
  );
  const activos = (pedidos ?? []).filter((p) => p.estado !== 'entregado' && p.estado !== 'cancelado').length;

  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
          <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
            <nav className="flex items-center gap-2 text-xs font-label text-outline tracking-wider uppercase mb-5">
              <Link className="hover:text-secondary transition-colors" href="/perfil">
                Mi Cuenta
              </Link>
              <span className="text-outline-variant font-light">/</span>
              <span className="text-primary font-medium">Mis Pedidos</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-8 h-[2px] bg-secondary"></span>
                  <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-semibold">Portal del Comensal</span>
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">Mis Pedidos</h1>
                <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed pt-1">
                  Consulta el estado de tus compras en Paisabor Ámsterdam.
                </p>
              </div>
              <div className="bg-surface-container-low px-5 py-3.5 rounded-lg flex items-center gap-6 shadow-xs self-start md:self-end">
                <div className="flex flex-col">
                  <span className="text-[10px] font-label uppercase tracking-wider text-outline">En curso</span>
                  <span className="font-headline text-xl font-bold text-primary">{pedidos ? activos : '…'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-label uppercase tracking-wider text-outline">Total</span>
                  <span className="font-headline text-xl font-bold text-primary">{pedidos ? pedidos.length : '…'}</span>
                </div>
              </div>
            </div>

            {cargando ? (
              <Skeleton filas={4} className="[&>div]:h-28" />
            ) : error ? (
              <EstadoError mensaje={error} onReintentar={recargar} />
            ) : !pedidos?.length ? (
              <EstadoVacio titulo="Aún no tienes pedidos" icono="shopping_bag">
                Cuando hagas tu primera compra aparecerá aquí.{' '}
                <Link href="/catalogo" className="text-secondary font-semibold hover:underline">
                  Ver el catálogo
                </Link>
              </EstadoVacio>
            ) : (
              <ul className="space-y-4">
                {pedidos.map((pedido) => {
                  const principal = pedido.lineas[0];
                  return (
                    <li key={pedido.id}>
                      <Link
                        href={`/mis-pedidos/${pedido.id}`}
                        className="group bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 sm:items-center"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
                          <ItemImage src={principal?.imagen} alt={principal?.nombre ?? pedido.id} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-headline font-bold text-primary group-hover:text-secondary transition-colors">#{pedido.id}</span>
                            <EstadoBadge estado={pedido.estado} />
                          </div>
                          <p className="text-xs text-on-surface-variant">
                            {formatFechaHora(pedido.fecha)} · {pedido.entrega === 'domicilio' ? 'A domicilio' : 'Recogida en tienda'}
                          </p>
                          <p className="text-sm text-on-surface truncate">
                            {pedido.lineas.map((l) => `${l.nombre} (x${l.cantidad})`).join(', ')}
                          </p>
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <p className="font-headline font-bold text-lg text-primary">{formatEUR(totales(pedido.lineas).total)}</p>
                          <p className="text-[11px] text-on-surface-variant">{IVA_INCLUIDO}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            <section className="mt-16 bg-surface-container rounded-xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">¿Necesitas cambiar algo?</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Puedes cancelar un pedido mientras esté pendiente desde su detalle. Para cualquier otro ajuste, escríbenos por WhatsApp.
                </p>
              </div>
              <a
                className="px-5 py-3 rounded-lg bg-primary text-on-primary font-label text-sm font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-xs"
                href={whatsappLink('Hola Paisabor, quiero ajustar un pedido.')}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-lg">chat</span> Escríbenos por WhatsApp
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
