import { INDUSTRIES, getIndustryBySlug } from '@/data/industries'
import { getPageFromDB, getAllSlugsForCategory, type DBPage } from '@/lib/supabase-pages'
import TemplateResolver from '@/components/stitch/TemplateResolver'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const dbPage = await getPageFromDB('industries', slug)
  if (dbPage) {
    return { title: `${dbPage.title} | TheGetNow`, description: dbPage.subtitle }
  }
  const ind = INDUSTRIES.find(i => i.slug === slug)
  if (!ind) return { title: 'Industry Not Found' }
  return { title: `${ind.title} Solutions | TheGetNow`, description: ind.subtitle }
}

export async function generateStaticParams() {
  const dbSlugs = await getAllSlugsForCategory('industries')
  const staticSlugs = INDUSTRIES.map(i => i.slug)
  const allSlugs = Array.from(new Set([...dbSlugs, ...staticSlugs]))
  return allSlugs.map(slug => ({ slug }))
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const page = await getPageFromDB('industries', slug)

  if (!page) {
    const staticInd = getIndustryBySlug(slug)
    if (!staticInd) notFound()
    
    // Construct a mock DBPage from static data for TemplateResolver
    const mockPage: DBPage = {
      id: 'static',
      slug: staticInd.slug,
      category: 'industries',
      title: staticInd.title,
      subtitle: staticInd.subtitle,
      description: '',
      layout_template: 'cinematic',
      hero_gradient: staticInd.gradient || 'from-violet-600 to-indigo-900',
      accent_color: staticInd.accentColor || '#7c3aed',
      icon: staticInd.icon || 'Zap',
      featured_image: staticInd.image,
      meta_title: `${staticInd.title} | TheGetNow`,
      meta_description: staticInd.subtitle,
      content_json: {}
    }
    return <TemplateResolver pageData={mockPage} />
  }

  // The TemplateResolver will introspect page.layout_template and pick the Stitch Design if available
  // It handles all category-specific needs and falls back to ServiceDetailClient
  return <TemplateResolver pageData={page as DBPage} />
}
