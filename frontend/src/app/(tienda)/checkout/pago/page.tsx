// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/pago_seguro_con_mollie_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function CheckoutPagoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <section className="w-full bg-surface-container-low py-6 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-label">
                <Link className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" data-path="carrito" href="/carrito">
                  <span className="material-symbols-outlined text-sm">
                    shopping_bag
                  </span>
                  {' '}
                  <span>
                    1. Canasta
                  </span>
                </Link>
                {' '}
                <span className="text-outline-variant">
                  /
                </span>
                {' '}
                <Link className="text-on-surface-variant hover:text-primary transition-colors" data-path="envio" href="/checkout">
                  <span>
                    2. Entrega en Ámsterdam
                  </span>
                </Link>
                {' '}
                <span className="text-outline-variant">
                  /
                </span>
                {' '}
                <span className="text-secondary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                  {' '}3. Pasarela de Pago
                </span>
              </div>
              <div className="flex items-center gap-2 self-start md:self-auto text-xs font-label text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-base text-secondary">
                  verified_user
                </span>
                {' '}
                <span>
                  Cifrado SSL 256-bit Grado Bancario Europeo
                </span>
              </div>
            </div>
          </section>
          <section className="max-w-6xl mx-auto w-full px-6 lg:px-12 py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-semibold tracking-wide">
                    <span className="material-symbols-outlined text-sm">
                      lock
                    </span>
                    {' '}
                    <span>
                      Transacción Segura en Ámsterdam
                    </span>
                  </div>
                  <h1 className="font-headline font-bold text-3xl lg:text-4xl text-primary tracking-tight">
                    Finalizar Compra
                  </h1>
                  <p className="text-sm text-on-surface-variant max-w-xl leading-relaxed">
                    Selecciona tu forma de pago preferida para procesar tu pedido de arepas de choclo, pandebonos artesanales y café de origen.
                  </p>
                </div>
                <div className="bg-surface-container p-5 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-surface flex items-center justify-center text-primary shadow-xs flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm6 8h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.1c.54-.73 1.4-1.1 2.3-1.1 1.66 0 2.7 1.14 2.7 2.8v3.2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-label tracking-widest text-secondary font-bold">
                          Oficial &amp; Protegido
                        </span>
                        {' '}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      </div>
                      <p className="font-headline font-bold text-base text-primary">
                        Procesado con Mollie Payments
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Conectado directamente a la red bancaria de los Países Bajos (DNB regulado).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <div className="px-2.5 py-1 bg-surface-bright rounded-sm text-[11px] font-mono font-medium text-on-surface-variant tracking-wider shadow-xs">
                      MOLLIE·SECURE
                    </div>
                  </div>
                </div>
                <div className="space-y-4" id="payment-accordion">
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs transition-all duration-200" id="ideal-card">
                    <label className="flex items-center justify-between p-5 cursor-pointer hover:bg-surface-container-low transition-colors select-none">
                      <div className="flex items-center gap-3.5">
                        <input defaultChecked className="w-4 h-4 accent-secondary cursor-pointer" id="method-ideal" name="payment-method" type="radio" value="ideal" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-headline font-bold text-base text-primary">
                              iDEAL
                            </span>
                            {' '}
                            <span className="text-[10px] bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-sm font-semibold uppercase tracking-wide">
                              Estándar en NL
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant mt-0.5">
                            El método más utilizado, seguro y directo en Países Bajos
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-7 bg-surface-container-high rounded-sm flex items-center justify-center font-bold text-xs text-[#cc0066] font-mono shadow-xs">
                          iDEAL
                        </div>
                      </div>
                    </label>
                    <div className="px-5 pb-6 pt-2 bg-surface-container-lowest space-y-4" id="ideal-fields">
                      <div className="bg-surface-container-low p-4 rounded-lg space-y-3">
                        <label className="block text-xs font-label font-bold text-primary uppercase tracking-wider" htmlFor="bank-selector">
                          Selecciona tu banco holandés:
                        </label>
                        <div className="relative">
                          <select className="w-full bg-surface py-3 pl-4 pr-10 rounded-lg text-sm text-primary appearance-none focus:outline-hidden focus:ring-2 focus:ring-secondary/50 shadow-xs cursor-pointer font-medium" id="bank-selector" defaultValue="">
                            <option disabled value="">
                              Elige tu banco (ING, ABN AMRO, Rabobank...)
                            </option>
                            <option value="ing">
                              ING Bank
                            </option>
                            <option value="abn">
                              ABN AMRO
                            </option>
                            <option value="rabobank">
                              Rabobank
                            </option>
                            <option value="sns">
                              SNS Bank
                            </option>
                            <option value="bunq">
                              bunq
                            </option>
                            <option value="revolut">
                              Revolut NL
                            </option>
                            <option value="asnbank">
                              ASN Bank
                            </option>
                            <option value="regiobank">
                              RegioBank
                            </option>
                            <option value="knab">
                              Knab
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-lg">
                            keyboard_arrow_down
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-on-surface-variant pt-1">
                          <span className="material-symbols-outlined text-sm text-secondary flex-shrink-0 mt-0.5">
                            info
                          </span>
                          {' '}
                          <span>
                            Serás redirigido de forma instantánea a la aplicación o portal oficial de tu banco mediante Mollie.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs transition-all duration-200" id="card-method-card">
                    <label className="flex items-center justify-between p-5 cursor-pointer hover:bg-surface-container-low transition-colors select-none">
                      <div className="flex items-center gap-3.5">
                        <input className="w-4 h-4 accent-secondary cursor-pointer" id="method-card" name="payment-method" type="radio" value="card" />
                        <div>
                          <span className="font-headline font-bold text-base text-primary">
                            Tarjeta de Crédito / Débito
                          </span>
                          <p className="text-xs text-on-surface-variant mt-0.5">
                            Visa, Mastercard, Maestro y American Express
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-90">
                        <span className="text-[11px] px-1.5 py-0.5 bg-surface-container rounded-sm font-bold text-on-surface-variant">
                          VISA
                        </span>
                        {' '}
                        <span className="text-[11px] px-1.5 py-0.5 bg-surface-container rounded-sm font-bold text-on-surface-variant">
                          MC
                        </span>
                        {' '}
                        <span className="text-[11px] px-1.5 py-0.5 bg-surface-container rounded-sm font-bold text-on-surface-variant">
                          AMEX
                        </span>
                      </div>
                    </label>
                    <div className="hidden px-5 pb-6 pt-2 bg-surface-container-lowest space-y-4" id="card-fields">
                      <div className="space-y-4 bg-surface-container-low p-5 rounded-lg">
                        <div>
                          <label className="block text-xs font-label uppercase tracking-wider font-semibold text-primary mb-1.5">
                            Número de la Tarjeta
                          </label>
                          <div className="relative">
                            <input className="w-full bg-surface px-4 py-3 rounded-lg text-sm text-primary placeholder:text-outline-variant focus:outline-hidden focus:ring-2 focus:ring-secondary/50 font-mono shadow-xs" maxLength={19} placeholder="4500 0000 0000 0000" type="text" />
                            {' '}
                            <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant text-lg">
                              credit_card
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-label uppercase tracking-wider font-semibold text-primary mb-1.5">
                              Vencimiento (MM/AA)
                            </label>
                            {' '}
                            <input className="w-full bg-surface px-4 py-3 rounded-lg text-sm text-primary placeholder:text-outline-variant focus:outline-hidden focus:ring-2 focus:ring-secondary/50 font-mono shadow-xs" maxLength={5} placeholder="MM / AA" type="text" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-xs font-label uppercase tracking-wider font-semibold text-primary">
                                CVC / CVV
                              </label>
                              {' '}
                              <span className="text-[10px] text-on-surface-variant cursor-help" title="3 dígitos al reverso">
                                ¿Qué es?
                              </span>
                            </div>
                            <div className="relative">
                              <input className="w-full bg-surface px-4 py-3 rounded-lg text-sm text-primary placeholder:text-outline-variant focus:outline-hidden focus:ring-2 focus:ring-secondary/50 font-mono shadow-xs" maxLength={4} placeholder="123" type="password" />
                              {' '}
                              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant text-base">
                                lock
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-label uppercase tracking-wider font-semibold text-primary mb-1.5">
                            Nombre del Titular
                          </label>
                          {' '}
                          <input className="w-full bg-surface px-4 py-3 rounded-lg text-sm text-primary placeholder:text-outline-variant focus:outline-hidden focus:ring-2 focus:ring-secondary/50 shadow-xs uppercase text-xs tracking-wider" placeholder="Como figura en la tarjeta" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      verified
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-sm text-primary">
                      Compra Protegida
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Cobertura total contra fraudes y entrega garantizada en Ámsterdam.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      security
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-sm text-primary">
                      Cumplimiento PSD2
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Autenticación bancaria 3D Secure con estándares de la Unión Europea.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      event_repeat
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-sm text-primary">
                      Cancelación Flexible
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Cancelación sin recargo hasta 4 horas antes de la ruta de despacho.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
                <div className="bg-surface-container-lowest p-6 lg:p-7 rounded-xl shadow-md space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b-0">
                    <div>
                      <span className="text-xs uppercase font-label tracking-widest text-secondary font-bold">
                        Resumen de Canasta
                      </span>
                      <h2 className="font-headline font-bold text-xl text-primary">
                        Tu Pedido Colombiano
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 bg-surface-container-high text-xs font-semibold rounded-full text-on-surface-variant">
                      3 artículos
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="Warm golden Colombian arepas de choclo with fresh artisanal curd cheese melted on top, rustic earthenware plate, dark wooden background, warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCST0MBlTSDkdRsqisGyBIsz1taZn54hnr4Lx0YIoHj9nEfE6mF-hVIoYHViGNmYDUunMtfAjoKLbQGVqON9Hote5g0OKQ_DsO3a2sP6x0Mtd0Kzu-tu3Lc1frKU02qVCsTzlH-2HBbx_zaLaHRlz3327Xwllcs0vyodbDfxG94z9YQ3FrzJ_GWLA8AIN020pFSSer1vZewGWtGvbQ-x4TnqcDFgMN7szE2EjFCiCjzDmXQLbSwG11O" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-headline font-bold text-sm text-primary truncate">
                          Arepas de Choclo con Queso (x4)
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Elaboración fresca del día
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline font-bold text-sm text-primary">
                          €12.50
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="Traditional freshly baked Colombian pandebonos bread rolls with cassava starch and cheese, golden crust, wooden tray with steam rising, editorial culinary photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCGuQlK1hMxXvRjA5wFemj1EdZq2jc-UeRyXZsxRkJy34HVfTCR7ia1_Xi1Md3mvcs51u0cmRIAj0jpdFjjyMszVa-T_cajQQ1uyLLR7PuXfqdPLWpFfMscTqEDqsPTvtXyKpoGmL4mvcte4veID2m4CkvXOcAKcK2n3OEkCQZs3-6lSKC3OfC8J1v3jdkB2r_4GhPxBUwTpIUbIPGd6jyV3yMZNosHWj7tSuLEkCL89h2l-9K6ytm" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-headline font-bold text-sm text-primary truncate">
                          Pandebonos Tradicionales (x6)
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Recién horneados
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline font-bold text-sm text-primary">
                          €11.00
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="Specialty Colombian coffee beans bag from Huila roasted artisanally, burlap sack details, dried coffee cherries and warm terracotta aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFFNWFR2PAUjKi8PoTCJx-OUy-T01LSs4h9HnWL2YULiDDJ6oR1cehatfw82srMEZgOSobSZqzAWhOptx0fh8N0qOVLhcu4zqnwM7TqYbn0VaPEqcfW77KsuXngc2x5j8xu7O9kzvZeNQNuEh5tyAXd_Do0THCMl8UfLoDk9AG5Mq3yF2QnZg85mc6NjFAcOOd0KK1lRBGONymOwCD75Vr6zM6jJJK8MQYpzOztw5xNnsY8wPmisB" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-headline font-bold text-sm text-primary truncate">
                          Café de Origen Huila (250g)
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Tueste medio artesanal
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline font-bold text-sm text-primary">
                          €14.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-surface-container rounded-lg flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        local_shipping
                      </span>
                      <div>
                        <p className="font-semibold text-primary">
                          Reparto en Ámsterdam (Centrum)
                        </p>
                        <p className="text-[11px] text-on-surface-variant">
                          Hoy entre 17:00 y 19:30
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">
                      €4.50
                    </span>
                  </div>
                  <div className="space-y-2 pt-2 text-sm text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>
                        Subtotal
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        €38.00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Envío refrigerado ecológico
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        €4.50
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>
                        BTW (9%) incluido
                      </span>
                      {' '}
                      <span>
                        €3.51
                      </span>
                    </div>
                    <div className="pt-4 flex items-baseline justify-between text-primary">
                      <div className="flex flex-col">
                        <span className="font-headline font-bold text-lg">
                          Total a Pagar
                        </span>
                        {' '}
                        <span className="text-[11px] text-on-surface-variant font-label">
                          Precios en Euros (€)
                        </span>
                      </div>
                      <span className="font-headline font-extrabold text-3xl tracking-tight text-primary">
                        €42.50
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                    <Go href="/checkout/exito" className="w-full py-4 px-6 bg-secondary text-on-secondary rounded-lg font-headline font-bold text-base flex items-center justify-center gap-3 hover:bg-on-secondary-container transition-all active:scale-[0.99] shadow-md group" type="button">
                      <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">
                        lock
                      </span>
                      {' '}
                      <span>
                        Pagar €42.50
                      </span>
                    </Go>
                    {' '}
                    <Link className="w-full py-3 px-4 text-center rounded-lg font-medium text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5" data-path="carrito" href="/checkout">
                      <span className="material-symbols-outlined text-sm">
                        arrow_back
                      </span>
                      {' '}
                      <span>
                        Volver al resumen de compra
                      </span>
                    </Link>
                  </div>
                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      Al confirmar el pago, aceptas los{' '}
                      <a className="underline hover:text-secondary" data-path="terminos" href="#">
                        términos de servicio
                      </a>
                      {' '}y las políticas de consumo de Paisabor AMS.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      storefront
                    </span>
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-primary">
                      Sabor auténtico en Prinsengracht
                    </p>
                    <p className="text-on-surface-variant">
                      Apoyas a artesanos colombianos residentes en Ámsterdam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}
