'use client';

import { useState } from 'react';
import { EditarProductoGeneral } from './modals/EditarProductoGeneral';
import { EditarProductoCanales } from './modals/EditarProductoCanales';

// Modal "Editar Producto" del inventario. Sus dos pestañas con diseño son dos pantallas de Stitch.
export function EditarProductoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<'general' | 'canales'>('general');

  if (!open) return null;

  const close = () => {
    setTab('general');
    onClose();
  };

  return tab === 'general' ? (
    <EditarProductoGeneral onClose={close} onTab={setTab} />
  ) : (
    <EditarProductoCanales onClose={close} onTab={setTab} />
  );
}
