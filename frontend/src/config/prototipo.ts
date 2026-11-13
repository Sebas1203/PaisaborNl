// Fase de pruebas con usuarios: barra "Prototipo de prueba", reinicio de datos, enlace de
// comentarios y noindex. Se leen variables NEXT_PUBLIC_ (públicas): nunca poner secretos aquí.

/** Activo salvo NEXT_PUBLIC_PROTOTIPO=false (desactivarlo solo cuando la tienda sea real) */
export const MODO_PROTOTIPO = process.env.NEXT_PUBLIC_PROTOTIPO !== 'false';

/** Formulario de comentarios opcional (p. ej. un Google Form). Solo se acepta una URL https */
export const FEEDBACK_URL: string | null = (() => {
  const valor = process.env.NEXT_PUBLIC_FEEDBACK_URL?.trim();
  if (!valor) return null;
  try {
    return new URL(valor).protocol === 'https:' ? valor : null;
  } catch {
    return null;
  }
})();
