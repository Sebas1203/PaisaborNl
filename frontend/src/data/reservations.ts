// MOCK: reservas de ejemplo tomadas del diseño (mis_pedidos_y_reservas_paisabor y
// reserva_pendiente_de_confirmaci_n_paisabor). No son datos reales.
import type { Reservation } from '@/types';

export const RESERVATIONS: Reservation[] = [
  {
    id: 'CAT-2025-0814',
    kind: 'catering',
    menuName: 'Fiesta Tradicional Paisa',
    eventDate: '2025-06-14',
    guests: 25,
    status: 'pendiente',
    total: 525,
  },
  {
    id: 'RES-2025-0211',
    kind: 'menu',
    menuName: 'Lechona Tolimense Familiar',
    eventDate: '2025-04-26',
    guests: 8,
    status: 'finalizada',
    total: 74,
  },
];
