import type { CategoriaInventario } from '@/services/tipos';

/** Por debajo de estas unidades el inventario marca el ítem con alerta de stock bajo */
export const STOCK_BAJO_UMBRAL = 10;

export const CATEGORIAS_INVENTARIO: { id: CategoriaInventario; nombre: string }[] = [
  { id: 'platos', nombre: 'Platos típicos' },
  { id: 'especiales', nombre: 'Especiales de fin de semana' },
  { id: 'fritos', nombre: 'Fritos y pasabocas' },
  { id: 'empanadas', nombre: 'Empanadas' },
  { id: 'bebidas', nombre: 'Bebidas' },
];

export const nombreCategoria = (id: CategoriaInventario) =>
  CATEGORIAS_INVENTARIO.find((c) => c.id === id)?.nombre ?? id;
