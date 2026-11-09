import Link from 'next/link';

export const metadata = { title: 'Política de privacidad — Paisabor' };

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 space-y-6">
      <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">Política de privacidad</h1>
      {/* TODO: texto legal (RGPD / AVG) */}
      <p className="text-on-surface-variant leading-relaxed">TODO: texto legal.</p>
      <Link href="/registro" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
        <span className="material-symbols-outlined text-base">arrow_back</span>
        Volver al registro
      </Link>
    </main>
  );
}
