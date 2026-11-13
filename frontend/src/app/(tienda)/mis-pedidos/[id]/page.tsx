// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/detalle_del_pedido_paisabor
// y conectado a pedidosService: línea de estados y cancelación solo mientras está pendiente.
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { DatosEntrega } from '@/components/order/DatosEntrega';
import { EstadoBadge, LineaEstados } from '@/components/order/EstadoPedido';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { AvisoError, EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { ConfirmDialog } from '@/components/ui/Modal';
import { whatsappLink } from '@/config/contact';
import { useCarga } from '@/hooks/useCarga';
import { formatFechaHora } from '@/lib/format';
import { lineasGuardadasConItem, puedeCancelar } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError, pedidosService } from '@/services';

export default function MiPedidoPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { datos: pedido, setDatos, error, cargando, recargar } = useCarga(() => pedidosService.obtener(id), [id]);
  const [confirmar, setConfirmar] = useState(false);
  const [cancelando, setCancelando] = useState(false);
  const [errorAccion, setErrorAccion] = useState<string | null>(null);

  // MOCK: con Supabase, RLS impedirá leer pedidos ajenos; aquí se filtra en la UI
  const visible = pedido && user && (pedido.clienteId === user.id || user.rol === 'admin');

  async function cancelar() {
    if (!pedido || !user) return;
    setCancelando(true);
    setErrorAccion(null);
    try {
      setDatos(await pedidosService.cancelar(pedido.id, user.nombre));
      setConfirmar(false);
    } catch (e) {
      setErrorAccion(mensajeDeError(e));
      setConfirmar(false);
    } finally {
      setCancelando(false);
    }
  }

  return (
    <div className="bg-background font-body text-on-surface antialiased overflow-x-clip">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-12">
          <div className="absolute -top-12 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
          <Link
            className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors group mb-6"
            href="/mis-pedidos"
          >
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">arrow_back</span> Mis pedidos
          </Link>

          {cargando ? (
            <Skeleton filas={5} />
          ) : error ? (
            <EstadoError mensaje={error} onReintentar={recargar} />
          ) : !visible ? (
            <EstadoVacio titulo="No encontramos este pedido" icono="search_off">
              Revisa el enlace o vuelve a <Link href="/mis-pedidos" className="text-secondary font-semibold hover:underline">tus pedidos</Link>.
            </EstadoVacio>
          ) : (
            <>
              <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <EstadoBadge estado={pedido.estado} />
                    <span className="text-xs font-label text-on-surface-variant">{formatFechaHora(pedido.fecha)}</span>
                  </div>
                  <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">Pedido #{pedido.id}</h1>
                </div>
                {puedeCancelar(pedido) && (
                  <button
                    type="button"
                    onClick={() => setConfirmar(true)}
                    className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-error-container text-on-error-container text-sm font-label font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">cancel</span> Cancelar pedido
                  </button>
                )}
              </header>
              <AvisoError mensaje={errorAccion} />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
                <section className="lg:col-span-5 space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-xs">
                    <h2 className="font-headline font-bold text-lg text-primary mb-6">Estado del pedido</h2>
                    <LineaEstados pedido={pedido} />
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-6">
                    <DatosEntrega entrega={pedido.entrega} fechaEntrega={pedido.fechaEntrega} franja={pedido.franja} direccion={pedido.direccion} notas={pedido.notas} />
                  </div>
                </section>
                <section className="lg:col-span-7 bg-surface-container rounded-xl p-6 sm:p-8 space-y-5">
                  <ResumenPedido lineas={lineasGuardadasConItem(pedido.lineas)} titulo="Productos" entrega={pedido.entrega} />
                </section>
              </div>
              <section className="mt-10 bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <h2 className="font-headline font-bold text-base sm:text-lg text-primary">¿Tienes alguna pregunta sobre tu pedido?</h2>
                  <p className="text-xs text-on-surface-variant max-w-xl">Escríbenos por WhatsApp indicando el número de pedido.</p>
                </div>
                <a
                  className="w-full sm:w-auto bg-surface-container-lowest hover:bg-surface text-primary font-label text-xs font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all"
                  href={whatsappLink(`Hola Paisabor, tengo una consulta sobre el pedido ${pedido.id}`)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base text-[#25D366]">chat</span> Contactar por WhatsApp
                </a>
              </section>
              <ConfirmDialog
                abierto={confirmar}
                titulo="¿Cancelar este pedido?"
                mensaje={
                  <>
                    El pedido <strong>#{pedido.id}</strong> se cancelará y no se preparará. Esta acción no se puede deshacer.
                  </>
                }
                textoConfirmar="Sí, cancelar pedido"
                peligro
                procesando={cancelando}
                onConfirmar={() => void cancelar()}
                onCancelar={() => setConfirmar(false)}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
