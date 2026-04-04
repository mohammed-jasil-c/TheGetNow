import type { FullPage } from '@/lib/types'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function LandingLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="text-xl font-bold tracking-tighter mix-blend-difference">{page.category}.</div>
        <Link href={`/${page.category}`} className="px-5 py-2 border border-white/20 hover:bg-white hover:text-black rounded-full text-sm font-medium transition-colors">
          Back Home
        </Link>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay z-10" />
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-50" style={{ background: page.hero_gradient }} />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-20 w-full" data-gsap-slide-up>
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter mb-8">
              {page.title}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-2xl leading-tight mb-12">
              {page.subtitle || page.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-14 px-8 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-8">
          {page.page_features?.map((feature, i) => (
            <div key={feature.id} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-white/30 transition-colors group" data-gsap-fade>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ color: page.accent_color }}>
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${page.accent_color}, transparent 70%)` }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to transform your workflow?</h2>
          <button className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}
