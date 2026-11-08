import { whatsappLink, WHATSAPP_DISPLAY } from '@/config/contact';
import { SEDE_PRINCIPAL } from '@/config/sedes';

// Footer del catálogo (cat_logo_de_productos_tienda_online), compartido por las pantallas de cliente.
// Privacidad y Términos no tienen pantalla en el diseño: quedan sin destino por ahora.
const FOOTER_LINKS = ['Privacidad', 'Términos'];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-12 mt-20">
      <div className="text-center md:text-left">
        <div className="font-display text-lg font-bold text-primary">Paisabor</div>
        <address className="not-italic font-body text-label-sm text-on-surface-variant mt-1">
          {SEDE_PRINCIPAL.direccion}, {SEDE_PRINCIPAL.ciudad} · {SEDE_PRINCIPAL.pais}
        </address>
      </div>
      <div className="font-body text-label-sm text-primary text-center">
        © 2024 Paisabor. El sabor de casa en Ámsterdam.
      </div>
      <div className="flex flex-col items-center md:items-end gap-3">
        <a
          className="inline-flex items-center gap-2 bg-primary text-on-primary font-body text-label-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-container transition-colors"
          href={whatsappLink()}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          Escríbenos por WhatsApp
        </a>
        <div className="flex space-x-6">
          <span className="font-body text-label-sm text-on-surface-variant">{WHATSAPP_DISPLAY}</span>
          {FOOTER_LINKS.map((label) => (
            <a
              key={label}
              className="font-body text-label-sm text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
