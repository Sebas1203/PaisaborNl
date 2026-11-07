// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/formulario_de_nuevo_producto_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function AdminProductosNuevoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".soil-shadow { box-shadow: -10px 0 40px rgba(28,28,25,0.05); }\n.card-ambient-shadow { box-shadow: 0 4px 40px rgba(28,28,25,0.05); }" }} />
    <div className="h-full flex font-body text-on-surface">
      <main className="flex-1 bg-background min-h-screen pt-16">
        <div className="flex flex-col w-full">
          <header className="w-full px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4 bg-surface-container-low">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden p-1 shadow-xs shrink-0">
                <img alt="Paisabor Emblema Hacienda" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VDeI_wO3h2Ypsq_ZLb3paIiXqbhbxxPg4DQ3mS0tHlU-iT9PkISzXBry48naEWfgxC1PgLtcDvz5clucpfNumLU6iVDrQRcoYDMF3HFCkJjAyzu-chGzBcaW7trn0PJD-aRGAH9CNHDdtJ0JtK_0GLheAHgxZZfTzF1-Sel9vVzgELje3PD2115_OpTXGsgITIhKtqwTfFGbDFaZ8HoOlAQ0dbQ6262JWR5qOpczdNx96XHzldmOyllV22JJcJOBaZaNRIDtVAkA" />
              </div>
              <div>
                <Link className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="/admin/productos">
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_back
                  </span>
                  {' '}
                  <span>
                    Volver a Productos
                  </span>
                </Link>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-medium text-on-surface-variant">
                    Catálogo EDR
                  </span>
                  {' '}
                  <span className="text-[10px] text-outline">
                    •
                  </span>
                  {' '}
                  <span className="text-xs font-medium text-on-surface-variant">
                    Inventario Central Países Bajos
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-surface text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-secondary mr-1.5 animate-pulse"></span>
                {' '}Modo Creación
              </span>
              {' '}
              <Go href="/admin/productos" className="px-4 py-2.5 rounded-lg text-sm font-medium bg-surface text-on-surface hover:bg-surface-container-high transition-all shadow-xs active:translate-y-0.5" type="button">
                Guardar Borrador
              </Go>
              {' '}
              <Go href="/admin/productos" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-on-primary hover:bg-primary-container transition-all shadow-md hover:shadow-lg flex items-center gap-2 active:translate-y-0.5" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  publish
                </span>
                {' '}
                <span>
                  Publicar Producto
                </span>
              </Go>
            </div>
          </header>
          <section className="w-full px-6 lg:px-10 pt-8 pb-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div>
                  <span className="font-headline text-xs tracking-widest uppercase text-secondary font-bold">
                    Registro de Ficha Técnica
                  </span>
                  <h1 className="font-headline text-3xl lg:text-4xl font-black text-primary tracking-tight mt-1">
                    Agregar Nuevo Producto
                  </h1>
                  <p className="font-body text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                    Ingresa los detalles, inventario y multimedia del producto para publicarlo en la tienda online. El stock ingresado registrará automáticamente un movimiento inicial en el almacén de La Haya.
                  </p>
                </div>
                <div className="bg-surface-container p-3 rounded-xl flex items-center gap-3 shrink-0 self-start lg:self-auto">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      verified
                    </span>
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-on-surface">
                      Completitud de Datos
                    </p>
                    <p className="text-on-surface-variant">
                      Listo para sincronizar POS y Web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <main className="w-full px-6 lg:px-10 py-6 pb-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <article className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Identidad &amp; Descripción
                        </span>
                      </div>
                      <h2 className="font-headline text-xl font-bold text-primary mt-1">
                        Información General
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[28px]">
                      receipt_long
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="prod_name">
                        Nombre del Producto{' '}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      {' '}
                      <input className="form-input w-full px-4 py-3 bg-surface-container-high text-on-surface placeholder:text-outline text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" id="prod_name" placeholder="ej. Café Especial Sierra Nevada 500g (Tueste Medio)" required type="text" />
                      <p className="text-[11px] text-on-surface-variant mt-1.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          info
                        </span>
                        {' '}Recomendamos incluir origen, gramaje y variedad para optimizar búsquedas.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-on-surface font-label" htmlFor="prod_desc">
                          Descripción Detallada
                        </label>
                        <div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant">
                          <button className="hover:text-primary p-0.5" title="Negrita" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              format_bold
                            </span>
                          </button>
                          {' '}
                          <button className="hover:text-primary p-0.5" title="Cursiva" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              format_italic
                            </span>
                          </button>
                          {' '}
                          <button className="hover:text-primary p-0.5" title="Lista" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              format_list_bulleted
                            </span>
                          </button>
                          {' '}
                          <button className="hover:text-primary p-0.5" title="Cita" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              format_quote
                            </span>
                          </button>
                        </div>
                      </div>
                      <textarea className="form-textarea w-full p-4 bg-surface-container-high text-on-surface placeholder:text-outline text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all resize-y" id="prod_desc" placeholder="Notas de cata a panela y frutos rojos, cultivado a 1.700 msnm por familias campesinas de la Sierra Nevada de Santa Marta. 100% Arábica con certificación de comercio justo..." rows={5}></textarea>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest text-secondary shadow-xs">
                          <span className="material-symbols-outlined text-[22px]">
                            restaurant
                          </span>
                        </div>
                        <div>
                          <p className="font-headline text-sm font-bold text-primary">
                            Naturaleza del Producto
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            Define si es de cocina caliente o artículo de despensa empaquetado.
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex p-1 bg-surface-container rounded-lg shrink-0 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-md text-xs font-semibold bg-surface-container-lowest text-primary shadow-xs transition-all flex items-center justify-center gap-1.5" id="tab-despensa" type="button">
                          <span className="material-symbols-outlined text-[16px]">
                            shelves
                          </span>
                          {' '}Despensa / Tienda
                        </button>
                        {' '}
                        <button className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-md text-xs font-medium text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1.5" id="tab-menu" type="button">
                          <span className="material-symbols-outlined text-[16px]">
                            skillet
                          </span>
                          {' '}Menú Preparado
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Finanzas &amp; Fiscalidad
                        </span>
                      </div>
                      <h2 className="font-headline text-xl font-bold text-primary mt-1">
                        Precios e Impuestos
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[28px]">
                      payments
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="price_sale">
                        Precio de Venta (€){' '}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant font-semibold text-sm">
                          €
                        </span>
                        {' '}
                        <input className="form-input w-full pl-8 pr-4 py-3 bg-surface-container-high text-on-surface placeholder:text-outline text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest font-medium transition-all" id="price_sale" placeholder="12.50" required step="0.01" type="number" />
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Precio final en euros al consumidor
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="price_compare">
                        Precio de Comparación (€)
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline font-semibold text-sm">
                          €
                        </span>
                        {' '}
                        <input className="form-input w-full pl-8 pr-4 py-3 bg-surface-container-high text-on-surface placeholder:text-outline text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest font-medium transition-all" id="price_compare" placeholder="14.00" step="0.01" type="number" />
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Mostrará badge tachado de oferta
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="tax_rate">
                        Tasa de BTW (Belastingdienst NL)
                      </label>
                      <div className="relative">
                        <select className="form-select w-full px-4 py-3 bg-surface-container-high text-on-surface text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer pr-10 font-medium" id="tax_rate" defaultValue="9">
                          <option value="9">
                            BTW 9% (Alimentos &amp; Bebidas NL)
                          </option>
                          <option value="21">
                            BTW 21% (Tarifa General / Souvenirs)
                          </option>
                          <option value="0">
                            BTW 0% (Exento)
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Regulado para ventas en Países Bajos
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[22px]">
                        calculate
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-on-surface">
                          Margen Bruto Estimado
                        </p>
                        <p className="text-[11px] text-on-surface-variant">
                          Cálculo dinámico automático al guardar orden de compra
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-sm bg-secondary-fixed text-on-secondary-fixed">
                      ~ 44.8% Margen
                    </span>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Control de Stock &amp; EDR
                        </span>
                      </div>
                      <h2 className="font-headline text-xl font-bold text-primary mt-1">
                        Inventario y Logística
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[28px]">
                      warehouse
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="sku_code">
                        SKU / Código Referencia{' '}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <input className="form-input w-full px-4 py-3 bg-surface-container-high text-on-surface placeholder:text-outline font-mono text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" id="sku_code" placeholder="PSB-CAF-SN500" required type="text" />
                        {' '}
                        <button className="absolute right-2.5 top-2.5 text-xs px-2 py-1 rounded-sm bg-surface hover:bg-surface-container text-on-surface-variant font-medium" title="Generar SKU Automático" type="button">
                          Auto
                        </button>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Identificador único en base de datos
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="unit_measure">
                        Unidad de Medida
                      </label>
                      <div className="relative">
                        <select className="form-select w-full px-4 py-3 bg-surface-container-high text-on-surface text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer pr-10 font-medium" id="unit_measure" defaultValue="paquete">
                          <option value="paquete">
                            Paquete / Bolsa sellada
                          </option>
                          <option value="unidad">
                            Unidad individual (Pieza)
                          </option>
                          <option value="gramos">
                            Gramos (g)
                          </option>
                          <option value="kilogramos">
                            Kilogramos (kg)
                          </option>
                          <option value="caja">
                            Caja / Embalaje máster
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Formato de despacho y empaque
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="stock_initial">
                        Cantidad Inicial en Almacén{' '}
                        <span className="text-error">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <input className="form-input w-full px-4 py-3 bg-surface-container-high text-on-surface text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest font-semibold transition-all" id="stock_initial" min="0" required type="number" defaultValue="48" />
                        {' '}
                        <span className="absolute right-3.5 top-3.5 text-xs text-on-surface-variant">
                          uds.
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Se creará registro en tabla MovimientoInventario
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label" htmlFor="stock_threshold">
                        Umbral de Alerta Stock Bajo
                      </label>
                      <div className="relative">
                        <input className="form-input w-full px-4 py-3 bg-surface-container-high text-on-surface text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest font-semibold transition-all" id="stock_threshold" min="1" type="number" defaultValue="10" />
                        {' '}
                        <span className="absolute right-3.5 top-3.5 text-xs text-on-surface-variant">
                          mínimo
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1.5">
                        Dispara notificación en dashboard
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-surface-container-low">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-on-surface font-label flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          history_edu
                        </span>
                        {' '}Tipo de Movimiento Inicial
                      </span>
                      {' '}
                      <span className="text-[11px] px-2 py-0.5 rounded-sm bg-surface-container-highest text-on-surface font-mono">
                        MovTipo: ENTRADA_INICIAL
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Registro clasificado como:{' '}
                      <strong className="text-primary">
                        "Entrada por compra / Producción inicial artesanal"
                      </strong>
                      . Se asignará ID de operario actual y timestamp de sincronización.
                    </p>
                  </div>
                </article>
              </div>
              <aside className="lg:col-span-4 flex flex-col gap-8">
                <article className="bg-surface-container-lowest rounded-xl p-6 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Visual Heritage
                        </span>
                      </div>
                      <h2 className="font-headline text-lg font-bold text-primary mt-1">
                        Fotografía del Producto
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[24px]">
                      photo_camera
                    </span>
                  </div>
                  <div className="relative w-full aspect-square rounded-xl bg-surface-container border-2 border-dashed border-outline-variant hover:border-secondary transition-colors p-4 flex flex-col items-center justify-center text-center cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-surface-container-highest group-hover:scale-105 transition-transform flex items-center justify-center text-secondary mb-3 shadow-xs">
                      <span className="material-symbols-outlined text-[32px]">
                        cloud_upload
                      </span>
                    </div>
                    <p className="text-xs font-bold text-primary font-headline">
                      Arrastra y suelta tu fotografía aquí
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-1 max-w-[200px]">
                      o haz clic para explorar en tu ordenador
                    </p>
                    <span className="mt-4 px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors">
                      Subir imagen en alta resolución
                    </span>
                    {' '}
                    <input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                      <span>
                        Relación recomendada:
                      </span>
                      {' '}
                      <strong className="text-primary font-mono">
                        1:1 (Cuadrado) o 4:3
                      </strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                      <span>
                        Formatos admitidos:
                      </span>
                      {' '}
                      <span className="font-mono">
                        JPG, PNG, WebP (Máx 5MB)
                      </span>
                    </div>
                    <p className="text-[11px] text-secondary mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        wb_sunny
                      </span>
                      {' '}Prioriza luz natural cálida y fondos rústicos de barro o lino.
                    </p>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-6 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Taxonomía
                        </span>
                      </div>
                      <h2 className="font-headline text-lg font-bold text-primary mt-1">
                        Categorías &amp; Etiquetas
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[24px]">
                      category
                    </span>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface font-label" htmlFor="product_cat">
                          Categoría Principal{' '}
                          <span className="text-error">
                            *
                          </span>
                        </label>
                        {' '}
                        <button className="text-xs font-semibold text-secondary hover:underline flex items-center gap-0.5" type="button">
                          <span className="material-symbols-outlined text-[14px]">
                            add
                          </span>
                          {' '}Nueva
                        </button>
                      </div>
                      <div className="relative">
                        <select className="form-select w-full px-4 py-3 bg-surface-container-high text-on-surface text-sm rounded-lg border-0 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer pr-10 font-medium" id="product_cat" defaultValue="cafe">
                          <option value="cafe">
                            ☕ Café de Origen &amp; Tostión
                          </option>
                          <option value="panaderia">
                            🥖 Panadería &amp; Arepas Artesanales
                          </option>
                          <option value="dulces">
                            🍯 Dulces Tradicionales &amp; Panela
                          </option>
                          <option value="salsas">
                            🌶️ Salsas &amp; Condimentos Paisas
                          </option>
                          <option value="platos">
                            🍲 Platos Típicos &amp; Cocina
                          </option>
                          <option value="souvenirs">
                            🏺 Souvenirs &amp; Artesanías de Barro
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label">
                        Etiquetas de Origen y Sellos
                      </label>
                      <div className="flex flex-wrap gap-1.5" id="tags-container">
                        <button className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-on-secondary flex items-center gap-1 shadow-xs" type="button">
                          <span>
                            Artesanal
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-[12px]">
                            check
                          </span>
                        </button>
                        {' '}
                        <button className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-on-secondary flex items-center gap-1 shadow-xs" type="button">
                          <span>
                            Importado Directo
                          </span>
                          {' '}
                          <span className="material-symbols-outlined text-[12px]">
                            check
                          </span>
                        </button>
                        {' '}
                        <button className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" type="button">
                          + Sin Gluten
                        </button>
                        {' '}
                        <button className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" type="button">
                          + 100% Arábica
                        </button>
                        {' '}
                        <button className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" type="button">
                          + Vegano
                        </button>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-2">
                        Visibles como badges en los filtros de la tienda online.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-6 shadow-xs transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {' '}
                        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant font-label">
                          Publicación
                        </span>
                      </div>
                      <h2 className="font-headline text-lg font-bold text-primary mt-1">
                        Disponibilidad
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-secondary/40 text-[24px]">
                      visibility
                    </span>
                  </div>
                  <div className="space-y-5">
                    <fieldset className="space-y-2.5">
                      <legend className="text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label">
                        Estado de Publicación
                      </legend>
                      {' '}
                      <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <input defaultChecked className="form-radio text-secondary focus:ring-primary h-4 w-4" name="prod_status" type="radio" value="activo" />
                          <div>
                            <span className="text-xs font-bold text-on-surface block">
                              Activo
                            </span>
                            {' '}
                            <span className="text-[11px] text-on-surface-variant">
                              Visible inmediatamente para clientes
                            </span>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      </label>
                      {' '}
                      <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <input className="form-radio text-secondary focus:ring-primary h-4 w-4" name="prod_status" type="radio" value="borrador" />
                          <div>
                            <span className="text-xs font-bold text-on-surface block">
                              Borrador
                            </span>
                            {' '}
                            <span className="text-[11px] text-on-surface-variant">
                              Solo accesible por administradores
                            </span>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      </label>
                      {' '}
                      <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <input className="form-radio text-secondary focus:ring-primary h-4 w-4" name="prod_status" type="radio" value="oculto" />
                          <div>
                            <span className="text-xs font-bold text-on-surface block">
                              Oculto
                            </span>
                            {' '}
                            <span className="text-[11px] text-on-surface-variant">
                              Deshabilitado sin eliminar registro
                            </span>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-outline"></span>
                      </label>
                    </fieldset>
                    <div className="pt-4 border-t border-outline-variant/20">
                      <span className="block text-xs font-bold uppercase tracking-wider text-on-surface mb-2 font-label">
                        Canales de Venta Autorizados
                      </span>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2.5 text-xs text-on-surface cursor-pointer">
                          <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-primary h-4 w-4" type="checkbox" />
                          {' '}
                          <span>
                            Tienda Online (Envíos a toda Holanda &amp; Bélgica)
                          </span>
                        </label>
                        {' '}
                        <label className="flex items-center gap-2.5 text-xs text-on-surface cursor-pointer">
                          <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-primary h-4 w-4" type="checkbox" />
                          {' '}
                          <span>
                            Domicilio Express Local (La Haya / Randstad)
                          </span>
                        </label>
                        {' '}
                        <label className="flex items-center gap-2.5 text-xs text-on-surface cursor-pointer">
                          <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-primary h-4 w-4" type="checkbox" />
                          {' '}
                          <span>
                            Recogida en Hacienda Paisabor (Afhalen)
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="p-5 rounded-xl bg-surface-container flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest overflow-hidden shrink-0 p-1 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] text-secondary">
                      storefront
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      Vista Previa Live
                    </span>
                    <p className="text-xs font-semibold text-primary">
                      Sincronizado con base de datos Cloud
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      El feed de Instagram Shop se actualizará a medianoche.
                    </p>
                  </div>
                </div>
              </aside>
              <div className="col-span-full pt-6 mt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    lock
                  </span>
                  {' '}
                  <span>
                    Todos los cambios se auditan bajo el usuario administrador activo.
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-semibold bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all" type="button">
                    Descartar Cambios
                  </button>
                  {' '}
                  <Go href="/admin/productos" className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-on-primary hover:bg-primary-container transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Publicar Producto
                    </span>
                  </Go>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
    </>
  );
}
