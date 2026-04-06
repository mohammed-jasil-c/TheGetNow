import { notFound } from 'next/navigation'
import { supabaseServer, DBPage } from '@/lib/supabase-pages'
import TemplateResolver from '@/components/stitch/TemplateResolver'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export const revalidate = 0; // Disable static caching so newly seeded items render instantly

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: service } = await supabaseServer
    .from('pages')
    .select('title, subtitle, meta_title, meta_description')
    .eq('slug', slug)
    // .eq('category', 'services') // We can restrict to services if needed
    .single()

  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: service.meta_title || `${service.title} | TheGetNow`,
    description: service.meta_description || service.subtitle,
  }
}

export async function generateStaticParams() {
  const { data: pages } = await supabaseServer
    .from('pages')
    .select('slug')
    .eq('category', 'services') // Assuming dynamic routes are bound by category context

  if (!pages) return []

  return pages.map(s => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  
  // Fetch from the DB instead of the local array
  const { data: page, error } = await supabaseServer
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !page) notFound()

  // The TemplateResolver will introspect page.layout_template and pick the Stitch Design if available
  return <TemplateResolver pageData={page as DBPage} />
}
