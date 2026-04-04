'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    { number: 1000, suffix: '+', label: 'Projects Delivered', prefix: '' },
    { number: 50, suffix: 'M+', label: 'Active Users', prefix: '' },
    { number: 3.2, suffix: 'B+', label: 'Revenue Unlocked', prefix: '$' },
    { number: 300, suffix: '+', label: 'Expert Engineers', prefix: '' },
    { number: 50, suffix: '+', label: 'Countries Served', prefix: '' },
    { number: 98, suffix: '%', label: 'Client Retention', prefix: '' },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stats-headline', {
        x: -80, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })

      const statEls = sectionRef.current?.querySelectorAll('.stat-num')
      statEls?.forEach((el, i) => {
        const target = parseFloat(el.getAttribute('data-val') || '0')
        const isFloat = target % 1 !== 0
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          delay: i * 0.15,
          ease: 'power2.out',
          snap: { textContent: isFloat ? 0.1 : 1 },
          onUpdate() {
            const v = parseFloat((el as HTMLElement).textContent || '0')
            ;(el as HTMLElement).textContent = isFloat ? v.toFixed(1) : Math.floor(v).toString()
          },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reset' }
        })

        gsap.from(el.closest('.stat-card')!, {
          rotateY: 90, opacity: 0, duration: 0.8, delay: i * 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, var(--stripe-color) 0px, var(--stripe-color) 1px, transparent 1px, transparent 60px)`
      }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <h2 className="stats-headline text-3xl md:text-4xl font-extrabold mb-16 tracking-tight" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
          Numbers that define our <span className="gradient-text">track record.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-card enterprise-card rounded-2xl p-6 flex flex-col items-start gap-2" style={{ perspective: '600px' }}>
              <p className="text-3xl md:text-4xl font-black gradient-text font-accent tabular-nums">
                {s.prefix}
                <span className="stat-num" data-val={s.number}>0</span>
                {s.suffix}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
