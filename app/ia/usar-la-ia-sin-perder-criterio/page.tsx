import type { Metadata } from 'next';
import UsarLaIaSinPerderCriterioContent from './usar-la-ia-sin-perder-criterio-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Inteligencia Artificial: de delegar tareas a delegar criterio';
const DESCRIPTION =
  'Primera temática del módulo Inteligencia Artificial: cuándo usar una IA es ampliar tu capacidad y cuándo es delegar un criterio que te corresponde conservar, cómo verificar lo que produce y cómo cuidar la autoría y los datos.';

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

export default function UsarLaIaSinPerderCriterioPage() {
  return (
    <RequireAuth>
      <UsarLaIaSinPerderCriterioContent />
    </RequireAuth>
  );
}
