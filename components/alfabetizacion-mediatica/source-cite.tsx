'use client';

import { ExternalLink, Clock3 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Source } from '@/lib/alfabetizacion-mediatica-content';

interface SourceCiteProps {
  source: Source;
  className?: string;
}

/**
 * Citation-card ("ficha con sello") — mismo patrón que
 * components/alfabetizacion-digital/source-cite.tsx, adaptado a la paleta
 * propia de esta ruta (brand-blue como acento "verificado", ámbar para
 * referencias sin link digital). Deliberadamente duplicado por ruta en vez
 * de compartido: cada temática tiene su propio tema visual.
 */
export function SourceCite({ source, className = '' }: SourceCiteProps) {
  const reduce = useReducedMotion();
  const verified = !!source.url;
  const tone = verified
    ? { ring: 'border-brand-blue/50', ringHover: 'group-hover:border-brand-blue', text: 'text-brand-blue', bg: 'bg-brand-blue/5', edge: 'bg-brand-blue' }
    : { ring: 'border-amber-400 border-dashed', ringHover: 'group-hover:border-amber-600', text: 'text-amber-800', bg: 'bg-amber-50', edge: 'bg-amber-500' };

  const card = (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.93, rotate: -1.2 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: reduce ? 0.25 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex items-start gap-3.5 pl-5 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(66,114,187,0.12)] focus-within:-translate-y-0.5 ${className}`}
    >
      <span className={`absolute left-0 top-0 bottom-0 w-1 ${tone.edge}`} aria-hidden />

      <motion.span
        whileHover={reduce ? undefined : { scale: 0.88 }}
        whileTap={reduce ? undefined : { scale: 0.82 }}
        transition={{ type: 'spring', stiffness: 420, damping: 18 }}
        className={`relative shrink-0 w-8 h-8 rounded-full border-2 ${tone.ring} ${tone.ringHover} ${tone.bg} flex items-center justify-center mt-0.5 transition-colors duration-300`}
      >
        {verified ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue" fill="none">
            <motion.path
              d="M4 12.5l5 5L20 6"
              stroke="currentColor"
              strokeWidth={2.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.25, ease: 'easeInOut' }}
            />
          </svg>
        ) : (
          <Clock3 className="w-3.5 h-3.5 text-amber-600" />
        )}
      </motion.span>

      <div className="min-w-0 flex flex-col gap-1 flex-1">
        <span className={`font-mono text-sm font-bold leading-snug ${tone.text}`}>
          {source.author}
        </span>
        {source.note && (
          <span className="font-mono text-sm text-slate-500 leading-snug">{source.note}</span>
        )}
        {!source.url && (
          <span className="inline-flex w-max items-center gap-1 font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-300 text-amber-800 bg-amber-50">
            referencia bibliográfica
          </span>
        )}
      </div>

      {source.url && (
        <ExternalLink className="w-4 h-4 text-brand-blue shrink-0 mt-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      )}
    </motion.div>
  );

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
      >
        {card}
      </a>
    );
  }

  return card;
}
