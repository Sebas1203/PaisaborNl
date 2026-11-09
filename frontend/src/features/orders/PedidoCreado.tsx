'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { EstadoError, Skeleton } from '@/components/ui/Estados';
import { borrarDatosCheckout, leerDatosCheckout } from '@/features/cart/datosCheckout';
import { clearLastOrder, readLastOrder, useCart } from '@/features/cart/CartProvider';
import { formatEUR } from '@/lib/format';
import { lineasGuardadasConItem, totales } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError, pedidosService, type Pedido } from '@/services';

// Confirmación de compra: crea el pedido (estado "pendiente") con el carrito pagado y los datos
// de entrega del checkout, y lo expone a las piezas de la pantalla /checkout/exito.

const CLAVE_CREADO = 'paisabor:pedido-creado';

interface Estado {
  pedido: Pedido | null;
  error: string | null;
  cargando: boolean;
}

const Ctx = createContext<Estado>({ pedido: null, error: null, cargando: true });
const usePedidoCreado = () => useContext(Ctx);

// Evita crear el pedido dos veces si el efecto se ejecuta de nuevo (StrictMode)
let creando: Promise<Pedido> | null = null;

const leerCreado = () => {
  try {
    return sessionStorage.getItem(CLAVE_CREADO);
  } catch {
    return null;
  }
};

export function PedidoCreadoProvider({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const { clear } = useCart();
  const vaciarCarrito = useRef(clear);
  vaciarCarrito.current = clear;
  const [estado, setEstado] = useState<Estado>({ pedido: null, error: null, cargando: true });
  const userId = user?.id;

  useEffect(() => {
    if (loading || !user) return;
    let activo = true;
    const lineas = readLastOrder();
    const datos = leerDatosCheckout();
    let promesa: Promise<Pedido | null>;

    if (lineas.length && datos) {
      creando ??= pedidosService
        .crear({
          clienteId: user.id,
          cliente: datos.nombre,
          email: datos.email,
          telefono: datos.telefono,
          entrega: datos.entrega,
          direccion: datos.direccion,
          notas: datos.notas,
          lineas,
        })
        .then((pedido) => {
          try {
            sessionStorage.setItem(CLAVE_CREADO, pedido.id);
          } catch {
            // sin sessionStorage solo se pierde poder recargar esta confirmación
          }
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
      const id = leerCreado();
      promesa = id ? pedidosService.obtener(id) : Promise.resolve(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export function EnlacePedidoCreado({ className, children }: { className?: string; children: React.ReactNode }) {
  const { pedido } = usePedidoCreado();
  return (
    <Link className={className} href={pedido ? `/mis-pedidos/${pedido.id}` : '/mis-pedidos'}>
      {children}
    </Link>
  );
}
