// Menús de catering: interfaz + implementación mock.
// Con Supabase: tabla menus_catering con RLS (lectura pública, edición solo admin).

import { ServiceError } from './errores';
import { CLAVES, copia, espera, guardar, leer } from './mock/almacen';
import { semillaMenus } from './mock/semilla';
import type { CambiosMenu, MenuCatering } from './tipos';

export interface MenusService {
  listar(): Promise<MenuCatering[]>;
  obtener(id: string): Promise<MenuCatering | null>;
  editar(id: string, cambios: CambiosMenu): Promise<MenuCatering>;
}

export function validarMenu(cambios: CambiosMenu): string | null {
  if (cambios.nombre !== undefined && !cambios.nombre.trim()) return 'El nombre del menú es obligatorio.';
  if (cambios.precioPorPersona !== undefined && !(Number.isFinite(cambios.precioPorPersona) && cambios.precioPorPersona > 0))
    return 'El precio por persona debe ser mayor que 0.';
  return null;
}

// ── Implementación mock ──────────────────────────────────────────────────────

const tabla = () => leer<MenuCatering[]>(CLAVES.menus, semillaMenus);

export const mockMenusService: MenusService = {
  async listar() {
    await espera();
    return copia(tabla());
  },

  async obtener(id) {
    await espera();
    return copia(tabla().find((m) => m.id === id) ?? null);
  },

  async editar(id, cambios) {
    await espera();
    const error = validarMenu(cambios);
    if (error) throw new ServiceError(error);
    const lista = tabla();
    const menu = lista.find((m) => m.id === id);
    if (!menu) throw new ServiceError('Ese menú de catering ya no existe.');
    if (cambios.nombre !== undefined) menu.nombre = cambios.nombre.trim();
    if (cambios.descripcion !== undefined) menu.descripcion = cambios.descripcion.trim();
    if (cambios.precioPorPersona !== undefined && cambios.precioPorPersona !== menu.precioPorPersona) {
      menu.precioPorPersona = cambios.precioPorPersona;
      menu.precioEstimado = undefined;
    }
    guardar(CLAVES.menus, lista);
    return copia(menu);
  },
};
