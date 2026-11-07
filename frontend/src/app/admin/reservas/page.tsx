// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_reservas
/* eslint-disable @next/next/no-img-element */

export default function AdminReservasPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full pb-16">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-6 sm:p-8 mb-8 shadow-xs">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>
            <div className="absolute right-32 -bottom-20 w-64 h-64 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold tracking-wider uppercase text-secondary mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {' '}Fogón &amp; Celebraciones · Países Bajos
                </div>
                <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                  Gestión de Reservas &amp; Catering
                </h1>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                  Supervisión logística de banquetes colombianos, menaje tradicional y cotizaciones activas para la comunidad en Ámsterdam, Utrecht y Randstad.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Por Confirmar
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary mt-0.5">
                    7
                  </div>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-secondary">
                      priority_high
                    </span>
                    {' '}2 urgentes
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Confirmadas
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    18
                  </div>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs text-primary">
                      event
                    </span>
                    {' '}Este mes
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Total Pax Activo
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    485
                  </div>
                  <span className="text-[11px] text-on-surface-variant">
                    Comensales
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-3.5 rounded-lg shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-outline">
                    Facturación Est.
                  </span>
                  <div className="font-headline text-2xl font-bold text-primary mt-0.5">
                    €9,840
                  </div>
                  <span className="text-[11px] text-outline">
                    Incl. 9% BTW
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl overflow-x-auto" id="filter-tab-group">
              <button className="filter-btn active-tab px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-primary text-on-primary transition-all">
                Todas (28)
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                {' '}Pendientes (7)
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Confirmadas (14)
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Finalizadas (5)
              </button>
              {' '}
              <button className="filter-btn px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all">
                Rechazadas (2)
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base">
                  search
                </span>
                {' '}
                <input className="w-full bg-surface-container-lowest text-xs text-on-surface pl-9 pr-3 py-2 rounded-lg outline-hidden placeholder:text-outline focus:bg-surface-container-low transition-colors shadow-xs" id="reservation-search" placeholder="Buscar cliente, código..." type="text" />
              </div>
              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary hover:bg-surface-container transition-all shadow-xs">
                <span className="material-symbols-outlined text-base">
                  calendar_view_week
                </span>
                {' '}
                <span>
                  Calendario
                </span>
              </button>
              {' '}
              <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-xs font-semibold text-on-secondary hover:bg-primary-container transition-all shadow-xs">
                <span className="material-symbols-outlined text-base">
                  add
                </span>
                {' '}
                <span>
                  Crear Reserva
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6" id="cards-container">
            <article className="reservation-card bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(28,28,25,0.04)] transition-all hover:shadow-[0_8px_32px_rgba(28,28,25,0.07)]" data-code="#CAT-2025-0891" data-name="van der Meer" data-status="pendientes">
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-md">
                      #CAT-2025-0891
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed-dim/30 text-[11px] font-semibold text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      {' '}Pendiente de Confirmación
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-[11px] text-outline">
                      <span className="material-symbols-outlined text-xs">
                        schedule
                      </span>
                      {' '}Recibida hace 2 horas
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                    <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary">
                      Banquete Campesino Lechona &amp; Tamal Tolimense
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-medium">
                      <span className="material-symbols-outlined text-xs">
                        local_fire_department
                      </span>
                      {' '}Especial Paisabor
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-3 bg-surface-container-low rounded-lg px-4 mb-4">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Cliente &amp; Empresa
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5">
                        Sanne van der Meer
                      </div>
                      <div className="text-xs text-on-surface-variant truncate">
                        Booking.com Event Team
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Fecha &amp; Horario
                      </div>
                      <div className="text-sm font-semibold text-primary mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          calendar_today
                        </span>
                        {' '}Sáb 15 Nov, 2025
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        14:00 - 18:30 CET
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Comensales &amp; Formato
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-primary">
                          groups
                        </span>
                        {' '}45 Pax
                      </div>
                      <div className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-secondary">
                          local_shipping
                        </span>
                        {' '}Entrega térmica a domicilio
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Ubicación Destino
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 truncate">
                        Keizersgracht 421
                      </div>
                      <div className="text-xs text-outline">
                        1016 EK Ámsterdam Centrum
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        contact_phone
                      </span>
                      {' '}
                      <span>
                        +31 6 4928 1033
                      </span>
                      {' '}
                      <span className="text-outline">
                        ·
                      </span>
                      {' '}
                      <span className="text-on-surface">
                        sanne.v@booking.com
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary-fixed/30 text-xs font-medium text-on-secondary-fixed-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        soup_kitchen
                      </span>
                      {' '}
                      <span>
                        Dieta: 6x Tamal Vegetariano (sin tocino)
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-high text-xs font-medium text-error">
                      <span className="material-symbols-outlined text-sm text-error">
                        warning
                      </span>
                      {' '}
                      <span>
                        Alergia severa a cacahuates/maní (1 comensal)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-80 flex flex-col justify-between self-stretch bg-surface-container-low p-5 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-outline">
                        Presupuesto Estimado
                      </span>
                      {' '}
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                        BTW 9% incl.
                      </span>
                    </div>
                    <div className="font-headline text-3xl font-extrabold text-primary">
                      € 1,745.00
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Incluye menaje de barro, samovares térmicos y salsero artesanal ají/guacamole.
                    </div>
                    <div className="mt-4 relative h-24 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Traditional Colombian whole lechona stuffed with fragrant rice, green peas, and marinated pork inside a rustic clay serving dish on a wooden Dutch catering table, warm natural candlelight, cinematic food photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq3TmGFMoPT_NFlljCEKEfBbHpZ9y8x1HEdJ0ZvZOxENE76UXSlI2l_FV6kfited12CTAQsfALFQmH1xj1SSidhiIP-4Cxzgs_pkKzHtTXhTY78qc_KMJE2uhtFBZL6zklpqYmwyALZ3GioytE8vbHMWQT3OS2oDeJ2w9Jw4xgrgZt_PgfFb7rXWH7VIxtTwQXAoVWhJtSax5Y0AH8kBfwC6EIBXw99JYoO9sEcyqLugsgq-SQZxt_" />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] font-medium text-on-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">
                            restaurant
                          </span>
                          {' '}Vajilla rústica incluida
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                      {' '}Confirmar Reserva
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary text-xs font-medium transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          edit_note
                        </span>
                        {' '}Cotización
                      </button>
                      {' '}
                      <button className="py-2 px-2.5 rounded-lg bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          link
                        </span>
                        {' '}Link Mollie
                      </button>
                    </div>
                    <button className="w-full py-2 px-3 rounded-lg text-error hover:bg-error-container/40 text-xs font-semibold transition-all flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        close
                      </span>
                      {' '}Rechazar Reserva
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="reservation-card bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(28,28,25,0.04)] transition-all hover:shadow-[0_8px_32px_rgba(28,28,25,0.07)]" data-code="#CAT-2025-0886" data-name="Carlos Gomez" data-status="confirmadas">
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold text-primary bg-surface-container-high px-2.5 py-1 rounded-md">
                      #CAT-2025-0886
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-[11px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      {' '}Confirmada · Pago 50% Recibido
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-[11px] text-outline">
                      <span className="material-symbols-outlined text-xs">
                        local_shipping
                      </span>
                      {' '}Ruta Amsterdam-Zuid
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                    <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary">
                      Fiesta Tradicional Bandeja Paisa &amp; Arepas de Choclo
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-medium">
                      <span className="material-symbols-outlined text-xs">
                        star
                      </span>
                      {' '}Best Seller
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-3 bg-surface-container-low rounded-lg px-4 mb-4">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Cliente
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5">
                        Carlos Gómez Ospina
                      </div>
                      <div className="text-xs text-on-surface-variant truncate">
                        Fiesta Aniversario Familiar
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Fecha &amp; Horario
                      </div>
                      <div className="text-sm font-semibold text-primary mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          calendar_today
                        </span>
                        {' '}Dom 16 Nov, 2025
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        13:00 - 17:00 CET
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Comensales
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-primary">
                          groups
                        </span>
                        {' '}28 Pax
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Buffet asistido con chafing dishes
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Modalidad
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          storefront
                        </span>
                        {' '}Retiro en Local
                      </div>
                      <div className="text-xs text-outline">
                        Paisabor Keizersgracht Lab
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        phone_iphone
                      </span>
                      {' '}
                      <span>
                        +31 6 8122 9044
                      </span>
                      {' '}
                      <span className="text-outline">
                        ·
                      </span>
                      {' '}
                      <span className="text-on-surface">
                        cgomez.ospina@gmail.com
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container-high text-xs font-medium text-on-surface">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        check
                      </span>
                      {' '}
                      <span>
                        Sin restricciones de gluten notificadas
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-tertiary-fixed text-xs font-medium text-on-tertiary-fixed">
                      <span className="material-symbols-outlined text-sm">
                        cake
                      </span>
                      {' '}
                      <span>
                        Incluye 28x Postre Tres Leches de Guayaba
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-80 flex flex-col justify-between self-stretch bg-surface-container-low p-5 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-outline">
                        Presupuesto Acordado
                      </span>
                      {' '}
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                        Restante €495
                      </span>
                    </div>
                    <div className="font-headline text-3xl font-extrabold text-primary">
                      € 990.00
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Depósito de €495 recibido vía Mollie iDeal (NL91INGB...).
                    </div>
                    <div className="mt-4 relative h-24 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Generous Colombian Bandeja Paisa platter with crispy pork belly chicharron, red beans in clay bowl, ripe plantains, fried egg, avocado, and arepas arranged elegantly on a rustic linen cloth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYo-f5nZuJUVgBg3gKlCU08lOHvMva0t5UZMzoEQNcMBuRGFWBQTeFCxJyaeSHlJ_9Yvw8SI7ryN7Ep55Dfy2u31tvZB8bLgelm6yImOsurCkxTmtYUwQBKhvyE6eF6dQ5E2sfkU_vDgdsOCNZjmPr-Bm9ODuSMrgGgG55o0CENCrMKuG8S12p_nbJH6s_1ck8PkDNSYBQhIl-kEN9coybSPuWrAd2DeTjNx5k7GnyC13FlP2AqyC9" />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] font-medium text-on-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">
                            kitchen
                          </span>
                          {' '}Empaque térmico grado alimenticio
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-highest hover:bg-surface-container-high text-primary text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        payments
                      </span>
                      {' '}Cobrar Saldo Pendiente (€495)
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary text-xs font-medium transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          print
                        </span>
                        {' '}Hoja de Cocina
                      </button>
                      {' '}
                      <button className="py-2 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary text-xs font-medium transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          receipt
                        </span>
                        {' '}Factura BTW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="reservation-card bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(28,28,25,0.04)] transition-all hover:shadow-[0_8px_32px_rgba(28,28,25,0.07)]" data-code="#CAT-2025-0894" data-name="Hendrik de Jong" data-status="pendientes">
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-md">
                      #CAT-2025-0894
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed-dim/30 text-[11px] font-semibold text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      {' '}Pendiente de Confirmación
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-[11px] text-error font-medium">
                      <span className="material-symbols-outlined text-xs">
                        alarm
                      </span>
                      {' '}Evento en 4 días
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                    <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary">
                      Festival de Sancochos de la Montaña &amp; Empanadas Cocteleras
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-xs font-medium text-on-surface-variant">
                      Catering Corporativo
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-3 bg-surface-container-low rounded-lg px-4 mb-4">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Empresa Solicitante
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5">
                        Hendrik de Jong
                      </div>
                      <div className="text-xs text-on-surface-variant truncate">
                        Adyen Global Expats Group
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Fecha &amp; Horario
                      </div>
                      <div className="text-sm font-semibold text-primary mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          calendar_today
                        </span>
                        {' '}Jue 20 Nov, 2025
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        17:30 - 22:00 CET
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Volumen Comensales
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-primary">
                          groups
                        </span>
                        {' '}65 Pax
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Con servicio de meseros (2 pax)
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Punto de Entrega
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5 truncate">
                        Simon Carmiggeltstraat 6
                      </div>
                      <div className="text-xs text-outline">
                        1011 DJ Ámsterdam Oosterdok
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        mail
                      </span>
                      {' '}
                      <span>
                        hdejong@adyen-events.nl
                      </span>
                      {' '}
                      <span className="text-outline">
                        ·
                      </span>
                      {' '}
                      <span>
                        +31 20 882 1900
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary-fixed/40 text-xs font-medium text-on-secondary-fixed-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        eco
                      </span>
                      {' '}
                      <span>
                        12x Menú Vegano: Cazuela de fríjoles y plátano maduro
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-container text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-primary">
                        local_bar
                      </span>
                      {' '}
                      <span>
                        Bebidas: Refajo artesanal &amp; Lulada fría
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-80 flex flex-col justify-between self-stretch bg-surface-container-low p-5 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-outline">
                        Cotización Proyectada
                      </span>
                      {' '}
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                        BTW 9% &amp; 21%
                      </span>
                    </div>
                    <div className="font-headline text-3xl font-extrabold text-primary">
                      € 2,980.00
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Incluye personal de servicio (4 hrs), ollas térmicas tradicionales y vajilla.
                    </div>
                    <div className="mt-4 relative h-24 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="Traditional Colombian Sancocho soup served in rustic black clay cookware from La Chamba, steaming hot with plantains, corn on the cob, yuca, accompanied by cilantro, avocado, and lime on an upscale banquet wooden table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP10tcRsaqs-HwqjS2adjxYFcVdn-9WSucVir02JE9TfVeV7r85xtnAB_4c3kcRu-xb5NmslE_OhqO62Mr8LsKPDMK6nmIakn4i1f8wQ8yLLS5XLJVhLvTOmnxM6xS1G1zYm8p2Out4tPac2HTVS3mnU1Bk9n_Ge-8SrJYCqMMtMnqto_B7lFP4oIkz404fHgCF_uYWNIwNkt3g2o_0ojUHNe6KyAQRIOeedFvwQcXWtqd4TKtWJm0" />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent flex items-end p-2.5">
                        <span className="text-[11px] font-medium text-on-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">
                            workspace_premium
                          </span>
                          {' '}Menaje La Chamba Cerámica
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                      {' '}Confirmar Reserva
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 px-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary text-xs font-medium transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          edit_note
                        </span>
                        {' '}Cotización
                      </button>
                      {' '}
                      <button className="py-2 px-2.5 rounded-lg bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-sm">
                          link
                        </span>
                        {' '}Link Mollie
                      </button>
                    </div>
                    <button className="w-full py-2 px-3 rounded-lg text-error hover:bg-error-container/40 text-xs font-semibold transition-all flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        close
                      </span>
                      {' '}Rechazar Reserva
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="reservation-card opacity-90 bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(28,28,25,0.03)] transition-all hover:opacity-100" data-code="#CAT-2025-0870" data-name="Elena Bakker" data-status="finalizadas">
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="font-mono text-xs font-bold text-outline bg-surface-container px-2.5 py-1 rounded-md">
                      #CAT-2025-0870
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-[11px] font-semibold text-on-surface-variant">
                      <span className="material-symbols-outlined text-xs">
                        task_alt
                      </span>
                      {' '}Servicio Finalizado y Liquidado
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-[11px] text-outline">
                      08 Nov, 2025
                    </span>
                  </div>
                  <h2 className="font-headline text-lg sm:text-xl font-bold text-primary mb-3">
                    Tasting Colombian Street Food (Arepas de Queso, Empanadas &amp; Pandebonos)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 bg-surface-container-low rounded-lg px-4 mb-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Cliente
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5">
                        Elena Bakker
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Jordaan Private Studio
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Pax &amp; Formato
                      </div>
                      <div className="text-sm font-semibold text-on-surface mt-0.5">
                        20 Pax · Retiro en Local
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Cajas térmicas selladas
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-outline">
                        Facturación Total
                      </div>
                      <div className="text-sm font-bold text-primary mt-0.5">
                        € 520.00 (Pagado 100%)
                      </div>
                      <div className="text-xs text-secondary font-medium">
                        Factura Mollie #MO-9821
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-64 flex flex-row xl:flex-col justify-end items-center xl:items-end gap-3 self-stretch">
                  <div className="text-right hidden xl:block">
                    <div className="text-xs font-medium text-outline">
                      Calificación del cliente
                    </div>
                    <div className="flex items-center justify-end gap-1 text-tertiary-container mt-0.5">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {' '}
                      <span className="text-xs font-bold ml-1 text-primary">
                        5.0
                      </span>
                    </div>
                  </div>
                  <button className="py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-medium text-primary transition-all flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">
                      replay
                    </span>
                    {' '}Replicar para otra fecha
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <span className="material-symbols-outlined">
                  inventory
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Stock &amp; Insumos Importados
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                Masa de Maíz Trillado &amp; Hojas de Plátano
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Inventario suficiente para 120 tamales adicionales. Próximo embarque desde Bogotá llega el viernes al puerto de Rotterdam.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <span className="material-symbols-outlined">
                  thermostat
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Protocolo Térmico HACCP
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                Menaje Caliente &amp; Cadena de Frío
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Los contenedores isotérmicos mantienen la lechona a &gt;68°C durante traslados de hasta 90 minutos dentro del anillo A10 de Ámsterdam.
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
                {' '}
                <span className="text-xs font-bold uppercase tracking-wider">
                  Pasarela Mollie NL
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-primary mb-1">
                iDeal, Bancontact &amp; Tarjetas
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Los enlaces generados expiran en 48 horas. Se aplica un recargo automático del 50% como adelanto para confirmar la fecha del catering.
              </p>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden" id="modal-reject">
            <div className="bg-surface-container-lowest max-w-md w-full rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-error">
                  <span className="material-symbols-outlined">
                    cancel
                  </span>
                  <h3 className="font-headline text-lg font-bold">
                    Rechazar Reserva
                  </h3>
                </div>
                <button className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <p className="text-xs text-on-surface-variant mb-4">
                Indica el motivo para notificar al cliente cordialmente por correo y liberar la fecha en el calendario de cocina.
              </p>
              <div className="space-y-2 mb-4">
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input defaultChecked className="accent-secondary" name="reject_reason" type="radio" value="capacidad" />
                  {' '}
                  <span>
                    Capacidad de cocina al máximo en esta fecha
                  </span>
                </label>
                {' '}
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input className="accent-secondary" name="reject_reason" type="radio" value="distancia" />
                  {' '}
                  <span>
                    Ubicación fuera del radio logístico de Ámsterdam
                  </span>
                </label>
                {' '}
                <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-xs cursor-pointer hover:bg-surface-container">
                  <input className="accent-secondary" name="reject_reason" type="radio" value="insumos" />
                  {' '}
                  <span>
                    Ingredientes o menaje artesanal no disponibles
                  </span>
                </label>
              </div>
              <textarea className="w-full bg-surface-container-low text-xs p-3 rounded-lg outline-hidden placeholder:text-outline mb-5 focus:bg-surface-container" placeholder="Mensaje personalizado opcional para el cliente..." rows={2}></textarea>
              <div className="flex items-center justify-end gap-2">
                <button className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
                  Cancelar
                </button>
                {' '}
                <button className="px-4 py-2 rounded-lg text-xs font-semibold bg-error text-on-error hover:opacity-90">
                  Confirmar Rechazo
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden" id="modal-adjust">
            <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-secondary">
                    request_quote
                  </span>
                  <h3 className="font-headline text-lg font-bold">
                    Ajustar Cotización de Catering
                  </h3>
                </div>
                <button className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                    Reserva Seleccionada
                  </label>
                  <div className="font-mono text-sm font-semibold text-secondary" id="modal-adjust-code">
                    #CAT-2025-XXXX
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                      Monto Base (€ sin BTW)
                    </label>
                    {' '}
                    <input className="w-full bg-surface-container-low text-sm font-semibold p-2.5 rounded-lg outline-hidden focus:bg-surface-container" id="input-subtotal" type="number" defaultValue="1600.91" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                      Tasa BTW Aplicable
                    </label>
                    <select className="w-full bg-surface-container-low text-sm p-2.5 rounded-lg outline-hidden">
                      <option value="9">
                        9% (Alimentos y bebidas)
                      </option>
                      <option value="21">
                        21% (Servicio de garzones/alquiler)
                      </option>
                      <option value="mixto">
                        Mixto (9% + 21%)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
                    Costos Adicionales / Descuentos
                  </label>
                  <div className="flex items-center gap-2">
                    <input className="flex-1 bg-surface-container-low text-xs p-2.5 rounded-lg outline-hidden" placeholder="Ej. Envío térmico especial Noord" type="text" />
                    {' '}
                    <input className="w-24 bg-surface-container-low text-xs p-2.5 rounded-lg outline-hidden" placeholder="€ + / -" type="number" />
                  </div>
                </div>
                <div className="p-3 bg-secondary-fixed/30 rounded-lg flex items-center justify-between">
                  <span className="text-xs font-medium text-on-secondary-fixed-variant">
                    Total Recalculado (con BTW):
                  </span>
                  {' '}
                  <span className="font-headline text-lg font-bold text-primary" id="recalculated-total">
                    € 1,745.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
                  Descartar
                </button>
                {' '}
                <button className="px-5 py-2 rounded-lg text-xs font-semibold bg-primary text-on-primary hover:bg-primary-container">
                  Guardar &amp; Notificar Cliente
                </button>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 text-xs font-medium translate-y-24 opacity-0 transition-all duration-300 z-50" id="toast">
            <span className="material-symbols-outlined text-secondary text-base" id="toast-icon">
              check_circle
            </span>
            {' '}
            <span id="toast-message">
              Operación completada con éxito
            </span>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
