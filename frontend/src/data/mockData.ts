import { Product, MenuItem, OrderItem, UserProfile, InventoryProduct } from '@/types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Pandebono Clásico',
    description: 'El auténtico sabor del Valle del Cauca. Suave por dentro, con la corteza perfecta, elaborado con queso costeño y almidón de yuca.',
    price: 8.50,
    unit: '/ 6 unid.',
    category: 'panaderia',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
    badge: 'Nuevo',
    origin: 'Valle del Cauca',
    stock: 45
  },
  {
    id: 'p-2',
    name: 'Empanadas de Carne',
    description: 'Crujientes empanadas de maíz con guiso de carne desmechada y papa criolla, acompañadas de ají casero.',
    price: 12.00,
    unit: '/ 8 unid.',
    category: 'congelados',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito',
    origin: 'Medellín, Antioquia',
    stock: 30
  },
  {
    id: 'p-3',
    name: 'Café Origen Huila',
    description: 'Tueste medio artesanal, notas pronunciadas a panela, caña de azúcar y frutos rojos frescos. 250g.',
    price: 15.50,
    unit: '/ 250g',
    category: 'cafe',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    origin: 'Pitalito, Huila',
    stock: 25
  },
  {
    id: 'p-4',
    name: 'Torta Negra Colombiana',
    description: 'Tradicional torta envinada de fiesta, macerada por semanas con especias dulces, ciruelas y frutos secos.',
    price: 24.00,
    category: 'dulces',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    origin: 'Cundinamarca',
    stock: 12
  },
  {
    id: 'p-5',
    name: 'Arepa de Choclo con Queso',
    description: 'Maíz tierno recién molido, dorada al fogón con generoso queso campesino para calentar. Paquete x4.',
    price: 7.80,
    unit: '/ 4 unid.',
    category: 'panaderia',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    badge: 'Artesanal',
    origin: 'Santander',
    stock: 35
  },
  {
    id: 'p-6',
    name: 'Buñuelos Tradicionales',
    description: 'Esferas doradas y esponjosas con auténtico queso costeño rallado, listas para hornear o freír.',
    price: 9.20,
    unit: '/ 10 unid.',
    category: 'panaderia',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito',
    origin: 'Antioquia',
    stock: 40
  },
  {
    id: 'p-7',
    name: 'Arequipe Artesanal con Brevas',
    description: 'Dulce de leche cocinado a fuego lento en paila de cobre, acompañado de brevas en almíbar.',
    price: 6.90,
    unit: '/ 350g',
    category: 'dulces',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    origin: 'Valle del Cauca',
    stock: 28
  },
  {
    id: 'p-8',
    name: 'Café Geisha Sierra Nevada',
    description: 'Microlote exclusivo cultivado a 1,750 m.s.n.m. Perfil floral de jazmín, miel de azahar y bergamota.',
    price: 22.00,
    unit: '/ 250g',
    category: 'cafe',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: 'Orgánico',
    origin: 'Santa Marta',
    stock: 14
  }
];

export const SIGNATURE_MENU: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Bandeja Paisa',
    description: 'The undisputed king of Colombian cuisine. A substantial feast featuring slow-cooked red beans, white rice, seasoned ground beef, crispy chicharrón, chorizo, sweet plantain, fresh avocado, an artisanal arepa, topped with a fried egg.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Hearty', 'Traditional'],
    category: 'principales'
  },
  {
    id: 'sig-2',
    name: 'Lechona Tolimense',
    description: 'Authentic stuffed pork, slow-roasted to perfection with yellow peas, rice, and a blend of traditional spices. Served with a crispy white arepa and lime.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    tags: ['Tolima Special', 'Slow-Roasted'],
    category: 'principales'
  },
  {
    id: 'sig-3',
    name: 'Ajiaco Santafereño',
    description: 'A soul-warming traditional soup made with three types of Andean potatoes, tender shredded chicken, corn on the cob, and the essential "guasca" herb. Served with capers and fresh cream.',
    price: 15.50,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tags: ['Bogotá Classic', 'Comfort Food'],
    category: 'sopas'
  },
  {
    id: 'sig-4',
    name: 'Tamal Tolimense',
    description: 'A rich, savory blend of seasoned corn dough, tender chicken, pork belly, hard-boiled egg, and vegetables, all tightly wrapped in fragrant plantain leaves and steamed for hours.',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Handcrafted', 'Steamed in Leaf'],
    category: 'principales'
  }
];

export const INITIAL_USER_PROFILE: UserProfile = {
  name: 'Juan Pérez',
  email: 'juan.perez@ejemplo.co',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  memberSince: 'Marzo 2023',
  saborPoints: 1450,
  address: {
    name: 'Juan Pérez',
    street: 'Prinsengracht 263-267',
    postalCodeCity: '1016 GV Amsterdam',
    country: 'Países Bajos',
    phone: '+31 06 12345678'
  },
  coffeeProfile: ['Afrutado', 'Cuerpo Medio', 'Acidez Baja'],
  dietaryRestrictions: ['Sin Gluten']
};

export const RECENT_ORDERS: OrderItem[] = [
  {
    id: 'ord-1',
    title: 'Café Excelso - Origen Tolima',
    orderNumber: '#4092',
    date: '15 Oct, 2023',
    status: 'Enviado',
    total: 24.50,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ord-2',
    title: 'Kit Empanadas Tradicionales',
    orderNumber: '#4088',
    date: '02 Oct, 2023',
    status: 'Entregado',
    total: 32.00,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_INVENTORY: InventoryProduct[] = [
  {
    id: 'inv-1',
    name: 'Sierra Nevada Dark Roast',
    tag: 'GRANO ENTERO',
    category: 'Café de Especialidad',
    price: 18.50,
    description: 'Notas de cacao oscuro, panela y nuez tostada. Cosechado a 1500m.',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'inv-2',
    name: 'Set V60 Cerámica',
    tag: 'EQUIPO',
    category: 'Accesorios Barista',
    price: 45.00,
    description: 'Kit completo de preparación manual. Incluye cono, jarra y filtros.',
    stock: 2,
    lowStock: true,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'inv-3',
    name: 'Miel de Panela Artesanal',
    tag: 'DESPENSA',
    category: 'Dulces & Endulzantes',
    price: 12.00,
    description: 'Endulzante natural colombiano, perfecto para café y repostería.',
    stock: 18,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
  }
];
