// MOCK: pedidos de tienda de ejemplo tomados del diseño (mis_pedidos_y_reservas_paisabor).
// No son datos reales. Totales en EUR con BTW incluido.
import type { Order } from '@/types';

export const ORDERS: Order[] = [
  { id: 'PSB-2025-4892', date: '2025-05-18', status: 'confirmado', delivery: 'domicilio', lines: [], total: 42.5 },
  { id: 'PSB-2025-3910', date: '2025-05-02', status: 'entregado', delivery: 'recogida', lines: [], total: 35.9 },
  {
    id: 'PSB-2025-1049',
    date: '2025-03-15',
    status: 'cancelado',
    delivery: 'domicilio',
    lines: [
      { name: 'Pack Arepas de Queso Doble Crema x4', quantity: 1 },
      { name: 'Suero Costeño Artesanal (200g)', quantity: 1 },
    ],
    total: 28,
  },
];
