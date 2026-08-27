'use client';

import {
  NIVELES_BRECHA,
  DIGCOMP_AREAS,
  DIGCOMP_SOURCE,
  DIGCOMPALC_QUOTE,
  INDICE_CIUDADANIA_DIGITAL,
} from '@/lib/alfabetizacion-digital-content';
import { SourceCite } from './source-cite';
import { Layers, Globe, MapPin, BarChart3, Bot } from 'lucide-react';

export default function TiposVariantesSection() {
  return (
    <section id="tipos-variantes" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-base uppercase tracking-wider font-semibold">
          <Layers className="w-4 h-4 text-blue-600" />
          <span>03 · Tipologías, Niveles y Marcos de Estandarización</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
          Estándares Internacionales y las 3 Capas de la Brecha Digital
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Para diseñar políticas públicas efectivas se requiere evaluar no solo quién tiene una pantalla en la mano, sino la capacidad real de transformar ese acceso en movilidad social, productividad e inclusión cívica.
        </p>
      </div>

      {/* SUB-SECCIÓN 1: Los 3 Niveles de la Brecha Digital */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2 font-display">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          1. Los Tres Niveles Progresivos de la Brecha Digital
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NIVELES_BRECHA.map((item, idx) => (
            <div
              key={item.nivel}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-blue-500/20">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-blue-800 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {idx === 0 ? 'Físico' : idx === 1 ? 'Operativo' : 'Sustantivo'}
                  </span>
                </div>
                <h4 className="text-base font-bold text-brand-navy font-display">{item.nivel}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUB-SECCIÓN 2: Marco Global DigComp 3.0 (Comisión Europea - JRC) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-blue-50/30 border border-blue-200/80 shadow-lg shadow-blue-500/5 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-700 font-mono text-sm uppercase tracking-wider font-semibold">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Estándar Global</span>
          </div>
          <h3 className="text-xl font-extrabold text-brand-navy font-display">
            Marco Europeo DigComp 3.0 (JRC 2025/2026)
          </h3>
        </div>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          Estructura de referencia internacional consolidada en <strong className="text-brand-navy font-semibold">5 áreas competenciales principales</strong>, integrando de forma transversal competencias en <strong className="text-blue-800 font-semibold">Inteligencia Artificial</strong> en 4 niveles de proficiencia (Básico, Intermedio, Avanzado y Altamente Avanzado).
        </p>

        <SourceCite source={DIGCOMP_SOURCE} />

        {/* Las 5 Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-1">
          {DIGCOMP_AREAS.map((area, idx) => (
            <div key={area} className="p-4 rounded-xl bg-white border border-blue-200/60 shadow-sm space-y-1.5">
              <span className="text-xs font-mono text-blue-600 font-bold block">ÁREA 0{idx + 1}</span>
              <p className="text-sm font-semibold text-slate-800 leading-snug">{area}</p>
            </div>
          ))}
        </div>

        {/* Integración Transversal de la IA */}
        <div className="p-4.5 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-start gap-3.5">
          <Bot className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-relaxed space-y-1">
            <p className="font-bold text-blue-950 font-display">
              Integración de IA en DigComp 3.0: Habilidades AI-E (Explícitas) y AI-I (Implícitas)
            </p>
            <p>
              Distingue entre la interacción directa mediante prompt engineering y comprensión algorítmica (<em className="text-brand-navy font-semibold">AI-E</em>) y el pensamiento crítico frente a contenidos sintéticos o decisiones automatizadas mediadas por IA (<em className="text-brand-navy font-semibold">AI-I</em>).
            </p>
          </div>
        </div>
      </div>

      {/* SUB-SECCIÓN 3: Marco Regional DigCompALC (CEPAL - María Florencia Ripani) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/30 border border-indigo-200/80 shadow-lg shadow-indigo-500/5 space-y-4">
        <div className="flex items-center gap-2 text-indigo-700 font-mono text-sm uppercase tracking-wider font-semibold">
          <MapPin className="w-4 h-4 text-indigo-600" />
          <span>Adaptación Regional para América Latina y el Caribe</span>
        </div>

        <h3 className="text-xl font-extrabold text-brand-navy font-display">
          Marco Regional DigCompALC (CEPAL 2026) — Dra. María Florencia Ripani
        </h3>

        <div className="p-5 rounded-2xl bg-white border border-indigo-200/60 shadow-sm space-y-4">
          <p className="text-lg md:text-xl italic text-brand-navy/90 leading-relaxed font-display pl-4 border-l-4 border-violet-300">
            &ldquo;{DIGCOMPALC_QUOTE.text}&rdquo;
          </p>
          <SourceCite source={DIGCOMPALC_QUOTE.source} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
          <div className="p-4.5 rounded-xl bg-white border border-slate-200/80 space-y-1 shadow-sm">
            <span className="font-bold text-blue-700 block text-base font-display">10 Niveles Granulares en 5 Categorías</span>
            <p>Especialmente graduados para capturar transiciones de habilidades en contextos socioeconómicos heterogéneos.</p>
          </div>
          <div className="p-4.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1 shadow-sm">
            <span className="font-bold text-amber-900 block text-base font-display">El Valor del Nivel Prebásico (Niveles 1 y 2)</span>
            <p>Visibiliza comunidades rurales, adultos mayores, pueblos indígenas y migrantes que los marcos eurocéntricos invisibilizan.</p>
          </div>
        </div>
      </div>

      {/* SUB-SECCIÓN 4: Datos e Indicadores de Competencias (Índice de Ciudadanía Digital) */}
      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-amber-700 font-mono text-sm uppercase tracking-wider font-semibold">
            <BarChart3 className="w-4 h-4 text-amber-600" />
            <span>Diagnóstico Empírico Regional</span>
          </div>
          <h3 className="text-xl font-extrabold text-brand-navy font-display">
            Índice de Ciudadanía Digital — Estado de Competencias
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800 font-display">Habilidades Básicas</span>
              <span className="text-2xl font-black text-blue-600 font-mono">54%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Poseen el conjunto completo. Un <strong className="text-amber-800 font-semibold">5% carece totalmente</strong> de ellas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800 font-display">Habilidades Intermedias</span>
              <span className="text-2xl font-black text-indigo-600 font-mono">19%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Únicamente este porcentaje domina software avanzado, videoconferencias y prompting inicial.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800 font-display">Habilidades Avanzadas</span>
              <span className="text-2xl font-black text-rose-600 font-mono">7%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Solo el 7% programa o administra bases de datos. El <strong className="text-rose-700 font-semibold">47.1% no posee ninguna</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SourceCite source={INDICE_CIUDADANIA_DIGITAL.source} />
          <SourceCite source={INDICE_CIUDADANIA_DIGITAL.sourceBcn} />
        </div>
      </div>
    </section>
  );
}
