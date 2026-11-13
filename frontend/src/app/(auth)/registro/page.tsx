// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/crear_cuenta_paisabor
// y conectado a useAuth().signUp con validación y aceptación de términos.
'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { AvisoError } from '@/components/ui/Estados';
import { leerPedidoCreado } from '@/features/orders/PedidoCreado';
import { destinoSeguro } from '@/lib/navegacion';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError } from '@/services';
import { validarEmail, validarNombre, validarPassword, validarTelefono } from '@/services/auth';

const ESTILOS =
  "@layer base {\n.tierra-btn-primary { background: linear-gradient(135deg, #33210d 0%, #4b3621 100%); transition: all 0.3s ease; }\n.tierra-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(28, 28, 25, 0.15); }\n.input-ghost { border: none; border-bottom: 2px solid #e5e2dd; background-color: transparent; border-radius: 0; padding-left: 0; padding-right: 0; transition: border-color 0.3s ease; }\n.input-ghost:focus { outline: none; box-shadow: none; border-color: #994621; }\n.input-ghost[aria-invalid=true] { border-color: #ba1a1a; }\n}";

type Campo = 'nombre' | 'email' | 'telefono' | 'password' | 'confirmacion' | 'terminos';

function Error({ id, mensaje }: { id: string; mensaje?: string | null }) {
  return mensaje ? (
    <p id={id} className="mt-1 text-xs text-error">
      {mensaje}
    </p>
  ) : null;
}

function RegistroForm() {
  const { signUp } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next');
  const desdePedido = params.get('desde') === 'pedido';
  const [datos, setDatos] = useState({ nombre: '', email: '', telefono: '', password: '', confirmacion: '' });

  // Viene de la confirmación de una compra sin cuenta: rellena nombre y correo de ese pedido
  useEffect(() => {
    if (!desdePedido) return;
    const pedido = leerPedidoCreado();
    if (pedido) setDatos((d) => ({ ...d, nombre: d.nombre || pedido.nombre, email: d.email || pedido.email }));
  }, [desdePedido]);
  const [terminos, setTerminos] = useState(false);
  const [errores, setErrores] = useState<Partial<Record<Campo, string | null>>>({});
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const cambiar = (campo: keyof typeof datos) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setDatos((d) => ({ ...d, [campo]: e.target.value }));

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const nuevos: Partial<Record<Campo, string | null>> = {
      nombre: validarNombre(datos.nombre),
      email: validarEmail(datos.email),
      telefono: validarTelefono(datos.telefono),
      password: validarPassword(datos.password),
      confirmacion: datos.confirmacion === datos.password ? null : 'Las contraseñas no coinciden.',
      terminos: terminos ? null : 'Debes aceptar los términos y la política de privacidad.',
    };
    setErrores(nuevos);
    if (Object.values(nuevos).some(Boolean)) return;
    setError(null);
    setEnviando(true);
    try {
      await signUp({ nombre: datos.nombre, email: datos.email, telefono: datos.telefono, password: datos.password });
      router.replace(destinoSeguro(next, '/catalogo'));
      router.refresh();
    } catch (err) {
      setError(mensajeDeError(err));
      setEnviando(false);
    }
  }

  const input = (campo: keyof typeof datos, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50"
      id={campo}
      name={campo}
      value={datos[campo]}
      onChange={cambiar(campo)}
      aria-invalid={Boolean(errores[campo])}
      aria-describedby={errores[campo] ? `${campo}-error` : undefined}
      {...props}
    />
  );

  return (
    <form noValidate onSubmit={enviar} className="space-y-6">
      <div>
        <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="nombre">
          Nombre completo
        </label>
        {input('nombre', { type: 'text', autoComplete: 'name', placeholder: 'Tu nombre y apellidos' })}
        <Error id="nombre-error" mensaje={errores.nombre} />
      </div>
      <div>
        <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="email">
          Email
        </label>
        {input('email', { type: 'email', autoComplete: 'email', placeholder: 'tu@correo.com' })}
        <Error id="email-error" mensaje={errores.email} />
      </div>
      <div>
        <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="telefono">
          Teléfono <span className="text-outline">(opcional)</span>
        </label>
        {input('telefono', { type: 'tel', autoComplete: 'tel', placeholder: '+31 6 …' })}
        <Error id="telefono-error" mensaje={errores.telefono} />
      </div>
      <div className="space-y-6 pt-4 mt-4 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-surface-container"></div>
        <div>
          <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="password">
            Contraseña
          </label>
          {input('password', { type: 'password', autoComplete: 'new-password', placeholder: 'Mínimo 8 caracteres' })}
          <Error id="password-error" mensaje={errores.password} />
        </div>
        <div>
          <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="confirmacion">
            Confirmar Contraseña
          </label>
          {input('confirmacion', { type: 'password', autoComplete: 'new-password', placeholder: '••••••••' })}
          <Error id="confirmacion-error" mensaje={errores.confirmacion} />
        </div>
      </div>
      <div className="pt-2">
        <label className="flex items-start gap-3 font-body text-xs text-on-surface-variant leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            checked={terminos}
            onChange={(e) => setTerminos(e.target.checked)}
            className="form-checkbox mt-0.5 rounded-sm text-secondary focus:ring-secondary"
            aria-invalid={Boolean(errores.terminos)}
            aria-describedby={errores.terminos ? 'terminos-error' : undefined}
          />
          <span>
            Acepto los{' '}
            <Link className="text-secondary hover:text-primary transition-colors underline decoration-secondary/30 underline-offset-2" href="/terminos" target="_blank">
              Términos de Servicio
            </Link>{' '}
            y la{' '}
            <Link className="text-secondary hover:text-primary transition-colors underline decoration-secondary/30 underline-offset-2" href="/privacidad" target="_blank">
              Política de Privacidad
            </Link>
            .
          </span>
        </label>
        <Error id="terminos-error" mensaje={errores.terminos} />
      </div>
      <AvisoError mensaje={error} />
      <button
        type="submit"
        disabled={enviando}
        className="w-full py-4 rounded-lg text-on-primary font-label font-medium tracking-wide tierra-btn-primary flex justify-center items-center gap-2 group disabled:opacity-60"
      >
        {enviando ? 'Creando cuenta…' : 'Crear Cuenta'}{' '}
        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </form>
  );
}

