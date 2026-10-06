'use client';

import { ChevronDown } from 'lucide-react';
import { P, Enfasis } from './ui';
import { useVictimologiaDigitalStore } from '@/lib/victimologia-digital-store';

// Bloque de error doble de "Practicá vos": dos citas destacadas etiquetadas "Análisis A"
// y "Análisis B", con un único botón "Ver los errores" que revela el texto de los dos
// errores al mismo tiempo, con una transición breve de expand. Adaptado de
// components/rutinas-guardania/error-doble.tsx.
export interface ErrorDobleProps {
  citaA: string;
  citaB: string;
  botonLabel: string;
  errorIntro: string;
  errorA: string;
  errorB: string;
  errorCierre: string;
}

export function ErrorDoble({ citaA, citaB, botonLabel, errorIntro, errorA, errorB, errorCierre }: ErrorDobleProps) {
  const errorRevelado = useVictimologiaDigitalStore((s) => s.errorRevelado);
  const revelarError = useVictimologiaDigitalStore((s) => s.revelarError);

  return (
    <div className="space-y-4">
      <blockquote className="rounded-xl border-l-4 border-brand-pink bg-white p-5 italic leading-relaxed text-slate-800 shadow-sm">
        <p className="text-xs not-italic font-semibold uppercase tracking-wide text-brand-pink mb-2">Análisis A</p>
        &ldquo;<Enfasis>{citaA}</Enfasis>&rdquo;
      </blockquote>
      <blockquote className="rounded-xl border-l-4 border-brand-pink bg-white p-5 italic leading-relaxed text-slate-800 shadow-sm">
        <p className="text-xs not-italic font-semibold uppercase tracking-wide text-brand-pink mb-2">Análisis B</p>
        &ldquo;<Enfasis>{citaB}</Enfasis>&rdquo;
      </blockquote>

      {!errorRevelado ? (
        <button
          type="button"
          onClick={revelarError}
          aria-expanded={errorRevelado}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {botonLabel}
          <ChevronDown className="w-4 h-4" />
        </button>
      ) : (
        <div className="space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <p className="font-display font-bold text-brand-navy">{errorIntro}</p>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <P>{errorA}</P>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <P>{errorB}</P>
          </div>
          <P>{errorCierre}</P>
        </div>
      )}
    </div>
  );
}
