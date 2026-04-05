'use client'

import Link from 'next/link'
import { FaCode, FaMobile, FaBrain, FaCubes, FaCloud, FaPaintbrush, FaRocket, FaGears, FaArrowRight } from 'react-icons/fa6'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'

const services = [
  { title: 'Web Development', icon: FaCode, href: '/services/web-development', gradient: 'linear-gradient(135deg, #0057FF20, #00D4FF10)', color: '#0057FF', span: 'col-span-1 md:col-span-2 lg:col-span-2' },
  { title: 'Mobile Apps', icon: FaMobile, href: '/services/mobile-app-development', gradient: 'linear-gradient(135deg, #7B2FFF20, #EC489910)', color: '#7B2FFF', span: 'col-span-1' },
  { title: 'AI & ML', icon: FaBrain, href: '/services/ai-development', gradient: 'linear-gradient(135deg, #10B98120, #00D4FF10)', color: '#10B981', span: 'col-span-1' },
  { title: 'Blockchain', icon: FaCubes, href: '/services/blockchain-development', gradient: 'linear-gradient(135deg, #F59E0B20, #FF6B3510)', color: '#F59E0B', span: 'col-span-1' },
  { title: 'Cloud & DevOps', icon: FaCloud, href: '/services/cloud-computing', gradient: 'linear-gradient(135deg, #0EA5E920, #7B2FFF10)', color: '#0EA5E9', span: 'col-span-1' },
  { title: 'UI/UX Design', icon: FaPaintbrush, href: '/services/ui-ux-design', gradient: 'linear-gradient(135deg, #EC489920, #F59E0B10)', color: '#EC4899', span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { title: 'SaaS Platforms', icon: FaRocket, href: '/services/saas-development', gradient: 'linear-gradient(135deg, #6366F120, #EC489910)', color: '#6366F1', span: 'col-span-1' },
  { title: 'DevOps & SRE', icon: FaGears, href: '/services/devops-services', gradient: 'linear-gradient(135deg, #14B8A620, #0EA5E910)', color: '#14B8A6', span: 'col-span-1' },
]

export default function BentoServices() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-4">What We Build</p>
          <h2 className="section-title mb-4">
            Enterprise-grade <span className="gradient-text">capabilities.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Full-spectrum engineering, design, and strategic services to accelerate your digital ambitions.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.06}>
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`${s.span} group enterprise-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] transition-all duration-500 hover:-translate-y-1`}
              style={{ background: s.gradient }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${s.color}18`, color: s.color }}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--color-text)' }}>
                  {s.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-4" style={{ color: s.color }}>
                Explore <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
