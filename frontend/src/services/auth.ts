// Autenticación: interfaz del servicio + implementación mock (localStorage + cookie de demo).
// Con Supabase, la implementación usará supabase.auth.* y la tabla de perfiles con RLS.

import { DEMO_ADMIN, DEMO_CLIENTE, DEMO_MODE, demoDisponible, ID_ADMIN_DEMO, ID_CLIENTE_DEMO } from '@/config/demo';
import { ServiceError } from './errores';
import { CLAVES, copia, espera, guardar, leer, borrar, nuevoId } from './mock/almacen';
import { semillaUsuarios } from './mock/semilla';
import { borrarCookieSesion, escribirCookieSesion } from './mock/sesion';
import type { CambiosPerfil, DatosRegistro, Usuario } from './tipos';

export interface AuthService {
  signIn(email: string, password: string): Promise<Usuario>;
  signUp(datos: DatosRegistro): Promise<Usuario>;
  signOut(): Promise<void>;
  /** No revela si el correo existe: siempre resuelve igual */
  resetPassword(email: string): Promise<void>;
  getSession(): Promise<Usuario | null>;
  updateProfile(id: string, cambios: CambiosPerfil): Promise<Usuario>;
}

// ── Validaciones compartidas con los formularios ─────────────────────────────

export const PASSWORD_MIN = 8;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TELEFONO_RE = /^\+?[\d\s()-]{6,20}$/;

export function validarEmail(email: string): string | null {
  if (!email.trim()) return 'Escribe tu correo electrónico.';
  return EMAIL_RE.test(email.trim()) ? null : 'El correo no tiene un formato válido.';
}

export function validarPassword(password: string): string | null {
  if (!password) return 'Escribe tu contraseña.';
  return password.length >= PASSWORD_MIN ? null : `La contraseña debe tener al menos ${PASSWORD_MIN} caracteres.`;
}

export function validarTelefono(telefono: string | undefined): string | null {
  if (!telefono?.trim()) return null;
  return TELEFONO_RE.test(telefono.trim()) ? null : 'El teléfono solo puede tener números, espacios y el prefijo +.';
}

export function validarNombre(nombre: string | undefined): string | null {
  return nombre && nombre.trim().length >= 2 ? null : 'Escribe tu nombre (mínimo 2 letras).';
}

// ── Implementación mock ──────────────────────────────────────────────────────

interface UsuarioGuardado extends Usuario {
  /** null: usuario semilla que no puede iniciar sesión */
  passwordHash: string | null;
}

