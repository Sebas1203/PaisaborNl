import Link from 'next/link';
import { whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';

export const metadata = { title: 'Privacidad — Paisabor (prototipo)' };

// Texto para la fase de pruebas: describe lo que hace HOY el prototipo (todo en el navegador).
// TODO (antes de abrir la tienda real): política de privacidad completa según el RGPD / AVG,
// revisada por quien corresponda, cuando haya backend (Supabase), pagos (Mollie) y correos.

function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="font-headline text-xl font-bold text-primary">{titulo}</h2>
      <div className="text-on-surface-variant leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 space-y-8">
      <header className="space-y-3">
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">Privacidad</h1>
        <div role="note" className="flex items-start gap-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed p-4">
          <span className="material-symbols-outlined shrink-0">science</span>
          <p className="text-sm leading-relaxed">
            <strong>Esta web es un prototipo de prueba</strong> de la tienda de Paisabor. No se venden ni se entregan productos de verdad y
            el pago es simulado: no se cobra nada.
          </p>
        </div>
      </header>

      <Seccion titulo="Qué datos se piden">
        <p>
          Para hacer un pedido de prueba se piden nombre, correo, teléfono y, si eliges domicilio, la dirección. En la solicitud de catering,
          además, los datos del evento. Si creas una cuenta, también se guarda tu contraseña (cifrada).
        </p>
      </Seccion>

      <Seccion titulo="Dónde se guardan">
        <p>
          En esta versión de prueba los datos se guardan <strong>solo en tu navegador</strong>, en este dispositivo. No se envían a ninguna base
          de datos ni a terceros, y nadie del equipo puede verlos desde otro equipo.
        </p>
        <p>
          El servicio que aloja la web puede registrar datos técnicos de la visita, como la dirección IP, en sus registros habituales.
        </p>
      </Seccion>

      <Seccion titulo="Recomendación">
        <p>Puedes usar datos inventados: la prueba funciona igual. No escribas datos bancarios ni de tarjeta en ninguna parte de la web.</p>
      </Seccion>

      <Seccion titulo="Cómo borrarlos">
        <p>Borra los datos de este sitio en tu navegador (o usa una ventana de incógnito) y desaparecen pedidos, cuentas y solicitudes de prueba.</p>
      </Seccion>

      <Seccion titulo="Preguntas">
        <p>
          Escríbenos por WhatsApp al{' '}
          <a className="text-secondary font-semibold hover:underline" href={whatsappLink('Hola Paisabor, tengo una pregunta sobre la privacidad de la web de prueba.')} rel="noopener noreferrer" target="_blank">
            {WHATSAPP_DISPLAY}
          </a>
          .
        </p>
      </Seccion>

      <section className="rounded-xl bg-surface-container-low p-5 space-y-2">
        <h2 className="font-headline text-base font-bold text-primary">Provisional</h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          El resto de la política de privacidad (responsable del tratamiento, finalidades, base legal, plazos de conservación, encargados como el
          proveedor de pagos o de correo, y cómo ejercer tus derechos) está pendiente y se publicará antes de abrir la tienda real.
        </p>
      </section>

      <Link href="/" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline">
        <span className="material-symbols-outlined text-base">arrow_back</span>
        Volver a la tienda
      </Link>
    </main>
  );
}
