import type { Metadata } from 'next';
import InfanciasIntimidadYDanosSinteticosContent from './infancias-intimidad-y-danos-sinteticos-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Infancias, Intimidad y Daños Sintéticos: de vigilar a acompañar';
const DESCRIPTION =
  'Por qué la protección de niñas, niños y adolescentes necesita reconocer autonomía progresiva en vez de vigilancia permanente, la diferencia entre el intercambio íntimo consensuado y la difusión no autorizada, y por qué los daños sintéticos generados por IA exigen algo más que detectarlos a simple vista.';

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

export default function InfanciasIntimidadYDanosSinteticosPage() {
  return (
    <RequireAuth>
      <InfanciasIntimidadYDanosSinteticosContent />
    </RequireAuth>
  );
}
