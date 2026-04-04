'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  { quote: "TheGetNow rebuilt our entire DeFi protocol from scratch. $200M TVL in 3 months post-launch with zero security incidents. An extraordinary engineering team.", author: 'Alex R.', role: 'CTO, DeFi Protocol', img: 'https://i.pravatar.cc/80?img=3' },
  { quote: "Their blockchain team delivered our NFT marketplace ahead of schedule. The smart contract architecture is incredibly gas-efficient and the UI is world-class.", author: 'Sarah L.', role: 'CEO, NFT Platform', img: 'https://i.pravatar.cc/80?img=5' },
  { quote: "We needed a custom Node-based ERP. Their team delivered a comprehensive solution in 4 months. The quality and speed absolutely exceeded every expectation.", author: 'James K.', role: 'VP Engineering, SaaS', img: 'https://i.pravatar.cc/80?img=8' },
  { quote: "Hands-down the best blockchain development company we've partnered with. They brought Web3 expertise that was way beyond what we expected for our dApp.", author: 'Maria P.', role: 'Product Lead, GameFi', img: 'https://i.pravatar.cc/80?img=12' },
  { quote: "TheGetNow transformed our digital banking experience. Our mobile app now processes $1.2B in daily transactions with a 4.8-star rating on both stores.", author: 'David Chen', role: 'CTO, FinanceFlow', img: 'https://i.pravatar.cc/80?img=15' },
  { quote: "Their AI team built us a predictive analytics engine that increased our supply chain efficiency by 40%. ROI was achieved in the first quarter.", author: 'Priya S.', role: 'VP Operations, RetailMax', img: 'https://i.pravatar.cc/80?img=20' },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-content', {
        y: 100, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.testi-content', start: 'top 85%' }
      })
      gsap.from('.testi-card', {
        x: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.testi-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-page)' }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none" style={{ background: 'rgba(0, 87, 255, 0.06)' }} />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="testi-content text-center mb-16">
          <p className="section-label">Client Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            The results <span className="gradient-text">speak.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="testi-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="testi-card enterprise-card rounded-3xl p-8 flex flex-col justify-between gap-6 cursor-default"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-base leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full object-cover ring-2" style={{ '--tw-ring-color': 'var(--color-primary)' } as any} />
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--text-heading)' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
