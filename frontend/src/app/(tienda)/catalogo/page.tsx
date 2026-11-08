// Basado en docs/diseno-stitch/pantallas/cat_logo_de_productos_tienda_online, con el catálogo real
// (src/data): menú (platos y especiales) y productos, con filtros, búsqueda y orden.
'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ItemImage } from '@/components/ItemImage';
import { CATEGORIAS_PRODUCTO, ESPECIALES, PLATOS, PRODUCTOS, type ItemCatalogo, type Plato } from '@/data';
import { useCart } from '@/features/cart/CartProvider';
import { formatDias, formatEUR, IVA_INCLUIDO } from '@/lib/format';

type Filtro = 'platos' | 'especiales' | (typeof CATEGORIAS_PRODUCTO)[number]['id'];
type Sort = 'relevancia' | 'precio-asc' | 'precio-desc';

const FILTROS: { id: Filtro; nombre: string; items: ItemCatalogo[] }[] = [
  { id: 'platos', nombre: 'Platos típicos', items: PLATOS },
  { id: 'especiales', nombre: 'Especiales de fin de semana', items: ESPECIALES },
  ...CATEGORIAS_PRODUCTO.map((c) => ({ id: c.id, nombre: c.nombre, items: PRODUCTOS.filter((p) => p.categoria === c.id) })),
];

const TODOS = FILTROS.flatMap((f) => f.items).filter((i) => i.disponible);

const normalize = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const esEspecial = (item: ItemCatalogo): item is Plato => Boolean((item as Plato).bajoReserva);
// En los productos el enlace lleva a su categoría; en el menú, a los platos típicos
const enlaceItem = (item: ItemCatalogo) => (item.tipo === 'producto' ? '/catalogo/productos' : '/catalogo/platos-tipicos');

const categoryClass = (active: boolean) =>
  active
    ? 'flex w-full items-center justify-between text-secondary font-medium group'
    : 'flex w-full items-center justify-between text-on-surface-variant hover:text-primary transition-colors group';

const countClass = (active: boolean) =>
  active
    ? 'bg-secondary/10 text-secondary px-2 py-0.5 rounded-sm text-xs'
    : 'bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-sm text-xs group-hover:bg-primary-container/10';

