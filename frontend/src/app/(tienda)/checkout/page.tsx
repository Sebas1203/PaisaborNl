// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/finalizar_pedido_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function CheckoutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-4 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-none">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                  {' '}
                  <span className="text-xs uppercase font-label tracking-widest text-secondary font-semibold">
                    Caja · Ámsterdam
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
                  Finalizar tu Pedido
                </h1>
              </div>
              <div className="flex items-center gap-3 text-xs font-label uppercase tracking-wider text-on-surface-variant">
                <span className="flex items-center gap-1.5 text-secondary font-semibold">
                  <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[10px]">
                    1
                  </span>
                  {' '}Canasta
                </span>
                {' '}
                <span className="text-surface-dim">
                  —
                </span>
                {' '}
                <span className="flex items-center gap-1.5 text-primary font-bold">
                  <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">
                    2
                  </span>
                  {' '}Entrega &amp; Datos
                </span>
                {' '}
                <span className="text-surface-dim">
                  —
                </span>
                {' '}
                <span className="flex items-center gap-1.5 text-on-surface-variant opacity-60">
                  <span className="w-5 h-5 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center text-[10px]">
                    3
                  </span>
                  {' '}Pago seguro
                </span>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-surface-container-low rounded-xl p-6 lg:p-8 shadow-xs">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-headline font-bold text-primary">
                      Método de Entrega
                    </h2>
                    <span className="text-xs font-label text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">
                      Ámsterdam &amp; Randstad
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="delivery-selector">
                    <button className="text-left p-5 rounded-lg bg-surface-container-lowest shadow-xs hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between h-36" id="btn-delivery" type="button">
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs opacity-100 transition-opacity" id="badge-delivery">
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                          <span className="material-symbols-outlined text-2xl">
                            local_shipping
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline font-bold text-base text-primary">
                            A Domicilio
                          </h3>
                          <p className="text-xs text-on-surface-variant">
                            Entrega fresca en tu puerta
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between mt-4 pt-3 bg-surface-container-low/50 px-3 py-2 rounded-sm">
                        <span className="text-xs font-label text-on-surface-variant">
                          Tarifa Ámsterdam
                        </span>
                        {' '}
                        <span className="font-headline font-bold text-sm text-secondary" id="delivery-fee-badge">
                          €4.50
                        </span>
                      </div>
                    </button>
                    <button className="text-left p-5 rounded-lg bg-surface-container opacity-80 hover:opacity-100 hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between h-36" id="btn-pickup" type="button">
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-secondary text-on-secondary items-center justify-center text-xs opacity-0 transition-opacity" id="badge-pickup">
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                          <span className="material-symbols-outlined text-2xl">
                            storefront
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline font-bold text-base text-primary">
                            Retiro en Local
                          </h3>
                          <p className="text-xs text-on-surface-variant">
                            De Pijp / Prinsengracht
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between mt-4 pt-3 bg-surface-container-lowest/60 px-3 py-2 rounded-sm">
                        <span className="text-xs font-label text-on-surface-variant">
                          Costo
                        </span>
                        {' '}
                        <span className="font-headline font-bold text-sm text-tertiary">
                          Gratis (€0.00)
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-6" id="section-delivery-form">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-lg">
                        home_pin
                      </span>
                    </span>
                    <div>
                      <h2 className="text-lg font-headline font-bold text-primary">
                        Dirección de Entrega
                      </h2>
                      <p className="text-xs text-on-surface-variant">
                        Repartos ecológicos en bicicleta de carga por los canales
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="address-input">
                        Calle y Número *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright placeholder:text-outline-variant transition-colors" id="address-input" placeholder="Ej: Keizersgracht 421-B, 2º piso" type="text" defaultValue="Singel 284" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="postcode-input">
                        Código Postal *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright uppercase font-medium placeholder:text-outline-variant transition-colors" id="postcode-input" placeholder="1016 HK" type="text" defaultValue="1016 CR" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="city-input">
                        Ciudad *
                      </label>
                      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="city-input" defaultValue="Ámsterdam (Centro, West, Zuid, Oost)">
                        <option>
                          Ámsterdam (Centro, West, Zuid, Oost)
                        </option>
                        <option>
                          Ámsterdam Noord
                        </option>
                        <option>
                          Amstelveen (+€1.50 recargo de distancia)
                        </option>
                        <option>
                          Haarlem (Envíos sábados)
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="delivery-date">
                        Fecha de Entrega *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="delivery-date" type="date" defaultValue="2025-05-17" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="delivery-slot">
                        Franja Horaria Preferida *
                      </label>
                      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="delivery-slot" defaultValue="13:30 - 17:00 (Tarde de merienda)">
                        <option>
                          10:00 - 13:00 (Mañana fresca de panes)
                        </option>
                        <option>
                          13:30 - 17:00 (Tarde de merienda)
                        </option>
                        <option>
                          17:30 - 20:30 (Cena y antojo)
                        </option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="notes-input">
                        Observaciones para el repartidor (Opcional)
                      </label>
                      <textarea className="w-full bg-surface-container-low text-on-surface px-4 py-2.5 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright placeholder:text-outline-variant resize-none transition-colors" id="notes-input" placeholder="Ej: Tocar el timbre con nombre 'Restrepo' o dejar con el vecino del 1er piso si no respondo..." rows={2}></textarea>
                    </div>
                  </div>
                </div>
                <div className="hidden bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-6" id="section-pickup-info">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-lg">
                          storefront
                        </span>
                      </span>
                      <div>
                        <h2 className="text-lg font-headline font-bold text-primary">
                          Punto de Recogida en De Pijp
                        </h2>
                        <p className="text-xs text-on-surface-variant">
                          Horno y Alacena Artesanal Paisabor
                        </p>
                      </div>
                    </div>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold px-3 py-1 rounded-full font-label">
                      Coste: €0.00
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-5 rounded-lg flex flex-col md:flex-row gap-6 items-start">
                    <div className="space-y-2 flex-1">
                      <span className="text-xs uppercase tracking-wider font-label text-secondary font-bold">
                        Dirección de nuestro taller:
                      </span>
                      <p className="text-base font-headline font-bold text-primary">
                        Gerard Doustraat 82-H (Cerca a Prinsengracht)
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        1072 VX Ámsterdam · Barrio De Pijp
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-xs text-on-surface-variant">
                        <span className="bg-surface-container px-2.5 py-1 rounded-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-secondary">
                            tram
                          </span>
                          {' '}Tranvía 12 &amp; 24 (Parada De Pijp / Ceintuurbaan)
                        </span>
                        {' '}
                        <span className="bg-surface-container px-2.5 py-1 rounded-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-secondary">
                            directions_bike
                          </span>
                          {' '}Parqueadero de bicis enfrente
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-48 bg-surface-container-highest p-3 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-primary uppercase font-label text-[10px] tracking-wider block">
                        Horarios de Retiro:
                      </span>
                      <p className="text-on-surface-variant">
                        Mar – Vie: 11:00 – 19:00
                      </p>
                      <p className="text-on-surface-variant">
                        Sáb – Dom: 10:00 – 18:00
                      </p>
                      <p className="text-secondary font-medium pt-1">
                        Lunes cerrado por horneado
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="pickup-date">
                        Día para recoger *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="pickup-date" type="date" defaultValue="2025-05-17" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="pickup-slot">
                        Hora estimada *
                      </label>
                      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="pickup-slot" defaultValue="14:00 - 16:30 (Tarde)">
                        <option>
                          11:30 - 13:00 (Recién salido del horno)
                        </option>
                        <option>
                          14:00 - 16:30 (Tarde)
                        </option>
                        <option>
                          17:00 - 18:45 (Camino a casa)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="p-3 bg-tertiary-fixed/30 rounded-lg flex items-center gap-3 text-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary">
                      notifications_active
                    </span>
                    {' '}
                    <span>
                      Te enviaremos un SMS con código QR en cuanto tus productos salgan del empaque térmico listos para llevar.
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-lg">
                        person
                      </span>
                    </span>
                    <div>
                      <h2 className="text-lg font-headline font-bold text-primary">
                        Datos de Contacto
                      </h2>
                      <p className="text-xs text-on-surface-variant">
                        Para notificaciones del estado de tu horneado y factura BTW
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="customer-name">
                        Nombre Completo *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-name" placeholder="Camila Restrepo" type="text" defaultValue="Camila Restrepo" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="customer-email">
                        Correo Electrónico *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-email" placeholder="camila@ejemplo.nl" type="email" defaultValue="c.restrepo@uva.nl" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="customer-phone">
                        Teléfono / WhatsApp Holandés (+31) *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-xs font-semibold bg-surface-container-high text-on-surface-variant rounded-l-lg">
                          +31
                        </span>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-r-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-phone" placeholder="6 1234 5678" type="tel" defaultValue="6 4829 1042" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-headline font-bold text-primary">
                      Método de Pago Preferido
                    </h2>
                    <span className="text-xs font-label text-on-surface-variant">
                      Siguiente paso: confirmación bancaria
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer flex flex-col items-center justify-center text-center gap-1.5 transition-colors has-[:checked]:bg-surface-container-highest has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                      <input defaultChecked className="sr-only" name="payment-method" type="radio" value="ideal" />
                      {' '}
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        account_balance
                      </span>
                      {' '}
                      <span className="text-xs font-headline font-bold text-primary">
                        iDEAL / Wero
                      </span>
                      {' '}
                      <span className="text-[10px] text-on-surface-variant">
                        ING, Rabo, ABN
                      </span>
                    </label>
                    {' '}
                    <label className="p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer flex flex-col items-center justify-center text-center gap-1.5 transition-colors has-[:checked]:bg-surface-container-highest has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                      <input className="sr-only" name="payment-method" type="radio" value="card" />
                      {' '}
                      <span className="material-symbols-outlined text-primary text-2xl">
                        credit_card
                      </span>
                      {' '}
                      <span className="text-xs font-headline font-bold text-primary">
                        Tarjeta
                      </span>
                      {' '}
                      <span className="text-[10px] text-on-surface-variant">
                        Visa · Mastercard
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <div className="bg-surface-container-low rounded-xl p-6 lg:p-8 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <h2 className="text-xl font-headline font-extrabold text-primary">
                        Tu Canasta Artesanal
                      </h2>
                      <p className="text-xs text-on-surface-variant">
                        4 artículos seleccionados con sazón
                      </p>
                    </div>
                    <Link className="text-xs font-label uppercase tracking-wider text-secondary font-semibold hover:underline" data-path="carrito" href="/cuenta/editar">
                      Editar
                    </Link>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3">
                    <img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" data-alt="Traditional golden Colombian pandebonos bread rolls freshly baked with melted Colombian coastal cheese and cassava starch, warm steam rising, placed on a terracotta plate, shot in warm rustic natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC64jK5wVniRQ8-duFI5616si6DS3W5Zs68uOsWFjVCFxmmXSM8voJf8jaAVbaP-BmRjr2CeXmXvAFVTpE6NxTV8S7X3kJhgCnlat29DQhwsu8L03sivhOEnmjYlbBqJdJE5oZhRgHnVL-ZRxRKIE2ZF4sx3Bpjivy-l0g9auegxN_JrRzGf1IdskxqV1x35xU5cTfzB1qwD5n-Hj-2vyMLJ1gC3RxTOKsoVA1grI1XR_1QzRoUpKl" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline font-bold text-sm text-primary truncate">
                          Pandebonos Tradicionales (x6)
                        </h3>
                        <span className="font-headline font-bold text-sm text-primary shrink-0">
                          €8.90
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Queso costeño artesanal · Horneados hoy
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm font-label">
                          Cant: 1 paquete
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-secondary-container bg-secondary-fixed px-1.5 py-0.5 rounded-sm font-label">
                          BTW 9% incl.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3">
                    <img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" data-alt="A premium kraft bag of specialty Colombian coffee beans from Huila with an artisanal label, next to a ceramic cup of dark rich espresso and whole roasted coffee beans on a wooden rustic kitchen counter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAWuLDUQBUB8XTABor47kEg1Mj-YTroQrRebHqpgxYakav4Uq5Na3P7mKDbmiC18ew02vgwDgiWK_4uJkmLa-msGQ-n8YOn7kvltSNj-7fj2aS4zCKce8TBnSI6Xn1RKuAyk31Ei0WKWbSvUGhGxPMxBqhIOfvxKMtJKKJDOurhczRGAPAkpffivP98NNF9IVCneU14Va0qJr0tpNuIYbmXtDQHyISh4Zr10r0ux9SNXh1ExbALkog" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline font-bold text-sm text-primary truncate">
                          Café de Origen Huila (250g)
                        </h3>
                        <span className="font-headline font-bold text-sm text-primary shrink-0">
                          €9.50
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Notas a panela y cítricos · Grano entero
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm font-label">
                          Cant: 1 bolsa
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-secondary-container bg-secondary-fixed px-1.5 py-0.5 rounded-sm font-label">
                          BTW 9% incl.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3">
                    <img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" data-alt="Golden yellow sweet corn Colombian arepas de choclo with melted thick fresh white cheese oozing over the top, griddled on an authentic cast iron skillet with charred edges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMsHo_31zIW6W0WEIltZmtPLQ7GE7rigTBNmNkLgNLubjbnBopvaSK0nF9zlQkrX6UjZTjjcMiG8AJL2SD8yeefRrFgPz8uGZLCm7gM4yWxKEGBu9L-j9zs9W3CqNXH2qAYBXxEz_As8qnVaNOtfDfqVfHIaPrhU8fGljdAKmcdzFWsokJtMMwHpENEiOHsF6jCcbDWRCoXsE_wIjyshuyxbNlMor9tdohmlYQqMDCijDki4ACg2BU" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline font-bold text-sm text-primary truncate">
                          Arepas de Choclo con Queso (x4)
                        </h3>
                        <span className="font-headline font-bold text-sm text-primary shrink-0">
                          €7.80
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Maíz dulce tierno · Paquete sellado
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm font-label">
                          Cant: 1 paquete
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-secondary-container bg-secondary-fixed px-1.5 py-0.5 rounded-sm font-label">
                          BTW 9% incl.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3">
                    <img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0" data-alt="Traditional artisanal Colombian arequipe dulce de leche in a vintage glass jar, thick creamy caramel texture visible, with a wooden spoon holding a glossy swirl of sweet milk confection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITUJ4VDY4BsSbw-emCjjciYpwVow7BR_aTBDgYQ2MDIxBB4IjBRvsJC1qrNfgeC4Zs3dJBlvWLhRRdd2YSQMz7z0zz_8bb-7XK4ht-iwaB7cBEMpwX_SCLO9W6YYJ52EPjVk1qAPUabFjp5P2sS2Ib5oez_2ohWjE8wMvgAZpZSUT_XyNFFzanHOH2ol40yul5zgQYUWhvoz8eB2P0T50tKnPzvdWLzSJXKjeJGssWkiLEAI6HmCe" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline font-bold text-sm text-primary truncate">
                          Arequipe Tradicional Paisa (280g)
                        </h3>
                        <span className="font-headline font-bold text-sm text-primary shrink-0">
                          €5.20
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Elaboración lenta en paila de cobre
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm font-label">
                          Cant: 1 frasco
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-secondary-container bg-secondary-fixed px-1.5 py-0.5 rounded-sm font-label">
                          BTW 9% incl.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 space-y-2.5 bg-surface-container-lowest p-5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant">
                        Subtotal productos
                      </span>
                      {' '}
                      <span className="font-medium text-primary">
                        €31.40
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant flex items-center gap-1.5">
                        <span>
                          Costo de Envío
                        </span>
                        {' '}
                        <span className="text-[10px] font-label px-1.5 py-0.5 rounded-sm bg-surface-container text-on-surface-variant" id="shipping-method-tag">
                          Ámsterdam
                        </span>
                      </span>
                      {' '}
                      <span className="font-bold text-secondary" id="shipping-price-text">
                        €4.50
                      </span>
                    </div>
                    <div className="pt-2 pb-1 space-y-1">
                      <div className="flex items-center justify-between text-xs text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span>
                            BTW Alimentos (9%)
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-[12px] text-outline cursor-help" title="Tarifa reducida para alimentos frescos en Países Bajos">
                            info
                          </span>
                        </span>
                        {' '}
                        <span>
                          €2.59 incl.
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-on-surface-variant" id="shipping-btw-row">
                        <span className="flex items-center gap-1">
                          <span>
                            BTW Logística (21%)
                          </span>
                        </span>
                        {' '}
                        <span id="shipping-btw-amount">
                          €0.78 incl.
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 flex items-baseline justify-between">
                      <div>
                        <span className="block text-xs uppercase font-label tracking-widest text-on-surface-variant">
                          Total Final a Pagar
                        </span>
                        {' '}
                        <span className="text-[11px] text-on-surface-variant">
                          Impuestos (BTW holandés) incluidos
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-headline font-black text-2xl lg:text-3xl text-primary tracking-tight" id="cart-total-price">
                          €35.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <Go href="/checkout/pago" className="w-full py-4 px-6 rounded-lg bg-linear-to-r from-primary via-primary to-primary-container hover:from-primary-container hover:to-primary text-on-primary font-headline font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group relative overflow-hidden" type="button">
                    <span className="absolute inset-y-0 left-0 w-1.5 bg-secondary"></span>
                    {' '}
                    <span>
                      Continuar al Pago Seguro
                    </span>
                    {' '}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-secondary-fixed">
                      arrow_forward
                    </span>
                  </Go>
                  <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        verified_user
                      </span>
                      {' '}Pago cifrado SSL
                    </span>
                    {' '}
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        eco
                      </span>
                      {' '}Envío en cargo-bike
                    </span>
                    {' '}
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        outdoor_grill
                      </span>
                      {' '}Hecho a mano en AMS
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-high/60 flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                    local_fire_department
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-bold">
                      Garantía de frescura Paisabor:
                    </strong>
                    {' '}Tus pandebonos y arepas son moldeados y horneados el mismo día de la entrega con queso curado artesanalmente en Holanda siguiendo la receta valluna.
                  </p>
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
