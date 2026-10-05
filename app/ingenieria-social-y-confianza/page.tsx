import type { Metadata } from 'next';
import IngenieriaSocialYConfianzaContent from './ingenieria-social-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Ingeniería Social y Confianza';
const DESCRIPTION =
  'Pausar–Verificar–Decidir: cómo reconocer cuándo alguien está explotando tu confianza para que actúes rápido y sin pensar.';

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

export default function IngenieriaSocialYConfianzaPage() {
  return (
    <RequireAuth>
      <IngenieriaSocialYConfianzaContent />
    </RequireAuth>
  );
}
