'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowRight, 
  faTags, 
  faChartLine, 
  faMobileScreenButton, 
  faGlobe, 
  faBrain, 
  faLink, 
  faShoppingCart, 
  faStethoscope,
  faTruckFast,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
import { getPortfolioFallbackImage } from '@/data/portfolio'

// Map tags to specific icons for the filter bar
const tagIconMap: Record<string, any> = {
  'Fintech': faChartLine,
  'Mobile Apps': faMobileScreenButton,
  'Enterprise Web': faGlobe,
  'AI/ML': faBrain,
  'Blockchain': faLink,
  'E-Commerce': faShoppingCart,
  'Healthcare': faStethoscope,
  'Logistics': faTruckFast,
}

export default function PortfolioClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Extract all unique tags and sort them by frequency or significance
  const allTags = useMemo(() => {
    const tags = Array.from(new Set(
      initialProjects.flatMap(p => {
        const t = p.content_json?.tags || []
        return Array.isArray(t) ? t : []
      })
    )).filter(Boolean) as string[]
    
    // Sort to keep known categories first
    const priority = ['Enterprise Web', 'Mobile Apps', 'Fintech', 'AI/ML', 'Blockchain', 'E-Commerce', 'Healthcare', 'Logistics']
    return tags.sort((a, b) => {
      const idxA = priority.indexOf(a)
      const idxB = priority.indexOf(b)
      if (idxA !== -1 && idxB !== -1) return idxA - idxB
      if (idxA !== -1) return -1
      if (idxB !== -1) return 1
      return a.localeCompare(b)
    })
  }, [initialProjects])

  const filtered = useMemo(() => {
    if (!activeTag) return initialProjects
    return initialProjects.filter(p => {
      const tags = p.content_json?.tags || []
      return Array.isArray(tags) && tags.includes(activeTag)
    })
  }, [activeTag, initialProjects])

  return (
    <div className="bg-background relative pt-0 pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay pointer-events-none" />

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-40 py-6 mb-12 backdrop-blur-md bg-background/80 border-b border-border transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 shrink-0 w-full xl:w-auto justify-center xl:justify-start">
              <div className="text-on-surface flex items-center justify-center">
                <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
              </div>
              <h2 className="text-2xl font-black tracking-widest text-on-surface uppercase font-headline">
                Portfolio
              </h2>
            </div>

            <div className="flex items-center justify-start overflow-x-auto no-scrollbar w-full xl:w-auto -mx-6 px-6 xl:mx-0 xl:px-0 pb-2 xl:pb-0 hide-scrollbar-mask">
              <div className="flex items-center gap-2 min-w-max mx-auto xl:mx-0">
                <button
                  onClick={() => setActiveTag(null)}
                  className={`px-6 py-3 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 
                    ${!activeTag 
                      ? 'bg-surface text-primary shadow-[0_0_40px_rgba(0,87,255,0.15)] ring-1 ring-primary/20 scale-105' 
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                    }`}
                >
                  All Projects
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                    className={`px-6 py-3 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500
                      ${activeTag === tag 
                        ? 'bg-surface text-primary shadow-[0_0_40px_rgba(0,87,255,0.15)] ring-1 ring-primary/20 scale-105' 
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <section className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => {
              const tags = project.content_json?.tags || []
              const heroColor = project.accent_color || '#0057FF'

              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex flex-col h-full bg-surface-container-lowest border border-border rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-primary/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-3"
                >
                  {/* Decorative Glow */}
                  <div 
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: heroColor }}
                  />

                  {/* Image Container */}
                  <div className="relative h-80 w-full overflow-hidden shrink-0">
                    <Image 
                      src={project.featured_image || getPortfolioFallbackImage(i)} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Glass Overlay on Bottom of Image */}
                    <div className="absolute inset-x-0 bottom-0 py-6 px-8 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between">
                      <div className="flex gap-2">
                        {tags.map((t: string) => (
                          <span key={t} className="text-[10px] font-black px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 text-white uppercase tracking-widest border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col flex-grow p-10 bg-surface-container-lowest relative">
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
                        {project.content_json?.role || 'Full-Cycle Engineering'}
                      </span>
                      {tagIconMap[tags[0]] && (
                        <FontAwesomeIcon icon={tagIconMap[tags[0]]} className="text-primary/40 text-lg" />
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight mb-4 font-headline text-on-surface group-hover:text-primary transition-colors leading-[1.1]">
                      {project.title}
                    </h3>
                    
                    <p className="line-clamp-3 text-on-surface-variant leading-relaxed font-light mb-8 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      {project.description || project.subtitle}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-extra-bold uppercase tracking-widest text-primary flex items-center gap-3">
                          EXPLORE CASE STUDY 
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Metric preview if available */}
                      {project.content_json?.results?.[0] && (
                        <div className="text-right">
                          <p className="text-lg font-black text-on-surface leading-none mb-0.5">{project.content_json.results[0].value}</p>
                          <p className="text-[8px] font-bold text-secondary uppercase tracking-widest">{project.content_json.results[0].label}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-40 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant/40 text-3xl mb-6">
                <FontAwesomeIcon icon={faTags} />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">No projects found</h3>
              <p className="text-on-surface-variant max-w-xs">We haven't uploaded projects for this specific category yet. Stay tuned!</p>
              <button 
                onClick={() => setActiveTag(null)}
                className="mt-8 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


