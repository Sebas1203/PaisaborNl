// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/detalle_del_pedido_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Go } from '@/components/ui/Go';
import { ResumenPedido } from '@/components/order/ResumenPedido';
import { lineasConItem, pedidoPorId } from '@/data/mock';
import { formatFecha, ORDER_STATUS_LABELS } from '@/lib/format';
import { whatsappLink } from '@/config/contact';
import { direccionCorta, SEDE_PRINCIPAL } from '@/config/sedes';

export default async function CuentaPedidosIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // MOCK: pedido de ejemplo por id (src/data/mock.ts)
  const pedido = pedidoPorId(id);
  if (!pedido) notFound();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }\n}" }} />
    <div className="bg-background font-body text-on-surface antialiased overflow-x-clip">
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-12">
            <div className="absolute -top-12 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-tertiary-fixed/40 blur-3xl pointer-events-none -z-10"></div>
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <Link className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors group" href="/cuenta/pedidos">
                  <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </span>
                  {' '}
                  <span>
                    Volver a Mis Pedidos y Reservas
                  </span>
                </Link>
                {' '}
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-label text-outline uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    verified
                  </span>
                  {' '}Pedido Paisabor
                </span>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 shadow-[0_4px_24px_-10px_rgba(51,33,13,0.06)]">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
                      Orden Confirmada
                    </span>
                    {' '}
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                    {' '}
                    <span className="text-xs font-label text-on-surface-variant">
                      {SEDE_PRINCIPAL.nombre}
                    </span>
                  </div>
                  <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
                    Detalle del Pedido{' '}
                    <span className="text-secondary font-light">
                      #{pedido.id}
                    </span>
                  </h1>
                  <p className="text-xs sm:text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-outline">
                      schedule
                    </span>
                    {' '}
                    <span>
                      Fecha del pedido: <strong>{formatFecha(pedido.fecha)}</strong>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="inline-flex items-center gap-2.5 bg-tertiary-fixed/80 text-on-tertiary-fixed px-4 py-2.5 rounded-lg shadow-xs">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      {' '}
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                    </span>
                    {' '}
                    <span className="font-label text-xs sm:text-sm font-bold tracking-wider uppercase">
                      {ORDER_STATUS_LABELS[pedido.estado]}
                    </span>
                  </div>
                  <span className="text-[11px] font-label text-on-surface-variant text-right">
                    Tiempo estimado de despacho: 17:30 CET
                  </span>
                </div>
              </div>
            </section>
            <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <section className="lg:col-span-7 space-y-8">
                <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-[0_8px_32px_-12px_rgba(51,33,13,0.06)] space-y-6">
                  <ResumenPedido lineas={lineasConItem(pedido.lineas)} titulo="Cesta del Pedido" envio={pedido.entrega === "domicilio" ? null : undefined} />
                </div>
              </section>
              <section className="lg:col-span-5 space-y-6">
                <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_8px_32px_-12px_rgba(51,33,13,0.06)] space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-2xl">
                        local_shipping
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline text-lg font-bold text-primary">
                        Datos de Entrega
                      </h2>
                      <p className="text-xs text-on-surface-variant font-label">
                        Ruta y logística sin huella de carbono
                      </p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-surface-container-low rounded-lg flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">
                      electric_bike
                    </span>
                    <div className="text-xs">
                      <p className="font-bold text-primary">
                        Domicilio en Ámsterdam
                      </p>
                      <p className="text-on-surface-variant">
                        Reparto ecológico en cargo-bike isotérmica
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-xs font-label">
                    <div className="space-y-1">
                      <span className="uppercase tracking-widest text-[10px] text-outline font-semibold">
                        Dirección de Destino
                      </span>
                      <div className="p-3.5 bg-surface-container rounded-lg">
                        <p className="text-sm font-bold text-primary font-headline">
                          {pedido.entrega === 'recogida' ? direccionCorta() : 'Dirección indicada en el pedido'}
                        </p>
                        <p className="text-on-surface-variant">
                          {SEDE_PRINCIPAL.ciudad}, {SEDE_PRINCIPAL.pais}
                        </p>
                        <p className="text-[11px] text-secondary font-medium mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">
                            near_me
                          </span>
                          {' '}{pedido.entrega === 'recogida' ? 'Recogida en tienda' : 'Entrega a domicilio'}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-surface-container-low rounded-lg space-y-0.5">
                        <span className="text-[10px] uppercase tracking-wider text-outline block">
                          Ventana Horaria
                        </span>
                        <p className="font-bold text-primary text-xs">
                          Hoy, 18:00 – 20:00 CET
                        </p>
                      </div>
                      <div className="p-3 bg-surface-container-low rounded-lg space-y-0.5">
                        <span className="text-[10px] uppercase tracking-wider text-outline block">
                          Temperatura
                        </span>
                        <p className="font-bold text-primary text-xs">
                          Cadena de frío activa
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="uppercase tracking-widest text-[10px] text-outline font-semibold">
                        Destinatario
                      </span>
                      <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-outline">
                            account_circle
                          </span>
                          <div>
                            <p className="font-bold text-primary">
                              {pedido.cliente}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 bg-tertiary-fixed/30 rounded-lg space-y-1">
                      <div className="flex items-center gap-1.5 text-tertiary text-[11px] font-bold">
                        <span className="material-symbols-outlined text-sm">
                          edit_note
                        </span>
                        {' '}
                        <span>
                          Instrucciones para el repartidor
                        </span>
                      </div>
                      <p className="text-xs text-on-surface italic">
                        Sin observaciones del cliente
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-[0_8px_32px_-12px_rgba(51,33,13,0.06)] space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl">
                          account_balance
                        </span>
                      </div>
                      <div>
                        <h2 className="font-headline text-lg font-bold text-primary">
                          Método de Pago
                        </h2>
                        <p className="text-xs text-on-surface-variant font-label">
                          Transacción cifrada y asegurada
                        </p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  </div>
                  <div className="space-y-3 font-label text-xs">
                    <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-sm bg-[#cc0066]/10 text-[#cc0066] font-bold flex items-center justify-center text-[10px]">
                          iD
                        </div>
                        <div>
                          <p className="font-bold text-primary">
                            iDEAL • ING Bank
                          </p>
                          <p className="text-[10px] text-outline">
                            Procesado vía Mollie B.V.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-secondary">
                        Verificado
                      </span>
                    </div>
                    <div className="space-y-2 p-3 bg-surface-container rounded-lg text-[11px]">
                      <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-outline">
                          Identificador de TRX:
                        </span>
                        {' '}
                        <span className="font-mono font-medium text-primary">
                          MOL_TRX_92817492
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-outline">
                          Autorización Bancaria:
                        </span>
                        {' '}
                        <span className="font-mono text-primary">
                          ING-NL-8472910
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-outline">
                          Estado del Cobro:
                        </span>
                        {' '}
                        <span className="font-medium text-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-secondary">
                            check
                          </span>
                          {' '}Pagado con éxito
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-surface-container hover:bg-surface-container-high text-primary font-label text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]" type="button">
                    <span className="material-symbols-outlined text-base text-secondary">
                      receipt_long
                    </span>
                    {' '}
                    <span>
                      Descargar Factura con BTW (PDF)
                    </span>
                  </button>
                </div>
              </section>
            </div>
            <section className="mt-10 lg:mt-12 pt-8 bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_24px_-10px_rgba(51,33,13,0.06)]">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-headline font-bold text-base sm:text-lg text-primary">
                  ¿Tienes alguna pregunta sobre la preparación o entrega?
                </h4>
                <p className="text-xs text-on-surface-variant max-w-xl">
                  Nuestro equipo en {SEDE_PRINCIPAL.direccion} prepara tu pedido con receta tradicional antioqueña. Escríbenos por WhatsApp para cualquier duda o cambio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <a className="w-full sm:w-auto bg-surface-container-lowest hover:bg-surface text-primary font-label text-xs font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all hover:-translate-y-0.5" href={whatsappLink(`Hola Paisabor, tengo una consulta sobre el pedido ${pedido.id}`)} rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-base text-[#25D366]">
                    chat
                  </span>
                  {' '}
                  <span>
                    Contactar por WhatsApp
                  </span>
                </a>
                <Go href="/carrito" className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary font-label text-xs font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0" type="button">
                  <span className="material-symbols-outlined text-base">
                    replay
                  </span>
                  {' '}
                  <span>
                    Repetir este Pedido
                  </span>
                </Go>
              </div>
            </section>
            <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary p-4 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="invoiceToast">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
              </div>
              <div>
                <p className="text-xs font-bold font-headline">
                  Factura Generada
                </p>
                <p className="text-[11px] text-on-primary-container font-label">
                  Descargando comprobante fiscal #{pedido.id}.pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
