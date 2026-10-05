'use client';

import { Section } from './ui';

// Scaffold: por ahora esta sección solo muestra su encabezado. El contenido real se
// carga en un prompt posterior (ver lib/escuela-civica-content.ts).
export default function IntroduccionSection() {
  return <Section id="introduccion" number="01" title="Introducción" />;
}
