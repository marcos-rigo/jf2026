import type { Metadata } from 'next';
import JusticiaEnElTerritorioHibridoContent from './justicia-territorio-hibrido-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Justicia en el Territorio Híbrido: de digitalizar trámites a garantizar comprensión';
const DESCRIPTION =
  'Por qué la digitalización judicial puede mejorar el acceso y seguir siendo incomprensible, por qué la evidencia digital exige proporcionalidad y no solo preservación, y qué puede y qué no puede hacer la IA judicial.';

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
