// MOCK: platos bajo reserva de ejemplo tomados del diseño (men_bajo_reserva_paisabor).
// No son datos reales; se sustituirán por los del backend. Precios en EUR con BTW incluido.
import type { ReservableMenu } from '@/types';

export const RESERVABLE_MENUS: ReservableMenu[] = [
  {
    id: 'lechona-tolimense-tradicional',
    name: 'Lechona Tolimense Tradicional',
    tag: 'Fin de Semana',
    price: 18.5,
    description:
      'Cerdo entero relleno de carne adobada y arveja amarilla con cuero crujiente garantizado, servida con arepa blanca e insulso campesino.',
  },
  {
    id: 'bandeja-paisa-de-la-hacienda',
    name: 'Bandeja Paisa de la Hacienda',
    tag: 'Ícono Paisa',
    price: 21,
    description:
      'Frijoles cargamanto cocidos a fuego lento, chicharrón carnudo tostado, carne en polvo, chorizo antioqueño, huevo frito, tajada de plátano maduro, arepa y aguacate.',
  },
  {
    id: 'ajiaco-santafereno-bogotano',
    name: 'Ajiaco Santafereño Bogotano',
    tag: 'Con Guascas',
    price: 17.5,
    description:
      'Sopa espesa con 3 variedades de papa colombiana, pollo desmechado, mazorca tierna, servida con alcaparras, crema de leche fresca y arroz con aguacate.',
  },
  {
    id: 'sancocho-trifasico-campesino',
    name: 'Sancocho Trifásico Campesino',
    tag: 'Edición Domingos',
    price: 19,
    description:
      'Caldo reconfortante con gallina campesina, carne de res, costilla de cerdo, plátano verde, yuca suave y aroma de cilantro cimarrón con hogao.',
  },
  {
    id: 'tamales-tolimenses-especiales',
    name: 'Tamales Tolimenses Especiales',
    tag: 'Envuelto en Hoja',
    price: 11.5,
    description:
      'Envuelto artesanal en hoja de plátano con pollo de granja, costilla de cerdo, huevo cocido, zanahoria y masa de maíz sazonada con especias tradicionales.',
  },
  {
    id: 'sobrebarriga-en-salsa-criolla',
    name: 'Sobrebarriga en Salsa Criolla',
    tag: 'Corte Tierno 4h',
    price: 18,
    description:
      'Corte suave de res cocinado a fuego lento con hogao tradicional de tomate chonto maduro y cebolla junca, servida con papas al vapor y yuca mantequilla.',
  },
  {
    id: 'empanadas-vallunas',
    name: 'Empanadas Vallunas con Ají Casero',
    tag: 'Pack x6 unidades',
    price: 9.5,
    description:
      'Masa de maíz crocante rellena de carne desmechada y papa criolla aromatizada, acompañadas de nuestro ají verde picante y limón fresco.',
  },
  {
    id: 'brevas-caladas',
    name: 'Brevas Caladas con Arequipe & Queso',
    tag: 'Dulce Típico',
    price: 6.5,
    description:
      'Higos tiernos cocidos en almíbar de panela orgánica con canela, servidos con arequipe artesanal de paila y tajada de queso campesino fresco.',
  },
  {
    id: 'torta-de-mazorca',
    name: 'Torta de Mazorca & Bocadillo Veleño',
    tag: 'Receta de Abuela',
    price: 5.5,
    description:
      'Pastel húmedo de maíz choclo tierno con trozos fundidos de bocadillo de guayaba de Vélez y queso costeño que balancea el dulzor con toque salino.',
  },
];
