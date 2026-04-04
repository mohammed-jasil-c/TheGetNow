'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Filter } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Mobile', 'Web', 'Blockchain', 'AI/ML', 'Design']

const projects = [
  { title: 'EQL Trading Platform', category: 'Blockchain', result: '$500M+ Daily Volume', desc: 'High-frequency crypto trading platform with real-time order books and institutional-grade matching engine.', img: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=800&auto=format&fit=crop', tags: ['Solidity', 'Rust', 'React'] },
  { title: 'MedConnect Telehealth', category: 'Mobile', result: '2M+ Patient Sessions', desc: 'HIPAA-compliant telemedicine platform with WebRTC video consultations and AI-powered triage.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop', tags: ['Flutter', 'Node.js', 'AWS'] },
  { title: 'FinanceFlow Banking', category: 'Web', result: '$1.2B Processed Daily', desc: 'Digital banking mobile app for one of the largest banks in UAE, processing 2M+ daily transactions.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop', tags: ['React', 'Go', 'PostgreSQL'] },
  { title: 'RetailMax AI Engine', category: 'AI/ML', result: '40% Conversion Boost', desc: 'Predictive analytics and personalization engine powering recommendations for 50M+ monthly shoppers.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', tags: ['Python', 'TensorFlow', 'GCP'] },
  { title: 'LogiTrac Fleet OS', category: 'Mobile', result: '10K+ Vehicles Tracked', desc: 'Real-time fleet management system with IoT telemetry, route optimization, and driver analytics.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', tags: ['React Native', 'Node.js', 'IoT'] },
  { title: 'DecentraLend Protocol', category: 'Blockchain', result: '$200M TVL', desc: 'Cross-chain DeFi lending protocol with liquidation bots and institutional vault architecture.', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop', tags: ['Solidity', 'Rust', 'The Graph'] },
  { title: 'EduRev Learning App', category: 'Mobile', result: '14M+ Learners', desc: 'Netflix-like e-learning platform with gamified courses, live classes, and progress tracking.', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop', tags: ['Flutter', 'Firebase', 'Dart'] },
  { title: 'CloudScale Dashboard', category: 'Web', result: '60% Cost Reduction', desc: 'Multi-cloud infrastructure management platform with automated cost optimization and alerting.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', tags: ['Next.js', 'Go', 'Kubernetes'] },
  { title: 'Artistry NFT Market', category: 'Design', result: '500K+ NFTs Minted', desc: 'Premium NFT marketplace with lazy minting, royalty enforcement, and curated artist galleries.', img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop', tags: ['React', 'Solidity', 'IPFS'] },
  { title: 'VisionAI Analytics', category: 'AI/ML', result: '99.2% Accuracy', desc: 'Computer vision pipeline for manufacturing quality control, processing 10K+ images per hour.', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop', tags: ['PyTorch', 'Python', 'CUDA'] },
  { title: 'SwiftDeliver Logistics', category: 'Mobile', result: '40% Faster Delivery', desc: 'Last-mile delivery platform with AI-driven routing serving 12,000+ restaurants across 3 countries.', img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop', tags: ['Kotlin', 'Swift', 'Node.js'] },
  { title: 'PropTech VR Tours', category: 'Design', result: '3x Conversion Rate', desc: 'Virtual reality property tour platform with photorealistic 3D walkthroughs and spatial audio.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', tags: ['Unity', 'WebXR', 'Three.js'] },
]

const stats = [
  { val: '1000+', label: 'Projects Delivered' },
  { val: '$3.2B+', label: 'Revenue Generated' },
  { val: '50+', label: 'Countries' },
  { val: '98%', label: 'Satisfaction' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.port-hero', { y: 60, opacity: 0, duration: 1, ease: 'power4.out' })
      gsap.from('.port-stat', { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.port-stats', start: 'top 85%' } })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 port-hero">
          <p className="section-label">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Projects that <span className="gradient-text-hero">define industries.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From 3-person startups to Fortune 500 enterprises — explore how we've delivered 1000+ digital products across 50+ countries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="port-stats pb-16 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="port-stat text-center">
              <p className="text-4xl font-black font-accent gradient-text mb-1">{s.val}</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-bold transition-all"
                style={{
                  background: activeCategory === cat ? 'var(--gradient-hero)' : 'var(--bg-card)',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-subtle)'}`,
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div key={i} className="enterprise-card rounded-3xl overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="pill-badge text-xs">{p.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{p.title}</p>
                  <p className="text-sm font-bold mb-3 gradient-text">{p.result}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-md" style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)' }}>{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Ready to start <span className="gradient-text">your project?</span>
          </h2>
          <Link href="/contact" className="glow-button text-base">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
