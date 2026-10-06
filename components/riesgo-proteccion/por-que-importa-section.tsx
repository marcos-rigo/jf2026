'use client';

import { Section, P, Callout, TextArea, useContenido } from './ui';
import { useRiesgoProteccionStore } from '@/lib/riesgo-proteccion-store';

export default function PorQueImportaSection() {
  const c = useContenido().porQueImporta;
  const respuestaGancho = useRiesgoProteccionStore((s) => s.respuestaGancho);
  const setRespuestaGancho = useRiesgoProteccionStore((s) => s.setRespuestaGancho);

  return (
    <Section id="por-que-importa" number="03" title={c.titulo}>
      <p className="font-display text-xl md:text-2xl font-bold text-brand-navy leading-snug">{c.pregunta}</p>
      {c.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}

      <Callout tone="pink">
        <p>{c.problema}</p>
      </Callout>

      <div className="space-y-2">
        <TextArea
          value={respuestaGancho}
          onChange={setRespuestaGancho}
          placeholder={c.placeholder}
          rows={4}
          label={c.pregunta}
        />
        <p className="text-sm text-slate-500 leading-relaxed">{c.ayuda}</p>
      </div>
    </Section>
  );
}
