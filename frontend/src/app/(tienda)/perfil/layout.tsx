import { RequireRole } from '@/components/auth/RequireRole';

// /perfil y /perfil/editar exigen sesión (cliente o admin)
export default function PerfilLayout({ children }: { children: React.ReactNode }) {
  return <RequireRole rol="cliente">{children}</RequireRole>;
}
