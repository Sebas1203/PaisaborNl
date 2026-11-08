'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/features/cart/CartProvider';

// Navbar del catálogo (cat_logo_de_productos_tienda_online), compartido por las pantallas de cliente
const LOGO_URL =
  '/images/logo/paisabor-logo-192.png';

const isProductos = (path: string) =>
  path.startsWith('/catalogo') && !path.startsWith('/catalogo/platos-tipicos');
const isMenus = (path: string) => path.startsWith('/menus') || path.startsWith('/catalogo/platos-tipicos');
const isCatering = (path: string) => path.startsWith('/catering');

const TOP_LINKS = [
  { href: '/', label: 'Quienes Somos', active: () => false },
  { href: '/catalogo', label: 'Productos', active: isProductos },
  { href: '/catalogo/platos-tipicos', label: 'Menu', active: isMenus },
  { href: '/catering', label: 'Catering', active: isCatering },
];

const BOTTOM_LINKS = [
  { href: '/', label: 'Inicio', icon: 'home', active: () => false },
  { href: '/catalogo', label: 'Tienda', icon: 'storefront', active: isProductos },
  { href: '/catering', label: 'Eventos', icon: 'calendar_today', active: isCatering },
];

const topLinkClass = (active: boolean) =>
  active
    ? 'font-body text-label-sm tracking-[0.1em] uppercase text-secondary border-b-2 border-secondary pb-1 transition-colors duration-300'
    : 'font-body text-label-sm tracking-[0.1em] uppercase text-on-surface-variant hover:text-secondary transition-colors duration-300';

const bottomLinkClass = (active: boolean) =>
  active
    ? 'flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-lg px-3 py-1.5 transition-transform duration-200 active:scale-90'
    : 'flex flex-col items-center justify-center text-on-surface-variant px-3 py-1.5 hover:bg-surface-container-high transition-transform duration-200 active:scale-90 rounded-lg';

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-xs shadow-on-surface/5 transition-all">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto hidden md:flex">
          <Link className="font-display text-2xl font-bold tracking-tight text-primary" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="Paisabor Logo" className="h-[45px] w-auto object-contain" />
          </Link>
          <div className="flex space-x-8">
            {TOP_LINKS.map((link) => (
              <Link key={link.label} className={topLinkClass(link.active(pathname))} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link
              aria-label="Mi cuenta"
              className="text-primary hover:text-secondary transition-all active:scale-95 duration-300"
              href="/cuenta"
            >
              <span className="material-symbols-outlined">person</span>
            </Link>
            <Link
              aria-label="Carrito"
              className="text-primary hover:text-secondary transition-all active:scale-95 duration-300 relative"
              href="/carrito"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* BottomNavBar (móvil) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/70 backdrop-blur-xl shadow-[0_-4px_40px_-10px_rgba(28,28,25,0.05)] rounded-t-xl">
        {BOTTOM_LINKS.map((link) => (
          <Link key={link.label} className={bottomLinkClass(link.active(pathname))} href={link.href}>
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-body text-[10px] font-medium mt-1">{link.label}</span>
          </Link>
        ))}
        <Link className={`${bottomLinkClass(pathname === '/carrito')} relative`} href="/carrito">
          <span className="material-symbols-outlined">shopping_bag</span>
          {count > 0 && (
            <span className="absolute top-1 right-2 bg-secondary text-on-secondary text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold">
              {count}
            </span>
          )}
          <span className="font-body text-[10px] font-medium mt-1">Carrito</span>
        </Link>
      </nav>
    </>
  );
}
