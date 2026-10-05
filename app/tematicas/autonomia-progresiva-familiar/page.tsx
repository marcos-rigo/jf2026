import type { Metadata } from 'next';
import AutonomiaProgresivaFamiliarContent from './autonomia-progresiva-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Autonomía Progresiva en Familia';
const DESCRIPTION =
  'Cómo acompañar a cada hijo o hija según su etapa, sin sobreproteger ni desentenderse: un marco de confianza y autonomía progresiva para la crianza digital.';

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

export default function AutonomiaProgresivaFamiliarPage() {
  return (
    <RequireAuth>
      <AutonomiaProgresivaFamiliarContent />
    </RequireAuth>
  );
}
