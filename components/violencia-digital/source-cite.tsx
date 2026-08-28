import { ExternalLink } from 'lucide-react';
import type { Source } from '@/lib/violencia-digital-content';

interface SourceCiteProps {
  source: Source;
  className?: string;
}

// Cita de fuente reutilizable para esta temática — misma interfaz y lógica que
// components/huella-digital/source-cite.tsx, con paleta clara para calzar con
// el fondo slate-50 / tono sobrio de esta página.
export function SourceCite({ source, className = '' }: SourceCiteProps) {
  const base = 'inline-flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500';

  const content = (
    <>
      <span className="opacity-70" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? 'italic' : ''}>{source.author}</span>
      {source.note && <span className="opacity-80">— {source.note}</span>}
      {source.unverified && (
        <span className="opacity-70 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border border-slate-300">
          sin verificar
        </span>
      )}
    </>
  );

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} hover:text-violet-600 transition-colors ${className}`}
      >
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
