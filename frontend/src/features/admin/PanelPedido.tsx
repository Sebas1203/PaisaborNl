'use client';

import { useState } from 'react';
import { EstadoBadge, HistorialEstados, LineaEstados } from '@/components/order/EstadoPedido';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { AvisoError } from '@/components/ui/Estados';
import { ConfirmDialog } from '@/components/ui/Modal';
import { DatosEntrega } from '@/components/order/DatosEntrega';
import { formatFechaHora, ORDER_STATUS_LABELS } from '@/lib/format';
import { lineasGuardadasConItem, puedeCancelar, siguienteEstado } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError, pedidosService, type Pedido } from '@/services';
import { botonPeligro, botonPrimario } from './ui';

// Detalle de pedido del admin: ítems con base e IVA, avance de estado en orden, cancelación e historial.
export function PanelPedido({ pedido, onActualizado, onCerrar }: { pedido: Pedido; onActualizado: (p: Pedido) => void; onCerrar: () => void }) {
  const { user } = useAuth();
  const [procesando, setProcesando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmarCancelar, setConfirmarCancelar] = useState(false);
  const siguiente = siguienteEstado(pedido);
  const por = user?.nombre ?? 'Admin';

  async function ejecutar(accion: () => Promise<Pedido>) {
    setProcesando(true);
    setError(null);
    try {
      onActualizado(await accion());
    } catch (e) {
      setError(mensajeDeError(e));
    } finally {
      setProcesando(false);
      setConfirmarCancelar(false);
    }
  }

  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-xs p-5 sm:p-6 space-y-6">
      <header className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">Detalle del pedido</span>
          <h2 className="font-headline text-2xl font-bold text-primary">{pedido.id}</h2>
          <div className="flex flex-wrap items-center gap-2">
            <EstadoBadge estado={pedido.estado} />
            <span className="text-xs text-on-surface-variant">{formatFechaHora(pedido.fecha)}</span>
          </div>
        </div>
        <button type="button" aria-label="Cerrar detalle" onClick={onCerrar} className="text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-surface-container-low rounded-lg p-3.5 space-y-0.5">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">Cliente</p>
          <p className="font-semibold text-primary">
            {pedido.cliente}
            {!pedido.clienteId && (
              <span className="ml-2 align-middle text-[10px] font-label font-semibold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 rounded-sm">
                Sin cuenta
              </span>
            )}
          </p>
          <p className="text-xs text-on-surface-variant break-all">{pedido.email}</p>
          {pedido.telefono && <p className="text-xs text-on-surface-variant">{pedido.telefono}</p>}
        </div>
        <div className="bg-surface-container-low rounded-lg p-3.5">
          <DatosEntrega entrega={pedido.entrega} fechaEntrega={pedido.fechaEntrega} franja={pedido.franja} direccion={pedido.direccion} notas={pedido.notas} />
        </div>
      </section>

      <section className="space-y-4 bg-surface-container rounded-xl p-4 sm:p-5">
        <ResumenPedido lineas={lineasGuardadasConItem(pedido.lineas)} titulo="Ítems" />
      </section>

      <section className="space-y-3">
        <h3 className="font-headline font-bold text-primary">Estado</h3>
        <AvisoError mensaje={error} />
        <div className="flex flex-wrap gap-3">
          {siguiente ? (
            <button type="button" className={botonPrimario} disabled={procesando} onClick={() => void ejecutar(() => pedidosService.cambiarEstado(pedido.id, siguiente, por))}>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
              {procesando ? 'Guardando…' : `Pasar a «${ORDER_STATUS_LABELS[siguiente]}»`}
            </button>
          ) : (
            <p className="text-sm text-on-surface-variant">Este pedido ya no admite más cambios de estado.</p>
          )}
          {puedeCancelar(pedido) && (
            <button type="button" className={botonPeligro} disabled={procesando} onClick={() => setConfirmarCancelar(true)}>
              <span className="material-symbols-outlined text-base">cancel</span> Cancelar pedido
            </button>
          )}
        </div>
        {siguiente === 'confirmado' && <p className="text-xs text-on-surface-variant">Al confirmar se descuenta el stock de cada ítem del inventario.</p>}
        <div className="pt-2">
          <LineaEstados pedido={pedido} />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="font-headline font-bold text-primary">Historial</h3>
        <HistorialEstados historial={pedido.historial} />
      </section>

      <ConfirmDialog
        abierto={confirmarCancelar}
        titulo={`¿Cancelar el pedido ${pedido.id}?`}
        mensaje="El pedido pasará a «Cancelado» y no se podrá reactivar."
        textoConfirmar="Sí, cancelar"
        peligro
        procesando={procesando}
        onConfirmar={() => void ejecutar(() => pedidosService.cancelar(pedido.id, por))}
        onCancelar={() => setConfirmarCancelar(false)}
      />
    </article>
  );
}
