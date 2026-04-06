'use client'

import { useEffect, useRef } from 'react'

const capabilities = [
  {
    number: '01',
    label: 'ARCHITECTURE',
    title: 'Agentic Workflow Automation',
    description: 'We deploy autonomous multi-agent frameworks that perform complex reasoning tasks, moving beyond static automation to active problem-solving at enterprise scale.',
    tags: ['Neural Orchestration', 'Self-Learning AI'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #0057FF22, #7B2FFF11)',
    accent: '#0057FF',
  },
  {
    number: '02',
    label: 'INFRASTRUCTURE',
    title: 'Enterprise-Controlled Generative AI',
    description: 'End-to-end RAG pipelines and custom LLM fine-tuning designed to securely ingest and query proprietary corporate knowledge bases with full compliance.',
    tags: ['Vector DB', 'Private LLM'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #7B2FFF22, #00D4FF11)',
    accent: '#7B2FFF',
  },
  {
    number: '03',
    label: 'VISION',
    title: 'Resilient Data Foundations',
    description: 'Computer-vision systems optimized for real-time inference, enabling high-speed quality control and spatial intelligence at scale across manufacturing and logistics.',
    tags: ['Edge Computing', 'Object Detection'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #00D4FF22, #10B98111)',
    accent: '#00D4FF',
  },
  {
    number: '04',
    label: 'STRATEGY',
    title: 'Architecting Enterprise Intelligence',
    description: 'Full-cycle development of AI-first software products, ensuring deep integration between model logic and user-centric interfaces for maximum business impact.',
    tags: ['MLOps', 'System Design'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #F59E0B22, #FF6B3511)',
    accent: '#F59E0B',
  },
]

export default function EnterpriseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.cap-card')
            cards.forEach((card, i) => {
              const htmlCard = card as HTMLElement
              setTimeout(() => {
                htmlCard.style.opacity = '1'
                htmlCard.style.transform = 'translateY(0)'
              }, i * 150)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg-page)' }}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.08), transparent 70%)' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-3">TheGetNow | Intelligence Group</p>
          <h2 className="section-title mb-4">
            Scalable <span className="gradient-text">AI</span> for the{' '}
            <br className="hidden sm:block" />
            Modern <span className="gradient-text">Enterprise.</span>
          </h2>
          <p className="section-subtitle">
            Engineered to solve high-complexity operational hurdles through neural modeling and proprietary data architectures.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="cap-card glass-card p-8 sm:p-10 rounded-2xl relative group overflow-hidden"
              style={{ transform: 'translateY(30px)', transition: 'all 0.6s ease' }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: cap.gradient }} />
              
              <div className="relative z-10">
                {/* Number & Label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-bold" style={{ color: cap.accent }}>{cap.number}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-dim)' }}>&frasl; {cap.label}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${cap.accent}15`, color: cap.accent }}>
                  {cap.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {cap.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                      style={{ background: `${cap.accent}10`, color: cap.accent, border: `1px solid ${cap.accent}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <div className="glass-card rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full max-w-2xl" style={{ background: 'var(--bg-card)' }}>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Ready to discuss your technical roadmap?
            </p>
            <a href="/contact" className="btn-primary !py-2.5 !px-6 !text-sm shrink-0">
              Book Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
