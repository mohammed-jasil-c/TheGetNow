'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaLocationDot, FaClock, FaChevronDown, FaChevronUp, FaLightbulb, FaGraduationCap, FaUsers, FaHeart } from 'react-icons/fa6'
import { JOB_LISTINGS, VALUES, PERKS } from '@/data/careers'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { useState } from 'react'

const iconMap: Record<string, any> = {
  faLightbulb: FaLightbulb, faGraduationCap: FaGraduationCap, faUsers: FaUsers, faHeart: FaHeart,
}

export default function CareersPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
          <div className="max-w-lg">
            <p className="section-label mb-4">We&apos;re Hiring</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
              Build the future<br /><span className="gradient-text">with us.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              Join 300+ engineers, designers, and strategists building world-class digital products across 50+ countries.
            </p>
            <a href="#openings" className="btn-primary">
              View Open Roles <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Team collaboration" fill className="object-cover" sizes="50vw" />
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Our Values</p>
            <h2 className="section-title mt-3">What defines <span className="gradient-text">our culture.</span></h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => {
              const IconCmp = iconMap[v.icon] || FaLightbulb
              return (
                <div key={v.title} className="enterprise-card rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: `${v.color}15`, color: v.color }}>
                    <IconCmp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{v.description}</p>
                </div>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Benefits & Perks</p>
            <h2 className="section-title mt-3">Everything you need to <span className="gradient-text">thrive.</span></h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERKS.map(p => (
              <div key={p.title} className="enterprise-card rounded-xl p-6 flex items-start gap-4">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--color-text)' }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{p.description}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings" className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Open Positions</p>
            <h2 className="section-title mt-3">Find your <span className="gradient-text">next role.</span></h2>
          </ScrollReveal>
          <div className="space-y-4">
            {JOB_LISTINGS.map(job => (
              <div key={job.slug} className="enterprise-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpanded(expanded === job.slug ? null : job.slug)}
                  className="w-full p-6 flex items-center justify-between cursor-pointer text-left"
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>{job.title}</h3>
                    <div className="flex items-center flex-wrap gap-3 text-xs" style={{ color: 'var(--color-muted)' }}>
                      <span className="flex items-center gap-1"><FaLocationDot className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><FaClock className="w-3 h-3" /> {job.type}</span>
                      <span className="pill-badge text-[9px]">{job.department}</span>
                    </div>
                  </div>
                  {expanded === job.slug ? <FaChevronUp className="w-5 h-5 shrink-0" style={{ color: 'var(--color-muted)' }} /> : <FaChevronDown className="w-5 h-5 shrink-0" style={{ color: 'var(--color-muted)' }} />}
                </button>
                {expanded === job.slug && (
                  <div className="px-6 pb-6 pt-2 border-t space-y-6 animate-slide-up" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{job.description}</p>
                    <div>
                      <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.map(t => <span key={t} className="pill-badge text-[9px]">{t}</span>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>Key Responsibilities</h4>
                      <ul className="space-y-1.5">
                        {job.responsibilities.slice(0, 3).map((r, i) => (
                          <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-primary)' }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/careers/${job.slug}`} className="glow-button inline-flex">
                      View Full Details & Apply <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
            Don&apos;t see the right role?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            We&apos;re always looking for exceptional talent. Send us your portfolio.
          </p>
          <Link href="/contact" className="outline-button text-base">
            Send Open Application <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
