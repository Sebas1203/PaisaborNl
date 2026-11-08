// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/perfil_de_usuario_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { lineasConItem, PEDIDOS, totales } from '@/data/mock';
import { formatEUR, formatFecha, ORDER_STATUS_LABELS } from '@/lib/format';

// MOCK: pedidos de ejemplo del cliente
const PEDIDOS_RECIENTES = PEDIDOS.filter((p) => p.cliente === 'Cliente de ejemplo 1').slice(0, 2);

export default function CuentaPage() {
  return (
    <>
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-secondary/20 min-h-screen flex">
      <main className="w-full p-8 lg:p-16 pt-28 lg:pt-28">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-display-lg text-primary tracking-tight -ml-1">
              Mi Perfil
            </h2>
            <p className="font-body text-on-surface-variant text-lg mt-2">
              Bienvenido de vuelta.
            </p>
          </div>
          <Go href="/cuenta/editar" className="px-6 py-2 border border-outline-variant/30 text-on-surface rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              edit
            </span>
            {' '}Editar Perfil
          </Go>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-surface-container-lowest p-8 rounded-xl shadow-[-10px_0_40px_rgba(28,28,25,0.05)] flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-surface-container border-2 border-surface-container-low relative group">
              <img alt="Paisabor" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" src="/images/logo/paisabor-logo-192.png" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-on-primary">
                  photo_camera
                </span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-1">
              Tu nombre
            </h3>
            <p className="text-on-surface-variant font-medium mb-6">
              tu@correo.com
            </p>
            <div className="w-full border-t border-surface-variant my-4"></div>
            <div className="w-full flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">
                Miembro desde
              </span>
              {' '}
              <span className="font-medium text-primary">
                Marzo 2023
              </span>
            </div>
            <div className="w-full flex justify-between items-center text-sm mt-3">
              <span className="text-on-surface-variant">
                Puntos Sabor
              </span>
              {' '}
              <span className="font-bold text-secondary">
                1,450
              </span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-[-10px_0_40px_rgba(28,28,25,0.05)] p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-2xl font-bold text-primary">
                Pedidos Recientes
              </h3>
              <Link className="text-secondary hover:text-secondary-container text-sm font-medium transition-colors flex items-center gap-1" href="/cuenta/pedidos">
                Ver todos{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {PEDIDOS_RECIENTES.map((pedido) => {
                const lineas = lineasConItem(pedido.lineas);
                const principal = lineas[0]?.item;
                return (
                  <Link key={pedido.id} href={`/cuenta/pedidos/${pedido.id}`} className="bg-surface-container-low p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-surface-container transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-highest shrink-0">
                        <ItemImage src={principal?.imagen} alt={principal?.nombre ?? pedido.id} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                          {principal?.nombre}
                          {lineas.length > 1 && ` y ${lineas.length - 1} más`}
                        </p>
                        <p className="text-sm text-on-surface-variant">
                          Pedido #{pedido.id} • {formatFecha(pedido.fecha)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0">
                      <span className="font-medium text-primary bg-tertiary-fixed/40 px-3 py-1 rounded-full text-xs text-on-tertiary-fixed mb-0 sm:mb-2 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span> {ORDER_STATUS_LABELS[pedido.estado]}
                      </span>
                      <span className="font-bold text-primary">{formatEUR(totales(pedido.lineas).total)}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="bg-surface-container p-8 rounded-xl shadow-xs border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                  {' '}Dirección Principal
                </h4>
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                </button>
              </div>
              <div className="relative z-10 text-on-surface-variant leading-relaxed">
                <p className="font-medium text-primary mb-1">
                  Cliente de ejemplo
                </p>
                <p>
                  Sin dirección guardada
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-medium">
                    Tel:
                  </span>
                  {' '}Sin teléfono guardado
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-xs">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    tune
                  </span>
                  {' '}Preferencias
                </h4>
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-wider">
                    Perfil de Sabor (Café)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full text-sm font-medium">
                      Afrutado
                    </span>
                    {' '}
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1.5 rounded-full text-sm">
                      Cuerpo Medio
                    </span>
                    {' '}
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1.5 rounded-full text-sm">
                      Acidez Baja
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-wider">
                    Restricciones Dietéticas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full text-sm font-medium">
                      Sin Gluten
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
