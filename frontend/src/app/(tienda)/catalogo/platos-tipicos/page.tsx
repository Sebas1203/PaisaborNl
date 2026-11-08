// Basado en docs/diseno-stitch/pantallas/men_de_platos_t_picos, con el menú real (src/data):
// PLATOS (se piden al momento) y ESPECIALES (fin de semana, bajo reserva).
import Link from 'next/link';
import { ItemImage } from '@/components/ItemImage';
import { ESPECIALES, PLATOS, type Plato } from '@/data';
import { AddToCartButton } from '@/features/cart/AddToCartButton';
import { formatDias, formatEUR, IVA_INCLUIDO } from '@/lib/format';

const platos = PLATOS.filter((p) => p.disponible);
const especiales = ESPECIALES.filter((p) => p.disponible);

export default function PlatosTipicosPage() {
  const [destacado, ...resto] = platos;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n.texture-bg { background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23584000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\"); }\n.glass-panel { background: rgba(252, 249, 244, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }\n}" }} />
      <div className="antialiased min-h-screen flex flex-col pt-24 pb-20 md:pb-0">
        <main className="flex-grow flex flex-col">
          <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-low texture-bg">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center md:text-left mt-12 md:mt-0">
              <span className="font-label font-medium text-secondary tracking-widest uppercase text-sm mb-4 block">
                Platos Típicos
              </span>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-primary tracking-tight leading-tight -ml-1 md:w-3/4">
                El sabor
                <br />
                de casa.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Platos típicos colombianos preparados con receta tradicional antioqueña, en Ámsterdam.
              </p>
              <p className="mt-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Precios en euros · {IVA_INCLUIDO}
              </p>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 w-full">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-outline-variant/15 pb-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary tracking-tight">Nuestros Platos</h2>
              <div className="flex gap-4 mt-4 md:mt-0">
                <span className="font-label text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">local_shipping</span> Domicilio
                </span>
                <span className="font-label text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">takeout_dining</span> Para llevar
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {destacado && <PlatoDestacado plato={destacado} />}
              {resto.map((plato) => (
                <PlatoCard key={plato.id} plato={plato} />
              ))}
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24 w-full">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-outline-variant/15 pb-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary tracking-tight">
                Especiales de fin de semana
              </h2>
              <span className="mt-4 md:mt-0 font-label text-sm text-on-surface-variant">Solo fines de semana · bajo reserva</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {especiales.map((plato) => (
                <PlatoCard key={plato.id} plato={plato} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function Precio({ plato, className }: { plato: Plato; className: string }) {
  return (
    <span className={className}>
      {formatEUR(plato.precio)}
      {/* precio provisional si precioEstimado */}
      {plato.precioEstimado && <span className="block text-xs font-normal text-on-surface-variant">Precio estimado</span>}
    </span>
  );
}

function EtiquetaEspecial({ plato }: { plato: Plato }) {
  if (!plato.bajoReserva) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label text-xs">
        Solo fines de semana · bajo reserva
      </span>
      <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full font-label text-xs">
        {formatDias(plato.dias)}
      </span>
    </div>
  );
}

function PlatoDestacado({ plato }: { plato: Plato }) {
  return (
    <article className="md:col-span-12 lg:col-span-8 group relative bg-surface-container-lowest rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <ItemImage
          src={plato.imagen}
          alt={plato.nombre}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(28,28,25,0.1)]"></div>
      </div>
      <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-between bg-surface-container-lowest relative z-10">
        <div>
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary tracking-tight">{plato.nombre}</h3>
            <Precio plato={plato} className="font-headline font-semibold text-xl text-secondary text-right" />
          </div>
          {plato.descripcion && <p className="font-body text-on-surface-variant leading-relaxed mb-6">{plato.descripcion}</p>}
        </div>
        <AddToCartButton
          itemId={plato.id}
          href="/carrito"
          className="mt-6 w-full bg-primary text-on-primary font-label font-medium py-4 px-6 rounded-xl hover:bg-primary-container transition-colors duration-300 flex items-center justify-center gap-2 active:scale-95"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            add_shopping_cart
          </span>{' '}
          Añadir al Carrito
        </AddToCartButton>
      </div>
    </article>
  );
}

function PlatoCard({ plato }: { plato: Plato }) {
  const accion =
    'w-full bg-secondary-container text-on-secondary-container font-label font-medium py-3 px-4 rounded-xl hover:bg-secondary hover:text-on-secondary transition-colors duration-300 flex items-center justify-center gap-2 active:scale-95';
  return (
    <article className="md:col-span-6 lg:col-span-4 group bg-surface-container-lowest rounded-[1.5rem] p-6 lg:p-8 flex flex-col">
      <div className="w-full h-48 mb-6 relative rounded-xl overflow-hidden">
        <ItemImage
          src={plato.imagen}
          alt={plato.nombre}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <EtiquetaEspecial plato={plato} />
          <div className="flex justify-between items-start mb-3 gap-4">
            <h3 className="font-display font-bold text-xl text-primary tracking-tight">{plato.nombre}</h3>
            <Precio plato={plato} className="font-headline font-semibold text-lg text-secondary text-right" />
          </div>
          {plato.descripcion && (
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">{plato.descripcion}</p>
          )}
        </div>
        {plato.bajoReserva ? (
          // Los especiales se reservan con fecha, no se compran al momento
          <Link className={`mt-6 ${accion}`} href="/menus">
            <span className="material-symbols-outlined">event_available</span> Reservar
          </Link>
        ) : (
          <AddToCartButton itemId={plato.id} className={`mt-6 ${accion}`}>
            <span className="material-symbols-outlined">add</span> Añadir
          </AddToCartButton>
        )}
      </div>
    </article>
  );
}
