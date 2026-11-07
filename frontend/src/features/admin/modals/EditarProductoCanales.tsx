// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/modal_de_edici_n_canales_y_disponibilidad_paisabor
/* eslint-disable @next/next/no-img-element */

type Props = { onClose: () => void; onTab: (tab: 'general' | 'canales') => void };

export function EditarProductoCanales({ onClose, onTab }: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".soil-shadow { box-shadow: -10px 0 40px rgba(28,28,25,0.05); }\n.card-ambient-shadow { box-shadow: 0 4px 40px rgba(28,28,25,0.05); }" }} />
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
          <button onClick={() => onTab('general')} className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-base">
              info
            </span>
            {' '}Información General
          </button>
          {' '}
          <button className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-base">
              payments
            </span>
            {' '}Inventario y Precios
          </button>
          {' '}
          <button className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-base">
              image
            </span>
            {' '}Fotografía
          </button>
          {' '}
          <button onClick={() => onTab('canales')} className="py-3 px-4 text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary transition-colors flex items-center gap-2" type="button">
            <span className="material-symbols-outlined text-base">
              visibility
            </span>
            {' '}Canales • Disponibilidad
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[68vh]">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div>
                <h3 className="font-headline font-bold text-primary text-base flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    storefront
                  </span>
                  {' '}Canales de Venta Activos
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Define dónde y cómo estará disponible este producto para los clientes.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                3 Canales Operativos
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary text-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        language
                      </span>
                      {' '}Tienda Online Paisabor
                    </span>
                    {' '}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="form-checkbox sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Clientes en Países Bajos y la UE pueden pedir y pagar online.
                  </p>
                </div>
                <div className="pt-2 border-t border-outline-variant/30">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                    Visibilidad en Catálogo
                  </label>
                  <select className="form-select w-full bg-surface-container-high px-2.5 py-1.5 rounded-lg text-primary text-xs font-medium focus:outline-hidden focus:bg-surface-container-highest" defaultValue="Público (Destacado en Tienda)">
                    <option>
                      Público (Destacado en Tienda)
                    </option>
                    <option>
                      Visible en Catálogo General
                    </option>
                    <option>
                      Oculto (Solo enlace directo)
                    </option>
                  </select>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary text-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        point_of_sale
                      </span>
                      {' '}Mostrador &amp; Caja (POS)
                    </span>
                    {' '}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="form-checkbox sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Disponible para cobro directo en local y vitrina física de Ámsterdam.
                  </p>
                </div>
                <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
                  <span>
                    Sincronización POS:
                  </span>
                  {' '}
                  <span className="font-medium text-secondary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {' '}En Línea
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary text-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        moped
                      </span>
                      {' '}Delivery (Apps NL)
                    </span>
                    {' '}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="form-checkbox sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Thuisbezorgd &amp; Uber Eats Ámsterdam vinculados al menú del día.
                  </p>
                </div>
                <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-[11px] text-on-surface-variant">
                    Integración EDR:
                  </span>
                  {' '}
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm bg-surface-container-highest text-primary">
                    Conectado (API)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2 text-primary font-headline font-bold text-base">
                <span className="material-symbols-outlined text-secondary text-xl">
                  local_shipping
                </span>
                {' '}Modalidades de Entrega y Consumo (EDR)
              </div>
              <span className="text-xs text-on-surface-variant">
                Configuración de Domicilio y Despacho
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="relative p-4 rounded-xl bg-surface-container-lowest border-2 border-secondary cursor-pointer block shadow-xs">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      package_2
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-primary text-sm">
                      Envío Postal Nacional
                    </span>
                  </div>
                  <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-0 mt-0.5" type="checkbox" />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">
                  PostNL / DPD Países Bajos
                </p>
                <div className="mt-3 pt-2 border-t border-outline-variant/30 text-[11px] text-secondary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    schedule
                  </span>
                  {' '}1-2 días hábiles (Track &amp; Trace)
                </div>
              </label>
              <label className="relative p-4 rounded-xl bg-surface-container-lowest border-2 border-secondary cursor-pointer block shadow-xs">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      shopping_bag
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-primary text-sm">
                      Click &amp; Collect
                    </span>
                  </div>
                  <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-0 mt-0.5" type="checkbox" />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">
                  Recogida en tienda Paisabor
                </p>
                <div className="mt-3 pt-2 border-t border-outline-variant/30 text-[11px] text-secondary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    bolt
                  </span>
                  {' '}Gratis • Listo en 30 minutos
                </div>
              </label>
              <label className="relative p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 cursor-pointer block shadow-xs">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-xl">
                      table_restaurant
                    </span>
                    {' '}
                    <span className="font-headline font-bold text-primary text-sm">
                      Consumo en Mesa
                    </span>
                  </div>
                  <input defaultChecked className="form-checkbox rounded-sm text-secondary focus:ring-0 mt-0.5" type="checkbox" />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">
                  Servicio cafetería y restaurante
                </p>
                <div className="mt-3 pt-2 border-t border-outline-variant/30 text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    coffee
                  </span>
                  {' '}Taza servida o empaque para llevar
                </div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-5 rounded-xl space-y-4">
              <h4 className="font-headline font-bold text-primary text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">
                  tune
                </span>
                {' '}Reglas de Pedido y Venta
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-xs text-primary block">
                      Vender aun sin stock (Preventa)
                    </span>
                    {' '}
                    <span className="text-[11px] text-on-surface-variant">
                      Permite órdenes cuando el stock llegue a 0
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="form-checkbox sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
                <div className="pt-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                    Límite de Unidades por Pedido
                  </label>
                  <div className="relative">
                    <input className="form-input w-full bg-surface-container-highest px-3 py-2 rounded-lg text-primary font-bold text-sm focus:outline-hidden" type="number" defaultValue="10" />
                    {' '}
                    <span className="absolute right-3 top-2 text-xs text-on-surface-variant">
                      unidades máx.
                    </span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant mt-1 block">
                    Protege el stock frente a compras mayoristas no autorizadas.
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-xl space-y-4">
              <h4 className="font-headline font-bold text-primary text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">
                  calendar_month
                </span>
                {' '}Días y Horario de Disponibilidad
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                    Régimen de Disponibilidad
                  </label>
                  <select className="form-select w-full bg-surface-container-highest px-3 py-2 rounded-lg text-primary text-xs font-medium focus:outline-hidden cursor-pointer" defaultValue="Siempre Disponible (Todos los días del año)">
                    <option>
                      Siempre Disponible (Todos los días del año)
                    </option>
                    <option>
                      Solo días hábiles (Lunes a Viernes)
                    </option>
                    <option>
                      Especial Fin de Semana (Viernes a Domingo)
                    </option>
                    <option>
                      Por Temporada o Lote Específico
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1">
                    Ventana de Despacho Diario
                  </label>
                  <div className="flex items-center gap-2">
                    <input className="form-input w-1/2 bg-surface-container-highest px-3 py-2 rounded-lg text-primary text-xs font-mono text-center focus:outline-hidden" type="text" defaultValue="08:00 AM" />
                    {' '}
                    <span className="text-xs text-on-surface-variant">
                      a
                    </span>
                    {' '}
                    <input className="form-input w-1/2 bg-surface-container-highest px-3 py-2 rounded-lg text-primary text-xs font-mono text-center focus:outline-hidden" type="text" defaultValue="19:00 PM" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
                Cobertura Geográfica Autorizada
              </label>
              {' '}
              <span className="text-xs text-secondary font-medium">
                Red Logística Paisabor EU
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-surface-container-low p-4 rounded-xl">
              <div className="flex items-center gap-3 p-2.5 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-lg">
                  flag
                </span>
                <div>
                  <span className="text-xs font-bold text-primary block">
                    Países Bajos
                  </span>
                  {' '}
                  <span className="text-[11px] text-secondary font-medium">
                    100% Cobertura Nacional
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-lg">
                  local_shipping
                </span>
                <div>
                  <span className="text-xs font-bold text-primary block">
                    Flandes / Bélgica
                  </span>
                  {' '}
                  <span className="text-[11px] text-on-surface-variant">
                    Envío 48h activo
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-surface-container-lowest rounded-lg border border-outline-variant/30 opacity-75">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">
                  public
                </span>
                <div>
                  <span className="text-xs font-bold text-primary block">
                    Alemania / NRW
                  </span>
                  {' '}
                  <span className="text-[11px] text-on-surface-variant">
                    Tarifa transfronteriza
                  </span>
                </div>
              </div>
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
