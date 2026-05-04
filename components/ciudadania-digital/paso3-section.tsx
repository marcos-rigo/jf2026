'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Paso3SectionProps {
  onNavigate: (tab: 'intro' | 'paso1' | 'paso2' | 'herramientas') => void;
}

export default function Paso3Section({ onNavigate }: Paso3SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-10">
        <span className="bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 03
        </span>
        <h2 className="text-3xl font-bold text-white mt-5 mb-2 font-display">
          Análisis Crítico y Bulos
        </h2>
        <p className="text-slate-400 text-lg font-sans">
          Entiende la Inteligencia Artificial y frena la desinformación.
        </p>
      </div>

      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-50" />

        <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-3xl font-sans">
          La era de la IA generativa trae capacidades asombrosas, pero democratiza la desinformación ultrarrealista
          (Deepfakes, textos sintéticos). Tu deber es no ser un nodo de retransmisión de datos falsos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Checklist de verificación */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-lg mb-6 font-display">Checklist Anti-Bulos</h4>

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
                    className="mt-1 w-5 h-5 rounded border-2 border-slate-600 bg-transparent checked:bg-[#10B981] checked:border-[#10B981] accent-[#10B981] cursor-pointer"
                  />
                  <span className="text-slate-300 group-hover:text-white transition-colors font-sans text-sm">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Framework Interactivo */}
          <div className="md:col-span-3 bg-slate-950 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-inner">
            <h4 className="font-bold text-white mb-6 font-display">Framework: VERIFICA</h4>

            <div className="space-y-5">
              {[
                {
                  letter: 'V',
                  title: 'Verificación de Fuente',
                  desc: 'Busca el medio original, verifica su reputación en fact-checkers.',
                  color: '#00F0FF',
                },
                {
                  letter: 'E',
                  title: 'Evidencia Múltiple',
                  desc: 'Si solo 1-2 fuentes lo reportan, puede ser propaganda.',
                  color: '#8B5CF6',
                },
                {
                  letter: 'R',
                  title: 'Revista tu Sesgo',
                  desc: 'Pregúntate: ¿Creo esto porque es cierto o porque deseo que sea cierto?',
                  color: '#10B981',
                },
                {
                  letter: 'I',
                  title: 'Identifica Cambios',
                  desc: 'Deepfakes, ediciones de vídeo. Revisa metadatos si es posible.',
                  color: '#F59E0B',
                },
                {
                  letter: 'F',
                  title: 'Fecha y Contexto',
                  desc: 'Noticias viejas recicladas. Entiende el contexto temporal.',
                  color: '#EF4444',
                },
                {
                  letter: 'I',
                  title: 'Intuición Crítica',
                  desc: 'Si algo parece raro, probablemente lo sea. Desconfía del "sentido común".',
                  color: '#EC4899',
                },
                {
                  letter: 'C',
                  title: 'Contraste Perspectivas',
                  desc: 'Lee análisis de fuentes con diferentes sesgos políticos.',
                  color: '#06B6D4',
                },
                {
                  letter: 'A',
                  title: 'Actúa Responsablemente',
                  desc: 'Antes de compartir, ya verificaste. Sé un "gate-keeper" confiable.',
                  color: '#14B8A6',
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 pl-4" style={{ borderLeftColor: item.color }}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: item.color + '30', color: item.color }}>
                      {item.letter}
                    </span>
                    <p className="font-bold text-white text-sm font-display">{item.title}</p>
                  </div>
                  <p className="text-xs text-slate-400 ml-11 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <Button
          onClick={() => onNavigate('paso2')}
          className="text-slate-500 hover:text-white font-medium transition-colors font-mono text-sm"
          variant="ghost"
        >
          <span>←</span> Volver
        </Button>
        <Button
          onClick={() => onNavigate('herramientas')}
          className="bg-white hover:bg-slate-200 text-black py-3 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 font-display"
        >
          Acceder al Panel Final <span>➔</span>
        </Button>
      </div>
    </motion.section>
  );
}
