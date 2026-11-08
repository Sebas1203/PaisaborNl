// PRODUCTOS DE PAISABOR: fritos, empanadas y bebidas.
// Precios en EUR con BTW incluido. Fotos en frontend/public/images/productos/<id>.jpg
// Pendiente de confirmar con Diana: descripción, ingredientes y alérgenos, y el BTW de cada categoría.

import { BTW_ALIMENTOS } from "./menu";

// TODO: información de alérgenos obligatoria (UE) y descripciones/ingredientes a confirmar con Diana en cada producto.
import type { CategoriaProducto, CategoriaProductoId, Producto } from "./tipos";

export const CATEGORIAS_PRODUCTO: CategoriaProducto[] = [
  { id: "fritos", nombre: "Fritos y pasabocas" },
  { id: "empanadas", nombre: "Empanadas" },
  { id: "bebidas", nombre: "Bebidas" },
];

export const PRODUCTOS: Producto[] = [
  { id: "papa-rellena", nombre: "Papa rellena", tipo: "producto", categoria: "fritos", precio: 5.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/papa-rellena.jpg" },
  { id: "almojabana", nombre: "Almojábana", tipo: "producto", categoria: "fritos", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/almojabana.jpg" },
  { id: "bunuelo", nombre: "Buñuelo", tipo: "producto", categoria: "fritos", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/bunuelo.jpg" },
  { id: "empanada-vegetariana", nombre: "Empanada vegetariana", tipo: "producto", categoria: "empanadas", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/empanada-vegetariana.jpg" },
  { id: "empanada-de-queso", nombre: "Empanada de queso", tipo: "producto", categoria: "empanadas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/empanada-de-queso.jpg" },
  { id: "empanada-de-pollo", nombre: "Empanada de pollo", tipo: "producto", categoria: "empanadas", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/empanada-de-pollo.jpg" },
  { id: "empanada-de-carne", nombre: "Empanada de carne", tipo: "producto", categoria: "empanadas", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/empanada-de-carne.jpg" },
  { id: "coca-cola-zero", nombre: "Coca-Cola Zero", tipo: "producto", categoria: "bebidas", precio: 2.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/coca-cola-zero.jpg" },
  { id: "coca-cola", nombre: "Coca-Cola", tipo: "producto", categoria: "bebidas", precio: 2.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/coca-cola.jpg" },
  { id: "agua", nombre: "Agua", tipo: "producto", categoria: "bebidas", precio: 2.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/agua.jpg" },
  { id: "agua-tapa-roja", nombre: "Agua tapa roja", tipo: "producto", categoria: "bebidas", precio: 2.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/agua-tapa-roja.jpg" },
  { id: "pony-malta", nombre: "Pony Malta", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/pony-malta.jpg" },
  { id: "frescolita", nombre: "Frescolita", tipo: "producto", categoria: "bebidas", precio: 3.00, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/frescolita.jpg" },
  { id: "intis-cola", nombre: "Inti's cola", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/intis-cola.jpg" },
  { id: "inca-kola", nombre: "Inca Kola", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/inca-kola.jpg" },
  { id: "hit-lulo", nombre: "Hit Lulo", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/hit-lulo.jpg" },
  { id: "hit-mora", nombre: "Hit Mora", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/hit-mora.jpg" },
  { id: "hit-mango", nombre: "Hit Mango", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/hit-mango.jpg" },
  { id: "postobon-uva", nombre: "Postobón uva", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/postobon-uva.jpg" },
  { id: "postobon-colombiana", nombre: "Postobón colombiana", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/postobon-colombiana.jpg" },
  { id: "postobon-manzana", nombre: "Postobón manzana", tipo: "producto", categoria: "bebidas", precio: 3.50, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/productos/postobon-manzana.jpg" },
]

export const productosPorCategoria = (cat: CategoriaProductoId) => PRODUCTOS.filter((p) => p.categoria === cat);
