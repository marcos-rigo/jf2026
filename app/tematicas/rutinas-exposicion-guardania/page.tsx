import type { Metadata } from 'next';
import RutinasExposicionGuardaniaContent from './rutinas-exposicion-guardania-content';
import { RequireAuth } from '@/components/tematicas/require-auth';

const TITLE = 'Rutinas, Exposición y Guardianía: de culpar a entender las condiciones';
const DESCRIPTION =
  'Cómo la teoría de actividades rutinarias, trasladada al territorio digital, explica la exposición sin culpar a quien la atraviesa, y cómo pensar la guardianía digital en varias capas: personal, relacional, institucional, tecnológica, de plataforma y pública.';

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

export default function RutinasExposicionGuardaniaPage() {
  return (
    <RequireAuth>
      <RutinasExposicionGuardaniaContent />
    </RequireAuth>
  );
}
