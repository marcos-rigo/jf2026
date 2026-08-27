'use client';

import { PIB_QUOTE, MERCADO_LABORAL_QUOTE } from '@/lib/alfabetizacion-digital-content';
import { SourceCite } from './source-cite';
import { TrendingUp, DollarSign, Vote } from 'lucide-react';

export default function VentajasSection() {
  return (
    <section id="ventajas" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-base uppercase tracking-wider font-semibold">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>06 · Ventajas y Retorno Socioeconómico</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
          El &ldquo;So What?&rdquo; Layer: Impacto Macroeconómico y Protección Salarial
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          La alfabetización digital no es una política asistencialista ni un beneficio secundario: es un motor cuantificable de crecimiento económico y el escudo principal contra la obsolescencia laboral.
        </p>
      </div>

      {/* Grid de Métricas y Retorno */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Impacto Macroeconómico */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 border border-emerald-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-emerald-400 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-3xl font-black font-mono text-emerald-600">+3.19% PIB</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-navy font-display">Impacto en Crecimiento Macroeconómico</h3>
            <p className="text-sm text-emerald-800 font-mono font-semibold mt-0.5">Por cada +10% de aumento en penetración de banda ancha fija</p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed font-sans">
            Evidencia econométrica en las Américas confirma que la conectividad significativa y las habilidades digitales asociadas contrarrestan la baja productividad regional, dinamizando sectores de comercio, servicios y educación.
          </p>

          <p className="text-lg italic text-brand-navy/90 leading-relaxed font-display pl-4 border-l-4 border-violet-300">
            &ldquo;{PIB_QUOTE.text}&rdquo;
          </p>

          <SourceCite source={PIB_QUOTE.source} />
        </div>

        {/* Escudo Salarial ante IA y Mercado Laboral */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-blue-50/20 border border-blue-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-400 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-3xl font-black font-mono text-blue-600">80% Middle-Skill</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-navy font-display">Escudo Salarial y Resiliencia ante la IA</h3>
            <p className="text-sm text-blue-800 font-mono font-semibold mt-0.5">Índice multidimensional Di (Entropy-TOPSIS)</p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed font-sans">
            El <strong className="text-brand-navy font-semibold">80% de las vacantes en empleos de cualificación media</strong> exigen competencias digitales. Ante la automatización del <strong className="text-blue-700 font-semibold">44% de las tareas laborales</strong> en América Latina, el índice de alfabetización digital ($D_i$) funciona como la mayor protección salarial.
          </p>

          <p className="text-lg italic text-brand-navy/90 leading-relaxed font-display pl-4 border-l-4 border-amber-300">
            &ldquo;{MERCADO_LABORAL_QUOTE.text}&rdquo;
          </p>

          <SourceCite source={MERCADO_LABORAL_QUOTE.source} />
        </div>
      </div>

      {/* Autonomía Cívica y Soberanía Digital */}
      <div className="p-6 md:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
            <Vote className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-brand-navy font-display">Autonomía Cívica y Transparencia Pública</h3>
            <p className="text-sm text-slate-500 font-mono">Ejercicio de derechos en la era algorítmica</p>
          </div>
        </div>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          Permite acceder de forma autónoma a trámites de gobierno electrónico, auditar el presupuesto público en portales de datos abiertos, ejercer la libertad de expresión con responsabilidad ética y resguardar la propia privacidad frente a la vigilancia corporativa o estatal.
        </p>
      </div>
    </section>
  );
}
