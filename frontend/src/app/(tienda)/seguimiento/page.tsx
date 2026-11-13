// Seguimiento de un pedido sin cuenta: número de pedido + correo con el que se hizo.
// Usa pedidosService.obtenerPublico, que con Supabase será la función obtener_pedido_publico.
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { DatosEntrega } from '@/components/order/DatosEntrega';
import { EstadoBadge, LineaEstados } from '@/components/order/EstadoPedido';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { AvisoError, Skeleton } from '@/components/ui/Estados';
import { whatsappLink } from '@/config/contact';
import { leerPedidoCreado } from '@/features/orders/PedidoCreado';
import { formatFechaHora } from '@/lib/format';
import { lineasGuardadasConItem } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError, pedidosService, type PedidoPublico } from '@/services';
import { validarEmail } from '@/services/auth';

const NO_ENCONTRADO = 'No encontramos un pedido con ese número y correo. Revisa que sean los mismos que usaste al comprar.';

const inputClass =
  'w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright placeholder:text-outline-variant transition-colors';

function Seguimiento() {
  const params = useSearchParams();
  const { user } = useAuth();
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [pedido, setPedido] = useState<PedidoPublico | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [buscando, setBuscando] = useState(false);
  const autoBuscado = useRef(false);

  const buscar = useCallback(async (n: string, correo: string) => {
    const problema = (!n.trim() && 'Escribe el número de pedido (por ejemplo PSB-2026-1009).') || validarEmail(correo);
    setError(problema || null);
    setPedido(null);
    if (problema) return;
    setBuscando(true);
    try {
      const encontrado = await pedidosService.obtenerPublico(n, correo);
      setPedido(encontrado);
      if (!encontrado) setError(NO_ENCONTRADO);
    } catch (e) {
      setError(mensajeDeError(e));
    } finally {
      setBuscando(false);
    }
  }, []);

  // ?pedido=… viene de la confirmación de compra; si es el pedido recién creado en esta pestaña,
  // también se conoce el correo y se consulta directamente
  useEffect(() => {
    const desdeUrl = params.get('pedido') ?? '';
    if (!desdeUrl || autoBuscado.current) return;
    autoBuscado.current = true;
    setNumero(desdeUrl);
    const creado = leerPedidoCreado();
    if (creado?.id === desdeUrl) {
      setEmail(creado.email);
      void buscar(desdeUrl, creado.email);
    }
  }, [params, buscar]);

  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full pt-28 pb-16 bg-background min-h-[calc(100vh-16rem)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <header className="space-y-2">
            <span className="text-xs uppercase font-label tracking-widest text-secondary font-semibold">Seguimiento</span>
            <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">¿Dónde está mi pedido?</h1>
            <p className="text-on-surface-variant max-w-2xl">
              Escribe el número de pedido y el correo con el que compraste. No necesitas cuenta.
              {user && (
                <>
                  {' '}
                  También puedes ver todos tus pedidos en{' '}
                  <Link href="/mis-pedidos" className="text-secondary font-semibold hover:underline">
                    Mis pedidos
                  </Link>
                  .
                </>
              )}
            </p>
          </header>

          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              void buscar(numero, email);
            }}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-xs grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 items-end"
          >
            <div className="space-y-1">
              <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="numero-pedido">
                Número de pedido
              </label>
              <input id="numero-pedido" className={`${inputClass} uppercase`} placeholder="PSB-2026-1009" value={numero} onChange={(e) => setNumero(e.target.value)} autoComplete="off" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="correo-pedido">
                Correo electrónico
              </label>
              <input id="correo-pedido" className={inputClass} type="email" placeholder="tu@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <button type="submit" disabled={buscando} className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label text-sm font-semibold hover:bg-primary-container transition-colors disabled:opacity-60">
              {buscando ? 'Buscando…' : 'Consultar'}
            </button>
          </form>

          <AvisoError mensaje={error} />
          {buscando && <Skeleton filas={4} />}

          {pedido && !buscando && (
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <EstadoBadge estado={pedido.estado} />
                    <span className="text-xs font-label text-on-surface-variant">{formatFechaHora(pedido.fecha)}</span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Pedido #{pedido.id}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                    <h3 className="font-headline font-bold text-lg text-primary mb-5">Estado del pedido</h3>
                    <LineaEstados pedido={pedido} />
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-6">
                    <DatosEntrega entrega={pedido.entrega} fechaEntrega={pedido.fechaEntrega} franja={pedido.franja} />
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container rounded-xl p-6 space-y-5">
                  <ResumenPedido lineas={lineasGuardadasConItem(pedido.lineas)} titulo="Productos" />
                </div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-on-surface-variant text-center md:text-left">
                  ¿Quieres cambiar o cancelar el pedido? Escríbenos por WhatsApp con el número de pedido.
                </p>
                <a
                  className="w-full sm:w-auto bg-surface-container-lowest hover:bg-surface text-primary font-label text-xs font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all"
                  href={whatsappLink(`Hola Paisabor, tengo una consulta sobre el pedido ${pedido.id}`)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base text-[#25D366]">chat</span> Contactar por WhatsApp
                </a>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default function SeguimientoPage() {
  return (
    <Suspense fallback={null}>
      <Seguimiento />
    </Suspense>
  );
}
