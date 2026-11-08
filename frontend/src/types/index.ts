// Tipos de la app que no son del catálogo. Los del catálogo (Plato, Producto, ItemCatalogo...)
// están en src/data/tipos.ts.

export type OrderStatus =
  | 'pendiente'
  | 'confirmado'
  | 'en_preparacion'
  | 'listo'
  | 'enviado'
  | 'entregado'
  | 'cancelado';

export type DeliveryMethod = 'domicilio' | 'recogida';

/** Línea de pedido o de carrito: id de un ítem del catálogo y cantidad */
export interface LineaPedido {
  id: string;
  cantidad: number;
}

export interface Pedido {
  id: string;
  /** Fecha ISO (YYYY-MM-DD) */
  fecha: string;
  estado: OrderStatus;
  entrega: DeliveryMethod;
  cliente: string;
  lineas: LineaPedido[];
}

export type ReservationStatus = 'pendiente' | 'confirmada' | 'finalizada' | 'rechazada';

/** Reserva de un especial de fin de semana (bajoReserva) */
export interface Reserva {
  id: string;
  /** id de un plato de ESPECIALES */
  platoId: string;
  /** Fecha ISO (YYYY-MM-DD) */
  fecha: string;
  porciones: number;
  estado: ReservationStatus;
  cliente: string;
}
