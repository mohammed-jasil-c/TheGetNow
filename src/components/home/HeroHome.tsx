'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiDocker, SiTailwindcss, SiGraphql } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { useCountUp } from '@/hooks/useCountUp'

const techIcons = [
  { Icon: SiReact, color: '#61DAFB', label: 'React' },
  { Icon: SiNextdotjs, color: '#fff', label: 'Next.js' },
  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
  { Icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
  { Icon: FaAws, color: '#FF9900', label: 'AWS' },
  { Icon: SiDocker, color: '#2496ED', label: 'Docker' },
  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
  { Icon: SiGraphql, color: '#E10098', label: 'GraphQL' },
]

function StatItem({ target, suffix, label, prefix }: { target: number; suffix: string; label: string; prefix?: string }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className="text-center sm:text-left">
      <p className="text-2xl sm:text-3xl font-black gradient-text font-heading">
        <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
      </p>
      <p className="text-xs font-medium mt-1" style={{ color: 'var(--color-muted)' }}>{label}</p>
    </div>
  )
}

export default function HeroHome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.from('.hero-animate', {
        y: 50, opacity: 0, duration: 0.9,
        stagger: 0.12, ease: 'power4.out', delay: 0.2,
      })
      // Animate floating icons
      if (iconsRef.current) {
        gsap.from(iconsRef.current.querySelectorAll('.tech-icon'), {
          scale: 0, opacity: 0, duration: 0.6,
          stagger: 0.08, ease: 'back.out(1.7)', delay: 0.8,
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: '#06080F' }}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80">
          <source src="https://cdn.coverr.co/videos/coverr-an-animation-of-data-5765/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,8,15,0.75) 0%, rgba(6,8,15,0.4) 40%, rgba(6,8,15,0.88) 100%)' }} />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Floating tech icons */}
      <div ref={iconsRef} className="absolute inset-0 pointer-events-none hidden lg:block">
        {techIcons.map((t, i) => (
          <div
            key={t.label}
            className="tech-icon absolute animate-float"
            style={{
              top: `${15 + (i % 4) * 20}%`,
              right: `${5 + (i % 3) * 10}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.35,
            }}
          >
            <t.Icon className="w-8 h-8" style={{ color: t.color }} aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
            style={{ background: 'rgba(0,87,255,0.15)', color: '#5B9EFF', border: '1px solid rgba(0,87,255,0.25)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Transforming Ideas Into Digital Reality
          </div>

          {/* Heading */}
          <h1 className="hero-animate text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight mb-6 text-white font-heading">
            Empowering Businesses{' '}
            <br className="hidden sm:block" />
            With <span className="gradient-text">Next-Gen</span>
            <br />
            <span className="gradient-text">Technology</span>
          </h1>

          {/* Description */}
          <p className="hero-animate text-base sm:text-lg leading-relaxed mb-10 max-w-xl text-[#A0AEC0]">
            We deliver enterprise-grade AI, Blockchain, Cloud, and App Development solutions
            that transform operations and accelerate growth across 50+ countries.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-wrap items-center gap-4 mb-14">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-all text-base">
              View Our Work
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-animate flex flex-wrap items-center gap-6 sm:gap-10">
            <StatItem target={500} suffix="+" label="Projects Delivered" />
            <StatItem target={50} suffix="+" label="Countries Served" />
            <StatItem target={250} suffix="+" label="Expert Engineers" />
            <StatItem target={98} suffix="%" label="Client Retention" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7A99]">Scroll</span>
        <svg className="w-5 h-5 text-[#6B7A99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  )
}
