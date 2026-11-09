// Inventario (antes la maqueta administrador_inventario): productos y menú con buscador, filtros por
// categoría, edición en modal, disponibilidad, ajuste de stock y alerta de stock bajo.
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { ItemImage } from '@/components/ItemImage';
import { AvisoError, EstadoError, EstadoVacio, Skeleton } from '@/components/ui/Estados';
import { ConfirmDialog, Modal } from '@/components/ui/Modal';
import { CATEGORIAS_INVENTARIO, nombreCategoria, STOCK_BAJO_UMBRAL } from '@/config/inventario';
import { EditarProductoModal } from '@/features/admin/EditarProductoModal';
import { botonPrimario, botonSecundario, CabeceraAdmin, inputAdmin, labelAdmin, PaginaAdmin, Tabla, TarjetaDato } from '@/features/admin/ui';
import { useCarga } from '@/hooks/useCarga';
import { formatEUR } from '@/lib/format';
import { inventarioService, mensajeDeError, type CategoriaInventario, type ItemInventario } from '@/services';

function AjusteStockModal({ item, onCerrar, onGuardado }: { item: ItemInventario | null; onCerrar: () => void; onGuardado: (i: ItemInventario) => void }) {
  const [cantidad, setCantidad] = useState('');
  const [tipo, setTipo] = useState<'entrada' | 'salida'>('entrada');
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();
    if (!item) return;
    const n = Number(cantidad);
    if (!Number.isInteger(n) || n <= 0) {
      setError('Indica un número entero de unidades mayor que 0.');
      return;
    }
    setGuardando(true);
    setError(null);
    try {
      onGuardado(await inventarioService.ajustarStock(item.id, tipo === 'entrada' ? n : -n));
      setCantidad('');
    } catch (err) {
      setError(mensajeDeError(err));
    } finally {
      setGuardando(false);
    }
  }

  return (
    <Modal abierto={Boolean(item)} titulo={item ? `Ajustar stock: ${item.nombre}` : ''} onCerrar={onCerrar} ancho="max-w-md">
      {item && (
        <form noValidate onSubmit={guardar} className="space-y-5">
          <p className="text-sm text-on-surface-variant">
            Stock actual: <strong className="text-primary">{item.stock} uds</strong>
          </p>
          <div className="grid grid-cols-2 gap-2">
            {(['entrada', 'salida'] as const).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tipo === t}
                onClick={() => setTipo(t)}
                className={`${tipo === t ? botonPrimario : botonSecundario} w-full`}
              >
                <span className="material-symbols-outlined text-base">{t === 'entrada' ? 'add' : 'remove'}</span>
                {t === 'entrada' ? 'Entrada' : 'Salida'}
              </button>
            ))}
          </div>
          <div>
            <label className={labelAdmin} htmlFor="ajuste-cantidad">
              Unidades
            </label>
            <input id="ajuste-cantidad" className={inputAdmin} type="number" min={1} step={1} value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
          </div>
          <AvisoError mensaje={error} />
          <div className="flex justify-end gap-3">
            <button type="button" className={botonSecundario} onClick={onCerrar}>
              Cerrar
            </button>
            <button type="submit" className={botonPrimario} disabled={guardando}>
              {guardando ? 'Guardando…' : 'Registrar ajuste'}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

