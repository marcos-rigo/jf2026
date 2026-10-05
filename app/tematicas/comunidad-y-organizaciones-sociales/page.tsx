import type { Metadata } from 'next';
import ComunidadYOrganizacionesSocialesContent from './comunidad-organizaciones-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Comunidad y Organizaciones Sociales';
const DESCRIPTION =
  'Cómo las organizaciones comunitarias pueden organizarse y actuar con herramientas digitales sin perder su propósito.';

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
