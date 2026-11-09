// Reservas de catering: interfaz + implementación mock.
// Con Supabase: tabla reservas_catering + lineas_reserva con RLS (el cliente crea y ve las suyas;
// el admin gestiona todas) y la creación en una función SQL que calcule los totales en el servidor.

import { itemPorId } from '@/data';
import { validarSolicitudCatering } from '@/lib/catering';
import { RESERVATION_STATUS_LABELS } from '@/lib/format';
import { calcularTotales } from '@/lib/precios';
import { ServiceError } from './errores';
import { CLAVES, copia, espera, guardar, leer, nuevoId } from './mock/almacen';
import { semillaReservas } from './mock/semilla';
import type { LineaReserva, NuevaReserva, Reserva, ReservationStatus } from './tipos';

export interface ReservasService {
  /** Próximos eventos primero */
  listar(): Promise<Reserva[]>;
  /** null si no existe */
  obtener(id: string): Promise<Reserva | null>;
  /** Crea la reserva en estado "pendiente" con snapshot de nombres y precios y sus totales */
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

/** Totales de una reserva a partir de sus líneas (los mismos que ve el cliente en el resumen) */
export const totalesReserva = (items: LineaReserva[]) => calcularTotales(items);

/** Líneas con snapshot de nombre y precio desde el catálogo (solo platos del menú) */
export function lineasReserva(items: NuevaReserva['items']): LineaReserva[] {
  return items.map(({ id, cantidad }) => {
    const item = itemPorId(id);
    if (!item || item.tipo !== 'menu') throw new ServiceError('Uno de los platos elegidos ya no está en el menú.');
    if (!item.disponible) throw new ServiceError(`${item.nombre} no está disponible ahora mismo.`);
    if (!Number.isInteger(cantidad) || cantidad < 1) throw new ServiceError(`Indica las porciones de ${item.nombre}.`);
    return { itemId: id, nombre: item.nombre, precioUnit: item.precio, cantidad, precioEstimado: Boolean(item.precioEstimado) };
  });
}

// ── Implementación mock ──────────────────────────────────────────────────────

const tabla = () => leer<Reserva[]>(CLAVES.reservas, semillaReservas);

function siguienteCodigo(lista: Reserva[]): string {
  const prefijo = `RES-${new Date().getFullYear()}-`;
  const ultimo = Math.max(0, ...lista.filter((r) => r.codigo?.startsWith(prefijo)).map((r) => Number(r.codigo.slice(prefijo.length)) || 0));
  return `${prefijo}${String(ultimo + 1).padStart(4, '0')}`;
}

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
    const errores = validarSolicitudCatering(datos);
    const primero = Object.values(errores)[0];
    if (primero) throw new ServiceError(primero);
    const items = lineasReserva(datos.items);
    const lista = tabla();
    const reserva: Reserva = {
      id: `r-${nuevoId()}`,
      codigo: siguienteCodigo(lista),
      estado: 'pendiente',
      creada: new Date().toISOString(),
      tipoEvento: datos.tipoEvento,
      invitados: datos.invitados,
      fecha: datos.fecha,
      hora: datos.hora || undefined,
      ciudad: datos.ciudad.trim(),
      nombre: datos.nombre.trim(),
      email: datos.email.trim(),
      telefono: datos.telefono?.trim() || undefined,
      comentarios: datos.comentarios?.trim() || undefined,
      items,
      ...totalesReserva(items),
      clienteId: datos.clienteId,
    };
    lista.push(reserva);
    guardar(CLAVES.reservas, lista);
    return copia(reserva);
  },

  async cambiarEstado(id, estado) {
    await espera();
    const lista = tabla();
    const reserva = lista.find((r) => r.id === id);
    if (!reserva) throw new ServiceError('Esa reserva ya no existe.');
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