function InventarioAdmin() {
  const soloBajoInicial = useSearchParams().get('stock') === 'bajo';
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState<CategoriaInventario | 'todas'>('todas');
  const [soloBajo, setSoloBajo] = useState(soloBajoInicial);
  const [editando, setEditando] = useState<ItemInventario | null>(null);
  const [ajustando, setAjustando] = useState<ItemInventario | null>(null);
  const [desactivando, setDesactivando] = useState<ItemInventario | null>(null);
  const [procesando, setProcesando] = useState(false);
  const [errorAccion, setErrorAccion] = useState<string | null>(null);
  const { datos: items, setDatos, error, cargando, recargar } = useCarga(() => inventarioService.listar(), []);

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return (items ?? []).filter(
      (i) => (categoria === 'todas' || i.categoria === categoria) && (!soloBajo || i.stock < STOCK_BAJO_UMBRAL) && (!q || i.nombre.toLowerCase().includes(q)),
    );
  }, [items, busqueda, categoria, soloBajo]);

  const actualizar = (item: ItemInventario) => setDatos((lista) => lista?.map((i) => (i.id === item.id ? item : i)) ?? null);
  const bajos = (items ?? []).filter((i) => i.stock < STOCK_BAJO_UMBRAL).length;

  async function cambiarDisponibilidad(item: ItemInventario, disponible: boolean) {
    setProcesando(true);
    setErrorAccion(null);
    try {
      actualizar(await inventarioService.cambiarDisponibilidad(item.id, disponible));
    } catch (e) {
      setErrorAccion(mensajeDeError(e));
    } finally {
      setProcesando(false);
      setDesactivando(null);
    }
  }

  return (
    <PaginaAdmin>
      <CabeceraAdmin
        etiqueta="Despensa y cocina"
        titulo="Inventario"
        descripcion={`Productos y platos del menú. Los precios incluyen IVA. Alerta de stock bajo por debajo de ${STOCK_BAJO_UMBRAL} unidades.`}
        acciones={
          <Link href="/admin/inventario/nuevo" className={botonPrimario}>
            <span className="material-symbols-outlined text-base">add_circle</span> Nuevo producto
          </Link>
        }
      />

      {items && (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TarjetaDato icono="inventory_2" etiqueta="Ítems" valor={items.length} />
          <TarjetaDato icono="storefront" etiqueta="Disponibles" valor={items.filter((i) => i.disponible).length} />
          <TarjetaDato icono="warning" etiqueta="Stock bajo" valor={bajos} alerta={bajos > 0} />
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        <label className="relative">
          <span className="sr-only">Buscar producto</span>
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">search</span>
          <input className={`${inputAdmin} pl-10`} placeholder="Buscar producto o plato…" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        </label>
        <select aria-label="Filtrar por categoría" className={inputAdmin} value={categoria} onChange={(e) => setCategoria(e.target.value as CategoriaInventario | 'todas')}>
          <option value="todas">Todas las categorías</option>
          {CATEGORIAS_INVENTARIO.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-on-surface cursor-pointer">
          <input type="checkbox" className="form-checkbox rounded-sm text-secondary focus:ring-secondary" checked={soloBajo} onChange={(e) => setSoloBajo(e.target.checked)} />
          Solo stock bajo
        </label>
      </div>

      <AvisoError mensaje={errorAccion} />

      {cargando ? (
        <Skeleton filas={6} />
      ) : error ? (
        <EstadoError mensaje={error} onReintentar={recargar} />
      ) : !items?.length ? (
        <EstadoVacio titulo="Aún no hay productos en el inventario" icono="inventory_2" />
      ) : filtrados.length === 0 ? (
        <EstadoVacio titulo="Ningún producto coincide con la búsqueda" icono="filter_alt_off" />
      ) : (
        <Tabla cabeceras={['Producto', 'Categoría', 'Precio', 'Stock', 'Disponible', 'Acciones']}>
          {filtrados.map((item) => {
            const bajo = item.stock < STOCK_BAJO_UMBRAL;
            return (
              <tr key={item.id} className={`${item.disponible ? '' : 'opacity-60'} hover:bg-surface-container-low/60`}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 min-w-[12rem]">
                    <ItemImage src={item.imagen} alt={item.nombre} className="w-10 h-10 rounded-md object-cover bg-surface-container-high shrink-0" />
                    <span className="font-semibold text-primary">{item.nombre}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-on-surface-variant">{nombreCategoria(item.categoria)}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="font-semibold text-primary">{formatEUR(item.precio)}</span>
                  {item.precioEstimado && <span className="block text-[10px] text-secondary">Precio estimado</span>}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      item.stock === 0 ? 'bg-error-container text-on-error-container' : bajo ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-surface-container text-primary'
                    }`}
                  >
                    {bajo && <span className="material-symbols-outlined text-sm">warning</span>}
                    {item.stock === 0 ? 'Agotado' : `${item.stock} uds`}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={item.disponible}
                    aria-label={item.disponible ? `Desactivar ${item.nombre}` : `Activar ${item.nombre}`}
                    disabled={procesando}
                    onClick={() => (item.disponible ? setDesactivando(item) : void cambiarDisponibilidad(item, true))}
                    className={`relative w-11 h-6 rounded-full transition-colors ${item.disponible ? 'bg-secondary' : 'bg-surface-container-highest'}`}
                  >
                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${item.disponible ? 'left-[22px]' : 'left-0.5'}`} />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <button type="button" className="p-2 rounded-lg text-primary hover:bg-surface-container-high" title="Editar" aria-label={`Editar ${item.nombre}`} onClick={() => setEditando(item)}>
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button type="button" className="p-2 rounded-lg text-primary hover:bg-surface-container-high" title="Ajustar stock" aria-label={`Ajustar stock de ${item.nombre}`} onClick={() => setAjustando(item)}>
                      <span className="material-symbols-outlined text-lg">tune</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </Tabla>
      )}

      <EditarProductoModal
        item={editando}
        onCerrar={() => setEditando(null)}
        onGuardado={(item) => {
          actualizar(item);
          setEditando(null);
        }}
      />
      <AjusteStockModal
        item={ajustando}
        onCerrar={() => setAjustando(null)}
        onGuardado={(item) => {
          actualizar(item);
          setAjustando(item);
        }}
      />
      <ConfirmDialog
        abierto={Boolean(desactivando)}
        titulo={`¿Desactivar ${desactivando?.nombre ?? ''}?`}
        mensaje="Dejará de estar disponible en la tienda hasta que lo vuelvas a activar."
        textoConfirmar="Desactivar"
        peligro
        procesando={procesando}
        onConfirmar={() => desactivando && void cambiarDisponibilidad(desactivando, false)}
        onCancelar={() => setDesactivando(null)}
      />
    </PaginaAdmin>
  );
}

export default function AdminInventarioPage() {
  return (
    <Suspense fallback={null}>
      <InventarioAdmin />
    </Suspense>
  );
}
