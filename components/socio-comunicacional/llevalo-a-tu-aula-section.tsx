'use client';

import Link from 'next/link';
import { Section, P, Callout, TextArea, useContenido } from './ui';
import { useSocioComunicacionalStore } from '@/lib/socio-comunicacional-store';
import { FichaAula } from './ficha-aula';

export default function LlevaloATuAulaSection() {
  const c = useContenido().llevaloATuAula;
  const respuestaGancho = useSocioComunicacionalStore((s) => s.respuestaGancho);
  const reflexionAula = useSocioComunicacionalStore((s) => s.reflexionAula);
  const setReflexionAula = useSocioComunicacionalStore((s) => s.setReflexionAula);

  return (
    <Section id="llevalo-a-tu-aula" number="09" title={c.titulo}>
      <P>{c.parrafo1}</P>
      <Callout tone="pink">
        <p>{c.accionSemana}</p>
      </Callout>

      <P>{c.parrafo3}</P>
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{c.respuestaOriginalEtiqueta}</p>
        {respuestaGancho ? (
          <p className="leading-relaxed whitespace-pre-wrap text-slate-800">{respuestaGancho}</p>
        ) : (
          <p className="leading-relaxed italic text-slate-500">
            {c.sinRespuestaAntes}
            <Link href={c.sinRespuestaEnlaceHref} className="text-brand-blue font-medium hover:underline not-italic">
              {c.sinRespuestaEnlaceTexto}
            </Link>
            {c.sinRespuestaDespues}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <TextArea value={reflexionAula} onChange={setReflexionAula} placeholder={c.campoEtiqueta} rows={3} label={c.campoEtiqueta} />
      </div>

      {c.fichas.map((ficha) => (
        <FichaAula key={ficha.titulo} {...ficha} />
      ))}
    </Section>
  );
}
