import { notFound } from 'next/navigation'
import { getPageBySlug, getAllSlugs, getCategoryCounts } from '@/lib/data'
import LayoutRenderer from '@/components/layouts/LayoutRenderer'

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string }
}) {
  // Wait for the parent to generate categories, or get them if running standalone
  const counts = await getCategoryCounts()
  const validCategories = Object.keys(counts)
  
  // If category is somehow invalid at build time, return empty array
  if (!validCategories.includes(category)) return []

  // Get all slugs for this specific category to render Statically
  const slugs = await getAllSlugs(category)
  return slugs.map(({ slug }) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const page = await getPageBySlug(category, slug)
  
  if (!page) return {}
  
  return {
    title: page.meta_title || `${page.title} | TheGetNow`,
    description: page.meta_description || page.description,
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const page = await getPageBySlug(category, slug)

  if (!page) {
    notFound()
  }

  return <LayoutRenderer page={page} />
}
