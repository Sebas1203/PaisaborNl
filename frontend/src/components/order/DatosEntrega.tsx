import { direccionCorta, SEDE_PRINCIPAL } from '@/config/sedes';
import { direccionTexto, formatFechaEntrega, type DireccionEntrega } from '@/lib/entrega';
import type { DeliveryMethod } from '@/types';

// Cómo y cuándo se entrega un pedido: método, día, franja y dirección (o la sede si se recoge).
// Lo usan la confirmación, Mis pedidos, el seguimiento público y el detalle del admin.
export function DatosEntrega({
  entrega,
  fechaEntrega,
  franja,
  direccion,
  notas,
}: {
  entrega: DeliveryMethod;
  fechaEntrega: string;
  franja: string;
  /** Sin valor en domicilio: consulta pública, que no devuelve la dirección */
  direccion?: DireccionEntrega;
  notas?: string;
}) {
  return (
    <div className="space-y-1.5 text-sm">
      <h3 className="font-headline font-bold text-base text-primary">
        {entrega === 'domicilio' ? 'Entrega a domicilio' : `Recogida en ${SEDE_PRINCIPAL.nombre}`}
      </h3>
      <p className="flex items-center gap-2 font-semibold text-primary first-letter:uppercase">
        <span className="material-symbols-outlined text-secondary text-base">event</span>
        <span className="first-letter:uppercase">
          {formatFechaEntrega(fechaEntrega)} · {franja}
        </span>
      </p>
      <p className="flex items-start gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-secondary text-base">{entrega === 'domicilio' ? 'home_pin' : 'storefront'}</span>
        <span>
          {entrega === 'recogida' ? direccionCorta() : direccion ? direccionTexto(direccion) : 'En la dirección que indicaste al comprar.'}
        </span>
      </p>
      {notas && <p className="text-on-surface-variant italic">“{notas}”</p>}
    </div>
  );
}
