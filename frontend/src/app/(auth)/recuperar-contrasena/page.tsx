// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/recuperar_contrase_a_paisabor
/* eslint-disable @next/next/no-img-element */
import { ItemImage } from '@/components/ItemImage';
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function RecuperarContrasenaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full min-h-screen bg-background flex flex-col justify-center items-center px-6 py-12">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-full max-w-md mx-auto my-auto relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary-fixed/25 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-xs transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-primary/5 flex items-center justify-center relative">
                      <ItemImage alt="Artisanal hand-crafted Paisa mascot portrait, warm terracotta and roasted coffee bean tones, minimalist woodblock illustration style, soft textured off-white background with Colombian culinary folklore aesthetic, warm studio lighting." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="absolute -bottom-1 right-1 bg-secondary text-on-secondary p-1 rounded-full flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[14px] leading-none">
                      local_cafe
                    </span>
                  </span>
                </div>
                <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-semibold mb-2">
                  Ámsterdam · Despensa Paisa
                </span>
                <h1 className="font-headline text-2xl sm:text-3xl text-primary font-bold tracking-tight mb-3">
                  Recuperar Contraseña
                </h1>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8 max-w-xs">
                  Ingresa tu correo electrónico registrado y te enviaremos un enlace seguro para restablecer tu contraseña y acceder a tu cuenta de Paisabor.
                </p>
              </div>
              <div className="space-y-6" id="recovery-form">
                <div className="space-y-2 text-left">
                  <label className="block font-label text-xs uppercase tracking-wider text-on-surface font-semibold" htmlFor="recovery-email">
                    Correo electrónico
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline group-focus-within:text-secondary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        mail
                      </span>
                    </div>
                    <input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline/60 text-sm rounded-lg border-b-2 border-surface-container-highest focus:border-secondary outline-hidden transition-all duration-200" id="recovery-email" name="email" placeholder="ejemplo@correo.com" required type="email" />
                  </div>
                  <div className="flex items-start gap-2 pt-1 text-on-surface-variant/80">
                    <span className="material-symbols-outlined text-xs text-secondary mt-0.5 flex-shrink-0">
                      shield
                    </span>
                    <p className="font-body text-xs leading-normal">
                      El enlace tendrá una validez de 60 minutos por razones de seguridad de tu cuenta.
                    </p>
                  </div>
                </div>
                <Go href="/login" className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 px-6 rounded-lg font-headline font-semibold text-sm tracking-wide shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer" id="submit-btn" type="button">
                  <span id="btn-text">
                    Enviar Enlace de Recuperación
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1" id="btn-icon">
                    arrow_forward
                  </span>
                </Go>
              </div>
              <div className="hidden mt-6 p-4 rounded-lg bg-surface-container-low text-left transition-all duration-300" id="feedback-alert">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">
                    mark_email_read
                  </span>
                  <div className="space-y-1">
                    <p className="font-headline text-sm font-semibold text-primary">
                      Enlace de recuperación enviado
                    </p>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                      Hemos enviado las instrucciones a tu bandeja. Sigue los pasos indicados en el correo para crear una nueva clave.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-surface-container text-left flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5 flex-shrink-0">
                  help_outline
                </span>
                <div className="font-body text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-semibold text-primary">
                    ¿No recibiste el correo?
                  </span>
                  {' '}Revisa tu carpeta de correo no deseado (spam) o contacta directamente al taller en{' '}
                  <a className="font-semibold text-secondary hover:underline transition-colors" href="mailto:contacto@paisabor.nl">
                    contacto@paisabor.nl
                  </a>
                  .
                </div>
              </div>
              <div className="mt-8 pt-6 flex flex-col items-center gap-3 text-center">
                <Link className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary font-label tracking-wide transition-colors group" href="/login">
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-0.5">
                    arrow_back
                  </span>
                  {' '}Volver a Iniciar Sesión
                </Link>
                <p className="font-body text-xs text-on-surface-variant">
                  ¿No tienes cuenta aún?{' '}
                  <Link className="font-semibold text-secondary hover:underline ml-1 transition-colors" href="/registro">
                    Crear cuenta
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant/60 font-label text-[11px] tracking-widest uppercase">
              <span>
                Tradición Colombiana
              </span>
              {' '}
              <span>
                •
              </span>
              {' '}
              <span>
                Tostión Local en los Países Bajos
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
