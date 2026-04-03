import type { FullPage } from '@/lib/types'
import { ArrowLeft, Check, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ComparisonLayout({ page }: { page: FullPage }) {
  const [leftSide, rightSide] = page.title.split(' vs ')
  const isVs = leftSide && rightSide

  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      {/* Header */}
      <header className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto text-center" data-gsap-fade>
        <Link href={`/${page.category}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Comparisons
        </Link>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="text-white">{isVs ? leftSide : page.title}</span>
          {isVs && <span className="text-zinc-500 font-light mx-4 text-4xl">vs</span>}
          {isVs && <span style={{ color: page.accent_color }}>{rightSide}</span>}
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          {page.description}
        </p>
      </header>

      {/* Comparison Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-[1200px] mx-auto relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r opacity-5 blur-[100px] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, white, ${page.accent_color})` }} />

          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 relative z-10">
            {/* Left Box */}
            <div className="bg-[#111116] border border-white/10 rounded-3xl p-8 lg:p-12" data-gsap-slide-left>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <span className="text-2xl font-bold">{isVs ? leftSide.charAt(0) : 'A'}</span>
              </div>
              <h2 className="text-3xl font-bold mb-8">{isVs ? leftSide : 'Standard'}</h2>
              <ul className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]"><Check className="w-5 h-5 text-zinc-500" /></div>
                    <span className="text-zinc-300 font-medium">{page.page_features?.[i]?.title || `Standard Feature ${i+1}`}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-12 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-semibold">
                Explore {isVs ? leftSide : 'Option A'}
              </button>
            </div>

            {/* Right Box (TheGetNow Recommended) */}
            <div className="bg-gradient-to-b from-[#1a1a24] to-[#0d0d14] border-2 rounded-3xl p-8 lg:p-12 relative shadow-2xl" style={{ borderColor: page.accent_color }} data-gsap-slide-right>
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black border border-white/20" style={{ color: page.accent_color }}>
                Recommended Choice
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/50" style={{ backgroundColor: page.accent_color }}>
                <span className="text-2xl font-black text-black">{isVs ? rightSide.charAt(0) : 'B'}</span>
              </div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: page.accent_color }}>{isVs ? rightSide : page.title}</h2>
              <ul className="space-y-6">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]">
                      <Check className="w-5 h-5" style={{ color: page.accent_color }} />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{page.page_features?.[i]?.title || `Advanced Feature ${i+1}`}</div>
                      <div className="text-sm text-zinc-400">{page.page_features?.[i]?.description || 'Superior performance and scale'}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-12 py-4 rounded-xl text-black font-semibold transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: page.accent_color }}>
                Choose {isVs ? rightSide : 'Option B'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {page.page_faqs?.length > 0 && (
        <section className="py-24 border-t border-white/5 bg-[#050505]">
          <div className="max-w-[800px] mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Comparison FAQ</h3>
            <div className="space-y-4">
              {page.page_faqs.map(faq => (
                <div key={faq.id} className="bg-white/5 border border-white/10 rounded-2xl p-6" data-gsap-fade>
                  <h4 className="font-bold text-lg mb-3">{faq.question}</h4>
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