export default function RegistroPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ESTILOS }} />
      <div className="bg-background text-on-background font-body min-h-screen flex flex-col md:flex-row antialiased">
        <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative flex-col justify-between p-12">
          <div className="absolute inset-0 z-0">
            <img alt="Paisabor" className="object-contain w-full h-full" src="/images/logo/paisabor-logo-192.png" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10">
            <BrandLogo size="lg" withText textClassName="text-on-primary" priority />
          </div>
          <div className="relative z-10 max-w-lg mt-auto">
            <h2 className="font-headline text-display-lg text-on-primary font-bold leading-tight mb-4 tracking-tighter">Únete a la familia.</h2>
            <p className="font-body text-lg text-surface-container-low/90">
              Llevamos el calor y los sabores de Colombia directamente a tu hogar en los Países Bajos.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 bg-surface min-h-screen relative z-10 shadow-[-40px_0_40px_-10px_rgba(28,28,25,0.05)]">
          <div className="md:hidden mb-12 text-center">
            <BrandLogo size="md" withText />
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <h1 className="font-headline text-3xl font-bold text-primary mb-2">Crear Cuenta</h1>
              <p className="font-body text-on-surface-variant">Completa tus datos para empezar.</p>
            </div>
            <Suspense fallback={null}>
              <RegistroForm />
            </Suspense>
            <div className="mt-8 text-center">
              <p className="font-body text-sm text-on-surface-variant">
                ¿Ya tienes una cuenta?{' '}
                <Link className="font-medium text-secondary hover:text-primary transition-colors ml-1" href="/login">
                  Inicia Sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
