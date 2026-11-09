// Reservas de catering (antes la maqueta administrador_reservas), conectadas a reservasService.
import Link from 'next/link';
import { GestionReservas } from '@/features/admin/GestionReservas';
import { botonSecundario, CabeceraAdmin, PaginaAdmin } from '@/features/admin/ui';

export default function AdminReservasPage() {
  return (
    <PaginaAdmin>
      <CabeceraAdmin
        etiqueta="Catering"
        titulo="Reservas"
        descripcion="Solicitudes de catering con fecha, número de personas, tipo de evento y contacto. Confirma o cancela cada una."
        acciones={
          <Link href="/admin/menus-reservas" className={botonSecundario}>
            <span className="material-symbols-outlined text-base">restaurant_menu</span> Menús y reservas
          </Link>
        }
      />
      <GestionReservas />
    </PaginaAdmin>
  );
}
