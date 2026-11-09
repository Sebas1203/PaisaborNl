import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';
import { AdminHeader, AdminSidebar } from '@/components/layout/AdminSidebar';

// Pantallas de administración: comparten sidebar y header. /admin/login queda fuera de este grupo.
// RequireRole es la segunda barrera (la primera es src/proxy.ts).
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireRole rol="admin">
      <AdminSidebar />
      <div className="pl-64">
        <AdminHeader />
        {children}
      </div>
    </RequireRole>
  );
}
