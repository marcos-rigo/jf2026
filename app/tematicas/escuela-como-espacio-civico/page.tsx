import type { Metadata } from 'next';
import EscuelaComoEspacioCivicoContent from './escuela-espacio-civico-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'La Escuela como Espacio Cívico: de dentro del edificio a territorio híbrido';
const DESCRIPTION =
  'Cuándo una situación ocurrida fuera de la escuela adquiere igualmente relevancia escolar, qué es la Pedagogía Cívica Digital como enfoque transversal, y por qué las reglas y protocolos de una institución deben ser comprensibles y proporcionales.';

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

export default function EscuelaComoEspacioCivicoPage() {
  return (
    <RequireAuth>
      <EscuelaComoEspacioCivicoContent />
    </RequireAuth>
  );
}
