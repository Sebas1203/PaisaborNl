// Basado en docs/diseno-stitch/pantallas/men_de_productos_completo, con los productos reales
// (src/data): una sección por categoría y filtros por categoría.
'use client';

import { useState } from 'react';
import { ItemImage } from '@/components/ItemImage';
import { CATEGORIAS_PRODUCTO, productosPorCategoria, type CategoriaProductoId, type Producto } from '@/data';
import { AddToCartButton } from '@/features/cart/AddToCartButton';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';

const pillClass = (active: boolean) =>
  active
    ? 'px-4 py-2 rounded-full font-label text-sm bg-primary text-on-primary'
    : 'px-4 py-2 rounded-full font-label text-sm bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors';

export default function ProductosPage() {
  const [filtro, setFiltro] = useState<CategoriaProductoId | null>(null);
  const categorias = CATEGORIAS_PRODUCTO.filter((c) => !filtro || c.id === filtro);

  return (
    <div className="bg-background text-on-background font-body antialiased selection:bg-secondary selection:text-on-secondary min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <section className="mb-12 animate-fade-in-up">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-6">
              Sabor Auténtico. <br /> <span className="text-secondary">En tu mesa.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Fritos, empanadas y bebidas colombianas en Ámsterdam.
            </p>
            <p className="mt-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Precios en euros · {IVA_INCLUIDO}
            </p>
          </div>
        </section>
        <div className="mb-16 flex flex-wrap gap-3">
          <button type="button" aria-pressed={!filtro} className={pillClass(!filtro)} onClick={() => setFiltro(null)}>
            Todos
          </button>
          {CATEGORIAS_PRODUCTO.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={filtro === c.id}
              className={pillClass(filtro === c.id)}
              onClick={() => setFiltro(filtro === c.id ? null : c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>
        {categorias.map((categoria) => (
          <section key={categoria.id} className="mb-24">
            <div className="flex items-center justify-between mb-10 border-b border-surface-dim pb-4">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary tracking-tight">{categoria.nombre}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productosPorCategoria(categoria.id)
                .filter((p) => p.disponible)
                .map((producto) => (
                  <ProductoCard key={producto.id} producto={producto} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <article
      className="group bg-surface rounded-lg overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2"
      style={{ boxShadow: '0 10px 40px -10px rgba(28, 28, 25, 0.05)' }}
    >
      <div className="relative bg-surface-container-low aspect-[4/3] overflow-hidden">
        <ItemImage
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-surface">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline font-bold text-xl text-primary">{producto.nombre}</h3>
          <span className="font-headline font-bold text-lg text-secondary">
            {formatEUR(producto.precio)}
            {/* precio provisional si precioEstimado */}
            {producto.precioEstimado && <span className="block text-xs font-normal">Precio estimado</span>}
          </span>
        </div>
        {producto.descripcion && (
          <p className="font-body text-sm text-on-surface-variant mb-6 flex-grow">{producto.descripcion}</p>
        )}
        <AddToCartButton
          itemId={producto.id}
          className="mt-auto w-full bg-primary text-on-primary font-label font-medium rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-300 shadow-[0_4px_14px_0_rgba(51,33,13,0.15)] group/btn"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/btn:scale-110">
            add_shopping_cart
          </span>{' '}
          Añadir al Carrito
        </AddToCartButton>
      </div>
    </article>
  );
}
