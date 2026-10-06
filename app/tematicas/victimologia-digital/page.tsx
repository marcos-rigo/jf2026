import type { Metadata } from 'next';
import VictimologiaDigitalContent from './victimologia-digital-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Victimología Digital: de reconocer el daño a recuperar agencia';
const DESCRIPTION =
  'Por qué la persistencia, la replicación y la reutilización de datos pueden extender las consecuencias de un hecho digital, qué es la victimización secundaria, y por qué recuperarse implica volver a decidir sobre la propia información, los vínculos y la participación.';

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

export default function VictimologiaDigitalPage() {
  return (
    <RequireAuth>
      <VictimologiaDigitalContent />
    </RequireAuth>
  );
}
