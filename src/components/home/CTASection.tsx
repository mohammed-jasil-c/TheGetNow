'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const awards = [
  { emoji: '🏆', award: 'Top App Developer', org: 'Clutch Global 2024' },
  { emoji: '🥇', award: 'Best Web3 Agency', org: 'Deloitte 2024' },
  { emoji: '⚡', award: 'Fastest Growing Firm', org: 'Inc. 5000' },
  { emoji: '🌟', award: 'Top AI Company', org: 'G2 Enterprise' },
  { emoji: '🎖', award: 'Diamond Partner', org: 'AWS & Google' },
  { emoji: '💎', award: 'Top Mobile Dev', org: 'GoodFirms' },
]

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.award-badge', {
        scale: 0, rotation: 10, opacity: 0, duration: 0.6,
        stagger: 0.08, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.awards-grid', start: 'top 85%' }
      })
      gsap.from('.cta-headline', {
        y: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.cta-headline', start: 'top 85%' }
      })
      gsap.from('.cta-btns', {
        y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-btns', start: 'top 90%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Awards Strip */}
      <div className="py-24 px-6 md:px-16 lg:px-32" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto">
          <p className="section-label text-center mb-14">Awards & Recognition</p>
          <div className="awards-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {awards.map((a) => (
              <div key={a.award} className="award-badge enterprise-card flex flex-col items-center text-center p-6 rounded-2xl">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <p className="font-bold text-sm leading-tight mb-1" style={{ color: 'var(--text-heading)' }}>{a.award}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative min-h-[70vh] flex items-center justify-center py-32 overflow-hidden" style={{ background: 'var(--bg-page)' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,87,255,0.12), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 40% at 30% 60%, rgba(123,47,255,0.08), transparent)' }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--dot-grid-color) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2 className="cta-headline text-5xl md:text-8xl font-extrabold tracking-tight leading-none mb-8" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Ready to build<br />
            <span className="gradient-text-hero">something extraordinary?</span>
          </h2>
          <p className="text-xl max-w-2xl mb-12" style={{ color: 'var(--text-secondary)' }}>
            Book a free 30-minute strategy call. Our solution architects will analyze your requirements and outline a clear path to production.
          </p>
          <div className="cta-btns flex flex-wrap items-center justify-center gap-6">
            <Link href="/contact" className="glow-button text-lg px-10 py-5">
              Schedule a Free Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="outline-button text-lg px-10 py-5">
              View Case Studies <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
