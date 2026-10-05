import type { Metadata } from 'next';
import RutinasExposicionYGuardaniaContent from './rutinas-guardania-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Rutinas, Exposición y Guardianía';
const DESCRIPTION =
  'Por qué los mismos hábitos digitales que facilitan la vida también definen cuánto expuesto estás, y qué significa tener un "guardián" en un entorno digital.';

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

export default function RutinasExposicionYGuardaniaPage() {
  return (
    <RequireAuth>
      <RutinasExposicionYGuardaniaContent />
    </RequireAuth>
  );
}
