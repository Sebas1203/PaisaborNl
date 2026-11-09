import { CateringProvider } from '@/providers/CateringProvider';

// Todas las pantallas de catering comparten el mismo borrador de solicitud
export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return <CateringProvider>{children}</CateringProvider>;
}
