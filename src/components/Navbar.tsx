import React, { useState } from 'react';
import { ShoppingBag, User, Menu, X, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type ActiveTab = 'despensa' | 'firmas' | 'perfil' | 'inventario';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f4]/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand */}
        <button
          id="btn-nav-logo"
          onClick={() => {
            onSelectTab('despensa');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <BrandLogo variant="compact" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            id="nav-tab-despensa"
            onClick={() => onSelectTab('despensa')}
            className={`font-['Work_Sans'] text-sm tracking-wider uppercase transition-colors py-2 font-medium relative cursor-pointer ${
              activeTab === 'despensa'
                ? 'text-[#994621] font-semibold'
                : 'text-[#4e453d] hover:text-[#33210d]'
            }`}
          >
            Nuestra Despensa
            {activeTab === 'despensa' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#994621] rounded-full" />
            )}
          </button>

          <button
            id="nav-tab-firmas"
            onClick={() => onSelectTab('firmas')}
            className={`font-['Work_Sans'] text-sm tracking-wider uppercase transition-colors py-2 font-medium relative cursor-pointer ${
              activeTab === 'firmas'
                ? 'text-[#994621] font-semibold'
                : 'text-[#4e453d] hover:text-[#33210d]'
            }`}
          >
            Platos Típicos
            {activeTab === 'firmas' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#994621] rounded-full" />
            )}
          </button>

          <button
            id="nav-tab-perfil"
            onClick={() => onSelectTab('perfil')}
            className={`font-['Work_Sans'] text-sm tracking-wider uppercase transition-colors py-2 font-medium relative cursor-pointer ${
              activeTab === 'perfil'
                ? 'text-[#994621] font-semibold'
                : 'text-[#4e453d] hover:text-[#33210d]'
            }`}
          >
            Mi Perfil
            {activeTab === 'perfil' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#994621] rounded-full" />
            )}
          </button>

          <button
            id="nav-tab-inventario"
            onClick={() => onSelectTab('inventario')}
            className={`font-['Work_Sans'] text-sm tracking-wider uppercase transition-colors py-2 font-medium relative cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'inventario'
                ? 'text-[#994621] font-semibold'
                : 'text-[#4e453d] hover:text-[#33210d]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#994621]" />
            Inventario Admin
            {activeTab === 'inventario' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#994621] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right Actions: Cart & Profile Shortcut */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            id="btn-open-cart"
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full text-[#33210d] hover:bg-[#f0ede8] transition-colors cursor-pointer"
            aria-label="Abrir Canasta"
          >
            <ShoppingBag className="w-6 h-6" strokeWidth={1.8} />
            {cartCount > 0 && (
              <span
                id="cart-count-badge"
                className="absolute top-1 right-1 min-w-5 h-5 px-1 bg-[#994621] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm"
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            id="btn-quick-profile"
            onClick={() => onSelectTab(activeTab === 'perfil' ? 'despensa' : 'perfil')}
            className="p-2.5 rounded-full text-[#33210d] hover:bg-[#f0ede8] transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            title="Acceder a Perfil"
          >
            <User className="w-6 h-6" strokeWidth={1.8} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#33210d] hover:bg-[#f0ede8] md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f4] px-6 py-6 border-b border-[#e5e2dd] flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200">
          <button
            onClick={() => {
              onSelectTab('despensa');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-medium py-2 ${
              activeTab === 'despensa' ? 'text-[#994621] font-bold' : 'text-[#33210d]'
            }`}
          >
            Nuestra Despensa
          </button>
          <button
            onClick={() => {
              onSelectTab('firmas');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-medium py-2 ${
              activeTab === 'firmas' ? 'text-[#994621] font-bold' : 'text-[#33210d]'
            }`}
          >
            Platos Típicos (Restaurante)
          </button>
          <button
            onClick={() => {
              onSelectTab('perfil');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-medium py-2 ${
              activeTab === 'perfil' ? 'text-[#994621] font-bold' : 'text-[#33210d]'
            }`}
          >
            Mi Perfil (Juan Pérez)
          </button>
          <button
            onClick={() => {
              onSelectTab('inventario');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-medium py-2 flex items-center gap-2 ${
              activeTab === 'inventario' ? 'text-[#994621] font-bold' : 'text-[#33210d]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#994621]" />
            Inventario Admin
          </button>
        </div>
      )}
    </header>
  );
};
