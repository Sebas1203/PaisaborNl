// Primera versión de "Quiénes somos". No hay pantalla en el diseño de Stitch: usa el mismo estilo
// que /catering. Solo muestra datos confirmados (catálogo, sede y contacto); el resto va como TODO.
import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { ItemImage } from '@/components/ItemImage';
import { whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { SEDES } from '@/config/sedes';
import { CATEGORIAS_PRODUCTO, ESPECIALES, PLATOS, PRODUCTOS } from '@/data';
import { IVA_INCLUIDO } from '@/lib/format';

export const metadata = {
  title: 'Quiénes somos — Paisabor',
  description: 'Paisabor: comida colombiana con receta tradicional antioqueña en Ámsterdam.',
};

// TODO: historia real de Paisabor (cómo y cuándo empezó, quién cocina) a confirmar con Diana.
// Mientras tanto el texto solo describe lo que ya ofrece el negocio, sin fechas ni nombres.
const HISTORIA = [
  'Paisabor nace para compartir en Ámsterdam la cocina de casa de Antioquia: los platos que se comen en familia, preparados con receta tradicional antioqueña.',
  'Cocinamos para quienes extrañan el sabor de Colombia y para quienes quieren descubrirlo: platos típicos, especiales de fin de semana, empanadas, fritos y bebidas, y catering para eventos.',
];

const PLATO_PORTADA = PLATOS[0];

const OFERTA = [
  {
    icono: 'restaurant',
    titulo: 'Platos típicos',
    texto: `${PLATOS.length} platos de nuestro menú, de la bandeja paisa al bowl montañero.`,
    href: '/catalogo/platos-tipicos',
    enlace: 'Ver el menú',
  },
  {
    icono: 'event',
    titulo: 'Especiales de fin de semana',
    texto: `${ESPECIALES.length} preparaciones que hacemos solo sábados o domingos, bajo reserva.`,
    href: '/menus',
    enlace: 'Ver especiales',
  },
  {
    icono: 'storefront',
    titulo: CATEGORIAS_PRODUCTO.map((c) => c.nombre).join(', '),
    texto: `${PRODUCTOS.length} productos para acompañar o llevar.`,
    href: '/catalogo/productos',
    enlace: 'Ver productos',
  },
  {
    icono: 'celebration',
    titulo: 'Catering para eventos',
    texto: 'Elige varios platos y porciones para tu celebración o evento de empresa y te enviamos el presupuesto.',
    href: '/catering',
    enlace: 'Pedir presupuesto',
  },
];

const COMPROMISOS = [
  { icono: 'soup_kitchen', titulo: 'Receta tradicional antioqueña', texto: 'Preparamos cada plato como se hace en casa, con el sabor de siempre.' },
  { icono: 'euro', titulo: 'Precios claros', texto: `Todos los precios de la tienda tienen el ${IVA_INCLUIDO.replace('IVA', 'IVA (BTW)')}. Sin sorpresas al pagar.` },
  { icono: 'local_mall', titulo: 'Recoger o a domicilio', texto: 'Recoge tu pedido en nuestra sede o pídelo a domicilio en Ámsterdam (coste de envío por confirmar).' },
  { icono: 'chat', titulo: 'Trato cercano', texto: 'Cualquier duda sobre tu pedido o tu evento la resolvemos directamente por WhatsApp.' },
];

export default function QuienesSomosPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="w-full pt-20 bg-surface">
        <section className="relative w-full bg-primary text-surface-bright py-16 md:py-24 px-6 lg:px-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-bright/10 text-xs font-label uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Quiénes somos
              </span>
              <h1 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]">Paisabor: el sabor de casa en Ámsterdam</h1>
              <p className="text-base sm:text-lg text-primary-fixed leading-relaxed max-w-2xl font-light">
                Comida colombiana con receta tradicional antioqueña, para llevar a casa o compartir en tu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/catalogo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary hover:bg-secondary/90 text-on-secondary font-medium tracking-wide transition-colors">
                  <span className="material-symbols-outlined text-lg">storefront</span> Ver el catálogo
                </Link>
                <a
                  href={whatsappLink('Hola Paisabor, quiero saber más sobre ustedes.')}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">chat</span> Escríbenos por WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 bg-surface-container-low shadow-2xl">
                {/* TODO: foto real del local o del equipo de Paisabor */}
                <ItemImage src={PLATO_PORTADA?.imagen} alt={PLATO_PORTADA?.nombre ?? 'Paisabor'} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-lg">
                  <BrandLogo size="sm" withText />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Nuestra historia</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">Cocina de casa, lejos de casa</h2>
            {HISTORIA.map((parrafo) => (
              <p key={parrafo} className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Qué preparamos</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">Lo que encuentras en Paisabor</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OFERTA.map((o) => (
                <Link key={o.titulo} href={o.href} className="group bg-surface-container-lowest p-7 rounded-xl shadow-xs hover:shadow-lg transition-all flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">{o.icono}</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-primary">{o.titulo}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{o.texto}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    {o.enlace} <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Cómo trabajamos</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">Nuestro compromiso</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPROMISOS.map((c) => (
                <div key={c.titulo} className="flex items-start gap-4 p-6 rounded-xl bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-3xl">{c.icono}</span>
                  <div>
                    <h3 className="font-headline font-bold text-primary">{c.titulo}</h3>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{c.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">Dónde estamos</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-primary tracking-tight">Ven a vernos</h2>
              <p className="text-on-surface-variant leading-relaxed">Puedes recoger tus pedidos en nuestra sede. Muy pronto abriremos una segunda sede.</p>
            </div>
            <div className="space-y-4">
              {SEDES.map((sede) => (
                <div key={sede.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-xs flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">pin_drop</span>
                  <div className="space-y-1">
                    <h3 className="font-headline font-bold text-lg text-primary">{sede.nombre}</h3>
                    <p className="text-sm text-on-surface-variant">
                      {sede.direccion}, {sede.ciudad} · {sede.pais}
                    </p>
                    {/* TODO: horarios de la sede */}
                    <p className="text-sm text-on-surface-variant">Horarios por confirmar</p>
                    {sede.recoger && <p className="text-xs font-semibold text-secondary">Punto de recogida de pedidos</p>}
                  </div>
                </div>
              ))}
              {/* TODO: dirección de la segunda sede cuando abra */}
              <div className="p-6 rounded-xl border-2 border-dashed border-outline-variant/40 flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-3xl">add_location_alt</span>
                <p className="text-sm">
                  <strong className="text-primary">Segunda sede:</strong> abre pronto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto rounded-xl bg-primary text-on-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="font-headline font-bold text-2xl sm:text-3xl">¿Hablamos?</h2>
              <p className="text-primary-fixed">Escríbenos por WhatsApp al {WHATSAPP_DISPLAY} y te ayudamos con tu pedido o tu evento.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink('Hola Paisabor, tengo una consulta.')}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-semibold hover:bg-secondary/90 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">chat</span> Escríbenos por WhatsApp
              </a>
              <Link href="/catering" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-bright/10 hover:bg-surface-bright/20 font-semibold transition-colors">
                <span className="material-symbols-outlined text-lg">celebration</span> Catering
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
