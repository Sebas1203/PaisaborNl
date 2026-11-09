'use client';

import { useState } from 'react';
import { AvisoError } from '@/components/ui/Estados';
import { CATEGORIAS_INVENTARIO } from '@/config/inventario';
import { IVA_INCLUIDO } from '@/lib/format';
import { mensajeDeError, type DatosItemInventario } from '@/services';
import { validarItem } from '@/services/inventario';
import { botonPrimario, botonSecundario, inputAdmin, labelAdmin } from './ui';

// Formulario de producto / plato del inventario (crear y editar). El precio se escribe con IVA incluido.

const numero = (texto: string) => Number(texto.trim().replace(',', '.'));

export function FormularioItem({
  inicial,
  textoGuardar,
  onGuardar,
  onCancelar,
}: {
  inicial?: Partial<DatosItemInventario>;
  textoGuardar: string;
  onGuardar: (datos: DatosItemInventario) => Promise<void>;
  onCancelar: () => void;
}) {
  const [form, setForm] = useState({
    nombre: inicial?.nombre ?? '',
    categoria: inicial?.categoria ?? CATEGORIAS_INVENTARIO[0].id,
    precio: inicial?.precio !== undefined ? String(inicial.precio).replace('.', ',') : '',
    stock: inicial?.stock !== undefined ? String(inicial.stock) : '0',
    descripcion: inicial?.descripcion ?? '',
    disponible: inicial?.disponible ?? true,
  });
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const cambiar = (campo: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [campo]: e.target.value }));

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const datos: DatosItemInventario = {
      nombre: form.nombre,
      categoria: form.categoria,
      precio: numero(form.precio),
      stock: form.stock.trim() === '' ? NaN : Number(form.stock),
      descripcion: form.descripcion,
      disponible: form.disponible,
    };
    const invalido = validarItem(datos);
    setError(invalido);
    if (invalido) return;
    setGuardando(true);
    try {
      await onGuardar(datos);
    } catch (err) {
      setError(mensajeDeError(err));
      setGuardando(false);
    }
  }

  return (
    <form noValidate onSubmit={enviar} className="space-y-5">
      <div>
        <label className={labelAdmin} htmlFor="item-nombre">
          Nombre *
        </label>
        <input id="item-nombre" className={inputAdmin} value={form.nombre} onChange={cambiar('nombre')} placeholder="Ej. Empanada de carne" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelAdmin} htmlFor="item-categoria">
            Categoría *
          </label>
          <select id="item-categoria" className={inputAdmin} value={form.categoria} onChange={cambiar('categoria')}>
            {CATEGORIAS_INVENTARIO.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelAdmin} htmlFor="item-precio">
            Precio (€) *
          </label>
          <input id="item-precio" className={inputAdmin} inputMode="decimal" value={form.precio} onChange={cambiar('precio')} placeholder="0,00" />
          <p className="text-[11px] text-on-surface-variant mt-1">{IVA_INCLUIDO}</p>
        </div>
        <div>
          <label className={labelAdmin} htmlFor="item-stock">
            Stock (uds) *
          </label>
          <input id="item-stock" className={inputAdmin} type="number" min={0} step={1} value={form.stock} onChange={cambiar('stock')} />
        </div>
      </div>
      <div>
        <label className={labelAdmin} htmlFor="item-descripcion">
          Descripción
        </label>
        <textarea
          id="item-descripcion"
          className={`${inputAdmin} resize-none`}
          rows={3}
          value={form.descripcion}
          onChange={cambiar('descripcion')}
          placeholder="Opcional. Ingredientes y alérgenos pendientes de confirmar."
        />
      </div>
      <label className="flex items-center gap-3 text-sm text-on-surface cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox rounded-sm text-secondary focus:ring-secondary"
          checked={form.disponible}
          onChange={(e) => setForm((f) => ({ ...f, disponible: e.target.checked }))}
        />
        Disponible en la tienda
      </label>
      <AvisoError mensaje={error} />
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
        <button type="button" className={botonSecundario} onClick={onCancelar} disabled={guardando}>
          Cancelar
        </button>
        <button type="submit" className={botonPrimario} disabled={guardando}>
          <span className="material-symbols-outlined text-base">save</span>
          {guardando ? 'Guardando…' : textoGuardar}
        </button>
      </div>
    </form>
  );
}
