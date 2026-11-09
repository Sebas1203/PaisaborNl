// Reservas de catering: interfaz + implementación mock.
// Con Supabase: tabla reservas_catering con RLS (el cliente crea y ve las suyas; el admin gestiona todas).

import { RESERVATION_STATUS_LABELS } from '@/lib/format';
import { validarEmail } from './auth';
import { ServiceError } from './errores';
import { CLAVES, copia, espera, guardar, leer } from './mock/almacen';
import { isoDia, semillaMenus, semillaReservas } from './mock/semilla';
import type { MenuCatering, NuevaReserva, Reserva, ReservationStatus } from './tipos';

export interface ReservasService {
  /** Próximos eventos primero */
  listar(): Promise<Reserva[]>;
  obtener(id: string): Promise<Reserva | null>;
  crear(datos: NuevaReserva): Promise<Reserva>;
  cambiarEstado(id: string, estado: ReservationStatus): Promise<Reserva>;
}

/** Estados a los que puede pasar una reserva desde cada estado */
export const TRANSICIONES_RESERVA: Record<ReservationStatus, ReservationStatus[]> = {
  pendiente: ['confirmada', 'cancelada'],
  confirmada: ['realizada', 'cancelada'],
  cancelada: [],
  realizada: [],
};

// ── Implementación mock ──────────────────────────────────────────────────────

const tabla = () => leer<Reserva[]>(CLAVES.reservas, semillaReservas);

export const mockReservasService: ReservasService = {
  async listar() {
    await espera();
    return copia(tabla().sort((a, b) => b.fecha.localeCompare(a.fecha)));
  },

  async obtener(id) {
    await espera();
    return copia(tabla().find((r) => r.id === id) ?? null);
  },

  async crear(datos) {
    await espera();
    const menus = leer<MenuCatering[]>(CLAVES.menus, semillaMenus);
    if (!menus.some((m) => m.id === datos.menuId && m.activo)) throw new ServiceError('Elige un menú de catering disponible.');
    if (!datos.fecha || datos.fecha < isoDia(new Date())) throw new ServiceError('La fecha del evento debe ser hoy o posterior.');
    if (!Number.isInteger(datos.personas) || datos.personas < 1) throw new ServiceError('Indica el número de personas.');
    if (!datos.contacto.nombre.trim()) throw new ServiceError('Indica un nombre de contacto.');
    const errorEmail = validarEmail(datos.contacto.email);
    if (errorEmail) throw new ServiceError(errorEmail);
    const lista = tabla();
    const anio = new Date().getFullYear();
    const numero = lista.filter((r) => r.id.startsWith(`RES-${anio}-`)).length + 1;
    const reserva: Reserva = {
      ...datos,
      id: `RES-${anio}-${String(numero).padStart(4, '0')}`,
      estado: 'pendiente',
      creadaEn: new Date().toISOString(),
    };
    lista.push(reserva);
    guardar(CLAVES.reservas, lista);
    return copia(reserva);
  },

  async cambiarEstado(id, estado) {
    await espera();
    const lista = tabla();
    const reserva = lista.find((r) => r.id === id);
    if (!reserva) throw new ServiceError(`No existe la reserva ${id}.`);
    if (!TRANSICIONES_RESERVA[reserva.estado].includes(estado)) {
      throw new ServiceError(
        `Una reserva ${RESERVATION_STATUS_LABELS[reserva.estado].toLowerCase()} no puede pasar a ${RESERVATION_STATUS_LABELS[estado].toLowerCase()}.`,
      );
    }
    reserva.estado = estado;
    guardar(CLAVES.reservas, lista);
    return copia(reserva);
  },
};
