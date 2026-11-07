// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_inicio
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function AdminPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                {' '}
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-secondary">
                  Operación en Vivo • Ámsterdam
                </span>
              </div>
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
                El Fogón Diario
              </h1>
              <p className="font-body text-sm text-on-surface-variant mt-1">
                Control de pedidos, preparaciones en cocina y despachos para hoy, sábado 24 de mayo.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-2 rounded-lg bg-surface-container flex items-center gap-2 text-xs font-medium text-on-surface">
                <span className="material-symbols-outlined text-secondary text-base">
                  search_off
                </span>
                {' '}
                <span>
                  Turno almuerzo:{' '}
                  <strong>
                    11:30 - 16:00
                  </strong>
                </span>
              </div>
              <button className="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold rounded-lg transition-all shadow-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  add_circle
                </span>
                {' '}
                <span>
                  Nuevo Pedido
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Despachos Pendientes
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-primary">
                      7
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-secondary">
                      por enviar
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">
                    soup_kitchen
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Total retenido en espera
                </span>
                {' '}
                <strong className="font-headline text-primary font-bold">
                  €310,00
                </strong>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Próximos Eventos
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-primary">
                      4
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-on-surface-variant">
                      catering f. de s.
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-xl">
                    dinner_dining
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Capacidad comprometida
                </span>
                {' '}
                <strong className="font-headline text-primary font-bold">
                  78 comensales
                </strong>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant font-label">
                    Insumos Críticos
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-extrabold text-secondary">
                      3
                    </span>
                    {' '}
                    <span className="text-xs font-medium text-secondary">
                      artículos bajo mínimo
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">
                    warning_amber
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant bg-surface-container/60 -mx-5 -mb-5 px-5 py-2.5">
                <span className="truncate max-w-[130px]">
                  Queso costeño y peto
                </span>
                {' '}
                <span className="text-secondary font-semibold text-[11px] uppercase tracking-wider">
                  Reponer
                </span>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-5 rounded-lg relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-on-primary-container font-label">
                    Facturación Mensual
                  </span>
                  <div className="mt-2">
                    <span className="font-headline text-2xl lg:text-3xl font-extrabold text-on-primary">
                      €14.820
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined text-xl">
                    euro
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-primary-container bg-primary-container/40 -mx-5 -mb-5 px-5 py-2.5">
                <span>
                  Incluye BTW 9% &amp; 21%
                </span>
                {' '}
                <span className="text-tertiary-fixed text-[11px] font-semibold">
                  +18.4% vs abr
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">
                        skillet
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-primary">
                        Flujo de Cocina y Pedidos
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        Actualiza el estado inmediato de la comanda
                      </p>
                    </div>
                  </div>
                  <Link className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1" href="/admin/pedidos">
                    <span>
                      Ver todos (23)
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <div className="space-y-3.5 mt-2" id="orders-container">
                  <div className="p-4 rounded-lg bg-surface-container-low transition-all hover:bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-sm text-primary">
                          #CO-1092
                        </span>
                        {' '}
                        <span className="text-xs font-medium text-on-surface-variant">
                          • 12:42 PM (Hace 8m)
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed">
                          Recogida Jordaan
                        </span>
                      </div>
                      <p className="font-body text-xs font-medium text-on-surface">
                        2x Bandeja Paisa Criolla, 1x Porción Arepas de Chócolo, 2x Club Colombia Dorada
                      </p>
                      <div className="text-[11px] text-on-surface-variant flex items-center gap-3 pt-0.5">
                        <span>
                          Cliente:{' '}
                          <strong>
                            Lars van Dijk
                          </strong>
                        </span>
                        {' '}
                        <span>
                          Importe:{' '}
                          <strong>
                            €48,50
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-end md:self-center shrink-0">
                      <button className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-surface-container-high text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors flex items-center gap-1" title="Mover a Cocina">
                        <span className="material-symbols-outlined text-sm">
                          microwave
                        </span>
                        {' '}
                        <span>
                          Cocinar
                        </span>
                      </button>
                      {' '}
                      <button className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1" title="Marcar como Listo">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        {' '}
                        <span>
                          Listo
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low transition-all hover:bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-sm text-primary">
                          #CO-1091
                        </span>
                        {' '}
                        <span className="text-xs font-medium text-on-surface-variant">
                          • 12:31 PM
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed">
                          En Fogón
                        </span>
                      </div>
                      <p className="font-body text-xs font-medium text-on-surface">
                        1x Ajiaco Santafereño Clásico con crema y alcaparras, 1x Postre Tres Leches Tradicional
                      </p>
                      <div className="text-[11px] text-on-surface-variant flex items-center gap-3 pt-0.5">
                        <span>
                          Cliente:{' '}
                          <strong>
                            Sofía Mejía (De Pijp)
                          </strong>
                        </span>
                        {' '}
                        <span>
                          Importe:{' '}
                          <strong>
                            €31,00
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-end md:self-center shrink-0">
                      <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors flex items-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        {' '}
                        <span>
                          Empacar
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low transition-all hover:bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-sm text-primary">
                          #CO-1089
                        </span>
                        {' '}
                        <span className="text-xs font-medium text-on-surface-variant">
                          • 12:15 PM
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-surface-variant text-on-surface-variant">
                          Domicilio Zuid
                        </span>
                      </div>
                      <p className="font-body text-xs font-medium text-on-surface">
                        3x Sancocho Trifásico de Finca, 3x Aguapanela Fría con Limón Tahití
                      </p>
                      <div className="text-[11px] text-on-surface-variant flex items-center gap-3 pt-0.5">
                        <span>
                          Cliente:{' '}
                          <strong>
                            Wouter B.
                          </strong>
                        </span>
                        {' '}
                        <span>
                          Importe:{' '}
                          <strong>
                            €64,50
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-end md:self-center shrink-0">
                      <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors flex items-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          moped
                        </span>
                        {' '}
                        <span>
                          Despachar
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low/60 opacity-80 transition-all hover:opacity-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-sm text-primary">
                          #CO-1088
                        </span>
                        {' '}
                        <span className="text-xs font-medium text-on-surface-variant">
                          • 12:02 PM
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-primary">
                          Listo en Barra
                        </span>
                      </div>
                      <p className="font-body text-xs font-medium text-on-surface">
                        12x Empanadas Vallunas de Carne, Ají Casero de la Casa (250ml)
                      </p>
                      <div className="text-[11px] text-on-surface-variant flex items-center gap-3 pt-0.5">
                        <span>
                          Cliente:{' '}
                          <strong>
                            Camila Torres
                          </strong>
                        </span>
                        {' '}
                        <span>
                          Importe:{' '}
                          <strong>
                            €34,00
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 self-end md:self-center shrink-0">
                      <span className="text-xs font-medium text-primary flex items-center gap-1 px-3 py-1.5 bg-surface-container rounded-lg">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          done_all
                        </span>
                        {' '}
                        <span>
                          Esperando retiro
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-sm font-bold text-primary uppercase tracking-wide">
                      Rendimiento Fiscal del Período
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Impuesto sobre valor añadido (Belastingdienst)
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-on-surface-variant block">
                        BTW Alimentos (9%)
                      </span>
                      {' '}
                      <span className="font-headline text-base font-bold text-primary">
                        €1.124,10
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-on-surface-variant block">
                        BTW Bebidas (21%)
                      </span>
                      {' '}
                      <span className="font-headline text-base font-bold text-primary">
                        €428,70
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">
                        calendar_month
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-base font-bold text-primary">
                        Catering &amp; Banquetes
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        Próximos compromisos en Ámsterdam
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded-sm">
                    4 Confirmados
                  </span>
                </div>
                <div className="space-y-3 mt-2">
                  <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3.5">
                    <div className="w-12 text-center shrink-0 py-1 rounded-sm bg-surface-container text-primary">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-secondary">
                        Hoy
                      </span>
                      {' '}
                      <span className="block font-headline text-lg font-extrabold leading-none">
                        24
                      </span>
                      {' '}
                      <span className="block text-[9px] font-semibold text-on-surface-variant">
                        MAY
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Cena Privada Embajada &amp; Amigos
                        </h4>
                        <span className="text-[11px] font-bold text-secondary shrink-0">
                          18 pers.
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-outline">
                          location_on
                        </span>
                        {' '}
                        <span className="truncate">
                          Keizersgracht 421, Grachtengordel
                        </span>
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-sm font-medium">
                          Menú 4 Tiempos
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-surface-variant">
                          Chef a domicilio (19:30)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3.5">
                    <div className="w-12 text-center shrink-0 py-1 rounded-sm bg-surface-container text-primary">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                        Dom
                      </span>
                      {' '}
                      <span className="block font-headline text-lg font-extrabold leading-none">
                        25
                      </span>
                      {' '}
                      <span className="block text-[9px] font-semibold text-on-surface-variant">
                        MAY
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Catering Corporativo FinTech
                        </h4>
                        <span className="text-[11px] font-bold text-secondary shrink-0">
                          35 pers.
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-outline">
                          location_on
                        </span>
                        {' '}
                        <span className="truncate">
                          Zuidas Business District (WTC Torre C)
                        </span>
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] bg-surface-container-highest text-primary px-2 py-0.5 rounded-sm font-medium">
                          Estación de Arepas &amp; Café
                        </span>
                        {' '}
                        <span className="text-[10px] text-on-surface-variant">
                          Almuerzo buffet (13:00)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3.5">
                    <div className="w-12 text-center shrink-0 py-1 rounded-sm bg-surface-container text-primary">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                        Vie
                      </span>
                      {' '}
                      <span className="block font-headline text-lg font-extrabold leading-none">
                        30
                      </span>
                      {' '}
                      <span className="block text-[9px] font-semibold text-on-surface-variant">
                        MAY
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Cumpleaños Familiar Carvajal
                        </h4>
                        <span className="text-[11px] font-bold text-secondary shrink-0">
                          25 pers.
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-outline">
                          location_on
                        </span>
                        {' '}
                        <span className="truncate">
                          Westergas Paviljoen, Westerpark
                        </span>
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] bg-surface-container-highest text-primary px-2 py-0.5 rounded-sm font-medium">
                          Lechona Tolimense Clásica
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-base">
                        emergency_home
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-base font-bold text-primary">
                        Inventario en Riesgo
                      </h2>
                      <p className="font-body text-xs text-on-surface-variant">
                        3 ingredientes de importación bajo umbral
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">
                      inventory
                    </span>
                    {' '}
                    <span>
                      Entrada Stock
                    </span>
                  </button>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center text-secondary font-bold text-xs">
                        🧀
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-primary">
                          Queso Costeño Fresco
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Productor artesanal Noord-Brabant
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-error flex items-center justify-end gap-1">
                        <span className="material-symbols-outlined text-xs">
                          trending_down
                        </span>
                        {' '}
                        <span>
                          1,8 kg
                        </span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        Mín: 6,0 kg
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center text-secondary font-bold text-xs">
                        🌽
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-primary">
                          Harina de Maíz Peto Blanco
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Saco importado 25kg
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-error flex items-center justify-end gap-1">
                        <span className="material-symbols-outlined text-xs">
                          trending_down
                        </span>
                        {' '}
                        <span>
                          4,2 kg
                        </span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        Mín: 15,0 kg
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center text-secondary font-bold text-xs">
                        🪵
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-primary">
                          Panela Redonda Orgánica
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Trapiche Santander (caja)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-secondary flex items-center justify-end gap-1">
                        <span className="material-symbols-outlined text-xs">
                          priority_high
                        </span>
                        {' '}
                        <span>
                          3 unidades
                        </span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        Mín: 10 unid.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant">
                  <span>
                    Próximo embarque programado:
                  </span>
                  {' '}
                  <strong className="text-primary font-headline">
                    Lunes, 09:00 AM (Puerto Róterdam)
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4" id="stock-modal">
            <div className="bg-surface rounded-xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    add_box
                  </span>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Registrar Ingreso de Insumos
                  </h3>
                </div>
                <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high">
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              </div>
              <p className="text-xs text-on-surface-variant">
                Actualiza el inventario local tras recibir despachos en la cocina central de Ámsterdam.
              </p>
              <div className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                    Producto
                  </label>
                  <select className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high">
                    <option>
                      Queso Costeño Fresco
                    </option>
                    <option>
                      Harina de Maíz Peto Blanco
                    </option>
                    <option>
                      Panela Redonda Orgánica
                    </option>
                    <option>
                      Plátano Macho Verde (Caja)
                    </option>
                    <option>
                      Café Huila Especial (Granos)
                    </option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                      Cantidad Recibida
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high" placeholder="ej. 15.0" required step="0.5" type="number" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                      Unidad
                    </label>
                    <select className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high">
                      <option>
                        Kilogramos (kg)
                      </option>
                      <option>
                        Unidades / Piezas
                      </option>
                      <option>
                        Cajas
                      </option>
                      <option>
                        Litros (L)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant mb-1">
                    Costo Total Factura (€ con BTW)
                  </label>
                  {' '}
                  <input className="w-full bg-surface-container-low text-xs text-on-surface p-2.5 rounded-lg focus:outline-hidden focus:bg-surface-container-high" placeholder="€ 120,50" type="text" />
                </div>
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button className="px-4 py-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface" type="button">
                    Cancelar
                  </button>
                  {' '}
                  <button className="px-5 py-2 bg-secondary text-on-secondary hover:bg-on-secondary-container text-xs font-bold rounded-lg shadow-xs" type="submit">
                    Guardar Entrada
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl text-xs font-medium z-50 transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-2" id="toast">
            <span className="material-symbols-outlined text-sm text-tertiary-fixed">
              check_circle
            </span>
            {' '}
            <span id="toast-message">
              Operación realizada con éxito
            </span>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
