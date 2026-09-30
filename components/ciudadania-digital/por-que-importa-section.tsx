'use client';

import { Section, P, H3, Note, TextArea, SelectField, useContenido } from './ui';
import { useCiudadaniaMadreStore } from '@/lib/ciudadania-digital-madre-store';
import { FAMILIARIDAD_OPCIONES } from '@/lib/ciudadania-digital-content';

export default function PorQueImportaSection() {
  const c = useContenido().porQueImporta;
  const familiaridad = useCiudadaniaMadreStore((s) => s.familiaridad);
  const definicionPropia = useCiudadaniaMadreStore((s) => s.definicionPropia);
  const respuestaGancho = useCiudadaniaMadreStore((s) => s.respuestaGancho);
  const setAutodiagnostico = useCiudadaniaMadreStore((s) => s.setAutodiagnostico);
  const setRespuestaGancho = useCiudadaniaMadreStore((s) => s.setRespuestaGancho);

  return (
    <Section id="por-que-importa" number="03" title={c.titulo}>
      <p className="font-display text-3xl md:text-4xl font-bold text-brand-navy leading-tight">{c.pregunta}</p>
      {c.parrafos.map((p) => (
        <P key={p}>{p}</P>
      ))}

      <div className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-3">
        <H3>{c.problemaTitulo}</H3>
        <P>{c.problema}</P>
        <TextArea value={respuestaGancho} onChange={setRespuestaGancho} placeholder={c.problemaPlaceholder} rows={5} />
        <Note>{c.problemaInstruccion}</Note>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-5">
        <H3>{c.puntoPartidaTitulo}</H3>
        <div className="space-y-2">
          <p className="font-medium text-slate-800">{c.pregunta1}</p>
          <SelectField
            value={familiaridad}
            onChange={(v) => setAutodiagnostico('familiaridad', v)}
            options={FAMILIARIDAD_OPCIONES.map((o) => ({ value: o, label: o }))}
            placeholder={c.pregunta1Placeholder}
            label={c.pregunta1}
          />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-slate-800">{c.pregunta2}</p>
          <TextArea
            value={definicionPropia}
            onChange={(v) => setAutodiagnostico('definicionPropia', v)}
            placeholder={c.problemaPlaceholder}
            rows={3}
            label={c.pregunta2}
          />
          <Note>{c.pregunta2Ayuda}</Note>
        </div>
        <Note>{c.notaGancho}</Note>
      </div>
      <P className="font-medium">{c.cierre}</P>
    </Section>
  );
}
