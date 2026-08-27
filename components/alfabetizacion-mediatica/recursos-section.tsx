'use client';

import { BookMarked, CheckSquare } from 'lucide-react';
import { SourceCite } from './source-cite';
import { MediaViewer } from './media-viewer';
import { CHECKLIST_ITEMS, FUENTES_COMPLETAS } from '@/lib/alfabetizacion-mediatica-content';

interface RecursosSectionProps {
  checkedItems: Set<string>;
  onCheckboxChange: (id: string) => void;
}

export function RecursosSection({ checkedItems, onCheckboxChange }: RecursosSectionProps) {
  const checkedCount = checkedItems.size;

  return (
    <section id="recursos" className="scroll-mt-20 space-y-8 sm:space-y-10">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
          <BookMarked className="w-4 h-4 text-brand-blue" />
          <span>09 · Centro de Recursos</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Checklist, Infografía y Material para el Aula
        </h2>
      </div>

      {/* Checklist */}
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center text-white shadow-md shadow-brand-blue/20 shrink-0">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Analizador de Viabilidad</h3>
            <p className="text-slate-500 text-sm sm:text-base">
              Ejecutá esta matriz de validación antes de confirmar la distribución de cualquier dato — funciona igual
              de bien antes de compartir algo en el grupo del curso o de las familias.
            </p>
          </div>
        </div>

        <div className="space-y-2.5 sm:space-y-3 bg-slate-50/80 p-4 sm:p-6 rounded-2xl border border-slate-100/60">
          {CHECKLIST_ITEMS.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 hover:bg-white rounded-xl cursor-pointer border border-transparent hover:border-slate-200/60 transition-all hover:shadow-md group"
            >
              <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  checked={checkedItems.has(item.id)}
                  onChange={() => onCheckboxChange(item.id)}
                  className="appearance-none w-5 h-5 border-2 border-slate-300 rounded-md cursor-pointer transition-all duration-200 bg-white checked:bg-brand-blue checked:border-transparent group-hover:border-brand-blue/50"
                />
                {checkedItems.has(item.id) && (
                  <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                {item.text}
              </span>
            </label>
          ))}
        </div>

        <div className="flex items-center justify-between bg-slate-900 rounded-2xl px-5 py-3.5 text-white">
          <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Progreso</span>
          <span className="text-lg font-black font-mono text-white">{checkedCount}<span className="text-slate-500 text-sm">/5</span></span>
        </div>
      </div>

      {/* Infografía + carrusel */}
      <MediaViewer />

      {/* Fuentes citadas */}
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/30 rounded-[2rem] p-6 sm:p-8 space-y-4">
        <h3 className="font-display text-xl font-bold text-slate-900">Fuentes Citadas</h3>
        <div className="space-y-3">
          {FUENTES_COMPLETAS.map((fuente) => (
            <div key={fuente.n} className="flex items-start gap-3">
              <span className="shrink-0 mt-3.5 w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-mono font-bold flex items-center justify-center">
                {fuente.n}
              </span>
              <div className="flex-1 min-w-0">
                <SourceCite source={{ author: fuente.label, note: fuente.note, url: fuente.url }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
