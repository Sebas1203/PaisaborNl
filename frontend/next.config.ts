import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
