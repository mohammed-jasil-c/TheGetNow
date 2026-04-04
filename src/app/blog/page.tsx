'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, User, Search } from 'lucide-react'
import { gsap } from 'gsap'

const blogCategories = ['All', 'Engineering', 'AI & ML', 'Blockchain', 'Design', 'Business']

const articles = [
  { title: 'Building Agentic AI Systems That Actually Work in Production', category: 'AI & ML', readTime: '12 min', author: 'Dr. Sarah Chen', avatar: 'https://i.pravatar.cc/60?img=5', excerpt: 'A deep dive into multi-agent orchestration, tool-use patterns, and the architectural decisions that separate demos from production AI systems.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', featured: true },
  { title: 'Why We Migrated 200+ Microservices to Golang', category: 'Engineering', readTime: '8 min', author: 'James Wright', avatar: 'https://i.pravatar.cc/60?img=8', excerpt: 'The performance gains, developer experience improvements, and lessons learned from a year-long migration from Node.js.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Zero-Knowledge Proofs: A Practical Engineering Guide', category: 'Blockchain', readTime: '15 min', author: 'Alex Romanov', avatar: 'https://i.pravatar.cc/60?img=12', excerpt: 'From theory to implementation — how we integrated ZK-SNARKs into a production DeFi protocol for privacy-preserving transactions.', img: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Design System That Scaled to 500+ Components', category: 'Design', readTime: '10 min', author: 'Maria Lopez', avatar: 'https://i.pravatar.cc/60?img=20', excerpt: 'How we built and maintained a living design system used across 15 products and 80+ engineers with zero design drift.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop' },
  { title: 'RAG Pipelines at Scale: Lessons from 40+ Enterprise Deployments', category: 'AI & ML', readTime: '14 min', author: 'Ravi Patel', avatar: 'https://i.pravatar.cc/60?img=15', excerpt: 'Why naive RAG fails and how chunking strategies, re-ranking, and hybrid search transformed our enterprise AI products.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop' },
  { title: 'How We Saved Our Client $2M/Year on AWS', category: 'Engineering', readTime: '7 min', author: 'David Kim', avatar: 'https://i.pravatar.cc/60?img=3', excerpt: 'A breakdown of the cloud cost optimization strategies that cut infrastructure spend by 60% without sacrificing performance.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
  { title: 'Building for Billions: Mobile Architecture Patterns', category: 'Engineering', readTime: '11 min', author: 'Priya Sharma', avatar: 'https://i.pravatar.cc/60?img=25', excerpt: 'The architectural patterns behind mobile apps serving 50M+ users — offline-first, push notifications, and real-time sync.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Token Economics: Designing Sustainable Web3 Ecosystems', category: 'Blockchain', readTime: '13 min', author: 'Alex Romanov', avatar: 'https://i.pravatar.cc/60?img=12', excerpt: 'The mathematical models and game theory behind token designs that prevent death spirals and incentivize long-term growth.', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Business Case for Digital Transformation in 2025', category: 'Business', readTime: '6 min', author: 'Lisa Wang', avatar: 'https://i.pravatar.cc/60?img=30', excerpt: 'ROI analysis and case studies showing how digital transformation delivers 3-5x returns within the first 18 months.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const containerRef = useRef<HTMLDivElement>(null)
  const featured = articles[0]
  const rest = articles.slice(1)
  const filtered = activeCategory === 'All' ? rest : rest.filter(a => a.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-hero', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 blog-hero">
          <p className="section-label">Engineering Blog</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Insights & <span className="gradient-text-hero">Intelligence.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Deep technical insights, engineering best practices, and industry analysis from our team of 300+ engineers.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="enterprise-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group cursor-pointer">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="pill-badge w-fit mb-4">{featured.category}</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-4 leading-tight" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>{featured.title}</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{featured.excerpt}</p>
              <div className="flex items-center gap-4 mb-6">
                <img src={featured.avatar} alt={featured.author} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--text-heading)' }}>{featured.author}</p>
                  <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}><Clock className="w-3 h-3" /> {featured.readTime} read</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap gap-2">
          {blogCategories.map(cat => (
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
      </section>

      {/* Articles Grid */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <article key={i} className="enterprise-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="pill-badge text-xs">{a.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight" style={{ color: 'var(--text-heading)' }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="flex items-center gap-2">
                      <img src={a.avatar} alt={a.author} className="w-7 h-7 rounded-full" />
                      <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{a.author}</span>
                    </div>
                    <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}><Clock className="w-3 h-3" /> {a.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 text-center" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>Never miss an insight</h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Get weekly engineering articles delivered directly to your inbox.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com" className="flex-1 h-12 px-4 rounded-xl text-sm" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
            <button className="glow-button px-6">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
