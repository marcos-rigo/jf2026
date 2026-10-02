'use client';

import { useId, useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { Enfasis } from './ui';

type Bloque = { tipo: 'parrafo'; texto: string } | { tipo: 'lista'; items: string[] };

export interface FichaAulaProps {
  titulo: string;
  objetivo: string;
  desarrollo: Bloque[];
  preguntaDetonadora: string;
  // A diferencia de components/cognitivo-informacional/ficha-aula.tsx, cada actividad
  // acá tiene sus propios bloques párrafo/lista (algunas fichas de esta dimensión
  // incluyen un "Paso a paso:" dentro de una actividad).
  actividades: { titulo: string; bloques: Bloque[] }[];
  frase: string;
  glosario: string[];
  referencias: string[];
}

function Bloques({ bloques }: { bloques: Bloque[] }) {
  return (
    <>
      {bloques.map((bloque, i) =>
        bloque.tipo === 'parrafo' ? (
          <p key={i} className="leading-relaxed text-slate-700">
            <Enfasis>{bloque.texto}</Enfasis>
          </p>
        ) : (
          <ul key={i} className="list-disc pl-5 space-y-1.5 text-slate-700">
            {bloque.items.map((item) => (
              <li key={item}>
                <Enfasis>{item}</Enfasis>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}

// Tarjeta desplegable para las fichas didácticas de aula. Colapsada por defecto,
// mostrando solo el título y la etiqueta "Ficha para llevar al aula". Las referencias
// van como texto plano (sin SourceCite ni links, ver CLAUDE.md para esta página).
export function FichaAula({
  titulo,
  objetivo,
  desarrollo,
  preguntaDetonadora,
  actividades,
  frase,
  glosario,
  referencias,
}: FichaAulaProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue">
            <BookOpen className="w-5 h-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-wide text-brand-pink">
              Ficha para llevar al aula
            </span>
            <span className="block font-display font-bold text-brand-navy truncate">{titulo}</span>
          </span>
        </span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div id={panelId} className="px-5 pb-6 pt-1 space-y-5 border-t border-slate-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Objetivo</p>
            <p className="leading-relaxed text-slate-700">{objetivo}</p>
          </div>

          <div className="space-y-3">
            <Bloques bloques={desarrollo} />
          </div>

          {preguntaDetonadora && (
            <div className="rounded-xl border-l-4 border-brand-blue bg-brand-light-blue/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-1">
                Pregunta detonadora
              </p>
              <p className="leading-relaxed text-slate-800 font-medium">{preguntaDetonadora}</p>
            </div>
          )}

          {actividades.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Actividades</p>
              <ul className="space-y-3">
                {actividades.map((a) => (
                  <li key={a.titulo} className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                    <p className="font-display font-semibold text-brand-navy">{a.titulo}</p>
                    <div className="space-y-2">
                      <Bloques bloques={a.bloques} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {frase && (
            <p className="font-display text-lg font-semibold text-brand-navy border-t border-slate-100 pt-4">
              {frase}
            </p>
          )}

          {glosario.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Glosario</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                {glosario.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          )}

          {referencias.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Referencias</p>
              <ul className="space-y-1 text-sm text-slate-500">
                {referencias.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
