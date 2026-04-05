'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    videoId: 'JMUxmLyrhSk',  // AWS re:Invent - Cloud computing
    name: 'Sarah Chen',
    role: 'CTO, FinanceFlow',
    company: 'FinanceFlow Inc.',
    quote: 'TheGetNow transformed our legacy banking platform into a modern, AI-powered fintech solution. Their expertise in blockchain and cloud architecture is unmatched.',
  },
  {
    videoId: '5p248yoa3oE',  // Google AI talk - artificial intelligence
    name: 'Marcus Johnson',
    role: 'VP Engineering, MedTech Pro',
    company: 'MedTech Pro',
    quote: 'Working with TheGetNow was a game-changer. They delivered our healthcare AI platform 3 weeks ahead of schedule with zero critical bugs.',
  },
  {
    videoId: 'aircAruvnKk',  // Blockchain explained (Simply Explained)
    name: 'Aisha Patel',
    role: 'Founder, EduSpark',
    company: 'EduSpark',
    quote: 'From concept to 50,000 daily active users in 6 months. TheGetNow built our EdTech platform with incredible attention to UX and performance.',
  },
  {
    videoId: 'qYZF6oIZtfc',  // Google I/O - app development
    name: 'David Kim',
    role: 'Head of Product, RetailX',
    company: 'RetailX',
    quote: 'Our e-commerce conversion rate increased by 340% after TheGetNow redesigned our platform with AI-driven personalization.',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length)
    }, 10000)
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startAutoPlay])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  const handleSelect = (index: number) => {
    setActiveIndex(index)
    startAutoPlay()
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10 pointer-events-none" style={{ background: 'var(--brand-purple)' }} />

      <div ref={sectionRef} className="reveal max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Client Testimonials</p>
          <h2 className="section-title mb-4 mx-auto">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real stories from real clients who transformed their businesses with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="youtube-embed rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
              <iframe
                key={testimonials[activeIndex].videoId}
                src={`https://www.youtube.com/embed/${testimonials[activeIndex].videoId}?autoplay=0&rel=0&modestbranding=1`}
                title={`${testimonials[activeIndex].name} testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Progress bar */}
            <div className="mt-4 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="flex-1 h-1 rounded-full overflow-hidden cursor-pointer"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${i === activeIndex ? 'w-full' : 'w-0'}`}
                    style={{ background: 'var(--gradient-main)' }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => handleSelect(i)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  i === activeIndex ? 'glass-card !transform-none' : 'hover:bg-[var(--bg-hover)]'
                }`}
                style={i === activeIndex ? { borderColor: 'var(--brand-blue)', boxShadow: 'none', transform: 'none' } : {}}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm" style={{ background: i === activeIndex ? 'var(--gradient-main)' : 'var(--bg-elevated)' }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{t.name}</h4>
                      {i === activeIndex && (
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                    {i === activeIndex && (
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
