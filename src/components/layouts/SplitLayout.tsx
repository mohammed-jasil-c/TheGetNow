import type { FullPage } from '@/lib/types'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SplitLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Split */}
      <section className="min-h-screen flex flex-col lg:flex-row pt-20">
        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative z-10">
          <Link href={`/${page.category}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium w-fit mb-8">
            {page.category.toUpperCase()}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {page.title}
          </h1>
          <p className="text-xl lg:text-3xl text-zinc-300 font-light mb-8" style={{ color: page.accent_color }}>
            {page.subtitle}
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-xl">
            {page.description}
          </p>
          
          <button className="w-fit px-8 py-4 rounded-xl text-black font-semibold text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: page.accent_color }}>
            Contact Sales
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 relative bg-black hidden lg:flex items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${page.hero_gradient} opacity-40`} />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(to_left,white,transparent)]" />
          
          {/* Abstract visual representation */}
          <div className="relative w-[30rem] h-[30rem]" data-gsap-scale>
            <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: page.accent_color }} />
          </div>
        </div>
      </section>

      {/* Details Split */}
      {page.page_features?.length > 0 && (
        <section className="py-24 bg-black border-t border-white/5 hover:border-white/10 transition-colors">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="w-full lg:w-1/3" data-gsap-slide-left>
                <h2 className="text-3xl md:text-5xl font-bold text-white sticky top-32">
                  Key Capabilities <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Overview</span>
                </h2>
              </div>
              <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {page.page_features.map((feature, i) => (
                  <div key={feature.id} data-gsap-fade>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-white/5" style={{ color: page.accent_color }}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
