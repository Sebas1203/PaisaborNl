'use client';

import React, { useState } from 'react';
import {
  Edit2,
  MapPin,
  Sliders,
  Camera,
  ArrowRight,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react';
import { UserProfile, OrderItem } from '@/types';

interface AdminProfileViewProps {
  userProfile: UserProfile;
  orders: OrderItem[];
  onOpenNewProductModal: () => void;
  onNavigateToTab?: (tab: 'despensa' | 'firmas' | 'perfil' | 'inventario') => void;
}

export const AdminProfileView: React.FC<AdminProfileViewProps> = ({
  userProfile,
  orders,
  onOpenNewProductModal,
  onNavigateToTab,
}) => {
  const [profile, setProfile] = useState<UserProfile>(userProfile);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({
    name: profile.name,
    email: profile.email,
    street: profile.address.street,
    phone: profile.address.phone,
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile((prev) => ({
      ...prev,
      name: editForm.name,
      email: editForm.email,
      address: {
        ...prev.address,
        street: editForm.street,
        phone: editForm.phone,
      },
    }));
    setIsEditingProfile(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      {/* Top Header */}
      <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#994621] block mb-1">
            Gestión de Cuenta
          </span>
          <h1 className="font-['Epilogue'] font-black text-3xl sm:text-4xl lg:text-5xl text-[#33210d] tracking-tight">
            Mi Perfil
          </h1>
          <p className="font-['Work_Sans'] text-[#4e453d] text-base md:text-lg mt-2">
            Bienvenido de vuelta, {profile.name}.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            id="btn-edit-profile-toggle"
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="px-5 py-2.5 bg-white border border-[#d2c4ba]/50 text-[#33210d] rounded-xl font-['Work_Sans'] font-medium text-sm hover:bg-[#f6f3ee] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Edit2 className="w-4 h-4 text-[#994621]" />
            {isEditingProfile ? 'Cancelar' : 'Editar Perfil'}
          </button>

          <button
            id="btn-admin-new-product-top"
            onClick={onOpenNewProductModal}
            className="px-5 py-2.5 bg-[#33210d] text-white rounded-xl font-['Work_Sans'] font-medium text-sm hover:bg-[#4b3621] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" />
            Nuevo Producto
          </button>
        </div>
      </header>

      {/* Edit Form Drawer / Card (when active) */}
      {isEditingProfile && (
        <div className="mb-10 bg-white p-6 md:p-8 rounded-2xl border border-[#994621]/20 shadow-md animate-in fade-in duration-200">
          <h3 className="font-['Epilogue'] font-bold text-xl text-[#33210d] mb-4">
            Actualizar Datos del Perfil
          </h3>
          <form onSubmit={handleSaveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full bg-[#f0ede8] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                className="w-full bg-[#f0ede8] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1">
                Dirección
              </label>
              <input
                type="text"
                value={editForm.street}
                onChange={(e) => setEditForm({ ...editForm, street: e.target.value })}
                className="w-full bg-[#f0ede8] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#4e453d] uppercase tracking-wider mb-1">
                Teléfono de Contacto
              </label>
              <input
                type="text"
                value={editForm.phone}
                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                className="w-full bg-[#f0ede8] rounded-xl px-4 py-3 text-sm text-[#33210d] border-0 focus:ring-2 focus:ring-[#994621]"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => setIsEditingProfile(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#4e453d] hover:bg-[#f0ede8]"
              >
                Descartar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#994621] text-white rounded-xl text-sm font-semibold hover:bg-[#7b2f0b] transition-colors"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Identity Card */}
        <div
          id="card-user-info"
          className="col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-[#f0ede8] flex flex-col items-center text-center"
        >
          {/* Avatar with Camera Hover Overlay */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-[#f0ede8] relative group cursor-pointer">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#33210d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Camera className="w-6 h-6" />
            </div>
          </div>

          <h2 className="font-['Epilogue'] text-2xl font-bold text-[#33210d] mb-1">
            {profile.name}
          </h2>
          <p className="text-sm font-['Work_Sans'] text-[#4e453d] mb-6 font-medium">
            {profile.email}
          </p>

          <div className="w-full border-t border-[#f0ede8] my-2" />

          <div className="w-full flex justify-between items-center py-2.5 text-sm">
            <span className="text-[#4e453d]">Miembro desde</span>
            <span className="font-semibold text-[#33210d]">{profile.memberSince}</span>
          </div>

          <div className="w-full flex justify-between items-center py-2.5 text-sm">
            <span className="text-[#4e453d]">Puntos Sabor</span>
            <span className="font-bold text-lg text-[#994621]">
              {profile.saborPoints.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Recent Orders Bento Box */}
        <div
          id="card-recent-orders"
          className="col-span-1 lg:col-span-2 bg-white rounded-3xl shadow-sm border border-[#f0ede8] p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Epilogue'] text-2xl font-bold text-[#33210d]">
                Pedidos Recientes
              </h2>
              <button
                onClick={() => onNavigateToTab && onNavigateToTab('despensa')}
                className="text-[#994621] hover:text-[#762c08] text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                Ver todos <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  id={`order-item-${order.id}`}
                  className="bg-[#f6f3ee] p-4 md:p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-[#f0ede8] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#e5e2dd] shrink-0">
                      <img
                        src={order.image}
                        alt={order.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-['Epilogue'] font-bold text-lg text-[#33210d] group-hover:text-[#994621] transition-colors">
                        {order.title}
                      </p>
                      <p className="text-xs text-[#4e453d] font-medium mt-0.5">
                        Pedido {order.orderNumber} • {order.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                    <span
                      className={`font-semibold px-3 py-1 rounded-full text-xs flex items-center gap-1.5 mb-0 sm:mb-2 ${
                        order.status === 'Enviado'
                          ? 'bg-[#ffdcbd] text-[#2c1600]'
                          : 'bg-[#e5e2dd] text-[#4e453d]'
                      }`}
                    >
                      {order.status === 'Enviado' ? (
                        <Clock className="w-3.5 h-3.5 text-[#994621]" />
                      ) : (
                        <CheckCircle className="w-3.5 h-3.5 text-[#4e453d]" />
                      )}
                      {order.status}
                    </span>
                    <span className="font-['Epilogue'] font-bold text-[#33210d] text-lg">
                      €{order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Address and Preferences */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery Address */}
          <div
            id="card-delivery-address"
            className="bg-[#f0ede8] p-8 rounded-3xl shadow-xs relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Epilogue'] text-xl font-bold text-[#33210d] flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#994621]" />
                  Dirección Principal
                </h3>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="p-1.5 rounded-lg text-[#4e453d] hover:text-[#994621] hover:bg-[#e5e2dd] transition-colors"
                  title="Editar Dirección"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[#4e453d] space-y-1 font-['Work_Sans'] text-sm leading-relaxed">
                <p className="font-bold text-[#33210d] text-base mb-1">{profile.address.name}</p>
                <p>{profile.address.street}</p>
                <p>{profile.address.postalCodeCity}</p>
                <p>{profile.address.country}</p>
                <p className="pt-3 text-xs font-semibold text-[#80756c]">
                  Tel: {profile.address.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Dietary & Coffee Preferences */}
          <div
            id="card-user-preferences"
            className="bg-[#f6f3ee] p-8 rounded-3xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Epilogue'] text-xl font-bold text-[#33210d] flex items-center gap-2.5">
                  <Sliders className="w-5 h-5 text-[#994621]" />
                  Preferencias
                </h3>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="p-1.5 rounded-lg text-[#4e453d] hover:text-[#994621] hover:bg-[#e5e2dd] transition-colors"
                  title="Editar Preferencias"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-[#80756c] mb-3 uppercase tracking-wider">
                    Perfil de Sabor (Café)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.coffeeProfile.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#ffdcbd] text-[#2c1600] px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#80756c] mb-3 uppercase tracking-wider">
                    Restricciones Dietéticas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.dietaryRestrictions.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#e5e2dd] text-[#33210d] px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
