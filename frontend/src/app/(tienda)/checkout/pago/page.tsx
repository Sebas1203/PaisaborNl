// Basado en docs/diseno-stitch/pantallas/pago_seguro_con_mollie_paisabor.
// PROTOTIPO: no hay pasarela de pago. iDEAL y tarjeta son solo opciones visuales y la pantalla no
// pide ningún dato bancario ni de tarjeta. TODO (backend): integrar Mollie (redirección a su
// checkout alojado, sin campos de tarjeta en esta web) y crear el pedido desde su webhook.
import Link from 'next/link';
import { ResumenCarrito } from '@/components/order/ResumenPedido';
import { PagarButton } from '@/features/cart/PagarButton';

const METODOS = [
  { id: 'ideal', nombre: 'iDEAL | Wero', detalle: 'Pago desde la app de tu banco', icono: 'account_balance' },
  { id: 'tarjeta', nombre: 'Tarjeta', detalle: 'Visa · Mastercard', icono: 'credit_card' },
];

export default function CheckoutPagoPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-16rem)]">
        <section className="w-full bg-surface-container-low py-6 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <nav aria-label="Pasos de la compra" className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase font-label">
              <Link className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="/carrito">
                <span className="material-symbols-outlined text-sm">shopping_bag</span> 1. Canasta
              </Link>
              <span className="text-outline-variant">/</span>
              <Link className="text-on-surface-variant hover:text-primary transition-colors" href="/checkout">
                2. Entrega y datos
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-secondary font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span> 3. Pago (simulado)
              </span>
            </nav>
          </div>
        </section>
        <section className="max-w-6xl mx-auto w-full px-6 lg:px-12 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div role="note" className="flex items-start gap-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed p-5">
                <span className="material-symbols-outlined text-2xl shrink-0">science</span>
                <div className="space-y-1">
                  <p className="font-headline font-bold text-lg">Pago simulado: no se cobra nada</p>
                  <p className="text-sm leading-relaxed">
                    Esta es una versión de prueba de la tienda. Aquí no se piden datos de tarjeta ni bancarios, y no escribas ninguno en
                    otra parte de la web. Al confirmar, el pedido se registra para la prueba sin ningún cobro.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="font-headline font-bold text-3xl lg:text-4xl text-primary tracking-tight">Forma de pago</h1>
                <p className="text-sm text-on-surface-variant max-w-xl leading-relaxed">
                  En la tienda definitiva se pagará con iDEAL o con tarjeta a través de Mollie. En esta prueba la elección es solo visual.
                </p>
              </div>
              <fieldset className="space-y-3">
                <legend className="sr-only">Forma de pago (solo visual)</legend>
                {METODOS.map((m, i) => (
                  <label
                    key={m.id}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-xs cursor-pointer hover:bg-surface-container-low transition-colors has-[:checked]:ring-2 has-[:checked]:ring-secondary"
                  >
                    <span className="flex items-center gap-3.5">
                      <input defaultChecked={i === 0} className="w-4 h-4 accent-secondary cursor-pointer" name="metodo-pago" type="radio" value={m.id} />
                      <span>
                        <span className="block font-headline font-bold text-base text-primary">{m.nombre}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{m.detalle}</span>
                      </span>
                    </span>
                    <span className="material-symbols-outlined text-secondary text-2xl">{m.icono}</span>
                  </label>
                ))}
              </fieldset>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="bg-surface-container-lowest p-6 lg:p-7 rounded-xl shadow-md space-y-6">
                <ResumenCarrito titulo="Tu Pedido" entrega="elegida" />
                <div className="space-y-3 pt-2">
                  <PagarButton className="w-full py-4 px-6 bg-secondary text-on-secondary rounded-lg font-headline font-bold text-base flex items-center justify-center gap-3 hover:bg-on-secondary-container transition-all active:scale-[0.99] shadow-md group disabled:opacity-50" />
                  <p className="text-center text-xs font-semibold text-on-surface-variant">Pago simulado: no se cobra nada.</p>
                  <Link className="w-full py-3 px-4 text-center rounded-lg font-medium text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5" href="/checkout">
                    <span className="material-symbols-outlined text-sm">arrow_back</span> Volver a entrega y datos
                  </Link>
                </div>
                <p className="pt-2 text-center text-[11px] text-on-surface-variant leading-relaxed">
                  Al confirmar aceptas los{' '}
                  <Link className="underline hover:text-secondary" href="/terminos">
                    términos
                  </Link>{' '}
                  de esta versión de prueba.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
