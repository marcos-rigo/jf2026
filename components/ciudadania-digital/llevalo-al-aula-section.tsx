'use client';

import { Section, P, H3, Note, Callout, TextArea, TextInput, SelectField, useContenido } from './ui';
import { useCiudadaniaMadreStore } from '@/lib/ciudadania-digital-madre-store';
import { DIMENSIONES, POLIEDRO_ESTADOS } from '@/lib/ciudadania-digital-content';

export default function LlevaloAlAulaSection() {
  const c = useContenido().aula;
  const poliedroEstado = useCiudadaniaMadreStore((s) => s.poliedroEstado);
  const setPoliedroEstado = useCiudadaniaMadreStore((s) => s.setPoliedroEstado);
  const desafio = useCiudadaniaMadreStore((s) => s.desafioAula);
  const setDesafioAula = useCiudadaniaMadreStore((s) => s.setDesafioAula);
  const respuestaGancho = useCiudadaniaMadreStore((s) => s.respuestaGancho);
  const reflexionGancho = useCiudadaniaMadreStore((s) => s.reflexionGancho);
  const setReflexionGancho = useCiudadaniaMadreStore((s) => s.setReflexionGancho);

  return (
    <Section id="llevalo-al-aula" number="09" title={c.titulo}>
      <H3>{c.cambiaTitulo}</H3>
      {c.cambia.map((p) => (
        <P key={p}>{p}</P>
      ))}
      <Callout title="Una acción concreta para esta semana" tone="pink">
        <p className="text-slate-700">{c.accionSemana.replace(/^Una acción concreta para esta semana:\s*/, '')}</p>
      </Callout>

      {/* ── Mi aula en el Poliedro ── */}
      <H3>{c.miAulaTitulo}</H3>
      <P>{c.miAulaIntro}</P>
      <P>{c.miAulaInstruccion}</P>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">{c.miAulaColDimension}</th>
              <th className="px-4 py-3 font-semibold">{c.miAulaColEstado}</th>
              <th className="px-4 py-3 font-semibold">{c.miAulaColEjemplo}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {DIMENSIONES.map((d) => {
              const fila = poliedroEstado[d.id];
              return (
                <tr key={d.id} className="align-top">
                  <td className="px-4 py-3 font-semibold text-brand-navy min-w-[10rem]">{d.nombre}</td>
                  <td className="px-4 py-3 min-w-[9rem]">
                    <SelectField
                      value={fila.estado ?? ''}
                      onChange={(v) => setPoliedroEstado(d.id, 'estado', v === '' ? null : (v as 'activa' | 'latente' | 'ausente'))}
                      options={POLIEDRO_ESTADOS.map((e) => ({ value: e.value, label: e.label }))}
                      placeholder={c.miAulaEstadoPlaceholder}
                      label={`${d.nombre}: ${c.miAulaColEstado}`}
                    />
                  </td>
                  <td className="px-4 py-3 min-w-[14rem]">
                    <TextInput
                      value={fila.ejemplo}
                      onChange={(v) => setPoliedroEstado(d.id, 'ejemplo', v)}
                      placeholder={c.miAulaEjemploPlaceholder}
                      label={`${d.nombre}: ${c.miAulaColEjemplo}`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Note>{c.miAulaNota}</Note>

      {/* ── Guía de conversación ── */}
      <H3>{c.guiaTitulo}</H3>
      <P>{c.guiaIntro}</P>
      <ol className="space-y-2">
        {c.guia.map((g, i) => (
          <li key={g} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-4">
            <span className="font-display font-bold text-brand-blue text-xl leading-none">{i + 1}</span>
            <span className="leading-relaxed text-slate-700">{g}</span>
          </li>
        ))}
      </ol>

      {/* ── Desafío del aula ── */}
      <H3>{c.desafioTitulo}</H3>
      <P>{c.desafioIntro}</P>

      <div className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-8">
        <div className="space-y-2">
          <p className="font-display font-bold text-brand-navy">{c.paso1.titulo}</p>
          <P>{c.paso1.texto}</P>
          <TextArea
            value={desafio.situacionElegida}
            onChange={(v) => setDesafioAula('situacionElegida', v)}
            placeholder={c.paso1.placeholder}
            rows={3}
          />
        </div>

        <div className="space-y-3">
          <p className="font-display font-bold text-brand-navy">{c.paso2.titulo}</p>
          <P>{c.paso2.texto}</P>
          {c.paso2.campos.map((f, i) => (
            <div key={f.campo} className="space-y-1">
              <p className="text-sm font-semibold text-slate-700">
                <span className="text-brand-blue">{i + 1}.</span> {f.label}
              </p>
              <TextArea
                value={desafio[f.campo]}
                onChange={(v) => setDesafioAula(f.campo, v)}
                placeholder={f.placeholder}
                rows={3}
                label={f.label}
              />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="font-display font-bold text-brand-navy">{c.paso3.titulo}</p>
          <P>{c.paso3.texto}</P>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{c.paso3.respuestaOriginal}</p>
            <p className={`leading-relaxed whitespace-pre-wrap ${respuestaGancho ? 'text-slate-800' : 'italic text-slate-500'}`}>
              {respuestaGancho || c.paso3.sinRespuesta}
            </p>
          </div>
          <TextArea value={reflexionGancho ?? ''} onChange={setReflexionGancho} placeholder={c.paso3.placeholder} rows={3} />
        </div>

        <div className="space-y-2">
          <p className="font-display font-bold text-brand-navy">{c.paso4.titulo}</p>
          <P>{c.paso4.texto}</P>
          <TextArea
            value={desafio.accionSemana}
            onChange={(v) => setDesafioAula('accionSemana', v)}
            placeholder={c.paso4.placeholder}
            rows={2}
          />
        </div>
      </div>
      <P className="font-medium">{c.desafioCierre}</P>
    </Section>
  );
}
