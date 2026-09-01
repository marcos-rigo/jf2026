import { ExternalLink } from "lucide-react"
import type { Source } from "@/lib/nnya-entorno-digital-content"

interface SourceCiteProps {
  source: Source
  className?: string
}

// Cita de fuente para "NNyA y el Entorno Digital" — misma interfaz que
// components/huella-digital/source-cite.tsx, deliberadamente duplicada con la paleta
// brand-blue/brand-pink propia de esta página.
export function SourceCite({ source, className = "" }: SourceCiteProps) {
  const base = "inline-flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400"

  const content = (
    <>
      <span className="opacity-70" aria-hidden>
        📎
      </span>
      <span className={source.unverified ? "italic" : ""}>{source.author}</span>
      {source.note && <span className="opacity-80">— {source.note}</span>}
      {source.unverified && (
        <span className="opacity-80 text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded border border-amber-300 text-amber-600">
          sin verificar
        </span>
      )}
    </>
  )

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} hover:text-brand-blue transition-colors ${className}`}
      >
        {content}
        <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
      </a>
    )
  }

  return <span className={`${base} ${className}`}>{content}</span>
}
