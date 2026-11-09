'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';

const itemClass =
  'flex items-center gap-3 w-full px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container-low hover:text-secondary transition-colors text-left';

// Zona de cuenta del Navbar: "Ingresar / Registrarme" sin sesión; nombre + menú con sesión
export function MenuCuenta() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;
    const fuera = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setAbierto(false);
    const escape = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false);
    document.addEventListener('mousedown', fuera);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', fuera);
      document.removeEventListener('keydown', escape);
    };
  }, [abierto]);

  if (loading) return <span className="inline-block w-28 h-8" aria-hidden="true" />;

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Link className="font-body text-label-sm tracking-[0.1em] uppercase text-on-surface-variant hover:text-secondary transition-colors" href="/login">
          Ingresar
        </Link>
        <Link className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-label font-semibold hover:bg-primary-container transition-colors" href="/registro">
          Registrarme
        </Link>
      </div>
    );
  }

  async function salir() {
    setAbierto(false);
    await signOut();
    router.push('/catalogo');
    router.refresh();
  }

  const primerNombre = user.nombre.split(' ')[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
        className="flex items-center gap-1.5 text-primary hover:text-secondary transition-colors"
      >
        <span className="material-symbols-outlined">account_circle</span>
        <span className="font-body text-sm font-medium max-w-[10rem] truncate">{primerNombre}</span>
        <span className="material-symbols-outlined text-base">expand_more</span>
      </button>
      {abierto && (
        <div role="menu" className="absolute right-0 mt-3 w-60 rounded-xl bg-surface-container-lowest shadow-xl shadow-primary/10 py-2 z-50">
          <div className="px-4 pb-2 mb-1 border-b border-surface-container">
            <p className="text-sm font-semibold text-primary truncate">{user.nombre}</p>
            <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
          </div>
          <Link role="menuitem" prefetch={false} className={itemClass} href="/perfil" onClick={() => setAbierto(false)}>
            <span className="material-symbols-outlined text-lg">person</span> Mi perfil
          </Link>
          <Link role="menuitem" prefetch={false} className={itemClass} href="/mis-pedidos" onClick={() => setAbierto(false)}>
            <span className="material-symbols-outlined text-lg">receipt_long</span> Mis pedidos
          </Link>
          {user.rol === 'admin' && (
            <Link role="menuitem" prefetch={false} className={itemClass} href="/admin" onClick={() => setAbierto(false)}>
              <span className="material-symbols-outlined text-lg">space_dashboard</span> Panel admin
            </Link>
          )}
          <div className="my-1 border-t border-surface-container" />
          <button role="menuitem" type="button" className={itemClass} onClick={() => void salir()}>
            <span className="material-symbols-outlined text-lg">logout</span> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
