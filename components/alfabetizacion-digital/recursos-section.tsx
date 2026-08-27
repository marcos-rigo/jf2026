'use client';

import { FUENTES_COMPLETAS, CASOS_EXITO, CASOS_EXITO_SOURCE } from '@/lib/alfabetizacion-digital-content';
import { SourceCite } from './source-cite';
import { BookMarked, CheckSquare, Globe, FileText } from 'lucide-react';

// FUENTES_COMPLETAS solo incluye documentos con link oficial verificable —
// las referencias teóricas sin edición digital (Gilster, Eshet-Alkalai, etc.)
// se citan en el cuerpo de cada sección, no en este repositorio de enlaces.

export const CHECKLIST_ITEMS = [
  { id: 'check-wifi', text: 'Sé configurar redes WiFi seguras y administrar permisos de almacenamiento y privacidad en mis dispositivos.' },
  { id: 'check-eval', text: 'Aplico criterios de evaluación informacional para verificar fuentes, fecha e intención de los contenidos web.' },
  { id: 'check-prompt', text: 'Diseño prompts estructurados con rol, contexto e instrucciones precisas para interactuar con herramientas de IA.' },
  { id: 'check-egob', text: 'Uso de forma autónoma plataformas de gobierno electrónico, firmas digitales y servicios públicos en línea.' },
  { id: 'check-etiqueta', text: 'Practico normas de netiqueta, respeto la propiedad intelectual y protejo mi huella socioemocional en comunidades virtuales.' },
];

interface RecursosSectionProps {
  checkedItems?: Set<string>;
  onCheckboxChange?: (id: string, checked: boolean) => void;
}

export default function RecursosSection({ checkedItems = new Set(), onCheckboxChange }: RecursosSectionProps) {
  return (
    <section id="recursos" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-base uppercase tracking-wider font-semibold">
          <BookMarked className="w-4 h-4 text-blue-600" />
          <span>09 · Caja de Herramientas, Casos de Éxito y Fuentes Oficiales</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
          Repositorio Oficial de Referencias y Autoevaluación
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Accedé a los documentos normativos de la CEPAL y la Comisión Europea, analizá las experiencias regionales destacadas y evaluá tu nivel de competencia.
        </p>
      </div>

      {/* SUB-SECCIÓN 1: Casos de Éxito de Política Pública */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2 font-display">
          <Globe className="w-5 h-5 text-blue-600" />
          Políticas Públicas Destacadas en América Latina y el Mundo
        </h3>
        <SourceCite source={CASOS_EXITO_SOURCE} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASOS_EXITO.map((caso) => (
            <div key={caso.pais + caso.titulo} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-2.5 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-blue-900 font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  {caso.pais}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">eLAC2026 Benchmark</span>
              </div>
              <h4 className="text-base font-bold text-brand-navy font-display">{caso.titulo}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">{caso.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SUB-SECCIÓN 2: Fuentes Oficiales (Direct Links) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-blue-50/20 border border-blue-200/80 shadow-md shadow-slate-100 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-700 font-mono text-sm uppercase tracking-wider font-semibold">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Documentos de Referencia</span>
          </div>
          <h3 className="text-xl font-extrabold text-brand-navy font-display">
            Fuentes Oficiales y Publicaciones Relevantes
          </h3>
        </div>

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

      {/* SUB-SECCIÓN 3: Checklist de Autoevaluación Práctica */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-navy font-display">
              Checklist de Autoevaluación en Competencia Digital
            </h3>
            <p className="text-sm text-slate-500 font-mono font-semibold">
              Marcá los ítems a medida que consolides estas capacidades en tu práctica cotidiana.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = checkedItems.has(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3.5 p-4.5 rounded-2xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'bg-blue-50/80 border-blue-300 text-brand-navy shadow-sm'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => onCheckboxChange?.(item.id, e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 bg-slate-50 w-4 h-4"
                />
                <span className="text-sm md:text-base font-sans leading-relaxed font-medium">{item.text}</span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}
