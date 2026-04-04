'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── 23 Industries like Appinventiv ──────────────────────────────
const industries = [
  { slug: 'logistics', num: '01', name: 'Logistics', icon: '🚚', accent: '#f59e0b', description: 'AI/ML-enabled supply chain software for last-mile delivery, route optimization, and warehouse automation.', tags: ['Supply Chain', 'Route Optimization', 'Last-Mile Delivery'] },
  { slug: 'healthcare', num: '02', name: 'Healthcare', icon: '🏥', accent: '#10b981', description: 'Digital medical care, HIPAA-compliant telemedicine platforms, and EMR solutions built to save lives.', tags: ['Telemedicine', 'HIPAA Compliant', 'EMR Systems'] },
  { slug: 'travel', num: '03', name: 'Travel', icon: '✈️', accent: '#06b6d4', description: 'End-to-end solutions for airlines, hotels, and agencies — from booking engines to loyalty platforms.', tags: ['Booking Engines', 'Loyalty Programs', 'GDS Integration'] },
  { slug: 'gaming', num: '04', name: 'Gaming', icon: '🎮', accent: '#8b5cf6', description: 'Immersive tech integration powering mobile, PC, and console gaming experiences worldwide.', tags: ['Unity & Unreal', 'Multiplayer', 'NFT Gaming'] },
  { slug: 'retail', num: '05', name: 'eCommerce', icon: '🛒', accent: '#f43f5e', description: 'Scalable storefronts and marketplaces built for hyper-growth — from midnight launches to Black Friday.', tags: ['Storefronts', 'Marketplaces', 'Headless Commerce'] },
  { slug: 'finance', num: '06', name: 'Finance', icon: '💳', accent: '#0ea5e9', description: 'FinTech, banking apps, and financial software that processes over $1B in transactions daily.', tags: ['FinTech', 'Banking Apps', 'Payment Gateways'] },
  { slug: 'automotive', num: '07', name: 'Automotive', icon: '🚗', accent: '#ef4444', description: 'Connected car ecosystems, automotive software, and fleet management platforms for the modern era.', tags: ['Connected Cars', 'Fleet Management', 'EV Tech'] },
  { slug: 'education', num: '08', name: 'Education', icon: '🎓', accent: '#84cc16', description: 'EdTech platforms, e-learning apps, and LMS solutions that have educated 50M+ learners globally.', tags: ['LMS', 'E-Learning', 'Student Portals'] },
  { slug: 'sports', num: '09', name: 'Sports', icon: '⚽', accent: '#f97316', description: 'Engaging UI/UX for sports businesses — from live score apps to athlete performance tracking.', tags: ['Live Scores', 'Fantasy Sports', 'Athlete Tracking'] },
  { slug: 'on-demand', num: '10', name: 'On-Demand', icon: '⚡', accent: '#a855f7', description: 'Custom on-demand app development covering food, beauty, home services, and more.', tags: ['Marketplace', 'Real-time Tracking', 'Provider Apps'] },
  { slug: 'events', num: '11', name: 'Events', icon: '🎪', accent: '#14b8a6', description: 'Real-time event management software — ticketing, attendee apps, and hybrid event platforms.', tags: ['Ticketing', 'Attendee Apps', 'Hybrid Events'] },
  { slug: 'agriculture', num: '12', name: 'Agriculture', icon: '🌾', accent: '#65a30d', description: 'Smart farming and AgriTech solutions digitizing the entire crop cycle from seed to sale.', tags: ['Smart Farming', 'IoT Sensors', 'AgriTech'] },
  { slug: 'social-networking', num: '13', name: 'Social Networking', icon: '👥', accent: '#ec4899', description: 'Build the next viral social platform — from dating apps to professional networks and creator economies.', tags: ['Feeds & Stories', 'Messaging', 'Content Monetization'] },
  { slug: 'fitness', num: '14', name: 'Fitness', icon: '💪', accent: '#f59e0b', description: 'Health apps with wearable integration — powering everything from gym software to personal training.', tags: ['Wearable Integration', 'Workout Tracking', 'Nutrition Apps'] },
  { slug: 'entertainment', num: '15', name: 'Entertainment', icon: '🎬', accent: '#7c3aed', description: 'Immersive media and entertainment solutions for streaming, AR/VR experiences, and content discovery.', tags: ['OTT Platforms', 'AR/VR', 'Content Discovery'] },
  { slug: 'restaurant', num: '16', name: 'Restaurant', icon: '🍽️', accent: '#dc2626', description: 'Software for the food & beverage industry — POS systems, online ordering, and kitchen automations.', tags: ['POS Systems', 'Online Ordering', 'Kitchen Display'] },
  { slug: 'saas', num: '17', name: 'SaaS', icon: '☁️', accent: '#2563eb', description: 'Scalable software-as-a-service products with multi-tenancy, billing, and subscription management baked in.', tags: ['Multi-Tenancy', 'Subscription Billing', 'API-First'] },
  { slug: 'real-estate', num: '18', name: 'Real Estate', icon: '🏢', accent: '#0891b2', description: 'Digital solutions for property management, virtual tours, ML-powered valuations, and PropTech.', tags: ['Virtual Tours', 'ML Valuations', 'PropTech'] },
  { slug: 'electric-vehicle', num: '19', name: 'Electric Vehicle', icon: '⚡', accent: '#16a34a', description: 'Software for the EV ecosystem — charging network management, fleet electrification, and range analytics.', tags: ['Charging Networks', 'Fleet Electrification', 'Range Analytics'] },
  { slug: 'news', num: '20', name: 'News & Media', icon: '📰', accent: '#b45309', description: 'Magazine and newspaper app development with personalized feeds, paywall engines, and push alerts.', tags: ['Digital Publishing', 'Paywall Engines', 'Push Alerts'] },
  { slug: 'aviation', num: '21', name: 'Aviation', icon: '🛫', accent: '#0369a1', description: 'Tech solutions for the aviation industry — crew management, MRO software, and passenger experience apps.', tags: ['Crew Management', 'MRO Software', 'Passenger Experience'] },
  { slug: 'ott', num: '22', name: 'OTT / Streaming', icon: '📺', accent: '#dc2626', description: 'Video streaming and OTT platforms with adaptive bitrate, DRM, live broadcasting, and recommendation AI.', tags: ['Adaptive Bitrate', 'DRM', 'Live Streaming'] },
  { slug: 'manufacturing', num: '23', name: 'Manufacturing', icon: '🏭', accent: '#6366f1', description: 'Industry 4.0 solutions — connected factory floors, predictive maintenance, and digital twin simulations.', tags: ['Industry 4.0', 'Predictive Maintenance', 'Digital Twins'] },
]

