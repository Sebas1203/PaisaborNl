'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { SEDE_PRINCIPAL } from '@/config/sedes';
import { useAuth } from '@/providers/AuthProvider';

// Estructura del panel admin (variante de administrador_inventario): sidebar fija en escritorio,
// colapsable en móvil, y cabecera con el nombre del admin.

const LINKS = [
  { href: '/admin', label: 'Resumen', icon: 'space_dashboard' },
  { href: '/admin/pedidos', label: 'Pedidos', icon: 'receipt_long' },
  { href: '/admin/reservas', label: 'Reservas', icon: 'event_available' },
  { href: '/admin/inventario', label: 'Inventario', icon: 'shelves' },
  { href: '/admin/menus', label: 'Menús de catering', icon: 'restaurant_menu' },
];

const linkClass = (active: boolean) =>
  active
    ? 'flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all bg-primary-container text-on-primary font-semibold'
    : 'flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all';

function Sidebar({ abierto, onCerrar }: { abierto: boolean; onCerrar: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useAuth();
  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname === href || pathname.startsWith(href === '/admin/menus' ? href : `${href}/`);

  async function salir() {
    await signOut();
    router.replace('/admin/login');
    router.refresh();
  }

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-6 pb-6 shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-transform duration-300 lg:translate-x-0 ${
        abierto ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="px-6 mb-8 flex items-start justify-between gap-3">
        <div>
          <Link href="/admin" onClick={onCerrar}>
            <BrandLogo size="sm" withText />
          </Link>
          <div className="text-xs text-secondary font-medium tracking-wide uppercase mt-1">Panel interno</div>
        </div>
        <button type="button" aria-label="Cerrar menú" className="lg:hidden text-on-surface-variant" onClick={onCerrar}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="px-6 mb-3">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">Administración</span>
      </div>
      <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto">
        {LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link key={link.href} aria-current={active ? 'page' : undefined} className={linkClass(active)} href={link.href} onClick={onCerrar}>
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
        <div className="my-3 border-t border-surface-container-high" />
        <Link className={linkClass(false)} href="/catalogo">
          <span className="material-symbols-outlined text-[20px]">storefront</span>
          <span>Ver tienda</span>
        </Link>
        <button type="button" className={`${linkClass(false)} w-full`} onClick={() => void salir()}>
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Cerrar sesión</span>
        </button>
      </nav>
      <div className="px-4 mt-auto pt-4">
        <div className="p-3 bg-surface rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-sm">pin_drop</span>
          <div className="text-xs">
            <div className="font-medium text-on-surface">{SEDE_PRINCIPAL.nombre}</div>
            <div className="text-on-surface-variant">{SEDE_PRINCIPAL.direccion}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Cabecera({ onMenu }: { onMenu: () => void }) {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 w-full px-4 sm:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Abrir menú" className="lg:hidden text-primary" onClick={onMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="font-headline text-lg font-bold tracking-tight text-primary">Paisabor Admin</span>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
            <span>{SEDE_PRINCIPAL.ciudad}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-medium text-on-surface">{user?.nombre}</div>
            <div className="text-[11px] text-secondary font-medium">{user?.email}</div>
          </div>
          <BrandLogo size="sm" />
        </div>
      </div>
    </header>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();
  useEffect(() => setAbierto(false), [pathname]);

  return (
    <>
      <Sidebar abierto={abierto} onCerrar={() => setAbierto(false)} />
      {abierto && <div className="fixed inset-0 z-40 bg-primary/30 lg:hidden" aria-hidden="true" onClick={() => setAbierto(false)} />}
      <div className="lg:pl-64">
        <Cabecera onMenu={() => setAbierto(true)} />
        {children}
      </div>
    </>
  );
}
