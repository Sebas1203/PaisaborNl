// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/iniciar_sesi_n_paisabor
// y conectado a useAuth: validación, errores en español, estado de carga y cuentas demo.
'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { AvisoError } from '@/components/ui/Estados';
import { DEMO_ADMIN, DEMO_CLIENTE, demoDisponible, type CuentaDemo } from '@/config/demo';
import { destinoSeguro, inicioPorRol } from '@/lib/navegacion';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError } from '@/services';
import { validarEmail, validarPassword } from '@/services/auth';

const inputClass =
  'form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest px-0 py-2 text-on-surface font-body text-lg focus:ring-0 focus:border-secondary transition-colors placeholder:text-outline-variant/50 aria-[invalid=true]:border-error';

function LoginForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const next = useSearchParams().get('next');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verPassword, setVerPassword] = useState(false);
  const [errores, setErrores] = useState<{ email?: string | null; password?: string | null }>({});
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function entrar(correo: string, clave: string) {
    setError(null);
    setEnviando(true);
    try {
      const usuario = await signIn(correo, clave);
      router.replace(destinoSeguro(next, inicioPorRol(usuario.rol)));
      router.refresh();
    } catch (e) {
      setError(mensajeDeError(e));
      setEnviando(false);
    }
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const nuevos = { email: validarEmail(email), password: validarPassword(password) };
    setErrores(nuevos);
    if (nuevos.email || nuevos.password) return;
    void entrar(email, password);
  }

  const demos: { etiqueta: string; cuenta: CuentaDemo }[] = [
    { etiqueta: 'Entrar como cliente demo', cuenta: DEMO_CLIENTE },
    { etiqueta: 'Entrar como admin demo', cuenta: DEMO_ADMIN },
  ].filter((d) => demoDisponible(d.cuenta));

  return (
    <form noValidate onSubmit={enviar} className="flex flex-col gap-8">
      <div className="relative group">
        <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="email">
          Correo electrónico
        </label>
        <div className="relative">
          <input
            className={inputClass}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errores.email)}
            aria-describedby={errores.email ? 'email-error' : undefined}
          />{' '}
          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-secondary transition-colors">
            mail
          </span>
        </div>
        {errores.email && (
          <p id="email-error" className="mt-1.5 text-xs text-error">
            {errores.email}
          </p>
        )}
      </div>
      <div className="relative group">
        <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="password">
          Contraseña
        </label>
        <div className="relative">
          <input
            className={inputClass}
            id="password"
            name="password"
            type={verPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={Boolean(errores.password)}
            aria-describedby={errores.password ? 'password-error' : undefined}
          />{' '}
          <button
            aria-label={verPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant hover:text-secondary group-focus-within:text-secondary transition-colors"
            type="button"
            onClick={() => setVerPassword((v) => !v)}
          >
            <span className="material-symbols-outlined">{verPassword ? 'visibility_off' : 'visibility'}</span>
          </button>
        </div>
        {errores.password && (
          <p id="password-error" className="mt-1.5 text-xs text-error">
            {errores.password}
          </p>
        )}
      </div>
      <div className="flex justify-end -mt-4">
        <Link className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300" href="/recuperar-contrasena">
          ¿Olvidé mi contraseña?
        </Link>
      </div>
      <AvisoError mensaje={error} />
      <button
        type="submit"
        disabled={enviando}
        className="w-full mt-4 bg-primary text-on-primary font-headline font-bold text-lg py-4 rounded-lg hover:bg-primary-container hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {enviando ? 'Entrando…' : 'Entrar'}
      </button>
      {demos.length > 0 && (
        <div className="-mt-2 space-y-2">
          <p className="text-center text-[11px] font-label uppercase tracking-widest text-on-surface-variant">Modo demo</p>
          {demos.map(({ etiqueta, cuenta }) => (
            <button
              key={etiqueta}
              type="button"
              disabled={enviando}
              onClick={() => void entrar(cuenta.email, cuenta.password)}
              className="w-full py-3 rounded-lg bg-surface-container-high text-primary font-label font-semibold text-sm hover:bg-surface-container-highest transition-colors disabled:opacity-60"
            >
              {etiqueta}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen w-full relative overflow-hidden flex items-center justify-center py-10">
      <div className="absolute inset-0 z-0 bg-linear-to-t from-primary/80 via-primary/40 to-surface/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-surface/20 backdrop-blur-xs"></div>
      <main className="relative z-10 w-full max-w-md mx-4 md:mx-auto bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_40px_-10px_rgba(28,28,25,0.05)]">
        <header className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-surface-container-high border border-surface-container-highest overflow-hidden flex items-center justify-center shadow-xs">
              <BrandLogo size="lg" priority />
            </div>
          </div>
          <h1 className="font-headline text-display text-4xl md:text-5xl font-extrabold text-primary tracking-tighter mb-2 mt-2">
            Paisabor
          </h1>
          <p className="font-body text-on-surface-variant text-sm md:text-base">Del Corazón de Colombia</p>
        </header>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
        <div className="mt-10 text-center border-t border-surface-container-highest pt-6">
          <p className="font-body text-on-surface-variant text-sm">
            ¿Aún no tienes el sabor en casa?{' '}
            <Link className="font-headline font-bold text-secondary hover:text-primary transition-colors ml-1" href="/registro">
              Crear cuenta
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