// MOCK: hash solo para no dejar la contraseña en claro en localStorage. No es seguridad real.
async function hash(texto: string): Promise<string> {
  const datos = new TextEncoder().encode(`paisabor-demo:${texto}`);
  if (globalThis.crypto?.subtle) {
    const digest = await crypto.subtle.digest('SHA-256', datos);
    return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 5381;
  for (const b of datos) h = ((h << 5) + h + b) | 0;
  return `djb2-${(h >>> 0).toString(16)}`;
}

const esCuentaDemo = (id: string) => id === ID_CLIENTE_DEMO || id === ID_ADMIN_DEMO;

/** Usuarios guardados, asegurando las cuentas demo con las credenciales actuales del .env.local */
async function usuarios(): Promise<UsuarioGuardado[]> {
  const lista = leer<UsuarioGuardado[]>(CLAVES.usuarios, semillaUsuarios);
  const demos = [
    { cuenta: DEMO_CLIENTE, id: ID_CLIENTE_DEMO, nombre: 'Cliente Demo', rol: 'cliente' as const },
    { cuenta: DEMO_ADMIN, id: ID_ADMIN_DEMO, nombre: 'Admin Demo', rol: 'admin' as const },
  ];
  let cambiado = false;
  for (const { cuenta, id, nombre, rol } of demos) {
    if (!demoDisponible(cuenta)) continue;
    const email = cuenta.email.trim().toLowerCase();
    const passwordHash = await hash(cuenta.password);
    const existente = lista.find((u) => u.id === id);
    if (!existente) {
      lista.push({ id, nombre, email, rol, passwordHash });
      cambiado = true;
    } else if (existente.email !== email || existente.passwordHash !== passwordHash) {
      Object.assign(existente, { email, passwordHash });
      cambiado = true;
    }
  }
  if (cambiado) guardar(CLAVES.usuarios, lista);
  return lista;
}

function publico({ passwordHash: _omitido, ...usuario }: UsuarioGuardado): Usuario {
  return copia(usuario);
}

function iniciarSesion(usuario: Usuario) {
  guardar(CLAVES.sesion, { userId: usuario.id });
  escribirCookieSesion({ rol: usuario.rol, id: usuario.id });
}

function cerrarSesion() {
  borrar(CLAVES.sesion);
  borrarCookieSesion();
}

const lanzarSi = (error: string | null) => {
  if (error) throw new ServiceError(error);
};

export const mockAuthService: AuthService = {
  async signIn(email, password) {
    await espera();
    lanzarSi(validarEmail(email));
    lanzarSi(validarPassword(password));
    const usuario = (await usuarios()).find((u) => u.email === email.trim().toLowerCase());
    const valido =
      usuario?.passwordHash &&
      !(esCuentaDemo(usuario.id) && !DEMO_MODE) &&
      usuario.passwordHash === (await hash(password));
    if (!usuario || !valido) throw new ServiceError('Correo o contraseña incorrectos.');
    iniciarSesion(usuario);
    return publico(usuario);
  },

  async signUp({ nombre, email, telefono, password }) {
    await espera();
    lanzarSi(validarNombre(nombre));
    lanzarSi(validarEmail(email));
    lanzarSi(validarTelefono(telefono));
    lanzarSi(validarPassword(password));
    const lista = await usuarios();
    const correo = email.trim().toLowerCase();
    if (lista.some((u) => u.email === correo)) throw new ServiceError('Ya existe una cuenta con ese correo.');
    const usuario: UsuarioGuardado = {
      id: `u-${nuevoId()}`,
      nombre: nombre.trim(),
      email: correo,
      telefono: telefono?.trim() || undefined,
      rol: 'cliente',
      passwordHash: await hash(password),
    };
    lista.push(usuario);
    guardar(CLAVES.usuarios, lista);
    iniciarSesion(usuario);
    return publico(usuario);
  },

  async signOut() {
    await espera();
    cerrarSesion();
  },

  async resetPassword(email) {
    await espera();
    lanzarSi(validarEmail(email));
    // MOCK: no se envía ningún correo. Con Supabase: supabase.auth.resetPasswordForEmail(email).
  },

  async getSession() {
    await espera();
    const sesion = leer<{ userId: string } | null>(CLAVES.sesion, () => null);
    const usuario = sesion ? (await usuarios()).find((u) => u.id === sesion.userId) : undefined;
    if (!usuario || (esCuentaDemo(usuario.id) && !DEMO_MODE)) {
      cerrarSesion();
      return null;
    }
    // Mantiene la cookie del proxy en sincronía con la sesión guardada
    escribirCookieSesion({ rol: usuario.rol, id: usuario.id });
    return publico(usuario);
  },

  async updateProfile(id, cambios) {
    await espera();
    if (cambios.nombre !== undefined) lanzarSi(validarNombre(cambios.nombre));
    lanzarSi(validarTelefono(cambios.telefono));
    const lista = await usuarios();
    const usuario = lista.find((u) => u.id === id);
    if (!usuario) throw new ServiceError('No encontramos tu cuenta. Vuelve a iniciar sesión.');
    if (cambios.nombre !== undefined) usuario.nombre = cambios.nombre.trim();
    if (cambios.telefono !== undefined) usuario.telefono = cambios.telefono.trim() || undefined;
    if (cambios.direccion !== undefined) usuario.direccion = cambios.direccion.trim() || undefined;
    guardar(CLAVES.usuarios, lista);
    return publico(usuario);
  },
};
