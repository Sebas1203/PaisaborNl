'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PantallaCargando } from '@/components/ui/Estados';
import { loginCon } from '@/lib/navegacion';
import { useAuth } from '@/providers/AuthProvider';
import type { Rol } from '@/services';

// MOCK: la protección real debe hacerla Supabase Auth + RLS; esta cookie es solo para la demo.
// Segunda barrera del lado del cliente (la primera es src/proxy.ts). rol="cliente" exige
// cualquier sesión; rol="admin" exige una sesión de administrador.
export function RequireRole({ rol, children }: { rol: Rol; children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const permitido = Boolean(user && (rol === 'cliente' || user.rol === 'admin'));

  useEffect(() => {
    if (loading || permitido) return;
    if (!user) router.replace(loginCon(pathname, rol === 'admin' ? '/admin/login' : '/login'));
    else router.replace('/?acceso=denegado');
  }, [loading, permitido, user, rol, pathname, router]);

  if (!permitido) return <PantallaCargando />;
  return <>{children}</>;
}
