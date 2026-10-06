'use client';

import Link from 'next/link';
import { Section, P, H3, Note, TextArea, Enfasis, useContenido } from './ui';
import { useRutinasGuardaniaStore } from '@/lib/rutinas-guardania-store';

export default function RecursosYCierreSection() {
  const c = useContenido().recursosYCierre;
  const respuestaGancho = useRutinasGuardaniaStore((s) => s.respuestaGancho);
  const explicacionFinal = useRutinasGuardaniaStore((s) => s.explicacionFinal);
  const setExplicacionFinal = useRutinasGuardaniaStore((s) => s.setExplicacionFinal);

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
            <Enfasis>{p}</Enfasis>
          </p>
        ))}
      </article>

      {/* ── Seguí explorando la plataforma ── */}
      <H3>{c.seguiTitulo}</H3>
      <P>
        {c.seguiAntes}
        <Link href={c.seguiEnlaceHref} className="text-brand-blue font-semibold hover:underline">
          {c.seguiEnlaceTexto}
        </Link>
        {c.seguiDespues}
      </P>

      {/* ── Referencias ── */}
      <H3>{c.referenciasTitulo}</H3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {c.referenciasIntro} {c.referenciasLista.join(' · ')}
      </p>

      {/* ── Cierre ── */}
      <div className="pt-6 space-y-5 text-center">
        <H3>{c.cierreTitulo}</H3>
        <P className="text-left">{c.cierreParrafo}</P>
      </div>
    </Section>
  );
}
