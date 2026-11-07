// Footer del catálogo (cat_logo_de_productos_tienda_online), compartido por las pantallas de cliente.
// Privacidad, Términos y Contacto no tienen pantalla en el diseño: quedan sin destino por ahora.
const FOOTER_LINKS = ['Privacidad', 'Términos', 'Contacto'];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low flex flex-col md:flex-row justify-between items-center px-8 py-12 mt-20">
      <div className="font-display text-lg font-bold text-primary mb-4 md:mb-0">Paisabor</div>
      <div className="font-body text-label-sm text-primary text-center md:text-left mb-4 md:mb-0">
        © 2024 Paisabor. El Corazón de Colombia en tu Mesa.
      </div>
      <div className="flex space-x-6">
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
    </footer>
  );
}
