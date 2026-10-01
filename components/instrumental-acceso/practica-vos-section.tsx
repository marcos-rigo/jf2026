'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Section, P, H3, Note, useContenido } from './ui';
import {
  useInstrumentalAccesoStore,
  type EleccionSituacion,
  type SituacionClave,
} from '@/lib/instrumental-acceso-store';
import type { Contenido } from '@/lib/instrumental-acceso-content';

type Situacion = Contenido['practicaVos']['situaciones'][number];
type Opcion = Contenido['practicaVos']['opcionesEleccion'][number];

function SituacionCard({ s, opciones, revelarLabel }: { s: Situacion; opciones: Opcion[]; revelarLabel: string }) {
  const entrada = useInstrumentalAccesoStore((st) => st.situaciones[s.clave]);
  const setEleccionSituacion = useInstrumentalAccesoStore((st) => st.setEleccionSituacion);
  const revelarSituacion = useInstrumentalAccesoStore((st) => st.revelarSituacion);

  return (
    <article className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-4">
      <p className="leading-relaxed text-slate-800">{s.enunciado}</p>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-slate-600 mb-1">¿De quién es el problema?</legend>
        <div className="flex flex-wrap gap-2">
          {opciones.map((o) => (
            <label
              key={o.value}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition ${
                entrada.eleccion === o.value
                  ? 'bg-brand-blue/10 border-brand-blue text-brand-navy font-medium'
                  : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name={`situacion-${s.clave}`}
                value={o.value}
                checked={entrada.eleccion === o.value}
                onChange={() => setEleccionSituacion(s.clave, o.value as EleccionSituacion)}
                className="accent-[#4272BB]"
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      {!entrada.revelada ? (
        <button
          type="button"
          onClick={() => revelarSituacion(s.clave)}
          disabled={!entrada.eleccion}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {revelarLabel}
          <ChevronDown className="w-4 h-4" />
        </button>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <P>{s.analisis}</P>
          <Note>{s.nota}</Note>
        </div>
      )}
    </article>
  );
}

export default function PracticaVosSection() {
  const c = useContenido().practicaVos;
  const errorRevelado = useInstrumentalAccesoStore((s) => s.errorRevelado);
  const revelarError = useInstrumentalAccesoStore((s) => s.revelarError);

  return (
    <Section id="practica-vos" number="07" title={c.titulo}>
      <P>{c.intro}</P>

      <div className="space-y-6">
        {c.situaciones.map((s: Situacion) => (
          <SituacionCard key={s.clave as SituacionClave} s={s} opciones={c.opcionesEleccion} revelarLabel={c.revelarLabel} />
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <H3>{c.error.subtitulo}</H3>
        <P>{c.error.intro}</P>
        <blockquote className="rounded-xl border-l-4 border-brand-pink bg-white p-5 text-lg italic leading-relaxed text-slate-800 shadow-sm">
          &ldquo;{c.error.cita}&rdquo;
        </blockquote>

        {!errorRevelado ? (
          <button
            type="button"
            onClick={revelarError}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {c.error.botonLabel}
            <ChevronDown className="w-4 h-4" />
          </button>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <P>
              {c.error.textoAntes}
              <Link href={c.error.textoEnlaceHref} className="text-brand-blue font-medium hover:underline">
                {c.error.textoEnlaceTexto}
              </Link>
              {c.error.textoDespues}
            </P>
          </div>
        )}
      </div>
    </Section>
  );
}
