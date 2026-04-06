'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryTestimonial({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ind-test-box', {
        y: 60, scale: 0.96, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-test-section', start: 'top 80%' },
      })
      gsap.from('.ind-test-meta', {
        y: 20, duration: 0.8, ease: 'power2.out', delay: 0.4,
        scrollTrigger: { trigger: '.ind-test-section', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="ind-test-section py-24 md:py-32" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label block" style={{ color: industry.accentColor }}>Client Success</span>
        </div>

        <div
          className="ind-test-box relative p-10 md:p-16 rounded-3xl border overflow-hidden"
          style={{
            background: 'var(--color-card)',
            borderColor: 'var(--color-border)',
          }}
        >
          {/* Decorative quote */}
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute top-8 right-10 w-20 h-20 opacity-[0.05]"
            style={{ color: industry.accentColor }}
          />

          {/* Accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
            style={{ background: industry.gradient }}
          />

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight mb-10 font-heading" style={{ color: 'var(--color-text)' }}>
            &ldquo;{industry.caseStudy.result}&rdquo;
          </blockquote>

          <div className="ind-test-meta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>{industry.caseStudy.client}</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-muted)' }}>Featured Case Study</p>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: `${industry.accentColor}10` }}>
              <p className="text-2xl md:text-3xl font-extrabold" style={{ color: industry.accentColor }}>
                {industry.caseStudy.metric}
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--color-muted)' }}>
                {industry.caseStudy.metricLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
