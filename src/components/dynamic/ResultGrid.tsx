'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ResultStat {
  label: string
  value: string
  suffix: string
}

interface ResultGridProps {
  stats: ResultStat[]
}

export default function ResultGrid({ stats }: ResultGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.result-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.result-grid',
          start: 'top 80%',
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-[var(--bg-elevated)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="section-label inline-block">The Impact</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            Real metrics. <span className="gradient-text">Real business value.</span>
          </h2>
        </div>

        <div className="result-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="result-card enterprise-card p-10 rounded-3xl text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[var(--brand-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <p className="text-6xl font-black font-accent mb-3 gradient-text">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </p>
              </div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
