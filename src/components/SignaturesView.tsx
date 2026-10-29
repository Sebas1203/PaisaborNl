import React, { useState } from 'react';
import { ShoppingBag, Plus, Check, Bike, Store } from 'lucide-react';
import { MenuItem, Product } from '../types';

interface SignaturesViewProps {
  menuItems: MenuItem[];
  onAddToCart: (product: Product) => void;
}

export const SignaturesView: React.FC<SignaturesViewProps> = ({ menuItems, onAddToCart }) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeout'>('delivery');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: 'despensa',
      image: item.image,
    });
    setAddedItem(item.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 1200);
  };

  const bandejaPaisa = menuItems.find((i) => i.name.includes('Bandeja')) || menuItems[0];
  const lechona = menuItems.find((i) => i.name.includes('Lechona')) || menuItems[1];
  const ajiaco = menuItems.find((i) => i.name.includes('Ajiaco')) || menuItems[2];
  const tamal = menuItems.find((i) => i.name.includes('Tamal')) || menuItems[3];

  return (
    <div className="pb-16">
      {/* Editorial Hero Banner */}
      <section className="relative bg-[#33210d] text-[#fcf9f4] overflow-hidden">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
            alt="Colombian feast background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#33210d] via-[#33210d]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-28">
          <span className="font-['Work_Sans'] text-xs uppercase tracking-widest text-[#ff956a] font-bold block mb-3">
            Platos Típicos
          </span>
          <h1 className="font-['Epilogue'] font-black text-4xl sm:text-6xl lg:text-7xl text-[#fcf9f4] tracking-tight leading-[1.05] max-w-2xl mb-6">
            The Heart of Colombia.
          </h1>
          <p className="font-['Work_Sans'] text-lg sm:text-xl text-[#e5e2dd] max-w-xl leading-relaxed">
            Heavy, hearty, and handcrafted. Our signature dishes are slow-cooked using traditional methods, bringing the warmth of a Paisa kitchen straight to your table.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 md:pt-16">
        {/* Section Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#e5e2dd]">
          <h2 className="font-['Epilogue'] font-black text-3xl md:text-4xl text-[#33210d] tracking-tight">
            Our Signatures
          </h2>

          {/* Delivery / Takeout Selector */}
          <div className="inline-flex bg-[#f0ede8] p-1 rounded-xl">
            <button
              id="btn-delivery-toggle"
              onClick={() => setOrderType('delivery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                orderType === 'delivery'
                  ? 'bg-[#33210d] text-white shadow-xs'
                  : 'text-[#4e453d] hover:text-[#33210d]'
              }`}
            >
              <Bike className="w-4 h-4" />
              Delivery
            </button>
            <button
              id="btn-takeout-toggle"
              onClick={() => setOrderType('takeout')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                orderType === 'takeout'
                  ? 'bg-[#33210d] text-white shadow-xs'
                  : 'text-[#4e453d] hover:text-[#33210d]'
              }`}
            >
              <Store className="w-4 h-4" />
              Takeout
            </button>
          </div>
        </div>

        {/* Editorial Layout: Staggered Bento for Signature Dishes */}
        <div className="space-y-16">
          {/* Pair 1: Bandeja Paisa & Lechona Tolimense */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Bandeja Paisa (Hero Card) */}
            {bandejaPaisa && (
              <article
                id="dish-bandeja-paisa"
                className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 h-72 md:h-auto min-h-[320px] bg-[#ebe8e3] relative">
                  <img
                    src={bandejaPaisa.image}
                    alt={bandejaPaisa.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-['Epilogue'] font-black text-2xl md:text-3xl text-[#33210d]">
                        {bandejaPaisa.name}
                      </h3>
                      <span className="font-['Epilogue'] font-bold text-xl text-[#994621]">
                        €{bandejaPaisa.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="font-['Work_Sans'] text-sm text-[#4e453d] leading-relaxed mb-6">
                      {bandejaPaisa.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {bandejaPaisa.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#f0ede8] text-[#33210d] text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    id="btn-add-bandeja"
                    onClick={() => handleAdd(bandejaPaisa)}
                    className={`w-full py-3.5 px-6 rounded-xl font-['Work_Sans'] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      addedItem === bandejaPaisa.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#33210d] hover:bg-[#4b3621] text-white'
                    }`}
                  >
                    {addedItem === bandejaPaisa.id ? (
                      <>
                        <Check className="w-4 h-4" /> Añadido
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Añadir al Carrito
                      </>
                    )}
                  </button>
                </div>
              </article>
            )}

            {/* Lechona Tolimense */}
            {lechona && (
              <article
                id="dish-lechona-tolimense"
                className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-60 bg-[#ebe8e3] overflow-hidden">
                  <img
                    src={lechona.image}
                    alt={lechona.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-['Epilogue'] font-black text-2xl text-[#33210d]">
                        {lechona.name}
                      </h3>
                      <span className="font-['Epilogue'] font-bold text-lg text-[#994621]">
                        €{lechona.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-['Work_Sans'] text-sm text-[#4e453d] leading-relaxed mb-6">
                      {lechona.description}
                    </p>
                  </div>

                  <button
                    id="btn-add-lechona"
                    onClick={() => handleAdd(lechona)}
                    className={`w-full py-3.5 px-6 rounded-xl font-['Work_Sans'] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      addedItem === lechona.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#ff956a] hover:bg-[#994621] text-[#370e00] hover:text-white'
                    }`}
                  >
                    {addedItem === lechona.id ? (
                      <>
                        <Check className="w-4 h-4" /> Añadido
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> Añadir
                      </>
                    )}
                  </button>
                </div>
              </article>
            )}
          </div>

          {/* Pair 2: Ajiaco Santafereño & Tamal Tolimense */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Ajiaco Santafereño */}
            {ajiaco && (
              <article
                id="dish-ajiaco"
                className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-60 bg-[#ebe8e3] overflow-hidden">
                  <img
                    src={ajiaco.image}
                    alt={ajiaco.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-['Epilogue'] font-black text-2xl text-[#33210d]">
                        {ajiaco.name}
                      </h3>
                      <span className="font-['Epilogue'] font-bold text-lg text-[#994621]">
                        €{ajiaco.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-['Work_Sans'] text-sm text-[#4e453d] leading-relaxed mb-6">
                      {ajiaco.description}
                    </p>
                  </div>

                  <button
                    id="btn-add-ajiaco"
                    onClick={() => handleAdd(ajiaco)}
                    className={`w-full py-3.5 px-6 rounded-xl font-['Work_Sans'] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      addedItem === ajiaco.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#ff956a] hover:bg-[#994621] text-[#370e00] hover:text-white'
                    }`}
                  >
                    {addedItem === ajiaco.id ? (
                      <>
                        <Check className="w-4 h-4" /> Añadido
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> Añadir
                      </>
                    )}
                  </button>
                </div>
              </article>
            )}

            {/* Tamal Tolimense */}
            {tamal && (
              <article
                id="dish-tamal-tolimense"
                className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-['Epilogue'] font-black text-2xl md:text-3xl text-[#33210d]">
                        {tamal.name}
                      </h3>
                      <span className="font-['Epilogue'] font-bold text-xl text-[#994621]">
                        €{tamal.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-['Work_Sans'] text-sm text-[#4e453d] leading-relaxed mb-6">
                      {tamal.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tamal.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#f0ede8] text-[#33210d] text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    id="btn-add-tamal"
                    onClick={() => handleAdd(tamal)}
                    className={`w-full py-3.5 px-6 rounded-xl font-['Work_Sans'] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      addedItem === tamal.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#33210d] hover:bg-[#4b3621] text-white'
                    }`}
                  >
                    {addedItem === tamal.id ? (
                      <>
                        <Check className="w-4 h-4" /> Añadido
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Añadir al Carrito
                      </>
                    )}
                  </button>
                </div>
                <div className="md:w-1/2 h-72 md:h-auto min-h-[320px] bg-[#ebe8e3] order-1 md:order-2">
                  <img
                    src={tamal.image}
                    alt={tamal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
