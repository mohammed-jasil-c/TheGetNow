'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

export default function IndustryCTA({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ind-cta-content > *', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-cta-block', start: 'top 85%' },
      })

      // Floating shapes
      gsap.to('.ind-cta-shape-1', { y: -20, x: 15, rotation: 10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.ind-cta-shape-2', { y: 15, x: -10, rotation: -8, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="ind-cta-block relative rounded-[2rem] md:rounded-[3rem] p-12 md:p-20 overflow-hidden"
          style={{ background: industry.gradient }}
        >
          {/* Floating shapes */}
          <div className="ind-cta-shape-1 absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/[0.07] blur-xl pointer-events-none" />
          <div className="ind-cta-shape-2 absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.05] blur-xl pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

          <div className="ind-cta-content relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
              <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl font-heading leading-[1.1]">
              Ready to transform your {industry.title.split('&')[0].trim().toLowerCase()} operations?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Our {industry.title.toLowerCase()} engineering team is ready to architect your next-generation platform. Let&apos;s discuss your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white font-bold text-base transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]"
                style={{ color: industry.darkAccent }}
              >
                Schedule a Consultation <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/10 text-white font-bold text-base border border-white/30 transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center pt-6">
              {industry.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/10 text-white/80 border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
