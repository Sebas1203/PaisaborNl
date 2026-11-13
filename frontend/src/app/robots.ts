import type { MetadataRoute } from 'next';
import { MODO_PROTOTIPO } from '@/config/prototipo';

// robots.txt: mientras sea un prototipo de prueba, ningún buscador debe rastrearlo. Además del
// robots.txt, el layout pone <meta name="robots" content="noindex"> y next.config la cabecera
// X-Robots-Tag, por si alguien enlaza la web.
export default function robots(): MetadataRoute.Robots {
  if (MODO_PROTOTIPO) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/checkout', '/mis-pedidos', '/perfil'] } };
}
