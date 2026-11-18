import type { EstadoPago } from '@/services';

// Indica en el pedido guardado (Mis pedidos, seguimiento y admin) que el pago fue de prueba.
// Los pedidos guardados antes de existir estadoPago también son simulados.
export function PagoDePrueba({ estado, compacto = false }: { estado?: EstadoPago; compacto?: boolean }) {
  if (estado && estado !== 'simulado') return null;
  if (compacto) {
    return (
      <span className="inline-flex items-center gap-1 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed px-1.5 py-0.5 text-[10px] font-label font-semibold uppercase tracking-wider">
        Pago de prueba
      </span>
    );
  }
  return (
    <p className="flex items-center gap-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed px-3 py-2 text-xs font-semibold">
      <span className="material-symbols-outlined text-base">science</span>
      Pago de prueba: no se ha cobrado nada.
    </p>
  );
}
