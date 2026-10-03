import type { Metadata } from 'next';
import EticoNormativaContent from './etico-normativa-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Ético-Normativa y Derechos: de lo posible a lo legítimo';
const DESCRIPTION =
  'La sexta dimensión del Poliedro de Ciudadanía Digital: por qué que la tecnología lo permita no vuelve legítima una acción, cómo distinguir valores, reglas sociales, reglas de plataforma y normas jurídicas, y qué criterios usar para decidir.';

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

export default function EticoNormativaPage() {
  return (
    <RequireAuth>
      <EticoNormativaContent />
    </RequireAuth>
  );
}
