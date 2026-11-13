// Basado en docs/diseno-stitch/pantallas/carrito_con_opci_n_de_domicilio, conectado al carrito:
// cantidades, eliminar, método de entrega, subtotal, base sin IVA e IVA (incluido, nunca sumado).
'use client';

import { useEffect, useState } from 'react';
import { ItemImage } from '@/components/ItemImage';
import { Go } from '@/components/ui/Go';
import { costeEnvio, textoEnvio } from '@/config/envio';
import { useCart } from '@/features/cart/CartProvider';
import { guardarEntregaElegida, leerEntregaElegida } from '@/features/cart/datosCheckout';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';

type Delivery = 'recogida' | 'domicilio';

const deliveryClass = (active: boolean) =>
  active
    ? 'flex items-center justify-center p-3 border-2 border-secondary bg-secondary/5 rounded-lg cursor-pointer transition-all'
    : 'flex items-center justify-center p-3 border border-outline-variant/30 rounded-lg cursor-pointer hover:bg-surface-container-highest transition-all';

export default function CarritoPage() {
  const { lineas, subtotal, base, iva, updateQuantity, removeItem } = useCart();
  const [delivery, setDelivery] = useState<Delivery>('recogida');

  // Al volver del checkout se mantiene el método que ya había elegido
  useEffect(() => {
    const elegida = leerEntregaElegida();
    if (elegida) setDelivery(elegida);
    else guardarEntregaElegida('recogida');
  }, []);

  // Costo de envío desde src/config/envio.ts (única fuente)
  const envio = costeEnvio(delivery);
  const total = subtotal + (envio ?? 0);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\nh1, h2, h3, .font-headline { font-family: 'Epilogue Variable', sans-serif; }\n.glass-effect { backdrop-filter: blur(16px); background-color: rgba(252, 249, 244, 0.8); }\n}" }} />
      <div className="text-on-surface selection:bg-secondary-container">
        <main className="max-w-7xl mx-auto px-8 py-12 md:py-20 pt-28 md:pt-32">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4">Tu Canasta</h1>
            <p className="text-lg text-on-surface-variant max-w-xl">Revisa tu pedido antes de pagar.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-12">
              {lineas.length === 0 && <p className="text-lg text-on-surface-variant">Tu canasta está vacía.</p>}
              {lineas.map(({ item, cantidad, total: totalLinea }) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low p-6 rounded-xl relative overflow-hidden group"
                >
                  <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-highest">
                    <ItemImage
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{item.nombre}</h3>
                        <p className="text-sm text-outline font-medium tracking-wide">{formatEUR(item.precio)} / unidad</p>
                      </div>
                      <button
                        aria-label={`Quitar ${item.nombre}`}
                        className="text-outline hover:text-tertiary transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-8">
                      <div className="flex items-center bg-surface-container-high rounded-full px-4 py-2">
                        <button
                          aria-label="Quitar una unidad"
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-outline-variant/20 rounded-full transition-colors"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="mx-4 font-bold text-lg min-w-[20px] text-center">{cantidad}</span>
                        <button
                          aria-label="Añadir una unidad"
                          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-outline-variant/20 rounded-full transition-colors"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <p className="text-2xl font-headline font-bold text-secondary">{formatEUR(totalLinea)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-16 p-8 rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-lowest flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">rebase_edit</span>
                <h4 className="text-xl font-bold text-primary mb-2">¿Algo más para tu mesa?</h4>
                <p className="text-on-surface-variant mb-6">Añade empanadas, fritos o bebidas a tu pedido.</p>
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
                <h2 className="text-2xl font-bold text-primary mb-8 border-b border-outline-variant/20 pb-4">Resumen del Pedido</h2>
                <div className="mb-8 space-y-4">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Método de Entrega</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(['recogida', 'domicilio'] as const).map((opcion) => (
                      <label key={opcion} className={deliveryClass(delivery === opcion)}>
                        <input
                          className="form-radio hidden"
                          name="delivery_method"
                          type="radio"
                          value={opcion}
                          checked={delivery === opcion}
                          onChange={() => {
                            setDelivery(opcion);
                            guardarEntregaElegida(opcion);
                          }}
                        />
                        <span
                          className={`text-sm font-bold ${delivery === opcion ? 'text-secondary' : 'text-on-surface-variant'}`}
                        >
                          {opcion === 'recogida' ? 'Recogida' : 'Domicilio'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <p className="-mt-4 mb-8 text-xs text-on-surface-variant">
                  {delivery === 'domicilio' ? 'La dirección, el día y la franja de entrega' : 'El día y la franja de recogida'} se eligen en el
                  siguiente paso.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-medium text-on-surface">{formatEUR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Base sin IVA</span>
                    <span className="font-medium text-on-surface">{formatEUR(base)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>IVA (9%) incluido</span>
                    <span className="font-medium text-on-surface">{formatEUR(iva)}</span>
                  </div>
                  <div className="flex justify-between gap-3 text-on-surface-variant">
                    <span>Costo de envío</span>
                    <span className="font-medium text-on-surface text-right">{textoEnvio(delivery)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-10 pt-4 border-t border-outline-variant/30">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <div className="text-right">
                    <span className="block text-4xl font-headline font-extrabold text-primary">{formatEUR(total)}</span>{' '}
                    <span className="text-xs text-outline font-medium tracking-widest uppercase">{IVA_INCLUIDO}</span>
                  </div>
                </div>
                <Go
                  href="/checkout"
                  disabled={lineas.length === 0}
                  className="w-full bg-primary hover:bg-primary-container text-white py-5 rounded-lg font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <span>CONTINUAR</span> <span className="material-symbols-outlined">arrow_forward</span>
                </Go>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined text-outline-variant text-3xl">credit_card</span>{' '}
                  <span className="material-symbols-outlined text-outline-variant text-3xl">account_balance</span>
                </div>
                <p className="mt-8 text-center text-xs text-on-surface-variant leading-relaxed">
                  Pago simulado: no se cobra nada. En la tienda definitiva se pagará con iDEAL o tarjeta.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
