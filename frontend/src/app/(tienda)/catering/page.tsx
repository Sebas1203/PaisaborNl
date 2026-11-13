// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/catering_paisabor
/* eslint-disable @next/next/no-img-element */
import { ItemImage } from '@/components/ItemImage';
import { Suspense } from 'react';
import { AvisoCatering } from '@/features/catering/AvisoCatering';
import { BotonElegirPlato } from '@/features/catering/BotonElegirPlato';
import { FormularioPresupuesto } from '@/features/catering/FormularioPresupuesto';
import { PLATOS } from '@/data';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';
import { whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { CATERING_ANTICIPACION_HORAS, textoRespuesta } from '@/config/catering';

const PLATOS_CATERING = PLATOS.filter((plato) => plato.disponible);

export default function CateringPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <Suspense fallback={null}>
        <AvisoCatering />
      </Suspense>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <section className="relative w-full bg-primary text-surface-bright pt-12 pb-24 md:py-24 px-6 lg:px-12 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                  {' '}Servicio en Ámsterdam
                </div>
                <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-surface-bright leading-[1.12]">
                  Catering Auténtico Colombiano para tus Eventos y Empresas en Ámsterdam
                </h1>
                <p className="text-base sm:text-lg text-primary-fixed leading-relaxed max-w-2xl font-light">
                  Llevamos la calidez, la tradición y los sabores de nuestra tierra a celebraciones corporativas, bodas, fiestas y reuniones privadas en Ámsterdam.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary hover:bg-secondary/90 text-on-secondary font-medium tracking-wide transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5" href="#cotizador">
                    <span className="material-symbols-outlined text-xl">
                      restaurant
                    </span>
                    {' '}Cotizar Servicio de Catering
                  </a>
                </div>
                {/* Solo datos que salen del propio catálogo o del flujo; nada de cifras del negocio sin confirmar */}
                <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg">
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      {PLATOS_CATERING.length}
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Platos típicos para elegir
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      Varios
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Platos y porciones en una sola solicitud
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      Sin cobro
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Pedir presupuesto no tiene coste
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-primary-container p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <ItemImage alt="Platos típicos colombianos para eventos" className="w-full h-80 sm:h-96 object-cover rounded-lg" />
                  </div>
                  <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-surface-container-lowest text-on-surface p-4 sm:p-5 rounded-xl shadow-xl max-w-xs flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">
                        local_fire_department
                      </span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm text-primary">
                        Receta tradicional antioqueña
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Los platos típicos de nuestro menú, para tu evento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  restaurant_menu
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Platos típicos de nuestro menú
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  request_quote
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Presupuesto sin compromiso
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  no_food
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Cuéntanos alergias y restricciones en la solicitud
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  local_shipping
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Entrega en Ámsterdam (logística por confirmar)
                </span>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-14">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                  Nuestra Oferta Culinaria
                </span>
                <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">
                  Lo que preparamos para tu evento
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Platos típicos de nuestro menú, además de empanadas, fritos y bebidas. El presupuesto final se confirma según el número de invitados.
                </p>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Precios por plato · {IVA_INCLUIDO}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {PLATOS_CATERING.map((plato) => (
                  <div key={plato.id} className="flex flex-col rounded-xl overflow-hidden bg-surface-container-lowest shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative bg-surface-container-low h-64 overflow-hidden">
                      <ItemImage src={plato.imagen} alt={plato.nombre} className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 right-4 bg-primary/85 backdrop-blur-md text-surface-bright px-3 py-1 rounded-lg text-sm font-bold">
                        {formatEUR(plato.precio)} <span className="text-xs font-normal text-primary-fixed">/ plato</span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-headline font-bold text-xl text-primary">{plato.nombre}</h3>
                        {plato.descripcion && <p className="text-sm text-on-surface-variant">{plato.descripcion}</p>}
                      </div>
                      <BotonElegirPlato platoId={plato.id} className="w-full py-3 text-center rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-medium text-sm transition-colors duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                  Sin Complicaciones
                </span>
                <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">
                  ¿Cómo Funciona el Servicio de Paisabor?
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base">
                  Así funciona una solicitud de catering, paso a paso.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Elige tus platos y porciones
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Elige uno o varios platos del menú e indica cuántas porciones quieres de cada uno. Cuéntanos alergias o restricciones en los comentarios.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-headline font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Reserva con Mínimo {CATERING_ANTICIPACION_HORAS}h de Anticipación
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Revisamos la disponibilidad y la logística, confirmamos el número de invitados y te enviamos el presupuesto final {textoRespuesta()}.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-headline font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Entrega o recogida
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Coordinamos contigo la entrega en el lugar del evento o la recogida en nuestra sede. La logística se confirma junto con el presupuesto.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-20 px-6 lg:px-12 scroll-mt-20" id="cotizador">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                    Presupuesto sin compromiso
                  </span>
                  <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary leading-tight">
                    Arma el menú para tu evento
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    Completa el formulario y te enviaremos el presupuesto {textoRespuesta()}.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        pin_drop
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          Dónde
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Ámsterdam. Si tu evento es en otra ciudad, indícalo y te confirmamos si podemos llegar.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        call
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          ¿Prefieres hablar con nosotros?
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Escríbenos directamente a WhatsApp: {WHATSAPP_DISPLAY}
                        </p>
                        <a className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary text-xs font-label font-semibold hover:bg-on-secondary-container transition-colors" href={whatsappLink('Hola Paisabor, quiero información sobre catering.')} rel="noopener noreferrer" target="_blank">
                          <span className="material-symbols-outlined text-base">chat</span>
                          Escríbenos por WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        receipt_long
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          ¿Necesitas factura?
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Indícalo en los comentarios con los datos de tu empresa.
                          {/* TODO (Diana/contador): confirmar cómo se emiten las facturas a empresas */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-xs">
                  <FormularioPresupuesto />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                Opiniones
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary tracking-tight">
                Próximamente: opiniones de nuestros clientes
              </h2>
            </div>
          </section>
          <section className="w-full bg-surface py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto rounded-xl bg-surface-container-lowest p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                  Nuestra cocina
                </span>
                <h3 className="font-headline font-bold text-2xl text-primary">
                  Cocina en Ámsterdam
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Nuestra cocina está en Ámsterdam y preparamos cada pedido con receta tradicional antioqueña.
                </p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <a className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-medium text-sm transition-colors duration-200" href="#cotizador">
                  Reservar Fecha
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}
