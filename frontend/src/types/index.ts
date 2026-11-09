// Tipos básicos compartidos. Los del catálogo (Plato, Producto, ItemCatalogo...) están en
// src/data/tipos.ts y los de dominio (Pedido, Reserva, Usuario...) en src/services/tipos.ts.

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

// Pedido, Reserva y el resto de tipos de dominio están en src/services/tipos.ts
