'use client';

import { GILSTER_QUOTE, SPIRES_BARTLETT_QUOTE, MARTIN_GRUDZIECKI_QUOTE } from '@/lib/alfabetizacion-digital-content';
import { History, Compass, Layers, GitMerge } from 'lucide-react';

export default function HistoriaSection() {
  return (
    <section id="historia" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-700 font-mono text-base uppercase tracking-wider font-semibold">
          <History className="w-4 h-4 text-blue-600" />
          <span>01 · Genealogía Conceptual y Marcos Teóricos</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
          Evolución del Concepto: De la Destreza Operativa a la Transformación Crítica
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          La alfabetización digital ha dejado de ser vista como una mera capacitación técnica en software para consolidarse como una matriz cognitiva y cultural indispensable para la resiliencia socioeconómica.
        </p>
      </div>

      {/* Tarjeta Pionera: Paul Gilster (1997) */}
      <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-violet-300 transition-all space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-md shadow-blue-500/20">
              1997
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy font-display">Paul Gilster — El Origen del Término</h3>
              <p className="text-sm text-blue-700 font-mono font-semibold">Digital Literacy (Wiley)</p>
            </div>
          </div>
        </div>
        
        <p className="text-base text-slate-700 leading-relaxed font-sans">
          Gilster formuló la primera definición académica amplia: no la habilidad de presionar botones, sino la <strong className="text-brand-navy">capacidad de comprender y usar información proveniente de múltiples fuentes cuando se presenta a través de computadoras</strong>. Destacó cuatro competencias clave: evaluación crítica del contenido, navegación no lineal, búsqueda estructurada e integración informacional.
        </p>

        <div className="pl-5 border-l-4 border-violet-300">
          <p className="text-lg md:text-xl italic text-brand-navy/90 leading-relaxed font-display">&ldquo;{GILSTER_QUOTE.text}&rdquo;</p>
        </div>
      </div>

      {/* Grid de Modelos Contemporáneos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Yoram Eshet-Alkalai (2012) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-4 hover:border-blue-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700">
              <Compass className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-brand-navy font-display">Yoram Eshet-Alkalai (2012)</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diseño cognitivo de 5 alfabetizaciones interconectadas: <strong className="text-brand-navy">socioemocional</strong> (ética y comportamiento en red), <strong className="text-brand-navy">pensamiento ramificado</strong> (navegación hipertextual), <strong className="text-brand-navy">pensamiento en tiempo real</strong> (procesamiento ante estímulos masivos), <strong className="text-brand-navy">informacional</strong> (filtrado de sesgos) y <strong className="text-brand-navy">fotovisual/reproducción</strong> (remezcla multimodal).
            </p>
          </div>
        </div>

        {/* Ng (2012) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-4 hover:border-blue-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700">
              <Layers className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-brand-navy font-display">Ng, W. (2012) — Modelo Holístico</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              La alfabetización digital requiere la convergencia equilibrada de tres dimensiones principales: la <strong className="text-brand-navy">dimensión técnica</strong> (destreza instrumental), la <strong className="text-brand-navy">dimensión cognitiva</strong> (evaluación informacional y pensamiento crítico) y la <strong className="text-brand-navy">dimensión socioemocional</strong> (comunicación ética y resguardo de la privacidad).
            </p>
          </div>
        </div>

        {/* Spires & Bartlett (2012) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-4 hover:border-violet-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-indigo-700">
              <GitMerge className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-bold text-brand-navy font-display">Spires & Bartlett (2012) — Proceso Secuencial</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modelan la alfabetización como un proceso operativo en tres momentos continuos: <strong className="text-brand-navy">acceso efectivo</strong> a la información digital, <strong className="text-brand-navy">producción estructurada</strong> de nuevo conocimiento y contenido, e <strong className="text-brand-navy">intercambio responsable</strong> en comunidades hiperconectadas.
            </p>
            <p className="text-lg italic text-brand-navy/90 leading-relaxed font-display pl-4 border-l-4 border-violet-300">&ldquo;{SPIRES_BARTLETT_QUOTE.text}&rdquo;</p>
          </div>
        </div>

        {/* Martin & Grudziecki (2013) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 space-y-4 hover:border-violet-300 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700">
              <Layers className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-brand-navy font-display">Martin & Grudziecki (2013) — Los 3 Niveles</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Propone una pirámide de desarrollo: <strong className="text-brand-navy">1. Alfabetización instrumental</strong> (destrezas operativas básicas), <strong className="text-brand-navy">2. Uso digital aplicado</strong> (integración contextual a tareas profesionales y académicas), y <strong className="text-brand-navy">3. Transformación digital crítica</strong> (capacidad de innovar y cuestionar estructuras).
            </p>
            <p className="text-lg italic text-brand-navy/90 leading-relaxed font-display pl-4 border-l-4 border-violet-300">&ldquo;{MARTIN_GRUDZIECKI_QUOTE.text}&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
