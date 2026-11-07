'use client';

import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Check } from 'lucide-react';
import { Product, ProductCategory } from '@/types';

interface DespensaViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const DespensaView: React.FC<DespensaViewProps> = ({ products, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');
  const [sortBy, setSortBy] = useState<'relevancia' | 'precio-asc' | 'precio-desc' | 'nombre'>('relevancia');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      todos: products.length,
      panaderia: products.filter(p => p.category === 'panaderia').length,
      cafe: products.filter(p => p.category === 'cafe').length,
      dulces: products.filter(p => p.category === 'dulces').length,
      congelados: products.filter(p => p.category === 'congelados').length,
    };
  }, [products]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.origin && p.origin.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCat = selectedCategory === 'todos' || p.category === selectedCategory;
      return matchesSearch && matchesCat;
    });

    if (sortBy === 'precio-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'precio-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'nombre') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [products, searchTerm, selectedCategory, sortBy]);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      {/* Header Section */}
      <div className="mb-10 md:mb-14">
        <h1 className="font-['Epilogue'] font-black text-4xl sm:text-5xl lg:text-6xl text-[#33210d] tracking-tight mb-4">
          Nuestra Despensa
        </h1>
        <p className="font-['Work_Sans'] text-lg md:text-xl text-[#4e453d] max-w-2xl leading-relaxed">
          Lleva a tu hogar los sabores auténticos de Colombia. Horneados frescos, cafés de origen y las delicias que te conectan con tus raíces.
        </p>
      </div>

      {/* Main Grid: Sidebar + Product Catalog */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Sidebar: Filters */}
        <aside className="lg:col-span-3 space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              id="input-search-despensa"
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#f0ede8] rounded-xl px-4 py-3.5 pr-10 text-sm font-['Work_Sans'] text-[#33210d] placeholder-[#80756c] border-0 focus:ring-2 focus:ring-[#994621] transition-all"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#80756c] pointer-events-none" />
          </div>

          {/* Categories List */}
          <div>
            <h2 className="font-['Work_Sans'] text-xs font-bold text-[#33210d] uppercase tracking-widest mb-4">
              Categorías
            </h2>
            <ul className="space-y-1">
              <li>
                <button
                  id="cat-btn-todos"
                  onClick={() => setSelectedCategory('todos')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedCategory === 'todos'
                      ? 'bg-[#f0ede8] font-bold text-[#994621]'
                      : 'text-[#4e453d] hover:bg-[#f6f3ee]'
                  }`}
                >
                  <span>Todos los productos</span>
                  <span className="text-xs bg-[#e5e2dd] px-2 py-0.5 rounded-full text-[#33210d] font-medium">
                    {categoryCounts.todos}
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="cat-btn-panaderia"
                  onClick={() => setSelectedCategory('panaderia')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedCategory === 'panaderia'
                      ? 'bg-[#f0ede8] font-bold text-[#994621]'
                      : 'text-[#4e453d] hover:bg-[#f6f3ee]'
                  }`}
                >
                  <span>Panadería</span>
                  <span className="text-xs bg-[#e5e2dd] px-2 py-0.5 rounded-full text-[#33210d] font-medium">
                    {categoryCounts.panaderia}
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="cat-btn-cafe"
                  onClick={() => setSelectedCategory('cafe')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedCategory === 'cafe'
                      ? 'bg-[#f0ede8] font-bold text-[#994621]'
                      : 'text-[#4e453d] hover:bg-[#f6f3ee]'
                  }`}
                >
                  <span>Café</span>
                  <span className="text-xs bg-[#e5e2dd] px-2 py-0.5 rounded-full text-[#33210d] font-medium">
                    {categoryCounts.cafe}
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="cat-btn-dulces"
                  onClick={() => setSelectedCategory('dulces')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedCategory === 'dulces'
                      ? 'bg-[#f0ede8] font-bold text-[#994621]'
                      : 'text-[#4e453d] hover:bg-[#f6f3ee]'
                  }`}
                >
                  <span>Dulces & Postres</span>
                  <span className="text-xs bg-[#e5e2dd] px-2 py-0.5 rounded-full text-[#33210d] font-medium">
                    {categoryCounts.dulces}
                  </span>
                </button>
              </li>
              <li>
                <button
                  id="cat-btn-congelados"
                  onClick={() => setSelectedCategory('congelados')}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-all cursor-pointer ${
                    selectedCategory === 'congelados'
                      ? 'bg-[#f0ede8] font-bold text-[#994621]'
                      : 'text-[#4e453d] hover:bg-[#f6f3ee]'
                  }`}
                >
                  <span>Congelados</span>
                  <span className="text-xs bg-[#e5e2dd] px-2 py-0.5 rounded-full text-[#33210d] font-medium">
                    {categoryCounts.congelados}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sort By Dropdown */}
          <div>
            <h2 className="font-['Work_Sans'] text-xs font-bold text-[#33210d] uppercase tracking-widest mb-3">
              Ordenar Por
            </h2>
            <select
              id="select-sort-despensa"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-[#f0ede8] rounded-xl px-4 py-3 text-sm font-['Work_Sans'] text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621] cursor-pointer"
            >
              <option value="relevancia">Relevancia</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="nombre">Nombre Alfabético</option>
            </select>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#f6f3ee] rounded-2xl p-12 text-center">
              <p className="font-['Epilogue'] text-xl font-bold text-[#33210d] mb-2">
                No encontramos productos
              </p>
              <p className="text-[#4e453d] text-sm mb-4">
                Prueba buscando con otro término o seleccionando otra categoría.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('todos');
                }}
                className="px-6 py-2.5 bg-[#33210d] text-white rounded-lg text-sm font-medium hover:bg-[#4b3621] transition-colors"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => {
                const isFeaturedLarge = idx === 0 && selectedCategory === 'todos' && !searchTerm;
                const isAdded = addedAnimationId === product.id;

                return (
                  <article
                    key={product.id}
                    id={`product-card-${product.id}`}
                    className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                      isFeaturedLarge ? 'md:col-span-2 lg:col-span-2 md:flex-row' : ''
                    }`}
                  >
                    {/* Image Container with Badge */}
                    <div
                      className={`relative overflow-hidden bg-[#ebe8e3] ${
                        isFeaturedLarge ? 'md:w-1/2 h-72 md:h-auto min-h-[300px]' : 'h-60 w-full'
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span
                          className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
                            product.badge === 'Nuevo'
                              ? 'bg-white text-[#33210d]'
                              : product.badge === 'Favorito'
                              ? 'bg-[#994621] text-white'
                              : 'bg-[#ffdcbd] text-[#2c1600]'
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        {product.origin && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#994621] mb-1.5 block">
                            {product.origin}
                          </span>
                        )}
                        <h3 className="font-['Epilogue'] font-bold text-xl md:text-2xl text-[#33210d] mb-2 group-hover:text-[#994621] transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-['Work_Sans'] text-sm text-[#4e453d] line-clamp-3 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* Pricing & Add Button */}
                      <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#f0ede8]">
                        <div className="flex items-baseline gap-1">
                          <span className="font-['Epilogue'] font-black text-xl text-[#33210d]">
                            €{product.price.toFixed(2)}
                          </span>
                          {product.unit && (
                            <span className="text-xs text-[#80756c] font-medium">
                              {product.unit}
                            </span>
                          )}
                        </div>

                        <button
                          id={`btn-add-product-${product.id}`}
                          onClick={() => handleAdd(product)}
                          className={`p-3 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-sm ${
                            isAdded
                              ? 'bg-emerald-700 text-white scale-105'
                              : 'bg-[#33210d] text-white hover:bg-[#994621] active:scale-95'
                          }`}
                          aria-label={`Añadir ${product.name} al carrito`}
                        >
                          {isAdded ? (
                            <Check className="w-5 h-5" />
                          ) : isFeaturedLarge ? (
                            <ShoppingBag className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button
              id="btn-load-more"
              className="px-8 py-3.5 bg-[#f6f3ee] text-[#33210d] rounded-xl font-['Work_Sans'] font-medium text-sm hover:bg-[#ebe8e3] transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              Cargar más productos
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};
