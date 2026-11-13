// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/pago_exitoso_pedido_confirmado_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EnlacePedidoCreado, EntregaPedidoCreado, EnvioPedidoCreado, ImportePedidoCreado, NumeroPedido, OfertaCrearCuenta, PedidoCreadoProvider, ResumenPedidoCreado } from '@/features/orders/PedidoCreado';
import { EMAIL_SOPORTE, whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';

export default function CheckoutExitoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <PedidoCreadoProvider>
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden pb-20">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-96 right-10 w-96 h-96 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex items-center justify-between max-w-xl mx-auto mb-10 px-6 py-3 bg-surface-container rounded-full text-xs font-label">
                <div className="flex items-center gap-2 text-secondary font-semibold">
                  <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  {' '}
                  <span>
                    Pedido registrado
                  </span>
                </div>
                <div className="h-[2px] w-8 sm:w-16 bg-secondary/30"></div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary text-surface-bright flex items-center justify-center text-[10px]">
                    2
                  </span>
                  {' '}
                  <span>
                    Por confirmar
                  </span>
                </div>
                <div className="h-[2px] w-8 sm:w-16 bg-surface-dim"></div>
                <div className="flex items-center gap-2 text-on-surface-variant/70">
                  <span className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center text-[10px]">
                    3
                  </span>
                  {' '}
                  <span>
                    Entrega o recogida
                  </span>
                </div>
              </div>
              <div className="relative bg-surface-container-lowest rounded-xl shadow-xl p-6 sm:p-10 lg:p-14 overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-surface-container-low flex items-center justify-center select-none pointer-events-none opacity-50">
                  <span className="font-headline font-extrabold text-xs text-primary/30 tracking-widest uppercase [transform:rotate(25deg)]">
                    Paisabor · Ámsterdam
                  </span>
                </div>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shadow-md transform transition-transform hover:scale-105 duration-300">
                      <span className="material-symbols-outlined text-4xl sm:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-surface-container-high px-2 py-0.5 rounded-full text-[10px] tracking-wider font-label font-bold text-primary uppercase shadow-xs">
                      Prueba
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-label font-bold text-secondary mb-2">
                    Pedido de prueba registrado
                  </span>
                  <h1 className="font-headline font-extrabold text-2xl sm:text-4xl text-primary tracking-tight leading-tight">
                    ¡Gracias por tu pedido!
                  </h1>
                  <p className="font-headline font-medium text-lg sm:text-xl text-primary/80 mt-1">
                    Lo hemos registrado como pendiente. Te avisaremos por WhatsApp cuando lo confirmemos.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 bg-surface-container-low px-5 py-2.5 rounded-lg">
                    <span className="text-xs uppercase tracking-wider text-on-surface-variant font-label">
                      Número de pedido:
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-base sm:text-lg text-primary tracking-wide selection:bg-secondary-container" id="orderId">
                      <NumeroPedido />
                    </span>
                    {' '}
                    <button aria-label="Copiar código" className="text-secondary hover:text-primary transition-colors p-1" title="Copiar número de pedido">
                      <span className="material-symbols-outlined text-lg">
                        content_copy
                      </span>
                    </button>
                    {' '}
                    <span className="text-[10px] text-secondary font-medium transition-opacity opacity-0 -ml-1" id="copyHint">
                      ¡Copiado!
                    </span>
                  </div>
                  <div className="mt-6 w-full flex items-center gap-3 bg-surface-container-high/60 px-4 py-3 rounded-lg text-left">
                    <span className="material-symbols-outlined text-secondary text-2xl shrink-0">
                      info
                    </span>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      Esta es una versión de prueba: no se ha cobrado nada y no se envían correos. Guarda el número de pedido para consultarlo en «Seguir mi pedido».
                    </p>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-label uppercase font-bold tracking-wider text-secondary">
                          Modalidad de Entrega
                        </span>
                        {' '}
                        <span className="material-symbols-outlined text-primary">
                          local_shipping
                        </span>
                      </div>
                      <EntregaPedidoCreado />
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-3">
                      Te confirmaremos la hora por WhatsApp.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-label uppercase font-bold tracking-wider text-secondary">
                          Método de Pago
                        </span>
                        {' '}
                        <span className="material-symbols-outlined text-primary">
                          account_balance
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <h2 className="font-headline font-bold text-base text-primary">
                          Pago simulado
                        </h2>
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        No se ha cobrado nada. En la tienda definitiva se pagará con iDEAL o tarjeta a través de Mollie.
                      </p>
                    </div>
                    <div className="bg-surface-bright p-3 rounded-lg mt-2 flex items-center justify-between">
                      <span className="text-xs text-on-surface-variant">
                        Estado del pago
                      </span>
                      {' '}
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}Sin cobro (prueba)
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary text-surface-bright p-6 rounded-xl flex flex-col justify-between shadow-md">
                    <div>
                      <div className="flex items-center justify-between mb-4 text-surface-tint">
                        <span className="text-[11px] font-label uppercase font-bold tracking-widest text-secondary-fixed">
                          Importe del pedido
                        </span>
                        {' '}
                        <span className="material-symbols-outlined text-secondary-container">
                          receipt_long
                        </span>
                      </div>
                      <p className="text-xs text-surface-variant/80 uppercase tracking-wider font-label">
                        Total
                      </p>
                      <div className="font-headline font-extrabold text-3xl sm:text-4xl text-surface-bright mt-1 tracking-tight">
                        <ImportePedidoCreado parte="total" />
                      </div>
                    </div>
                    <div className="mt-4 pt-3 text-[11px] text-surface-variant/80 flex items-center justify-between gap-3">
                      <span>
                        Envío
                      </span>
                      <span className="font-semibold text-surface-bright text-right">
                        <EnvioPedidoCreado />
                      </span>
                    </div>
                    <div className="pt-1 text-[11px] text-surface-variant/80 flex items-center justify-between">
                      <span>
                        Impuestos holandeses
                      </span>
                      {' '}
                      <span className="font-semibold text-surface-bright">
                        IVA 9% (<ImportePedidoCreado parte="iva" /> incl.)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 bg-surface-container-low rounded-xl p-6 space-y-4">
                  <ResumenPedidoCreado titulo="Desglose de Productos" />
                </div>
                <div className="mt-10 p-6 bg-surface-bright rounded-xl shadow-xs">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">
                          skillet
                        </span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-sm text-primary">
                          ¿Qué pasa ahora?
                        </h4>
                        <p className="text-xs text-on-surface-variant max-w-lg mt-0.5">
                          El equipo revisa el pedido y te escribe por WhatsApp para confirmarlo. Puedes ver su estado en cualquier momento con el número de pedido.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <EnlacePedidoCreado className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-on-primary font-label text-sm font-semibold tracking-wide shadow-md hover:bg-primary-container transform hover:-translate-y-0.5 transition-all duration-200">
                    <span className="material-symbols-outlined text-lg">
                      fact_check
                    </span>
                    {' '}
                    <span>
                      Ver estado de mi pedido
                    </span>
                  </EnlacePedidoCreado>
                  {' '}
                  <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-variant font-label text-sm font-semibold tracking-wide transition-colors duration-200" data-path="productos" href="/catalogo">
                    <span className="material-symbols-outlined text-lg">
                      storefront
                    </span>
                    {' '}
                    <span>
                      Volver a la tienda
                    </span>
                  </Link>
                </div>
                <OfertaCrearCuenta />
                <div className="mt-8 text-center text-xs text-on-surface-variant flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    support_agent
                  </span>
                  {' '}
                  <span>
                    ¿Dudas con tu entrega? Escríbenos{' '}
                    {EMAIL_SOPORTE && (
                      <>
                        a{' '}
                        <a className="text-primary font-semibold underline underline-offset-2" href={`mailto:${EMAIL_SOPORTE}`}>
                          {EMAIL_SOPORTE}
                        </a>{' '}
                        o{' '}
                      </>
                    )}
                    por WhatsApp al{' '}
                    <a className="text-primary font-semibold underline underline-offset-2" href={whatsappLink('Hola Paisabor, tengo una duda sobre la entrega de mi pedido.')} rel="noopener noreferrer" target="_blank">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </PedidoCreadoProvider>
    </>
  );
}
