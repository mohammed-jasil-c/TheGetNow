'use client'

import type { FullPage } from '@/lib/types'
import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, ArrowRight, CheckCircle2, Phone, MessageSquare, TrendingUp, Users, Globe, Award } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Per-industry data enrichment based on slug patterns
const iconMap: Record<string, string> = {
  'healthcare': '🏥', 'finance': '💳', 'retail': '🛒', 'logistics': '🚚', 'education': '🎓',
  'travel': '✈️', 'gaming': '🎮', 'automotive': '🚗', 'sports': '⚽', 'on-demand': '⚡',
  'events': '🎪', 'agriculture': '🌾', 'social-networking': '👥', 'fitness': '💪',
  'entertainment': '🎬', 'restaurant': '🍽️', 'saas': '☁️', 'real-estate': '🏢',
  'electric-vehicle': '⚡', 'news': '📰', 'aviation': '🛫', 'ott': '📺', 'manufacturing': '🏭',
}

const techStackByIndustry: Record<string, string[]> = {
  healthcare: ['React Native', 'HL7 FHIR', 'AWS HealthLake', 'Python ML', 'Blockchain'],
  finance: ['Node.js', 'Solidity', 'PCI-DSS', 'Kafka', 'Redis'],
  retail: ['Next.js', 'Shopify API', 'Stripe', 'Elasticsearch', 'Redis'],
  default: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
}

function getIcon(slug: string) {
  return iconMap[slug] || '💡'
}

function getTechStack(category: string, slug: string) {
  return techStackByIndustry[slug] || techStackByIndustry[category] || techStackByIndustry.default
}

const sampleCaseStudies = [
  { brand: 'Global Corp A', result: '3x Revenue Growth', timeframe: '6 months' },
  { brand: 'Tech Giant B', result: '50% Cost Reduction', timeframe: '4 months' },
  { brand: 'Scale-Up C', result: '10M users acquired', timeframe: '12 months' },
]

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Deep-dive workshops to understand your business model, users, and competitive landscape.' },
  { num: '02', title: 'Architecture Design', desc: 'Scalable, secure, and performant system blueprints crafted by senior architects.' },
  { num: '03', title: 'Agile Development', desc: '2-week sprints with continuous delivery, demos, and feedback loops.' },
  { num: '04', title: 'QA & Security Audit', desc: 'Automated tests, penetration testing, compliance checks before every release.' },
  { num: '05', title: 'Launch & Scale', desc: 'Zero-downtime deployment, real-time monitoring, and hyper-growth support.' },
]

