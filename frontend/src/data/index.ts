// Punto único de acceso al catálogo (menú + productos). El carrito y los pedidos usan esto.

import { MENU } from "./menu";
import { PRODUCTOS } from "./productos";
import type { ItemCatalogo } from "./tipos";

export { MENU, PLATOS, ESPECIALES, BTW_ALIMENTOS } from "./menu";
export { PRODUCTOS, CATEGORIAS_PRODUCTO, productosPorCategoria } from "./productos";
export type * from "./tipos";

export const CATALOGO: ItemCatalogo[] = [...MENU, ...PRODUCTOS];
export const itemPorId = (id: string) => CATALOGO.find((i) => i.id === id);
