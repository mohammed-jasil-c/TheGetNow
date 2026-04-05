'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.hero-animate')
    if (!elements) return

    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(40px)'
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        htmlEl.style.opacity = '1'
        htmlEl.style.transform = 'translateY(0)'
      }, 200 + i * 150)
    })
  }, [])

  const stats = [
    { target: 500, suffix: '+', label: 'Projects Delivered' },
    { target: 50, suffix: '+', label: 'Countries Served' },
    { target: 250, suffix: '+', label: 'Expert Engineers' },
    { target: 98, suffix: '%', label: 'Client Retention' },
  ]

  return (
    /* Hero is ALWAYS dark regardless of theme */
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: '#06080F' }}
      data-theme-ignore="true"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-an-animation-of-data-5765/1080p.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay - always dark regardless of theme */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,8,15,0.7) 0%, rgba(6,8,15,0.4) 40%, rgba(6,8,15,0.85) 100%)' }} />
      </div>

      {/* Grid dots overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #F0F6FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* pt-28 ensures content sits below the fixed navbar */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8" style={{ background: 'rgba(0,87,255,0.15)', color: '#5B9EFF', border: '1px solid rgba(0,87,255,0.25)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Transforming Ideas Into Digital Reality
          </div>

          {/* Heading - always white text */}
          <h1 className="hero-animate text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Empowering Businesses{' '}
            <br className="hidden sm:block" />
            With{' '}
            <span className="gradient-text">Next-Gen</span>
            <br />
            <span className="gradient-text">Technology</span>
          </h1>

          {/* Description - always light gray */}
          <p className="hero-animate text-base sm:text-lg leading-relaxed mb-10 max-w-xl text-[#A0AEC0]">
            We deliver enterprise-grade AI, Blockchain, Cloud, and App Development solutions 
            that transform operations and accelerate business growth across 50+ countries.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-wrap items-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary">
              Free Consultation
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
              View Our Work
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </Link>
          </div>

          {/* Animated Stats Row */}
          <div className="hero-animate flex flex-wrap items-center gap-6 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-black gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium mt-1 text-[#6B7A99]">{stat.label}</p>
              </div>
            ))}
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
