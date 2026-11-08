// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/crear_cuenta_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';
import { BrandLogo } from '@/components/BrandLogo';

export default function RegistroPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n.glass-panel { background: rgba(252, 249, 244, 0.7); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }\n.tierra-btn-primary { background: linear-gradient(135deg, #33210d 0%, #4b3621 100%); transition: all 0.3s ease; }\n.tierra-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(28, 28, 25, 0.15); }\n.input-ghost { border: none; border-bottom: 2px solid #e5e2dd; background-color: transparent; border-radius: 0; padding-left: 0; padding-right: 0; transition: border-color 0.3s ease; }\n.input-ghost:focus { outline: none; box-shadow: none; border-color: #994621; }\n}" }} />
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col md:flex-row antialiased">
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative flex-col justify-between p-12">
        <div className="absolute inset-0 z-0">
          <img alt="Paisabor" className="object-contain w-full h-full" src="/images/logo/paisabor-logo-192.png" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <h1>
              <BrandLogo size="lg" withText textClassName="text-on-primary" priority />
            </h1>
          </div>
        </div>
        <div className="relative z-10 max-w-lg mt-auto">
          <h2 className="font-headline text-display-lg text-on-primary font-bold leading-tight mb-4 tracking-tighter">
            Únete a la familia.
          </h2>
          <p className="font-body text-lg text-surface-container-low/90">
            Llevamos el calor y los sabores de Colombia directamente a tu hogar en los Países Bajos.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 bg-surface min-h-screen relative z-10 shadow-[-40px_0_40px_-10px_rgba(28,28,25,0.05)]">
        <div className="md:hidden mb-12 text-center">
          <div className="flex items-center justify-center gap-2">
            <h1>
              <BrandLogo size="md" withText />
            </h1>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10">
            <h3 className="font-headline text-3xl font-bold text-primary mb-2">
              Crear Cuenta
            </h3>
            <p className="font-body text-on-surface-variant">
              Completa tus datos para empezar.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="nombre">
                  Nombre
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="nombre" name="nombre" placeholder="Tu nombre" required type="text" />
              </div>
              <div className="w-full">
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="apellido">
                  Apellido
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="apellido" name="apellido" placeholder="Tus apellidos" required type="text" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="email">
                  Email
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="email" name="email" placeholder="tu@correo.com" required type="email" />
              </div>
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="telefono">
                  Teléfono
                </label>
                <div className="flex items-center border-b-2 border-surface-container-highest focus-within:border-secondary transition-colors duration-300">
                  <span className="text-on-surface-variant mr-2">
                    +31
                  </span>
                  {' '}
                  <input className="form-input w-full border-none bg-transparent focus:ring-0 p-0 text-primary placeholder:text-outline-variant/50" id="telefono" name="telefono" placeholder="6 1234 5678" required type="tel" />
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-4 mt-4 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-surface-container"></div>
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="username">
                  Nombre de Usuario
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="username" name="username" placeholder="crepo_89" required type="text" />
              </div>
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="password">
                  Contraseña
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="password" name="password" placeholder="••••••••" required type="password" />
              </div>
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="confirm_password">
                  Confirmar Contraseña
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="confirm_password" name="confirm_password" placeholder="••••••••" required type="password" />
              </div>
            </div>
            <div className="pt-6">
              <p className="font-body text-xs text-on-surface-variant mb-6 leading-relaxed">
                Al crear una cuenta, aceptas nuestros{' '}
                <a className="text-secondary hover:text-primary transition-colors underline decoration-secondary/30 underline-offset-2" href="#">
                  Términos de Servicio
                </a>
                {' '}y{' '}
                <a className="text-secondary hover:text-primary transition-colors underline decoration-secondary/30 underline-offset-2" href="#">
                  Política de Privacidad
                </a>
                .
              </p>
              <Go href="/catalogo" className="w-full py-4 rounded-lg text-on-primary font-label font-medium tracking-wide tierra-btn-primary flex justify-center items-center gap-2 group" type="button">
                Crear Cuenta{' '}
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Go>
            </div>
          </div>
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
