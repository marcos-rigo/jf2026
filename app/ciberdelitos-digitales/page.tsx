import type { Metadata } from 'next';
import CiberdelitosDigitalesContent from './ciberdelitos-digitales-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Ciberdelitos y Delitos Facilitados por Tecnología';
const DESCRIPTION =
  'Qué delitos cambian de forma cuando se cometen con tecnología, y cómo reconocerlos y actuar frente a ellos.';

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

export default function CiberdelitosDigitalesPage() {
  return (
    <RequireAuth>
      <CiberdelitosDigitalesContent />
    </RequireAuth>
  );
}
