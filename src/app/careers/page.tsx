'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Heart, GraduationCap, Laptop, Shield, Sparkles, Users } from 'lucide-react'
import { gsap } from 'gsap'

const values = [
  { icon: <Sparkles className="w-6 h-6" />, title: 'Innovation First', desc: 'We push boundaries daily — from AI agents to zero-knowledge proofs. If it\'s never been built, we\'re interested.', color: '#0057FF' },
  { icon: <GraduationCap className="w-6 h-6" />, title: 'Continuous Growth', desc: '$5,000 annual learning budget per person. Conferences, courses, and certifications — we invest in your growth.', color: '#7B2FFF' },
  { icon: <Users className="w-6 h-6" />, title: 'Real Collaboration', desc: 'No silos. Engineers, designers, and product leads work together in small autonomous pods on high-impact projects.', color: '#10b981' },
  { icon: <Heart className="w-6 h-6" />, title: 'Impact at Scale', desc: 'Our code serves 50M+ users. Your work here will matter — in healthcare, finance, education, and beyond.', color: '#f59e0b' },
]

const benefits = [
  { icon: '🌍', title: 'Remote-First Culture', desc: 'Work from anywhere in the world. We have team members across 15 countries.' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: '📚', title: '$5K Learning Budget', desc: 'Annual budget for courses, conferences, books, and certifications of your choice.' },
  { icon: '💰', title: 'Stock Options (ESOPs)', desc: 'Own a piece of what you build. Vesting begins from day one.' },
  { icon: '🏖️', title: 'Unlimited PTO', desc: 'We trust you to manage your time. Take the rest you need to do your best work.' },
  { icon: '🖥️', title: 'Latest Equipment', desc: 'MacBook Pro M3, 4K monitor, and $1,000 home office setup budget on joining.' },
  { icon: '🍼', title: 'Parental Leave', desc: '16 weeks paid parental leave for all new parents, regardless of gender.' },
  { icon: '🎯', title: 'Quarterly Retreats', desc: 'Team offsites in Bali, Dubai, Lisbon — connecting in person 4 times a year.' },
]

const openPositions = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', tags: ['React', 'Node.js', 'AWS'] },
  { title: 'Staff AI/ML Engineer', dept: 'AI Lab', location: 'Remote / NYC', type: 'Full-time', tags: ['Python', 'PyTorch', 'LangChain'] },
  { title: 'Senior Blockchain Engineer', dept: 'Web3', location: 'Remote', type: 'Full-time', tags: ['Solidity', 'Rust', 'Hardhat'] },
  { title: 'Senior Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time', tags: ['Figma', 'Design Systems', 'UX Research'] },
  { title: 'DevOps / SRE Lead', dept: 'Infrastructure', location: 'Remote / Gurugram', type: 'Full-time', tags: ['Kubernetes', 'Terraform', 'AWS'] },
  { title: 'Mobile Engineer (Flutter)', dept: 'Engineering', location: 'Remote', type: 'Full-time', tags: ['Flutter', 'Dart', 'Firebase'] },
  { title: 'Technical Project Manager', dept: 'Operations', location: 'Remote / Dubai', type: 'Full-time', tags: ['Agile', 'Jira', 'Team Lead'] },
  { title: 'QA Automation Engineer', dept: 'Quality', location: 'Remote', type: 'Full-time', tags: ['Cypress', 'Playwright', 'CI/CD'] },
]

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.career-hero', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 career-hero">
          <p className="section-label">Careers at TheGetNow</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Build the future <span className="gradient-text-hero">with us.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            Join 300+ engineers, designers, and product thinkers building software that serves 50M+ users in 50+ countries.
          </p>
          <a href="#positions" className="glow-button text-base">
            View Open Positions <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Why TheGetNow</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Our <span className="gradient-text">values.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="enterprise-card rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: `${v.color}15`, color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-heading)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Perks & Benefits</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            We take care of <span className="gradient-text">our people.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="enterprise-card rounded-2xl p-6">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-heading)' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Open Positions</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Find your <span className="gradient-text">next role.</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((pos, i) => (
              <div key={i} className="enterprise-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {pos.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {pos.location}</span>
                    <span className="flex items-center gap-1"><Laptop className="w-3 h-3" /> {pos.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pos.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-md" style={{ background: 'rgba(0,87,255,0.08)', color: 'var(--color-primary)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="glow-button text-sm px-6 py-2.5 shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Don't see your role?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            We're always looking for exceptional talent. Send us your resume and we'll reach out when the right opportunity opens.
          </p>
          <Link href="/contact" className="outline-button text-base">
            Send General Application <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
