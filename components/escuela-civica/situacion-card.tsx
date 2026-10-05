'use client';

import { ChevronDown } from 'lucide-react';
import { P, Note } from './ui';
import { useEscuelaCivicaStore, type EleccionSituacion, type SituacionClave } from '@/lib/escuela-civica-store';

// Bloque de situación de "Practicá vos": selector de 3 opciones excluyentes. El botón
// "Ver análisis" solo se habilita con una opción elegida, y el análisis se muestra igual
// sin importar cuál se eligió — mismo mecanismo que components/ia-criterio/situacion-card.tsx.
//
// Placeholder: las 3 opciones todavía no tienen las etiquetas reales de esta temática
// (no hay contenido cargado todavía) — se van a renombrar cuando se cargue el contenido.
// Este componente no está conectado a ninguna sección todavía.
const OPCIONES: { value: NonNullable<EleccionSituacion>; label: string }[] = [
  { value: 'a', label: 'Opción A' },
  { value: 'b', label: 'Opción B' },
  { value: 'c', label: 'Opción C' },
];

export interface SituacionCardProps {
  clave: SituacionClave;
  enunciado: string;
  analisis: string;
  nota: string;
  revelarLabel: string;
}

export function SituacionCard({ clave, enunciado, analisis, nota, revelarLabel }: SituacionCardProps) {
  const entrada = useEscuelaCivicaStore((s) => s.situaciones[clave]);
  const setEleccionSituacion = useEscuelaCivicaStore((s) => s.setEleccionSituacion);
  const revelarSituacion = useEscuelaCivicaStore((s) => s.revelarSituacion);

  return (
    <article className="rounded-2xl bg-white border border-slate-200 p-5 md:p-6 shadow-sm space-y-4">
      <p className="leading-relaxed text-slate-800">{enunciado}</p>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-slate-600 mb-1">Elegí una opción</legend>
        <div className="flex flex-wrap gap-2">
          {OPCIONES.map((o) => (
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
                name={`situacion-${clave}`}
                value={o.value}
                checked={entrada.eleccion === o.value}
                onChange={() => setEleccionSituacion(clave, o.value)}
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
          onClick={() => revelarSituacion(clave)}
          disabled={!entrada.eleccion}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {revelarLabel}
          <ChevronDown className="w-4 h-4" />
        </button>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <P>{analisis}</P>
          <Note>{nota}</Note>
        </div>
      )}
    </article>
  );
}
