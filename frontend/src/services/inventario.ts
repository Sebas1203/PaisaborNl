// Inventario (productos y platos del menú con su stock): interfaz + implementación mock.
// Con Supabase: tabla productos con RLS (lectura pública, escritura solo admin).

import { BTW_RATE } from '@/config/fiscal';
import { ServiceError } from './errores';
import { CLAVES, copia, espera, guardar, leer } from './mock/almacen';
import { semillaInventario } from './mock/semilla';
import type { CategoriaInventario, DatosItemInventario, ItemInventario, LineaPedido } from './tipos';

export interface InventarioService {
  listar(): Promise<ItemInventario[]>;
  obtener(id: string): Promise<ItemInventario | null>;
  crear(datos: DatosItemInventario): Promise<ItemInventario>;
  editar(id: string, cambios: Partial<DatosItemInventario>): Promise<ItemInventario>;
  /** Activar / desactivar la disponibilidad en la tienda */
  cambiarDisponibilidad(id: string, disponible: boolean): Promise<ItemInventario>;
  /** Suma (entrada) o resta (salida) unidades; el stock nunca queda negativo */
  ajustarStock(id: string, cantidad: number): Promise<ItemInventario>;
}

const CATEGORIAS_MENU: CategoriaInventario[] = ['platos', 'especiales'];
const CATEGORIAS: CategoriaInventario[] = [...CATEGORIAS_MENU, 'fritos', 'empanadas', 'bebidas'];

/** Validación compartida con los formularios. parcial: solo valida los campos presentes */
export function validarItem(datos: Partial<DatosItemInventario>, parcial = false): string | null {
  const falta = (v: unknown) => !parcial && v === undefined;
  if (falta(datos.nombre) || (datos.nombre !== undefined && !datos.nombre.trim())) return 'El nombre es obligatorio.';
  if (falta(datos.categoria) || (datos.categoria !== undefined && !CATEGORIAS.includes(datos.categoria)))
    return 'Elige una categoría.';
  if (falta(datos.precio) || (datos.precio !== undefined && !(Number.isFinite(datos.precio) && datos.precio > 0)))
    return 'El precio debe ser mayor que 0.';
  if (falta(datos.stock) || (datos.stock !== undefined && !(Number.isInteger(datos.stock) && datos.stock >= 0)))
    return 'El stock debe ser un número entero igual o mayor que 0.';
  return null;
}

// ── Implementación mock ──────────────────────────────────────────────────────

const tabla = () => leer<ItemInventario[]>(CLAVES.inventario, semillaInventario);

function slug(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function aplicarCategoria(item: ItemInventario, categoria: CategoriaInventario) {
  item.categoria = categoria;
  item.tipo = CATEGORIAS_MENU.includes(categoria) ? 'menu' : 'producto';
  item.bajoReserva = categoria === 'especiales' || undefined;
}

function buscar(lista: ItemInventario[], id: string): ItemInventario {
  const item = lista.find((i) => i.id === id);
  if (!item) throw new ServiceError('Ese producto ya no existe en el inventario.');
  return item;
}

/** Ítems del inventario sin retardo: lo usa el mock de pedidos para precios y disponibilidad */
export const leerInventarioMock = () => copia(tabla());

/**
 * Descuenta el stock de las líneas de un pedido. Si alguna no alcanza, no descuenta nada
 * y lanza el error. Con Supabase será una función SQL dentro de la misma transacción.
 */
export function descontarStockMock(lineas: LineaPedido[]): void {
  const lista = tabla();
  const faltantes = lineas.flatMap(({ id, cantidad }) => {
    const item = lista.find((i) => i.id === id);
    if (!item) return [`${id} (no está en el inventario)`];
    return item.stock < cantidad ? [`${item.nombre} (quedan ${item.stock}, se piden ${cantidad})`] : [];
  });
  if (faltantes.length) throw new ServiceError(`Stock insuficiente: ${faltantes.join('; ')}.`);
  for (const { id, cantidad } of lineas) buscar(lista, id).stock -= cantidad;
  guardar(CLAVES.inventario, lista);
}

export const mockInventarioService: InventarioService = {
  async listar() {
    await espera();
    return copia(tabla());
  },

  async obtener(id) {
    await espera();
    return copia(tabla().find((i) => i.id === id) ?? null);
  },

  async crear(datos) {
    await espera();
    const error = validarItem(datos);
    if (error) throw new ServiceError(error);
    const lista = tabla();
    const base = slug(datos.nombre) || 'producto';
    let id = base;
    for (let n = 2; lista.some((i) => i.id === id); n++) id = `${base}-${n}`;
    const item = {
      id,
      nombre: datos.nombre.trim(),
      precio: datos.precio,
      btw: BTW_RATE,
      disponible: datos.disponible,
      stock: datos.stock,
      descripcion: datos.descripcion?.trim() || undefined,
    } as ItemInventario;
    aplicarCategoria(item, datos.categoria);
    item.imagen = `/images/${item.tipo === 'menu' ? 'menu' : 'productos'}/${id}.jpg`;
    lista.push(item);
    guardar(CLAVES.inventario, lista);
    return copia(item);
  },

  async editar(id, cambios) {
    await espera();
    const error = validarItem(cambios, true);
    if (error) throw new ServiceError(error);
    const lista = tabla();
    const item = buscar(lista, id);
    if (cambios.nombre !== undefined) item.nombre = cambios.nombre.trim();
    if (cambios.precio !== undefined && cambios.precio !== item.precio) {
      item.precio = cambios.precio;
      item.precioEstimado = undefined;
    }
    if (cambios.stock !== undefined) item.stock = cambios.stock;
    if (cambios.descripcion !== undefined) item.descripcion = cambios.descripcion.trim() || undefined;
    if (cambios.disponible !== undefined) item.disponible = cambios.disponible;
    if (cambios.categoria !== undefined) aplicarCategoria(item, cambios.categoria);
    guardar(CLAVES.inventario, lista);
    return copia(item);
  },

  async cambiarDisponibilidad(id, disponible) {
    await espera();
    const lista = tabla();
    const item = buscar(lista, id);
    item.disponible = disponible;
    guardar(CLAVES.inventario, lista);
    return copia(item);
  },

  async ajustarStock(id, cantidad) {
    await espera();
    if (!Number.isInteger(cantidad) || cantidad === 0) throw new ServiceError('Indica un número entero de unidades distinto de 0.');
    const lista = tabla();
    const item = buscar(lista, id);
    if (item.stock + cantidad < 0) throw new ServiceError(`El stock no puede quedar en negativo (quedan ${item.stock}).`);
    item.stock += cantidad;
    guardar(CLAVES.inventario, lista);
    return copia(item);
  },
};
