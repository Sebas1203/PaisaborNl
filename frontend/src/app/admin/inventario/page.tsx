'use client';

import { AdminInventoryView } from '@/features/admin/AdminInventoryView';
import { useAppState } from '@/app/providers';

export default function InventarioPage() {
  const { inventory, openNewProductModal, openEditProductModal, handleDeleteProduct } =
    useAppState();

  return (
    <AdminInventoryView
      inventory={inventory}
      onOpenNewProductModal={openNewProductModal}
      onEditProduct={openEditProductModal}
      onDeleteProduct={handleDeleteProduct}
    />
  );
}
