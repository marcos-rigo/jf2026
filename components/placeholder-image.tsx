"use client"

import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  className?: string
  text?: string
}

export function PlaceholderImage({ className, text }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "w-full h-full bg-gradient-to-br from-brand-navy via-brand-blue to-brand-pink flex items-center justify-center",
        className
      )}
    >
      {text && (
        <span className="text-white/50 text-sm font-medium">{text}</span>
      )}
    </div>
  )
}