export default function IndustriesLayout({ page }: { page: FullPage }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeProcess, setActiveProcess] = useState(0)
  const baseColor = page.accent_color || '#7c3aed'

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.ind-hero-title', {
        y: 100, opacity: 0, duration: 1.4, ease: 'power4.out', delay: 0.1
      })
      gsap.from('.ind-hero-sub', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4
      })
      gsap.from('.ind-hero-cta', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.7
      })
      gsap.from('.ind-stat', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.9
      })

      // Marquee service tags
      gsap.to('.service-marquee-inner', {
        x: '-50%', duration: 25, ease: 'linear', repeat: -1
      })

      // Feature cards stagger
      gsap.from('.ind-feature', {
        y: 80, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-features', start: 'top 75%' }
      })

      // Process steps timeline draw
      gsap.from('.proc-step', {
        x: -60, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.proc-section', start: 'top 75%' }
      })

      // Global presence numbers
      gsap.from('.globe-stat', {
        scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.globe-section', start: 'top 75%' }
      })

      // FAQs accordion items
      gsap.from('.faq-item', {
        y: 40, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-section', start: 'top 80%' }
      })

    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  // Rotate active process step
  useEffect(() => {
    const t = setInterval(() => setActiveProcess(p => (p + 1) % processSteps.length), 3000)
    return () => clearInterval(t)
  }, [])

  const features = page.page_features?.length ? page.page_features : [
    { id: 1, title: 'Custom Software Development', description: `We build bespoke ${page.title.toLowerCase()} platforms tailored to your exact requirements.` },
    { id: 2, title: 'Mobile App Development', description: `Native iOS, Android, and cross-platform apps for the ${page.title.toLowerCase()} sector.` },
    { id: 3, title: 'AI & Machine Learning Integration', description: `Leverage predictive analytics and intelligent automation for ${page.title.toLowerCase()} workflows.` },
    { id: 4, title: 'Blockchain & Web3', description: `Decentralized, secure smart contracts and DApps for ${page.title.toLowerCase()} transactions.` },
    { id: 5, title: 'Cloud Infrastructure & DevOps', description: `Scalable, highly available cloud-native architectures with CI/CD pipelines.` },
    { id: 6, title: 'UI/UX & Product Design', description: `Research-driven, conversion-optimized interfaces built for end-users in ${page.title.toLowerCase()}.` },
  ]

  const stats = page.page_stats?.length ? page.page_stats : [
    { label: 'Projects Delivered', value: '500', suffix: '+' },
    { label: 'Happy Clients', value: '350', suffix: '+' },
    { label: 'Countries', value: '25', suffix: '+' },
    { label: 'Expert Team', value: '200', suffix: '+' },
  ]

  const faqs = page.page_faqs?.length ? page.page_faqs : [
    { id: 1, question: `How long does a typical ${page.title} project take?`, answer: `Depending on scope and complexity, most ${page.title.toLowerCase()} projects range from 3 to 9 months. We use agile sprints for early and continuous delivery.` },
    { id: 2, question: `What is the cost of building a ${page.title} solution?`, answer: `Costs vary based on features and scale. We offer flexible engagement models — Fixed Price, Time & Material, and Dedicated Team. Contact us for a free estimate.` },
    { id: 3, question: `Does your team have domain expertise in ${page.title}?`, answer: `Yes. Our dedicated ${page.title.toLowerCase()} pod has specialized business analysts, architects, and developers who understand the regulatory, technical, and UX nuances of the industry.` },
    { id: 4, question: `Can you work with our existing technology stack?`, answer: `Absolutely. We are technology-agnostic and can integrate with any existing system. Our engineers are proficient in 50+ modern and legacy technologies.` },
  ]

  const techStack = getTechStack(page.category, page.slug)
  const industryIcon = getIcon(page.slug)

  return (
    <div ref={wrapperRef} className="min-h-screen bg-[#0a0a0c] text-white selection:bg-violet-500/20 overflow-x-hidden">

      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
        {/* Layered gradient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"
               style={{ background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${baseColor}, transparent)` }} />
          <div className="absolute bottom-0 right-0 w-full h-full opacity-10"
               style={{ background: `radial-gradient(ellipse 60% 40% at 100% 100%, ${baseColor}, transparent)` }} />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
               style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Industries
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                <span className="text-2xl">{industryIcon}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{page.category}</span>
              </div>

              <h1 className="ind-hero-title text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6"
                  style={{ textShadow: `0 20px 80px ${baseColor}60` }}>
                {page.title}
              </h1>

              <p className="ind-hero-sub text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-xl mb-10 font-light">
                {page.description}
              </p>

              <div className="ind-hero-cta flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg text-black hover:opacity-90 transition-all shadow-2xl"
                  style={{ background: baseColor, boxShadow: `0 20px 60px ${baseColor}40` }}>
                  <Phone className="w-5 h-5" />
                  Consult Our Experts
                </Link>
                <Link href="/case-studies"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/15 font-bold text-lg text-white hover:bg-white/5 transition-all">
                  <MessageSquare className="w-5 h-5" />
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i}
                     className="ind-stat p-8 rounded-3xl border border-white/5 bg-[#0d0d12] hover:border-white/15 transition-all group">
                  <div className="text-5xl font-black mb-2 tracking-tighter group-hover:scale-105 transition-transform"
                       style={{ color: baseColor }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent mx-auto mb-2" />
          <span className="text-xs text-zinc-600 uppercase tracking-widest font-bold">Scroll</span>
        </div>
      </section>

      {/* ── 2. SERVICE TICKER MARQUEE ─────────────────────────────── */}
      <div className="py-6 border-y border-white/5 overflow-hidden bg-[#07070a]">
        <div className="service-marquee-inner flex items-center gap-12 whitespace-nowrap w-max">
          {[...features, ...features].map((f, i) => (
            <span key={i} className="flex items-center gap-3 text-zinc-500 font-bold text-sm uppercase tracking-widest pr-12">
              <span style={{ color: baseColor }}>●</span> {f.title}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. WHAT WE BUILD (FEATURES) ───────────────────────────── */}
      <section className="ind-features py-32 bg-[#0a0a0c]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: baseColor }}>What We Build</p>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight sticky top-32">
                Everything Your<br/>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${baseColor}, #ffffff)` }}>
                  {page.title} Business
                </span><br/>
                Needs
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <div key={feature.id}
                     className="ind-feature p-7 rounded-2xl border border-white/5 bg-[#0d0d12] hover:border-white/15 hover:bg-[#12121a] group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-3 right-5 text-7xl font-black opacity-[0.04] group-hover:opacity-[0.07] transition-opacity select-none"
                       style={{ color: baseColor }}>
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center border border-white/10"
                       style={{ background: `${baseColor}20` }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: baseColor }} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR PROCESS ────────────────────────────────────────── */}
      <section className="proc-section py-32 bg-[#07070a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: baseColor }}>How We Work</p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Our Battle-Tested<br/>Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

            {processSteps.map((step, i) => (
              <div
                key={i}
                className="proc-step relative flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-2xl transition-all duration-500 cursor-pointer"
                style={i === activeProcess ? { background: `${baseColor}10`, border: `1px solid ${baseColor}40` } : { border: '1px solid transparent' }}
                onClick={() => setActiveProcess(i)}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 font-black text-xl z-10 relative"
                     style={i === activeProcess
                       ? { background: baseColor, color: '#000' }
                       : { background: '#1a1a1f', color: '#6b7280', border: '1px solid rgba(255,255,255,0.1)' }
                     }>
                  {step.num}
                </div>
                <h3 className="font-black text-white mb-2">{step.title}</h3>
                {i === activeProcess && (
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TECH STACK ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0c]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: baseColor }}>Technology</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Technologies We Use</h2>
            </div>
            <p className="text-zinc-500 max-w-md font-medium">Battle-tested stack for building scalable, secure, and performant {page.title.toLowerCase()} products.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, i) => (
              <div key={i}
                   className="px-6 py-3 rounded-full border border-white/10 bg-[#0d0d12] text-zinc-300 font-bold text-sm hover:border-white/30 hover:text-white transition-all cursor-default"
                   style={{ animationDelay: `${i * 100}ms` }}>
                {tech}
              </div>
            ))}
            {['React', 'Next.js', 'TypeScript', 'Go', 'Rust', 'Python', 'TensorFlow', 'Kubernetes', 'Terraform', 'Elasticsearch'].filter(t => !techStack.includes(t)).slice(0, 6).map((tech, i) => (
              <div key={`extra-${i}`}
                   className="px-6 py-3 rounded-full border border-white/5 bg-[#0d0d12] text-zinc-600 font-bold text-sm hover:border-white/20 hover:text-zinc-400 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MINI CASE STUDIES ──────────────────────────────────── */}
      <section className="py-32 bg-[#07070a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: baseColor }}>Proof</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Results We've<br/>Delivered</h2>
            </div>
            <Link href="/case-studies" className="flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 hover:border-white transition-all">
              All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleCaseStudies.map((cs, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#0d0d12] border border-white/5 hover:border-white/15 hover:bg-[#12121a] transition-all duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-2xl font-black text-zinc-400 group-hover:text-white transition-colors">{cs.brand}</div>
                  <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="text-4xl font-black text-white mb-2" style={{ color: baseColor }}>{cs.result}</div>
                <div className="text-zinc-500 text-sm">in {cs.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. GLOBAL REACH ───────────────────────────────────────── */}
      <section className="globe-section py-32 bg-[#0a0a0c]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: baseColor }}>Global Impact</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Trusted Across the Globe
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-8 h-8"/>, value: '35+', label: 'Countries' },
              { icon: <Users className="w-8 h-8"/>, value: '1000+', label: 'Brands Served' },
              { icon: <TrendingUp className="w-8 h-8"/>, value: '$2B+', label: 'Value Delivered' },
              { icon: <Award className="w-8 h-8"/>, value: '50+', label: 'Awards Won' },
            ].map((item, i) => (
              <div key={i} className="globe-stat p-8 rounded-3xl text-center bg-[#0d0d12] border border-white/5 hover:border-white/15 transition-all group">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform"
                     style={{ background: `${baseColor}20`, color: baseColor }}>
                  {item.icon}
                </div>
                <div className="text-4xl font-black text-white mb-1">{item.value}</div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ──────────────────────────────────────── */}
      <section className="faq-section py-32 bg-[#07070a] border-t border-white/5">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: baseColor }}>Know More</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} baseColor={baseColor} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BOTTOM ─────────────────────────────────────────── */}
      <section className="py-40 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${baseColor}15, transparent)` }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm font-black uppercase tracking-widest mb-6" style={{ color: baseColor }}>Let's Build Together</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">Ready to Disrupt<br/>{page.title}?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Share your idea and get a free solution blueprint from our {page.title.toLowerCase()} domain experts within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-12 py-6 rounded-full font-black text-xl text-black hover:scale-105 transition-transform shadow-2xl"
              style={{ background: baseColor, boxShadow: `0 20px 60px ${baseColor}40` }}>
              Get a Free Consultation
            </Link>
            <Link href="/industries"
              className="px-12 py-6 rounded-full border border-white/20 font-bold text-xl text-white hover:bg-white/5 transition-all flex items-center gap-3">
              <ArrowLeft className="w-5 h-5" /> All Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// ── FAQ Accordion Item ──────────────────────────────────────────────────────
function FAQItem({ faq, baseColor }: { faq: { id: number | string; question: string; answer: string }, baseColor: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item border border-white/5 rounded-2xl overflow-hidden bg-[#0d0d12] hover:border-white/10 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-7 text-left group"
      >
        <span className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors pr-4">{faq.question}</span>
        <span className="text-2xl flex-shrink-0 transition-transform duration-300 select-none"
              style={{ transform: open ? 'rotate(45deg)' : 'none', color: baseColor }}>
          +
        </span>
      </button>
      {open && (
        <div className="px-7 pb-7">
          <p className="text-zinc-400 text-base leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}
