'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SEDE_PRINCIPAL } from '@/config/sedes';

// Sidebar y header de administración (variante "Hearth & Co." de administrador_inventario)
const AVATAR_URL =
  '/images/logo/paisabor-logo-192.png';

const LINKS = [
  { href: '/admin', label: 'Panel', icon: 'space_dashboard' },
  { href: '/admin/productos', label: 'Productos', icon: 'inventory_2' },
  { href: '/admin/menus', label: 'Menús', icon: 'restaurant_menu' },
  { href: '/admin/pedidos', label: 'Pedidos', icon: 'receipt_long' },
  { href: '/admin/reservas', label: 'Reservas', icon: 'event_available' },
  { href: '/admin/inventario', label: 'Inventario', icon: 'shelves' },
];

const linkClass = (active: boolean) =>
  active
    ? 'flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all bg-primary-container text-on-primary font-semibold'
    : 'flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all';

export function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-6 pb-6 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
          <span className="text-primary font-headline font-bold text-lg tracking-tight">P</span>
        </div>
        <div>
          <div className="font-headline text-lg font-bold tracking-tight text-primary leading-tight">Paisabor</div>
          <div className="text-xs text-secondary font-medium tracking-wide uppercase">Hearth &amp; Co.</div>
        </div>
      </div>
      <div className="px-6 mb-3">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">
          Administración
        </span>
      </div>
      <nav className="flex-1 px-3 space-y-1.5">
        {LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              aria-current={active ? 'page' : undefined}
              className={linkClass(active)}
              href={link.href}
            >
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 mt-auto pt-4">
        <div className="p-3 bg-surface rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm">pin_drop</span>
            <div className="text-xs">
              <div className="font-medium text-on-surface">{SEDE_PRINCIPAL.nombre}</div>
              <div className="text-on-surface-variant">{SEDE_PRINCIPAL.direccion}</div>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
        </div>
      </div>
    </aside>
  );
}

export function AdminHeader() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 w-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-headline text-lg font-bold tracking-tight text-primary">Paisabor Admin</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
            <span>Ámsterdam</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
              search
            </span>
            <input
              className="w-72 bg-surface-container-low text-xs text-on-surface pl-9 pr-4 py-2 rounded-lg placeholder:text-outline focus:outline-hidden focus:bg-surface-container-high transition-colors"
              placeholder="Buscar pedidos, platos o insumos..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-medium text-on-surface">Mayordomo</div>
              <div className="text-[11px] text-secondary font-medium">Admin General</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={AVATAR_URL} />
          </div>
        </div>
      </div>
    </header>
  );
}
