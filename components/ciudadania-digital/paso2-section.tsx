'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Paso2Section() {
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
        <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          Fase 02
        </span>
        <h2 className="text-3xl font-bold text-white mt-5 mb-2 font-display">
          Trabajá la "Netiqueta" con tu Curso
        </h2>
        <p className="text-slate-400 text-lg font-sans">
          Modelá y enseñá la convivencia digital, dentro y fuera del aula.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Objetivo e Instrucciones */}
        <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 rounded-3xl md:col-span-2 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8B5CF6] opacity-10 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-6 text-[#8B5CF6] relative z-10">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl text-white font-display">Objetivo</h3>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed font-sans">
            Que tus estudiantes aprendan a interactuar en línea con empatía, evitando malentendidos y construyendo una
            huella digital positiva — y que vos tengas herramientas para mediar cuando un conflicto de WhatsApp o
            Instagram se traslada al aula. La<em> Netiqueta</em> son las normas no escritas del ecosistema digital: lo
            que se escribe también construye reputación, la de cada estudiante y la de la institución.
          </p>

          <h4 className="font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm font-display">
            <span className="text-[#8B5CF6]">■</span> Protocolos de comunicación
          </h4>
          <ul className="space-y-4 text-slate-300 font-sans">
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">1.</span>
              <span>Enseñales a leer antes de responder. Muchos conflictos entre estudiantes arrancan por
              malinterpretar un mensaje sin contexto — funciona pedirles que lean dos veces antes de contestar en caliente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">2.</span>
              <span>
                Modelá el respeto aunque no haya acuerdo. Ayudalos a diferenciar un debate constructivo de
                un ataque personal — es una distinción que se puede trabajar con ejemplos reales de sus propios grupos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">3.</span>
              <span>Conversá sobre el spam y la autopromoción excesiva en los grupos del curso — cadenas,
              reenvíos sin filtrar. Fomentá que cada mensaje aporte algo.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] font-bold">4.</span>
              <span>Insistí en verificar fuentes antes de reenviar noticias o información sensible al grupo del
              curso — esto conecta directo con lo que van a trabajar en la Fase 03.</span>
            </li>
          </ul>
        </div>

        {/* Ejemplo visual */}
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-4 border-t-[#8B5CF6] p-6 rounded-3xl h-full">
            <h4 className="text-[#8B5CF6] font-bold text-lg mb-3 font-display">Un Ejemplo para Compartir con tu Curso</h4>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700 text-sm">
              <p className="text-slate-300 italic font-sans">
                "Excelente punto. No había considerado esa perspectiva. ¿Podrías compartir tus fuentes? Estoy
                interesado en aprender más."
              </p>
            </div>
            <div className="mt-4 text-xs text-slate-400 font-sans">
              <p className="font-bold text-slate-300 mb-1">✓ ¿Por qué funciona?</p>
              <p>Es constructivo, abierto, sin ego y busca aprender. Podés usarlo como modelo en clase.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/30 p-6 rounded-2xl">
          <h4 className="text-[#00F0FF] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🔍</span> Auditoría de Huella (para vos y para ellos)
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            Proponeles buscar su propio nombre en Google en modo incógnito y revisar qué aparece en la primera página:
            fotos, comentarios, resultados. Esa es su huella digital pública hoy. Podés hacer el ejercicio vos primero,
            como docente, para mostrar cómo se hace sin exponer a nadie.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 p-6 rounded-2xl">
          <h4 className="text-[#8B5CF6] font-bold text-lg mb-2 flex items-center gap-2 font-display">
            <span>🌱</span> Aporte de Valor
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            Proponeles escribir esta semana un comentario constructivo o un mensaje de agradecimiento en el perfil de
            un compañero, docente o creador que valoren. Es una forma simple de empezar a construir una huella digital
            positiva.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          onClick={() => document.getElementById('ia-bulos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 rounded-full font-medium transition-all border border-slate-600 hover:border-[#F59E0B] font-display"
        >
          ↓ Ver IA y Bulos
        </Button>
      </div>
    </motion.section>
  );
}
