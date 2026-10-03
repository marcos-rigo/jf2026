'use client';

import { Section, Callout, ListaNumerada, useContenido } from './ui';

export default function LoQueVasALograrSection() {
  const c = useContenido().loQueVasALograr;
  return (
    <Section id="lo-que-vas-a-lograr" number="02" title={c.titulo}>
      <Callout title={c.competenciaEtiqueta} tone="navy">
        <p>{c.competencia}</p>
      </Callout>
      <div className="space-y-3">
        <p className="font-display font-bold text-brand-navy">{c.objetivosTitulo}</p>
        <ListaNumerada items={c.objetivos} />
      </div>
    </Section>
  );
}
