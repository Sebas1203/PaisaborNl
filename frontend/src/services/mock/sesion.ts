// MOCK: la protección real debe hacerla Supabase Auth + RLS; esta cookie es solo para la demo.
// Guarda únicamente "rol:id" (nada sensible) para que src/proxy.ts pueda decidir redirecciones.

import type { Rol } from '../tipos';

export const COOKIE_SESION = 'paisabor_session';
const SIETE_DIAS = 60 * 60 * 24 * 7;

export interface SesionCookie {
  rol: Rol;
  id: string;
}

/** Interpreta el valor de la cookie; devuelve null si no es válido. Sin DOM: lo usa también el proxy */
export function leerSesionCookie(valor: string | undefined): SesionCookie | null {
  if (!valor) return null;
  const [rol, id] = decodeURIComponent(valor).split(':');
  if ((rol !== 'cliente' && rol !== 'admin') || !id) return null;
  return { rol, id };
}

export function escribirCookieSesion({ rol, id }: SesionCookie): void {
  document.cookie = `${COOKIE_SESION}=${encodeURIComponent(`${rol}:${id}`)}; Path=/; Max-Age=${SIETE_DIAS}; SameSite=Lax`;
}

export function borrarCookieSesion(): void {
  document.cookie = `${COOKIE_SESION}=; Path=/; Max-Age=0; SameSite=Lax`;
}
