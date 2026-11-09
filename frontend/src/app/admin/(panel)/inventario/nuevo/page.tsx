// Alta de producto (antes la maqueta de /admin/productos/nuevo), conectada a inventarioService.crear.
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormularioItem } from '@/features/admin/FormularioItem';
import { CabeceraAdmin, PaginaAdmin } from '@/features/admin/ui';
import { inventarioService } from '@/services';

export default function NuevoProductoPage() {
  const router = useRouter();
  return (
    <PaginaAdmin>
      <Link href="/admin/inventario" className="inline-flex items-center gap-1 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-secondary">
        <span className="material-symbols-outlined text-base">arrow_back</span> Inventario
      </Link>
      <CabeceraAdmin
        etiqueta="Inventario"
        titulo="Nuevo producto"
        descripcion="El precio se guarda con IVA incluido. La foto se toma de /images/menu o /images/productos con el id del producto."
      />
      <div className="max-w-2xl bg-surface-container-lowest rounded-xl shadow-xs p-6 sm:p-8">
        <FormularioItem
          textoGuardar="Crear producto"
          onCancelar={() => router.push('/admin/inventario')}
          onGuardar={async (datos) => {
            await inventarioService.crear(datos);
            router.push('/admin/inventario');
          }}
        />
      </div>
    </PaginaAdmin>
  );
}
