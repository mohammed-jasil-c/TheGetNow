'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare, faBolt, faGlobe, faRocket, faShieldHalved, faUsers, faClock } from '@fortawesome/free-solid-svg-icons'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

function getIcon(iconName: string) {
  const icon = (solidIcons as Record<string, unknown>)[iconName]
  return icon || solidIcons.faGear
}

const whyChooseUs = [
  { icon: faGlobe, title: 'Global Scale', desc: 'Deployed across 45+ countries with multi-region infrastructure and data sovereignty compliance.' },
  { icon: faShieldHalved, title: 'Enterprise Security', desc: 'SOC 2 Type II, HIPAA, PCI-DSS certified — security is architected into every layer.' },
  { icon: faRocket, title: 'Rapid Delivery', desc: 'From discovery to MVP in 8 weeks. Our sprint-based methodology eliminates waste.' },
  { icon: faUsers, title: 'Domain Experts', desc: 'Industry-specialized engineering teams who speak your language and understand your challenges.' },
  { icon: faBolt, title: 'Performance', desc: '99.99% uptime SLA with sub-100ms API response times under enterprise-scale load.' },
  { icon: faClock, title: '24/7 Support', desc: 'Follow-the-sun engineering support with dedicated account managers and SLA-backed response times.' },
]

export default function IndustriesShowcase({ industries }: { industries: Industry[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text
      gsap.from('.ind-main-label', { y: 20, duration: 0.8, ease: 'power3.out', delay: 0.1 })
      gsap.from('.ind-main-title', { y: 40, duration: 1.2, ease: 'power4.out', delay: 0.2 })
      gsap.from('.ind-main-desc', { y: 25, duration: 1, ease: 'power3.out', delay: 0.4 })
      gsap.from('.ind-main-actions', { y: 20, duration: 0.8, ease: 'power3.out', delay: 0.55 })

      // Showcase cards
      gsap.from('.ind-showcase-card', {
        y: 80, duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-showcase-grid', start: 'top 80%' },
      })

      // Why choose us
      gsap.from('.ind-why-card', {
        y: 50, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.ind-why-grid', start: 'top 80%' },
      })

      // Stats ticker
      gsap.from('.ind-ticker-item', {
        x: -30, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.ind-ticker', start: 'top 85%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: 'var(--gradient-primary)' }} />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[80px]" style={{ background: 'var(--color-accent)' }} />
          <div className="absolute inset-0 dot-pattern" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl">
            <span className="ind-main-label section-label mb-6 block">Industry Intelligence</span>
            <h1 className="ind-main-title text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8 font-heading" style={{ color: 'var(--color-text)' }}>
              Purpose-built solutions for{' '}
              <span className="gradient-text">every vertical.</span>
            </h1>
            <p className="ind-main-desc text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: 'var(--color-text-secondary)' }}>
              We don&apos;t build generic software. Every platform we architect is engineered with deep domain expertise, regulatory compliance, and industry-specific UX patterns that deliver measurable business outcomes.
            </p>
            <div className="ind-main-actions flex flex-wrap gap-4">
              <Link href="/contact" className="glow-button">
                Start a Project <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/portfolio" className="outline-button">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS TICKER ═══ */}
      <section className="py-10 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="ind-ticker max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-between gap-8">
          {[
            { val: '6+', label: 'Industry Verticals' },
            { val: '200+', label: 'Projects Delivered' },
            { val: '45', label: 'Countries Served' },
            { val: '$65B+', label: 'Client Revenue Impact' },
          ].map((item, i) => (
            <div key={i} className="ind-ticker-item flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>{item.val}</span>
              <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--color-muted)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INDUSTRY SHOWCASE ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="section-label mb-4 block">Our Verticals</span>
              <h2 className="section-title">Explore our industry expertise</h2>
            </div>
            <p className="text-sm max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
              Each vertical is served by a dedicated team of domain experts, architects, and engineers.
            </p>
          </div>

          <div className="ind-showcase-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="ind-showcase-card group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-card)' }}
              >
                {/* Image with gradient overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ind.darkAccent}E6, ${ind.accentColor}40, transparent)` }} />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <FontAwesomeIcon icon={getIcon(ind.icon) as any} className="w-5 h-5 text-white" />
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    {ind.stats.slice(0, 2).map((stat, si) => (
                      <div key={si} className="text-white">
                        <p className="text-lg font-extrabold leading-none">{stat.value}{stat.suffix}</p>
                        <p className="text-[9px] uppercase tracking-wider opacity-70 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-heading transition-colors duration-300 group-hover:text-[var(--color-primary)]" style={{ color: 'var(--color-text)' }}>
                    {ind.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                    {ind.subtitle}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ind.techStack.slice(0, 4).map((tech, ti) => (
                      <span key={ti} className="pill-badge text-[9px]">{tech}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: ind.accentColor }}>
                    Explore Solutions
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="section-label mb-4 block">Our Advantages</span>
            <h2 className="section-title mb-6">Why leading enterprises choose us</h2>
            <p className="section-subtitle mx-auto">
              Enterprise-grade engineering with startup-speed execution.
            </p>
          </div>

          <div className="ind-why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="ind-why-card group p-8 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'rgba(var(--color-primary-rgb), 0.1)', color: 'var(--color-primary)' }}>
                  <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-heading" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                <p className="text-sm leading-[1.75]" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight font-heading" style={{ color: 'var(--color-text)' }}>
            Don&apos;t see your industry?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            We&apos;ve delivered solutions across 30+ verticals. Our engineering teams adapt to any domain—let&apos;s discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="glow-button justify-center min-w-[200px]">
              Start a Consultation <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/portfolio" className="outline-button justify-center min-w-[200px]">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
