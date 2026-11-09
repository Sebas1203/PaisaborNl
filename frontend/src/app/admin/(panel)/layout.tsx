import React from 'react';
import { RequireRole } from '@/components/auth/RequireRole';
import { AdminShell } from '@/components/layout/AdminSidebar';

// Pantallas de administración: sidebar (colapsable en móvil) y cabecera. /admin/login queda fuera
// de este grupo. RequireRole es la segunda barrera (la primera es src/proxy.ts).
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireRole rol="admin">
      <AdminShell>{children}</AdminShell>
    </RequireRole>
  );
}
