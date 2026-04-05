'use client'

import Link from 'next/link'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPython, SiDocker, SiKubernetes, SiGooglecloud, SiTerraform, SiPostgresql, SiRedis, SiFirebase, SiFlutter, SiSolidity, SiGraphql, SiTailwindcss, SiFigma } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import type { Service } from '@/data/services'

const techIconMap: Record<string, any> = {
  'React': SiReact, 'Next.js': SiNextdotjs, 'Node.js': SiNodedotjs, 'TypeScript': SiTypescript,
  'Python': SiPython, 'Docker': SiDocker, 'Kubernetes': SiKubernetes, 'AWS': FaAws,
  'GCP': SiGooglecloud, 'Terraform': SiTerraform, 'PostgreSQL': SiPostgresql, 'Redis': SiRedis,
  'Firebase': SiFirebase, 'Flutter': SiFlutter, 'Solidity': SiSolidity, 'GraphQL': SiGraphql,
  'Tailwind': SiTailwindcss, 'Figma': SiFigma,
}

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
            {service.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)' }}>
            {service.subtitle}
          </p>
          <Link href="/contact" className="glow-button text-base">
            Start Your Project <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Description */}
      <ScrollReveal>
        <section className="pb-20 max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {service.description.split('\n').filter(Boolean).map((line, i) => (
              <p key={i} className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {line}
              </p>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Features Grid */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title mt-3">What we <span className="gradient-text">deliver.</span></h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="enterprise-card rounded-2xl p-8 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${service.accentColor}15`, color: service.accentColor }}>
                  <FaCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{f.description}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Timeline (Horizontal) */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title mt-3">How we <span className="gradient-text">work.</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="enterprise-card rounded-2xl p-8 text-center relative">
                <div className="text-4xl font-black mb-4 font-heading gradient-text">{p.step}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{p.description}</p>
                {i < service.process.length - 1 && (
                  <FaArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--color-border-strong)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title mt-3">Technologies we <span className="gradient-text">leverage.</span></h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {service.techStack.map(tech => {
              const TechIcon = techIconMap[tech]
              return (
                <div key={tech} className="enterprise-card rounded-2xl px-6 py-4 flex items-center gap-3 hover:-translate-y-1 transition-transform">
                  {TechIcon && <TechIcon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />}
                  <span className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{tech}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
            Ready to get started?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Let&apos;s discuss how our {service.title.toLowerCase()} expertise can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="glow-button text-base">Get Free Consultation <FaArrowRight className="w-4 h-4" /></Link>
            <Link href="/portfolio" className="outline-button text-base">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
