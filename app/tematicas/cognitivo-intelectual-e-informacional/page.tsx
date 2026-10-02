import type { Metadata } from 'next';
import CognitivoIntelectualEInformacionalContent from './cognitivo-intelectual-e-informacional-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Cognitivo-Intelectual e Informacional: de encontrar información a juzgarla';
const DESCRIPTION =
  'La segunda dimensión del Poliedro de Ciudadanía Digital: cómo evaluar la calidad de la información, aplicar la lectura lateral y ajustar cuánto verificar según lo que está en juego.';

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

export default function CognitivoIntelectualEInformacionalPage() {
  return (
    <RequireAuth>
      <CognitivoIntelectualEInformacionalContent />
    </RequireAuth>
  );
}
