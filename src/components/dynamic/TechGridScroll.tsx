'use client'

import React from 'react'

interface TechGridScrollProps {
  icons: { name: string; url: string }[];
}

export default function TechGridScroll({ icons }: TechGridScrollProps) {
  // Duplicate arrays to create the infinite scroll effect
  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <section className="py-12 border-y theme-border bg-black/20 backdrop-blur-sm overflow-hidden relative">
      
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[color:var(--bg-page)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[color:var(--bg-page)] to-transparent z-10" />

      <div className="flex w-fit animate-ticker hover:[animation-play-state:paused]">
        {duplicatedIcons.map((icon, i) => (
          <div key={i} className="flex items-center gap-3 px-8 shrink-0 saturate-50 hover:saturate-100 transition-all opacity-70 hover:opacity-100">
            <img src={icon.url} alt={icon.name} className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold theme-text-heading tracking-wide">{icon.name}</span>
          </div>
        ))}
      </div>
      
    </section>
  )
}
