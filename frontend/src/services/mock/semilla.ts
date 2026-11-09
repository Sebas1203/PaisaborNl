// MOCK: datos semilla de la demo. El catálogo (precios, nombres, fotos) es el real de src/data;
// los clientes, pedidos, reservas y cantidades de stock son ficticios y se generan con fechas
// relativas a hoy para que el resumen del admin tenga datos.

import { DEMO_CLIENTE, ID_CLIENTE_DEMO } from '@/config/demo';
import { itemPorId, MENU, PLATOS, PRODUCTOS } from '@/data';
import { flujoDe } from '@/lib/pedidos';
import type { DeliveryMethod, OrderStatus } from '@/types';
import type { ItemInventario, MenuCatering, Pedido, Reserva, TipoEvento, Usuario } from '../tipos';

const DIA = 24 * 60 * 60 * 1000;
const MINUTO = 60 * 1000;
const ANIO = new Date().getFullYear();

/** YYYY-MM-DD en hora local */
export function isoDia(fecha: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${fecha.getFullYear()}-${p(fecha.getMonth() + 1)}-${p(fecha.getDate())}`;
}

// ── Clientes ficticios ───────────────────────────────────────────────────────

interface ClienteSemilla {
  id: string;
  nombre: string;
  email: string;
  direccion: string;
}

const CLIENTE_DEMO: ClienteSemilla = {
  id: ID_CLIENTE_DEMO,
  nombre: 'Cliente Demo',
  email: DEMO_CLIENTE.email || 'cliente.demo@example.com',
  direccion: 'Calle de ejemplo 1, 1000 AA Ámsterdam',
};
const CLIENTE_2: ClienteSemilla = {
  id: 'u-cliente-demo-2',
  nombre: 'Cliente demo 2',
  email: 'cliente.demo2@example.com',
  direccion: 'Calle de ejemplo 2, 1000 AB Ámsterdam',
};
const CLIENTE_3: ClienteSemilla = {
  id: 'u-cliente-demo-3',
  nombre: 'Cliente demo 3',
  email: 'cliente.demo3@example.com',
  direccion: 'Calle de ejemplo 3, 1000 AC Ámsterdam',
};

/** Usuarios sin contraseña (no pueden iniciar sesión): solo dan nombre a los pedidos semilla */
export function semillaUsuarios(): (Usuario & { passwordHash: string | null })[] {
  return [CLIENTE_2, CLIENTE_3].map(({ id, nombre, email, direccion }) => ({
    id,
    nombre,
    email,
    direccion,
    rol: 'cliente',
    passwordHash: null,
  }));
}

// ── Inventario ───────────────────────────────────────────────────────────────

// MOCK: unidades de ejemplo. Algunas quedan bajo el umbral para ver la alerta de stock bajo.
const STOCK_SEMILLA: Record<string, number> = {
  'empanada-de-carne': 40,
  'empanada-de-pollo': 12,
  'empanada-de-queso': 6,
  'papa-rellena': 18,
  'hit-lulo': 3,
  'pony-malta': 24,
};
const STOCK_POR_DEFECTO = 20;

export function semillaInventario(): ItemInventario[] {
  const stock = (id: string) => STOCK_SEMILLA[id] ?? STOCK_POR_DEFECTO;
  return [
    ...MENU.map((plato) => ({ ...plato, categoria: plato.bajoReserva ? 'especiales' : 'platos', stock: stock(plato.id) }) as ItemInventario),
    ...PRODUCTOS.map((producto) => ({ ...producto, stock: stock(producto.id) })),
  ];
}

// ── Pedidos ──────────────────────────────────────────────────────────────────

const POR_EQUIPO = 'Equipo Paisabor';

function pedidoSemilla(
  numero: number,
  cliente: ClienteSemilla,
  diasAtras: number,
  entrega: DeliveryMethod,
  estado: OrderStatus,
  lineas: [string, number][],
): Pedido {
  const creado = Date.now() - diasAtras * DIA - 45 * MINUTO;
  const pasos = estado === 'cancelado' ? (['pendiente', 'cancelado'] as OrderStatus[]) : flujoDe(entrega).slice(0, flujoDe(entrega).indexOf(estado) + 1);
  return {
    id: `PSB-${ANIO}-${numero}`,
    fecha: new Date(creado).toISOString(),
    estado,
    entrega,
    clienteId: cliente.id,
    cliente: cliente.nombre,
    email: cliente.email,
    direccion: entrega === 'domicilio' ? cliente.direccion : undefined,
    lineas: lineas.flatMap(([id, cantidad]) => {
      const item = itemPorId(id);
      return item ? [{ id, cantidad, nombre: item.nombre, precio: item.precio, imagen: item.imagen }] : [];
    }),
    historial: pasos.map((paso, i) => ({
      estado: paso,
      fecha: new Date(creado + i * 8 * MINUTO).toISOString(),
      por: i === 0 ? cliente.nombre : POR_EQUIPO,
    })),
  };
}

export function semillaPedidos(): Pedido[] {
  return [
    pedidoSemilla(1001, CLIENTE_DEMO, 0, 'domicilio', 'pendiente', [['bandeja-paisa', 2], ['empanada-de-carne', 4], ['hit-lulo', 1]]),
    pedidoSemilla(1002, CLIENTE_DEMO, 2, 'recogida', 'entregado', [['bowl-montanero', 1], ['papa-rellena', 2], ['pony-malta', 1]]),
    pedidoSemilla(1003, CLIENTE_DEMO, 6, 'domicilio', 'cancelado', [['empanada-de-queso', 2], ['bunuelo', 4]]),
    pedidoSemilla(1004, CLIENTE_2, 0, 'recogida', 'confirmado', [['picada-x1-persona', 2], ['coca-cola', 2]]),
    pedidoSemilla(1005, CLIENTE_3, 0, 'domicilio', 'en_preparacion', [['porcion-de-lechona', 1], ['almojabana', 3], ['agua', 1]]),
    pedidoSemilla(1006, CLIENTE_2, 1, 'domicilio', 'listo', [['bandeja-paisa', 1], ['empanada-de-pollo', 3]]),
    pedidoSemilla(1007, CLIENTE_3, 3, 'domicilio', 'enviado', [['bowl-montanero', 2], ['pony-malta', 2]]),
    // Pide más empanadas de queso de las que hay: sirve para enseñar el error de stock al confirmar
    pedidoSemilla(1008, CLIENTE_2, 0, 'recogida', 'pendiente', [['empanada-de-queso', 8], ['hit-lulo', 2]]),
  ];
}

// ── Catering ─────────────────────────────────────────────────────────────────

// TODO: los menús de catering reales (composición y precio por persona) están por confirmar con Diana.
// Mientras tanto hay un menú por plato típico y el precio por persona es el del plato, marcado como estimado.
export function semillaMenus(): MenuCatering[] {
  return PLATOS.filter((plato) => plato.disponible).map((plato) => ({
    id: `menu-${plato.id}`,
    nombre: `Menú ${plato.nombre}`,
    descripcion: plato.descripcion ?? '',
    precioPorPersona: plato.precio,
    precioEstimado: true,
    platos: [plato.id],
    activo: true,
  }));
}

function reservaSemilla(
  numero: number,
  menuId: string,
  diasDesdeHoy: number,
  personas: number,
  tipoEvento: TipoEvento,
  cliente: ClienteSemilla,
  estado: Reserva['estado'],
): Reserva {
  return {
    id: `RES-${ANIO}-${String(numero).padStart(4, '0')}`,
    menuId,
    fecha: isoDia(new Date(Date.now() + diasDesdeHoy * DIA)),
    personas,
    tipoEvento,
    contacto: { nombre: cliente.nombre, email: cliente.email },
    estado,
    creadaEn: new Date(Date.now() - 2 * DIA).toISOString(),
    clienteId: cliente.id,
  };
}

export function semillaReservas(): Reserva[] {
  const menus = semillaMenus();
  const menu = (i: number) => menus[i % menus.length]?.id ?? '';
  return [
    reservaSemilla(1, menu(0), 10, 25, 'corporativo', CLIENTE_2, 'pendiente'),
    reservaSemilla(2, menu(1), 20, 40, 'boda', CLIENTE_3, 'confirmada'),
    reservaSemilla(3, menu(2), -15, 15, 'cumpleanos', CLIENTE_DEMO, 'realizada'),
  ];
}
