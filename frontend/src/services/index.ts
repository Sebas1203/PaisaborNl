// Servicios activos de la app. Los componentes importan SIEMPRE desde aquí ('@/services').
// Para pasar de la demo a Supabase basta con cambiar esta línea por './supabase', que debe
// exportar los mismos cinco servicios implementando las interfaces de cada archivo.
import * as activos from './mock';

import type { AuthService } from './auth';
import type { InventarioService } from './inventario';
import type { MenusService } from './menus';
import type { PedidosService } from './pedidos';
import type { ReservasService } from './reservas';

export const authService: AuthService = activos.authService;
export const pedidosService: PedidosService = activos.pedidosService;
export const inventarioService: InventarioService = activos.inventarioService;
export const reservasService: ReservasService = activos.reservasService;
export const menusService: MenusService = activos.menusService;

export type { AuthService, InventarioService, MenusService, PedidosService, ReservasService };
export type * from './tipos';
export { ServiceError, mensajeDeError } from './errores';