export default function CatalogoPage() {
  const { addItem } = useCart();
  const [query, setQuery] = useState('');
  const [filtro, setFiltro] = useState<Filtro | null>(null);
  const [sort, setSort] = useState<Sort>('relevancia');

  const items = useMemo(() => {
    const q = normalize(query.trim());
    const base = filtro ? (FILTROS.find((f) => f.id === filtro)?.items ?? []) : TODOS;
    const list = base.filter((i) => i.disponible && (!q || normalize(`${i.nombre} ${i.descripcion ?? ''}`).includes(q)));
    if (sort === 'precio-asc') return [...list].sort((a, b) => a.precio - b.precio);
    if (sort === 'precio-desc') return [...list].sort((a, b) => b.precio - a.precio);
    return list;
  }, [query, filtro, sort]);

  const [featured, ...rest] = items;

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="pt-24 pb-32 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-12 text-center md:text-left mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">Nuestro Catálogo</h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl">
            Comida colombiana en Ámsterdam: platos típicos, especiales de fin de semana, fritos, empanadas y bebidas.
          </p>
          <p className="mt-2 font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant">
            Precios en euros · {IVA_INCLUIDO}
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 bg-surface-container-lowest p-6 rounded-lg shadow-[0_-4px_40px_-10px_rgba(28,28,25,0.05)] md:shadow-none md:bg-transparent md:p-0">
              <div className="mb-8 relative">
                <input
                  className="form-input w-full bg-surface-container border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-3 rounded-t-lg font-body text-on-surface placeholder:text-on-surface-variant transition-all outline-hidden"
                  placeholder="Buscar en el catálogo..."
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="material-symbols-outlined absolute right-3 top-3 text-outline">search</span>
              </div>
              <div className="mb-8">
                <h3 className="font-headline text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">Categorías</h3>
                <ul className="space-y-3">
                  {FILTROS.map((f) => {
                    const active = filtro === f.id;
                    return (
                      <li key={f.id}>
                        <button
                          type="button"
                          aria-pressed={active}
                          className={categoryClass(active)}
                          onClick={() => setFiltro(active ? null : f.id)}
                        >
                          <span className="text-left">{f.nombre}</span>
                          <span className={countClass(active)}>{f.items.filter((i) => i.disponible).length}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">Ordenar por</h3>
                <select
                  className="form-select w-full bg-surface border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-2 font-body text-on-surface outline-hidden cursor-pointer"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="precio-asc">Precio: Menor a Mayor</option>
                  <option value="precio-desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </aside>
          <div className="flex-grow">
            {items.length === 0 ? (
              <p className="font-body text-on-surface-variant">No encontramos nada con esa búsqueda.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featured && <FeaturedCard item={featured} onAdd={() => addItem(featured.id)} />}
                {rest.map((item) => (
                  <ItemCard key={item.id} item={item} onAdd={() => addItem(item.id)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function Precio({ item, className }: { item: ItemCatalogo; className: string }) {
  return (
    <span className={className}>
      {formatEUR(item.precio)}
      {/* precio provisional: precioEstimado viene del catálogo */}
      {item.precioEstimado && (
        <span className="ml-2 text-xs font-normal text-on-surface-variant">Precio estimado</span>
      )}
    </span>
  );
}

function EtiquetaEspecial({ item }: { item: Plato }) {
  return (
    <div className="mb-3 flex flex-wrap gap-2 text-xs">
      <span className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-3 py-1 rounded-full">
        Solo fines de semana · bajo reserva
      </span>
      <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full">{formatDias(item.dias)}</span>
    </div>
  );
}

function Accion({ item, onAdd, large }: { item: ItemCatalogo; onAdd: () => void; large?: boolean }) {
  if (esEspecial(item)) {
    return (
      <Link
        className="bg-primary text-on-primary rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-container transition-colors"
        href="/menus"
      >
        Reservar
      </Link>
    );
  }
  return (
    <button
      aria-label={`Añadir ${item.nombre} al carrito`}
      className={`bg-primary text-on-primary rounded-lg ${large ? 'p-3 shadow-xs' : 'p-2'} hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center`}
      onClick={onAdd}
    >
      <span className={`material-symbols-outlined ${large ? '' : 'text-sm'}`}>{large ? 'add_shopping_cart' : 'add'}</span>
    </button>
  );
}

// Tarjeta grande (primer ítem de la lista)
function FeaturedCard({ item, onAdd }: { item: ItemCatalogo; onAdd: () => void }) {
  return (
    <article className="col-span-1 sm:col-span-2 lg:col-span-2 group flex flex-col sm:flex-row bg-surface-container-lowest rounded-lg overflow-hidden relative">
      <div className="sm:w-1/2 bg-surface-container-low h-64 sm:h-auto overflow-hidden">
        <ItemImage
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="sm:w-1/2 p-6 flex flex-col justify-center bg-surface">
        {esEspecial(item) && <EtiquetaEspecial item={item} />}
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          <Link href={enlaceItem(item)}>{item.nombre}</Link>
        </h2>
        {item.descripcion && <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-3">{item.descripcion}</p>}
        <div className="flex items-end justify-between mt-auto pt-4">
          <Precio item={item} className="font-body text-xl font-semibold text-primary" />
          <Accion item={item} onAdd={onAdd} large />
        </div>
      </div>
    </article>
  );
}

function ItemCard({ item, onAdd }: { item: ItemCatalogo; onAdd: () => void }) {
  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden">
      <div className="bg-surface-container-low h-56 overflow-hidden relative">
        <ItemImage
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow bg-surface">
        {esEspecial(item) && <EtiquetaEspecial item={item} />}
        <h3 className="font-display text-xl font-bold text-primary mb-1">
          <Link href={enlaceItem(item)}>{item.nombre}</Link>
        </h3>
        {item.descripcion && (
          <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">{item.descripcion}</p>
        )}
        <div className="flex items-center justify-between mt-auto pt-4">
          <Precio item={item} className="font-body text-lg font-semibold text-primary" />
          <Accion item={item} onAdd={onAdd} />
        </div>
      </div>
    </article>
  );
}
