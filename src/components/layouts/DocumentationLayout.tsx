import type { FullPage } from '@/lib/types'
import { ArrowLeft, BookOpen, Search, Menu } from 'lucide-react'
import Link from 'next/link'

export default function DocumentationLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-zinc-300">
      
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-white/10 bg-zinc-950">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <Link href={`/${page.category}`} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <span className="font-bold text-white text-xl">Docs</span>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">On this page</div>
          <ul className="space-y-3">
            <li><a href="#introduction" className="text-sm text-zinc-400 hover:text-white transition-colors">Introduction</a></li>
            {page.page_features?.map((f, i) => (
              <li key={i}><a href={`#feature-${i}`} className="text-sm text-zinc-400 hover:text-white transition-colors">{f.title}</a></li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 text-white" />
            <span className="font-bold text-white">Docs</span>
          </div>
          <Link href={`/${page.category}`} className="text-sm text-zinc-400">Back</Link>
        </header>

        <article className="max-w-3xl mx-auto p-6 md:p-12 lg:py-20" data-gsap-fade>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
            <BookOpen className="w-4 h-4" /> Documentation / {page.category}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {page.title}
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-16 pb-12 border-b border-white/10">
            {page.description}
          </p>

          <section id="introduction" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm" style={{ color: page.accent_color }}>0</span>
              Overview
            </h2>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 text-zinc-300 leading-relaxed">
              {page.subtitle}
            </div>
          </section>

          {/* Features as Doc Sections */}
          {page.page_features?.map((feature, i) => (
            <section key={feature.id} id={`feature-${i}`} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm" style={{ color: page.accent_color }}>{i+1}</span>
                {feature.title}
              </h2>
              <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed">
                <p>{feature.description}</p>
                {/* Mock code block for authentic doc feel */}
                <pre className="p-4 bg-black rounded-xl border border-white/10 mt-6 overflow-x-auto text-sm font-mono text-zinc-300">
                  <code>
{`// Example integration for ${feature.title}
import { ${feature.title.replace(/\s+/g, '')} } from '@thegetnow/sdk'

const client = new ${feature.title.replace(/\s+/g, '')}({
  apiKey: process.env.API_KEY,
  environment: 'production'
})`}
                  </code>
                </pre>
              </div>
            </section>
          ))}
          
        </article>
      </main>
    </div>
  )
}
