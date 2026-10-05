import type { Metadata } from 'next';
import LaPersonaNoEsUnDatoContent from './persona-no-es-dato-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Persona No Es un Dato';
const DESCRIPTION =
  'Por qué cuidar los datos personales es cuidar a la persona, y qué significa eso en la práctica cotidiana.';

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

export default function LaPersonaNoEsUnDatoPage() {
  return (
    <RequireAuth>
      <LaPersonaNoEsUnDatoContent />
    </RequireAuth>
  );
}
