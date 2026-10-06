import type { Metadata } from 'next';
import ComunidadYOrganizacionesSocialesContent from './comunidad-y-organizaciones-sociales-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Comunidad y Organizaciones Sociales: de estar conectados a ser comunidad';
const DESCRIPTION =
  'Por qué conexión y comunidad no son equivalentes, cómo los laboratorios ciudadanos combinan conocimiento experto con experiencia situada, y por qué un referente no representa automáticamente a todos los que no están en la conversación.';

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

export default function ComunidadYOrganizacionesSocialesPage() {
  return (
    <RequireAuth>
      <ComunidadYOrganizacionesSocialesContent />
    </RequireAuth>
  );
}
