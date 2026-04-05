import { getPageData, dynamicPages } from '@/lib/data/pages'
import { getAllPages } from '@/lib/supabase-pages'
import UnifiedPageRenderer from '@/components/dynamic/UnifiedPageRenderer'
import type { Metadata } from 'next'

// Generate static params from both hardcoded + Supabase pages.
export async function generateStaticParams() {
  const staticParams = dynamicPages.map((page) => ({
    category: page.category,
    slug: page.slug,
  }))

  try {
    const dbPages = await getAllPages()
    const dbParams = dbPages.map((page) => ({
      category: page.category,
      slug: page.slug,
    }))

    // Deduplicate
    const seen = new Set(staticParams.map(p => `${p.category}/${p.slug}`))
    for (const p of dbParams) {
      const key = `${p.category}/${p.slug}`
      if (!seen.has(key)) {
        staticParams.push(p)
        seen.add(key)
      }
    }
  } catch {
    console.warn('⚠️ Could not fetch DB pages for static params')
  }

  return staticParams
}

export async function generateMetadata(
  props: { params: Promise<{ category: string; slug: string }> }
): Promise<Metadata> {
  const params = await props.params
  const pageData = await getPageData(params.category, params.slug)

  if (!pageData) return { title: 'Page Not Found' }

  return {
    title: `${pageData.title} | TheGetNow`,
    description: pageData.subtitle,
  }
}

export default async function DynamicCategoryPage(props: {
  params: Promise<{ category: string; slug: string }>
}) {
  const params = await props.params
  const { category, slug } = params
  const pageData = await getPageData(category, slug)

  return <UnifiedPageRenderer slug={slug} category={category} pageData={pageData} />
}
