'use client';

import { AdminProfileView } from '@/features/admin/AdminProfileView';
import { INITIAL_USER_PROFILE, RECENT_ORDERS } from '@/data/mockData';
import { useAppState } from '@/app/providers';

export default function AdminPage() {
  const { openNewProductModal, setActiveTab } = useAppState();

  return (
    <AdminProfileView
      userProfile={INITIAL_USER_PROFILE}
      orders={RECENT_ORDERS}
      onOpenNewProductModal={openNewProductModal}
      onNavigateToTab={setActiveTab}
    />
  );
}
