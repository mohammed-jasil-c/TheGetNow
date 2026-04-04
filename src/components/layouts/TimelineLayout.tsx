import type { FullPage } from '@/lib/types'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function TimelineLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link href={`/${page.category}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to {page.category}
          </Link>
          <div className="text-sm font-medium tracking-widest uppercase" style={{ color: page.accent_color }}>
            {page.title}
          </div>
        </div>
      </nav>

      <header className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" data-gsap-fade>{page.title}</h1>
        {page.subtitle && (
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-8" data-gsap-fade>
            {page.subtitle}
          </p>
        )}
        <div className="max-w-3xl mx-auto text-lg text-zinc-500" data-gsap-fade>
          {page.description}
        </div>
      </header>

      <section className="py-20 relative max-w-[1000px] mx-auto px-6">
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
        
        <div className="space-y-16 lg:space-y-32">
          {page.page_features?.map((feature, i) => (
            <div key={feature.id} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between items-start md:items-center`} data-gsap-slide-up>
              
              <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-[#000000] border-2 border-white md:-translate-x-1/2 z-10 top-6 md:top-1/2 md:-translate-y-1/2 transition-colors duration-500" style={{ borderColor: page.accent_color }} />

              <div className={`pl-16 md:pl-0 w-full md:w-[45%] ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="text-sm text-zinc-500 mb-2 font-mono" style={{ color: page.accent_color }}>Step 0{i + 1}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
