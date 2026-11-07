// Basado en docs/diseno-stitch/pantallas/cat_logo_de_productos_tienda_online (generado y luego
// hecho interactivo: filtro por categoría, búsqueda, orden y "añadir al carrito")
'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CATEGORY_LABELS, PRODUCTS } from '@/data/products';
import { useCart } from '@/features/cart/CartProvider';
import { formatEUR } from '@/lib/format';
import type { Product, ProductCategory } from '@/types';

type StoreCategory = Exclude<ProductCategory, 'platos'>;
type Sort = 'relevancia' | 'precio-asc' | 'precio-desc' | 'vendidos';

const CATALOGO = PRODUCTS.filter((p) => p.catalogo);

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

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
  const [category, setCategory] = useState<StoreCategory | null>(null);
  const [sort, setSort] = useState<Sort>('relevancia');

  const products = useMemo(() => {
    const q = normalize(query.trim());
    const list = CATALOGO.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q || normalize(`${p.name} ${p.description}`).includes(q))
    );
    if (sort === 'precio-asc') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'precio-desc') return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, category, sort]);

  const [featured, ...rest] = products;

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="pt-24 pb-32 md:pb-24 max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-12 text-center md:text-left mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">
            Nuestra Despensa
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl">
            Lleva a tu hogar los sabores auténticos de Colombia. Horneados frescos, cafés de origen y las delicias que te
            conectan con tus raíces.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 bg-surface-container-lowest p-6 rounded-lg shadow-[0_-4px_40px_-10px_rgba(28,28,25,0.05)] md:shadow-none md:bg-transparent md:p-0">
              <div className="mb-8 relative">
                <input
                  className="form-input w-full bg-surface-container border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-3 rounded-t-lg font-body text-on-surface placeholder:text-on-surface-variant transition-all outline-hidden"
                  placeholder="Buscar productos..."
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="material-symbols-outlined absolute right-3 top-3 text-outline">search</span>
              </div>
              <div className="mb-8">
                <h3 className="font-headline text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">
                  Categorías
                </h3>
                <ul className="space-y-3">
                  {(Object.keys(CATEGORY_LABELS) as StoreCategory[]).map((key) => {
                    const active = category === key;
                    return (
                      <li key={key}>
                        <button
                          type="button"
                          aria-pressed={active}
                          className={categoryClass(active)}
                          onClick={() => setCategory(active ? null : key)}
                        >
                          <span>{CATEGORY_LABELS[key]}</span>
                          <span className={countClass(active)}>
                            {CATALOGO.filter((p) => p.category === key).length}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">
                  Ordenar por
                </h3>
                <select
                  className="form-select w-full bg-surface border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-2 font-body text-on-surface outline-hidden cursor-pointer"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="precio-asc">Precio: Menor a Mayor</option>
                  <option value="precio-desc">Precio: Mayor a Menor</option>
                  <option value="vendidos">Más Vendidos</option>
                </select>
              </div>
            </div>
          </aside>
          <div className="flex-grow">
            {products.length === 0 ? (
              <p className="font-body text-on-surface-variant">No encontramos productos con esa búsqueda.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featured && <FeaturedCard product={featured} onAdd={() => addItem(featured)} />}
                {rest.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={() => addItem(product)} />
                ))}
              </div>
            )}
            <div className="mt-12 flex justify-center">
              <button className="bg-transparent border border-outline-variant/30 text-primary font-body font-medium px-8 py-3 rounded-lg hover:bg-surface-container transition-colors duration-300">
                Cargar más productos
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Tarjeta grande (primer producto de la lista)
function FeaturedCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <article className="col-span-1 sm:col-span-2 lg:col-span-2 group flex flex-col sm:flex-row bg-surface-container-lowest rounded-lg overflow-hidden relative">
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            {product.badge}
          </span>
        </div>
      )}
      <div className="sm:w-1/2 bg-surface-container-low h-64 sm:h-auto overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
      </div>
      <div className="sm:w-1/2 p-6 flex flex-col justify-center bg-surface">
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          <Link href="/productos">{product.name}</Link>
        </h2>
        <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-3">{product.description}</p>
        <div className="flex items-end justify-between mt-auto">
          <span className="font-body text-xl font-semibold text-primary">
            {formatEUR(product.price)}{' '}
            {product.unit && <span className="text-xs text-on-surface-variant font-normal">{product.unit}</span>}
          </span>
          <button
            aria-label={`Añadir ${product.name} al carrito`}
            className="bg-primary text-on-primary rounded-lg p-3 hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 shadow-xs flex items-center justify-center"
            onClick={onAdd}
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <article className="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden">
      <div className="bg-surface-container-low h-56 overflow-hidden relative">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-secondary text-on-secondary text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          </div>
        )}
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
      </div>
      <div className="p-5 flex flex-col flex-grow bg-surface">
        <h3 className="font-display text-xl font-bold text-primary mb-1">
          <Link href="/productos">{product.name}</Link>
        </h3>
        <p className="font-body text-on-surface-variant text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-body text-lg font-semibold text-primary">{formatEUR(product.price)}</span>
          <button
            aria-label={`Añadir ${product.name} al carrito`}
            className="bg-primary text-on-primary rounded-lg p-2 hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
            onClick={onAdd}
          >
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
    </article>
  );
}
