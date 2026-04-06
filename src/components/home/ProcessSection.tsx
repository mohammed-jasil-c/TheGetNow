'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discovery & Strategy', color: '#0057FF', desc: 'Deep-dive workshops to uncover business goals, technical constraints, and define the product roadmap through intensive discovery sprints.', deliverables: ['Product Roadmap', 'Technical Requirements Doc', 'Risk Assessment Report'] },
  { num: '02', title: 'Architecture & Design', color: '#7B2FFF', desc: 'Senior architects design battle-tested system architecture while UX creates high-fidelity prototypes validated with real users before code is written.', deliverables: ['System Architecture Diagram', 'High-Fidelity Prototypes', 'Design System Components'] },
  { num: '03', title: 'Engineering Sprints', color: '#10b981', desc: 'Agile 2-week sprints with daily standups, PR reviews, and demo sessions. All code is peer-reviewed and tested against comprehensive test suites.', deliverables: ['Working Software Increments', 'Sprint Demo Recordings', 'Automated Test Reports'] },
  { num: '04', title: 'QA & Security Audit', color: '#f59e0b', desc: 'Smart contracts undergo formal verification and external audits. All software is pen-tested and OWASP-hardened before any production deployment.', deliverables: ['Penetration Test Results', 'Smart Contract Audit Report', 'Performance Benchmarks'] },
  { num: '05', title: 'Launch & Scale', color: '#ef4444', desc: 'CI/CD pipelines deliver zero-downtime deployments with real-time error tracking, alerting, and 24/7 on-call SLAs post-launch.', deliverables: ['CI/CD Pipeline Configuration', '24/7 Monitoring Dashboard', 'Post-Launch Support SLA'] },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      steps.forEach((_, i) => {
        gsap.from(`.proc-row-${i}`, {
          x: 120, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: `.proc-row-${i}`, start: 'top 88%' }
        })
        gsap.from(`.proc-num-${i}`, {
          scale: 0, rotation: -90, duration: 0.6, ease: 'back.out(2)',
          scrollTrigger: { trigger: `.proc-row-${i}`, start: 'top 88%' }
        })
        if (i < steps.length - 1) {
          gsap.from(`.proc-line-${i}`, {
            scaleY: 0, transformOrigin: 'top', duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: `.proc-row-${i}`, start: 'top 80%' }
          })
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-32 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 overflow-hidden">
          <p className="section-label">How We Work</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
            Our battle-tested<br />
            <span className="gradient-text">process.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-start relative">
              {i < steps.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-px flex justify-center" style={{ zIndex: 0 }}>
                  <div className={`proc-line-${i} w-px h-full`} style={{ background: `linear-gradient(to bottom, ${step.color}60, transparent)` }} />
                </div>
              )}

              <div className={`proc-num-${i} w-20 h-20 rounded-full flex items-center justify-center shrink-0 font-black text-xl z-10 shadow-lg`}
                style={{ background: step.color + '15', border: `2px solid ${step.color}50`, color: step.color }}>
                {step.num}
              </div>

              <div className={`proc-row-${i} pb-20 flex-1`}>
                <div className="flex items-start justify-between gap-8 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl font-extrabold mb-4" style={{ color: step.color, fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                    <p className="leading-relaxed max-w-2xl text-lg mb-4" style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map(d => (
                        <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20` }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-8xl font-black select-none hidden md:block" style={{ color: step.color + '08' }}>
                    {step.num}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
