// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/actualizar_perfil_paisabor
// y conectado a useAuth().updateProfile: nombre, teléfono y dirección de entrega.
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { AvisoError } from '@/components/ui/Estados';
import { useAuth } from '@/providers/AuthProvider';
import { mensajeDeError } from '@/services';
import { validarNombre, validarTelefono } from '@/services/auth';

const inputClass =
  'w-full bg-surface-container-low text-on-surface font-body text-sm rounded-lg pl-11 pr-4 py-3 placeholder:text-outline focus:outline-hidden focus:bg-surface-container-lowest transition-colors shadow-inner aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-error';
const labelClass = 'block font-headline text-xs font-bold uppercase tracking-wider text-primary';

function Campo({
  id,
  etiqueta,
  icono,
  error,
  ayuda,
  children,
}: {
  id: string;
  etiqueta: string;
  icono: string;
  error?: string | null;
  ayuda?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className={labelClass} htmlFor={id}>
        {etiqueta}
      </label>
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-lg pointer-events-none">{icono}</span>
        {children}
      </div>
      {error ? (
        <p id={`${id}-error`} className="text-xs text-error pl-1">
          {error}
        </p>
      ) : (
        ayuda && <p className="text-[11px] text-on-surface-variant pl-1">{ayuda}</p>
      )}
    </div>
  );
}

function FormularioPerfil({ nombre: n, telefono: t, direccion: d, email }: { nombre: string; telefono?: string; direccion?: string; email: string }) {
  const { updateProfile } = useAuth();
  const [datos, setDatos] = useState({ nombre: n, telefono: t ?? '', direccion: d ?? '' });
  const [errores, setErrores] = useState<{ nombre?: string | null; telefono?: string | null }>({});
  const [error, setError] = useState<string | null>(null);
  const [guardado, setGuardado] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const cambiar = (campo: keyof typeof datos) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuardado(false);
    setDatos((x) => ({ ...x, [campo]: e.target.value }));
  };

  async function guardar(e: React.FormEvent) {
    e.preventDefault();
    const nuevos = { nombre: validarNombre(datos.nombre), telefono: validarTelefono(datos.telefono) };
    setErrores(nuevos);
    if (nuevos.nombre || nuevos.telefono) return;
    setError(null);
    setGuardando(true);
    try {
      await updateProfile(datos);
      setGuardado(true);
    } catch (err) {
      setError(mensajeDeError(err));
    } finally {
      setGuardando(false);
    }
  }

  return (
    <form noValidate onSubmit={guardar} className="bg-surface-container-lowest rounded-xl shadow-xl shadow-primary/5 p-6 sm:p-8 space-y-6">
      <h2 className="font-headline font-bold text-2xl text-primary tracking-tight">Datos personales y de entrega</h2>
      <Campo id="nombre" etiqueta="Nombre completo *" icono="person" error={errores.nombre}>
        <input
          className={inputClass}
          id="nombre"
          type="text"
          autoComplete="name"
          value={datos.nombre}
          onChange={cambiar('nombre')}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'nombre-error' : undefined}
        />
      </Campo>
      <Campo id="email" etiqueta="Correo electrónico" icono="mail" ayuda="El correo de acceso no se puede cambiar desde aquí.">
        <input className={`${inputClass} opacity-70`} id="email" type="email" value={email} readOnly />
      </Campo>
      <Campo id="telefono" etiqueta="Teléfono / WhatsApp" icono="call" error={errores.telefono} ayuda="Lo usamos para avisarte del estado de tu pedido.">
        <input
          className={inputClass}
          id="telefono"
          type="tel"
          autoComplete="tel"
          placeholder="+31 6 …"
          value={datos.telefono}
          onChange={cambiar('telefono')}
          aria-invalid={Boolean(errores.telefono)}
          aria-describedby={errores.telefono ? 'telefono-error' : undefined}
        />
      </Campo>
      <Campo id="direccion" etiqueta="Dirección de entrega" icono="home_pin" ayuda="Calle, número, código postal y ciudad.">
        <textarea className={`${inputClass} resize-none`} id="direccion" rows={2} autoComplete="street-address" value={datos.direccion} onChange={cambiar('direccion')} />
      </Campo>
      <AvisoError mensaje={error} />
      {guardado && (
        <p role="status" className="flex items-center gap-2 text-sm text-primary bg-tertiary-fixed/40 rounded-lg px-3 py-2.5">
          <span className="material-symbols-outlined text-base text-secondary">check_circle</span> Cambios guardados.
        </p>
      )}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
        <Link href="/perfil" className="px-6 py-3 rounded-lg bg-surface-container-high text-primary text-sm font-label font-semibold text-center hover:bg-surface-container-highest transition-colors">
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={guardando}
          className="px-6 py-3 rounded-lg bg-primary text-on-primary text-sm font-label font-semibold hover:bg-primary-container transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">save</span>
          {guardando ? 'Guardando…' : 'Guardar Cambios'}
        </button>
      </div>
    </form>
  );
}

export default function PerfilEditarPage() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-22rem)]">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
            <div className="mb-10">
              <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-secondary font-semibold mb-2">
                <Link href="/perfil" className="hover:underline">
                  Mi Cuenta
                </Link>
                <span className="text-outline-variant">•</span>
                <span className="text-on-surface-variant">Editar Perfil</span>
              </div>
              <h1 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">Actualizar Perfil</h1>
              <p className="font-body text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                Mantén tus datos al día para que tus pedidos lleguen a tiempo y podamos avisarte de su estado.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <aside className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-primary/5 p-6 sm:p-8 relative overflow-hidden text-center">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-primary via-secondary to-primary-container"></div>
                  <div className="w-28 h-28 mx-auto mt-2 rounded-full bg-surface-container-low flex items-center justify-center">
                    <BrandLogo size="lg" />
                  </div>
                  <h2 className="font-headline font-bold text-xl text-primary mt-4 tracking-tight">{user.nombre}</h2>
                  <p className="text-sm text-on-surface-variant break-all">{user.email}</p>
                </div>
              </aside>
              <div className="lg:col-span-8">
                <FormularioPerfil nombre={user.nombre} telefono={user.telefono} direccion={user.direccion} email={user.email} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
