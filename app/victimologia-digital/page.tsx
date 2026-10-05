import type { Metadata } from 'next';
import VictimologiaDigitalContent from './victimologia-digital-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Victimología Digital';
const DESCRIPTION =
  'Qué hacer y a dónde recurrir si ya fuiste víctima de un hecho digital, desde la primera reacción hasta la reparación.';

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
