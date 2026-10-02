'use client';

import { ChevronDown } from 'lucide-react';
import { P, Cita } from './ui';
import { useSocioComunicacionalStore } from '@/lib/socio-comunicacional-store';

// Bloque de error doble de "Practicá vos": dos citas destacadas ("Análisis A" /
// "Análisis B"), cada una con su etiqueta en negrita incrustada en el propio
// texto de la cita (ej. "**Análisis A:** ..."), y un único botón "Ver los
// errores" que revela el texto de los dos errores al mismo tiempo, con la
// misma transición. Adaptado de components/cognitivo-informacional/error-doble.tsx.
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
  const errorRevelado = useSocioComunicacionalStore((s) => s.errorRevelado);
  const revelarError = useSocioComunicacionalStore((s) => s.revelarError);

  return (
    <div className="space-y-4">
      <Cita tone="pink">{citaA}</Cita>
      <Cita tone="pink">{citaB}</Cita>

      {!errorRevelado ? (
        <button
          type="button"
          onClick={revelarError}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {botonLabel}
          <ChevronDown className="w-4 h-4" />
        </button>
      ) : (
        <div className="space-y-3">
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
