import type { Metadata } from 'next';
import JusticiaEnElTerritorioHibridoContent from './justicia-hibrida-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Justicia en el Territorio Híbrido';
const DESCRIPTION =
  'Cómo cambia el acceso a la justicia cuando el delito, la prueba o el daño ocurren en entornos digitales.';

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

export default function JusticiaEnElTerritorioHibridoPage() {
  return (
    <RequireAuth>
      <JusticiaEnElTerritorioHibridoContent />
    </RequireAuth>
  );
}
