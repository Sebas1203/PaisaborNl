import Link from 'next/link';

export const metadata = { title: 'Términos — Paisabor (prototipo)' };

// TODO (antes de abrir la tienda real): términos y condiciones de venta definitivos.
export default function TerminosPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 space-y-6">
      <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">Términos</h1>
      <div role="note" className="flex items-start gap-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed p-4">
        <span className="material-symbols-outlined shrink-0">science</span>
        <p className="text-sm leading-relaxed">
          <strong>Esta web es un prototipo de prueba.</strong> Los pedidos y las solicitudes de catering que hagas aquí no son compras reales: no
          se cobra nada, no se preparan ni se entregan, y no generan ningún compromiso para ti ni para Paisabor.
        </p>
      </div>
      <section className="rounded-xl bg-surface-container-low p-5 space-y-2">
        <h2 className="font-headline text-base font-bold text-primary">Provisional</h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Los términos y condiciones de venta (precios y pagos, entregas, cancelaciones y devoluciones, alérgenos y reclamaciones) están
          pendientes y se publicarán antes de abrir la tienda real.
        </p>
      </section>
      <p className="text-sm text-on-surface-variant">
        Sobre tus datos, consulta la página de{' '}
        <Link href="/privacidad" className="text-secondary font-semibold hover:underline">
          privacidad
        </Link>
        .
      </p>
      <Link href="/" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
        <span className="material-symbols-outlined text-base">arrow_back</span>
        Volver a la tienda
      </Link>
    </main>
  );
}
