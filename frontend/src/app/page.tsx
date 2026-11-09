import { redirect } from 'next/navigation';

// El inicio es el catálogo. Se conserva ?acceso=denegado para mostrar el aviso del proxy.
export default async function Home({ searchParams }: { searchParams: Promise<{ acceso?: string }> }) {
  const { acceso } = await searchParams;
  redirect(acceso === 'denegado' ? '/catalogo?acceso=denegado' : '/catalogo');
}
