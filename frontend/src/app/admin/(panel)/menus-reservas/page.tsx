// Panel unificado de menús y reservas de catering (antes la maqueta
// panel_de_administraci_n_unificado_gesti_n_de_men_s_y_reservas_paisabor).
'use client';

import Link from 'next/link';
import { EstadoError, Skeleton } from '@/components/ui/Estados';
import { GestionReservas } from '@/features/admin/GestionReservas';
import { CabeceraAdmin, PaginaAdmin } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR } from '@/lib/format';
import { menusService } from '@/services';

export default function MenusReservasPage() {
  const { datos: menus, error, cargando, recargar } = useCarga(() => menusService.listar(), []);

  return (
    <PaginaAdmin>
      <CabeceraAdmin
        etiqueta="Catering"
        titulo="Menús y reservas"
        descripcion="Producción por encargo: revisa los menús de catering y gestiona las reservas en una sola vista."
      />
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-lg font-bold text-primary">Menús de catering</h2>
          <Link href="/admin/menus" className="text-xs font-semibold text-secondary hover:underline">
            Gestionar menús
          </Link>
        </div>
        {cargando ? (
          <Skeleton filas={1} className="[&>div]:h-20" />
        ) : error ? (
          <EstadoError mensaje={error} onReintentar={recargar} />
        ) : (
          <ul className="flex gap-3 overflow-x-auto pb-2">
            {(menus ?? []).map((m) => (
              <li key={m.id} className="shrink-0">
                <Link href={`/admin/menus/${m.id}`} className="block w-56 bg-surface-container-lowest rounded-xl shadow-xs p-4 hover:shadow-md transition-shadow">
                  <p className="font-headline font-bold text-primary truncate">{m.nombre}</p>
                  <p className="text-sm text-secondary font-semibold">
                    {formatEUR(m.precioPorPersona)} <span className="text-xs text-on-surface-variant font-normal">/ persona{m.precioEstimado ? ' (estimado)' : ''}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="space-y-3">
        <h2 className="font-headline text-lg font-bold text-primary">Reservas</h2>
        <GestionReservas />
      </section>
    </PaginaAdmin>
  );
}
