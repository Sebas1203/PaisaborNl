// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_paisabor
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { CATALOGO, CATEGORIAS_PRODUCTO, type ItemCatalogo, type Plato, type Producto } from '@/data';
import { PEDIDOS, STOCK, totales } from '@/data/mock';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';

// MOCK: ventas calculadas con los pedidos de ejemplo
const VENTAS_DEMO = PEDIDOS.filter((p) => p.estado !== "cancelado").reduce((acc, p) => acc + totales(p.lineas).total, 0);
const categoriaDe = (item: ItemCatalogo) =>
  item.tipo === "producto" ? CATEGORIAS_PRODUCTO.find((c) => c.id === (item as Producto).categoria)?.nombre : (item as Plato).bajoReserva ? "Especial" : "Plato";

export default function AdminProductosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n.soil-shadow { box-shadow: -10px 0 40px rgba(28,28,25,0.05); }\n.card-ambient-shadow { box-shadow: 0 4px 40px rgba(28,28,25,0.05); }\n}" }} />
    <div className="h-full flex font-body text-on-surface">
      <main className="flex-1 bg-background min-h-screen pt-16">
        <header className="md:hidden flex items-center justify-between p-4 bg-surface-container-low border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest">
              <span className="material-symbols-outlined w-full h-full flex items-center justify-center text-on-surface-variant">person</span>
            </div>
            <h1 className="font-headline font-bold text-lg text-primary">
              Productos
            </h1>
          </div>
          <button className="text-on-surface-variant">
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </header>
        <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-display-sm tracking-tight text-primary leading-none mb-2">Catálogo de Productos</h1>
              <p className="text-on-surface-variant font-body text-lg max-w-xl">Menú y productos de Paisabor. Vista de solo lectura (sin backend).</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-4 pr-8 card-ambient-shadow">
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Ventas (demo)</p>
                <p className="font-headline text-2xl font-bold text-primary">{formatEUR(VENTAS_DEMO)}</p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 pr-8 card-ambient-shadow">
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Ítems activos</p>
                <p className="font-headline text-2xl font-bold text-primary">{CATALOGO.filter((i) => i.disponible).length}</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface-container-lowest p-2 rounded-xl card-ambient-shadow">
            <div className="relative w-full sm:w-96 flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
                search
              </span>
              {' '}
              <input className="form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 pl-12 pr-4 py-3 font-body text-on-surface transition-colors placeholder:text-on-surface-variant/50" placeholder="Buscar productos..." type="text" />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
                {' '}Filtros
              </button>
              {' '}
              <Go href="/admin/productos/nuevo" className="md:hidden flex-1 bg-primary text-on-primary rounded-lg py-2 px-4 font-medium transition-all hover:bg-primary-container">
                Nuevo
              </Go>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOGO.map((item) => (
              <article key={item.id} className="bg-surface-container-low rounded-xl overflow-hidden group">
                <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                  <ItemImage src={item.imagen} alt={item.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {categoriaDe(item)}
                  </div>
                </div>
                <div className="bg-surface p-6 flex flex-col justify-between h-48">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h3 className="font-headline font-bold text-xl text-primary">{item.nombre}</h3>
                    <span className="font-body font-medium text-secondary whitespace-nowrap">{formatEUR(item.precio)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/20">
                    <span className="text-xs text-on-surface-variant">
                      {item.disponible ? "Disponible" : "No disponible"}
                      {STOCK[item.id] !== undefined && " · Stock: " + STOCK[item.id]}
                    </span>
                    <span className="text-xs text-on-surface-variant">{IVA_INCLUIDO}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
    </>
  );
}
