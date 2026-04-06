'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryProcess({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.ind-proc-header > *', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-proc-header', start: 'top 85%' },
      })

      // Timeline line grows
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, duration: 1.5, ease: 'power2.inOut',
            scrollTrigger: { trigger: '.ind-proc-timeline', start: 'top 75%', end: 'bottom 50%', scrub: 1 },
          }
        )
      }

      // Steps stagger in
      gsap.from('.ind-proc-step', {
        y: 50, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-proc-timeline', start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      {/* Background subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${industry.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${industry.accentColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="ind-proc-header text-center mb-20 max-w-2xl mx-auto">
          <span className="section-label mb-4 block" style={{ color: industry.accentColor }}>Our Process</span>
          <h2 className="section-title mb-6">How we deliver {industry.title.split('&')[0].trim()} solutions</h2>
          <p className="section-subtitle mx-auto">
            A proven methodology refined across hundreds of enterprise deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="ind-proc-timeline relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px hidden md:block">
            <div
              ref={lineRef}
              className="w-full h-full origin-top"
              style={{ background: `linear-gradient(to bottom, ${industry.accentColor}, ${industry.darkAccent})` }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {industry.processSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`ind-proc-step relative flex flex-col md:flex-row items-start md:items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div
                      className="inline-block p-6 md:p-8 rounded-2xl border transition-all duration-500 hover:shadow-xl"
                      style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                    >
                      <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: 'var(--color-text)' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step number circle */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10 hidden md:flex">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-xl text-white shadow-xl transition-transform duration-300 hover:scale-110"
                      style={{
                        background: industry.gradient,
                        boxShadow: `0 8px 32px ${industry.accentColor}30`,
                      }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
