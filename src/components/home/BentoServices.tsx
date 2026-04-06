'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Code, Smartphone, BrainCircuit, Blocks, Cloud, PenTool, Rocket, Settings } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: 'Web Development', icon: Code, href: '/services/web-development', color: '#0057FF', span: 'md:col-span-2 lg:col-span-2', desc: 'High-performance React & Next.js web applications built for absolute scalability.' },
  { title: 'Mobile Apps', icon: Smartphone, href: '/services/mobile-app-development', color: '#7B2FFF', span: 'col-span-1', desc: 'Native iOS & Android experiences.' },
  { title: 'AI & ML', icon: BrainCircuit, href: '/services/ai-development', color: '#10B981', span: 'col-span-1', desc: 'Custom LLMs & intelligent agents.' },
  { title: 'Blockchain', icon: Blocks, href: '/services/blockchain-development', color: '#F59E0B', span: 'col-span-1', desc: 'Smart contracts & DeFi protocols.' },
  { title: 'Cloud Integration', icon: Cloud, href: '/services/cloud-computing', color: '#0EA5E9', span: 'col-span-1', desc: 'AWS & Azure serverless architecture.' },
  { title: 'UI/UX Design', icon: PenTool, href: '/services/ui-ux-design', color: '#EC4899', span: 'md:col-span-2 lg:col-span-2', desc: 'Research-driven, pixel-perfect user interfaces and design systems.' },
  { title: 'SaaS Platforms', icon: Rocket, href: '/services/saas-development', color: '#6366F1', span: 'md:col-span-2 lg:col-span-2', desc: 'End-to-end multi-tenant software platforms.' },
  { title: 'DevOps & SRE', icon: Settings, href: '/services/devops-services', color: '#14B8A6', span: 'md:col-span-2 lg:col-span-2', desc: 'CI/CD pipelines & zero-downtime scaling.' },
]

export default function BentoServices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.srv-header > *', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })

      // Bento Cards Animation
      gsap.from('.srv-card', {
        y: 60, scale: 0.95, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.srv-grid', start: 'top 75%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Cinematic ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, var(--gradient-primary), transparent 70%)' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header split layout */}
        <div className="srv-header flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
              What We Build
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
              Enterprise-grade <br className="hidden md:block" />
              <span className="gradient-text-hero">capabilities.</span>
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Full-spectrum engineering, design, and strategic services designed to accelerate your digital ambitions and scale effortlessly.
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="srv-grid grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`srv-card group enterprise-card rounded-3xl p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-2xl ${s.span}`}
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              {/* Subtle hover backlight effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                style={{ background: `radial-gradient(800px circle at bottom right, ${s.color}08, transparent)` }} 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm"
                    style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25` }}
                  >
                    <s.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  {/* Hover Arrow Reveal */}
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center -translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" style={{ color: 'var(--color-text)' }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 font-heading" style={{ color: 'var(--color-text)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Decorative progress bar at bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-700 group-hover:w-full" style={{ background: s.color }} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
