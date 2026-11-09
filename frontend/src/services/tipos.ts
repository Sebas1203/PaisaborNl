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
  clienteId: string;
  cliente: string;
  email: string;
  telefono?: string;
  /** Solo en pedidos a domicilio */
  direccion?: string;
  notas?: string;
  lineas: LineaPedidoGuardada[];
  historial: CambioEstado[];
}

export interface NuevoPedido {
  clienteId: string;
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

export interface ContactoReserva {
  nombre: string;
  email: string;
  telefono?: string;
}

export interface Reserva {
  /** RES-AAAA-NNNN */
  id: string;
  menuId: string;
  /** Fecha del evento (YYYY-MM-DD) */
  fecha: string;
  personas: number;
  tipoEvento: TipoEvento;
  contacto: ContactoReserva;
  notas?: string;
  estado: ReservationStatus;
  /** Fecha y hora ISO de la solicitud */
  creadaEn: string;
  clienteId?: string;
}

export type NuevaReserva = Omit<Reserva, 'id' | 'estado' | 'creadaEn'>;

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
