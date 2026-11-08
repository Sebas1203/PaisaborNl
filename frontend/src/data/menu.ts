// MENÚ DE PAISABOR.
// Precios en EUR con BTW incluido. Fotos en frontend/public/images/menu/<id>.jpg
// Los especiales de fin de semana (bajoReserva) vienen de la publicación de Paisabor: sábado y domingo.
// Pendiente de confirmar con Diana: descripción, ingredientes y alérgenos de cada plato.

import type { Plato } from "./tipos";

export const BTW_ALIMENTOS = 0.09;

/** Platos del catálogo de WhatsApp. */
export const PLATOS: Plato[] = [
  { id: "bandeja-paisa", nombre: "Bandeja Paisa", tipo: "menu", precio: 25.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/bandeja-paisa.jpg" },
  { id: "bowl-montanero", nombre: "Bowl montañero", tipo: "menu", precio: 17.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/bowl-montanero.jpg" },
  { id: "porcion-de-lechona", nombre: "Porción de lechona", tipo: "menu", precio: 14.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/porcion-de-lechona.jpg" },
  { id: "picada-x1-persona", nombre: "Picada X1 persona", tipo: "menu", precio: 17.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/picada-x1-persona.jpg" },
  { id: "fiambre-antioqueno", nombre: "Fiambre Antioqueño", tipo: "menu", precio: 17.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/fiambre-antioqueno.jpg" },
];

/**
 * Especiales de fin de semana, bajo reserva.
 * Tamal: 14 € según la publicación de Paisabor. Los demás precios son valores medios PROVISIONALES
 * (precioEstimado: true) hasta que Diana confirme el precio real.
 */
export const ESPECIALES: Plato[] = [
  { id: "tamal-antioqueno-trifasico", nombre: "Tamal antioqueño trifásico", tipo: "menu", precio: 14.0, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/tamal-antioqueno-trifasico.jpg", bajoReserva: true, dias: ["sabado"] },
  { id: "sancocho-de-res-pecho", nombre: "Sancocho de res (pecho)", tipo: "menu", precio: 17.0, precioEstimado: true, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/sancocho-de-res-pecho.jpg", bajoReserva: true, dias: ["sabado"] },
  { id: "mondongo", nombre: "Mondongo", tipo: "menu", precio: 15.0, precioEstimado: true, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/mondongo.jpg", bajoReserva: true, dias: ["domingo"] },
  { id: "arroz-paisa", nombre: "Arroz paisa", tipo: "menu", precio: 15.0, precioEstimado: true, btw: BTW_ALIMENTOS, disponible: true, imagen: "/images/menu/arroz-paisa.jpg", bajoReserva: true, dias: ["domingo"] },
];

export const MENU: Plato[] = [...PLATOS, ...ESPECIALES];
