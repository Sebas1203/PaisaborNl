// Tipos compartidos del catálogo de Paisabor.

export type TipoItem = "menu" | "producto";
export type CategoriaProductoId = "fritos" | "empanadas" | "bebidas";
export type DiaEspecial = "sabado" | "domingo";

export interface ItemCatalogo {
  /** También es el nombre del archivo de la foto (sin extensión). */
  id: string;
  nombre: string;
  tipo: TipoItem;
  /** Precio en EUR con BTW incluido. */
  precio: number;
  /** true si el precio es un valor medio provisional que falta confirmar con Diana. */
  precioEstimado?: boolean;
  /** Tasa de BTW. 9 % por defecto; confirmar por categoría con el contador. */
  btw: number;
  disponible: boolean;
  /** Ruta pública de la foto. */
  imagen: string;
  /** Opcional: se muestra solo si existe. Pendiente de confirmar con Diana. */
  descripcion?: string;
}

export interface Plato extends ItemCatalogo {
  tipo: "menu";
  /** Especial de fin de semana: se pide con reserva previa. */
  bajoReserva?: boolean;
  /** Días en que se ofrece, si es un especial. */
  dias?: DiaEspecial[];
}

export interface Producto extends ItemCatalogo {
  tipo: "producto";
  categoria: CategoriaProductoId;
}

export interface CategoriaProducto {
  id: CategoriaProductoId;
  nombre: string;
}
