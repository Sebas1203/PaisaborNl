// Modo demo: cuentas de prueba para enseñar la app sin backend. Solo se activan con
// NEXT_PUBLIC_DEMO_MODE=true y las credenciales vienen de frontend/.env.local (ver
// .env.local.example). Son cuentas ficticias de la demo, nunca contraseñas reales.

export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export interface CuentaDemo {
  email: string;
  password: string;
}

export const DEMO_CLIENTE: CuentaDemo = {
  email: process.env.NEXT_PUBLIC_DEMO_CLIENTE_EMAIL ?? '',
  password: process.env.NEXT_PUBLIC_DEMO_CLIENTE_PASSWORD ?? '',
};

export const DEMO_ADMIN: CuentaDemo = {
  email: process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL ?? '',
  password: process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD ?? '',
};

const completa = (c: CuentaDemo) => Boolean(c.email && c.password);

/** true si el modo demo está activo y la cuenta tiene correo y contraseña configurados */
export const demoDisponible = (cuenta: CuentaDemo) => DEMO_MODE && completa(cuenta);

/** ids fijos de las cuentas demo, para asociarles pedidos semilla */
export const ID_CLIENTE_DEMO = 'u-demo-cliente';
export const ID_ADMIN_DEMO = 'u-demo-admin';
