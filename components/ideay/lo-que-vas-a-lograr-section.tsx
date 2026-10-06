'use client';

import { Section, ListaNumerada, useContenido } from './ui';

// Esta temática NO lleva recuadro de "Competencia central" (ver CLAUDE.md): va directo
// a los objetivos.
export default function LoQueVasALograrSection() {
  const c = useContenido().loQueVasALograr;
  return (
    <Section id="lo-que-vas-a-lograr" number="02" title={c.titulo}>
      <div className="space-y-3">
        <p className="font-display font-bold text-brand-navy">{c.objetivosTitulo}</p>
        <ListaNumerada items={c.objetivos} />
      </div>
    </Section>
  );
}
