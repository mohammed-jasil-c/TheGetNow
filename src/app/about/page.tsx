'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaArrowRight, FaLinkedinIn, FaBullseye, FaGlobe } from 'react-icons/fa6'
import { useCountUp } from '@/hooks/useCountUp'
import { TEAM, TIMELINE, STATS } from '@/data/team'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

function StatCounter({ value, suffix, label, prefix }: { value: number; suffix: string; label: string; prefix?: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div className="text-center">
      <p className="text-4xl font-black gradient-text mb-1 font-heading">
        <span ref={ref}>{prefix || ''}{count.toLocaleString()}{suffix}</span>
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>{label}</p>
    </div>
  )
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
      })
      const line = timelineRef.current!.querySelector('.timeline-line')
      if (line) {
        gsap.from(line, {
          scaleY: 0, transformOrigin: 'top', duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', end: 'bottom 60%', scrub: 1 },
        })
      }
    }, timelineRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>

      {/* Split-Screen Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="relative hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="TheGetNow team collaboration" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 70%, var(--color-bg) 100%)' }} />
        </div>
        <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
          <div className="max-w-lg">
            <p className="section-label mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
              Engineering the{' '}
              <span className="gradient-text">future, today.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              300+ engineers. 50+ countries. 1000+ projects. We are the agency behind the most ambitious digital products on the planet.
            </p>
            <Link href="/contact" className="btn-primary">
              Work With Us <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <ScrollReveal>
        <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)' }}>
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(s => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} prefix={s.prefix} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Mission / Vision — Asymmetric */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 enterprise-card rounded-3xl p-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,87,255,0.12)' }}>
                <FaBullseye className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl font-extrabold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>Our Mission</h2>
              <p className="leading-relaxed text-base" style={{ color: 'var(--color-text-secondary)' }}>
                To empower businesses globally through bleeding-edge technology, unparalleled design, and scalable execution. We solve complex problems by building intuitive, high-performance digital ecosystems that serve millions of users worldwide.
              </p>
            </div>
            <div className="lg:col-span-2 enterprise-card rounded-3xl p-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(123,47,255,0.12)' }}>
                <FaGlobe className="w-7 h-7" style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h2 className="text-2xl font-extrabold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>Our Vision</h2>
              <p className="leading-relaxed text-base" style={{ color: 'var(--color-text-secondary)' }}>
                To be the definitive vanguard of digital transformation — where every product we ship sets the new industry benchmark for quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid with Hover Reveal */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Leadership</p>
            <h2 className="section-title mt-3">Meet our <span className="gradient-text">leadership team.</span></h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(t => (
              <div key={t.name} className="enterprise-card rounded-3xl overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 25vw" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm px-6 text-center leading-relaxed">{t.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>{t.name}</h3>
                  <p className="text-sm font-semibold mb-3 gradient-text">{t.role}</p>
                  <a href={t.linkedin} className="text-xs font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    <FaLinkedinIn className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline with GSAP scroll animation */}
      <section className="py-24" ref={timelineRef}>
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title mt-3">From 3 engineers to <span className="gradient-text">global impact.</span></h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            <div className="timeline-line absolute left-[23px] top-0 bottom-0 w-px" style={{ background: 'var(--color-primary)' }} />
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="timeline-item flex gap-6 relative pb-12 last:pb-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-black z-10" style={{ background: 'rgba(0,87,255,0.12)', border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                  {t.year.slice(-2)}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>{t.year}</p>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
            Ready to build <span className="gradient-text">together?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Transform your business and elevate your digital experience with TheGetNow.
          </p>
          <Link href="/contact" className="glow-button text-base">
            Talk to an Expert <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
