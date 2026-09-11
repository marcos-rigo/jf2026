'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PASO3_TEXTO, VERIFICA_DESC } from '@/lib/ciudadania-digital-content';
import { resolveTexto } from '@/lib/audiencia-texto';
import { useAudienciaStore } from '@/lib/audiencia-store';

export default function Paso3Section() {
  const audienciaActual = useAudienciaStore((s) => s.audienciaActual);
  const t = (campo: keyof typeof PASO3_TEXTO) => resolveTexto(PASO3_TEXTO[campo], audienciaActual, 'docentes');

  return (
    <motion.section
      id="ia-bulos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="w-full scroll-mt-28 md:scroll-mt-32"
    >
      <div className="mb-10">
        <span className="bg-[#B45309]/10 text-[#B45309] border border-[#B45309]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 03
        </span>
        <h2 className="text-3xl font-bold text-brand-navy mt-5 mb-2 font-display">
          {t('titulo')}
        </h2>
        <p className="text-slate-600 text-lg font-sans">
          {t('subtitulo')}
        </p>
      </div>

      <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl mb-8 relative overflow-hidden shadow-sm">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B45309] to-transparent opacity-50" />

        <p className="text-slate-700 text-lg mb-10 leading-relaxed max-w-3xl font-sans">
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Checklist de verificación */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-brand-navy text-lg mb-6 font-display">{t('checklistTitulo')}</h4>

            <div className="space-y-3">
              {[
                '¿La fuente tiene credibilidad verificada?',
                '¿Hay varias fuentes que corroboren?',
                '¿El titular es sensacionalista o alarmista?',
                '¿Puedo identificar al autor o institución?',
                '¿Tiene fecha clara y actualizada?',
              ].map((item, idx) => (
                <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 rounded border-2 border-slate-300 bg-transparent checked:bg-[#047857] checked:border-[#047857] accent-[#047857] cursor-pointer"
                  />
                  <span className="text-slate-700 group-hover:text-brand-navy transition-colors font-sans text-sm">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Framework Interactivo */}
          <div className="md:col-span-3 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8">
            <h4 className="font-bold text-brand-navy mb-6 font-display">Framework: VERIFICA</h4>

            <div className="space-y-5">
              {[
                { letter: 'V', title: 'Verificación de Fuente', color: '#0E7490' },
                { letter: 'E', title: 'Evidencia Múltiple', color: '#6D28D9' },
                { letter: 'R', title: 'Revista tu Sesgo', color: '#047857' },
                { letter: 'I', title: 'Identifica Cambios', color: '#B45309' },
                { letter: 'F', title: 'Fecha y Contexto', color: '#B91C1C' },
                { letter: 'I', title: 'Intuición Crítica', color: '#BE185D' },
                { letter: 'C', title: 'Contraste Perspectivas', color: '#0369A1' },
                { letter: 'A', title: 'Actúa Responsablemente', color: '#0F766E' },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 pl-4" style={{ borderLeftColor: item.color }}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: item.color + '20', color: item.color }}>
                      {item.letter}
                    </span>
                    <p className="font-bold text-brand-navy text-sm font-display">{item.title}</p>
                  </div>
                  <p className="text-xs text-slate-600 ml-11 font-sans">
                    {resolveTexto(VERIFICA_DESC[idx], audienciaActual, 'docentes')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end items-center">
        <Button
          onClick={() => document.getElementById('ventajas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-brand-navy hover:bg-slate-800 text-white py-3 px-8 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 font-display"
        >
          ↓ Ver Ventajas
        </Button>
      </div>
    </motion.section>
  );
}
