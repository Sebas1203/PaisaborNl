// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/crear_cuenta_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function RegistroPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".glass-panel { background: rgba(252, 249, 244, 0.7); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }\n.tierra-btn-primary { background: linear-gradient(135deg, #33210d 0%, #4b3621 100%); transition: all 0.3s ease; }\n.tierra-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(28, 28, 25, 0.15); }\n.input-ghost { border: none; border-bottom: 2px solid #e5e2dd; background-color: transparent; border-radius: 0; padding-left: 0; padding-right: 0; transition: border-color 0.3s ease; }\n.input-ghost:focus { outline: none; box-shadow: none; border-color: #994621; }" }} />
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col md:flex-row antialiased">
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative flex-col justify-between p-12">
        <div className="absolute inset-0 z-0">
          <img alt="Paisabor Kitchen" className="object-cover w-full h-full" data-alt="A warm, inviting scene in a modern Colombian kitchen set in a Dutch home. Sunlight streams through large windows, illuminating a rustic wooden table scattered with fresh ingredients: bright red tomatoes, vibrant yellow corn, and rich dark coffee beans. The atmosphere is high-end yet deeply personal, blending the earthy textures of traditional Colombian cooking with sleek, minimalist European design. The overall palette is grounded in warm roasted browns and soft creamy surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA26qVlCH7CI5W3ok0DbVAzV2wuQu6BOzSV7Zg72o8hGVJYyYqnlGB_tsQqh9g4Ezy-EALtDRc89LC53bXoIQMWTf118VExwXB2S02rKNmK78cEtis8j42I9b4dLlZBlrwvbSzkK_6Fr42o1txTLJPQwCoJ6mnE57PyGVPGn5STElJrTuqj16zbRs6DzQy_ypNgIArD-0Ke0_yrAiUBGDJpAoEEOh8LlunMyPYc0Rd1AkSgz2nM7FoB" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC95Ob11_XuRbXdNGey8I0nz9nKt4MR0GqsfXBPgLHr5BhZYgPnqbDIcNTlNlnXkOaPRQhTUswLwc4qZ2b0TFJU66T4gtctb3zbDmC7EFqdJ7WpkR88NVM9sR_anWZDFG4FKjiNS-888DI8yvuXOK4pm62Q8YRnjEpsWk5xebpg7hAZ4VSjDQ1PS9P02Ro0QnqUvDl63GeuJtrHuu-jgiPdI4_UrhcnTfQM8cR4Pz6OW8hW_BekbqYETjNGyHM7Jvg8kA" alt="Paisabor Logo" className="h-12 w-12 rounded-full object-cover border border-on-primary/20" />
            <h1 className="font-headline text-3xl font-bold text-on-primary tracking-tighter">
              Paisabor
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
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMcfDUWMgMgwtbeh2mspPe_Tag9ZcQjWfGoV0bz-z90fq4Gs6fD3XoKvjr83NMi-mHj1Punu7CE03kBq1iijliGFz7dK5pWh73GCdruTDodTRmhAqkQjchhIzoT4f8s-w8nbUuJpUqJwfsNN1SXn6XgZCk58likxhSoTK-6TChwazvEtUahLv9Okn9aWbOQfuNpb1_UnOhjwWWKcC6qSICkRn49UG5bEGSar8CPmuIFoCGEcngcEPYY6HyMm_RAeojHg" alt="Paisabor Logo" className="h-10 w-10 rounded-full object-cover border border-primary/10" />
            <h1 className="font-headline text-2xl font-bold text-primary tracking-tighter">
              Paisabor
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
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="nombre" name="nombre" placeholder="Ej. Carlos" required type="text" />
              </div>
              <div className="w-full">
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="apellido">
                  Apellido
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="apellido" name="apellido" placeholder="Ej. Restrepo" required type="text" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block font-label text-sm text-on-surface-variant mb-1" htmlFor="email">
                  Email
                </label>
                {' '}
                <input className="form-input w-full input-ghost text-primary placeholder:text-outline-variant/50" id="email" name="email" placeholder="carlos@ejemplo.com" required type="email" />
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
