import { INDUSTRIES, getIndustryBySlug } from '@/data/industries'
import { getPageFromDB, getAllSlugsForCategory, type DBPage } from '@/lib/supabase-pages'
import TemplateResolver from '@/components/stitch/TemplateResolver'
import IndustryDetailPage from '@/components/industries/IndustryDetailPage'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Check DB first
  const dbPage = await getPageFromDB('industries', slug)
  if (dbPage) {
    return { title: `${dbPage.title} | TheGetNow`, description: dbPage.subtitle }
  }
  // Then static data
  const ind = getIndustryBySlug(slug)
  if (!ind) return { title: 'Industry Not Found' }
  return {
    title: `${ind.title} Solutions | TheGetNow`,
    description: ind.subtitle,
    openGraph: {
      title: `${ind.title} Solutions | TheGetNow`,
      description: ind.subtitle,
      images: [{ url: ind.image, width: 1200, height: 630 }],
    },
  }
}

export async function generateStaticParams() {
  const dbSlugs = await getAllSlugsForCategory('industries')
  const staticSlugs = INDUSTRIES.map(i => i.slug)
  const allSlugs = Array.from(new Set([...dbSlugs, ...staticSlugs]))
  return allSlugs.map(slug => ({ slug }))
}

export default async function IndustryDetailRoute({ params }: Props) {
  const { slug } = await params

  // 1. Check if this industry exists in our rich static data
  const staticIndustry = getIndustryBySlug(slug)
  if (staticIndustry) {
    return <IndustryDetailPage industry={staticIndustry} />
  }

  // 2. Fallback to DB / TemplateResolver for Stitch pages and dynamic DB entries
  const page = await getPageFromDB('industries', slug)
  if (!page) {
    notFound()
  }

  return <TemplateResolver pageData={page as DBPage} />
}
