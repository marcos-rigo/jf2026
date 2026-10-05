import type { Metadata } from 'next';
import LaUniversidadAnteLaInteligenciaArtificialContent from './universidad-ia-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Universidad ante la Inteligencia Artificial';
const DESCRIPTION =
  'Integridad académica, evaluación y criterio docente en un escenario donde el estudiantado ya usa IA todos los días.';

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

export default function LaUniversidadAnteLaInteligenciaArtificialPage() {
  return (
    <RequireAuth>
      <LaUniversidadAnteLaInteligenciaArtificialContent />
    </RequireAuth>
  );
}
