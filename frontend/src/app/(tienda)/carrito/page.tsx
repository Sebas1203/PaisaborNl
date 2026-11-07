// Basado en docs/diseno-stitch/pantallas/carrito_con_opci_n_de_domicilio (generado y luego conectado
// al carrito: cantidades, eliminar, método de entrega, subtotal y total con BTW incluido)
'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { Go } from '@/components/ui/Go';
import { SHIPPING_COST } from '@/data/products';
import { useCart } from '@/features/cart/CartProvider';
import { BTW_ALIMENTOS, BTW_SERVICIOS, btwIncluido, formatEUR } from '@/lib/format';

type Delivery = 'recogida' | 'domicilio';

const deliveryClass = (active: boolean) =>
  active
    ? 'flex items-center justify-center p-3 border-2 border-secondary bg-secondary/5 rounded-lg cursor-pointer transition-all'
    : 'flex items-center justify-center p-3 border border-outline-variant/30 rounded-lg cursor-pointer hover:bg-surface-container-highest transition-all';

export default function CarritoPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const [delivery, setDelivery] = useState<Delivery>('recogida');

  const shipping = delivery === 'domicilio' && items.length > 0 ? SHIPPING_COST : 0;
  const total = subtotal + shipping;
  const btw = btwIncluido(subtotal, BTW_ALIMENTOS) + btwIncluido(shipping, BTW_SERVICIOS);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\nh1, h2, h3, .font-headline { font-family: 'Epilogue Variable', sans-serif; }\n.glass-effect { backdrop-filter: blur(16px); background-color: rgba(252, 249, 244, 0.8); }\n}" }} />
      <div className="text-on-surface selection:bg-secondary-container">
        <main className="max-w-7xl mx-auto px-8 py-12 md:py-20 pt-28 md:pt-32">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4">Tu Canasta</h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Lleva contigo el sabor de nuestra tierra. Cada producto ha sido seleccionado con amor artesanal.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-12">
              {items.length === 0 && (
                <p className="text-lg text-on-surface-variant">Tu canasta está vacía.</p>
              )}
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-highest">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{item.name}</h3>
                        {item.unit && (
                          <p className="text-sm text-outline font-medium tracking-wide uppercase">{item.unit}</p>
                        )}
                      </div>
                      <button
                        aria-label={`Quitar ${item.name}`}
                        className="text-outline hover:text-tertiary transition-colors"
                        onClick={() => removeItem(item.productId)}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-8">
                      <div className="flex items-center bg-surface-container-high rounded-full px-4 py-2">
                        <button
                          aria-label="Quitar una unidad"
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-outline-variant/20 rounded-full transition-colors"
                          onClick={() => updateQuantity(item.productId, -1)}
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="mx-4 font-bold text-lg min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          aria-label="Añadir una unidad"
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-outline-variant/20 rounded-full transition-colors"
                          onClick={() => updateQuantity(item.productId, 1)}
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <p className="text-2xl font-headline font-bold text-secondary">
                        {formatEUR(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-16 p-8 rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-lowest flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">rebase_edit</span>
                <h4 className="text-xl font-bold text-primary mb-2">¿Algo más para tu mesa?</h4>
                <p className="text-on-surface-variant mb-6">
                  Completa tu pedido con nuestras mermeladas artesanales de guayaba.
                </p>
                <Go
                  href="/catalogo"
                  className="text-primary font-bold hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-4"
                >
                  Explorar catálogo
                </Go>
              </div>
            </div>
            <aside className="lg:col-span-4 sticky top-32">
              <div className="bg-surface-container-high p-8 rounded-xl border-t-4 border-secondary shadow-xs">
                <h2 className="text-2xl font-bold text-primary mb-8 border-b border-outline-variant/20 pb-4">
                  Resumen del Pedido
                </h2>
                <DatosEnvio />
                <div className="mb-8 space-y-4">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Método de Entrega</p>
                  <div className="grid grid-cols-2 gap-2">
                    <label className={deliveryClass(delivery === 'recogida')}>
                      <input
                        className="form-radio hidden"
                        name="delivery_method"
                        type="radio"
                        value="recogida"
                        checked={delivery === 'recogida'}
                        onChange={() => setDelivery('recogida')}
                      />
                      <span
                        className={`text-sm font-bold ${delivery === 'recogida' ? 'text-secondary' : 'text-on-surface-variant'}`}
                      >
                        Recogida
                      </span>
                    </label>
                    <label className={deliveryClass(delivery === 'domicilio')}>
                      <input
                        className="form-radio hidden"
                        name="delivery_method"
                        type="radio"
                        value="domicilio"
                        checked={delivery === 'domicilio'}
                        onChange={() => setDelivery('domicilio')}
                      />
                      <span
                        className={`text-sm font-bold ${delivery === 'domicilio' ? 'text-secondary' : 'text-on-surface-variant'}`}
                      >
                        Domicilio
                      </span>
                    </label>
                  </div>
                </div>
                {delivery === 'domicilio' && <DatosEnvio />}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-medium text-on-surface">{formatEUR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Costo de Envío</span>
                    <span className="font-medium text-on-surface">{formatEUR(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{shipping > 0 ? 'BTW incluido (9% · envío 21%)' : 'BTW incluido (9%)'}</span>
                    <span className="font-medium text-on-surface">{formatEUR(btw)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-10 pt-4 border-t border-outline-variant/30">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <div className="text-right">
                    <span className="block text-4xl font-headline font-extrabold text-primary">{formatEUR(total)}</span>{' '}
                    <span className="text-xs text-outline font-medium tracking-widest uppercase">EUR incl. BTW</span>
                  </div>
                </div>
                <Go
                  href="/checkout"
                  disabled={items.length === 0}
                  className="w-full bg-primary hover:bg-primary-container text-white py-5 rounded-lg font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <span>PAGAR AHORA</span>{' '}
                  <span className="material-symbols-outlined">lock</span>
                </Go>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined text-outline-variant text-3xl">credit_card</span>{' '}
                  <span className="material-symbols-outlined text-outline-variant text-3xl">account_balance</span>{' '}
                  <span className="material-symbols-outlined text-outline-variant text-3xl">local_shipping</span>
                </div>
                <p className="mt-8 text-center text-xs text-on-surface-variant leading-relaxed">
                  Envío refrigerado disponible para asegurar la frescura de tus productos. Tiempos de entrega estimados:
                  1-3 días laborales.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}

// Bloque "Datos de Envío" del diseño (aparece dos veces; el segundo solo a domicilio)
function DatosEnvio() {
  const input =
    'form-input w-full bg-surface-container-low border-none text-sm p-3 rounded-lg focus:ring-2 focus:ring-secondary/20';
  return (
    <div className="mb-8 space-y-4 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
      <h3 className="text-sm font-bold text-primary">Datos de Envío</h3>
      <div className="space-y-3">
        <input className={input} placeholder="Dirección" type="text" />
        <div className="grid grid-cols-2 gap-3">
          <input className={input} placeholder="Ciudad" type="text" />
          <input className={input} placeholder="Código Postal" type="text" />
        </div>
        <input className={input} placeholder="País" type="text" />
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-outline">Fecha</label>
            <input className="form-input w-full bg-surface-container-low border-none text-sm p-3 rounded-lg" type="date" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-outline">Hora</label>
            <input className="form-input w-full bg-surface-container-low border-none text-sm p-3 rounded-lg" type="time" />
          </div>
        </div>
        <textarea
          className="form-textarea w-full bg-surface-container-low border-none text-sm p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 h-20"
          placeholder="Observaciones (Instrucciones especiales)"
        ></textarea>
      </div>
    </div>
  );
}
