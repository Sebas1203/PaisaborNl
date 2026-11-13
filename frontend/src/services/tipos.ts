// Tipos de dominio de la capa de servicios. Son los que usarán también las implementaciones
// de Supabase, así que no dependen de localStorage ni de ningún detalle del mock.

import type { CategoriaProductoId, DiaEspecial, ItemCatalogo } from '@/data';
import type { DeliveryMethod, LineaPedido, OrderStatus } from '@/types';

export type { DeliveryMethod, LineaPedido, OrderStatus };

// ── Usuarios y sesión ────────────────────────────────────────────────────────

export type Rol = 'cliente' | 'admin';

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  /** Dirección de entrega por defecto */
  direccion?: string;
  rol: Rol;
}

export interface DatosRegistro {
  nombre: string;
  email: string;
  telefono?: string;
  password: string;
}

export type CambiosPerfil = Partial<Pick<Usuario, 'nombre' | 'telefono' | 'direccion'>>;

// ── Pedidos ──────────────────────────────────────────────────────────────────

/** Línea guardada en el pedido: copia nombre y precio del momento de la compra */
export interface LineaPedidoGuardada extends LineaPedido {
  nombre: string;
  /** Precio unitario con IVA incluido */
  precio: number;
  imagen: string;
}

export interface CambioEstado {
  estado: OrderStatus;
  /** Fecha y hora ISO */
  fecha: string;
  /** Nombre de quien hizo el cambio */
  por: string;
}

export interface Pedido {
  /** PSB-AAAA-NNNN */
  id: string;
  /** Fecha y hora ISO de creación */
  fecha: string;
  estado: OrderStatus;
  entrega: DeliveryMethod;
  /** Sin valor: pedido de invitado (compra sin cuenta) */
  clienteId?: string;
  cliente: string;
  email: string;
  telefono?: string;
  /** Solo en pedidos a domicilio */
  direccion?: string;
  notas?: string;
  lineas: LineaPedidoGuardada[];
  historial: CambioEstado[];
}

/**
 * Lo que devuelve la consulta pública de seguimiento (/seguimiento). Es la misma forma que
 * devolverá la función de Supabase obtener_pedido_publico(p_id, p_email): solo el estado y el
 * contenido del pedido, sin datos de contacto ni quién hizo cada cambio.
 */
export interface PedidoPublico {
  id: string;
  fecha: string;
  estado: OrderStatus;
  entrega: DeliveryMethod;
  lineas: LineaPedidoGuardada[];
  historial: Pick<CambioEstado, 'estado' | 'fecha'>[];
}

export interface NuevoPedido {
  /** Sin valor: compra sin cuenta */
  clienteId?: string;
  cliente: string;
  email: string;
  telefono?: string;
  entrega: DeliveryMethod;
  direccion?: string;
  notas?: string;
  lineas: LineaPedido[];
}

export interface FiltroPedidos {
  clienteId?: string;
}

// ── Inventario ───────────────────────────────────────────────────────────────

export type CategoriaInventario = 'platos' | 'especiales' | CategoriaProductoId;

/** Ítem del catálogo con su stock, tal como lo gestiona el admin */
export interface ItemInventario extends ItemCatalogo {
  categoria: CategoriaInventario;
  /** Unidades disponibles (entero ≥ 0) */
  stock: number;
  bajoReserva?: boolean;
  dias?: DiaEspecial[];
}

export interface DatosItemInventario {
  nombre: string;
  categoria: CategoriaInventario;
  /** Precio con IVA incluido */
  precio: number;
  stock: number;
  descripcion?: string;
  disponible: boolean;
}

// ── Catering ─────────────────────────────────────────────────────────────────

export type ReservationStatus = 'pendiente' | 'confirmada' | 'cancelada' | 'realizada';

export type TipoEvento = 'corporativo' | 'cumpleanos' | 'boda' | 'privado' | 'comunitario' | 'otro';

/** Línea de una reserva: copia nombre y precio del momento de la solicitud (snapshot) */
export interface LineaReserva {
  itemId: string;
  nombre: string;
  /** Precio por porción con IVA incluido */
  precioUnit: number;
  cantidad: number;
  precioEstimado: boolean;
}

export interface Reserva {
  /** Id interno (para URLs) */
  id: string;
  /** RES-AAAA-NNNN, el que ve el cliente */
  codigo: string;
  estado: ReservationStatus;
  /** Fecha y hora ISO de la solicitud */
  creada: string;
  tipoEvento: TipoEvento;
  invitados: number;
  /** Fecha del evento (YYYY-MM-DD) */
  fecha: string;
  /** HH:MM, si el cliente la indicó */
  hora?: string;
  /** Ciudad, código postal o dirección del evento */
  ciudad: string;
  nombre: string;
  email: string;
  telefono?: string;
  comentarios?: string;
  items: LineaReserva[];
  subtotal: number;
  base: number;
  iva: number;
  total: number;
  clienteId?: string;
}

export interface NuevaReserva {
  tipoEvento: TipoEvento;
  invitados: number;
  fecha: string;
  hora?: string;
  ciudad: string;
  nombre: string;
  email: string;
  telefono?: string;
  comentarios?: string;
  items: { id: string; cantidad: number }[];
  clienteId?: string;
}

export interface MenuCatering {
  id: string;
  nombre: string;
  descripcion: string;
  /** Precio por persona con IVA incluido */
  precioPorPersona: number;
  /** true mientras el precio por persona no esté confirmado */
  precioEstimado?: boolean;
  /** ids de platos del catálogo que incluye */
  platos: string[];
  activo: boolean;
}

export type CambiosMenu = Partial<Pick<MenuCatering, 'nombre' | 'descripcion' | 'precioPorPersona'>>;
