import type { FullPage } from '@/lib/types'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CinematicLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${page.hero_gradient} opacity-20`} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full mt-20" data-gsap-fade>
          <Link href={`/${page.category}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to {page.category}
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white text-sm font-medium backdrop-blur-md">
              {page.category.toUpperCase()}
            </div>
            {page.subtitle && <span className="text-zinc-400">{page.subtitle}</span>}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] max-w-4xl" 
              style={{ textShadow: `0 0 80px ${page.accent_color}` }}>
            {page.title}
          </h1>
          
          <p className="text-2xl text-zinc-300 max-w-2xl leading-relaxed mb-12 border-l-4 pl-6" style={{ borderColor: page.accent_color }}>
            {page.description}
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors">
              Get Started Now
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-colors">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      {page.page_stats?.length > 0 && (
        <section className="py-20 border-b border-white/10 bg-black relative z-10">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {page.page_stats.map((stat, i) => (
              <div key={i} className="text-center" data-gsap-fade>
                <div className="text-5xl md:text-6xl font-black text-white mb-2" style={{ color: page.accent_color }}>
                  <span data-gsap-counter={stat.value}>{stat.value}</span>{stat.suffix}
                </div>
                <div className="text-zinc-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      {page.page_features?.length > 0 && (
        <section className="py-32 bg-[#0a0a0f] relative z-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20" data-gsap-fade>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose {page.title}?</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Discover the powerful capabilities of our enterprise solution.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.page_features.map((feature, i) => (
                <div key={feature.id} className="glass-card p-8 rounded-3xl group hover:border-white/20 transition-colors" data-gsap-fade>
                  <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors" style={{ color: page.accent_color }}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
