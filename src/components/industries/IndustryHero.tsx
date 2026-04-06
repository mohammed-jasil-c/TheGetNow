'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

function getIcon(iconName: string) {
  const icon = (solidIcons as Record<string, unknown>)[iconName]
  return icon || solidIcons.faGear
}

gsap.registerPlugin(ScrollTrigger)

export default function IndustryHero({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      gsap.from('.ind-hero-label', { y: 30, duration: 0.8, ease: 'power3.out', delay: 0.1 })
      gsap.from('.ind-hero-title', { y: 50, duration: 1.2, ease: 'power4.out', delay: 0.25 })
      gsap.from('.ind-hero-tagline', { y: 30, duration: 1, ease: 'power3.out', delay: 0.45 })
      gsap.from('.ind-hero-desc', { y: 30, duration: 1, ease: 'power3.out', delay: 0.55 })
      gsap.from('.ind-hero-actions', { y: 20, duration: 0.8, ease: 'power3.out', delay: 0.7 })
      gsap.from('.ind-hero-breadcrumb', { x: -20, duration: 0.6, ease: 'power2.out', delay: 0.15 })

      // Parallax image on scroll
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      // Floating mesh shapes
      gsap.to('.ind-mesh-1', { y: -30, x: 20, rotation: 15, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.ind-mesh-2', { y: 20, x: -15, rotation: -10, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.ind-mesh-3', { y: -15, x: -25, rotation: 20, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="ind-mesh-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: industry.accentColor }}
        />
        <div
          className="ind-mesh-2 absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: industry.accentColor }}
        />
        <div
          className="ind-mesh-3 absolute -bottom-24 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: industry.darkAccent }}
        />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="ind-hero-breadcrumb flex items-center gap-2 text-xs font-medium mb-10" style={{ color: 'var(--color-muted)' }}>
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5" />
          <Link href="/industries" className="hover:text-[var(--color-primary)] transition-colors">Industries</Link>
          <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5" />
          <span style={{ color: industry.accentColor }}>{industry.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 max-w-2xl">
            <div className="ind-hero-label flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                style={{ background: industry.gradient }}
              >
                <FontAwesomeIcon icon={getIcon(industry.icon) as any} className="w-5 h-5" />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: industry.accentColor }}
              >
                {industry.title}
              </span>
            </div>

            <h1 className="ind-hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-heading" style={{ color: 'var(--color-text)' }}>
              {industry.heroTagline}
            </h1>

            <p className="ind-hero-tagline text-xl md:text-2xl font-medium leading-relaxed" style={{ color: industry.accentColor }}>
              {industry.subtitle}
            </p>

            <p className="ind-hero-desc text-base leading-[1.8] max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
              {industry.description.substring(0, 280)}...
            </p>

            <div className="ind-hero-actions flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                style={{ background: industry.gradient, boxShadow: `0 8px 32px ${industry.accentColor}30` }}
              >
                Start a Project <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="outline-button"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Hero image with parallax */}
          <div ref={imageRef} className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-3xl" style={{ background: industry.gradient }} />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl industry-card-3d">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Floating stat badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="flex items-center justify-between">
                  {industry.stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-extrabold text-white">{stat.value}{stat.suffix}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
