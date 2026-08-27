'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { EJEMPLOS_FASES } from '@/lib/alfabetizacion-mediatica-content';

export function EjemplosSection() {
  return (
    <section id="ejemplos-concretos" className="scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4 text-brand-blue" />
          <span>05 · Ejemplos Concretos</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Las 3 Fases del Entrenamiento
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Cada fase incluye un caso de estudio real y un ejercicio que podés llevar directo a una clase.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {EJEMPLOS_FASES.map((fase) => (
          <motion.div
            key={fase.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/30 rounded-[2.5rem] p-5 sm:p-8 md:p-12"
          >
            <span className={`inline-block px-3 py-1 ${fase.badgeClass} font-bold text-xs rounded-lg mb-3 sm:mb-4`}>
              {fase.badge}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-3">
              {fase.titulo}
            </h3>
            <p className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">{fase.intro}</p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h4 className="font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className={fase.accentClass}>■</span> Metodología
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{fase.metodologia}</p>
                </div>
                <div className="bg-slate-50/80 border border-slate-200/60 p-4 sm:p-5 rounded-2xl hover:border-brand-blue/30 transition-colors">
                  <h4 className="font-display font-bold text-slate-900 mb-2 text-xs sm:text-sm uppercase tracking-wide">
                    Caso de Estudio
                  </h4>
                  <p className="text-sm text-slate-600 italic leading-relaxed">{fase.caso}</p>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${fase.gradClass} p-6 sm:p-8 rounded-3xl text-white shadow-xl ${fase.shadowClass} flex flex-col justify-center relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                  {fase.emoji}
                </span>
                <h4 className="font-display font-extrabold text-lg sm:text-xl mb-3 sm:mb-4 relative z-10">{fase.labTitulo}</h4>
                <p className={`${fase.labTextClass} mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base`}>{fase.labTexto}</p>
                <button
                  className={`bg-white ${fase.labBotonTextClass} font-bold py-3 px-6 rounded-xl ${fase.labBotonHoverClass} transition-all duration-300 w-max shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                >
                  {fase.labBoton}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
