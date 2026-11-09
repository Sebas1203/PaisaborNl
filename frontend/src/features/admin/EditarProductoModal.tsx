'use client';

import { Modal } from '@/components/ui/Modal';
import { inventarioService, type ItemInventario } from '@/services';
import { FormularioItem } from './FormularioItem';

// Modal de edición de producto del inventario (sustituye a la maqueta estática del diseño)
export function EditarProductoModal({
  item,
  onCerrar,
  onGuardado,
}: {
  item: ItemInventario | null;
  onCerrar: () => void;
  onGuardado: (item: ItemInventario) => void;
}) {
  return (
    <Modal abierto={Boolean(item)} titulo={item ? `Editar: ${item.nombre}` : ''} onCerrar={onCerrar} ancho="max-w-2xl">
      {item && (
        <FormularioItem
          key={item.id}
          inicial={item}
          textoGuardar="Guardar cambios"
          onCancelar={onCerrar}
          onGuardar={async (datos) => onGuardado(await inventarioService.editar(item.id, datos))}
        />
      )}
    </Modal>
  );
}
