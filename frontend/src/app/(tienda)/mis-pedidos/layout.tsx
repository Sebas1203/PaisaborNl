import { RequireRole } from '@/components/auth/RequireRole';

// /mis-pedidos y su detalle exigen sesión (cliente o admin)
export default function MisPedidosLayout({ children }: { children: React.ReactNode }) {
  return <RequireRole rol="cliente">{children}</RequireRole>;
}
