import type { FullPage } from '@/lib/types'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function MagazineLayout({ page }: { page: FullPage }) {
  const readTime = (page.content_json as any)?.readTime || '5 min read'
  const author = (page.content_json as any)?.author || 'Editorial Team'

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 selection:bg-black selection:text-white">
      {/* Magazine Nav */}
      <nav className="fixed top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/10 py-4">
        <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between">
          <Link href={`/${page.category}`} className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Editorial Collection
          </Link>
          <div className="text-sm font-bold tracking-widest uppercase">TheGetNow Blog</div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-[800px] mx-auto text-center" data-gsap-fade>
          <div className="inline-block px-4 py-1.5 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase mb-10">
            {page.category}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
            {page.title}
          </h1>
          
          {page.subtitle && (
            <p className="text-2xl md:text-3xl text-zinc-500 font-serif italic mb-12">
              {page.subtitle}
            </p>
          )}

          <div className="flex items-center justify-center gap-6 text-sm font-medium border-y border-black/10 py-6 mb-16">
            <span>By <strong>{author}</strong></span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>{readTime}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>{new Date(page.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <p className="text-xl text-left leading-relaxed text-zinc-700 max-w-[700px] mx-auto first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-1">
            {page.description}
          </p>
        </div>
      </header>

      {/* Visual Break */}
      <div className="w-full h-[50vh] bg-black bg-[url('/grid.svg')] bg-center bg-cover relative" data-gsap-fade>
        <div className={`absolute inset-0 bg-gradient-to-br ${page.hero_gradient} mix-blend-color opacity-80`} />
        <div className="absolute bottom-6 right-6 text-white text-sm font-medium mix-blend-difference">{page.title} / TheGetNow</div>
      </div>

      {page.page_faqs?.length > 0 && (
        <section className="py-24 px-6 bg-white border-t border-black/5">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter border-b-4 border-black pb-4 inline-block">Key Takeaways</h2>
            <div className="space-y-8">
              {page.page_faqs.map((faq, i) => (
                <div key={faq.id} className="group" data-gsap-fade>
                  <h3 className="text-xl font-bold mb-3 flex items-start gap-4">
                    <span className="text-zinc-300 font-serif">0{i+1}</span>
                    {faq.question}
                  </h3>
                  <p className="text-zinc-600 pl-10 leading-relaxed font-serif text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-24 bg-black text-white text-center px-6">
        <div className="max-w-xl mx-auto" data-gsap-fade>
          <h2 className="text-4xl font-black mb-6">Join 50,000+ Readers</h2>
          <p className="text-zinc-400 mb-8">Get the latest insights on {page.title} delivered straight to your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 outline-none focus:border-white transition-colors" />
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
