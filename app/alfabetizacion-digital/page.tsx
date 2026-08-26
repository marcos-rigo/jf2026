import type { Metadata } from 'next';
import AlfabetizacionDigitalContent from './alfabetizacion-digital-content';

export const metadata: Metadata = {
  title: 'Alfabetización Digital: Del Acceso Técnico a la Autonomía Cognitiva | José Farhat',
  description:
    'Guía integral y marco formativo sobre Alfabetización Digital. Analiza modelos teóricos (Gilster, Eshet-Alkalai, Ng), los marcos DigComp 3.0 y DigCompALC (CEPAL), impacto macroeconómico y el rol docente en el aula.',
  keywords: [
    'alfabetización digital',
    'DigComp 3.0',
    'DigCompALC',
    'CEPAL',
    'competencias digitales',
    'brecha digital',
    'inteligencia artificial',
    'educación digital',
    'andamiaje cognitivo',
  ],
  openGraph: {
    title: 'Alfabetización Digital: Del Acceso Técnico a la Autonomía Cognitiva | José Farhat',
    description:
      'Guía integral y marco formativo sobre Alfabetización Digital. Analiza modelos teóricos, los marcos DigComp 3.0 y DigCompALC (CEPAL), e impacto socioeconómico.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function AlfabetizacionDigitalPage() {
  return <AlfabetizacionDigitalContent />;
}
