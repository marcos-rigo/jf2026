'use client';

import { useState } from 'react';
import { Section, P, H3, Note, Reveal, useContenido } from './ui';
import { DIMENSIONES, TIPOS_SITUACION } from '@/lib/ciudadania-digital-content';

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1.5 text-sm transition ${
        active ? 'bg-brand-blue/10 border-brand-blue text-brand-navy font-medium' : 'bg-white border-slate-300 text-slate-600'
      }`}
    >
      {children}
    </button>
  );
}

// La selección de tipo y dimensiones es solo para pensar antes de revelar el análisis: estado local, no se persiste.
function Situacion({ s, c }: { s: ReturnType<typeof useContenido>['practica']['situaciones'][number]; c: ReturnType<typeof useContenido>['practica'] }) {
  const [tipo, setTipo] = useState<string | null>(null);
  const [dims, setDims] = useState<string[]>([]);
  const toggleDim = (id: string) => setDims((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));

  return (
    <article className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-4">
      <header>
        <h3 className="font-display text-lg font-bold text-brand-blue">{s.titulo}</h3>
        <p className="mt-1 leading-relaxed text-slate-800">{s.enunciado}</p>
      </header>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-600">{c.pensaloTitulo}</p>
        <div className="flex flex-wrap gap-2">
          {TIPOS_SITUACION.map((t) => (
            <Chip key={t} active={tipo === t} onClick={() => setTipo(t)}>
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-600">{c.dimensionesTitulo}</p>
        <div className="flex flex-wrap gap-2">
          {DIMENSIONES.map((d) => (
            <Chip key={d.id} active={dims.includes(d.id)} onClick={() => toggleDim(d.id)}>
              {d.nombre}
            </Chip>
          ))}
        </div>
      </div>

      <Reveal label={c.revelar} hideLabel={c.ocultar}>
        {s.analisis.map((a) => (
          <div key={a.pregunta}>
            <p className="font-semibold text-brand-navy">{a.pregunta}</p>
            <P>{a.respuesta}</P>
          </div>
        ))}
        <Note>{s.nota}</Note>
      </Reveal>
    </article>
  );
}

export default function PracticaSection() {
  const c = useContenido().practica;
  return (
    <Section id="practica" number="07" title={c.titulo}>
      <P>{c.intro}</P>
      <div className="space-y-6">
        {c.situaciones.map((s) => (
          <Situacion key={s.titulo} s={s} c={c} />
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <H3>{c.error.titulo}</H3>
        <P>{c.error.intro}</P>
        <blockquote className="rounded-xl border-l-4 border-brand-pink bg-white p-5 text-lg italic leading-relaxed text-slate-800 shadow-sm">
          &ldquo;{c.error.cita}&rdquo;
        </blockquote>
        <Reveal label={c.revelar} hideLabel={c.ocultar}>
          <p className="font-semibold text-brand-navy">{c.error.analisisTitulo}</p>
          <P>{c.error.analisis}</P>
        </Reveal>
      </div>
    </Section>
  );
}
