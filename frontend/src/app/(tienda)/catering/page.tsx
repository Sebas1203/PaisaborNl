// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/catering_paisabor
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';
import { ItemImage } from '@/components/ItemImage';
import { PLATOS } from '@/data';
import { formatEUR, IVA_INCLUIDO } from '@/lib/format';

const PLATOS_CATERING = PLATOS.filter((plato) => plato.disponible);

export default function CateringPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
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
                  {' '}
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright font-medium backdrop-blur-md transition-all duration-200" type="button">
                    <span className="material-symbols-outlined text-xl">
                      download
                    </span>
                    {' '}Descargar Dossier de Menús
                  </button>
                </div>
                <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg">
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      500+
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Invitados atendidos en NL
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      100%
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Sabor tradicional &amp; café de origen
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-headline font-bold text-2xl text-secondary-container block">
                      HACCP
                    </span>
                    {' '}
                    <span className="text-xs text-outline-variant leading-tight block">
                      Certificación sanitaria europea
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-primary-container p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <ItemImage alt="A lavish banquet buffet table styled with authentic Colombian earthenware and cazuelas de barro, featuring roasted lechona tolimense with crisp golden crackling, steaming arepitas, and vibrant plantain chips, set in an elegant warm-lit contemporary dining hall in the Netherlands with lush floral accents and terracotta tones." className="w-full h-80 sm:h-96 object-cover rounded-lg" />
                  </div>
                  <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-surface-container-lowest text-on-surface p-4 sm:p-5 rounded-xl shadow-xl max-w-xs flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">
                        local_fire_department
                      </span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm text-primary">
                        Cocina a Fuego Lento
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Tradición paisa transportada a los canales holandeses.
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
                  verified
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Ingredientes 100% Importados de Colombia &amp; Frescos Locales
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  health_and_safety
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Cumplimiento Estricto Normativa HACCP Países Bajos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  eco
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Opciones Disponibles Vegetarianas &amp; Sin Gluten
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  local_shipping
                </span>
                {' '}
                <span className="text-sm font-medium text-on-surface">
                  Transporte térmico en Ámsterdam
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
                      <a className="w-full py-3 text-center rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-medium text-sm transition-colors duration-200" href="#cotizador">
                        Elegir este plato
                      </a>
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
                  Garantizamos puntualidad holandesa y hospitalidad colombiana en cada etapa de tu evento.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Selecciona tu Paquete o Menú a Medida
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Explora nuestros paquetes o indícanos preferencias personalizadas para tu empresa o festejo familiar. Adaptamos porciones y restricciones.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-headline font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Reserva con Mínimo 72h de Anticipación
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Revisamos la disponibilidad logística, confirmamos cantidad de comensales y congelamos la fecha con un anticipo seguro vía iDEAL o transferencia.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xs relative flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-headline font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Montaje Profesional o Entrega Térmica
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Llegamos a tu locación para instalar el buffet campesino con menaje tradicional o dejamos la comida caliente en cajas térmicas de aislamiento profesional.
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
                    Presupuesto Inmediato
                  </span>
                  <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary leading-tight">
                    Diseñemos el Menú Perfecto para tu Ocasión
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    Diligencia el formulario y nuestro equipo gastronómico te enviará una propuesta formal detallada en menos de 12 horas hábiles.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        pin_drop
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          Cobertura Geográfica
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Ámsterdam y alrededores.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        call
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          ¿Atención Urgente?
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Escríbenos directamente a WhatsApp: +31 6 84 92 01 94
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-bright/70">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        receipt_long
                      </span>
                      <div>
                        <p className="font-headline font-bold text-xs uppercase tracking-wider text-primary">
                          Facturación Empresas
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Emitimos factura con BTW desgolsado apta para deducibilidad corporativa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-xs">
                  <div className="space-y-6" id="catering-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="event-type">
                          Tipo de Evento *
                        </label>
                        <select className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="event-type" required>
                          <option value="">
                            Selecciona una opción
                          </option>
                          <option value="Corporativo">
                            Evento Corporativo / Empresa
                          </option>
                          <option value="Cumpleaños">
                            Cumpleaños / Celebración Familiar
                          </option>
                          <option value="Boda">
                            Boda / Compromiso
                          </option>
                          <option value="Privado">
                            Cena Privada / Amigos
                          </option>
                          <option value="Comunitario">
                            Festival / Evento Comunitario
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="guest-count">
                          Número de Invitados *
                        </label>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="guest-count" max="500" min="10" placeholder="Ej. 35 personas" required type="number" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="event-date">
                          Fecha Estimada *
                        </label>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="event-date" required type="date" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="city">
                          Ciudad o Código Postal en NL *
                        </label>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="city" placeholder="Ej. Ámsterdam 1012" required type="text" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="package-select">
                        Paquete de Interés *
                      </label>
                      <select className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="package-select" required defaultValue="Banquete Criollo Tradicional">
                        {PLATOS_CATERING.map((plato) => (
                          <option key={plato.id} value={plato.nombre}>
                            {plato.nombre} ({formatEUR(plato.precio)} / plato)
                          </option>
                        ))}
                        <option value="Personalizado">
                          Menú Personalizado / A Medida
                        </option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="client-name">
                          Nombre Completo *
                        </label>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="client-name" placeholder="Tu nombre" required type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="client-email">
                          Email de Contacto *
                        </label>
                        {' '}
                        <input className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="client-email" placeholder="nombre@correo.com" required type="email" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="dietary-notes">
                        Comentarios &amp; Restricciones Dietéticas
                      </label>
                      <textarea className="w-full bg-surface-container-low text-on-surface text-sm rounded-lg px-4 py-3 focus:outline-hidden focus:bg-surface-container-lowest transition-colors" id="dietary-notes" placeholder="Indica si requieres opciones vegetarianas, sin gluten, vajilla tradicional o servicio de meseros..." rows={3}></textarea>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-surface-container text-primary font-medium text-sm flex items-center gap-3" id="form-success">
                      <span className="material-symbols-outlined text-secondary">
                        check_circle
                      </span>
                      {' '}
                      <span>
                        ¡Solicitud enviada con éxito! Te contactaremos con la cotización en menos de 12h.
                      </span>
                    </div>
                    <Go href="/catering/reservar" className="w-full py-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2" id="submit-btn" type="button">
                      <span className="material-symbols-outlined text-lg">
                        send
                      </span>
                      {' '}Enviar Solicitud de Reserva
                    </Go>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                    Experiencias Reales
                  </span>
                  <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">
                    La Huella de Paisabor en Eventos
                  </h2>
                </div>
                <p className="text-sm text-on-surface-variant max-w-md">
                  Más de 80 eventos realizados durante el último año en espacios emblemáticos y salones corporativos neerlandeses.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-xs">
                  <div className="flex text-secondary text-sm">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-sm text-on-surface italic leading-relaxed">
                    "Contratamos el Banquete Criollo para 60 personas en nuestra oficina en Zuidas (Ámsterdam). La lechona llegó con la piel crujiente y caliente, y los colegas neerlandeses quedaron fascinados."
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs">
                      MC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">
                        Marcela &amp; Team Lead
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Tech Hub Ámsterdam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-xs">
                  <div className="flex text-secondary text-sm">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-sm text-on-surface italic leading-relaxed">
                    "El servicio de café de especialidad y antojitos para los 50 años de mi esposo en Ámsterdam fue un éxito rotundo. Las empanadas son idénticas a las que comíamos en Cali."
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs">
                      JV
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">
                        Jan &amp; Valentina Van Dijk
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Celebración en Ámsterdam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-xs">
                  <div className="flex text-secondary text-sm">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-sm text-on-surface italic leading-relaxed">
                    "Impecables en tiempos, presentación y manejo de normas de salubridad. La sobrebarriga en salsa criolla del menú Hacienda fue sublime. Repetiremos sin duda."
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs">
                      AR
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary">
                        Alejandro Restrepo
                      </p>
                      <p className="text-[11px] text-on-surface-variant">
                        Boda en Ámsterdam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto rounded-xl bg-surface-container-lowest p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                  Nuestro Centro de Producción
                </span>
                <h3 className="font-headline font-bold text-2xl text-primary">
                  Atelier &amp; Cocina Central en Ámsterdam
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
