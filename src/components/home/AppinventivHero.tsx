'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, Star, Shield, Users } from 'lucide-react'

export default function AppinventivHero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl  = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-pill',      { y: -30, duration: 0.6 })
        .from('.hero-heading',   { y: 60, duration: 1.1 }, 0.15)
        .from('.hero-sub',       { y: 40, duration: 0.9 }, 0.4)
        .from('.hero-cta',       { y: 30, duration: 0.7 }, 0.6)
        .from('.hero-trust',     { y: 25, duration: 0.7 }, 0.75)
        .from('.hero-mockup',    { x: 80, duration: 1.2 }, 0.35)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: 'var(--bg-page)' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.15), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.1), transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--dot-grid-color) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1400px] mx-auto px-6 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Pill */}
            <div className="hero-pill pill-badge mb-8">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              Rated #1 on Clutch — 500+ Projects Delivered
            </div>

            {/* Heading */}
            <h1 className="hero-heading text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
              Build Software<br />
              That Scales.<br />
              <span className="gradient-text-hero">That Wins.</span>
            </h1>

            {/* Sub */}
            <p className="hero-sub text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              From concept to production — we engineer AI-powered apps, blockchain protocols, and cloud platforms for the world's most ambitious companies.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap items-center gap-4 mb-12">
              <Link href="/contact" className="glow-button text-base">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="outline-button text-base">
                View Our Work <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="hero-trust flex flex-wrap items-center gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">SOC2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                <span className="font-semibold">300+ Engineers</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="hero-mockup hidden lg:block relative">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl blur-[60px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,87,255,0.12), rgba(123,47,255,0.12))' }} />

              {/* Main Card */}
              <div className="enterprise-card p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm">
                {/* Top Bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>dashboard.thegetnow.com</span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="enterprise-card rounded-xl p-5 text-center">
                    <p className="text-3xl font-black font-accent gradient-text mb-1">1,247</p>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Active Users</p>
                  </div>
                  <div className="enterprise-card rounded-xl p-5 text-center">
                    <p className="text-3xl font-black font-accent text-emerald-400 mb-1">$3.2M</p>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Revenue</p>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="rounded-xl p-5" style={{ background: 'var(--bg-surface)' }}>
                  <p className="text-xs font-bold mb-4" style={{ color: 'var(--text-secondary)' }}>Growth Trajectory</p>
                  <div className="flex items-end gap-2 h-24">
                    {[35, 50, 42, 65, 55, 78, 90, 70, 85, 95, 88, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-80"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? 'var(--gradient-hero)' : `rgba(0, 87, 255, ${0.15 + i * 0.05})`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 enterprise-card rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--text-heading)' }}>Deployed</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>v3.2.1 — Production</p>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-3 -left-3 enterprise-card rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,87,255,0.15)' }}>
                    <Star className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--text-heading)' }}>4.9/5 Rating</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>500+ Client Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
