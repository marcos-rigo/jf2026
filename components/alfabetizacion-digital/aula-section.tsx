'use client';

import { AULA_PUNTOS } from '@/lib/alfabetizacion-digital-content';
import { GraduationCap, HeartHandshake, Sparkles, Compass } from 'lucide-react';

const iconsMap = [Compass, HeartHandshake, Sparkles];

export default function AulaSection() {
  return (
    <section id="aula" className="scroll-mt-28 md:scroll-mt-32 space-y-8">
      {/* Encabezado de Sección */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-pink-700 font-mono text-base uppercase tracking-wider font-semibold">
          <GraduationCap className="w-4 h-4 text-pink-600" />
          <span>08 · Por qué es Importante Saberlo como Docentes (El Rol en el Aula)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-display">
          El Docente como Mediador y Andamio de la Transición Digital
        </h2>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          La escuela es la institución igualadora por excelencia. La alfabetización digital del cuerpo docente es la condición previa para convertir el aula en un espacio de diseño crítico y ético.
        </p>
      </div>

      {/* Grid de los 3 Ejes Docentes en Light Mode */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AULA_PUNTOS.map((punto, idx) => {
          const Icon = iconsMap[idx] || GraduationCap;
          return (
            <div
              key={punto.titulo}
              className="p-6 md:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-brand-navy font-display">
                  {punto.titulo}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  {punto.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-mono text-pink-800 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                <span>Eje Docente 0{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Compromiso Institucional */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-pink-500/10 via-white to-pink-50/50 border border-pink-200/80 shadow-sm space-y-3">
        <h4 className="text-base font-bold text-brand-navy flex items-center gap-2 font-display">
          <GraduationCap className="w-5 h-5 text-pink-600 shrink-0" />
          Comunidades de Práctica e Inteligencia Artificial en Educación
        </h4>
        <p className="text-base text-slate-700 leading-relaxed font-sans">
          El desarrollo profesional continuo requiere que los docentes experimenten con evaluación formativa mediada por tecnología y entiendan el impacto de la IA generativa en el aula, para así guiar a sus alumnos en el uso ético, transparente y citatorio de los algoritmos.
        </p>
      </div>
    </section>
  );
}
