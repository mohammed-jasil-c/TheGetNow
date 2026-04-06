'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, Star } from 'lucide-react'

interface HeroCaseStudyProps {
  title: string
  subtitle: string
  heroImage: string
  gradientFrom: string
  gradientTo: string
  techIcons: { name: string; url: string }[]
  ctaText: string
  result?: string
}

export default function HeroCaseStudy({
  title,
  subtitle,
  heroImage,
  gradientFrom,
  gradientTo,
  techIcons,
  ctaText,
  result
}: HeroCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-hero-content', { y: 100, duration: 1.2, ease: 'power4.out', stagger: 0.2 })
      gsap.from('.case-hero-image', { scale: 1.2, duration: 2, ease: 'power2.out' })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-30 case-hero-image" />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background`} />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-40 mix-blend-overlay`} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Result Badge */}
          {result && (
            <div className="case-hero-content mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--brand-blue)]/30 bg-[var(--brand-blue)]/10 backdrop-blur-md">
              <Star className="w-4 h-4 text-[var(--brand-blue)]" />
              <span className="text-xs font-black uppercase tracking-widest text-[var(--brand-blue)]">Impact: {result}</span>
            </div>
          )}

          <h1 className="case-hero-content text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>

          <p className="case-hero-content text-xl md:text-2xl opacity-70 mb-12 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>

          <div className="case-hero-content flex flex-wrap items-center gap-8">
            <button className="glow-button px-10 py-5 text-lg">
              Full Project Re-cap <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {techIcons.slice(0, 4).map((tech, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-2.5 shadow-xl transition-transform hover:z-10 hover:-translate-y-1">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider opacity-40">Tech Stack</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--brand-blue)]/20 blur-[150px] rounded-full" />
    </section>
  )
}
