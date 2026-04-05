'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Filter } from 'lucide-react'
import { DBPage } from '@/lib/supabase-pages'

interface PortfolioGridProps {
  initialProjects: DBPage[]
}

const categories = ['All', 'Mobile', 'Web', 'Blockchain', 'AI/ML', 'Design']

export default function PortfolioGrid({ initialProjects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filtered = activeCategory === 'All' 
    ? initialProjects 
    : initialProjects.filter(p => (p.content_json?.industry as string || p.category) === activeCategory)

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-16 animate-fade-in">
        <div className="flex items-center gap-2 mr-4 text-sm font-bold opacity-40 uppercase tracking-widest">
          <Filter className="w-4 h-4" />
          Filter By
        </div>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
            style={{
              background: activeCategory === cat ? 'var(--gradient-hero)' : 'var(--bg-card)',
              border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-subtle)'}`,
              color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: activeCategory === cat ? 'var(--shadow-glow)' : 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <Link key={p.id} href={`/portfolio/${p.slug}`} className="group block h-full">
            <article className="enterprise-card rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={p.featured_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <span className="pill-badge text-[10px]">{p.content_json?.industry as string || 'Engineering'}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--brand-blue)' }}>
                  {p.content_json?.result as string || 'Success Story'}
                </p>
                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 opacity-60 line-clamp-3 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {p.subtitle}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex flex-wrap gap-2">
                    {(p.content_json?.tags as string[] || ['React', 'Node.js']).slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-[var(--bg-elevated)] opacity-60" style={{ color: 'var(--text-primary)' }}>{tag}</span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center transition-all group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg opacity-40">No projects found in this category yet.</p>
        </div>
      )}
    </>
  )
}
