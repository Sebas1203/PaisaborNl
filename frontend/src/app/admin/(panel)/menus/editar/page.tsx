// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_crear_y_editar_men
/* eslint-disable @next/next/no-img-element */
import { baseSinIva, iva } from '@/config/fiscal';
import { ItemImage } from '@/components/ItemImage';
import { ESPECIALES } from '@/data';
import { formatEUR } from '@/lib/format';
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

// Demo sin backend: el editor muestra el primer especial del catálogo
const PLATO_EDITADO = ESPECIALES[0];

export default function AdminMenusEditarPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-secondary font-semibold hover:text-on-secondary-container transition-colors" href="/admin/menus">
                  <span className="material-symbols-outlined text-sm">
                    arrow_back
                  </span>
                  {' '}
                  <span>
                    Volver al Catálogo
                  </span>
                </Link>
                {' '}
                <span className="text-outline text-xs">
                  •
                </span>
                {' '}
                <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                  Gestión de Carta Especial
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold text-primary tracking-tight">
                Crear y Editar Menú{' '}
                <span className="italic font-normal text-secondary font-headline text-2xl lg:text-3xl">
                  (Bajo Reserva)
                </span>
              </h1>
              <p className="text-sm text-on-surface-variant mt-1 font-body max-w-2xl">
                Configura preparaciones de alta cocina tradicional colombiana servidas en Ámsterdam con sincronización directa de insumos para escandallo automático.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
              <Go href="/admin/menus" className="px-5 py-2.5 rounded-lg text-sm font-medium text-on-surface bg-surface-container-high hover:bg-surface-dim transition-all" type="button">
                Descartar Cambios
              </Go>
              {' '}
              <Go href="/admin/menus" className="group flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-on-primary bg-primary hover:bg-primary-container shadow-xs hover:shadow-md transition-all" id="btn-save-menu" type="button">
                <span className="material-symbols-outlined text-[19px] transition-transform group-hover:scale-110">
                  bookmark_added
                </span>
                {' '}
                <span>
                  Guardar Menú
                </span>
              </Go>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                <span className="material-symbols-outlined text-xl">
                  hourglass_top
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary font-headline">
                  Modo Alta Demanda &amp; Escandallo
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Los platos por encargo deducen inventario automáticamente al confirmar la reserva con el cliente.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-semibold text-on-surface-variant">
                BTW General:
              </span>
              {' '}
              <span className="px-2.5 py-1 rounded-sm bg-surface-container-highest text-primary font-mono text-xs font-semibold">
                9% (Alimentos NL)
              </span>
            </div>
          </div>
          <div className="space-y-8" id="menu-editor-form">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-surface-container-lowest p-7 rounded-xl shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b-0">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      <h2 className="text-base font-bold font-headline uppercase tracking-wider text-primary">
                        1. Información Básica del Plato
                      </h2>
                    </div>
                    <span className="text-xs font-medium text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-full">
                      Edición en Borrador
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                    <div className="md:col-span-8">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5" htmlFor="menu-name">
                        Nombre del Menú / Especialidad{' '}
                        <span className="text-secondary">
                          *
                        </span>
                      </label>
                      {' '}
                      <input className="w-full bg-surface-container-low text-primary font-headline text-lg font-semibold px-4 py-3 rounded-lg focus:outline-hidden focus:bg-surface-container transition-colors placeholder:text-outline/60" id="menu-name" placeholder="Ej. Arroz paisa" type="text" defaultValue={PLATO_EDITADO.nombre} />
                      {' '}
                      <span className="text-[11px] text-outline mt-1 block">
                        Visible en la carta pública de reservas y boleta de pago.
                      </span>
                    </div>
                    <div className="md:col-span-4 bg-surface-container-low p-3.5 rounded-lg flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary font-headline">
                          Disponibilidad
                        </span>
                        {' '}
                        <button aria-checked="true" className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full bg-secondary transition-colors duration-200 ease-in-out focus:outline-hidden" id="toggle-status" role="switch" type="button">
                          <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface-container-lowest shadow-md ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5" id="toggle-indicator"></span>
                        </button>
                      </div>
                      <p className="text-xs font-medium text-secondary mt-1" id="toggle-label">
                        Disponible para reserva
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="menu-desc">
                        Descripción Detallada y Elaboración Típica{' '}
                        <span className="text-secondary">
                          *
                        </span>
                      </label>
                      {' '}
                      <span className="text-[11px] text-outline">
                        Máx. 500 caracteres
                      </span>
                    </div>
                    <textarea className="w-full bg-surface-container-low text-on-surface text-sm p-4 rounded-lg focus:outline-hidden focus:bg-surface-container transition-colors leading-relaxed placeholder:text-outline/60" id="menu-desc" placeholder="Describe el marinado de hierbas, el origen del corte y la guarnición..." rows={4} defaultValue={PLATO_EDITADO.descripcion ?? ""}></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    <div className="p-4 bg-surface-container-low rounded-lg space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="menu-price">
                        Precio por Ración (€ BTW incl.)
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-secondary font-headline text-xl font-bold">
                          €
                        </span>
                        {' '}
                        <input className="w-full bg-surface-container-lowest text-primary font-headline text-xl font-bold pl-8 pr-4 py-2.5 rounded-lg focus:outline-hidden focus:ring-0" id="menu-price" step="0.50" type="number" defaultValue={PLATO_EDITADO.precio.toFixed(2)} />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-outline pt-1">
                        <span>
                          Base neta: {formatEUR(baseSinIva(PLATO_EDITADO.precio))}
                        </span>
                        {' '}
                        <span>
                          IVA 9%: {formatEUR(iva(PLATO_EDITADO.precio))}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        Tiempo Mínimo de Anticipación
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <label className="cursor-pointer">
                          <input className="sr-only peer" name="lead_time" type="radio" value="24" />
                          <div className="py-2.5 text-center text-xs font-semibold rounded-lg bg-surface-container-lowest text-on-surface peer-checked:bg-primary peer-checked:text-on-primary transition-all shadow-xs">
                            24h
                          </div>
                        </label>
                        {' '}
                        <label className="cursor-pointer">
                          <input defaultChecked className="sr-only peer" name="lead_time" type="radio" value="48" />
                          <div className="py-2.5 text-center text-xs font-semibold rounded-lg bg-surface-container-lowest text-on-surface peer-checked:bg-primary peer-checked:text-on-primary transition-all shadow-xs">
                            48h
                          </div>
                        </label>
                        {' '}
                        <label className="cursor-pointer">
                          <input className="sr-only peer" name="lead_time" type="radio" value="72" />
                          <div className="py-2.5 text-center text-xs font-semibold rounded-lg bg-surface-container-lowest text-on-surface peer-checked:bg-primary peer-checked:text-on-primary transition-all shadow-xs">
                            72h
                          </div>
                        </label>
                      </div>
                      <span className="text-[11px] text-outline block pt-1">
                        Recomendado para cocciones lentas o adobos de 2 días.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xs space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      photo_camera
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary font-headline">
                      Fotografía del Menú
                    </h3>
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low group">
                    <ItemImage src={PLATO_EDITADO.imagen} alt={PLATO_EDITADO.nombre} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs text-on-primary font-medium flex items-center gap-1.5 backdrop-blur-xs px-2.5 py-1 rounded-sm bg-primary/40">
                        <span className="material-symbols-outlined text-xs">
                          verified
                        </span>
                        {' '}Plato insignia Amsterdam
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-lg text-center cursor-pointer hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                      cloud_upload
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-primary">
                      Sustituir fotografía
                    </span>
                    {' '}
                    <span className="text-[11px] text-outline mt-0.5">
                      JPG, WEBP o PNG (máx. 4MB, 1600x1200px)
                    </span>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-surface-container">
                      <span className="text-on-surface-variant">
                        Porciones estándar:
                      </span>
                      {' '}
                      <span className="font-semibold text-primary">
                        Fuente para 4 - 6 pax
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5">
                      <span className="text-on-surface-variant">
                        Categoría en carta:
                      </span>
                      {' '}
                      <span className="px-2 py-0.5 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-[11px]">
                        Banquete Andino
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-base">
                      soup_kitchen
                    </span>
                    {' '}
                    <span>
                      Regla de Producción
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Las reservas confirmadas con menos de 48h generan aviso urgente de compra al equipo de adquisiciones para el proveedor de carnes y hojas frescas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-7 rounded-xl shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <h2 className="text-base font-bold font-headline uppercase tracking-wider text-primary">
                      2. Tabla Dinámica de Ingredientes y Escandallo
                    </h2>
                  </div>
                  <p className="text-xs text-on-surface-variant max-w-3xl">
                    Ingredientes asociados para control de insumos y deducción de inventario en bodega central Ámsterdam con cada orden de reserva.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-2 rounded-lg bg-surface-container-low text-right">
                    <span className="block text-[10px] uppercase tracking-wider font-semibold text-outline">
                      Costo Insumos Batch
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-sm text-secondary" id="total-cost">
                      Por definir
                    </span>
                  </div>
                  <div className="px-3.5 py-2 rounded-lg bg-surface-container-low text-right">
                    <span className="block text-[10px] uppercase tracking-wider font-semibold text-outline">
                      Margen Estimado
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-sm text-primary">
                      Por definir
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl flex flex-col md:flex-row items-center gap-3">
                <div className="w-full md:flex-1">
                  <label className="sr-only" htmlFor="new-item-name">
                    Insumo
                  </label>
                  {' '}
                  <input className="w-full bg-surface-container-lowest text-xs text-on-surface px-3.5 py-2.5 rounded-lg placeholder:text-outline focus:outline-hidden" id="new-item-name" placeholder="Nombre de insumo (ej. Cebolla junca / Comino)" type="text" />
                </div>
                <div className="w-full md:w-32">
                  <label className="sr-only" htmlFor="new-item-qty">
                    Cantidad
                  </label>
                  {' '}
                  <input className="w-full bg-surface-container-lowest text-xs text-on-surface px-3.5 py-2.5 rounded-lg placeholder:text-outline focus:outline-hidden" id="new-item-qty" placeholder="Cantidad" step="0.1" type="number" />
                </div>
                <div className="w-full md:w-36">
                  <label className="sr-only" htmlFor="new-item-unit">
                    Unidad
                  </label>
                  <select className="w-full bg-surface-container-lowest text-xs text-on-surface px-3.5 py-2.5 rounded-lg focus:outline-hidden" id="new-item-unit">
                    <option value="kg">
                      kg (Kilogramos)
                    </option>
                    <option value="g">
                      g (Gramos)
                    </option>
                    <option value="litros">
                      litros
                    </option>
                    <option value="unidades">
                      unidades
                    </option>
                  </select>
                </div>
                <div className="w-full md:w-32">
                  <label className="sr-only" htmlFor="new-item-cost">
                    Costo (€)
                  </label>
                  {' '}
                  <input className="w-full bg-surface-container-lowest text-xs text-on-surface px-3.5 py-2.5 rounded-lg placeholder:text-outline focus:outline-hidden" id="new-item-cost" placeholder="Costo €" step="0.05" type="number" />
                </div>
                <button className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0" id="btn-add-ingredient" type="button">
                  <span className="material-symbols-outlined text-base">
                    add
                  </span>
                  {' '}
                  <span>
                    + Agregar ingrediente
                  </span>
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-surface-container-high text-primary font-headline uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4 font-bold">
                        Insumo / Producto
                      </th>
                      <th className="py-3 px-4 font-bold">
                        Cantidad Requerida
                      </th>
                      <th className="py-3 px-4 font-bold">
                        Unidad de Medida
                      </th>
                      <th className="py-3 px-4 font-bold text-right">
                        Costo Estimado
                      </th>
                      <th className="py-3 px-4 font-bold text-center w-16">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0" id="ingredients-tbody">
                    <tr>
                      <td colSpan={5} className="py-6 px-4 text-center text-xs text-on-surface-variant">
                        {/* TODO: información de alérgenos obligatoria (UE) y descripciones/ingredientes a confirmar con Diana en cada plato */}
                        Sin ingredientes registrados para este plato.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    sync
                  </span>
                  {' '}
                  <span>
                    Descuento de stock en tiempo real según raciones reservadas por pedido
                  </span>
                </div>
                <div className="font-mono text-[11px] text-outline">
                  Última actualización de mermas: Hoy, 09:40 CET
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 pb-12">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                {' '}
                <span>
                  Cambios almacenados localmente cada 30 segundos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                  Vista Previa Comensal
                </button>
                {' '}
                <Go href="/admin/menus" className="px-7 py-3 rounded-lg text-sm font-semibold text-on-primary bg-primary hover:bg-primary-container shadow-md transition-all flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined text-lg">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Guardar y Publicar Menú
                  </span>
                </Go>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
