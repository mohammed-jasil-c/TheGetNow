'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { LayoutMode } from '@/lib/services-data'

type ServiceProps = {
  service: {
    title: string
    tagline: string
    description: string
    heroImage: string
    videoId: string
    layoutMode: LayoutMode
    features: { title: string; description: string; icon: string }[]
    technologies: { name: string; color: string }[]
    process: { step: string; title: string; description: string }[]
    stats: { value: string; label: string }[]
    useCases: string[]
    faq: { q: string; a: string }[]
  }
}

export default function ServicePageClient({ service }: ServiceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = containerRef.current?.querySelectorAll('.reveal')
    reveals?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen pb-24" style={{ background: 'var(--bg-page)' }}>
      {/* 
        HERO SECTION 
        Varies greatly based on Layout Mode 
      */}
      {service.layoutMode === 'cinematic' && (
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden px-4 sm:px-6">
          <div className="absolute inset-0 z-0">
            <Image src={service.heroImage} alt={service.title} fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg-page), transparent, var(--bg-page))' }} />
          </div>
          <div className="relative z-10 max-w-[1000px] mx-auto text-center reveal">
            <Link href="/services" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--brand-blue)' }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              View All Services
            </Link>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-6 tracking-tight gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h1>
            <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: 'var(--text-primary)' }}>{service.tagline}</p>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          </div>
        </section>
      )}

      {service.layoutMode === 'split' && (
        <section className="pt-32 pb-20 px-4 sm:px-6 max-w-[1400px] mx-auto reveal">
          <Link href="/services" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--brand-blue)' }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            View All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{service.title}</h1>
              <p className="text-xl font-medium mb-6" style={{ color: 'var(--brand-blue)' }}>{service.tagline}</p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src={service.heroImage} alt={service.title} fill className="object-cover" priority />
            </div>
          </div>
        </section>
      )}

      {(service.layoutMode === 'grid' || service.layoutMode === 'cards') && (
        <section className="pt-32 pb-16 px-4 sm:px-6 max-w-[1200px] mx-auto text-center reveal">
          <Link href="/services" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-center hover:opacity-80" style={{ color: 'var(--brand-blue)' }}>
             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> View All Services
          </Link>
          <h1 className="text-6xl font-black mb-6 uppercase tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{service.title}</h1>
          <p className="text-xl font-medium mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={service.heroImage} alt={service.title} fill className="object-cover" priority />
          </div>
        </section>
      )}


      {/* Video & Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto reveal">
        <div className="rounded-3xl overflow-hidden mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative aspect-video" style={{ border: '1px solid var(--border-subtle)' }}>
          <iframe
            src={`https://www.youtube.com/embed/${service.videoId}?autoplay=0&rel=0&modestbranding=1`}
            title={`${service.title} Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0"
          />
        </div>

        {/* STATS RENDER DIFFERS BY MODE */}
        {service.layoutMode === 'cinematic' || service.layoutMode === 'cards' ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl glass-card hover:scale-105 transition-transform" style={{ borderTop: `4px solid var(--brand-blue)` }}>
                <div className="text-3xl sm:text-4xl font-black mb-2 gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-10 p-10 rounded-3xl glass-card">
             {service.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[200px]">
                  <div className="text-5xl font-black mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  {i !== service.stats.length -1 && <div className="hidden lg:block absolute right-0 w-px h-16 bg-[var(--border-subtle)]" />}
                </div>
             ))}
          </div>
        )}
      </section>

      {/* Capabilities/Features Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: service.layoutMode === 'split' ? 'transparent' : 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto reveal">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Core <span className="gradient-text">Capabilities</span></h2>
          </div>
          
          <div className={`grid grid-cols-1 ${service.layoutMode === 'grid' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 sm:gap-8`}>
            {service.features.map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Use Cases */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 reveal border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold glass-card hover:scale-105 transition-transform" style={{ color: 'var(--text-primary)' }}>
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ background: tech.color }} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Industry Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl glass-card">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--brand-blue)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-[1400px] mx-auto reveal">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our <span className="gradient-text">Methodology</span></h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 relative">
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px]" style={{ background: 'var(--border-medium)' }} />
            {service.process.map((step, i) => (
              <div key={i} className="flex-1 relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-6 transition-transform duration-500 group-hover:scale-110 shadow-lg" style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '2px solid var(--brand-blue)' }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 reveal text-center">
         <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ready to accelerate?</h2>
         <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Our architects are available for a technical discovery session to scope your project.</p>
         <Link href="/contact" className="btn-primary !text-base !py-4 !px-8 inline-flex items-center gap-2">
           Schedule Discovery Call
           <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
         </Link>
      </section>
    </div>
  )
}
