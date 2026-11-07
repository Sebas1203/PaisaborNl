'use client';

import React, { createContext, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar, ActiveTab } from '@/components/layout/Navbar';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { Footer } from '@/components/layout/Footer';
import { ProductModal } from '@/features/admin/ProductModal';
import { INITIAL_PRODUCTS, INITIAL_INVENTORY } from '@/data/mockData';
import { Product, CartItem, InventoryProduct } from '@/types';
import { TAB_ROUTES, tabFromPathname } from '@/lib/routes';
import { CheckCircle2 } from 'lucide-react';

interface AppState {
  products: Product[];
  inventory: InventoryProduct[];
  handleAddToCart: (product: Product) => void;
  handleDeleteProduct: (id: string) => void;
  openNewProductModal: () => void;
  openEditProductModal: (product: InventoryProduct) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

const AppStateContext = createContext<AppState | null>(null);

// Shared state for the pages rendered inside <Providers>
export function useAppState() {
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error('useAppState debe usarse dentro de <Providers>');
  }
  return state;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const activeTab = tabFromPathname(usePathname());
  // Tabs are now routes; scroll: false keeps the old in-place tab switch
  const setActiveTab = (tab: ActiveTab) => {
    router.push(TAB_ROUTES[tab], { scroll: false });
  };
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [inventory, setInventory] = useState<InventoryProduct[]>(INITIAL_INVENTORY);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'p-1',
      name: 'Pandebono Clásico',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
      unit: '/ 6 unid.',
    },
    {
      id: 'p-2',
      name: 'Empanadas de Carne',
      price: 12.00,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
      quantity: 2,
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingInventoryProduct, setEditingInventoryProduct] = useState<InventoryProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add to cart handler
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          unit: product.unit,
        },
      ];
    });
    showToast(`"${product.name}" añadido a la canasta`);
  };

  // Update quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item
  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Save product to inventory
  const handleSaveProduct = (product: InventoryProduct) => {
    setInventory((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? product : p));
      }
      return [product, ...prev];
    });

    // Also reflect into storefront products if applicable
    setProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      const formatted: Product = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: 'despensa',
        image: product.image,
        badge: 'Nuevo',
        stock: product.stock,
      };
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, ...formatted } : p));
      }
      return [formatted, ...prev];
    });

    showToast(`Producto "${product.name}" guardado exitosamente`);
  };

  // Delete product
  const handleDeleteProduct = (id: string) => {
    setInventory((prev) => prev.filter((p) => p.id !== id));
    showToast('Producto eliminado del inventario');
  };

  // Checkout action
  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Product modal openers
  const openNewProductModal = () => {
    setEditingInventoryProduct(null);
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (product: InventoryProduct) => {
    setEditingInventoryProduct(product);
    setIsProductModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const appState: AppState = {
    products,
    inventory,
    handleAddToCart,
    handleDeleteProduct,
    openNewProductModal,
    openEditProductModal,
    setActiveTab,
  };

  return (
    <AppStateContext.Provider value={appState}>
    <div className="min-h-screen bg-[#fcf9f4] flex flex-col justify-between font-['Work_Sans'] text-[#1c1c19]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#33210d] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#ff956a]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Checkout Success Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#33210d]/50 backdrop-blur-xs"
            onClick={() => setCheckoutSuccess(false)}
          />
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl z-10 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#ffdcbd] text-[#994621] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Epilogue'] font-black text-2xl text-[#33210d] mb-2">
              ¡Pedido Paisa Confirmado!
            </h3>
            <p className="text-sm text-[#4e453d] leading-relaxed mb-6">
              Estamos preparando tus horneados y productos con el auténtico cariño de Colombia. Recibirás una notificación cuando tu orden esté en camino.
            </p>
            <button
              onClick={() => setCheckoutSuccess(false)}
              className="w-full py-3.5 bg-[#33210d] text-white rounded-xl font-semibold text-sm hover:bg-[#4b3621] transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Slide-out Canasta Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      {/* Product Add/Edit Modal */}
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setEditingInventoryProduct(null);
        }}
        onSave={handleSaveProduct}
        editingProduct={editingInventoryProduct}
      />

      {/* Global Footer */}
      <Footer />
    </div>
    </AppStateContext.Provider>
  );
}
