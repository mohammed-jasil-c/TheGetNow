import { getIndustryData } from '@/data/industryContent'
import TechTemplate from '@/components/industries/TechTemplate'
import LifestyleTemplate from '@/components/industries/LifestyleTemplate'
import EnterpriseTemplate from '@/components/industries/EnterpriseTemplate'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const data = getIndustryData(resolvedParams.slug)
  return {
    title: `${data.heroTitle} | TheGetNow`,
    description: data.heroDesc
  }
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const data = getIndustryData(resolvedParams.slug)

  // Dynamic Template Router Engine
  if (data.theme === 'tech') return <TechTemplate data={data} />
  if (data.theme === 'lifestyle') return <LifestyleTemplate data={data} />
  
  return <EnterpriseTemplate data={data} />
}
