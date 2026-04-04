import { notFound } from 'next/navigation'
import { getPageData, dynamicPages } from '@/lib/data/pages'
import DynamicHero from '@/components/dynamic/DynamicHero'
import FeatureShowcase from '@/components/dynamic/FeatureShowcase'
import CTASection from '@/components/home/CTASection'

// Generate static params for all possible category/slugs during build time
export function generateStaticParams() {
  return dynamicPages.map((page) => ({
    category: page.category,
    slug: page.slug,
  }))
}

export default async function DynamicCategoryPage(props: { params: Promise<{ category: string, slug: string }> }) {
  const params = await props.params;
  const pageData = getPageData(params.category, params.slug)

  if (!pageData) {
    notFound()
  }

  return (
    <div className="min-h-screen theme-page relative">
      <DynamicHero 
        title={pageData.title}
        subtitle={pageData.subtitle}
        heroImage={pageData.heroImage}
        gradientFrom={pageData.gradientFrom}
        gradientTo={pageData.gradientTo}
        techIcons={pageData.techIcons}
        ctaText={pageData.ctaText}
      />

      <FeatureShowcase 
        overview={pageData.overview}
        features={pageData.features}
        heroImage={pageData.heroImage}
      />

      {/* The CTA / Contact section requested for every page */}
      <CTASection />
      
    </div>
  )
}
