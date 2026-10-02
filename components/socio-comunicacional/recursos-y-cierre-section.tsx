'use client';

import Link from 'next/link';
import { Section, P, H3, Note, TextArea, useContenido } from './ui';
import { useSocioComunicacionalStore } from '@/lib/socio-comunicacional-store';

export default function RecursosYCierreSection() {
  const c = useContenido().recursosYCierre;
  const respuestaGancho = useSocioComunicacionalStore((s) => s.respuestaGancho);
  const explicacionFinal = useSocioComunicacionalStore((s) => s.explicacionFinal);
  const setExplicacionFinal = useSocioComunicacionalStore((s) => s.setExplicacionFinal);

  return (
    <Section id="recursos-y-cierre" number="10" title={c.titulo}>
      {/* ── ¿Qué cambió? ── */}
      <H3>{c.cambioTitulo}</H3>
      <P>{c.cambioInstruccion}</P>
      <blockquote className="rounded-xl border-l-4 border-brand-blue bg-slate-50 p-4">
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
      </blockquote>

      <div className="space-y-2">
        <p className="font-medium text-slate-800">{c.pregunta}</p>
        <TextArea value={explicacionFinal} onChange={setExplicacionFinal} placeholder={c.placeholder} rows={3} label={c.pregunta} />
      </div>
      <Note>{c.nota}</Note>

      {/* ── Para llevarte ── */}
      <H3>{c.llevarteTitulo}</H3>
      <article className="rounded-3xl bg-brand-navy text-white p-6 md:p-8 shadow-lg space-y-4">
        <h4 className="font-display text-2xl font-bold">{c.tarjeta.titulo}</h4>
        {c.tarjeta.parrafos.map((p) => (
          <p key={p} className="leading-relaxed text-white/90">
            {p}
          </p>
        ))}
      </article>

      {/* ── Seguí recorriendo el Poliedro ── */}
      <H3>{c.seguiTitulo}</H3>
      <p className="leading-relaxed text-slate-700">
        {c.seguiAntes}
        <Link href={c.seguiEnlace1Href} className="text-brand-blue font-semibold hover:underline">
          {c.seguiEnlace1Texto}
        </Link>
        {c.seguiEntre}
        <Link href={c.seguiEnlace2Href} className="text-brand-blue font-semibold hover:underline">
          {c.seguiEnlace2Texto}
        </Link>
        {c.seguiDespues}
      </p>

      {/* ── Cierre ── */}
      <div className="pt-6 space-y-5 text-center">
        <H3>{c.cierreTitulo}</H3>
        <P className="text-left">{c.cierreParrafo}</P>
      </div>
    </Section>
  );
}
