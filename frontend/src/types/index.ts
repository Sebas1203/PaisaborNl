// Tipos de dominio de la demo. Los datos que los usan (src/data) son mock.

export type ProductCategory = 'panaderia' | 'cafe' | 'dulces' | 'congelados';

export interface Product {
  id: string;
  name: string;
  description: string;
  /** Precio en EUR con BTW incluido */
  price: number;
  unit?: string;
  category: ProductCategory;
  image: string;
  badge?: string;
}

export interface CartItem {
  productId: string;
  name: string;
  /** Precio unitario en EUR con BTW incluido */
  price: number;
  unit?: string;
  image: string;
  quantity: number;
}

export type OrderStatus =
  | 'pendiente'
  | 'confirmado'
  | 'en_preparacion'
  | 'listo'
  | 'enviado'
  | 'entregado'
  | 'cancelado';

export type DeliveryMethod = 'domicilio' | 'recogida';

export interface OrderLine {
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  /** Fecha ISO (YYYY-MM-DD) */
  date: string;
  status: OrderStatus;
  delivery: DeliveryMethod;
  lines: OrderLine[];
  total: number;
}

export interface ReservableMenu {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  image: string;
}

export type ReservationStatus = 'pendiente' | 'confirmada' | 'finalizada' | 'rechazada';

export interface Reservation {
  id: string;
  menuName: string;
  /** Fecha ISO (YYYY-MM-DD) */
  eventDate: string;
  guests: number;
  status: ReservationStatus;
  total: number;
}
