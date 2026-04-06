'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const featuredIndustries = [
  {
    slug: 'healthcare', 
    title: 'Healthcare & MedTech', 
    desc: 'HIPAA-compliant EHR & Diagnostics AI', 
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    flex: 'lg:flex-[2]', // Makes it wider
    badge: 'AI-Infused'
  },
  {
    slug: 'finance', 
    title: 'FinTech', 
    desc: 'Digital banking & open trading APIs', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    flex: 'lg:flex-[1]',
  },
  {
    slug: 'logistics', 
    title: 'Logistics', 
    desc: 'AI route optimization & warehouse', 
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    flex: 'lg:flex-[1]',
  },
  {
    slug: 'manufacturing', 
    title: 'Manufacturing', 
    desc: 'Smart factories & predictive IoT', 
    image: 'https://images.unsplash.com/photo-1565439390231-15b57d6b8849?w=800&q=80',
    flex: 'lg:flex-[1]',
  },
]

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.ind-header-split > div', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })

      // Cards Animation
      gsap.from('.ind-card-hero', {
        y: 60, scale: 0.98, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-gallery', start: 'top 75%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1500px] mx-auto px-4 md:px-8">
        
        {/* Header Split Layout matching Dribbble inspiration */}
        <div className="ind-header-split flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
              Industry Expertise
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
              Redefining <br className="hidden md:block" /> Domains with Intelligence
            </h2>
          </div>
          
          <div className="max-w-md pb-2">
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              A new dimension of technological well-being with holistic strategies supporting your business scale at every stage of the digital lifecycle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/industries" className="glow-button px-6 py-3 text-sm font-bold rounded-full">
                All Industries
              </Link>
              <Link href="/contact" className="outline-button px-6 py-3 text-sm font-bold rounded-full flex items-center gap-2">
                Got any questions? <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery / Cards Container */}
        <div className="ind-gallery flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[600px]">
          {featuredIndustries.map((ind, i) => (
            <Link 
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className={`ind-card-hero group relative rounded-[2rem] overflow-hidden flex-shrink-0 lg:flex-shrink w-full h-[400px] lg:h-full ${ind.flex}`}
              style={{ background: 'var(--color-surface)' }}
            >
              {/* Image with hover scale */}
              <Image 
                src={ind.image}
                alt={ind.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Glass Gradient overlay */}
              <div className="absolute inset-0 z-10 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)' }} />

              {/* Optional Top Badge */}
              {ind.badge && (
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {ind.badge}
                  </span>
                </div>
              )}

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">{ind.title}</h3>
                    <p className="text-sm text-white/80 max-w-[250px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {ind.desc}
                    </p>
                  </div>
                  
                  {/* Hover Icon Reveal */}
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black">
                    <ArrowUpRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
