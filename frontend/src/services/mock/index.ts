// MOCK: implementaciones de la demo (localStorage). Una futura carpeta src/services/supabase/
// exportará estos mismos nombres y src/services/index.ts solo tendrá que importar de allí.
export { mockAuthService as authService } from '../auth';
export { mockPedidosService as pedidosService } from '../pedidos';
export { mockInventarioService as inventarioService } from '../inventario';
export { mockReservasService as reservasService } from '../reservas';
export { mockMenusService as menusService } from '../menus';
