// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/modal_de_edici_n_de_producto_paisabor
/* eslint-disable @next/next/no-img-element */

type Props = { onClose: () => void; onTab: (tab: 'general' | 'canales') => void };

export function EditarProductoGeneral({ onClose, onTab }: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n.soil-shadow { box-shadow: -10px 0 40px rgba(28,28,25,0.05); }\n.card-ambient-shadow { box-shadow: 0 4px 40px rgba(28,28,25,0.05); }\n}" }} />
    <div onClick={(e) => e.target === e.currentTarget && onClose()} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-primary/40 backdrop-blur-md overflow-y-auto">
      <div className="bg-surface relative w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto transition-all" id="edit-modal">
        <div className="h-1.5 w-full bg-linear-to-r from-secondary via-secondary-container to-primary"></div>
        <div className="p-6 sm:p-8 bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                coffee
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-container-high text-on-surface-variant font-mono">
                  SKU #PRD-0042
                </span>
                {' '}
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-fixed text-on-secondary-fixed flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  {' '}Activo en Tienda
                </span>
                {' '}
                <span className="text-xs text-on-surface-variant hidden sm:inline">
                  • Sierra Nevada de Santa Marta
                </span>
              </div>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-primary mt-1 tracking-tight">
                Editar Producto
              </h2>
            </div>
          </div>
          <button onClick={onClose} aria-label="Cerrar modal" className="self-end md:self-center w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" type="button">
            <span className="material-symbols-outlined text-xl">
              close
            </span>
          </button>
        </div>
        <div className="px-6 sm:px-8 bg-surface-container-low flex items-center gap-2 overflow-x-auto text-sm font-medium">
          <button onClick={() => onTab('general')} className="py-3 px-4 text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-base">
              info
            </span>
            {' '}Información General
          </button>
          {' '}
          <button className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-base">
              payments
            </span>
            {' '}Inventario y Precios
          </button>
          {' '}
          <button className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-base">
              image
            </span>
            {' '}Fotografía
          </button>
          {' '}
          <button onClick={() => onTab('canales')} className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-base">
              visibility
            </span>
            {' '}Canales • Disponibilidad
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[68vh]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Nombre Oficial del Producto *
              </label>
              {' '}
              <input className="form-input w-full bg-surface-container-high px-4 py-3 rounded-lg text-primary font-headline font-semibold text-base focus:outline-hidden focus:ring-0 focus:bg-surface-container-highest transition-colors" type="text" defaultValue="Café de Origen - Sierra Nevada Dark Roast" />
              <p className="text-xs text-on-surface-variant">
                Visible públicamente en vitrina digital y cartas de restaurante Paisabor.
              </p>
            </div>
            <div className="md:col-span-4 space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Categoría EDR *
              </label>
              <div className="relative">
                <select className="form-select w-full bg-surface-container-high px-4 py-3 rounded-lg text-primary font-medium text-sm appearance-none focus:outline-hidden focus:ring-0 focus:bg-surface-container-highest pr-10 cursor-pointer transition-colors" defaultValue="cafe_grano">
                  <option value="cafe_grano">
                    Café en Grano (Tostado)
                  </option>
                  <option value="despensa">
                    Despensa Tradicional
                  </option>
                  <option value="panaderia">
                    Panadería y Amasijos
                  </option>
                  <option value="menu_tipico">
                    Menú Típico Hacienda
                  </option>
                  <option value="dulces">
                    Dulces &amp; Golosinas
                  </option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3.5 text-on-surface-variant text-lg">
                  expand_more
                </span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Código CategoriaID: #CAT-CFE-01
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2 text-primary font-headline font-bold text-lg">
                <span className="material-symbols-outlined text-secondary text-xl">
                  account_balance_wallet
                </span>
                {' '}Precios y Existencias en Bodega
              </div>
              <span className="text-xs text-on-surface-variant">
                Unidad: Paquete 500g sellado al vacío
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                  Precio Unitario (€)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-secondary font-bold text-base">
                    €
                  </span>
                  {' '}
                  <input className="form-input w-full bg-surface-container-highest pl-8 pr-4 py-2.5 rounded-lg text-primary font-bold text-lg focus:outline-hidden" type="text" defaultValue="18.50" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1">
                  <span>
                    BTW (9%):
                  </span>
                  {' '}
                  <span className="font-mono font-medium text-primary">
                    €1.53 incl.
                  </span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                  Stock Físico Actual
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input className="form-input w-full bg-surface-container-highest px-4 py-2.5 rounded-lg text-primary font-headline font-bold text-lg focus:outline-hidden cursor-default" readOnly type="text" defaultValue="45" />
                    {' '}
                    <span className="absolute right-3.5 top-3 text-xs text-on-surface-variant font-medium">
                      unidades
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-secondary font-medium pt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    verified
                  </span>
                  {' '}Nivel óptimo (&gt; 20 mín.)
                </p>
              </div>
              <div className="space-y-1.5 flex flex-col justify-end">
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                  Ajuste de Existencias
                </label>
                {' '}
                <button className="w-full py-2.5 px-3 bg-surface-container-high hover:bg-surface-container-highest text-primary font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    sync_alt
                  </span>
                  {' '}Registrar Movimiento
                </button>
                <p className="text-[11px] text-on-surface-variant text-center pt-1">
                  Auditoría EDR activa
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Fotografía Principal del Producto
              </label>
              {' '}
              <span className="text-xs text-on-surface-variant">
                Aspect ratio 16:10 recomendado
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-surface-container-low p-4 rounded-xl">
              <div className="md:col-span-5 relative group overflow-hidden rounded-lg aspect-[16/10] bg-surface-container-highest">
                <img alt="Café de Origen Sierra Nevada Dark Roast en empaque artesanal Paisabor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1UHH1jTOYefikynnvTjP2etuAXDLDRTbV1mX9IcJPrhohn-dmGT3TnpKAV58wFHOrobewTsIZBBpiHqzuL9QuMPZBsxGmq5AWSK2ZDwTarjhBFi3RIuKdQYCdviUw-frgB4Ivm1c4DRqWQdmZ1i6pfEGpYq__6f1ruLhgqidyl3Ab4Khzsldy3nXM785QgObPLShx5L4vAyHkTZy6IsPx4mlA_YDqABijN8zxzpklFs342xD_QeZ7pnT2vA8OlhzEhrX7qHS6kz" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-on-primary text-xs font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                    {' '}Fotografía activa en web
                  </span>
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center space-y-3">
                <div>
                  <h4 className="font-headline font-bold text-primary text-base">
                    sierra-nevada-dark-500g.webp
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Subido el 12 de Noviembre, 2024 • 757 × 472 px
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button className="px-4 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-colors flex items-center gap-2" type="button">
                    <span className="material-symbols-outlined text-base">
                      cloud_upload
                    </span>
                    {' '}Reemplazar Imagen
                  </button>
                  {' '}
                  <button className="px-4 py-2 bg-surface-container-high text-on-surface-variant hover:text-tertiary rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-base">
                      delete
                    </span>
                    {' '}Remover
                  </button>
                </div>
                <p className="text-[11px] text-on-surface-variant">
                  Archivos admitidos: JPG, PNG, WEBP hasta 5MB.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Descripción Sensorial &amp; Notas de Cata
              </label>
              {' '}
              <span className="text-xs text-secondary font-medium">
                Español • Tienda Europea
              </span>
            </div>
            <textarea className="form-textarea w-full bg-surface-container-high p-4 rounded-lg text-primary text-sm leading-relaxed focus:outline-hidden focus:ring-0 focus:bg-surface-container-highest transition-colors" rows={3} defaultValue="Café colombiano 100% Arábica con notas a chocolate amargo, panela y frutos secos. Cultivado por caficultores de la Sierra Nevada de Santa Marta a 1.700 msnm. Tueste medio-oscuro artesanal con cuerpo sedoso y acidez brillante."></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-4 bg-surface-container-low p-5 rounded-xl">
              <span className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Canales de Venta &amp; Despacho
              </span>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="pr-4">
                  <span className="font-headline font-semibold text-primary text-sm block">
                    Tienda Online (E-Commerce)
                  </span>
                  {' '}
                  <span className="text-xs text-on-surface-variant">
                    Visible para pedidos en Países Bajos y la UE
                  </span>
                </div>
                <div className="relative">
                  <input defaultChecked className="form-checkbox sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="pr-4">
                  <span className="font-headline font-semibold text-primary text-sm block">
                    Servicio a Domicilio Local
                  </span>
                  {' '}
                  <span className="text-xs text-on-surface-variant">
                    Entrega directa en Ámsterdam Centro &amp; De Pijp
                  </span>
                </div>
                <div className="relative">
                  <input defaultChecked className="form-checkbox sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </div>
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Notas Internas de Bodega
              </label>
              <textarea className="form-textarea w-full bg-surface-container-high p-3.5 rounded-xl text-primary text-xs leading-relaxed focus:outline-hidden focus:ring-0 focus:bg-surface-container-highest" placeholder="Ej: Lote SN-2024-B importado vía puerto de Rotterdam. Almacenar lejos de humedad..." rows={4} defaultValue="Lote de cosecha fresca importado en Octubre. Mantener estiba sobre tarima a 18°C. No mezclar con bultos de arequipe."></textarea>
              <p className="text-[11px] text-on-surface-variant">
                Solo visible para el personal administrativo de Paisabor.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-surface-container-lowest flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <button className="w-full sm:w-auto px-4 py-2.5 text-tertiary hover:bg-error-container hover:text-on-error-container rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2" type="button">
            <span className="material-symbols-outlined text-lg">
              delete_forever
            </span>
            {' '}Eliminar Producto
          </button>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button onClick={onClose} className="flex-1 sm:flex-initial px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-lg text-sm font-medium transition-colors" type="button">
              Cancelar
            </button>
            {' '}
            <button className="flex-1 sm:flex-initial px-6 py-2.5 bg-secondary hover:bg-primary text-on-secondary rounded-lg text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 group" type="button" onClick={onClose}>
              <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">
                check
              </span>
              {' '}Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
