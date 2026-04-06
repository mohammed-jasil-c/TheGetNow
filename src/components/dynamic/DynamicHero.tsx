'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

interface DynamicHeroProps {
  title: string
  subtitle: string
  heroImage: string
  gradientFrom: string
  gradientTo: string
  techIcons: { name: string; url: string }[]
  ctaText: string
}

export default function DynamicHero({ title, subtitle, heroImage, gradientFrom, gradientTo, techIcons, ctaText }: DynamicHeroProps) {
  useEffect(() => {
    gsap.fromTo('[data-dyn-hero] > *', 
      { y: 50 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
    )
  }, [title])

  return (
    <section className="relative w-full min-h-[90vh] flex items-end pb-32 overflow-hidden theme-page pt-32">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        {/* Gradients to blend image cleanly over theme background */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[color:var(--bg-page)] via-[color:var(--bg-page)]/80 to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-r from-[color:var(--bg-page)] via-[color:var(--bg-page)]/90 to-transparent`} />
        {/* Dynamic color glow based on page settings */}
        <div className={`absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none bg-gradient-to-bl ${gradientFrom} ${gradientTo}`} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div data-dyn-hero>
          {/* Tech Badges Row */}
          <div className="flex gap-4 mb-8">
            {techIcons.map((icon, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 theme-card border theme-border rounded-lg shadow-lg">
                <img src={icon.url} alt={icon.name} className="w-5 h-5 object-contain" />
                <span className="text-xs font-bold theme-text-heading">{icon.name}</span>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-black theme-text-heading leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>
          
          <p className="text-xl theme-text-secondary leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 theme-btn-primary font-bold rounded-xl flex items-center gap-3 transition-colors">
              <i className="fa-solid fa-rocket" /> {ctaText}
            </button>
            <button className="px-8 py-4 theme-card theme-border border font-bold theme-text-heading rounded-xl flex items-center gap-3 hover:border-sky-500/50 transition-colors">
              <i className="fa-solid fa-play text-sky-500" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Floating 3D Vector/UI Element */}
        <div className="hidden lg:flex justify-end" data-dyn-hero>
          <div className="relative w-full max-w-lg aspect-square theme-card border theme-border rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
            <img src={heroImage} alt="Preview" className="w-full h-full object-cover rounded-2xl grayscale opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Central glowing icon reflecting the page's first tech stack item */}
               {techIcons[0] && (
                 <div className="w-32 h-32 theme-card border theme-border shadow-2xl rounded-2xl flex items-center justify-center animate-bounce-slow relative">
                    <img src={techIcons[0].url} alt="" className="w-16 h-16 object-contain relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${gradientFrom} ${gradientTo} opacity-20 blur-xl`} />
                 </div>
               )}
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 theme-card border theme-border px-6 py-4 rounded-xl flex items-center gap-3 shadow-xl">
               <i className="fa-solid fa-shield-halved text-sky-500 text-2xl" />
               <div>
                 <div className="text-sm font-bold theme-text-heading">Enterprise Verified</div>
                 <div className="text-xs theme-text-muted">ISO 27001 Certified</div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
