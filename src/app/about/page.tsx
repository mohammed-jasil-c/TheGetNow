import Link from 'next/link'
import { ArrowRight, Users, Target, Zap, Globe, Shield, Award, Heart, Building2 } from 'lucide-react'

export const metadata = {
  title: 'About | TheGetNow — Enterprise Software Development Agency',
  description: 'Learn about TheGetNow, our mission, vision, leadership team, and the 300+ engineers behind our world-class digital solutions.',
}

const team = [
  { name: 'Arjun Mehta', role: 'CEO & Co-Founder', img: 'https://i.pravatar.cc/300?img=52', bio: 'Ex-Google Engineering Lead. 15+ years in enterprise software.', linkedin: '#' },
  { name: 'Sarah Chen', role: 'CTO', img: 'https://i.pravatar.cc/300?img=5', bio: 'Ex-AWS Principal Architect. PhD in Distributed Systems.', linkedin: '#' },
  { name: 'James Wright', role: 'VP Engineering', img: 'https://i.pravatar.cc/300?img=8', bio: 'Built engineering teams at Scale AI and Stripe.', linkedin: '#' },
  { name: 'Maria Lopez', role: 'Head of Design', img: 'https://i.pravatar.cc/300?img=20', bio: 'Former design lead at Airbnb. 12+ years in UX.', linkedin: '#' },
]

const timeline = [
  { year: '2018', title: 'Founded in Gurugram', desc: 'Started with 3 engineers and a vision to build world-class software.' },
  { year: '2019', title: 'First Enterprise Client', desc: 'Signed our first Fortune 500 engagement — a $2M banking platform.' },
  { year: '2020', title: '100 Engineers', desc: 'Expanded to 100+ engineers across 5 countries during the pandemic.' },
  { year: '2022', title: 'Web3 Division Launch', desc: 'Launched dedicated blockchain division. Secured $500M+ in TVL for clients.' },
  { year: '2023', title: 'Global Expansion', desc: 'Opened offices in NYC, London, and Dubai. Reached 250+ engineers.' },
  { year: '2024', title: '#1 on Clutch', desc: 'Rated #1 App Development Company globally. 1000+ projects delivered.' },
]

const awards = [
  { emoji: '🏆', title: '#1 App Developer', org: 'Clutch Global' },
  { emoji: '🥇', title: 'Top AI Company', org: 'G2 Enterprise' },
  { emoji: '⚡', title: 'Fastest Growing', org: 'Inc. 5000' },
  { emoji: '🌟', title: 'Best Web3 Agency', org: 'Deloitte' },
  { emoji: '🎖', title: 'AWS Partner', org: 'Amazon' },
  { emoji: '💎', title: 'Google Cloud Partner', org: 'Google' },
  { emoji: '🏅', title: 'Microsoft Partner', org: 'Azure' },
  { emoji: '🎯', title: 'Top Mobile Dev', org: 'GoodFirms' },
]

const stats = [
  { val: '300+', label: 'Engineers' },
  { val: '50+', label: 'Countries' },
  { val: '1000+', label: 'Projects' },
  { val: '$3.2B+', label: 'Revenue Unlocked' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>

      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="section-label">About Us</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Engineering the <span className="gradient-text-hero">future, today.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            300+ engineers. 50+ countries. 1000+ projects. We are the agency behind the most ambitious digital products on the planet.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black font-accent gradient-text mb-1">{s.val}</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="enterprise-card p-10 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0, 87, 255, 0.12)' }}>
              <Target className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            </div>
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: 'var(--text-heading)' }}>Our Mission</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To empower businesses globally through bleeding-edge technology, unparalleled design, and scalable execution. We solve complex problems by building intuitive, high-performance digital ecosystems that serve millions.
            </p>
          </div>
          <div className="enterprise-card p-10 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(123, 47, 255, 0.12)' }}>
              <Globe className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
            </div>
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: 'var(--text-heading)' }}>Our Vision</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To be the definitive vanguard of digital transformation, where every product we ship sets the new industry benchmark for quality, aesthetic, and performance across every vertical and geography.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Leadership</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Meet our <span className="gradient-text">leadership team.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(t => (
              <div key={t.name} className="enterprise-card rounded-3xl overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-heading)' }}>{t.name}</h3>
                  <p className="text-sm font-semibold mb-2 gradient-text">{t.role}</p>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{t.bio}</p>
                  <a href={t.linkedin} className="text-xs font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    <i className="fa-brands fa-linkedin-in" /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Our Journey</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            From 3 engineers to <span className="gradient-text">global impact.</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6 relative">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[23px] top-14 bottom-0 w-px" style={{ background: 'var(--border-subtle)' }} />
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-black z-10" style={{ background: 'rgba(0, 87, 255, 0.12)', border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }}>
                  {t.year.slice(-2)}
                </div>
                <div className="pb-12">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>{t.year}</p>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="section-label text-center">Awards & Recognition</p>
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Recognized by <span className="gradient-text">the best.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awards.map(a => (
              <div key={a.title} className="enterprise-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{a.title}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Ready to build <span className="gradient-text">together?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Transform your business operations and elevate your digital experience with TheGetNow.
          </p>
          <Link href="/contact" className="glow-button text-base">
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
