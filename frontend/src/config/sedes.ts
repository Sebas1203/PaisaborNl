// Sedes de Paisabor: única fuente para direcciones y puntos de recogida.

export interface Sede {
  id: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;
  /** Se puede recoger el pedido en esta sede */
  recoger: boolean;
}

// TODO: agregar segunda sede (abre pronto) y horarios.
export const SEDES: Sede[] = [
  {
    id: 'sint-jorisstraat',
    nombre: 'Paisabor Ámsterdam',
    direccion: 'Sint Jorisstraat 4',
    ciudad: 'Ámsterdam',
    pais: 'Países Bajos',
    recoger: true,
  },
];

export const SEDE_PRINCIPAL = SEDES[0];

/** "Sint Jorisstraat 4, Ámsterdam" */
export const direccionCorta = (sede: Sede = SEDE_PRINCIPAL) => `${sede.direccion}, ${sede.ciudad}`;
