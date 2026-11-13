import type { NextConfig } from 'next';

// Mismo criterio que src/config/prototipo.ts: prototipo salvo NEXT_PUBLIC_PROTOTIPO=false
const MODO_PROTOTIPO = process.env.NEXT_PUBLIC_PROTOTIPO !== 'false';

const nextConfig: NextConfig = {
  // Prototipo de prueba: cabecera noindex en todas las respuestas (también imágenes y archivos)
  async headers() {
    return MODO_PROTOTIPO ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }] : [];
  },
  // Rutas antiguas de la cuenta y del admin (antes de la zona de cliente y el inventario unificado)
  async redirects() {
    return [
      { source: '/cuenta', destination: '/perfil', permanent: false },
      { source: '/cuenta/editar', destination: '/perfil/editar', permanent: false },
      { source: '/cuenta/pedidos', destination: '/mis-pedidos', permanent: false },
      { source: '/cuenta/pedidos/:id', destination: '/mis-pedidos/:id', permanent: false },
      { source: '/admin/productos', destination: '/admin/inventario', permanent: false },
      { source: '/admin/productos/nuevo', destination: '/admin/inventario/nuevo', permanent: false },
      { source: '/admin/menus/editar', destination: '/admin/menus', permanent: false },
    ];
  },
};

export default nextConfig;
