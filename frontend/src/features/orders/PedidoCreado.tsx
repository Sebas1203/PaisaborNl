'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DatosEntrega } from '@/components/order/DatosEntrega';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { EstadoError, Skeleton } from '@/components/ui/Estados';
import { borrarDatosCheckout, leerDatosCheckout } from '@/features/cart/datosCheckout';
import { clearLastOrder, readLastOrder, useCart } from '@/features/cart/CartProvider';
import { formatEUR } from '@/lib/format';
import { lineasGuardadasConItem, totales } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError, pedidosService, type PedidoPublico } from '@/services';

// Confirmación de compra: crea el pedido (estado "pendiente") con el carrito y los datos de
// entrega del checkout, y lo expone a las piezas de la pantalla /checkout/exito.
// Funciona con y sin cuenta: sin sesión el pedido queda como pedido de invitado.

const CLAVE_CREADO = 'paisabor:pedido-creado';

/** Lo mínimo para volver a consultar el pedido recién creado (también sin cuenta) */
export interface PedidoCreadoGuardado {
  id: string;
  email: string;
  nombre: string;
}

/** Último pedido creado en esta pestaña (sessionStorage), o null */
export function leerPedidoCreado(): PedidoCreadoGuardado | null {
  try {
    const raw = sessionStorage.getItem(CLAVE_CREADO);
    const dato = raw ? (JSON.parse(raw) as Partial<PedidoCreadoGuardado>) : null;
    return dato?.id && dato.email ? { id: dato.id, email: dato.email, nombre: dato.nombre ?? '' } : null;
  } catch {
    return null;
  }
}

function guardarPedidoCreado(dato: PedidoCreadoGuardado) {
  try {
    sessionStorage.setItem(CLAVE_CREADO, JSON.stringify(dato));
  } catch {
    // sin sessionStorage solo se pierde poder recargar esta confirmación
  }
}

interface Estado {
  pedido: PedidoPublico | null;
  error: string | null;
  cargando: boolean;
}

const Ctx = createContext<Estado>({ pedido: null, error: null, cargando: true });
const usePedidoCreado = () => useContext(Ctx);

// Evita crear el pedido dos veces si el efecto se ejecuta de nuevo (StrictMode)
let creando: Promise<PedidoPublico> | null = null;

export function PedidoCreadoProvider({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const { clear } = useCart();
  const vaciarCarrito = useRef(clear);
  vaciarCarrito.current = clear;
  const [estado, setEstado] = useState<Estado>({ pedido: null, error: null, cargando: true });
  const userId = user?.id;

  useEffect(() => {
    // Se espera a saber si hay sesión para asociar el pedido a la cuenta cuando la hay
    if (loading) return;
    let activo = true;
    const lineas = readLastOrder();
    const datos = leerDatosCheckout();
    let promesa: Promise<PedidoPublico | null>;

    if (lineas.length && datos) {
      creando ??= pedidosService
        .crear({
          clienteId: userId,
          cliente: datos.nombre,
          email: datos.email,
          telefono: datos.telefono,
          entrega: datos.entrega,
          fechaEntrega: datos.fechaEntrega,
          franja: datos.franja,
          direccion: datos.direccion,
          notas: datos.notas,
          lineas,
        })
        .then((pedido) => {
          guardarPedidoCreado({ id: pedido.id, email: pedido.email, nombre: pedido.cliente });
          clearLastOrder();
          borrarDatosCheckout();
          vaciarCarrito.current();
          return pedido;
        })
        .finally(() => {
          creando = null;
        });
      promesa = creando;
    } else {
      // Recarga de la confirmación: misma consulta que el seguimiento público (número + correo)
      const guardado = leerPedidoCreado();
      promesa = guardado ? pedidosService.obtenerPublico(guardado.id, guardado.email) : Promise.resolve(null);
    }

    promesa
      .then((pedido) => {
        if (!activo) return;
        setEstado({ pedido, cargando: false, error: pedido ? null : 'No encontramos un pedido reciente para confirmar.' });
      })
      .catch((e) => activo && setEstado({ pedido: null, cargando: false, error: mensajeDeError(e) }));
    return () => {
      activo = false;
    };
  }, [loading, userId]);

  return <Ctx.Provider value={estado}>{children}</Ctx.Provider>;
}

export function NumeroPedido() {
  const { pedido } = usePedidoCreado();
  return <>#{pedido?.id ?? '…'}</>;
}

export function ImportePedidoCreado({ parte }: { parte: 'total' | 'iva' }) {
  const { pedido } = usePedidoCreado();
  const t = totales(pedido?.lineas ?? []);
  return <>{formatEUR(parte === 'total' ? t.total : t.iva)}</>;
}

export function ResumenPedidoCreado({ titulo }: { titulo?: string }) {
  const { pedido, error, cargando } = usePedidoCreado();
  if (cargando) return <Skeleton filas={3} />;
  if (error || !pedido)
    return (
      <div className="space-y-3">
        <EstadoError mensaje={error ?? 'No se pudo crear el pedido.'} />
        <Link href="/carrito" className="block text-center text-sm font-semibold text-secondary hover:underline">
          Volver al carrito
        </Link>
      </div>
    );
  return <ResumenPedido lineas={lineasGuardadasConItem(pedido.lineas)} titulo={titulo} />;
}

/** Método, día y franja del pedido recién creado */
export function EntregaPedidoCreado() {
  const { pedido, cargando } = usePedidoCreado();
  if (cargando) return <Skeleton filas={2} />;
  if (!pedido) return null;
  return <DatosEntrega entrega={pedido.entrega} fechaEntrega={pedido.fechaEntrega} franja={pedido.franja} />;
}

/** Con cuenta lleva a Mis pedidos; sin cuenta, al seguimiento público con el número ya puesto */
export function EnlacePedidoCreado({ className, children }: { className?: string; children: React.ReactNode }) {
  const { pedido } = usePedidoCreado();
  const { user } = useAuth();
  const href = user
    ? pedido
      ? `/mis-pedidos/${pedido.id}`
      : '/mis-pedidos'
    : `/seguimiento${pedido ? `?pedido=${encodeURIComponent(pedido.id)}` : ''}`;
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

/** Solo sin sesión: invita a crear una cuenta con los datos del pedido (opcional) */
export function OfertaCrearCuenta() {
  const { pedido } = usePedidoCreado();
  const { user, loading } = useAuth();
  if (loading || user || !pedido) return null;
  return (
    <div className="mt-10 p-6 rounded-xl bg-secondary-fixed/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-secondary text-2xl shrink-0">person_add</span>
        <div>
          <h2 className="font-headline font-bold text-base text-primary">¿Quieres guardar tus pedidos?</h2>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Crea una cuenta con este correo y verás este pedido y los siguientes en «Mis pedidos». Es opcional.
          </p>
        </div>
      </div>
      <Link
        href="/registro?desde=pedido&next=/mis-pedidos"
        className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Crear cuenta
      </Link>
    </div>
  );
}
