'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload, Check } from 'lucide-react';
import { InventoryProduct } from '@/types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: InventoryProduct) => void;
  editingProduct?: InventoryProduct | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingProduct,
}) => {
  const [formData, setFormData] = useState<InventoryProduct>({
    id: '',
    name: '',
    tag: 'GRANO ENTERO',
    category: 'Café de Especialidad',
    price: 18.00,
    description: '',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        id: `inv-${Date.now()}`,
        name: '',
        tag: 'GRANO ENTERO',
        category: 'Café de Especialidad',
        price: 15.00,
        description: '',
        stock: 25,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
      });
    }
  }, [editingProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave({
      ...formData,
      id: formData.id || `inv-${Date.now()}`,
      lowStock: formData.stock <= 5,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#33210d]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        id="modal-new-product"
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e5e2dd] z-10 animate-in zoom-in-95 duration-200"
      >
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-[#f0ede8]">
          <h3 className="font-['Epilogue'] font-black text-2xl text-[#33210d]">
            {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#4e453d] hover:bg-[#f0ede8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
              Nombre del Producto *
            </label>
            <input
              id="input-product-name"
              type="text"
              required
              placeholder="Ej: Café Geisha Finca El Mirador"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
                Etiqueta / Tag
              </label>
              <select
                id="select-product-tag"
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
              >
                <option value="GRANO ENTERO">GRANO ENTERO</option>
                <option value="EQUIPO">EQUIPO</option>
                <option value="DESPENSA">DESPENSA</option>
                <option value="HORNEADO">HORNEADO</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
                Categoría
              </label>
              <input
                id="input-product-category"
                type="text"
                placeholder="Ej: Panadería"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
                Precio (€) *
              </label>
              <input
                id="input-product-price"
                type="number"
                step="0.10"
                min="0"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
                Stock Inicial
              </label>
              <input
                id="input-product-stock"
                type="number"
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value, 10) || 0 })}
                className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
              Descripción Sensorial / Notas
            </label>
            <textarea
              id="textarea-product-desc"
              rows={3}
              placeholder="Notas de cata, región de origen o ingredientes tradicionales..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1.5">
              URL de Imagen
            </label>
            <input
              id="input-product-image"
              type="url"
              placeholder="https://..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-[#f6f3ee] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#f0ede8]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#4e453d] hover:bg-[#f0ede8] transition-colors"
            >
              Cancelar
            </button>
            <button
              id="btn-save-product-modal"
              type="submit"
              className="px-6 py-2.5 bg-[#33210d] hover:bg-[#4b3621] text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Check className="w-4 h-4" />
              {editingProduct ? 'Actualizar' : 'Guardar Producto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
