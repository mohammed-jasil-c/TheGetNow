'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

interface HeroCinematicProps {
  title: string
  subtitle: string
  heroImage: string
  gradientFrom: string
  gradientTo: string
  techIcons: { name: string; url: string }[]
  ctaText: string
}

export default function HeroCinematic({ title, subtitle, heroImage, gradientFrom, gradientTo, techIcons, ctaText }: HeroCinematicProps) {
  useEffect(() => {
    // Cinematic entrance
    gsap.fromTo('.cinematic-bg', 
      { scale: 1.15, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    )
    
    gsap.fromTo('[data-cine-fade] > *', 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.3 }
    )
  }, [title])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden theme-page pt-20 pb-20">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 cinematic-bg">
        <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity" />
        <div className={`absolute inset-0 bg-gradient-to-t from-[color:var(--bg-page)] via-[color:var(--bg-page)]/70 to-transparent`} />
        {/* Cinematic central glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-40 mix-blend-screen pointer-events-none bg-gradient-to-tr ${gradientFrom} ${gradientTo}`} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center mt-10">
        
        <div data-cine-fade className="flex flex-col items-center max-w-4xl">
          {/* Tech Badges Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techIcons.map((icon, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 theme-card border theme-border rounded-full shadow-lg backdrop-blur-md">
                <img src={icon.url} alt={icon.name} className="w-5 h-5 object-contain" />
                <span className="text-sm font-bold theme-text-heading">{icon.name}</span>
              </div>
            ))}
          </div>

          <h1 className="text-6xl md:text-8xl font-black theme-text-heading leading-[1.05] tracking-tight mb-8">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl theme-text-secondary leading-relaxed mb-12 max-w-3xl">
             {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-10 py-5 theme-btn-primary text-lg font-bold rounded-2xl flex items-center gap-3 hover:scale-105 transition-all">
              <i className="fa-solid fa-rocket" /> {ctaText}
            </button>
            <button className="px-10 py-5 glass-card border border-white/10 font-bold theme-text-heading rounded-2xl flex items-center gap-3 hover:border-white/30 hover:scale-105 transition-all group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <i className="fa-solid fa-play text-white ml-1" />
              </div>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
