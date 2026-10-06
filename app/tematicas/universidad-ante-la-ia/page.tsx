import type { Metadata } from 'next';
import UniversidadAnteLaIaContent from './universidad-ante-la-ia-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Universidad ante la Inteligencia Artificial: de vigilar el resultado a definir el objetivo';
const DESCRIPTION =
  'Por qué una misma herramienta de IA puede ser adecuada o inadecuada según la capacidad que una actividad busca desarrollar, por qué la claridad normativa es más educativa que la vigilancia con detectores imperfectos, y qué responsabilidad de investigación tiene la universidad frente a la IA.';

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

export default function UniversidadAnteLaIaPage() {
  return (
    <RequireAuth>
      <UniversidadAnteLaIaContent />
    </RequireAuth>
  );
}
