'use client';

import { EJEMPLOS } from '@/lib/alfabetizacion-digital-content';
import { CheckCircle2, Terminal, FolderTree, Bot, Code2 } from 'lucide-react';

export default function EjemplosSection() {
  return (
    <section id="ejemplos-concretos" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sky-700 font-mono text-sm uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4 text-sky-600" />
          <span>04 · Ejemplos Prácticos en la Vida Cotidiana</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
          Casos Concretos de Aplicación por Nivel de Proficiencia
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Desde tareas operativas cotidianas hasta la automatización con IA y programación de sistemas: cómo se manifiesta la competencia digital en escenarios reales.
        </p>
      </div>

      {/* Tarjetas de los 3 Niveles en Light Mode */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Nivel Básico */}
        <div className="p-6 md:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-200 flex items-center justify-center text-sky-600">
                <FolderTree className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full font-bold">
                Nivel Operativo
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">{EJEMPLOS.basico.titulo}</h3>
              <p className="text-xs text-slate-500 mt-1">Uso diario e instrumental básico de dispositivos.</p>
            </div>

            <ul className="space-y-3 pt-2">
              {EJEMPLOS.basico.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200/60 text-[0.7rem] text-sky-900 font-mono font-semibold">
            💡 Impacto: Habilita conectividad funcional e interacción básica.
          </div>
        </div>

        {/* Nivel Intermedio */}
        <div className="p-6 md:p-7 rounded-3xl bg-gradient-to-b from-white via-blue-50/30 to-sky-50/20 border border-blue-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-bold">
                Nivel Autolaboral
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">{EJEMPLOS.intermedio.titulo}</h3>
              <p className="text-xs text-slate-500 mt-1">Solución de problemas, e-gobierno y prompting de IA.</p>
            </div>

            <ul className="space-y-3 pt-2">
              {EJEMPLOS.intermedio.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-[0.7rem] text-blue-950 font-mono font-semibold">
            🤖 Prompting IA: ChatGPT, Claude, Gemini con contexto y roles.
          </div>
        </div>

        {/* Nivel Avanzado */}
        <div className="p-6 md:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full font-bold">
                Nivel Creador
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">{EJEMPLOS.avanzado.titulo}</h3>
              <p className="text-xs text-slate-500 mt-1">Programación, bases de datos y arquitectura segura.</p>
            </div>

            <ul className="space-y-3 pt-2">
              {EJEMPLOS.avanzado.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200/60 text-[0.7rem] text-indigo-950 font-mono font-semibold">
            ⚡ Lenguajes: Python, SQL, Git y pipelines de automatización.
          </div>
        </div>
      </div>
    </section>
  );
}
