import type { FullPage } from '@/lib/types'
import { ArrowLeft, Star, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ShowcaseLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100">
      <nav className="fixed top-20 left-0 right-0 z-40 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link href={`/${page.category}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase" style={{ color: page.accent_color }}>
            {page.category}
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-white/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Side */}
            <div className="relative group" data-gsap-scale>
              <div className="absolute -inset-1 bg-gradient-to-r opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-1000" style={{ background: `linear-gradient(to right, ${page.accent_color}, transparent)` }} />
              <div className="relative aspect-[4/5] md:aspect-square bg-[#0a0a0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-[url('/grid.svg')] bg-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent" />
                <div className="w-48 h-48 rounded-full border-4 shadow-2xl flex items-center justify-center font-black text-7xl text-white transform group-hover:scale-110 transition-transform duration-700" style={{ borderColor: page.accent_color, background: `linear-gradient(135deg, ${page.accent_color}, #000)` }}>
                  {page.title.charAt(0)}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div data-gsap-slide-right>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-white">
                {page.title}
              </h1>
              {page.subtitle && (
                <h2 className="text-2xl text-zinc-400 font-light mb-8 pb-8 border-b border-white/10">
                  {page.subtitle}
                </h2>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none text-zinc-300 font-light leading-relaxed mb-12">
                <p>{page.description}</p>
              </div>

              {page.page_stats && page.page_stats.length > 0 && (
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {page.page_stats.slice(0, 2).map((stat) => (
                    <div key={stat.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                      <div className="text-4xl font-bold mb-2 text-white" style={{ color: page.accent_color }}>
                        <span data-gsap-counter={stat.value}>{stat.value}</span>{stat.suffix}
                      </div>
                      <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Explore Detail <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {page.page_testimonials?.length > 0 && (
        <section className="py-32 bg-[#050505] border-t border-white/5 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-16">Endorsements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {page.page_testimonials.map((t, i) => (
                <div key={t.id} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors" data-gsap-fade>
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xl text-zinc-300 italic leading-relaxed mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                    <div>
                      <h4 className="font-bold text-white">{t.author}</h4>
                      <p className="text-sm text-zinc-500">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
