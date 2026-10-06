import type { Metadata } from 'next';
import LaPersonaNoEsUnDatoContent from './la-persona-no-es-un-dato-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Persona No Es un Dato: de clasificar a comprender';
const DESCRIPTION =
  'Por qué un perfil, una clasificación o una predicción pueden ser útiles y al mismo tiempo una reducción, cuándo el impacto de una decisión basada en datos exige mayor exigencia institucional, y el derecho a evolucionar sin quedar fijado a una representación pasada.';

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
