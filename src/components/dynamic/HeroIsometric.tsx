'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

interface HeroIsometricProps {
  title: string
  subtitle: string
  heroImage: string
  gradientFrom: string
  gradientTo: string
  techIcons: { name: string; url: string }[]
  ctaText: string
}

export default function HeroIsometric({ title, subtitle, heroImage, gradientFrom, gradientTo, techIcons, ctaText }: HeroIsometricProps) {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('[data-iso-text] > *', 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    ).fromTo('.iso-image-container',
      { x: 50, opacity: 0, rotationY: 25, rotationX: 10 },
      { x: 0, opacity: 1, rotationY: -15, rotationX: 15, duration: 1.5, ease: "power4.out" },
      "-=0.5"
    );

    // Floating animation
    gsap.to('.iso-image-container', {
      y: -20,
      rotationY: -10,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

  }, [title])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden theme-page pt-32 pb-20 perspective-1000">
      
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-30 mix-blend-screen pointer-events-none bg-gradient-to-br ${gradientFrom} ${gradientTo}`} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div data-iso-text className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 theme-card border theme-border rounded-full shadow-md mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider theme-text-heading">Next-Gen Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold theme-text-heading leading-[1.1] mb-6">
            {title}
          </h1>
          
          <p className="text-lg theme-text-secondary leading-relaxed mb-10">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="px-8 py-4 theme-btn-primary font-bold rounded-xl shadow-[0_0_40px_rgba(var(--brand-blue),0.3)] hover:scale-105 transition-transform">
              {ctaText} <i className="fa-solid fa-arrow-right ml-2" />
            </button>
          </div>

          <div className="pt-8 border-t theme-border flex gap-6 items-center">
             <div className="text-sm font-bold theme-text-muted">Powered By</div>
             <div className="flex gap-4">
               {techIcons.map((icon, i) => (
                 <img key={i} src={icon.url} alt={icon.name} className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" title={icon.name} />
               ))}
             </div>
          </div>
        </div>

        {/* Isometric 3D Image Element */}
        <div className="hidden lg:flex justify-end transform-style-3d perspective-1000">
          <div className="iso-image-container relative w-full aspect-square max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 theme-border bg-black">
             <img src={heroImage} alt="Preview" className="w-full h-full object-cover opacity-80" />
             <div className={`absolute inset-0 bg-gradient-to-tr ${gradientFrom} ${gradientTo} opacity-30 mix-blend-overlay`} />
             
             {/* Floating UI Badges */}
             <div className="absolute top-8 left-8 glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-500" />
                </div>
                <div>
                  <div className="font-bold text-white">System Optimised</div>
                  <div className="text-xs text-white/70">Performance Max</div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
