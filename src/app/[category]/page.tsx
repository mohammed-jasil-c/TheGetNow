import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryCounts, getPagesByCategory, getAllSlugs } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  
  // Make sure category exists, else 404
  const counts = await getCategoryCounts()
  if (!counts[category]) {
    notFound()
  }

  const pages = await getPagesByCategory(category)
  const formattedCategory = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">{formattedCategory}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Explore our comprehensive list of {category.replace(/-/g, ' ')}. We offer {pages.length} specialized solutions in this area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link key={page.id} href={`/${category}/${page.slug}`} className="glass-card p-8 rounded-3xl group block relative overflow-hidden transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/50"
                style={{ background: `linear-gradient(to bottom right, ${page.accent_color}, #000)` }}
              >
                <span className="text-white font-bold">{page.title.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">{page.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{page.subtitle || page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
