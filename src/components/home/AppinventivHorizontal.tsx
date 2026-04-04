'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  { title: 'FinanceFlow', desc: 'Digital banking platform processing $1.2B daily', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop', tags: ['FinTech', 'React', 'Go'] },
  { title: 'DecentraLend', desc: '$200M TVL cross-chain DeFi lending protocol', img: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=900&auto=format&fit=crop', tags: ['DeFi', 'Solidity', 'Rust'] },
  { title: 'MedConnect', desc: '2M+ patient sessions on HIPAA-compliant telehealth', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop', tags: ['HealthTech', 'Flutter', 'AWS'] },
  { title: 'RetailMax AI', desc: '40% conversion boost with predictive personalization', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop', tags: ['AI/ML', 'Python', 'GCP'] },
  { title: 'EduRev', desc: '14M+ learners on gamified e-learning platform', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=900&auto=format&fit=crop', tags: ['EdTech', 'Flutter', 'Firebase'] },
]

export default function AppinventivHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return
      const scrollWidth = track.scrollWidth - window.innerWidth
      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden relative"
      style={{ background: 'var(--bg-page)' }}
    >
      {/* Header overlay */}
      <div className="absolute top-12 left-12 z-10">
        <p className="section-label">Featured Work</p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
          Our latest <span className="gradient-text">case studies.</span>
        </h2>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-8 pl-8 pr-[100vw]"
        style={{ paddingTop: '120px' }}
      >
        {caseStudies.map((cs, i) => (
          <div
            key={cs.title}
            className="enterprise-card rounded-3xl overflow-hidden shrink-0 w-[450px] h-[400px] group cursor-pointer relative"
          >
            <img src={cs.img} alt={cs.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
              <div className="flex flex-wrap gap-2 mb-3">
                {cs.tags.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">{cs.title}</h3>
              <p className="text-sm text-white/60 mb-4">{cs.desc}</p>
              <div className="flex items-center gap-1 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
