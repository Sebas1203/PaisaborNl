import React from 'react';
import { AdminHeader, AdminSidebar } from '@/components/layout/AdminSidebar';

// Pantallas de administración: comparten sidebar y header
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminSidebar />
      <div className="pl-64">
        <AdminHeader />
        {children}
      </div>
    </>
  );
}
