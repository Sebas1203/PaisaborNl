// Pedidos: interfaz + implementación mock. Las reglas de estados están en src/lib/pedidos.ts.
// Con Supabase: tabla pedidos + lineas_pedido + historial_estados, con RLS (el cliente solo ve
// los suyos) y los cambios de estado en una función SQL que también descuenta el stock.

import { ORDER_STATUS_LABELS } from '@/lib/format';
import { puedeCancelar, siguienteEstado } from '@/lib/pedidos';
import type { OrderStatus } from '@/types';
import { ServiceError } from './errores';
import { descontarStockMock, leerInventarioMock } from './inventario';
import { CLAVES, copia, espera, guardar, leer } from './mock/almacen';
import { semillaPedidos } from './mock/semilla';
import type { FiltroPedidos, NuevoPedido, Pedido } from './tipos';

export interface PedidosService {
  /** Más recientes primero. Con clienteId, solo los de ese cliente */
  listar(filtro?: FiltroPedidos): Promise<Pedido[]>;
  obtener(id: string): Promise<Pedido | null>;
  /** Crea el pedido en estado "pendiente" con los precios actuales del inventario */
  crear(datos: NuevoPedido): Promise<Pedido>;
  /** Avanza al siguiente estado del flujo; al confirmar descuenta el stock */
  cambiarEstado(id: string, estado: OrderStatus, por: string): Promise<Pedido>;
  /** Solo desde "pendiente" */
  cancelar(id: string, por: string): Promise<Pedido>;
}

// ── Implementación mock ──────────────────────────────────────────────────────

const tabla = () => leer<Pedido[]>(CLAVES.pedidos, semillaPedidos);
const etiqueta = (estado: OrderStatus) => `«${ORDER_STATUS_LABELS[estado]}»`;

function buscar(lista: Pedido[], id: string): Pedido {
  const pedido = lista.find((p) => p.id === id);
  if (!pedido) throw new ServiceError(`No existe el pedido ${id}.`);
  return pedido;
}

function siguienteId(lista: Pedido[]): string {
  const anio = new Date().getFullYear();
  const prefijo = `PSB-${anio}-`;
  const ultimo = Math.max(1000, ...lista.filter((p) => p.id.startsWith(prefijo)).map((p) => Number(p.id.slice(prefijo.length)) || 0));
  return `${prefijo}${ultimo + 1}`;
}

function registrar(pedido: Pedido, estado: OrderStatus, por: string) {
  pedido.estado = estado;
  pedido.historial.push({ estado, fecha: new Date().toISOString(), por });
}

export const mockPedidosService: PedidosService = {
  async listar(filtro) {
    await espera();
    const lista = tabla().filter((p) => !filtro?.clienteId || p.clienteId === filtro.clienteId);
    return copia(lista.sort((a, b) => b.fecha.localeCompare(a.fecha)));
  },

  async obtener(id) {
    await espera();
    return copia(tabla().find((p) => p.id === id) ?? null);
  },

  async crear(datos) {
    await espera();
    if (!datos.lineas.length) throw new ServiceError('El carrito está vacío.');
    if (datos.entrega === 'domicilio' && !datos.direccion?.trim()) throw new ServiceError('Indica la dirección de entrega.');
    const inventario = leerInventarioMock();
    const lineas = datos.lineas.map(({ id, cantidad }) => {
      const item = inventario.find((i) => i.id === id);
      if (!item) throw new ServiceError('Uno de los productos del carrito ya no está en el catálogo.');
      if (!item.disponible) throw new ServiceError(`${item.nombre} no está disponible ahora mismo.`);
      if (!Number.isInteger(cantidad) || cantidad < 1) throw new ServiceError(`Cantidad no válida para ${item.nombre}.`);
      return { id, cantidad, nombre: item.nombre, precio: item.precio, imagen: item.imagen };
    });
    const lista = tabla();
    const ahora = new Date().toISOString();
    const pedido: Pedido = {
      id: siguienteId(lista),
      fecha: ahora,
      estado: 'pendiente',
      entrega: datos.entrega,
      clienteId: datos.clienteId,
      cliente: datos.cliente,
      email: datos.email,
      telefono: datos.telefono?.trim() || undefined,
      direccion: datos.entrega === 'domicilio' ? datos.direccion?.trim() : undefined,
      notas: datos.notas?.trim() || undefined,
      lineas,
      historial: [{ estado: 'pendiente', fecha: ahora, por: datos.cliente }],
    };
    lista.push(pedido);
    guardar(CLAVES.pedidos, lista);
    return copia(pedido);
  },

  async cambiarEstado(id, estado, por) {
    if (estado === 'cancelado') return mockPedidosService.cancelar(id, por);
    await espera();
    const lista = tabla();
    const pedido = buscar(lista, id);
    const siguiente = siguienteEstado(pedido);
    if (!siguiente) throw new ServiceError(`El pedido está ${etiqueta(pedido.estado)} y ya no admite cambios.`);
    if (estado !== siguiente) {
      throw new ServiceError(
        `No se puede pasar de ${etiqueta(pedido.estado)} a ${etiqueta(estado)}. El siguiente paso es ${etiqueta(siguiente)}.`,
      );
    }
    // Si no hay stock suficiente lanza el error y el pedido se queda como estaba
    if (estado === 'confirmado') descontarStockMock(pedido.lineas);
    registrar(pedido, estado, por);
    guardar(CLAVES.pedidos, lista);
    return copia(pedido);
  },

  async cancelar(id, por) {
    await espera();
    const lista = tabla();
    const pedido = buscar(lista, id);
    if (!puedeCancelar(pedido)) {
      throw new ServiceError(`Solo se pueden cancelar pedidos pendientes; este está ${etiqueta(pedido.estado)}.`);
    }
    registrar(pedido, 'cancelado', por);
    guardar(CLAVES.pedidos, lista);
    return copia(pedido);
  },
};
