import type { Metadata } from 'next';
import DanosSinteticosEIntimidadDigitalContent from './danos-sinteticos-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Infancias, Intimidad y Daños Sintéticos';
const DESCRIPTION =
  'Consentimiento, intimidad y contenido sintético no consentido: un riesgo digital distinto del grooming o el ciberbullying, y cómo responder frente a él.';

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

export default function DanosSinteticosEIntimidadDigitalPage() {
  return (
    <RequireAuth>
      <DanosSinteticosEIntimidadDigitalContent />
    </RequireAuth>
  );
}
