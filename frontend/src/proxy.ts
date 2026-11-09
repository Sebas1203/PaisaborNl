// Primera barrera de rutas. En Next.js 16 "middleware.ts" pasó a llamarse "proxy.ts" (misma API).
// MOCK: la protección real debe hacerla Supabase Auth + RLS; esta cookie es solo para la demo.
// Solo mira la cookie paisabor_session ("rol:id"); la segunda barrera es <RequireRole>.

import { NextResponse, type NextRequest } from 'next/server';
import { COOKIE_SESION, leerSesionCookie } from '@/services/mock/sesion';

const RUTAS_CON_SESION = ['/mis-pedidos', '/perfil', '/checkout'];
const RUTAS_DE_ACCESO = ['/login', '/registro'];

const dentroDe = (ruta: string, base: string) => ruta === base || ruta.startsWith(`${base}/`);

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const sesion = leerSesionCookie(request.cookies.get(COOKIE_SESION)?.value);
  const ir = (destino: string) => NextResponse.redirect(new URL(destino, request.url));
  const volver = encodeURIComponent(pathname + search);

  // Login del panel: el admin con sesión va directo al resumen
  if (pathname === '/admin/login') return sesion?.rol === 'admin' ? ir('/admin') : NextResponse.next();

  // /admin/** exige rol admin
  if (dentroDe(pathname, '/admin')) {
    if (!sesion) return ir(`/admin/login?next=${volver}`);
    if (sesion.rol !== 'admin') return ir('/?acceso=denegado');
    return NextResponse.next();
  }

  // Zona de cliente: cualquier sesión (cliente o admin)
  if (RUTAS_CON_SESION.some((base) => dentroDe(pathname, base)) && !sesion) return ir(`/login?next=${volver}`);

  // Con sesión no tiene sentido volver a entrar o registrarse
  if (RUTAS_DE_ACCESO.includes(pathname) && sesion) return ir(sesion.rol === 'admin' ? '/admin' : '/');

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/mis-pedidos/:path*', '/perfil/:path*', '/checkout/:path*', '/login', '/registro'],
};
