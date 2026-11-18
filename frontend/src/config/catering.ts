// Reglas y textos del servicio de catering. Única fuente para que todas las pantallas coincidan.

import type { TipoEvento } from '@/services/tipos';

// TODO (Diana): tiempo de respuesta a una solicitud de catering. null = por confirmar: las
// pantallas no prometen ningún plazo.
export const CATERING_RESPUESTA_HORAS: number | null = null;

// TODO (Diana): anticipación mínima para reservar. null = por confirmar.
export const CATERING_ANTICIPACION_HORAS: number | null = null;

/** Máximo de porciones por plato en una solicitud */
export const CATERING_MAX_PORCIONES = 500;

export const TIPOS_EVENTO: { id: TipoEvento; nombre: string }[] = [
  { id: 'corporativo', nombre: 'Evento corporativo / empresa' },
  { id: 'cumpleanos', nombre: 'Cumpleaños / celebración familiar' },
  { id: 'boda', nombre: 'Boda / compromiso' },
  { id: 'privado', nombre: 'Cena privada / amigos' },
  { id: 'comunitario', nombre: 'Festival / evento comunitario' },
  { id: 'otro', nombre: 'Otro' },
];

/** "en menos de 24 horas hábiles" si hay plazo confirmado; si no, sin prometer plazo */
export const textoRespuesta = () =>
  CATERING_RESPUESTA_HORAS ? `en menos de ${CATERING_RESPUESTA_HORAS} horas hábiles` : 'lo antes posible (plazo de respuesta por confirmar)';

/** "Reserva con 72 h de anticipación" o "Anticipación mínima por confirmar" */
export const textoAnticipacion = () =>
  CATERING_ANTICIPACION_HORAS ? `Reserva con mínimo ${CATERING_ANTICIPACION_HORAS} h de anticipación` : 'Anticipación mínima por confirmar';

// TODO: confirmar con Diana qué servicios incluye el catering (vajilla, montaje, personal, transporte…).
// Mientras tanto las pantallas solo usan textos neutros y la logística aparece "Por confirmar".
