// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/actualizar_perfil_paisabor
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';

export default function CuentaEditarPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-22rem)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-secondary font-semibold mb-2">
                  <span>
                    Mi Cuenta
                  </span>
                  {' '}
                  <span className="text-outline-variant">
                    •
                  </span>
                  {' '}
                  <span>
                    Ajustes Personales
                  </span>
                  {' '}
                  <span className="text-outline-variant">
                    •
                  </span>
                  {' '}
                  <span className="text-on-surface-variant">
                    Editar Perfil
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h1 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-primary">
                      Actualizar Perfil
                    </h1>
                    <p className="font-body text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                      Mantén tus datos y credenciales actualizados para garantizar la entrega puntual de nuestras amasijos frescos y una atención personalizada en tus reservas de mesa.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-auto bg-surface-container-high px-3.5 py-1.5 rounded-full text-xs font-label text-on-surface-variant">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    {' '}
                    <span>
                      Sincronizado con La Hacienda NL
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-primary/5 p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-primary via-secondary to-primary-container"></div>
                    <div className="flex items-center justify-between mb-6 pt-1">
                      <span className="text-[11px] font-label uppercase tracking-wider font-semibold text-secondary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>
                        {' '}Vista Pública del Perfil
                      </span>
                      {' '}
                      <span className="bg-surface-container text-on-surface-variant text-[11px] font-label px-2.5 py-0.5 rounded-full font-medium">
                        En Vivo
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-full overflow-hidden p-1 bg-linear-to-tr from-secondary via-primary-fixed to-secondary-container shadow-md">
                          <img alt="Juan Carlos Pérez Restrepo" className="w-full h-full object-cover rounded-full" id="live-avatar-preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeMdM7SohkbXCXbvEHbDwwR7U_0U5PxRDeisqRgMSCaOZIdwOuobGusNsPV6SAGboY0Ss81RaVrkgV27cfB1zEfnDxNL6eM_v0aqjtTLNw6l2OBlNKql35zETSSIslZnukXA9de8aop6qYj0QJKkK6m-Dp_KXQqBhIjGhe7JrLkJGnXrpHkVOaB88uPdzupaKTtjiMQvJ-6dfdXvBIDNiNYg1TC55M3NVJ7MLqeVx_S4VF2Xt-g4Hg" />
                        </div>
                        <div className="absolute -bottom-2 -right-1 bg-surface-container-lowest p-1 rounded-full shadow-md">
                          <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                            <span className="material-symbols-outlined text-base">
                              verified
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-label font-semibold">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        {' '}
                        <span>
                          Miembro Activo • Familia Paisabor
                        </span>
                      </div>
                      <h2 className="font-headline font-bold text-xl text-primary mt-4 tracking-tight" id="live-name-display">
                        Juan Carlos Pérez Restrepo
                      </h2>
                      <div className="flex items-center gap-1.5 mt-1 text-sm text-on-surface-variant font-body">
                        <span className="truncate max-w-[200px]" id="live-email-display">
                          juan.perez@ejemplo.co
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary bg-secondary-fixed/50 px-2.5 py-0.5 rounded-full mt-2 font-label">
                        <span className="material-symbols-outlined text-xs">
                          mark_email_read
                        </span>
                        {' '}
                        <span>
                          Correo Verificado
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 bg-surface-container-low rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-on-surface-variant font-label">
                          Rango en Mesa
                        </span>
                        {' '}
                        <span className="font-headline font-bold text-primary">
                          Cliente Frecuente
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center pt-1">
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-xs">
                          <span className="block font-headline font-bold text-lg text-secondary leading-tight">
                            12
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant font-label">
                            Despensa Andina
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg shadow-xs">
                          <span className="block font-headline font-bold text-lg text-primary leading-tight">
                            3
                          </span>
                          {' '}
                          <span className="text-[11px] text-on-surface-variant font-label">
                            Menús Reservados
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-primary text-primary-fixed p-3 rounded-lg mt-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                            local_cafe
                          </span>
                          {' '}
                          <span className="text-xs font-label uppercase tracking-wider font-semibold">
                            Puntos Sabor
                          </span>
                        </div>
                        <span className="font-headline font-bold text-base text-primary-fixed">
                          1,450 pts
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 pt-5 bg-transparent">
                      <div className="flex items-start gap-3 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">
                          location_on
                        </span>
                        <div>
                          <span className="font-semibold text-primary block mb-0.5">
                            Destino Predeterminado
                          </span>
                          {' '}
                          <span className="leading-relaxed">
                            Prinsengracht 263-267, Ámsterdam, Países Bajos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-3.5 bg-surface-container-high rounded-lg flex items-start gap-3 text-xs text-on-surface-variant/90 leading-relaxed">
                      <span className="material-symbols-outlined text-secondary shrink-0 text-base">
                        info
                      </span>
                      <p>
                        Tu fotografía y nombre se reflejarán automáticamente en las etiquetas de tus reservas culinarias y confirmaciones de entrega de La Hacienda.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-lg">
                          shield
                        </span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-sm text-primary">
                          Seguridad &amp; Privacidad
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Cumplimiento estricto AVG / GDPR
                        </p>
                      </div>
                    </div>
                    <a className="text-secondary hover:text-on-secondary-fixed-variant text-xs font-semibold font-label uppercase" href="#">
                      Ver
                    </a>
                  </div>
                </aside>
                <main className="lg:col-span-8 space-y-8">
                  <div className="bg-surface-container-lowest rounded-xl shadow-xl shadow-primary/5 p-6 sm:p-10">
                    <div className="mb-8">
                      <h2 className="font-headline font-bold text-2xl text-primary tracking-tight">
                        Información de la Cuenta
                      </h2>
                      <p className="text-on-surface-variant text-sm mt-1 font-body">
                        Actualiza tus datos personales y fotografía para tus pedidos y reservas de mesa.
                      </p>
                    </div>
                    <div className="space-y-10" id="profile-edit-form">
                      <section className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline font-bold text-base text-primary uppercase tracking-wider text-xs">
                            01. Fotografía de Perfil
                          </h3>
                          <span className="text-xs text-on-surface-variant font-label">
                            Identificador visual
                          </span>
                        </div>
                        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                          <div className="relative shrink-0">
                            <img alt="Juan Carlos avatar" className="w-24 h-24 rounded-full object-cover shadow-md" id="form-avatar-thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeMdM7SohkbXCXbvEHbDwwR7U_0U5PxRDeisqRgMSCaOZIdwOuobGusNsPV6SAGboY0Ss81RaVrkgV27cfB1zEfnDxNL6eM_v0aqjtTLNw6l2OBlNKql35zETSSIslZnukXA9de8aop6qYj0QJKkK6m-Dp_KXQqBhIjGhe7JrLkJGnXrpHkVOaB88uPdzupaKTtjiMQvJ-6dfdXvBIDNiNYg1TC55M3NVJ7MLqeVx_S4VF2Xt-g4Hg" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                              <span className="material-symbols-outlined text-xs">
                                photo_camera
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 w-full space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-primary font-medium text-xs font-label shadow-xs transition-all" htmlFor="avatar-file-input">
                                <span className="material-symbols-outlined text-base text-secondary">
                                  cloud_upload
                                </span>
                                {' '}
                                <span>
                                  Subir nueva foto
                                </span>
                              </label>
                              {' '}
                              <input accept="image/png, image/jpeg, image/webp" className="hidden" id="avatar-file-input" type="file" />
                              {' '}
                              <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-error hover:bg-error-container/20 font-medium text-xs font-label transition-colors" id="btn-remove-photo" type="button">
                                <span className="material-symbols-outlined text-base">
                                  delete
                                </span>
                                {' '}
                                <span>
                                  Eliminar foto
                                </span>
                              </button>
                            </div>
                            <div className="p-4 rounded-lg bg-surface-container-lowest/80 text-center cursor-pointer transition-colors group" id="dropzone">
                              <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant">
                                <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">
                                  upload_file
                                </span>
                                {' '}
                                <span>
                                  Arrastra y suelta aquí tu archivo o haz clic para explorar
                                </span>
                              </div>
                              <p className="text-[11px] text-on-surface-variant/70 mt-1">
                                Formatos recomendados: JPG, PNG o WEBP. Tamaño máximo 5MB. Se recomienda una imagen cuadrada y nítida.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="space-y-6 pt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline font-bold text-base text-primary uppercase tracking-wider text-xs">
                            02. Datos Personales
                          </h3>
                          <span className="text-xs text-on-surface-variant font-label">
                            * Campos requeridos
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2 space-y-1.5">
                            <label className="block font-headline text-xs font-bold uppercase tracking-wider text-primary" htmlFor="full-name">
                              Nombre Completo *
                            </label>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-lg pointer-events-none">
                                person
                              </span>
                              {' '}
                              <input className="w-full bg-surface-container-low text-on-surface font-body text-sm rounded-lg pl-11 pr-4 py-3 placeholder:text-outline focus:outline-hidden focus:bg-surface-container-lowest transition-colors shadow-inner" id="full-name" required type="text" defaultValue="Juan Carlos Pérez Restrepo" />
                            </div>
                            <span className="text-[11px] text-on-surface-variant block pl-1">
                              Tal como aparecerá en tus facturas y comprobantes fiscales.
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <label className="block font-headline text-xs font-bold uppercase tracking-wider text-primary" htmlFor="preferred-name">
                              Nombre de Pila / Preferido
                            </label>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-lg pointer-events-none">
                                sentiment_satisfied
                              </span>
                              {' '}
                              <input className="w-full bg-surface-container-low text-on-surface font-body text-sm rounded-lg pl-11 pr-4 py-3 placeholder:text-outline focus:outline-hidden focus:bg-surface-container-lowest transition-colors shadow-inner" id="preferred-name" type="text" defaultValue="Juan" />
                            </div>
                            <span className="text-[11px] text-on-surface-variant block pl-1">
                              ¿Cómo te saludamos en la panadería y confirmaciones?
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <label className="block font-headline text-xs font-bold uppercase tracking-wider text-primary" htmlFor="phone-number">
                                Teléfono Móvil
                              </label>
                              {' '}
                              <span className="text-[10px] uppercase font-label bg-surface-container px-2 py-0.5 rounded-sm text-on-surface-variant">
                                Para PostNL / App
                              </span>
                            </div>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-lg pointer-events-none">
                                call
                              </span>
                              {' '}
                              <input className="w-full bg-surface-container-low text-on-surface font-body text-sm rounded-lg pl-11 pr-4 py-3 placeholder:text-outline focus:outline-hidden focus:bg-surface-container-lowest transition-colors shadow-inner font-mono text-xs" id="phone-number" type="tel" defaultValue="+31 6 1234 5678" />
                            </div>
                            <span className="text-[11px] text-on-surface-variant block pl-1">
                              Para avisos inmediatos de despacho refrigerado y WhatsApp.
                            </span>
                          </div>
                          <div className="md:col-span-2 space-y-1.5">
                            <label className="block font-headline text-xs font-bold uppercase tracking-wider text-primary" htmlFor="email-address">
                              Correo Electrónico *
                            </label>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-lg pointer-events-none">
                                mail
                              </span>
                              {' '}
                              <input className="w-full bg-surface-container-low text-on-surface font-body text-sm rounded-lg pl-11 pr-12 py-3 placeholder:text-outline focus:outline-hidden focus:bg-surface-container-lowest transition-colors shadow-inner" id="email-address" required type="email" defaultValue="juan.perez@ejemplo.co" />
                              {' '}
                              <span className="material-symbols-outlined absolute right-3.5 text-secondary text-lg" title="Verificado">
                                lock_open
                              </span>
                            </div>
                            <div className="flex items-center gap-2 pt-1 pl-1 text-[11px] text-secondary">
                              <span className="material-symbols-outlined text-xs">
                                info
                              </span>
                              {' '}
                              <span>
                                Se enviará un enlace de confirmación si modificas tu dirección electrónica.
                              </span>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="space-y-4 pt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-headline font-bold text-base text-primary uppercase tracking-wider text-xs">
                            03. Preferencias de Comunicación &amp; Notificaciones
                          </h3>
                          <span className="text-xs text-on-surface-variant font-label">
                            Canales activos
                          </span>
                        </div>
                        <div className="bg-surface-container-low rounded-xl p-5 space-y-4">
                          <label className="flex items-start gap-4 p-3 bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container-high/50 transition-colors">
                            <div className="pt-0.5">
                              <input defaultChecked className="w-4 h-4 rounded-sm text-secondary accent-secondary focus:ring-0 cursor-pointer" type="checkbox" />
                            </div>
                            <div className="flex-1 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-headline font-bold text-primary text-xs uppercase tracking-wide">
                                  Alertas de Entrega vía WhatsApp
                                </span>
                                {' '}
                                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-semibold">
                                  Recomendado
                                </span>
                              </div>
                              <p className="text-xs text-on-surface-variant mt-0.5">
                                Notificaciones en tiempo real del repartidor de Paisabor o PostNL con el código de seguimiento refrigerado.
                              </p>
                            </div>
                          </label>
                          <label className="flex items-start gap-4 p-3 bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container-high/50 transition-colors">
                            <div className="pt-0.5">
                              <input defaultChecked className="w-4 h-4 rounded-sm text-secondary accent-secondary focus:ring-0 cursor-pointer" type="checkbox" />
                            </div>
                            <div className="flex-1 text-sm">
                              <span className="font-headline font-bold text-primary text-xs uppercase tracking-wide block">
                                Estado de Menús Bajo Reserva
                              </span>
                              <p className="text-xs text-on-surface-variant mt-0.5">
                                Confirmación de fecha, selección de maridaje de café de origen y preparación de tu cena a puerta cerrada.
                              </p>
                            </div>
                          </label>
                          <label className="flex items-start gap-4 p-3 bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-container-high/50 transition-colors">
                            <div className="pt-0.5">
                              <input className="w-4 h-4 rounded-sm text-secondary accent-secondary focus:ring-0 cursor-pointer" type="checkbox" />
                            </div>
                            <div className="flex-1 text-sm">
                              <span className="font-headline font-bold text-primary text-xs uppercase tracking-wide block">
                                Boletín de Amasijos &amp; Horneadas Frescas
                              </span>
                              <p className="text-xs text-on-surface-variant mt-0.5">
                                Aviso anticipado cada miércoles cuando sale el pandebono caliente, almojábanas y queso costeño fresco.
                              </p>
                            </div>
                          </label>
                        </div>
                      </section>
                      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-label order-2 sm:order-1">
                          <span className="material-symbols-outlined text-sm text-secondary">
                            history
                          </span>
                          {' '}
                          <span>
                            Última actualización:{' '}
                            <strong>
                              24 de Octubre, 2024
                            </strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                          <Go href="/cuenta" className="w-1/2 sm:w-auto px-5 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-xs font-headline font-bold tracking-wider uppercase transition-all" id="btn-cancel" type="button">
                            Cancelar
                          </Go>
                          {' '}
                          <Go href="/cuenta" className="w-1/2 sm:w-auto px-7 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs font-headline font-bold tracking-wider uppercase shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" id="btn-save" type="button">
                            <span className="material-symbols-outlined text-base">
                              check
                            </span>
                            {' '}
                            <span>
                              Guardar Cambios
                            </span>
                          </Go>
                        </div>
                      </div>
                    </div>
                    <div className="hidden mt-6 p-4 rounded-lg bg-primary text-primary-fixed flex items-center justify-between transition-all" id="save-toast">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed text-xl">
                          check_circle
                        </span>
                        <div className="text-xs">
                          <p className="font-bold font-headline">
                            ¡Perfil Actualizado con Éxito!
                          </p>
                          <p className="text-primary-fixed/80">
                            Tus datos han sido sincronizados con el sistema de La Hacienda.
                          </p>
                        </div>
                      </div>
                      <button className="text-primary-fixed hover:text-white" type="button">
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-linear-to-r from-surface-container-high to-surface-container-low rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          loyalty
                        </span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-sm text-primary">
                          ¿Deseas canjear tus 1,450 Puntos Sabor?
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Puedes utilizarlos para envíos gratis o catas privadas de café colombiano en Ámsterdam.
                        </p>
                      </div>
                    </div>
                    <a className="px-4 py-2 rounded-lg bg-surface-container-lowest text-primary text-xs font-bold font-label hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap shadow-xs" href="#">
                      Ver Recompensas
                    </a>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
