import type { ActiveTab } from '@/components/layout/Navbar';

export const TAB_ROUTES: Record<ActiveTab, string> = {
  despensa: '/catalogo',
  firmas: '/catalogo/firmas',
  perfil: '/admin',
  inventario: '/admin/inventario',
};

// Maps the current URL back to the Navbar tab it belongs to
export function tabFromPathname(pathname: string): ActiveTab {
  const match = (Object.keys(TAB_ROUTES) as ActiveTab[]).find(
    (tab) => TAB_ROUTES[tab] === pathname
  );
  return match ?? 'despensa';
}
