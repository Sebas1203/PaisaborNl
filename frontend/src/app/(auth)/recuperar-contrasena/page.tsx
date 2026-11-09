// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/recuperar_contrase_a_paisabor
// y conectado a authService.resetPassword (MOCK: no envía ningún correo).
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { AvisoError } from '@/components/ui/Estados';
import { EMAIL_CONTACTO, whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { authService, mensajeDeError } from '@/services';
import { validarEmail } from '@/services/auth';

export default function RecuperarContrasenaPage() {
  const [email, setEmail] = useState('');
  const [errorCampo, setErrorCampo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const invalido = validarEmail(email);
    setErrorCampo(invalido);
    if (invalido) return;
    setError(null);
    setEnviando(true);
    try {
      await authService.resetPassword(email);
      setEnviado(true);
    } catch (err) {
      setError(mensajeDeError(err));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="bg-background font-body text-on-surface antialiased">
      <main className="w-full min-h-screen bg-background flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md mx-auto my-auto relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary-fixed/25 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-xs transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-6">
                <BrandLogo size="lg" />
              </div>
              <span className="text-[11px] font-label uppercase tracking-widest text-secondary font-semibold mb-2">Paisabor · Ámsterdam</span>
              <h1 className="font-headline text-2xl sm:text-3xl text-primary font-bold tracking-tight mb-3">Recuperar Contraseña</h1>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8 max-w-xs">
                Ingresa tu correo electrónico registrado y te enviaremos instrucciones para restablecer tu contraseña.
              </p>
            </div>
            {enviado ? (
              <div role="status" className="p-4 rounded-lg bg-surface-container-low text-left">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">mark_email_read</span>
                  <div className="space-y-1">
                    <p className="font-headline text-sm font-semibold text-primary">Solicitud recibida</p>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                      Si el correo existe, enviaremos instrucciones para crear una nueva contraseña.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={enviar} className="space-y-6">
                <div className="space-y-2 text-left">
                  <label className="block font-label text-xs uppercase tracking-wider text-on-surface font-semibold" htmlFor="recovery-email">
                    Correo electrónico
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline group-focus-within:text-secondary transition-colors">
                      <span className="material-symbols-outlined text-lg">mail</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline/60 text-sm rounded-lg border-b-2 border-surface-container-highest focus:border-secondary outline-hidden transition-all duration-200 aria-[invalid=true]:border-error"
                      id="recovery-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@correo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={Boolean(errorCampo)}
                      aria-describedby={errorCampo ? 'recovery-email-error' : undefined}
                    />
                  </div>
                  {errorCampo && (
                    <p id="recovery-email-error" className="text-xs text-error">
                      {errorCampo}
                    </p>
                  )}
                </div>
                <AvisoError mensaje={error} />
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 px-6 rounded-lg font-headline font-semibold text-sm tracking-wide shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  <span>{enviando ? 'Enviando…' : 'Enviar instrucciones'}</span>{' '}
                  <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </button>
              </form>
            )}
            <div className="mt-6 p-4 rounded-lg bg-surface-container text-left flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-lg mt-0.5 flex-shrink-0">help_outline</span>
              <div className="font-body text-xs text-on-surface-variant leading-relaxed">
                <span className="font-semibold text-primary">¿No recibiste el correo?</span> Revisa tu carpeta de correo no deseado (spam) o
                contáctanos directamente{' '}
                {EMAIL_CONTACTO ? (
                  <a className="font-semibold text-secondary hover:underline transition-colors" href={`mailto:${EMAIL_CONTACTO}`}>
                    {EMAIL_CONTACTO}
                  </a>
                ) : (
                  <a
                    className="font-semibold text-secondary hover:underline transition-colors"
                    href={whatsappLink('Hola Paisabor, no recibí el correo para recuperar mi contraseña.')}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    por WhatsApp al {WHATSAPP_DISPLAY}
                  </a>
                )}
                .
              </div>
            </div>
            <div className="mt-8 pt-6 flex flex-col items-center gap-3 text-center">
              <Link className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary font-label tracking-wide transition-colors group" href="/login">
                <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-0.5">arrow_back</span> Volver a Iniciar Sesión
              </Link>
              <p className="font-body text-xs text-on-surface-variant">
                ¿No tienes cuenta aún?{' '}
                <Link className="font-semibold text-secondary hover:underline ml-1 transition-colors" href="/registro">
                  Crear cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
