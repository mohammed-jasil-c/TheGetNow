'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Local Rich Data
import { richServiceData } from '@/data/serviceData'
import type { Service } from '@/data/services'

// Dynamically import the 3D Hero to prevent SSR layout shifts
const ServiceHero3D = dynamic(() => import('@/components/services/ServiceHero3D'), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

interface Props {
  service: Service
}

export default function ServiceDetailClient({ service }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Retrieve the massively detailed content object, or fallback to sensible defaults
  const detailedData = richServiceData[service.slug] || {
    primaryColor: service.accentColor || '#0057FF',
    accentColor: '#00D4FF',
    heroTag: 'Enterprise Solutions',
    overview: service.description || 'We deliver high-end enterprise solutions uniquely tailored to accelerate your fundamental operating capacities.',
    benefits: [
      { title: 'Extreme Performance', desc: 'Optimized from the ground up to render instantly.', icon: CheckCircle2 },
      { title: 'Global Scale', desc: 'Architected to handle massive concurrency effortlessly.', icon: CheckCircle2 },
      { title: 'Bulletproof Security', desc: 'Secure by default with uncompromising data encryption.', icon: CheckCircle2 }
    ],
    capabilities: service.features.length > 0 ? service.features : [
      { id: '1', title: 'Consulting', desc: 'We analyze your requirements in deep detail.' },
      { id: '2', title: 'Development', desc: 'Agile sprints leading to rapid robust deliverables.' }
    ],
    techStack: service.techStack.length > 0 ? service.techStack : ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    process: service.process.length > 0 ? service.process : [
      { step: '01', title: 'Discovery', desc: 'Initial scoping.' },
      { step: '02', title: 'Execution', desc: 'Building phase.' }
    ]
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation
      gsap.from('.sv-hero-text > *', {
        y: 50, duration: 1.2, stagger: 0.15, ease: 'expo.out', delay: 0.2
      })

      // 2. Overview Fade
      gsap.from('.sv-overview', {
        y: 40, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sv-overview', start: 'top 85%' }
      })

      // 3. Benefits staggered reveal
      gsap.from('.sv-benefit-card', {
        y: 60, rotationX: -10, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.sv-benefits-grid', start: 'top 80%' }
      })

      // 4. Capabilities Cards (Horizontal staggering)
      gsap.from('.sv-capability', {
        x: -50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sv-capabilities-grid', start: 'top 80%' }
      })

      // 5. Tech Stack floating bubbles
      gsap.from('.sv-tech-badge', {
        scale: 0.5, duration: 0.6, stagger: 0.05, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.sv-tech-container', start: 'top 85%' }
      })

      // 6. Process Timeline
      gsap.from('.sv-process-step', {
        y: 40, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.sv-process-container', start: 'top 75%' }
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden" style={{ background: 'var(--color-bg)' }}>
      
      {/* 3D WEBGL HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20">
        <ServiceHero3D primaryColor={detailedData.primaryColor} slug={service.slug} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center sv-hero-text">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border shadow-sm backdrop-blur-md" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: detailedData.primaryColor }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: detailedData.primaryColor }}>
              {detailedData.heroTag}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight mb-8 leading-[1]" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
            {service.title}
          </h1>
          
          <p className="text-xl md:text-3xl max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 relative sv-overview">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: 'var(--color-text)' }}>
            {detailedData.overview}
          </h2>
        </div>
      </section>

      {/* BENEFITS / VALUE PROPOSITION */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: detailedData.primaryColor }}>Unfair Advantages</p>
            <h2 className="text-4xl md:text-6xl font-extrabold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
              Why we lead the pack.
            </h2>
          </div>

          <div className="sv-benefits-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {detailedData.benefits.map((benefit: any, i: number) => {
              const Icon = benefit.icon
              return (
                <div key={i} className="sv-benefit-card group p-10 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border shadow-sm" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700" style={{ background: `radial-gradient(circle at center, ${detailedData.primaryColor}, transparent)` }} />
                  
                  <div className="w-16 h-16 mb-8 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ background: `${detailedData.primaryColor}15`, color: detailedData.primaryColor }}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{benefit.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES (Bento Grid Style) */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20 lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1]" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
              Core <br />
              <span className="gradient-text-hero">Capabilities.</span>
            </h2>
          </div>

          <div className="sv-capabilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {detailedData.capabilities.map((cap: any, i: number) => (
              <div key={i} className="sv-capability group p-8 lg:p-12 rounded-[2rem] flex flex-col justify-between min-h-[250px] relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span className="text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: detailedData.primaryColor }}>
                    0{cap.id}
                  </span>
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-text)' }}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{cap.title}</h3>
                  <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>{cap.desc}</p>
                </div>
                {/* Background color bleed on hover */}
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-700 pointer-events-none rounded-full" style={{ background: detailedData.accentColor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
              Execution Methodology
            </h2>
          </div>
          
          <div className="sv-process-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedData.process.map((step: any, i: number) => (
              <div key={i} className="sv-process-step relative p-8 rounded-[2rem] border" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="text-sm font-bold tracking-widest uppercase mb-10" style={{ color: detailedData.primaryColor }}>{step.step}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{step.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>

                {/* Connecting Line for LG screens */}
                {i < detailedData.process.length - 1 && (
                  <div className="hidden lg:block absolute top-[50px] -right-[15px] w-[30px] h-[2px] z-0" style={{ background: 'var(--color-border-strong)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center sv-tech-container">
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--color-text)' }}>Technology Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {detailedData.techStack.map((tech: string, i: number) => (
              <div key={i} className="sv-tech-badge px-6 py-3 rounded-full border font-bold text-sm tracking-wide shadow-sm hover:scale-110 transition-transform cursor-default" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center" style={{ background: detailedData.primaryColor }}>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white font-heading">
            Initialize the build.
          </h2>
          <p className="text-xl mb-12 text-white/80 font-medium">
            Let our architecture team design the blueprint for your next major release.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg bg-white text-black hover:scale-105 transition-transform shadow-xl">
            Schedule Architecture Review <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  )
}
