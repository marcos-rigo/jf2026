import type { Metadata } from 'next';
import PedagogicaCreativaContent from './pedagogica-creativa-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Pedagógica y Creativa: de usar herramientas a aprender con ellas';
const DESCRIPTION =
  'La octava dimensión del Poliedro de Ciudadanía Digital: cómo aprender y crear con tecnología, distinguir la capacidad aumentada de la sustitución cognitiva y decidir qué capacidad querés preservar o desarrollar.';

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

export default function PedagogicaCreativaPage() {
  return (
    <RequireAuth>
      <PedagogicaCreativaContent />
    </RequireAuth>
  );
}
