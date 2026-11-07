// MOCK: productos de ejemplo tomados del diseño de Stitch. No son datos reales de la tienda;
// se sustituirán por los del backend. Precios en EUR con BTW (9 %) incluido.
import type { CartItem, Product, ProductCategory } from '@/types';

export const CATEGORY_LABELS: Record<Exclude<ProductCategory, 'platos'>, string> = {
  panaderia: 'Panadería',
  cafe: 'Café',
  dulces: 'Dulces & Postres',
  congelados: 'Congelados',
};

export const PRODUCTS: Product[] = [
  // Catálogo "Nuestra Despensa" (cat_logo_de_productos_tienda_online)
  {
    id: 'pandebono-clasico',
    name: 'Pandebono Clásico',
    description:
      'El auténtico sabor del Valle del Cauca. Suave por dentro, con la corteza perfecta, elaborado con queso fresco y almidón de yuca.',
    price: 8.5,
    unit: '/ 6 unid.',
    category: 'panaderia',
    badge: 'Nuevo',
    catalogo: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTLsrf5TwS38muBycFS2KzL5KrhYivYetcECzWHo7AnFf25umUOvUhHo-gTHRFW1_7Xgpcd1aaaoG05cs-0pTopoKry-Z29jfwk5LX49BuuPocjA7Icqs7D-6kb008Fpqp-5aGWrRFcYgU2YZDYy-7-hu9hGYh01Ga2roWfWuGQ-OJ0mU8c3N1iHIA9WYaJzhgHapjU3DnUHSCG9DI6525iTuNM3PTlSZg653a-9XyCm4Yms7gnElo',
  },
  {
    id: 'empanadas-de-carne',
    name: 'Empanadas de Carne',
    description: 'Crujientes empanadas de maíz con guiso de carne y papa.',
    price: 12,
    category: 'congelados',
    badge: 'Favorito',
    catalogo: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtukvDK-lyT_XTc3DBzvlLzsUuICaV650zxX5IVo2bAbbyyi7zM7MkRlIdUVudEz0Z764v-PRiZ2HLYbyeyV6vE3bqLimS0axKEVcFxrkBkzzn3GrlJ2i3TXGob_kFsyU3Bt2Y2B32h1GI9ylOoBL8oZzJXQOC3gSZHgFffXgLRImDdmJpUmbNfGM5Ey8hLZ_ooNNAvcyEWsoFN7IfnQz3ldf04Qn8px7Xtc7PEmPuzM4fW5rJxokj',
  },
  {
    id: 'cafe-origen-huila',
    name: 'Café Origen Huila',
    description: 'Tueste medio, notas a panela y frutos rojos. 250g.',
    price: 15.5,
    category: 'cafe',
    catalogo: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcQG46EWBT_XM9q6qzHtiGuK0be8AzYw7-C_1Sy6WlP1vFnXvx8XE29h6alZSZw6IJUcCGjAaPYG0aMwpY4zS753MG31ZYbT5OvuNzJVKqP97F9xhRdEt7D58W0dx0K37J4ns5P6DFrJb9gSAIFCHfU0A4yMX9SMs8zztxsnsIlZPUbM3tXrTJzT3xX3BrAm0Gy0iDPUfUavqF6O-1Ld1FYnfdilzA1jsM-X3hLOpQhODH3zF9HP1O',
  },
  {
    id: 'torta-negra',
    name: 'Torta Negra',
    description: 'Tradicional torta envinada, rica en especias y frutos secos.',
    price: 24,
    category: 'dulces',
    catalogo: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfv7udgs-GU7K7j_yv1m8CBPVT9TZdkRMb8OGjOM1YZs401q0oosiWBQr5Zl1W6RvfvLSx2-bIHGIpduRRVCQO_e-lND_gHF-2IJ6uvUCCYY7KCke3IJiZ6FPvgKU1TT83-qqnRVSaiaS6WtiC-ky1ht677bb6rtTI_eA3y5uXmEGg_Jic79lejGLQaH6oHy2HgxBjGUVaIdUxRdQLbiuvHIzSlwBxwGjo3ZJJTCwNIKRFZLsgELbA',
  },
  {
    id: 'arepa-de-choclo',
    name: 'Arepa de Choclo',
    description: 'Maíz tierno molido, lista para calentar. Paquete x4.',
    price: 7.8,
    category: 'congelados',
    catalogo: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNs6masAciLabYPvgidviSvPFzTmllyIruQfFPyDJU9yi56OXV9fzAWHqAe7c2Ty8VixqoE5nA_jHR39_ght1jF5xXrIuTVH5xxEp_IjLSapB0bM3MSAQLH5UJhFbzWFuw8Z7Tkdt1CFDqZ3ygyJmW6dy1ysMHj35vdSmM5rTYjLaq-5d0f8TxdsvLTzRHnT0UBnJP3mdqUBot0GAcOWqpzVrHE8aE4z-9KKsD3ojyoHTcmFk5mdc-',
  },

  // Carta completa (men_de_productos_completo)
  {
    id: 'pandebonos',
    name: 'Pandebonos',
    description:
      'Panecillos de queso y almidón de yuca, suaves por dentro y crujientes por fuera. Paquete de 6 unidades.',
    price: 6.5,
    category: 'panaderia',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKvCw0Jdvg1-kxiZIid6k3UndAvXNe7kojNqUujmPI1iCp3c5ZKgYaeS6PajLbjRM_3lfO0rVEiGJxQMex7b38V33ozg_P6UzpChxrERtB-vfjORWJuh-LdkjALsPoo8QppYu_QQBL6bMQ3LDEu_x5n11Pz4DQ52-YEitPbA7vADFJP0wHhV0sCR-k5d7QK4xqkuE8eu6qT0sXYnck3b8OTrS-20pwmUcnylq7CFwree0keWzjvbIy',
  },
  {
    id: 'almojabanas',
    name: 'Almojábanas',
    description:
      'Deliciosos panecillos a base de harina de maíz y cuajada fresca. Ideales para el desayuno. Paquete de 6 unidades.',
    price: 6,
    category: 'panaderia',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkAv4mCNvQxLKi8w6hJyRe4B4lGWL1jUM3utt5qq0A2vshWqYwrD4Oi-jAcP5lGZbDPoI0TscJzls2FbnYLAyX4Gj4QkNsGevugiQiD_uKIJu1yfybMstZTYD48_PTrL2O0NkJws7fimNWZNoS2LbGlmrG-F3SHi21HJxN8RAuesFQAsKmCblJMreOPHhmrBiNnF-2gjIWDJSNnUobfulqtx_bVF7_c-HC9Rf0Xtt5vkrFFTcHn-W6',
  },
  {
    id: 'cafe-especial-huila',
    name: 'Café Especial Huila',
    description:
      'Cultivado a 1.700 metros sobre el nivel del mar en las montañas del sur de Colombia.',
    price: 14.9,
    category: 'cafe',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDU_HhYREJ77PfBH8YxHlz9K-5w3-9WHoRLMNr5vLq6IwiT84GLEUdXJNkwBag94geQrjpFpity777xSM7cA4AHpTNEoVwe8vavO7wSuGWP-1xfCCBfZDo8VpkBDa5CmuHl5DBz78RivnVEIphSZn9UfMnv4DlShWkDYrLhEfmjH_RqZiPo4TaBaezXr7CYaRGVCA6aNE6ahAcj_ieaYAvl06Mwbpb1rwi8u6tCCD6uN816ouAQI5z',
  },
  {
    id: 'cafe-tradicion-quindio',
    name: 'Café Tradición Quindío',
    description: 'Notas a panela. Tueste oscuro.',
    price: 12.5,
    category: 'cafe',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCePQ5WVm7-ouydcpBt9b1jv64PIqsQd--a2pp_nSQGKjyoN_rnvCEywRh7u_kjLLsfb6PAV0Fy8FCaUl0X7PWuu4evVKxI9NSSsbXmMBRkzWgFi5ZD_G6QHiYrl2ylPMiUWAcS5G1j1uv58NC0iLXDjNvNBAMfTy51EvrZzewfIFqWducu_M-C6fz26n9QzJWZF0HN8A3T2RGumac1JfMNLVDtjBUMnJ0lVr_qPDSBUGkx7khqkNL4',
  },

  // Platos típicos (men_de_platos_t_picos)
  {
    id: 'bandeja-paisa',
    name: 'Bandeja Paisa',
    description:
      'El rey indiscutible de la cocina colombiana: fríjoles rojos de cocción lenta, arroz blanco, carne molida sazonada y chicharrón crujiente.',
    price: 18.5,
    category: 'platos',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdlledTGo4AaQ_mcYkcrRPgC5-d6jn-XewHyyqm_LRVywKEhw0v3J7_pbywJrNyZTl_uVXp8BIF6me5KBeZsCFUopQKx1T-5JmJD2Jyn80_WFXWHNREjxReLuBY7otCfYanK_u2VSAL9ORhyYAexfiz6gGaKCQwxXlssCsKB0bahY4zEe0NGejEjTcbw3HPjf0GymvMSkKBG9Sb4Oq9mVq-JH5NO0kXl1LdZYVApdnlzgQWB_sFomu',
  },
  {
    id: 'lechona-tolimense',
    name: 'Lechona Tolimense',
    description:
      'Cerdo relleno asado lentamente con arveja amarilla, arroz y especias tradicionales, servido con arepa blanca crujiente.',
    price: 16,
    category: 'platos',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCISmPJN9bwcSakL9pTvAFvPBG-U1C5L0vpKy_emdtcdjAH14JSLk04hXBxCNwYMBrmN_NQhhJD6WyYb0JkbL9t6NNBY3zTGdeE3_3oaDE-mzaeRviJW_o9G_27TWONiy7rPvzQBCe9X3XYzRTNm_Uso5LIX6Na2mRSUeK7IwasIobb63dQ2VGdUXPFrRa3NCc5Barr_4g792yf0sHAmrTfgqBB3bHU2nmge8pl0webHiATZvu0LUbI',
  },
  {
    id: 'ajiaco-santafereno',
    name: 'Ajiaco Santafereño',
    description:
      'Sopa reconfortante con tres variedades de papa, pollo desmechado, mazorca y la hierba esencial: guascas.',
    price: 15.5,
    category: 'platos',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0VrndEFztJCLOf7CxLGpveGzZYhzmp_F_49ohn-HqqZ8sr1lC7zVrbvSiSwiS7vG-C1D02dsd8s9E5fo11ymzV3avtW9w1YpI5TYACneHJXzV6rkJxGAcICFM290HNU7nsZZ1GiW0YjRb2T4DYO7DnEO3y-xfmhauyHRW2ydzyWFyiN-WkBrWAVyUWw43rJayexpdFjGFxCkrvZsCpgqnTqORZEIn7kEAPP1hRMdQk1GuwOE5FX9K',
  },
  {
    id: 'tamal-tolimense',
    name: 'Tamal Tolimense',
    description:
      'Masa de maíz con pollo, cerdo, huevo y verduras, envuelta en hoja de plátano y cocida al vapor durante horas.',
    price: 12.5,
    category: 'platos',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtI4931HVNiL5syP0gwNWV15VhONULdQ-wOsF4kmm54gjVedogIj7CtmWxPmgYji2JX7rp_Kwct5Xob24NwQYC8JC2knVr4fegDqTeDJcr-x9nq0C2OKkW27El9j2BGgY4NwZ2hrnTN9eBx2u0wTE1RE9dPR6BjTz81B1lLDuPxRRUGEgIq5ZXYQqJ0v_4AMhGiF6bxjN-MHSAdtaMU2wL_hYJrjdIBKQDPuhJdnHNL1PzoiN5eSuZ',
  },

  // Artículos de la canasta de ejemplo (carrito_con_opci_n_de_domicilio)
  {
    id: 'arepa-de-choclo-artesanal',
    name: 'Arepa de Choclo Artesanal',
    description: 'Paquete x 5 unidades',
    price: 7.25,
    unit: 'Paquete x 5 unidades',
    category: 'congelados',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcU8O5hzfy2MGtvUCeXqWE0Bx_FsdejhdGmEmVuxYeTNxNNMPVagz4QSzvXPPwGYM8HyWyxg2UzSnN8kRf7W2IvOmlVE-D0amQLdoh8lTk86RzAqbwZhU2fuz3AuLLGkLJPe1vHlJhn0xVMd9KJ1nojK_oWGc1OosQa4NC1dkWy8CAvJk9TyiZiuK1k9fhkZrvpE2CJ9B467Ztm0jx7_6ADUnEfxLt2XnhoHsVltKKZuvVx4ThqaJWGkdwclV9TKLULp47gJghWaw',
  },
  {
    id: 'cafe-de-origen-quindio',
    name: 'Café de Origen - Quindío',
    description: 'Grano entero / 500g',
    price: 18.9,
    unit: 'Grano entero / 500g',
    category: 'cafe',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA63laAv7umTl-srda7zQ__Eamg0_OeOLLiO04JiJCko3YzRk_AXL9UE1v6fwklHJ3-F_M7rzK4u1Vkc02n0-mkQWwPjKCJpLtMKxnR3nP43MkBJp7RVbFajndGEf-IXjAFb6aFySdUvrzZyK-_z-PjSg0gDQyWNaargN3RWUr1KMDfK1PulrUJ9xAyhzdRmFgsv0YOV5y7X4bk5-0e_0Lzh43XCETFU_v2CetDhNH2Vv2xGEPcOj9sfzRNEl7_69TCirPOtrhAf8g',
  },
];

export function getProduct(id: string): Product {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) throw new Error(`Producto desconocido: ${id}`);
  return product;
}

const toCartItem = (product: Product, quantity: number): CartItem => ({
  productId: product.id,
  name: product.name,
  price: product.price,
  unit: product.unit,
  image: product.image,
  quantity,
});

// La canasta de la demo empieza como en el diseño: 2 arepas y 1 café (3 artículos)
export const INITIAL_CART: CartItem[] = [
  toCartItem(getProduct('arepa-de-choclo-artesanal'), 2),
  toCartItem(getProduct('cafe-de-origen-quindio'), 1),
];

/** Coste de envío a domicilio del diseño (incluye 21 % de BTW por ser un servicio) */
export const SHIPPING_COST = 4.95;
