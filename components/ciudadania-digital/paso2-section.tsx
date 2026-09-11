'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PASO2_TEXTO } from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

// El párrafo objetivo tenía la palabra "Netiqueta" en cursiva (<em>) en el
// texto original — se preserva buscándola en el string resuelto en vez de
// hardcodear el <em> por audiencia (el término aparece igual en ambas).
function withItalicTerm(text: string, term: string) {
  return text.split(term).flatMap((part, i, arr) =>
    i < arr.length - 1 ? [part, <em key={i}>{term}</em>] : [part]
  );
}

export default function Paso2Section() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const t = (campo: keyof typeof PASO2_TEXTO) => resolveTexto(PASO2_TEXTO[campo], audienciaActual, 'docentes');

  return (
    <motion.section
      id="netiqueta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10">
        <span className="bg-[#6D28D9]/10 text-[#6D28D9] border border-[#6D28D9]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 02
        </span>
        <h2 className="text-3xl font-bold text-brand-navy mt-5 mb-2 font-display">
          {t('titulo')}
        </h2>
        <p className="text-slate-600 text-lg font-sans">
          {t('subtitulo')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Objetivo e Instrucciones */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl md:col-span-2 relative overflow-hidden shadow-sm">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6D28D9] opacity-5 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 text-[#6D28D9] relative z-10">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl text-brand-navy font-display">Objetivo</h3>
          </div>
          <p className="text-slate-700 mb-8 leading-relaxed font-sans">
            {withItalicTerm(t('objetivo'), 'Netiqueta')}
          </p>

          <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2 uppercase tracking-wider text-sm font-display">
            <span className="text-[#6D28D9]">■</span> Protocolos de comunicación
          </h4>
          <ul className="space-y-4 text-slate-700 font-sans">
            <li className="flex items-start gap-3">
              <span className="text-[#6D28D9] font-bold">1.</span>
              <span>{t('protocolo1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#6D28D9] font-bold">2.</span>
              <span>{t('protocolo2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#6D28D9] font-bold">3.</span>
              <span>{t('protocolo3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#6D28D9] font-bold">4.</span>
              <span>{t('protocolo4')}</span>
            </li>
          </ul>
        </div>

        {/* Ejemplo visual */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-slate-200 border-t-4 border-t-[#6D28D9] p-6 rounded-3xl h-full shadow-sm">
            <h4 className="text-[#6D28D9] font-bold text-lg mb-3 font-display">{t('ejemploTitulo')}</h4>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-sm">
              <p className="text-slate-700 italic font-sans">
                "Excelente punto. No había considerado esa perspectiva. ¿Podrías compartir tus fuentes? Estoy
                interesado en aprender más."
              </p>
            </div>
            <div className="mt-4 text-xs text-slate-600 font-sans">
              <p className="font-bold text-slate-700 mb-1">✓ ¿Por qué funciona?</p>
              <p>{t('porQueFunciona')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-[#0E7490]/10 to-transparent border border-[#0E7490]/30 p-6 rounded-2xl">
          <h4 className="text-[#0E7490] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🔍</span> {t('auditoriaTitulo')}
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed font-sans">
            {t('auditoriaTexto')}
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#6D28D9]/10 to-transparent border border-[#6D28D9]/30 p-6 rounded-2xl">
          <h4 className="text-[#6D28D9] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🌱</span> Aporte de Valor
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed font-sans">
            {t('aporteTexto')}
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          onClick={() => document.getElementById('ia-bulos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-white hover:bg-slate-50 text-brand-navy py-3 px-8 rounded-full font-medium transition-all border border-slate-300 hover:border-[#B45309] font-display"
        >
          ↓ Ver IA y Bulos
        </Button>
      </div>
    </motion.section>
  );
}
