'use client';

import { motion } from 'framer-motion';
import { SourceCite } from './source-cite';
import { NATIVOS_DIGITALES_QUOTE, BARCO_DE_TESEO } from '@/lib/ciudadania-digital-content';

export default function HistoriaSection() {
  return (
    <motion.section
      id="historia"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10">
        <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          01 — Origen
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-3 font-display">Historia / Origen</h2>
        <p className="text-slate-400 text-lg font-sans">De dónde viene la idea de "nativos digitales" y por qué la identidad digital es más compleja de lo que parece.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#8B5CF6] p-8 rounded-3xl flex flex-col gap-5">
          <h3 className="font-bold text-xl text-white font-display">Nativos digitales</h3>
          <p className="text-slate-300 leading-relaxed font-sans">
            El concepto que describe a las generaciones que crecieron con la tecnología como parte de su entorno natural.
          </p>
          <blockquote className="text-slate-300 text-sm leading-relaxed font-sans italic border-l-2 border-slate-700 pl-4">
            "{NATIVOS_DIGITALES_QUOTE.text}"
          </blockquote>
          <SourceCite source={NATIVOS_DIGITALES_QUOTE.source} />
        </div>

        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 border-t-[#F59E0B] p-8 rounded-3xl flex flex-col gap-5">
          <h3 className="font-bold text-xl text-white font-display">La paradoja del Barco de Teseo</h3>
          <p className="text-slate-300 leading-relaxed font-sans">
            Metáfora filosófica clásica: si un barco reemplaza todas sus piezas de a poco, ¿sigue siendo el mismo barco?
            José la usa para abrir la pregunta de identidad digital: una persona que va incorporando hábitos, cuentas y
            datos nuevos constantemente, ¿en qué momento deja de ser "la misma" identidad que empezó?
          </p>
          <p className="text-sm text-slate-500 font-sans">
            Buen disparador de debate en el aula, no una respuesta cerrada.
          </p>
          <SourceCite source={BARCO_DE_TESEO} />
        </div>
      </div>
    </motion.section>
  );
}
