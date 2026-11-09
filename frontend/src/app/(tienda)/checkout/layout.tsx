import { RequireRole } from '@/components/auth/RequireRole';

// Todo el checkout exige sesión: sin ella se redirige a /login?next=… y el carrito se conserva
export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <RequireRole rol="cliente">{children}</RequireRole>;
}
