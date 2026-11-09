// Login del panel de administración. No existe una pantalla propia en el diseño de Stitch:
// usa el mismo estilo que iniciar_sesi_n_paisabor. Solo deja entrar a cuentas con rol admin.
'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { AvisoError } from '@/components/ui/Estados';
import { DEMO_ADMIN, demoDisponible } from '@/config/demo';
import { destinoSeguro } from '@/lib/navegacion';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError } from '@/services';
import { validarEmail, validarPassword } from '@/services/auth';

const inputClass =
  'form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest px-0 py-2 text-on-surface font-body text-lg focus:ring-0 focus:border-secondary transition-colors placeholder:text-outline-variant/50 aria-[invalid=true]:border-error';

function AdminLoginForm() {
  const { signIn, signOut } = useAuth();
  const router = useRouter();
  const next = useSearchParams().get('next');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState<{ email?: string | null; password?: string | null }>({});
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function entrar(correo: string, clave: string) {
    setError(null);
    setEnviando(true);
    try {
      const usuario = await signIn(correo, clave);
      if (usuario.rol !== 'admin') {
        await signOut();
        throw new Error('sin-permiso');
      }
      router.replace(destinoSeguro(next, '/admin'));
      router.refresh();
    } catch (e) {
      setError(e instanceof Error && e.message === 'sin-permiso' ? 'Esta cuenta no tiene acceso al panel de administración.' : mensajeDeError(e));
      setEnviando(false);
    }
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const nuevos = { email: validarEmail(email), password: validarPassword(password) };
    setErrores(nuevos);
    if (!nuevos.email && !nuevos.password) void entrar(email, password);
  }

  return (
    <form noValidate onSubmit={enviar} className="flex flex-col gap-8">
      <div>
        <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="admin-email">
          Correo electrónico
        </label>
        <input
          id="admin-email"
          className={inputClass}
          type="email"
          autoComplete="username"
          placeholder="admin@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errores.email)}
        />
        {errores.email && <p className="mt-1.5 text-xs text-error">{errores.email}</p>}
      </div>
      <div>
        <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="admin-password">
          Contraseña
        </label>
        <input
          id="admin-password"
          className={inputClass}
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={Boolean(errores.password)}
        />
        {errores.password && <p className="mt-1.5 text-xs text-error">{errores.password}</p>}
      </div>
      <AvisoError mensaje={error} />
      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-primary text-on-primary font-headline font-bold text-lg py-4 rounded-lg hover:bg-primary-container hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {enviando ? 'Entrando…' : 'Entrar al panel'}
      </button>
      {demoDisponible(DEMO_ADMIN) && (
        <button
          type="button"
          disabled={enviando}
          onClick={() => void entrar(DEMO_ADMIN.email, DEMO_ADMIN.password)}
          className="-mt-4 w-full py-3 rounded-lg bg-surface-container-high text-primary font-label font-semibold text-sm hover:bg-surface-container-highest transition-colors disabled:opacity-60"
        >
          Entrar como admin demo
        </button>
      )}
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="bg-surface-container-low font-body text-on-surface min-h-screen w-full flex items-center justify-center py-10">
      <main className="w-full max-w-md mx-4 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_40px_-10px_rgba(28,28,25,0.08)]">
        <header className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <BrandLogo size="lg" priority />
          </div>
          <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-semibold">Panel interno</span>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-primary tracking-tighter mt-1">Administración</h1>
          <p className="font-body text-on-surface-variant text-sm mt-2">Acceso solo para el equipo de Paisabor.</p>
        </header>
        <Suspense fallback={null}>
          <AdminLoginForm />
        </Suspense>
        <div className="mt-10 text-center border-t border-surface-container-highest pt-6">
          <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors" href="/catalogo">
            <span className="material-symbols-outlined text-base">storefront</span> Volver a la tienda
          </Link>
        </div>
      </main>
    </div>
  );
}
