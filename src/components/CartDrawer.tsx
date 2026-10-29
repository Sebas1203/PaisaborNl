import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 4.50;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with organic blur */}
      <div
        className="absolute inset-0 bg-[#33210d]/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="canasta-drawer-panel"
          className="w-screen max-w-md bg-[#fcf9f4] shadow-2xl flex flex-col justify-between border-l border-[#e5e2dd] animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#e5e2dd] flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffdcbd] text-[#994621] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-['Epilogue'] font-black text-xl text-[#33210d]">
                  Tu Canasta
                </h2>
                <p className="text-xs font-['Work_Sans'] text-[#80756c]">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} productos seleccionados
                </p>
              </div>
            </div>

            <button
              id="btn-close-cart"
              onClick={onClose}
              className="p-2 rounded-full text-[#4e453d] hover:bg-[#f0ede8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#f0ede8] flex items-center justify-center text-[#80756c] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-['Epilogue'] font-bold text-lg text-[#33210d] mb-1">
                  Tu canasta está vacía
                </h3>
                <p className="font-['Work_Sans'] text-sm text-[#4e453d] max-w-xs mb-6">
                  Descubre los pandebonos recién horneados, empanadas crujientes y café de origen.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#33210d] text-white rounded-xl text-sm font-semibold hover:bg-[#4b3621] transition-colors cursor-pointer"
                >
                  Explorar Despensa
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  id={`cart-item-${item.id}`}
                  className="bg-white p-4 rounded-2xl shadow-xs border border-[#f0ede8] flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#ebe8e3] shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Epilogue'] font-bold text-sm text-[#33210d] truncate">
                      {item.name}
                    </h4>
                    <p className="font-['Epilogue'] font-semibold text-sm text-[#994621] mt-0.5">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-[#f0ede8] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#33210d] hover:bg-white rounded transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#33210d]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#33210d] hover:bg-white rounded transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#80756c] hover:text-[#ba1a1a] p-1 transition-colors ml-auto cursor-pointer"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#e5e2dd] space-y-4">
              {/* Free Shipping Banner */}
              <div className="bg-[#ffdcbd]/50 p-3 rounded-xl flex items-center gap-2.5 text-xs text-[#370e00]">
                <Sparkles className="w-4 h-4 text-[#994621] shrink-0" />
                <span>
                  {subtotal >= 35
                    ? '¡Felicidades! Tienes envío gratis en tu pedido.'
                    : `Agrega €${(35 - subtotal).toFixed(2)} más para obtener envío gratis.`}
                </span>
              </div>

              <div className="space-y-2 text-sm font-['Work_Sans']">
                <div className="flex justify-between text-[#4e453d]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#33210d]">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#4e453d]">
                  <span>Envío a domicilio</span>
                  <span className="font-semibold text-[#33210d]">
                    {shipping === 0 ? <span className="text-emerald-700 font-bold">Gratis</span> : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#33210d] pt-2 border-t border-[#f0ede8]">
                  <span>Total</span>
                  <span className="font-['Epilogue'] text-xl text-[#994621]">€{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                id="btn-checkout-cart"
                onClick={onCheckout}
                className="w-full py-4 bg-[#33210d] hover:bg-[#4b3621] text-white rounded-2xl font-['Work_Sans'] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
              >
                <span>Confirmar Pedido Paisa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
