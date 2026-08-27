'use client';

import { Coffee } from 'lucide-react';
import { CAFE_CARDS } from '@/lib/alfabetizacion-mediatica-content';

export function CaracteristicasSection() {
  return (
    <section id="caracteristicas" className="scroll-mt-20 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-brand-blue font-mono text-sm uppercase tracking-wider font-semibold">
            <Coffee className="w-4 h-4 text-brand-blue" />
            <span>03 · Características</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            El framework C.A.F.E.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
            Pasá el cursor sobre los módulos para desencriptar cada criterio de evaluación.
          </p>
        </div>
        <div className="hidden sm:block p-3 bg-white rounded-xl shadow-md border border-slate-100 shrink-0">
          <span className="text-xl">☕</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {CAFE_CARDS.map((card) => (
          <div key={card.letter} className="group h-52 sm:h-56 [perspective:1000px]">
            <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500 shadow-lg shadow-slate-200/50 rounded-[2rem]">
              <div
                className={`absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-100 flex flex-col items-center justify-center rounded-[2rem] p-5 sm:p-6 transition-all ${card.hoverBorder}`}
              >
                <span
                  className={`text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-300 ${card.hover} transition-all duration-500 mb-2 group-hover:scale-110`}
                >
                  {card.letter}
                </span>
                <span className="font-display font-extrabold text-slate-800 text-base sm:text-lg tracking-wide uppercase">
                  {card.title}
                </span>
              </div>
              <div
                className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${card.from} ${card.to} text-white flex flex-col items-center justify-center rounded-[2rem] p-5 sm:p-6 text-center border ${card.border}`}
              >
                <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                <p className="text-xs sm:text-sm font-medium leading-relaxed">{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
