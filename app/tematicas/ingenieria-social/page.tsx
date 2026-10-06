import type { Metadata } from 'next';
import IngenieriaSocialContent from './ingenieria-social-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Ingeniería Social y Confianza: de desconfiar a verificar';
const DESCRIPTION =
  'Cómo la ingeniería social explota la confianza, la urgencia y la autoridad aparente, y cómo aplicar el método Pausar–Verificar–Decidir sin caer en la desconfianza absoluta.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'es_AR',
  },
};

export default function IngenieriaSocialPage() {
  return (
    <RequireAuth>
      <IngenieriaSocialContent />
    </RequireAuth>
  );
}
