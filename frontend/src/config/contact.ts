// Datos de contacto de Paisabor: única fuente para teléfonos, WhatsApp y correos de la app.

export const WHATSAPP_DISPLAY = '+31 6 42517023';
export const WHATSAPP_E164 = '31642517023';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;
export const TEL_URL = `tel:+${WHATSAPP_E164}`;

/** Enlace de WhatsApp, opcionalmente con un mensaje prellenado */
export function whatsappLink(mensaje?: string): string {
  return mensaje ? `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}` : WHATSAPP_URL;
}

// TODO: correo de Google Workspace pendiente.
export const EMAIL_CONTACTO = '';
// TODO: correo de Google Workspace pendiente.
export const EMAIL_SOPORTE = '';
