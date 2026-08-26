import { ExternalLink } from 'lucide-react';
import type { Source } from '@/lib/hiperconectividad-digital-content';

interface SourceCiteProps {
  source: Source;
  dark?: boolean;
  className?: string;
}

// Cita de fuente reutilizable para esta temática — misma interfaz que
// components/ciudadania-digital/source-cite.tsx y components/huella-digital/source-cite.tsx.
// Esta página alterna secciones claras y oscuras (arquitectura cerebral, salud mental son
// fondo oscuro), por eso acepta `dark` para invertir la paleta en vez de tener dos componentes.
export function SourceCite({ source, dark = false, className = '' }: SourceCiteProps) {
  const base = `inline-flex flex-wrap items-center gap-1.5 text-xs font-mono ${
    dark ? 'text-white/50' : 'text-slate-500'
  }`;
  const hover = dark ? 'hover:text-violet-300' : 'hover:text-brand-blue';
  const badgeBorder = dark ? 'border-white/20' : 'border-slate-300';

  const content = (
    <>
      <span className="opacity-70" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? 'italic' : ''}>{source.author}</span>
      {source.note && <span className="opacity-80">— {source.note}</span>}
      {source.unverified && (
        <span className={`opacity-70 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border ${badgeBorder}`}>
          sin verificar
        </span>
      )}
    </>
  );

  if (source.url) {
    return (
      <a href={source.url} target="_blank" rel="noopener noreferrer" className={`${base} ${hover} transition-colors ${className}`}>
        {content}
        <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
      </a>
    );
  }

  return (
    <span className={`${base} ${className}`}>
      {content}
    </span>
  );
}
