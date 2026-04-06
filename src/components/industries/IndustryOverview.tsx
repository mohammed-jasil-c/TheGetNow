'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryOverview({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ind-overview-heading', {
        y: 40, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-overview-heading', start: 'top 85%' },
      })
      gsap.from('.ind-overview-text', {
        y: 30, duration: 1, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.ind-overview-text', start: 'top 85%' },
      })
      gsap.from('.ind-challenge-card', {
        y: 50, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-challenges-grid', start: 'top 80%' },
      })
      gsap.from('.ind-benefit-item', {
        x: -20, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.ind-benefits-list', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label mb-4 block" style={{ color: industry.accentColor }}>Industry Deep Dive</span>
          <h2 className="ind-overview-heading section-title mb-8">
            Understanding the <span style={{ color: industry.accentColor }}>{industry.title}</span> landscape
          </h2>
          <p className="ind-overview-text text-base md:text-lg leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
            {industry.description}
          </p>
        </div>

        {/* Challenges → Solutions Grid */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 font-heading" style={{ color: 'var(--color-text)' }}>
            Challenges We Solve
          </h3>
          <div className="ind-challenges-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((item, i) => (
              <div
                key={i}
                className="ind-challenge-card rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-xl group"
                style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
              >
                {/* Challenge */}
                <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-500/10">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2 block">Challenge</span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>{item.challenge}</p>
                    </div>
                  </div>
                </div>
                {/* Solution */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${industry.accentColor}15` }}>
                      <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4" style={{ color: industry.accentColor }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: industry.accentColor }}>Our Solution</span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>
              Why leading companies choose us
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              Our {industry.title.toLowerCase()} solutions are engineered with enterprise-grade reliability, security, and performance — backed by measurable outcomes.
            </p>
          </div>
          <div className="ind-benefits-list space-y-4">
            {industry.benefits.map((benefit, i) => (
              <div
                key={i}
                className="ind-benefit-item flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:border-transparent hover:shadow-lg"
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${industry.accentColor}15` }}
                >
                  <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5" style={{ color: industry.accentColor }} />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
