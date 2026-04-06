'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({ value, suffix, triggered }: { value: string; suffix?: string; triggered: boolean }) {
  const [displayVal, setDisplayVal] = useState('0')
  const numericValue = parseFloat(value)

  useEffect(() => {
    if (!triggered) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: numericValue,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
        if (numericValue % 1 !== 0) {
          setDisplayVal(obj.val.toFixed(1))
        } else {
          setDisplayVal(Math.floor(obj.val).toString())
        }
      },
    })
  }, [triggered, numericValue])

  return (
    <span className="tabular-nums">
      {triggered ? displayVal : '0'}{suffix || ''}
    </span>
  )
}

export default function IndustryStats({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => setTriggered(true),
      })

      gsap.from('.ind-stat-card', {
        y: 40, duration: 0.8, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.ind-stats-grid', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Full-width accent background */}
      <div className="absolute inset-0" style={{ background: industry.gradient, opacity: 0.95 }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Impact By the Numbers
          </h2>
        </div>
        <div className="ind-stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          {industry.stats.map((stat, i) => (
            <div
              key={i}
              className="ind-stat-card text-center p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} triggered={triggered} />
              </p>
              <p className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
