export type ProductCategory = 'todos' | 'panaderia' | 'cafe' | 'dulces' | 'congelados' | 'despensa' | 'equipo';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  category: ProductCategory;
  image: string;
  badge?: 'Nuevo' | 'Favorito' | 'Artesanal' | 'Orgánico';
  origin?: string;
  weight?: string;
  stock?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  category: 'principales' | 'entradas' | 'sopas' | 'bebidas';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  unit?: string;
}

export interface OrderItem {
  id: string;
  title: string;
  orderNumber: string;
  date: string;
  status: 'Enviado' | 'Entregado' | 'En preparación' | 'Cancelado';
  total: number;
  image: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  memberSince: string;
  saborPoints: number;
  address: {
    name: string;
    street: string;
    postalCodeCity: string;
    country: string;
    phone: string;
  };
  coffeeProfile: string[];
  dietaryRestrictions: string[];
}

export interface InventoryProduct {
  id: string;
  name: string;
  tag: string;
  category: string;
  price: number;
  description: string;
  stock: number;
  lowStock?: boolean;
  image: string;
}
