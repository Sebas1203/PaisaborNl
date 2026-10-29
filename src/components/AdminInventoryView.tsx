import React, { useState, useMemo } from 'react';
import { Search, Filter, Edit2, Trash2, Plus, AlertCircle } from 'lucide-react';
import { InventoryProduct } from '../types';

interface AdminInventoryViewProps {
  inventory: InventoryProduct[];
  onOpenNewProductModal: () => void;
  onEditProduct: (product: InventoryProduct) => void;
  onDeleteProduct: (id: string) => void;
}

export const AdminInventoryView: React.FC<AdminInventoryViewProps> = ({
  inventory,
  onOpenNewProductModal,
  onEditProduct,
  onDeleteProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilterTag, setSelectedFilterTag] = useState<string>('todos');

  // Stats calculation
  const totalStock = useMemo(() => {
    return inventory.reduce((acc, item) => acc + item.stock, 0);
  }, [inventory]);

  const activeProductsCount = inventory.length;

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchTag =
        selectedFilterTag === 'todos' ||
        item.tag.toLowerCase() === selectedFilterTag.toLowerCase();

      return matchSearch && matchTag;
    });
  }, [inventory, searchTerm, selectedFilterTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      {/* Header & Stats Summary */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#994621] block mb-1">
            Portal Administrativo
          </span>
          <h1 className="font-['Epilogue'] font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#33210d] mb-2">
            Products Inventory
          </h1>
          <p className="text-[#4e453d] font-['Work_Sans'] text-base md:text-lg max-w-xl leading-relaxed">
            Gestión de Productos. Administra tus granos de café de origen, equipos de preparación y despensa artesanal.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-2xl p-5 pr-8 shadow-xs border border-[#f0ede8]">
            <p className="text-xs font-bold text-[#80756c] uppercase tracking-wider mb-1">
              Total Ventas
            </p>
            <p className="font-['Epilogue'] text-2xl md:text-3xl font-black text-[#33210d]">
              €4,250
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-2xl p-5 pr-8 shadow-xs border border-[#f0ede8]">
            <p className="text-xs font-bold text-[#80756c] uppercase tracking-wider mb-1">
              Productos Activos
            </p>
            <p className="font-['Epilogue'] text-2xl md:text-3xl font-black text-[#33210d]">
              {activeProductsCount}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Action Bar */}
      <section className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-3 md:p-4 rounded-2xl shadow-xs border border-[#f0ede8] mb-8">
        <div className="relative w-full sm:w-96 flex-1">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#80756c]" />
          <input
            id="input-search-inventory"
            type="text"
            placeholder="Buscar productos en inventario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#f6f3ee] border-0 rounded-xl pl-12 pr-4 py-3 font-['Work_Sans'] text-sm text-[#33210d] placeholder-[#80756c] focus:ring-2 focus:ring-[#994621]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="relative">
            <select
              value={selectedFilterTag}
              onChange={(e) => setSelectedFilterTag(e.target.value)}
              className="px-4 py-3 rounded-xl bg-[#f6f3ee] text-[#4e453d] font-['Work_Sans'] text-sm font-medium border-0 focus:ring-2 focus:ring-[#994621] cursor-pointer"
            >
              <option value="todos">Todos los Tags</option>
              <option value="GRANO ENTERO">Grano Entero</option>
              <option value="EQUIPO">Equipo</option>
              <option value="DESPENSA">Despensa</option>
            </select>
          </div>

          <button
            id="btn-inventory-new-product"
            onClick={onOpenNewProductModal}
            className="px-5 py-3 bg-[#33210d] hover:bg-[#4b3621] text-white rounded-xl font-['Work_Sans'] font-medium text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Nuevo Producto
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((item) => (
          <article
            key={item.id}
            id={`inv-card-${item.id}`}
            className="bg-white rounded-3xl overflow-hidden shadow-xs border border-[#f0ede8] group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Image and Tag Pill */}
              <div className="h-52 bg-[#ebe8e3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs ${
                    item.tag === 'GRANO ENTERO'
                      ? 'bg-[#ffdcbd] text-[#2c1600]'
                      : item.tag === 'EQUIPO'
                      ? 'bg-[#ff956a] text-[#762c08]'
                      : 'bg-[#fedcbe] text-[#59422c]'
                  }`}
                >
                  {item.tag}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-['Epilogue'] font-black text-xl text-[#33210d] group-hover:text-[#994621] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-['Epilogue'] font-bold text-lg text-[#994621]">
                    €{item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm font-['Work_Sans'] text-[#4e453d] line-clamp-2 leading-relaxed mb-2">
                  {item.description}
                </p>
                <span className="text-[11px] text-[#80756c] font-medium block">
                  Categoría: {item.category}
                </span>
              </div>
            </div>

            {/* Card Footer: Stock Status and Actions */}
            <div className="px-6 py-4 border-t border-[#f0ede8] bg-[#fcf9f4] flex justify-between items-center">
              <div>
                {item.lowStock || item.stock <= 5 ? (
                  <span className="text-xs text-[#ba1a1a] font-bold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Stock: {item.stock} (Bajo)
                  </span>
                ) : (
                  <span className="text-xs text-[#4e453d] font-semibold">
                    Stock: {item.stock}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  id={`btn-edit-inv-${item.id}`}
                  onClick={() => onEditProduct(item)}
                  className="p-2 text-[#4e453d] hover:text-[#33210d] hover:bg-[#f0ede8] rounded-lg transition-colors cursor-pointer"
                  title="Editar Producto"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  id={`btn-del-inv-${item.id}`}
                  onClick={() => onDeleteProduct(item.id)}
                  className="p-2 text-[#ba1a1a]/70 hover:text-[#ba1a1a] hover:bg-[#ffdad6] rounded-lg transition-colors cursor-pointer"
                  title="Eliminar Producto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
