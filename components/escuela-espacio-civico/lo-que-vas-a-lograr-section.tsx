'use client';

import { Section, ListaNumerada, useContenido } from './ui';

// A diferencia de las dimensiones del Poliedro, esta temática NO lleva recuadro de
// "Competencia central" en esta sección — solo los objetivos (ver CLAUDE.md del prompt).
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
