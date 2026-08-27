'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap, Zap } from 'lucide-react';
import { SourceCite } from './source-cite';
import { AULA_SINTESIS, AULA_SINTESIS_SOURCE, FAQ_ITEMS, SECUENCIA_ARRANQUE } from '@/lib/alfabetizacion-mediatica-content';

export function AulaSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section id="aula" className="scroll-mt-20 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-brand-pink font-mono text-sm uppercase tracking-wider font-semibold">
          <GraduationCap className="w-4 h-4 text-brand-pink" />
          <span>08 · Qué significa esto para el aula</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          El Docente como Primer Filtro
        </h2>
      </div>

      {/* Síntesis */}
      <div className="bg-gradient-to-br from-brand-pink/10 via-white to-brand-blue/5 border border-brand-pink/30 rounded-[2rem] p-6 sm:p-8 space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{AULA_SINTESIS}</p>
        <SourceCite source={AULA_SINTESIS_SOURCE} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* FAQ */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">Base de Conocimiento</h3>
          <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">Consultas frecuentes y planes de acción.</p>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.id}
                className="border border-slate-200/60 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 font-bold text-slate-800 hover:bg-slate-50/80 flex justify-between items-center transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 ml-3 sm:ml-4"
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4 text-slate-600 bg-slate-50/50 border-t border-slate-100 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Secuencia de Arranque */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-900/30 relative overflow-hidden group h-max">
          <div className="absolute right-0 top-0 w-28 sm:w-32 h-28 sm:h-32 bg-brand-blue rounded-full blur-[50px] sm:blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="absolute right-8 sm:right-12 bottom-0 w-20 sm:w-28 h-20 sm:h-28 bg-brand-pink rounded-full blur-[40px] sm:blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <h4 className="font-display font-extrabold text-lg sm:text-xl mb-4 flex items-center gap-2 relative z-10">
            <Zap className="w-5 h-5 text-brand-blue" /> Secuencia de Arranque
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-slate-300 relative z-10 text-sm sm:text-base">
            {SECUENCIA_ARRANQUE.map((paso) => (
              <li key={paso.n} className="flex gap-3 items-start">
                <span className="bg-white/10 px-2 py-1 rounded-md text-xs font-mono mt-0.5 shrink-0">{paso.n}</span>
                <span>
                  <strong className="text-white">{paso.titulo}:</strong> {paso.texto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
