'use client'

import { FaStar } from 'react-icons/fa6'
import ScrollReveal from '@/components/animations/ScrollReveal'

const testimonials = [
  {
    quote: 'TheGetNow transformed our legacy banking system into a modern, API-first platform in just 6 months. Their engineering quality is world-class.',
    author: 'David Kim',
    role: 'CTO',
    company: 'FinoVa Financial',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote: 'The AI recommendation engine they built increased our conversion rate by 35%. Their team genuinely cares about business outcomes, not just writing code.',
    author: 'Emma Rodriguez',
    role: 'VP Product',
    company: 'RetailX Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote: 'From concept to App Store in 4 months. The Flutter app they delivered is beautiful, performant, and our users love it. Already planning v2.',
    author: 'Michael Chen',
    role: 'Founder',
    company: 'MediSync Health',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote: 'Their blockchain team secured $200M+ in TVL for our DeFi protocol. Gas optimization was 60% better than our previous auditor estimated.',
    author: 'Sarah Walsh',
    role: 'CEO',
    company: 'DefiChain Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-4">What Clients Say</p>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">innovators.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 pb-4 snap-x snap-mandatory">
        <div className="shrink-0 w-4 lg:w-[calc((100vw-1400px)/2)]" />
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="enterprise-card rounded-2xl p-8 min-w-[340px] sm:min-w-[400px] max-w-[440px] flex flex-col snap-center shrink-0"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <FaStar key={j} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm leading-relaxed mb-8 flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{t.author}</p>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{t.role}, {t.company}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-4 lg:w-[calc((100vw-1400px)/2)]" />
      </div>
    </section>
  )
}
