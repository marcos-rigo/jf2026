import type { Metadata } from 'next';
import IdeayContent from './ideay-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'IDEAY+: de comprender a construir';
const DESCRIPTION =
  'La lógica generativa de IDEAY+: partir de las capacidades presentes de un grupo, la progresión de adentro hacia afuera (personal, institucional, pedagógica), y la arquitectura de cuatro movimientos y doce lienzos de la metodología.';

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

export default function IdeayPage() {
  return (
    <RequireAuth>
      <IdeayContent />
    </RequireAuth>
  );
}
