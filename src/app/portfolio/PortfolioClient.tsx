'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFilter } from 'react-icons/fa6'
import { getPortfolioFallbackImage } from '@/data/portfolio'

export default function PortfolioClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  
  // Extract all unique tags
  const allTags = Array.from(new Set(
    initialProjects.flatMap(p => {
      // Tags might be in content_json.tags, or we can use layout_template/category as fallback
      const tags = p.content_json?.tags || [p.layout_template?.replace(/[_-]/g, ' ') || 'Enterprise']
      return tags
    })
  )).filter(Boolean) as string[]

  const filtered = activeTag 
    ? initialProjects.filter(p => {
        const tags = p.content_json?.tags || [p.layout_template?.replace(/[_-]/g, ' ') || 'Enterprise']
        return tags.includes(activeTag)
      })
    : initialProjects

  return (
    <>
      {/* Filter */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-3 flex-wrap">
            <FaFilter className="w-4 h-4" style={{ color: 'var(--color-muted)' }} />
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!activeTag ? 'text-white' : ''}`}
              style={{
                background: !activeTag ? 'var(--gradient-primary)' : 'var(--color-surface-alt)',
                color: !activeTag ? '#fff' : 'var(--color-text-secondary)',
              }}
            >All</button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTag === tag ? 'text-white' : ''}`}
                style={{
                  background: activeTag === tag ? 'var(--gradient-primary)' : 'var(--color-surface-alt)',
                  color: activeTag === tag ? '#fff' : 'var(--color-text-secondary)',
                }}
              >{tag}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => {
              const tags = project.content_json?.tags || [project.layout_template?.replace(/[_-]/g, ' ') || 'Enterprise']
              return (
                 <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="enterprise-card rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={project.featured_image || getPortfolioFallbackImage(initialProjects.indexOf(project))} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((t: string) => (
                          <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/20 text-white backdrop-blur-sm uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all font-heading" style={{ color: 'var(--color-text)', backgroundImage: project.hero_gradient || 'var(--gradient-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description || project.subtitle}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
