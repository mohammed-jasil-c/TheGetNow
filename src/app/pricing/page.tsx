'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, HelpCircle, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

const plans = [
  {
    name: 'Startup',
    price: '$5K – $15K',
    desc: 'Perfect for MVPs and early-stage products that need to ship fast.',
    color: '#0057FF',
    features: [
      'MVP in 6-8 weeks',
      '1 Platform (Web or Mobile)',
      'UI/UX Design included',
      'Responsive layout',
      'Basic analytics setup',
      '3 months bug-fix warranty',
      'Bi-weekly progress reports',
      'Slack & email support',
    ],
    cta: 'Launch Your MVP',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$15K – $50K',
    desc: 'For scaling companies that need robust, production-grade architecture.',
    color: '#7B2FFF',
    features: [
      'Everything in Startup, plus:',
      'Multi-platform (Web + Mobile)',
      'Custom API development',
      'Third-party integrations',
      'CI/CD pipeline setup',
      'Performance optimization',
      '6 months warranty + support',
      'Dedicated project manager',
      'Weekly sprint demos',
    ],
    cta: 'Scale Your Product',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$50K+',
    desc: 'For large organizations requiring complex, mission-critical systems.',
    color: '#10b981',
    features: [
      'Everything in Growth, plus:',
      'Unlimited platforms',
      'Microservices architecture',
      'AI/ML integration',
      'Blockchain capabilities',
      'SOC2 & HIPAA compliance',
      'Dedicated engineering pod (4-8 devs)',
      '24/7 on-call SLA',
      'Quarterly roadmap planning',
      'CTO-level advisory',
    ],
    cta: 'Talk to Our Team',
    popular: false,
  },
]

const faqs = [
  { q: 'How long does a typical project take?', a: 'MVPs typically take 6-8 weeks. Growth-tier projects run 3-6 months. Enterprise solutions can span 6-12 months depending on complexity. We provide detailed timelines during the discovery phase.' },
  { q: 'Do you work with early-stage startups?', a: 'Absolutely! About 40% of our clients are seed-stage or Series A startups. Our Startup tier is specifically designed to help founders validate their ideas quickly and cost-effectively.' },
  { q: 'What about ongoing maintenance and support?', a: 'All plans include a post-launch warranty period (3-12 months). Beyond that, we offer retainer-based support packages starting at $2,500/month for ongoing development and maintenance.' },
  { q: 'Can I scale up or switch plans mid-project?', a: 'Yes. Our pricing is flexible. If your requirements grow, we can seamlessly scale up your engagement without starting over. We\'ll simply adjust the team size and sprint cadence.' },
  { q: 'How do you handle intellectual property (IP)?', a: 'You own 100% of the code, designs, and documentation we produce. Full IP transfer happens upon payment. We sign comprehensive NDAs before any project begins.' },
  { q: 'What technologies do you specialize in?', a: 'We work with 60+ technologies across React, Node.js, Flutter, Python, Solidity, AWS, and more. We choose the right tech stack based on your specific requirements, not our preferences.' },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-hero', { y: 50, duration: 1, ease: 'power4.out' })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pricing-hero">
          <p className="section-label">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Transparent pricing,<br /><span className="gradient-text-hero">exceptional value.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No hidden fees. No surprises. Choose the engagement model that fits your stage and scale.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`enterprise-card rounded-3xl p-8 flex flex-col relative ${plan.popular ? 'ring-2' : ''}`}
              style={{
                ...(plan.popular ? { '--tw-ring-color': plan.color, boxShadow: `0 0 40px ${plan.color}20` } as any : {}),
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: plan.color }}>
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>{plan.name}</h3>
                <p className="text-3xl font-black font-accent mb-2" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`text-sm font-bold py-3.5 rounded-full text-center transition-all ${plan.popular ? 'text-white' : ''}`}
                style={{
                  background: plan.popular ? plan.color : 'transparent',
                  border: plan.popular ? 'none' : `1.5px solid var(--border-default)`,
                  color: plan.popular ? '#FFFFFF' : 'var(--text-heading)',
                  boxShadow: plan.popular ? `0 0 25px ${plan.color}40` : 'none',
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label text-center">FAQ</p>
          <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Common <span className="gradient-text">questions.</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="enterprise-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-sm pr-4" style={{ color: 'var(--text-heading)' }}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: 'var(--text-muted)' }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', animation: 'slide-up 0.2s ease' }}>
                    {faq.a}
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
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Need a custom quote?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Every project is unique. Tell us about yours and we'll provide a detailed proposal within 48 hours.
          </p>
          <Link href="/contact" className="glow-button text-base">
            Get Custom Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
