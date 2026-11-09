// Edición de un menú de catering (antes la maqueta administrador_crear_y_editar_men):
// nombre, descripción y precio por persona.
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { AvisoError, EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { itemPorId } from '@/data';
import { AvisoExito, botonPrimario, botonSecundario, CabeceraAdmin, inputAdmin, labelAdmin, PaginaAdmin } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { IVA_INCLUIDO } from '@/lib/format';
import { menusService, mensajeDeError, type MenuCatering } from '@/services';
import { validarMenu } from '@/services/menus';

function FormularioMenu({ menu, onGuardado }: { menu: MenuCatering; onGuardado: (m: MenuCatering) => void }) {
  const [form, setForm] = useState({ nombre: menu.nombre, descripcion: menu.descripcion, precio: String(menu.precioPorPersona).replace('.', ',') });
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();
    const cambios = { nombre: form.nombre, descripcion: form.descripcion, precioPorPersona: Number(form.precio.trim().replace(',', '.')) };
    const invalido = validarMenu(cambios) ?? (form.nombre.trim() ? null : 'El nombre del menú es obligatorio.');
    setError(invalido);
    setExito(null);
    if (invalido) return;
    setGuardando(true);
    try {
      onGuardado(await menusService.editar(menu.id, cambios));
      setExito('Menú guardado.');
    } catch (err) {
      setError(mensajeDeError(err));
    } finally {
      setGuardando(false);
    }
  }

  return (
    <form noValidate onSubmit={guardar} className="max-w-2xl bg-surface-container-lowest rounded-xl shadow-xs p-6 sm:p-8 space-y-5">
      <div>
        <label className={labelAdmin} htmlFor="menu-nombre">
          Nombre *
        </label>
        <input id="menu-nombre" className={inputAdmin} value={form.nombre} onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))} />
      </div>
      <div>
        <label className={labelAdmin} htmlFor="menu-descripcion">
          Descripción
        </label>
        <textarea
          id="menu-descripcion"
          className={`${inputAdmin} resize-none`}
          rows={4}
          value={form.descripcion}
          onChange={(e) => setForm((f) => ({ ...f, descripcion: e.target.value }))}
        />
      </div>
      <div className="max-w-xs">
        <label className={labelAdmin} htmlFor="menu-precio">
          Precio por persona (€) *
        </label>
        <input id="menu-precio" className={inputAdmin} inputMode="decimal" value={form.precio} onChange={(e) => setForm((f) => ({ ...f, precio: e.target.value }))} />
        <p className="text-[11px] text-on-surface-variant mt-1">
          {IVA_INCLUIDO}
          {menu.precioEstimado ? ' · precio estimado pendiente de confirmar' : ''}
        </p>
      </div>
      <p className="text-xs text-on-surface-variant">Incluye: {menu.platos.map((id) => itemPorId(id)?.nombre ?? id).join(', ')}</p>
      <AvisoError mensaje={error} />
      <AvisoExito mensaje={exito} />
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
        <Link href="/admin/menus" className={botonSecundario}>
          Volver
        </Link>
        <button type="submit" className={botonPrimario} disabled={guardando}>
          <span className="material-symbols-outlined text-base">save</span>
          {guardando ? 'Guardando…' : 'Guardar menú'}
        </button>
      </div>
    </form>
  );
}

export default function EditarMenuPage() {
  const { id } = useParams<{ id: string }>();
  const { datos: menu, setDatos, error, cargando, recargar } = useCarga(() => menusService.obtener(id), [id]);

  return (
    <PaginaAdmin>
      <Link href="/admin/menus" className="inline-flex items-center gap-1 text-xs font-label uppercase tracking-widest text-on-surface-variant hover:text-secondary">
        <span className="material-symbols-outlined text-base">arrow_back</span> Menús de catering
      </Link>
      <CabeceraAdmin etiqueta="Catering" titulo={menu ? `Editar: ${menu.nombre}` : 'Editar menú'} />
      {cargando ? (
        <Skeleton filas={3} />
      ) : error ? (
        <EstadoError mensaje={error} onReintentar={recargar} />
      ) : !menu ? (
        <EstadoVacio titulo="No encontramos este menú" icono="search_off" />
      ) : (
        <FormularioMenu menu={menu} onGuardado={setDatos} />
      )}
    </PaginaAdmin>
  );
}
