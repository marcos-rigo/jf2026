import type { Metadata } from 'next';
import IdeayMasContent from './ideay-mas-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'IDEAY+';
const DESCRIPTION =
  'La metodología de construcción colectiva de posibilidades: cómo pasar de un diagnóstico a una idea, y de una idea a una acción concreta.';

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

export default function IdeayMasPage() {
  return (
    <RequireAuth>
      <IdeayMasContent />
    </RequireAuth>
  );
}
