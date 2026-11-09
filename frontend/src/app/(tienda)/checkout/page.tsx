// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/finalizar_pedido_paisabor
// Conectado: elige domicilio o recogida, rellena los datos con el perfil y los valida antes del pago.
'use client';

/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ResumenCarrito } from '@/components/order/ResumenPedido';
import { AvisoError } from '@/components/ui/Estados';
import { SEDE_PRINCIPAL } from '@/config/sedes';
import { guardarDatosCheckout, leerDatosCheckout } from '@/features/cart/datosCheckout';
import { useCart } from '@/features/cart/CartProvider';
import { useAuth } from '@/providers/AuthProvider';
import { validarEmail, validarNombre, validarTelefono } from '@/services/auth';
import type { DeliveryMethod } from '@/types';

const ZONAS = ['Ámsterdam (Centro, West, Zuid, Oost)', 'Ámsterdam Noord'];

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { lineas } = useCart();
  const [entrega, setEntrega] = useState<DeliveryMethod>('domicilio');
  const [form, setForm] = useState({ calle: '', codigoPostal: '', zona: ZONAS[0], notas: '', nombre: '', email: '', telefono: '' });
  const [error, setError] = useState<string | null>(null);

  // Rellena con lo último que escribió el cliente o, si no, con su perfil
  useEffect(() => {
    if (!user) return;
    const previos = leerDatosCheckout();
    if (previos) setEntrega(previos.entrega);
    setForm((f) => ({
      ...f,
      nombre: previos?.nombre ?? user.nombre,
      email: previos?.email ?? user.email,
      telefono: previos?.telefono ?? user.telefono ?? '',
      calle: user.direccion ?? '',
      notas: previos?.notas ?? '',
    }));
  }, [user]);

  const campo = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  function continuar() {
    const problema =
      (lineas.length === 0 && 'Tu carrito está vacío.') ||
      validarNombre(form.nombre) ||
      validarEmail(form.email) ||
      (!form.telefono.trim() && 'Indica un teléfono para avisarte del pedido.') ||
      validarTelefono(form.telefono) ||
      (entrega === 'domicilio' && (!form.calle.trim() || !form.codigoPostal.trim()) && 'Indica la calle y el código postal de entrega.') ||
      null;
    setError(problema);
    if (problema) return;
    guardarDatosCheckout({
      entrega,
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      telefono: form.telefono.trim(),
      direccion: entrega === 'domicilio' ? `${form.calle.trim()}, ${form.codigoPostal.trim().toUpperCase()} ${form.zona}` : undefined,
      notas: form.notas.trim() || undefined,
    });
    router.push('/checkout/pago');
  }

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
                      Ámsterdam
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="delivery-selector">
                    <button aria-pressed={entrega === 'domicilio'} onClick={() => setEntrega('domicilio')} className={`text-left p-5 rounded-lg ${entrega === 'domicilio' ? 'bg-surface-container-lowest shadow-xs' : 'bg-surface-container opacity-80 hover:opacity-100'} hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between h-36`} id="btn-delivery" type="button">
                      <div className={`absolute top-3 right-3 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs transition-opacity ${entrega === 'domicilio' ? 'opacity-100' : 'opacity-0'}`} id="badge-delivery">
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
                          Por confirmar
                        </span>
                      </div>
                    </button>
                    <button aria-pressed={entrega === 'recogida'} onClick={() => setEntrega('recogida')} className={`text-left p-5 rounded-lg ${entrega === 'recogida' ? 'bg-surface-container-lowest shadow-xs' : 'bg-surface-container opacity-80 hover:opacity-100'} hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between h-36`} id="btn-pickup" type="button">
                      <div className={`absolute top-3 right-3 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs transition-opacity ${entrega === 'recogida' ? 'opacity-100' : 'opacity-0'}`} id="badge-pickup">
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
                            {SEDE_PRINCIPAL.direccion}, {SEDE_PRINCIPAL.ciudad}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between mt-4 pt-3 bg-surface-container-lowest/60 px-3 py-2 rounded-sm">
                        <span className="text-xs font-label text-on-surface-variant">
                          Costo
                        </span>
                        {' '}
                        <span className="font-headline font-bold text-sm text-tertiary">
                          Gratis
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className={`${entrega === 'domicilio' ? '' : 'hidden '}bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-6`} id="section-delivery-form">
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
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright placeholder:text-outline-variant transition-colors" id="address-input" placeholder="Ej: nombre de la calle, número y piso" type="text" autoComplete="street-address" {...campo('calle')} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="postcode-input">
                        Código Postal *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright uppercase font-medium placeholder:text-outline-variant transition-colors" id="postcode-input" placeholder="1234 AB" type="text" autoComplete="postal-code" {...campo('codigoPostal')} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="city-input">
                        Ciudad *
                      </label>
                      <select className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="city-input" {...campo('zona')}>
                        <option>
                          Ámsterdam (Centro, West, Zuid, Oost)
                        </option>
                        <option>
                          Ámsterdam Noord
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="delivery-date">
                        Fecha de Entrega *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="delivery-date" type="date" />
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
                      <textarea className="w-full bg-surface-container-low text-on-surface px-4 py-2.5 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright placeholder:text-outline-variant resize-none transition-colors" id="notes-input" placeholder="Ej: piso, timbre o indicaciones para el repartidor" rows={2} {...campo('notas')}></textarea>
                    </div>
                  </div>
                </div>
                <div className={`${entrega === 'recogida' ? '' : 'hidden '}bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs space-y-6`} id="section-pickup-info">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-lg">
                          storefront
                        </span>
                      </span>
                      <div>
                        <h2 className="text-lg font-headline font-bold text-primary">
                          Punto de Recogida: {SEDE_PRINCIPAL.nombre}
                        </h2>
                        <p className="text-xs text-on-surface-variant">
                          Comida colombiana con receta tradicional antioqueña
                        </p>
                      </div>
                    </div>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold px-3 py-1 rounded-full font-label">
                      Sin coste
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-5 rounded-lg flex flex-col md:flex-row gap-6 items-start">
                    <div className="space-y-2 flex-1">
                      <span className="text-xs uppercase tracking-wider font-label text-secondary font-bold">
                        Dirección de nuestro taller:
                      </span>
                      <p className="text-base font-headline font-bold text-primary">
                        {SEDE_PRINCIPAL.direccion}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {SEDE_PRINCIPAL.ciudad} · {SEDE_PRINCIPAL.pais}
                      </p>
                    </div>
                    <div className="w-full md:w-48 bg-surface-container-highest p-3 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-primary uppercase font-label text-[10px] tracking-wider block">
                        Horarios de Retiro:
                      </span>
                      <p className="text-on-surface-variant">
                        Por confirmar
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="pickup-date">
                        Día para recoger *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors cursor-pointer" id="pickup-date" type="date" />
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
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-name" placeholder="Nombre y apellido" type="text" autoComplete="name" {...campo('nombre')} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium" htmlFor="customer-email">
                        Correo Electrónico *
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-email" placeholder="tu@correo.com" type="email" autoComplete="email" {...campo('email')} />
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
                        <input className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-r-lg text-sm focus:outline-hidden focus:bg-surface-bright transition-colors" id="customer-phone" placeholder="Tu número de WhatsApp" type="tel" autoComplete="tel" {...campo('telefono')} />
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
                  <ResumenCarrito editable />
                  <AvisoError mensaje={error} />
                  <button onClick={continuar} className="w-full py-4 px-6 rounded-lg bg-linear-to-r from-primary via-primary to-primary-container hover:from-primary-container hover:to-primary text-on-primary font-headline font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group relative overflow-hidden" type="button">
                    <span className="absolute inset-y-0 left-0 w-1.5 bg-secondary"></span>
                    {' '}
                    <span>
                      Continuar al Pago Seguro
                    </span>
                    {' '}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-secondary-fixed">
                      arrow_forward
                    </span>
                  </button>
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
