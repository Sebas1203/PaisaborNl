// MOCK: "base de datos" en localStorage para la demo sin backend. Todas las claves llevan el
// prefijo "paisabor:". Con Supabase este archivo desaparece.

const PREFIJO = 'paisabor:';

export const CLAVES = {
  usuarios: 'db:usuarios',
  pedidos: 'db:pedidos',
  inventario: 'db:inventario',
  // v2: reservas con varios platos; las del modelo anterior (un menú) se ignoran
  reservas: 'db:reservas-v2',
  menus: 'db:menus-catering',
  sesion: 'sesion',
} as const;

type Clave = (typeof CLAVES)[keyof typeof CLAVES];

/** Lee una tabla; si no existe (o está corrupta) la crea con la semilla */
export function leer<T>(clave: Clave, semilla: () => T): T {
  if (typeof window === 'undefined') return semilla();
  try {
    const raw = localStorage.getItem(PREFIJO + clave);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    // dato corrupto o storage bloqueado: se vuelve a sembrar
  }
  const valor = semilla();
  guardar(clave, valor);
  return valor;
}

export function guardar<T>(clave: Clave, valor: T): void {
  try {
    localStorage.setItem(PREFIJO + clave, JSON.stringify(valor));
  } catch {
    // sin localStorage (modo privado): los cambios viven solo en esta carga de la página
  }
}

export function borrar(clave: Clave): void {
  try {
    localStorage.removeItem(PREFIJO + clave);
  } catch {
    // nada que borrar
  }
}

/** Retardo artificial de 200 a 400 ms para que la demo se comporte como una API real */
export const espera = () => new Promise<void>((resolve) => setTimeout(resolve, 200 + Math.random() * 200));

/** Copia profunda para que los componentes nunca muten la "base de datos" */
export const copia = <T>(valor: T): T => structuredClone(valor);

/** Id aleatorio corto (crypto.randomUUID no existe fuera de contextos seguros, p. ej. http por IP) */
export const nuevoId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
