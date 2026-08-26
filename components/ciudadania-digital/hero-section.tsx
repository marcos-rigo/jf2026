'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SourceCite } from './source-cite';
import { HERO_QUOTES } from '@/lib/ciudadania-digital-content';

const INFOGRAFIA_PATH = '/weekly-content/2026-W19/infografiaSemanal.svg';

export default function HeroSection() {
  const [definicion, sintesis, porQueImporta] = HERO_QUOTES;

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8 scroll-mt-28 md:scroll-mt-32"
    >
      {/* ── Título de la temática ── */}
      <div>
        <span className="bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
          00 — Inicio
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white mt-5 tracking-tight font-display">
          Ciudadanía <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">Digital</span>
        </h1>
      </div>

      {/* ── Definición principal — bien visible, arriba de todo ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-[#00F0FF]/20 border-t-2 border-t-[#00F0FF] p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />
        <h3 className="font-bold text-[#00F0FF] font-display mb-4 uppercase tracking-wide text-sm">Definición principal</h3>
        <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-sans italic border-l-4 border-[#00F0FF] pl-6 mb-5">
          "{definicion.text}"
        </blockquote>
        <SourceCite source={definicion.source} />
      </div>

      {/* ── Infografía general ── */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#00F0FF]/15 via-transparent to-[#8B5CF6]/10 blur-2xl rounded-3xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-[#00F0FF]/20 shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,240,255,0.06)]">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-[#07101f] to-[#0b1830] border-b border-white/[0.07]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-md px-4 py-1 flex items-center gap-2 max-w-xs w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse shrink-0" />
                <span className="text-xs text-white/40 font-mono truncate">infografia — Ciudadanía Digital</span>
              </div>
            </div>
            <div className="w-16 shrink-0" />
          </div>
          <div className="bg-white">
            <img src={INFOGRAFIA_PATH} alt="Infografía de Ciudadanía Digital" className="w-full h-auto block" />
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/60 to-transparent" />
        </div>
      </div>

      {/* ── Texto introductorio + concepto ── */}
      <div className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
          Sé la Guía Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
            de tus Estudiantes
          </span>
        </h2>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl font-sans">
          ¿Sentís que tus estudiantes viven más conectados de lo que podés seguirles el ritmo? Entre la desinformación
          que circula por los grupos de WhatsApp del curso, los riesgos de privacidad que exponen sin saberlo, los
          sesgos de la Inteligencia Artificial que usan para hacer la tarea y los conflictos que se trasladan de las
          redes sociales al aula, acompañar la vida digital de tus estudiantes puede sentirse como caminar por un
          campo minado.
        </p>

        <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-6 rounded-r-xl my-8 max-w-3xl">
          <p className="text-[#00F0FF] font-medium text-lg leading-relaxed">
            El problema es que buena parte de tus estudiantes interactúa en el mundo digital en{' '}
            <strong className="font-bold text-white">"piloto automático"</strong> — y muchas veces vos también,
            entre la carga docente y la velocidad con la que cambian las plataformas. La{' '}
            <strong className="font-bold text-white">Ciudadanía Digital</strong> no es solo saber usar un
            dispositivo: es tener las herramientas para enseñar a protegerse, convivir con respeto y aprovechar
            la red para el desarrollo de cada estudiante, dentro y fuera del aula.
          </p>
        </div>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl font-sans">
          En este Kit dejamos la teoría de lado. Te guiamos paso a paso con estrategias que podés llevar directo
          al aula: cómo trabajar la seguridad digital con tus estudiantes, cómo mediar los conflictos de convivencia
          que llegan desde las redes, y cómo enseñarles a detectar información falsa antes de que la compartan.
        </p>

        <Button
          onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="bg-gradient-to-r from-[#00F0FF] to-blue-600 hover:from-blue-500 hover:to-[#00F0FF] text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-3 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          Iniciar el Kit Docente <span>➔</span>
        </Button>
      </div>

      {/* ── Concepto: síntesis breve, por qué importa (la definición principal ya está arriba) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Síntesis breve', text: sintesis.text, source: sintesis.source, color: '#8B5CF6' },
          { title: 'Por qué importa', text: porQueImporta.text, source: porQueImporta.source, color: '#F59E0B' },
        ].map((block) => (
          <div
            key={block.title}
            className="backdrop-blur-xl bg-[#141A28]/70 border border-slate-800/50 border-t-2 p-6 rounded-3xl flex flex-col gap-4"
            style={{ borderTopColor: block.color }}
          >
            <h3 className="font-bold text-white font-display" style={{ color: block.color }}>
              {block.title}
            </h3>
            <blockquote className="text-slate-300 text-sm leading-relaxed font-sans italic border-l-2 border-slate-700 pl-4">
              "{block.text}"
            </blockquote>
            <SourceCite source={block.source} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
