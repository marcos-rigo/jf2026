'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { Section, P, Note, useContenido } from './ui';
import { useCiberdelitosStore } from '@/lib/ciberdelitos-store';

export default function PoneAPruebaSection() {
  const c = useContenido().poneAPrueba;
  const respuestas = useCiberdelitosStore((s) => s.respuestasQuiz);
  const setRespuestaQuiz = useCiberdelitosStore((s) => s.setRespuestaQuiz);

  return (
    <Section id="pone-a-prueba" number="08" title={c.titulo}>
      <P>{c.intro}</P>

      <div className="space-y-6">
        {c.preguntas.map((q, qi) => {
          const elegida = respuestas[qi] ?? null;
          const opcionElegida = q.opciones.find((o) => o.id === elegida);
          const acierto = elegida === q.correcta;
          const feedback = opcionElegida ? (acierto ? c.correcto : q.feedbacks[opcionElegida.id]) : null;
          return (
            <fieldset key={q.enunciado} className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-4">
              <legend className="sr-only">Pregunta {qi + 1}</legend>
              <div>
                <p className="text-xs font-mono font-semibold text-brand-blue">
                  PREGUNTA {qi + 1} · {q.objetivo}
                </p>
                <p className="mt-1 font-medium text-slate-900 leading-relaxed">{q.enunciado}</p>
              </div>

              <div className="space-y-2">
                {q.opciones.map((o) => (
                  <label
                    key={o.id}
                    className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm leading-relaxed transition ${
                      elegida === o.id
                        ? 'border-brand-blue bg-brand-blue/5 text-slate-900'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`quiz-${qi}`}
                      value={o.id}
                      checked={elegida === o.id}
                      onChange={() => setRespuestaQuiz(qi, o.id)}
                      className="mt-1 accent-[#4272BB]"
                    />
                    <span>
                      <strong className="uppercase">{o.id})</strong> {o.texto}
                    </span>
                  </label>
                ))}
              </div>

              {feedback && (
                <div
                  role="status"
                  className={`flex gap-3 rounded-xl p-4 text-sm leading-relaxed ${
                    acierto ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'
                  }`}
                >
                  {acierto ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                  <p>{feedback}</p>
                </div>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className="space-y-3">
        <p className="font-display font-bold text-brand-navy">{c.rubricaTitulo}</p>
        <P>{c.rubricaIntro}</P>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">{c.rubricaColNivel}</th>
                <th className="px-4 py-3 font-semibold">{c.rubricaColMuestra}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {c.rubrica.map((r) => (
                <tr key={r.nivel} className="align-top">
                  <td className="px-4 py-3 font-semibold text-brand-navy whitespace-nowrap">{r.nivel}</td>
                  <td className="px-4 py-3 text-slate-700">{r.muestra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>{c.rubricaCierre}</Note>
      </div>
    </Section>
  );
}
