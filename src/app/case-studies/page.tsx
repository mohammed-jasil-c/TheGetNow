'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Clock, Zap } from 'lucide-react'
import { gsap } from 'gsap'

const caseStudies = [
  {
    brand: 'FinanceFlow', industry: 'FinTech', color: '#10b981',
    challenge: 'Emirates-based bank needed to modernize their legacy banking system into a mobile-first digital banking platform.',
    solution: 'We built a real-time transaction processing engine with React Native frontend and Go microservices, deployed on AWS with multi-region failover.',
    results: [
      { metric: '$1.2B', label: 'Processed Daily' },
      { metric: '2M+', label: 'Daily Transactions' },
      { metric: '4.8★', label: 'App Store Rating' },
      { metric: '99.99%', label: 'Uptime SLA' },
    ],
    tags: ['React Native', 'Golang', 'AWS', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    brand: 'DecentraLend', industry: 'DeFi / Blockchain', color: '#7B2FFF',
    challenge: 'Build a cross-chain DeFi lending protocol supporting Ethereum, Polygon, and Arbitrum with institutional-grade security.',
    solution: 'Architected a protocol with formally verified Solidity smart contracts, cross-chain bridge integrations, and automated liquidation bots.',
    results: [
      { metric: '$200M', label: 'Total Value Locked' },
      { metric: '0', label: 'Security Incidents' },
      { metric: '3', label: 'Blockchain Networks' },
      { metric: '10K+', label: 'Active Wallets' },
    ],
    tags: ['Solidity', 'Rust', 'The Graph', 'Chainlink'],
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    brand: 'MedConnect', industry: 'HealthTech', color: '#0057FF',
    challenge: 'Create a HIPAA-compliant telemedicine platform for a hospital network serving 500+ doctors and 2M+ patients.',
    solution: 'Built on Flutter with encrypted WebRTC video consultations, AI-powered triage, and EHR integration via HL7 FHIR standard.',
    results: [
      { metric: '2M+', label: 'Patient Sessions' },
      { metric: '500+', label: 'Active Physicians' },
      { metric: '40%', label: 'Faster Diagnosis' },
      { metric: 'HIPAA', label: 'Fully Compliant' },
    ],
    tags: ['Flutter', 'Node.js', 'WebRTC', 'AWS'],
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    brand: 'RetailMax AI', industry: 'Retail / AI', color: '#f59e0b',
    challenge: 'Build a predictive analytics engine for a 50M+ MAU e-commerce platform to personalize product recommendations.',
    solution: 'Developed real-time recommendation models using collaborative filtering and deep learning, deployed on GCP Vertex AI.',
    results: [
      { metric: '40%', label: 'Conversion Boost' },
      { metric: '50M+', label: 'Monthly Users' },
      { metric: '3x', label: 'Revenue per Session' },
      { metric: '<50ms', label: 'Inference Latency' },
    ],
    tags: ['Python', 'TensorFlow', 'GCP', 'BigQuery'],
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
  },
  {
    brand: 'EduRev', industry: 'EdTech', color: '#8b5cf6',
    challenge: 'Transform a basic e-learning website into a Netflix-style learning platform with gamification and live classes.',
    solution: 'Built with Flutter for cross-platform mobile, Firebase for real-time sync, and a custom content management system for course creation.',
    results: [
      { metric: '14M+', label: 'Active Learners' },
      { metric: '50K+', label: 'Courses' },
      { metric: '4.7★', label: 'Play Store' },
      { metric: '3x', label: 'Engagement' },
    ],
    tags: ['Flutter', 'Firebase', 'Node.js', 'GCP'],
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    brand: 'SwiftDeliver', industry: 'Logistics', color: '#ef4444',
    challenge: 'Build an AI-driven last-mile delivery platform for a food delivery network operating across 12,000+ restaurants.',
    solution: 'Developed ML-based route optimization, real-time driver tracking, and predictive order preparation timing algorithms.',
    results: [
      { metric: '40%', label: 'Faster Delivery' },
      { metric: '12K+', label: 'Partner Restaurants' },
      { metric: '3', label: 'Countries Active' },
      { metric: '60%', label: 'Cost Reduction' },
    ],
    tags: ['Kotlin', 'Swift', 'Node.js', 'ML'],
    img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cs-hero', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 cs-hero">
          <p className="section-label">Case Studies</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Results that <span className="gradient-text-hero">speak volumes.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Dive deep into how we've delivered measurable business impact for companies across every industry.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="enterprise-card rounded-3xl overflow-hidden">
              {/* Full width image */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img src={cs.img} alt={cs.brand} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${cs.color}25`, color: cs.color }}>{cs.industry}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3" style={{ fontFamily: 'var(--font-heading)' }}>{cs.brand}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left: Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: cs.color }}>The Challenge</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: cs.color }}>Our Solution</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cs.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.tags.map(t => (
                        <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: `${cs.color}10`, color: cs.color, border: `1px solid ${cs.color}25` }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="grid grid-cols-2 gap-4">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="enterprise-card rounded-xl p-5 text-center">
                        <p className="text-2xl font-black font-accent mb-1" style={{ color: cs.color }}>{r.metric}</p>
                        <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Your project could be <span className="gradient-text">next.</span>
          </h2>
          <Link href="/contact" className="glow-button text-base">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
