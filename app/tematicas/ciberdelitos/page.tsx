import type { Metadata } from 'next';
import CiberdelitosContent from './ciberdelitos-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Ciberdelitos y Delitos Facilitados por Tecnología: de identificar a intervenir';
const DESCRIPTION =
  'Cómo distinguir una conducta que depende de sistemas informáticos de una que la tecnología solo facilita, los cuatro roles que puede cumplir la tecnología y por qué la prevención temprana sigue importando aunque la investigación exija cooperación entre jurisdicciones.';

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

export default function CiberdelitosPage() {
  return (
    <RequireAuth>
      <CiberdelitosContent />
    </RequireAuth>
  );
}
