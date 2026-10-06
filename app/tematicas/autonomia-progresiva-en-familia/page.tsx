import type { Metadata } from 'next';
import AutonomiaProgresivaEnFamiliaContent from './autonomia-familia-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Autonomía Progresiva en Familia: de controlar a acompañar';
const DESCRIPTION =
  'Por qué las prácticas adultas enseñan aunque no se lo propongan, por qué la protección basada solo en supervisión pierde eficacia con la edad, y por qué la confianza familiar funciona como una infraestructura preventiva.';

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

export default function AutonomiaProgresivaEnFamiliaPage() {
  return (
    <RequireAuth>
      <AutonomiaProgresivaEnFamiliaContent />
    </RequireAuth>
  );
}
