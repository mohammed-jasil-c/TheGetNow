'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaLocationDot, FaClock, FaChevronDown, FaChevronUp, FaLightbulb, FaGraduationCap, FaUsers, FaHeart } from 'react-icons/fa6'
import { VALUES, PERKS } from '@/data/careers'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const iconMap: Record<string, any> = {
  faLightbulb: FaLightbulb, faGraduationCap: FaGraduationCap, faUsers: FaUsers, faHeart: FaHeart,
}

export default function CareersPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [jobListings, setJobListings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from('careers')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })

        if (error) throw error
        setJobListings(data || [])
      } catch (err) {
        console.error('Error fetching jobs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>

      {/* ══════════════════════════════════════════════════════════
          CINEMATIC VIDEO HERO — Fullscreen looping background
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] overflow-hidden flex flex-col" style={{ background: '#003342' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ opacity: 0.6 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(180deg, rgba(0,51,66,0.3) 0%, rgba(0,51,66,0.15) 40%, rgba(0,51,66,0.6) 100%)',
        }} />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl animate-fade-rise"
            style={{
              fontFamily: "'Instrument Serif', serif",
              lineHeight: 0.95,
              letterSpacing: '-2.46px',
              color: '#ffffff',
            }}
          >
            Where <em className="not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>talent</em> meets{' '}
            <em className="not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>extraordinary purpose.</em>
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Join 300+ engineers, designers, and strategists building world-class digital products
            across 50+ countries. We don&apos;t just write code — we architect the future.
          </p>

          <a
            href="#openings"
            className="liquid-glass rounded-full px-14 py-5 text-base mt-12 cursor-pointer animate-fade-rise-delay-2"
            style={{
              color: '#ffffff',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            View Open Roles
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          VALUES — Preserved from original
          ══════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════
          PERKS — Preserved from original
          ══════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════
          JOB LISTINGS — Dynamic from Supabase, preserved fully
          ══════════════════════════════════════════════════════════ */}
      <section id="openings" className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Open Positions</p>
            <h2 className="section-title mt-3">Find your <span className="gradient-text">next role.</span></h2>
          </ScrollReveal>

          {loading ? (
            <div className="text-center p-12">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4" style={{ color: 'var(--color-muted)' }}>Loading careers...</p>
            </div>
          ) : jobListings.length === 0 ? (
            <div className="text-center p-12 enterprise-card rounded-2xl">
              <p style={{ color: 'var(--color-text-secondary)' }}>No open roles at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobListings.map(job => (
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
                      {job.tags && job.tags.length > 0 && (
                        <div>
                          <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>Tech Stack</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {job.tags.map((t: string) => <span key={t} className="pill-badge text-[9px]">{t}</span>)}
                          </div>
                        </div>
                      )}
                      {job.responsibilities && job.responsibilities.length > 0 && (
                        <div>
                          <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text)' }}>Key Responsibilities</h4>
                          <ul className="space-y-1.5">
                            {job.responsibilities.slice(0, 3).map((r: string, i: number) => (
                              <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-primary)' }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <Link href={`/careers/${job.slug}`} className="glow-button inline-flex">
                        View Full Details & Apply <FaArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA — Preserved from original
          ══════════════════════════════════════════════════════════ */}
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
