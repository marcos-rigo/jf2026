import type { Metadata } from 'next';
import LaEscuelaComoEspacioCivicoContent from './escuela-civica-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Escuela como Espacio Cívico';
const DESCRIPTION =
  'Cómo la escuela puede formar ciudadanía digital más allá de prohibir o permitir pantallas.';

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

export default function LaEscuelaComoEspacioCivicoPage() {
  return (
    <RequireAuth>
      <LaEscuelaComoEspacioCivicoContent />
    </RequireAuth>
  );
}