const caseStudies = [
  { brand: 'KFC', icon: '🍗', result: '22% Conversion Increase', desc: 'Rebuilt KFC digital ordering experience across 148 countries.', color: '#dc2626' },
  { brand: 'IKEA', icon: '🪑', result: '3.2M App Downloads', desc: 'Designed IKEA AR furniture placement feature used by millions daily.', color: '#0ea5e9' },
  { brand: 'Emirates NBD', icon: '🏦', result: '$1.2B Processed Daily', desc: 'Built the core banking mobile app for one of UAE largest banks.', color: '#f59e0b' },
  { brand: 'Dominos', icon: '🍕', result: '40% Faster Delivery', desc: 'AI-driven routing system cutting delivery times across 12,000 stores.', color: '#10b981' },
]

const stats = [
  { value: '3000+', label: 'Digital Deliveries' },
  { value: '35+', label: 'Industries Served' },
  { value: '1000+', label: 'Expert Team Members' },
  { value: '11', label: 'Global Offices' },
]

const wordCycle = ['FinTech', 'HealthTech', 'EdTech', 'RetailTech', 'AgriTech', 'GovTech', 'LegalTech', 'SpaceTech']

export default function IndustriesPage() {
  const [activeWord, setActiveWord] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Hero word cycle
  useEffect(() => {
    const t = setInterval(() => setActiveWord(w => (w + 1) % wordCycle.length), 2000)
    return () => clearInterval(t)
  }, [])

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ticker scrolls in
      gsap.from('.ticker-bar', { y: -40, opacity: 0, duration: 0.8, ease: 'power3.out' })

      // Hero heading
      gsap.from('.hero-line', { y: 80, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 })

      // Stats counter section appears
      gsap.from('.stat-item', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 80%' }
      })

      // Industry cards reveal
      gsap.from('.industry-card', {
        y: 80, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.industries-grid', start: 'top 75%' }
      })

      // Case studies slide in
      gsap.from('.case-card', {
        x: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.case-studies-section', start: 'top 75%' }
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
      
      {/* ── TOP TICKER ─────────────────────────────────────────────── */}
      <div className="ticker-bar bg-white text-black py-3 overflow-hidden fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center gap-0 animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {Array.from({length: 6}).map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 text-sm font-bold tracking-widest uppercase">
              <span>3000+ Digital Deliveries</span>
              <span className="w-2 h-2 rounded-full bg-black/30 inline-block" />
              <span>35+ Industries</span>
              <span className="w-2 h-2 rounded-full bg-black/30 inline-block" />
              <span>1000+ Team Members</span>
              <span className="w-2 h-2 rounded-full bg-black/30 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff08 0%, transparent 100%), radial-gradient(1px 1px at 80px 100px, #ffffff06 0%, transparent 100%)`,
          backgroundSize: '100px 100px'
        }} />

        {/* Award Badges */}
        <div className="flex items-center gap-6 mb-12 flex-wrap justify-center px-6">
          {['🏆 Deloitte Fast 50', '⭐ Clutch 4.9/5', '🌍 3 Continent Presence', '📊 $2B+ Delivered'].map((badge, i) => (
            <div key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-bold text-zinc-300">
              {badge}
            </div>
          ))}
        </div>

        {/* Main Hero Heading */}
        <div className="text-center px-6 max-w-6xl">
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-none mb-4">
            <span className="hero-line block text-white">We Build for</span>
            <span className="hero-line block relative overflow-hidden">
              <span
                key={activeWord}
                className="text-transparent bg-clip-text block"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #c084fc, #38bdf8)' }}
              >
                {wordCycle[activeWord]}
              </span>
            </span>
            <span className="hero-line block text-white">& Beyond.</span>
          </h1>
          
          <p className="hero-line mt-10 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            From 3-person startups to Fortune 500 enterprises — we've delivered 3000+ digital products across 35 industries and 11 geographies.
          </p>

          <div className="hero-line mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-zinc-100 transition-all shadow-2xl shadow-white/10">
              Consult Our Experts
            </Link>
            <Link href="#industries" className="px-10 py-5 rounded-full border border-white/20 font-bold text-lg text-white hover:bg-white/5 transition-all flex items-center gap-2">
              EXPLORE NOW <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Scroll</span>
        </div>
      </section>

      {/* ── GLOBAL STATS ───────────────────────────────────────────── */}
      <section className="stats-section py-24 border-y border-white/5 bg-[#07070a]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tighter"
                   style={{ textShadow: '0 0 60px rgba(139,92,246,0.4)' }}>
                {stat.value}
              </div>
              <div className="text-zinc-500 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES GRID ────────────────────────────────────────── */}
      <section id="industries" className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-4">What We Serve</p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Dominate</span>
            </h2>
          </div>

          <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="industry-card group relative p-8 rounded-3xl border border-white/5 bg-[#0d0d12] hover:bg-[#12121a] hover:border-white/15 transition-all duration-500 overflow-hidden block"
                onMouseEnter={() => setHovered(ind.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Big number background */}
                <div className="absolute top-4 right-6 text-8xl font-black opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none" style={{ color: ind.accent }}>
                  {ind.num}
                </div>
                
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(300px circle at 50% 0%, ${ind.accent}15, transparent)` }}
                />

                {/* Icon */}
                <div className="text-4xl mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {ind.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {ind.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold border border-white/10 text-zinc-400" style={{ borderColor: `${ind.accent}30`, color: ind.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Arrow */}
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-500 group-hover:text-white transition-colors duration-300">
                  Explore {ind.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: ind.accent }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────────────────── */}
      <section className="case-studies-section py-32 bg-[#07070a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-4">Results That Matter</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Brands That <br/>Trust Us
              </h2>
            </div>
            <Link href="/case-studies" className="flex items-center gap-3 text-white font-bold text-lg border-b border-white/20 pb-2 hover:border-violet-500 hover:text-violet-400 transition-all">
              All Case Studies <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="case-card group relative p-8 rounded-3xl bg-[#0d0d12] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                     style={{ background: `radial-gradient(200px circle at 50% 0%, ${cs.color}20, transparent)` }} />
                
                <div className="text-5xl mb-6">{cs.icon}</div>
                <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: cs.color }}>{cs.brand}</div>
                <h3 className="text-2xl font-black text-white mb-3">{cs.result}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{cs.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors">
                  Read Case Study <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ───────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-4">Global Presence</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">Trusted by 1000+ Brands<br/>Across 11 Geographies</h2>
          </div>

          {/* Region tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['America', 'Europe', 'Middle East', 'Asia Pacific', 'Africa'].map((region) => (
              <button key={region} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all">
                {region}
              </button>
            ))}
          </div>

          {/* Client logos placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['IKEA', 'Adidas', "Domino's", 'KFC', 'Emirates', 'Bata', 'Vyrb', 'Mudra', 'Samsung', 'Lufthansa', 'Caravan', 'SportsBuzz'].map((brand, i) => (
              <div key={i} className="h-20 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-all flex items-center justify-center">
                <span className="text-zinc-400 font-black text-sm tracking-wide uppercase">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#07070a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-4">What They Say</p>
            <h2 className="text-5xl md:text-6xl font-black text-white max-w-3xl leading-tight">
              Industry Leaders Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Something to Say</span> About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'David Chen', role: 'CEO, TechCorp', quote: 'TheGetNow transformed our entire digital infrastructure in just 4 months. We saw 3x user engagement immediately after launch.' },
              { name: 'Sarah Williams', role: 'CTO, FinanceFlow', quote: 'Their blockchain development team is world-class. Our DeFi platform now handles $500M in daily volume without a single downtime.' },
              { name: 'Raj Sharma', role: 'VP Product, RetailMax', quote: 'Best engineering partner we\'ve ever worked with. They don\'t just build software — they build businesses.' },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0d0d12] border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {Array.from({length: 5}).map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div>
                  <div className="font-black text-white">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <section className="py-40 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.15),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
            Ready to Build?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Tell us about your industry and project. Our experts will craft a solution roadmap within 48 hours — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:scale-105 transition-transform shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              Talk to Our Experts
            </Link>
            <Link href="/case-studies" className="px-12 py-6 rounded-full border border-white/20 font-bold text-xl text-white hover:bg-white/5 transition-all flex items-center gap-3 justify-center">
              View Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
