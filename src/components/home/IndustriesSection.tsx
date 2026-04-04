'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { icon: 'fa-solid fa-building-columns', slug: 'finance', title: 'FinTech & Banking', desc: 'Digital banking, payment gateways, trading platforms, open banking APIs', stat: '150+ FinTech Apps', color: '#10b981' },
  { icon: 'fa-solid fa-heart-pulse', slug: 'healthcare', title: 'Healthcare & MedTech', desc: 'HIPAA-compliant EHR, telemedicine, diagnostics AI, patient portals', stat: '80+ Health Platforms', color: '#0ea5e9' },
  { icon: 'fa-solid fa-cart-shopping', slug: 'retail', title: 'eCommerce & Retail', desc: 'D2C platforms, inventory, recommendation engines, omnichannel POS', stat: '$2B+ GMV Processed', color: '#f43f5e' },
  { icon: 'fa-solid fa-gamepad', slug: 'gaming', title: 'GameFi & Metaverse', desc: 'Play-to-earn infrastructure, virtual world NCT assets, real-time multiplayer', stat: '5M+ Gamers Served', color: '#8b5cf6' },
  { icon: 'fa-solid fa-industry', slug: 'manufacturing', title: 'Manufacturing & IoT', desc: 'Smart factories, predictive maintenance, real-time sensor dashboards', stat: '10K+ Devices', color: '#6366f1' },
  { icon: 'fa-solid fa-graduation-cap', slug: 'education', title: 'EdTech & eLearning', desc: 'LMS platforms, AR/VR classrooms, adaptive learning AI, gamification', stat: '14M+ Learners', color: '#84cc16' },
  { icon: 'fa-solid fa-car', slug: 'automotive', title: 'Automotive & Mobility', desc: 'Fleet management, EV infrastructure, autonomous systems, connected cars', stat: '30+ Fleet Solutions', color: '#ef4444' },
  { icon: 'fa-solid fa-truck-fast', slug: 'logistics', title: 'Logistics & Supply Chain', desc: 'AI route optimization, warehouse automation, last-mile delivery tracking', stat: '40% Faster Delivery', color: '#f59e0b' },
  { icon: 'fa-solid fa-plane-departure', slug: 'travel', title: 'Travel & Hospitality', desc: 'Booking engines, loyalty programs, GDS integration, dynamic pricing', stat: '200+ Travel Apps', color: '#06b6d4' },
  { icon: 'fa-solid fa-cloud', slug: 'saas', title: 'SaaS Platforms', desc: 'Multi-tenant architecture, subscription billing, API-first development', stat: '$1.2B Revenue', color: '#2563eb' },
  { icon: 'fa-solid fa-film', slug: 'entertainment', title: 'Entertainment & Media', desc: 'OTT platforms, content discovery, AR/VR experiences, live streaming', stat: '50M+ Viewers', color: '#7c3aed' },
  { icon: 'fa-solid fa-building', slug: 'real-estate', title: 'Real Estate Tech', desc: 'Virtual tours, ML-powered valuations, property management, PropTech', stat: '3x Conversion Rate', color: '#0891b2' },
]

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.ind-card')
      cards?.forEach((card, i) => {
        gsap.from(card, {
          y: 60, opacity: 0, duration: 0.9, delay: (i % 4) * 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })
      gsap.from('.ind-heading', {
        y: 80, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.ind-heading', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-32 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20">
          <p className="section-label">Industries We Serve</p>
          <h2 className="ind-heading text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Deep domain expertise <span className="gradient-text">across every vertical.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <Link
              href={`/industries/${ind.slug}`}
              key={ind.title}
              className="ind-card group enterprise-card p-7 rounded-2xl relative overflow-hidden block"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(200px circle at 50% 0%, ${ind.color}12, transparent)` }} />
              
              {/* Number */}
              <span className="absolute top-4 right-5 text-6xl font-black opacity-[0.04] group-hover:opacity-[0.08] select-none transition-opacity" style={{ color: ind.color }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform relative z-10"
                style={{ background: `${ind.color}12`, border: `1px solid ${ind.color}25` }}>
                <i className={`${ind.icon} text-lg`} style={{ color: ind.color }} />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform relative z-10" style={{ color: 'var(--text-heading)' }}>{ind.title}</h3>
              <p className="text-sm leading-relaxed mb-4 relative z-10" style={{ color: 'var(--text-muted)' }}>{ind.desc}</p>
              
              <p className="text-[11px] font-bold relative z-10" style={{ color: ind.color }}>{ind.stat}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
