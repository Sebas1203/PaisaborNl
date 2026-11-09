// Reglas y textos del servicio de catering. Única fuente para que todas las pantallas coincidan.

import type { TipoEvento } from '@/services/tipos';

// TODO: confirmar con Diana el tiempo de respuesta a una solicitud de catering.
export const CATERING_RESPUESTA_HORAS = 24;

// TODO: confirmar con Diana la anticipación mínima para reservar.
export const CATERING_ANTICIPACION_HORAS = 72;

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

/** "en menos de 24 horas hábiles" */
export const textoRespuesta = () => `en menos de ${CATERING_RESPUESTA_HORAS} horas hábiles`;

// TODO: confirmar con Diana qué servicios incluye el catering (vajilla, montaje, personal, transporte…).
// Mientras tanto las pantallas solo usan textos neutros y la logística aparece "Por confirmar".
