// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/perfil_de_usuario_paisabor
// y conectado a useAuth y pedidosService (pedidos recientes del usuario actual).
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BrandLogo } from '@/components/BrandLogo';
import { ItemImage } from '@/components/ItemImage';
import { EstadoBadge } from '@/components/order/EstadoPedido';
import { EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR, formatFechaHora } from '@/lib/format';
import { totales } from '@/lib/pedidos';
import { useAuth } from '@/providers/AuthProvider';
import { pedidosService } from '@/services';

const tarjeta = 'bg-surface-container-lowest rounded-xl shadow-[-10px_0_40px_rgba(28,28,25,0.05)]';

export default function PerfilPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const { datos: pedidos, error, cargando, recargar } = useCarga(
    () => pedidosService.listar({ clienteId: user!.id }),
    [user?.id],
  );
  if (!user) return null;
  const recientes = (pedidos ?? []).slice(0, 3);

  async function salir() {
    await signOut();
    router.push('/catalogo');
    router.refresh();
  }

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-secondary/20 min-h-screen">
      <main className="w-full max-w-7xl mx-auto p-6 sm:p-8 lg:p-16 pt-28 lg:pt-28">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-headline text-display-lg text-primary tracking-tight -ml-1">Mi Perfil</h1>
            <p className="font-body text-on-surface-variant text-lg mt-2">Bienvenido de vuelta, {user.nombre.split(' ')[0]}.</p>
          </div>
          <Link
            href="/perfil/editar"
            className="px-6 py-2 border border-outline-variant/30 text-on-surface rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">edit</span> Editar Perfil
          </Link>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className={`${tarjeta} col-span-1 p-8 flex flex-col items-center text-center`}>
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-surface-container border-2 border-surface-container-low flex items-center justify-center bg-surface-container-low">
              <BrandLogo size="lg" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-primary mb-1">{user.nombre}</h2>
            <p className="text-on-surface-variant font-medium mb-6 break-all">{user.email}</p>
            <div className="w-full border-t border-surface-variant my-4"></div>
            <div className="w-full flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Tipo de cuenta</span>
              <span className="font-medium text-primary">{user.rol === 'admin' ? 'Administrador' : 'Cliente'}</span>
            </div>
            <div className="w-full flex justify-between items-center text-sm mt-3">
              <span className="text-on-surface-variant">Pedidos</span>
              <span className="font-bold text-secondary">{pedidos ? pedidos.length : '…'}</span>
            </div>
          </section>
          <section className={`${tarjeta} col-span-1 lg:col-span-2 p-8`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline text-2xl font-bold text-primary">Pedidos Recientes</h2>
              <Link className="text-secondary hover:text-secondary-container text-sm font-medium transition-colors flex items-center gap-1" href="/mis-pedidos">
                Ver todos <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {cargando ? (
              <Skeleton filas={3} />
            ) : error ? (
              <EstadoError mensaje={error} onReintentar={recargar} />
            ) : recientes.length === 0 ? (
              <EstadoVacio titulo="Aún no tienes pedidos" icono="shopping_bag">
                <Link href="/catalogo" className="text-secondary font-semibold hover:underline">
                  Explora el catálogo
                </Link>
              </EstadoVacio>
            ) : (
              <div className="flex flex-col gap-4">
                {recientes.map((pedido) => {
                  const principal = pedido.lineas[0];
                  return (
                    <Link
                      key={pedido.id}
                      href={`/mis-pedidos/${pedido.id}`}
                      className="bg-surface-container-low p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-surface-container transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-highest shrink-0">
                          <ItemImage src={principal?.imagen} alt={principal?.nombre ?? pedido.id} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                            {principal?.nombre}
                            {pedido.lineas.length > 1 && ` y ${pedido.lineas.length - 1} más`}
                          </p>
                          <p className="text-sm text-on-surface-variant">
                            Pedido #{pedido.id} • {formatFechaHora(pedido.fecha)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                        <EstadoBadge estado={pedido.estado} />
                        <span className="font-bold text-primary">{formatEUR(totales(pedido.lineas).total)}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <section className="bg-surface-container p-8 rounded-xl shadow-xs border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h2 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">location_on</span> Dirección de entrega
                </h2>
                <Link aria-label="Editar dirección" href="/perfil/editar" className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </Link>
              </div>
              <div className="relative z-10 text-on-surface-variant leading-relaxed">
                <p className="font-medium text-primary mb-1">{user.nombre}</p>
                <p>{user.direccion ?? 'Sin dirección guardada'}</p>
                <p className="mt-4 text-sm">
                  <span className="font-medium">Tel:</span> {user.telefono ?? 'Sin teléfono guardado'}
                </p>
              </div>
            </section>
            <section className="bg-surface-container-low p-8 rounded-xl shadow-xs flex flex-col justify-between gap-6">
              <div>
                <h2 className="font-headline text-xl font-bold text-primary flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary">shield_person</span> Sesión
                </h2>
                <p className="text-sm text-on-surface-variant">Has iniciado sesión como {user.email}.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {user.rol === 'admin' && (
                  <Link href="/admin" prefetch={false} className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-label font-semibold hover:bg-primary-container transition-colors">
                    Ir al panel admin
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => void salir()}
                  className="px-5 py-2.5 rounded-lg bg-surface-container-high text-primary text-sm font-label font-semibold hover:bg-surface-container-highest transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">logout</span> Cerrar sesión
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
