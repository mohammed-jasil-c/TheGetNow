import { notFound } from 'next/navigation'
import { supabaseServer, DBPage } from '@/lib/supabase-pages'
import TemplateResolver from '@/components/stitch/TemplateResolver'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: project } = await supabaseServer
    .from('pages')
    .select('title, subtitle, meta_title, meta_description')
    .eq('slug', slug)
    .single()

  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: project.meta_title || `${project.title} | Portfolio Case Study`,
    description: project.meta_description || project.subtitle,
  }
}

export async function generateStaticParams() {
  const { data: projects } = await supabaseServer
    .from('pages')
    .select('slug')
    .eq('category', 'portfolio')

  if (!projects) return []
  return projects.map(p => ({ slug: p.slug }))
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  
  const { data: page, error } = await supabaseServer
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !page) notFound()

  // Send exact page data down into Template Resolver to pick up the Stitch Component dynamically
  return <TemplateResolver pageData={page as DBPage} />
}
