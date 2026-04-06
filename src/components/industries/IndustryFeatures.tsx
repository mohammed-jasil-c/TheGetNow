'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

function getIcon(iconName: string) {
  const icon = (solidIcons as Record<string, unknown>)[iconName]
  return icon || solidIcons.faGear
}

export default function IndustryFeatures({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ind-feat-header > *', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-feat-header', start: 'top 85%' },
      })

      gsap.from('.ind-feat-card', {
        y: 60, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.ind-feat-grid', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="ind-feat-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="section-label mb-4 block" style={{ color: industry.accentColor }}>Core Capabilities</span>
            <h2 className="section-title">
              Engineered for <span style={{ color: industry.accentColor }}>{industry.title.split('&')[0].trim()}</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
            Every capability is purpose-built for the unique demands of the {industry.title.toLowerCase()} industry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="ind-feat-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.features.map((feature, i) => {
            const isLarge = i < 2
            return (
              <div
                key={i}
                className={`ind-feat-card industry-card-3d group relative rounded-2xl p-8 ${isLarge ? 'lg:col-span-1 lg:row-span-1' : ''} border transition-all duration-500 hover:shadow-2xl overflow-hidden`}
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${industry.accentColor}08 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${industry.accentColor}12`, color: industry.accentColor }}
                  >
                    <FontAwesomeIcon icon={getIcon(feature.icon) as any} className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 font-heading transition-colors duration-300" style={{ color: 'var(--color-text)' }}>
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: industry.gradient }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
