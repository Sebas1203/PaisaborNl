import { flujoDe } from '@/lib/pedidos';
import { formatFechaHora, ORDER_STATUS_LABELS } from '@/lib/format';
import type { CambioEstado, Pedido } from '@/services';
import type { OrderStatus } from '@/types';

// Etiqueta de estado y línea de estados de un pedido (cliente y admin).

const COLORES: Record<OrderStatus, string> = {
  pendiente: 'bg-tertiary-fixed text-on-tertiary-fixed',
  confirmado: 'bg-secondary-fixed text-on-secondary-fixed',
  en_preparacion: 'bg-secondary-fixed text-on-secondary-fixed',
  listo: 'bg-primary-fixed text-on-primary-fixed',
  enviado: 'bg-primary-fixed text-on-primary-fixed',
  entregado: 'bg-surface-container-highest text-primary',
  cancelado: 'bg-error-container text-on-error-container',
};

export function EstadoBadge({ estado }: { estado: OrderStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-label font-semibold whitespace-nowrap ${COLORES[estado]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {ORDER_STATUS_LABELS[estado]}
    </span>
  );
}

/** Pasos del pedido: los completados con su fecha, el actual resaltado y los siguientes en gris */
export function LineaEstados({ pedido }: { pedido: Pick<Pedido, 'estado' | 'entrega' | 'historial'> }) {
  const fechaDe = (estado: OrderStatus) => pedido.historial.find((h) => h.estado === estado)?.fecha;
  const pasos: OrderStatus[] =
    pedido.estado === 'cancelado' ? pedido.historial.map((h) => h.estado) : flujoDe(pedido.entrega);

  return (
    <ol className="relative space-y-5">
      {pasos.map((paso, i) => {
        const fecha = fechaDe(paso);
        const actual = paso === pedido.estado;
        const hecho = Boolean(fecha);
        return (
          <li key={`${paso}-${i}`} className="flex items-start gap-4">
            <span
              className={`mt-0.5 w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${
                paso === 'cancelado'
                  ? 'bg-error text-on-error'
                  : actual
                    ? 'bg-secondary text-on-secondary ring-4 ring-secondary/20'
                    : hecho
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-high text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {paso === 'cancelado' ? 'close' : hecho ? 'check' : 'radio_button_unchecked'}
              </span>
            </span>
            <div>
              <p className={`font-headline font-bold text-sm ${hecho ? 'text-primary' : 'text-outline'}`}>
                {ORDER_STATUS_LABELS[paso]}
              </p>
              <p className="text-xs text-on-surface-variant">{fecha ? formatFechaHora(fecha) : 'Pendiente'}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Historial completo de cambios (estado, fecha y hora, quién) */
export function HistorialEstados({ historial }: { historial: CambioEstado[] }) {
  return (
    <ul className="divide-y divide-surface-container">
      {[...historial].reverse().map((cambio, i) => (
        <li key={`${cambio.estado}-${i}`} className="py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <EstadoBadge estado={cambio.estado} />
          <span className="text-on-surface-variant">
            {formatFechaHora(cambio.fecha)} · {cambio.por}
          </span>
        </li>
      ))}
    </ul>
  );
}
