// Menús de catering: lista con precio por persona y acceso a la edición (/admin/menus/[id]).
'use client';

import Link from 'next/link';
import { EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { itemPorId } from '@/data';
import { botonSecundario, CabeceraAdmin, PaginaAdmin } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { menusService } from '@/services';

export default function AdminMenusPage() {
  const { datos: menus, error, cargando, recargar } = useCarga(() => menusService.listar(), []);

  return (
    <PaginaAdmin>
      <CabeceraAdmin
        etiqueta="Catering"
        titulo="Menús de catering"
        descripcion="Nombre, descripción y precio por persona de cada menú. Los marcados como estimados están pendientes de confirmar."
        acciones={
          <Link href="/admin/menus-reservas" className={botonSecundario}>
            <span className="material-symbols-outlined text-base">event_available</span> Ver menús y reservas
          </Link>
        }
      />
      {cargando ? (
        <Skeleton filas={3} className="[&>div]:h-32" />
      ) : error ? (
        <EstadoError mensaje={error} onReintentar={recargar} />
      ) : !menus?.length ? (
        <EstadoVacio titulo="Aún no hay menús de catering" icono="restaurant_menu" />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {menus.map((menu) => (
            <li key={menu.id} className="bg-surface-container-lowest rounded-xl shadow-xs p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-headline text-lg font-bold text-primary">{menu.nombre}</h2>
                {!menu.activo && <span className="text-[10px] font-semibold uppercase text-on-surface-variant">Inactivo</span>}
              </div>
              <p className="text-sm text-on-surface-variant flex-1">{menu.descripcion || 'Sin descripción todavía.'}</p>
              <p className="text-xs text-on-surface-variant">Incluye: {menu.platos.map((id) => itemPorId(id)?.nombre ?? id).join(', ')}</p>
              <div className="flex items-end justify-between gap-3 pt-2 border-t border-surface-container">
                <div>
                  <p className="font-headline text-xl font-extrabold text-primary">
                    {formatEUR(menu.precioPorPersona)}
                    <span className="text-xs font-body font-normal text-on-surface-variant"> / persona</span>
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    {menu.precioEstimado ? 'Precio estimado · ' : ''}
                    {IVA_INCLUIDO}
                  </p>
                </div>
                <Link href={`/admin/menus/${menu.id}`} className={botonSecundario}>
                  <span className="material-symbols-outlined text-base">edit</span> Editar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </PaginaAdmin>
  );
}
