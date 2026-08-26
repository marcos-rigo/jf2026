'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Paso3Section() {
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
        <span className="bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 03
        </span>
        <h2 className="text-3xl font-bold text-white mt-5 mb-2 font-display">
          Pensamiento Crítico frente a la IA y los Bulos
        </h2>
        <p className="text-slate-400 text-lg font-sans">
          Dales a tus estudiantes las herramientas para entender la IA y frenar la desinformación
          antes de que la compartan.
        </p>
      </div>

      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-10 rounded-3xl mb-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-50" />

        <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-3xl font-sans">
          La era de la IA generativa trae capacidades asombrosas para el aula (resúmenes, tutores virtuales,
          generación de material), pero también democratiza la desinformación ultrarrealista: deepfakes, textos
          sintéticos, imágenes falsas que tus estudiantes se van a encontrar en algún momento. Tu rol como docente es
          ayudarlos a no ser un nodo más de retransmisión de datos falsos, y a usar la IA con criterio en sus propios
          trabajos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Checklist de verificación */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-lg mb-6 font-display">Checklist Anti-Bulos (para trabajar en clase)</h4>

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
                  desc: 'Enseñales a buscar el medio original y a chequear su reputación en sitios de fact-checking antes de creer o compartir.',
                  color: '#00F0FF',
                },
                {
                  letter: 'E',
                  title: 'Evidencia Múltiple',
                  desc: 'Si solo una o dos fuentes lo reportan, puede ser propaganda o un rumor sin chequear. Pediles que busquen una segunda fuente antes de dar algo por cierto.',
                  color: '#8B5CF6',
                },
                {
                  letter: 'R',
                  title: 'Revista tu Sesgo',
                  desc: 'Trabajá con ellos la pregunta: ¿lo creo porque es cierto, o porque quiero que sea cierto? Es un buen disparador de debate en el aula.',
                  color: '#10B981',
                },
                {
                  letter: 'I',
                  title: 'Identifica Cambios',
                  desc: 'Deepfakes, ediciones de video, imágenes generadas por IA. Mostrales herramientas simples para detectar señales de manipulación.',
                  color: '#F59E0B',
                },
                {
                  letter: 'F',
                  title: 'Fecha y Contexto',
                  desc: 'Noticias viejas que circulan como si fueran actuales. Ayudalos a chequear siempre la fecha y el contexto original.',
                  color: '#EF4444',
                },
                {
                  letter: 'I',
                  title: 'Intuición Crítica',
                  desc: 'Si algo parece demasiado extremo o raro, probablemente lo sea. Enseñales a desconfiar del "así fue siempre" o del "todo el mundo lo dice".',
                  color: '#EC4899',
                },
                {
                  letter: 'C',
                  title: 'Contraste Perspectivas',
                  desc: 'Proponeles leer sobre un mismo tema en dos medios con líneas editoriales distintas, para que vean cómo cambia el enfoque.',
                  color: '#06B6D4',
                },
                {
                  letter: 'A',
                  title: 'Actúa Responsablemente',
                  desc: 'Antes de reenviar algo al grupo del curso o a sus redes, ya verificaron. Ayudalos a entender que también son un "gate-keeper (guardián/a de la información)" confiable para quienes los rodean.',
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

      <div className="mt-10 flex justify-end items-center">
        <Button
          onClick={() => document.getElementById('ventajas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-white hover:bg-slate-200 text-black py-3 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 font-display"
        >
          ↓ Ver Ventajas
        </Button>
      </div>
    </motion.section>
  );
}
