import AppinventivHero from '@/components/home/AppinventivHero'
import AppinventivMarquee from '@/components/home/AppinventivMarquee'
import StatsSection from '@/components/home/StatsSection'
import AppinventivHorizontal from '@/components/home/AppinventivHorizontal'
import ServicesSection from '@/components/home/ServicesSection'
import TechStackSection from '@/components/home/TechStackSection'
import Web3Section from '@/components/home/Web3Section'
import IndustriesSection from '@/components/home/IndustriesSection'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-page)' }}>
      {/* Hero — Full-screen with dashboard mockup & gradient text */}
      <AppinventivHero />

      {/* Client Logos — Dual-row infinite marquee */}
      <AppinventivMarquee />

      {/* Stats — 6 enterprise metrics with animated counters */}
      <StatsSection />

      {/* Horizontal Case Studies — GSAP pinned horizontal scroll */}
      <AppinventivHorizontal />

      {/* Services — 9 category cards with background images */}
      <ServicesSection />

      {/* Tech Stack — 60+ technologies in 6 tabbed categories */}
      <TechStackSection />

      {/* Web3 — Blockchain capabilities & network support */}
      <Web3Section />

      {/* Industries — 12 verticals with stat badges */}
      <IndustriesSection />

      {/* Process — 5-step timeline with deliverables */}
      <ProcessSection />

      {/* Testimonials — 6 client cards with star ratings */}
      <TestimonialsSection />

      {/* Awards + CTA — Recognition badges & conversion banner */}
      <CTASection />
    </div>
  )
}
