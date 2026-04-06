'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HomeCTA() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 75%',
        }
      })
    }, ctaRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ctaRef} className="py-40 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Premium Cinematic Background Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 120%, rgba(0, 87, 255, 0.15) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(123, 47, 255, 0.1) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-px h-full absolute left-1/4 top-0" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-text), transparent)' }} />
        <div className="w-px h-full absolute right-1/4 top-0" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-text), transparent)' }} />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center cta-content">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center justify-center gap-2 mb-10 px-5 py-2.5 rounded-full border shadow-sm" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-widest text-blue-500">
            Start Your Journey
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
          Ready to build something<br />
          <span className="gradient-text-hero inline-block mt-2">extraordinary?</span>
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium" style={{ color: 'var(--color-text-secondary)' }}>
          Our solution architects will analyze your requirements and provide a detailed proposal within 48 hours. Free consultation, no commitment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/contact" className="glow-button text-lg px-10 py-5 flex items-center gap-2 font-bold hover:-translate-y-1 transition-transform">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/portfolio" className="outline-button text-lg px-10 py-5 transition-all font-bold hover:bg-black/5 dark:hover:bg-white/5">
            View Live Work
          </Link>
        </div>

      </div>
    </section>
  )
}
