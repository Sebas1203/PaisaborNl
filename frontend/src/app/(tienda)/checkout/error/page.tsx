// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/pago_no_completado_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function CheckoutErrorPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base { main>:first-child{margin-top:0!important;} main>:last-child{margin-bottom:0!important;} }" }} />
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-6xl mx-auto px-6 py-8 md:py-16">
            <div className="absolute -top-12 left-1/4 w-96 h-96 rounded-full bg-secondary-fixed-dim/20 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-lg">
                    sync_problem
                  </span>
                </span>
                {' '}
                <span className="text-xs uppercase tracking-widest font-label font-semibold text-secondary">
                  Estado del Pedido · Transacción Interrumpida
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-label text-on-surface-variant">
                <span>
                  Ámsterdam, NL
                </span>
                {' '}
                <span className="text-outline-variant">
                  /
                </span>
                {' '}
                <span>
                  Pasarela Segura Mollie
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-xl bg-surface-container-lowest shadow-[0_10px_35px_-15px_rgba(51,33,13,0.08)] overflow-hidden">
                  <div className="bg-surface-container-low px-8 pt-10 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/5 rounded-full blur-2xl"></div>
                    <div className="flex items-start gap-5">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shadow-xs">
                          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            error_circle_rounded
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-xs">
                          <span className="material-symbols-outlined text-sm font-bold">
                            priority_high
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-label font-semibold uppercase tracking-wider">
                          Pago Incompleto
                        </div>
                        <h1 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-snug">
                          No se pudo completar el pago
                        </h1>
                        <p className="text-xs text-on-surface-variant font-label pt-0.5">
                          Ref. de intento:{' '}
                          <span className="font-mono text-primary font-semibold">
                            #MOL-ERR-9821
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-8 space-y-6">
                    <p className="text-base text-on-surface leading-relaxed">
                      La transacción a través de la pasarela{' '}
                      <span className="font-semibold text-primary">
                        Mollie
                      </span>
                      {' '}no fue procesada o fue cancelada por la entidad bancaria. Tus productos siguen reservados en tu canasta para que no pierdas tu selección de nuestra cocina artesanal.
                    </p>
                    <div className="rounded-lg bg-surface-container-low p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-label font-bold text-secondary">
                        <span className="material-symbols-outlined text-base">
                          info
                        </span>
                        {' '}
                        <span>
                          Diagnóstico del sistema
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-sm font-semibold text-primary">
                          Motivo reportado: Tiempo de espera agotado o fondos insuficientes
                        </p>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          El servidor del emisor no respondió dentro del tiempo reglamentario o no autorizó la retención del saldo. No se ha aplicado ningún cargo a tu cuenta bancaria.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-surface-container text-xs text-on-surface-variant">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-lg">
                          shopping_basket
                        </span>
                        {' '}
                        <span>
                          Canasta conservada por:
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono font-bold text-primary text-sm" id="timer-box">
                        <span className="material-symbols-outlined text-sm text-secondary animate-pulse">
                          timer
                        </span>
                        {' '}
                        <span id="countdown">
                          23:45
                        </span>
                        {' '}min
                      </div>
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link className="flex-1 group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-linear-to-r from-primary via-primary-container to-secondary text-on-primary font-label text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200" data-path="reintentar-pago" href="/checkout/pago">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:rotate-180 duration-500">
                          replay
                        </span>
                        {' '}
                        <span>
                          Reintentar Pago
                        </span>
                      </Link>
                      <Link className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label text-sm font-semibold transition-colors duration-200" data-path="cambiar-metodo" href="/checkout/pago">
                        <span className="material-symbols-outlined text-lg">
                          credit_card
                        </span>
                        {' '}
                        <span>
                          Elegir otro método
                        </span>
                      </Link>
                      <Link className="inline-flex items-center justify-center p-4 rounded-lg bg-surface-container-low hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-colors duration-200" data-path="carrito" href="/checkout" title="Volver a la canasta">
                        <span className="material-symbols-outlined text-lg">
                          arrow_back
                        </span>
                      </Link>
                    </div>
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
                      <span className="font-label">
                        Métodos disponibles para reintentar:
                      </span>
                      <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-primary">
                        <span className="px-2 py-1 rounded-sm bg-surface-container">
                          iDEAL
                        </span>
                        {' '}
                        <span className="px-2 py-1 rounded-sm bg-surface-container">
                          Visa/Mastercard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-low p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-md">
                    <div className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-secondary font-bold">
                      <span className="material-symbols-outlined text-base">
                        support_agent
                      </span>
                      {' '}
                      <span>
                        Atención Personalizada
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-lg text-primary">
                      ¿Necesitas ayuda con tu orden?
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      Nuestro equipo en Ámsterdam está listo para asistirte si tu tarjeta holandesa o internacional presenta bloqueos.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5 w-full sm:w-auto flex-shrink-0">
                    <a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-bright text-xs font-semibold text-primary shadow-xs transition-colors" href="mailto:contacto@paisabor.nl">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        mail
                      </span>
                      {' '}
                      <span>
                        contacto@paisabor.nl
                      </span>
                    </a>
                    {' '}
                    <a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-bright text-xs font-semibold text-primary shadow-xs transition-colors" href="https://wa.me/31208943210" rel="noopener" target="_blank">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        chat
                      </span>
                      {' '}
                      <span>
                        WhatsApp: +31 20 894 3210
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-xl bg-surface-container p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <span className="text-[10px] uppercase font-label tracking-widest font-bold text-secondary">
                        Tu Selección Reservada
                      </span>
                      <h2 className="font-headline font-bold text-xl text-primary">
                        Canasta en Espera
                      </h2>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary">
                      3 ítems
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-surface-container-lowest flex items-center gap-3.5 shadow-xs">
                      <div className="w-14 h-14 rounded-md overflow-hidden bg-surface-container-high flex-shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Traditional golden Colombian cheese arepas with melted queso blanco on a dark rustic ceramic plate, soft natural kitchen light, artisanal Colombian food styling in Amsterdam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoro5t5-TiIS2QqE0KE-K_loIF1LHXQfP7bjOQ1tF5dzTIB7isLL_ZvBVHeC9pFqURx8FXvrPAww4lfj8aW01aZ6aSazPtpOqJdNlxMN0suSnh97nKnr3NLb0RpcVL1ZcU_CapyJ_gDeFwZO4ssQS7dcXJq9nGCrRLFLOTaQq9graYL5q-52y31iT9fu-3JvWwADedTclDUyNR_dhAtOYzI88m5plPBSIv28me4ikhtzvajNVz8p8U" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Arepas de Choclo con Queso Campesino
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Pack artesanal x 4 unidades
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="inline-block px-1.5 py-0.2 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-semibold uppercase">
                            Maíz Dulce
                          </span>
                          {' '}
                          <span className="text-[10px] text-on-surface-variant font-mono">
                            Cant: 1
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-primary">
                        € 14,50
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-container-lowest flex items-center gap-3.5 shadow-xs">
                      <div className="w-14 h-14 rounded-md overflow-hidden bg-surface-container-high flex-shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Crispy golden Colombian beef and potato empanadas served with homemade spicy ají sauce in a terracotta bowl, warm ambient light, gourmet Colombian bakery aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH7ut-Q0tNdWQ9xm2iQ2WrhU1PkkruO2ZNWocZ0ysbvSHxXah3kni11gpB1Z42c3TWMcbWKH3BORHiIBEsuURBwtXxpBx1X9Goe_EbQOWzdqAm5bbQPuJhvQLO58te4tjJFB_LjAJTDQzgordgs8DoX73h5kkZVxvjm6F1KdbyJBqA3zVyXrZZheYy0Hy8svG1XN3jerAG3I8hd7rWwALOrWvQnHam1OX5uhMeF0Jjw9cruxXi-R-Q" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Empanadas Paisas Horneadas
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Carne mechada y papa criolla x 6
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="inline-block px-1.5 py-0.2 rounded-sm bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-semibold uppercase">
                            Ají Casero
                          </span>
                          {' '}
                          <span className="text-[10px] text-on-surface-variant font-mono">
                            Cant: 2
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-primary">
                        € 22,00
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-container-lowest flex items-center gap-3.5 shadow-xs">
                      <div className="w-14 h-14 rounded-md overflow-hidden bg-surface-container-high flex-shrink-0">
                        <img className="w-full h-full object-cover" data-alt="Specialty Colombian coffee beans from Huila in a minimalist kraft package, roasted dark brown coffee beans, warm wooden table setting, Amsterdam artisan vibe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcuFL2GI_UU-Mm7vx7RjMS_WYc1yIH0Og2JByMpzCp6enlqcnFW9ff7rSTrNT4p_Q38CKdMLAThBqZELPE8niXeNGu4I9VV_WvHu1vaUEmaES5HZpa-bv2GRYd-PCXLidcYfme08rD3MA_ng8o6hlKiZUowc07YK2HmNPIqYu974bOTSLeQIIv-TUx12D60KDNM-Zq8Y2sY_Q93CQRaQtG_c3dCWdofuTGCqupMKNN4VqfOh4R8ZtD" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-headline text-xs font-bold text-primary truncate">
                          Café de Origen Huila (Tueste Medio)
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Grano entero · 250g
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="inline-block px-1.5 py-0.2 rounded-sm bg-secondary-fixed text-on-secondary-fixed text-[9px] font-semibold uppercase">
                            Notas a Panela
                          </span>
                          {' '}
                          <span className="text-[10px] text-on-surface-variant font-mono">
                            Cant: 1
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-primary">
                        € 11,80
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 space-y-2 text-xs">
                    <div className="flex justify-between text-on-surface-variant">
                      <span>
                        Subtotal productos
                      </span>
                      {' '}
                      <span className="font-mono">
                        € 48,30
                      </span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>
                        Envío en bicicleta (Ámsterdam Centro)
                      </span>
                      {' '}
                      <span className="font-mono">
                        € 3,50
                      </span>
                    </div>
                    <div className="pt-2 flex justify-between text-sm font-bold text-primary">
                      <span className="font-headline">
                        Total retenido para compra
                      </span>
                      {' '}
                      <span className="font-mono text-base text-secondary">
                        € 51,80
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-surface-container-lowest space-y-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      location_on
                    </span>
                    <div className="text-xs">
                      <p className="font-bold text-primary">
                        Dirección de Entrega Registrada:
                      </p>
                      <p className="text-on-surface-variant">
                        Keizersgracht 421, 1016 EK Ámsterdam
                      </p>
                    </div>
                  </div>
                  <div className="text-[11px] text-on-surface-variant leading-relaxed bg-surface-container-low p-3 rounded-lg">
                    Si prefieres recoger tu pedido en nuestro taller en{' '}
                    <strong>
                      Prinsengracht
                    </strong>
                    , podrás cambiar la opción al reintentar el proceso sin recargos adicionales.
                  </div>
                </div>
                <div className="px-2 flex items-center justify-between text-xs text-on-surface-variant">
                  <a className="inline-flex items-center gap-1 hover:text-secondary transition-colors" data-path="preguntas-frecuentes" href="#">
                    <span className="material-symbols-outlined text-sm">
                      help_outline
                    </span>
                    {' '}
                    <span>
                      ¿Por qué suelen fallar los pagos con iDEAL?
                    </span>
                  </a>
                  {' '}
                  <span className="font-label text-[10px] uppercase tracking-wider text-outline">
                    Ref: Mollie v4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
