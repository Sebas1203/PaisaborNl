// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/administrador_pedidos
/* eslint-disable @next/next/no-img-element */

export default function AdminPedidosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface antialiased">
      <main className="relative pt-16 w-full bg-surface min-h-screen px-8 py-8">
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  {' '}Cocina &amp; Envíos Activos
                </span>
                {' '}
                <span className="text-xs text-on-surface-variant font-medium">
                  Ámsterdam Central · GMT+1
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Gestión de Pedidos
              </h1>
              <p className="text-sm text-on-surface-variant mt-1 font-body">
                Supervisión en tiempo real de despachos, retiros y flujo de cocina colonial.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-low p-2 rounded-xl">
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Pedidos Hoy
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    lunch_dining
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  38
                </div>
                <span className="text-[11px] text-secondary font-semibold mt-0.5">
                  +14% vs ayer
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Facturación (BTW inc.)
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    payments
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  € 1.482
                  <span className="text-sm font-normal text-on-surface-variant">
                    ,50
                  </span>
                </div>
                <span className="text-[11px] text-on-surface-variant mt-0.5">
                  BTW (9% &amp; 21%): € 148,20
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    En Horno / Armado
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary-container">
                    skillet
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  6
                </div>
                <span className="text-[11px] text-secondary font-medium mt-0.5">
                  3 con despacho prioritario
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col shadow-xs">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>
                    Ticket Promedio
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-base text-secondary">
                    trending_up
                  </span>
                </div>
                <div className="font-headline text-2xl font-bold text-primary mt-1">
                  € 39
                  <span className="text-sm font-normal text-on-surface-variant">
                    ,01
                  </span>
                </div>
                <span className="text-[11px] text-on-surface-variant mt-0.5">
                  Ámsterdam + Amstelveen
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between shadow-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0" id="filterStatusGroup">
              <button className="filter-pill active px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-on-primary transition-all whitespace-nowrap" data-status="all">
                Todos (38)
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="pending">
                Pendientes (4)
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="prep">
                En Preparación (6)
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="delivered">
                Entregados (27)
              </button>
              {' '}
              <button className="filter-pill px-3.5 py-1.5 rounded-lg text-xs font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" data-status="canceled">
                Cancelados (1)
              </button>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="inline-flex p-1 bg-surface-container-high rounded-lg text-xs">
                <button className="px-2.5 py-1 rounded-sm bg-surface-container-lowest font-medium text-primary shadow-xs">
                  Hoy
                </button>
                {' '}
                <button className="px-2.5 py-1 rounded-sm text-on-surface-variant hover:text-on-surface font-medium transition-colors">
                  Esta Semana
                </button>
                {' '}
                <button className="px-2.5 py-1 rounded-sm text-on-surface-variant hover:text-on-surface font-medium flex items-center gap-1 transition-colors">
                  <span>
                    Personalizado
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>
                </button>
              </div>
              <div className="relative flex-1 sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base pointer-events-none">
                  search
                </span>
                {' '}
                <input className="w-full bg-surface-container-lowest text-xs text-on-surface pl-9 pr-3 py-2 rounded-lg placeholder:text-outline focus:outline-hidden focus:bg-surface-container-highest transition-colors shadow-xs" id="searchInput" placeholder="Buscar por código (#PSB) o cliente..." type="text" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
              <div className="px-5 py-4 bg-surface-container flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    receipt_long
                  </span>
                  {' '}
                  <span className="font-headline font-bold text-sm text-primary uppercase tracking-wider">
                    Flujo de Órdenes
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">
                  Mostrando 5 de 38 órdenes
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs" id="ordersTable">
                  <thead>
                    <tr className="bg-surface-container-high/60 text-on-surface-variant uppercase text-[10px] tracking-wider font-semibold">
                      <th className="py-3 px-4">
                        Código &amp; Fecha
                      </th>
                      <th className="py-3 px-4">
                        Cliente
                      </th>
                      <th className="py-3 px-4">
                        Modalidad
                      </th>
                      <th className="py-3 px-4">
                        Total
                      </th>
                      <th className="py-3 px-4">
                        Pago
                      </th>
                      <th className="py-3 px-4">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr className="order-row group cursor-pointer bg-surface-container-lowest transition-colors hover:bg-surface-container-high/40 active-row" data-address="Herengracht 412, 1016 BZ Ámsterdam" data-btw="4.14" data-customer="Camila Restrepo" data-envio="3.50" data-id="PSB-2025-1084" data-modalidad="Domicilio Ámsterdam" data-pago="iDEAL Mollie" data-phone="+31 6 4921 8834" data-status="prep" data-subtotal="46.00" data-total="53.64">
                      <td className="py-3.5 px-4 font-body">
                        <div className="font-semibold text-secondary font-headline flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          {' '}#PSB-2025-1084
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          Hoy, 13:42
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-on-surface">
                          Camila Restrepo
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          +31 6 4921 8834
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                          <span className="material-symbols-outlined text-[13px] text-secondary">
                            local_shipping
                          </span>
                          {' '}Domicilio
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary">
                          € 53,64
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          BTW inc.
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          {' '}iDEAL Mollie
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-secondary-fixed text-on-secondary-fixed">
                          En preparación
                        </span>
                      </td>
                    </tr>
                    <tr className="order-row group cursor-pointer bg-surface hover:bg-surface-container-high/40 transition-colors" data-address="Retiro en Tienda (Kinkerstraat 58)" data-btw="2.34" data-customer="Lars Van Der Berg" data-envio="0.00" data-id="PSB-2025-1083" data-modalidad="Retiro en local" data-pago="Tarjeta Stripe" data-phone="+31 6 1823 4409" data-status="delivered" data-subtotal="26.00" data-total="28.34">
                      <td className="py-3.5 px-4 font-body">
                        <div className="font-semibold text-primary font-headline">
                          #PSB-2025-1083
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          Hoy, 13:15
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-on-surface">
                          Lars Van Der Berg
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          +31 6 1823 4409
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                          <span className="material-symbols-outlined text-[13px] text-outline">
                            storefront
                          </span>
                          {' '}Retiro Local
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary">
                          € 28,34
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          BTW inc.
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          {' '}Tarjeta
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-surface-container-highest text-on-surface-variant">
                          Entregado
                        </span>
                      </td>
                    </tr>
                    <tr className="order-row group cursor-pointer bg-surface hover:bg-surface-container-high/40 transition-colors" data-address="Prinsengracht 88, 1015 DZ Ámsterdam" data-btw="3.46" data-customer="Saskia De Jong" data-envio="3.50" data-id="PSB-2025-1082" data-modalidad="Domicilio Ámsterdam" data-pago="iDEAL Mollie" data-phone="+31 6 8390 1120" data-status="pending" data-subtotal="38.50" data-total="45.46">
                      <td className="py-3.5 px-4 font-body">
                        <div className="font-semibold text-primary font-headline">
                          #PSB-2025-1082
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          Hoy, 12:50
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-on-surface">
                          Saskia De Jong
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          +31 6 8390 1120
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                          <span className="material-symbols-outlined text-[13px] text-secondary">
                            local_shipping
                          </span>
                          {' '}Domicilio
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary">
                          € 45,46
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          BTW inc.
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">
                          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                          {' '}iDEAL Mollie
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-tertiary-fixed text-on-tertiary-fixed">
                          Pendiente
                        </span>
                      </td>
                    </tr>
                    <tr className="order-row group cursor-pointer bg-surface hover:bg-surface-container-high/40 transition-colors" data-address="Ceintuurbaan 210, 1072 GC Ámsterdam" data-btw="5.58" data-customer="Felipe Montoya" data-envio="3.50" data-id="PSB-2025-1081" data-modalidad="Domicilio Ámsterdam" data-pago="iDEAL Mollie" data-phone="+31 6 3044 9821" data-status="delivered" data-subtotal="62.00" data-total="71.08">
                      <td className="py-3.5 px-4 font-body">
                        <div className="font-semibold text-primary font-headline">
                          #PSB-2025-1081
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          Hoy, 12:10
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-on-surface">
                          Felipe Montoya
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          +31 6 3044 9821
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                          <span className="material-symbols-outlined text-[13px] text-secondary">
                            local_shipping
                          </span>
                          {' '}Domicilio
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary">
                          € 71,08
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          BTW inc.
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          {' '}iDEAL Mollie
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-surface-container-highest text-on-surface-variant">
                          Entregado
                        </span>
                      </td>
                    </tr>
                    <tr className="order-row group cursor-pointer bg-surface hover:bg-surface-container-high/40 transition-colors" data-address="Retiro en Tienda (Kinkerstraat 58)" data-btw="1.35" data-customer="Daan Bakker" data-envio="0.00" data-id="PSB-2025-1080" data-modalidad="Retiro en local" data-pago="Tarjeta" data-phone="+31 6 7712 5900" data-status="canceled" data-subtotal="15.00" data-total="16.35">
                      <td className="py-3.5 px-4 font-body">
                        <div className="font-semibold text-primary font-headline">
                          #PSB-2025-1080
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          Hoy, 11:22
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-on-surface">
                          Daan Bakker
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          +31 6 7712 5900
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-highest text-[11px] font-medium text-on-surface">
                          <span className="material-symbols-outlined text-[13px] text-outline">
                            storefront
                          </span>
                          {' '}Retiro Local
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-primary">
                          € 16,35
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          BTW inc.
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface">
                          <span className="w-2 h-2 rounded-full bg-red-600"></span>
                          {' '}Reembolsado
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-error-container text-on-error-container">
                          Cancelado
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-surface-container flex items-center justify-between text-xs text-on-surface-variant">
                <span>
                  Página 1 de 8
                </span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    Anterior
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-primary text-on-primary font-medium">
                    1
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    2
                  </button>
                  {' '}
                  <button className="px-2 py-1 rounded-sm bg-surface-container-high hover:bg-surface-container-highest font-medium transition-colors text-on-surface">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5 bg-surface-container-lowest rounded-xl p-6 shadow-md relative">
              <div className="flex items-start justify-between pb-3 border-b-0">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-semibold text-secondary tracking-widest font-body">
                      Detalle de Orden
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase tracking-wider" id="detailStatusBadge">
                      En preparación
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-primary mt-1" id="detailOrderCode">
                    #PSB-2025-1084
                  </h2>
                  <span className="text-xs text-on-surface-variant font-medium">
                    Registrado a las 13:42 · Pagado vía iDEAL
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">
                    restaurant
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">
                    Datos del Cliente
                  </span>
                  {' '}
                  <span className="text-[11px] font-medium text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      verified
                    </span>
                    {' '}Cliente Frecuente (4 pedidos)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline font-bold text-base">
                    CR
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-headline font-semibold text-sm text-primary" id="detailCustomerName">
                      Camila Restrepo
                    </div>
                    <div className="text-xs text-on-surface-variant flex items-center gap-1 font-mono" id="detailCustomerPhone">
                      <span className="material-symbols-outlined text-[13px] text-outline">
                        call
                      </span>
                      {' '}+31 6 4921 8834
                    </div>
                  </div>
                </div>
                <div className="pt-2 text-xs text-on-surface flex items-start gap-2 bg-surface-container-lowest p-2.5 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0">
                    pin_drop
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-primary">
                      Dirección de Entrega:
                    </div>
                    <div className="text-on-surface-variant text-[11px]" id="detailAddress">
                      Herengracht 412, 1016 BZ Ámsterdam
                    </div>
                    <div className="text-[11px] text-secondary font-medium mt-1 italic">
                      "Tocar timbre 3A. Si no respondo, dejar con vecino del 3B. Código de portón: 4910."
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase font-semibold tracking-wider text-on-surface-variant">
                    Productos Artesanales (3)
                  </span>
                  {' '}
                  <span className="text-outline">
                    Cocina Central
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Traditional Colombian sweet corn arepas with melting paisa artisan white cheese, golden brown crust, served on a warm rustic earthenware plate in Amsterdam." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHl3cR3MSRniTDRkXeWAhNy5W4XQGa00nFNiS3W9LdZFjf9Nb8jNRGuPVMZs1X5E0epTpjHwkU7pNLd4bzvMI7z5gn6BOt9XMuVcGGau_amKuedpJrm9wV6OSUz77AWlX0YUxMRdD_zzhQIEukmfqy2_mJRuxZUzbAi5DmvTDH0CGrUMtRvNLvY_Bv5RBsZ_-LbXyLuuvLTwToII4W7vFmbySuH9btLMXObuW1NFdYaD6d58VFAySM" />
                      <div className="min-w-0">
                        <div className="font-headline text-xs font-bold text-primary truncate">
                          Arepas de Choclo con Queso
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          2 unidades · Queso campesino fundido
                        </div>
                        <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded-sm text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-medium">
                          Asado en parrilla
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-primary font-headline">
                        € 17,00
                      </div>
                      <div className="text-[10px] text-on-surface-variant">
                        € 8,50 c/u
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Warm freshly baked Colombian pandebonos stacked softly on parchment paper with steam rising, subtle terracotta ambient tones and golden cheese crust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgnpZfX32WxHjjyBoxfKFFja69z3tw-xf6cLMpw0XFFUmJFztjEJaB0ukjSEH5qNkrPKs8P9TjrmNHiTtimOASj6jyF_PB_OBk4Y-AL4HM3-GHUoVTq60tl4ky4ux1D6-wi8CVHs-LGfAAbJmkJ96jzbsiCV1A6_-xXkt6G14v12wK06Tl8OzCgl-6xqiN1eC1wIUb6SgSYy0zC3IHt8PAoaLBJepe257Yl07x9mvR40tETRB2ryac" />
                      <div className="min-w-0">
                        <div className="font-headline text-xs font-bold text-primary truncate">
                          Pandebonos Vallunos Clásicos
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Caja de 6 unidades · Horneado al momento
                        </div>
                        <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded-sm text-[10px] bg-secondary-fixed text-on-secondary-fixed font-medium">
                          Recién horneado
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-primary font-headline">
                        € 15,00
                      </div>
                      <div className="text-[10px] text-on-surface-variant">
                        € 2,50 c/u
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img className="w-12 h-12 rounded-lg object-cover bg-surface-container shrink-0" data-alt="High end specialty Colombian coffee bag with Huila origin label standing next to roasted coffee beans on a dark wooden hacienda tabletop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Ij4q9ulrkErs_gsrITCgVlXf-N8hkVWkq7l4xiW_poivVGUjrH9DDVRebypzSwrJuvsTul_JsvSEYIXxWh1OTV5Bhze9GnlPuhhBE8ACMOeLt5LZDzCzn6gZItwNG1UrdlDxaG4xsMGsz3wytw7BFkcX1jbGhVgp7NQDHLRBfqYFJAHJ24I3e4OXoHvPkCxGDO7Km_D18hG9PqqrKQo0pey0GUEbhSbu6fvG8pcoQRJy1GZjBcrM" />
                      <div className="min-w-0">
                        <div className="font-headline text-xs font-bold text-primary truncate">
                          Café Especial Huila (250g)
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Tueste medio · Notas de caramelo y cítricos
                        </div>
                        <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded-sm text-[10px] bg-surface-container-highest text-on-surface font-medium">
                          Grano entero
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-primary font-headline">
                        € 14,00
                      </div>
                      <div className="text-[10px] text-on-surface-variant">
                        Bolsa 250g
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-on-surface-variant">
                  <span>
                    Subtotal Alimentos
                  </span>
                  {' '}
                  <span className="font-medium text-on-surface" id="detailSubtotal">
                    € 46,00
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>
                    Envío Local (Bicicleta / Mensajería)
                  </span>
                  {' '}
                  <span className="font-medium text-on-surface" id="detailEnvio">
                    € 3,50
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>
                    BTW 9% (Alimentos y Café)
                  </span>
                  {' '}
                  <span className="font-medium text-on-surface" id="detailBtw">
                    € 4,14
                  </span>
                </div>
                <div className="pt-2 mt-1 flex justify-between items-center text-sm font-bold text-primary bg-surface-container-high/40 p-2 rounded-lg">
                  <span className="font-headline uppercase tracking-wider text-xs">
                    Total Facturado
                  </span>
                  {' '}
                  <span className="font-headline text-base text-primary" id="detailTotal">
                    € 53,64
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase font-semibold text-on-surface-variant tracking-wider">
                  Actualizar Estado de la Orden
                </label>
                <div className="relative">
                  <select className="w-full bg-surface-container-low text-xs font-semibold text-primary py-3 px-3.5 rounded-lg appearance-none focus:outline-hidden focus:bg-surface-container-high transition-colors" id="statusSelect" defaultValue="prep">
                    <option value="pending">
                      Pendiente de Aceptación
                    </option>
                    <option value="prep">
                      En preparación artesanal
                    </option>
                    <option value="route">
                      En ruta / Listo para retiro
                    </option>
                    <option value="delivered">
                      Entregado al cliente
                    </option>
                    <option value="canceled">
                      Cancelado / Reembolsado
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-secondary pointer-events-none text-base">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button className="flex-1 py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-headline text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs">
                  <span className="material-symbols-outlined text-base">
                    save
                  </span>
                  {' '}
                  <span>
                    Guardar Estado
                  </span>
                </button>
                {' '}
                <button className="py-2.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-medium text-xs flex items-center justify-center gap-1.5 transition-colors">
                  <span className="material-symbols-outlined text-base text-secondary">
                    print
                  </span>
                  {' '}
                  <span className="hidden sm:inline">
                    Comprobante
                  </span>
                </button>
                {' '}
                <a className="py-2.5 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors" href="https://wa.me/31649218834" target="_blank">
                  <span className="material-symbols-outlined text-base">
                    chat
                  </span>
                  {' '}
                  <span>
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
