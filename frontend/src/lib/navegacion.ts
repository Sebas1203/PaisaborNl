import type { Rol } from '@/services/tipos';

/**
 * Destino del parámetro ?next= solo si es una ruta interna (evita redirecciones abiertas
 * a otros dominios con "//otro.com" o "/\otro.com").
 */
export function destinoSeguro(next: string | null | undefined, porDefecto: string): string {
  if (!next || !next.startsWith('/') || next.startsWith('//') || next.startsWith('/\\')) return porDefecto;
  return next;
}

/** A dónde va cada rol al iniciar sesión si no hay ?next= */
export const inicioPorRol = (rol: Rol) => (rol === 'admin' ? '/admin' : '/catalogo');

/** URL de login con el regreso a la página actual */
export const loginCon = (ruta: string, base = '/login') => `${base}?next=${encodeURIComponent(ruta)}`;
