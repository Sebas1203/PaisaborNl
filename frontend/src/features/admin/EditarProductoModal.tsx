'use client';

import { useState } from 'react';
import { itemPorId } from '@/data';
import { EditarProductoGeneral } from './modals/EditarProductoGeneral';
import { EditarProductoCanales } from './modals/EditarProductoCanales';

// Modal "Editar Producto" del inventario (solo lectura/mock, sin backend). Sus dos pestañas con
// diseño son dos pantallas de Stitch; muestran el ítem del catálogo seleccionado.
export function EditarProductoModal({ itemId, onClose }: { itemId: string | null; onClose: () => void }) {
  const [tab, setTab] = useState<'general' | 'canales'>('general');
  const item = itemId ? itemPorId(itemId) : undefined;

  if (!item) return null;

  const close = () => {
    setTab('general');
    onClose();
  };

  return tab === 'general' ? (
    <EditarProductoGeneral item={item} onClose={close} onTab={setTab} />
  ) : (
    <EditarProductoCanales item={item} onClose={close} onTab={setTab} />
  );
}
