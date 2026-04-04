'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { slug: 'mobile-app-development', title: 'Mobile App Development', sub: 'iOS · Android · Flutter · React Native', icon: 'fa-solid fa-mobile-screen-button', bgImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', metric: '200+ Apps Built' },
  { slug: 'blockchain-development', title: 'Web3 & Blockchain', sub: 'DeFi · NFTs · Smart Contracts · DAO', icon: 'fa-brands fa-ethereum', bgImg: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=800&auto=format&fit=crop', metric: '$500M+ TVL Secured' },
  { slug: 'ai-development', title: 'AI & Machine Learning', sub: 'LLMs · NLP · Computer Vision · Agents', icon: 'fa-solid fa-brain', bgImg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', metric: '40+ AI Models Deployed' },
  { slug: 'cloud-computing', title: 'Cloud & DevOps', sub: 'AWS · Azure · GCP · Kubernetes', icon: 'fa-solid fa-cloud', bgImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', metric: '60% Cost Reduction' },
  { slug: 'ui-ux-design', title: 'UI/UX & Product Design', sub: 'Discovery · Prototyping · Design Systems', icon: 'fa-solid fa-pen-nib', bgImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', metric: '500+ Screens Designed' },
  { slug: 'web-development', title: 'Enterprise Web Apps', sub: 'ERP · SaaS · Real-time Platforms', icon: 'fa-solid fa-laptop-code', bgImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', metric: '300+ Web Platforms' },
  { slug: 'ar-vr-development', title: 'AR/VR Experiences', sub: 'Spatial Computing · WebXR · Digital Twins', icon: 'fa-solid fa-vr-cardboard', bgImg: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&auto=format&fit=crop', metric: '3x Engagement Boost' },
  { slug: 'saas-development', title: 'SaaS Platforms', sub: 'Multi-tenant · Billing · API-First', icon: 'fa-solid fa-cubes', bgImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', metric: '$1.2B Revenue Generated' },
  { slug: 'iot-solutions', title: 'IoT & Edge Computing', sub: 'Sensors · Digital Twins · Fleet Mgmt', icon: 'fa-solid fa-microchip', bgImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', metric: '10K+ Devices Connected' },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title span', {
        y: 120, opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.services-title', start: 'top 80%' }
      })

      const cards = sectionRef.current?.querySelectorAll('.srv-card')
      cards?.forEach((card, i) => {
        gsap.from(card, {
          y: 80, opacity: 0, duration: 0.8, delay: i * 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-page)' }}>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 pointer-events-none" style={{ background: 'rgba(0, 87, 255, 0.08)' }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <div className="overflow-hidden mb-20">
          <h2 className="services-title text-5xl md:text-7xl font-extrabold tracking-tight leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="block" style={{ color: 'var(--text-heading)' }}>Engineering</span>
            <span className="block gradient-text">solutions</span>
            <span className="block" style={{ color: 'var(--text-heading)' }}>for tomorrow.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((cat) => (
            <Link href={`/services/${cat.slug}`} key={cat.title} className="srv-card group relative overflow-hidden rounded-3xl h-[420px] shadow-xl hover:-translate-y-2 transition-all duration-500 block">
              <div className="absolute inset-0 z-0">
                <img src={cat.bgImg} alt={cat.title} className="w-full h-full object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl shadow-lg">
                    <i className={`${cat.icon} text-white group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70">
                    {cat.metric}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold mb-2 text-white">{cat.title}</h3>
                  <p className="text-sm text-white/60 mb-4 font-medium">{cat.sub}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    View Capabilities <ArrowRight className="w-4 h-4" />
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
