import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Server-side client using anon key (RLS handles access)
export const supabaseServer = createClient(supabaseUrl, supabaseKey)

export interface DBPage {
  id: string
  slug: string
  category: string
  title: string
  subtitle: string
  description: string | null
  layout_template: string
  hero_gradient: string
  accent_color: string
  icon: string
  featured_image: string | null
  meta_title: string | null
  meta_description: string | null
  content_json: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface DBPageFeature {
  id: string
  page_id: string
  title: string
  description: string | null
  icon: string | null
  order_index: number
}

export interface DBPageStat {
  id: string
  page_id: string
  label: string
  value: string
  suffix: string
  order_index: number
}

export interface DBPageFaq {
  id: string
  page_id: string
  question: string
  answer: string
  order_index: number
}

export interface DBPageTestimonial {
  id: string
  page_id: string
  author: string
  role: string | null
  company: string | null
  quote: string
  rating: number
  order_index: number
}

export interface FullDBPage extends DBPage {
  features: DBPageFeature[]
  stats: DBPageStat[]
  faqs: DBPageFaq[]
  testimonials: DBPageTestimonial[]
}

/**
 * Fetch a single page with all related data from Supabase.
 * Returns null if not found (caller falls back to static generator).
 */
export async function getPageFromDB(
  category: string,
  slug: string
): Promise<FullDBPage | null> {
  const { data: page, error } = await supabaseServer
    .from('pages')
    .select('*')
    .eq('category', category)
    .eq('slug', slug)
    .single()

  if (error || !page) return null

  const [featuresRes, statsRes, faqsRes, testimonialsRes] = await Promise.all([
    supabaseServer
      .from('page_features')
      .select('*')
      .eq('page_id', page.id)
      .order('order_index'),
    supabaseServer
      .from('page_stats')
      .select('*')
      .eq('page_id', page.id)
      .order('order_index'),
    supabaseServer
      .from('page_faqs')
      .select('*')
      .eq('page_id', page.id)
      .order('order_index'),
    supabaseServer
      .from('page_testimonials')
      .select('*')
      .eq('page_id', page.id)
      .order('order_index'),
  ])

  return {
    ...page,
    features: featuresRes.data ?? [],
    stats: statsRes.data ?? [],
    faqs: faqsRes.data ?? [],
    testimonials: testimonialsRes.data ?? [],
  }
}

/**
 * Get all slugs for a category — used by generateStaticParams().
 */
export async function getAllSlugsForCategory(
  category: string
): Promise<string[]> {
  const { data, error } = await supabaseServer
    .from('pages')
    .select('slug')
    .eq('category', category)

  if (error || !data) return []
  return data.map((p) => p.slug)
}

/**
 * Get pages for a category listing with pagination support.
 */
export async function getCategoryPages(
  category: string,
  limit = 20,
  offset = 0
): Promise<{ data: DBPage[]; count: number }> {
  const { data, error, count } = await supabaseServer
    .from('pages')
    .select('*', { count: 'exact' })
    .eq('category', category)
    .range(offset, offset + limit - 1)
    .order('created_at', { ascending: false })

  if (error || !data) return { data: [], count: 0 }
  return { data, count: count || 0 }
}

export async function searchPages(
  query: string,
  limit = 10
): Promise<DBPage[]> {
  const { data, error } = await supabaseServer
    .from('pages')
    .select('*')
    .or(`title.ilike.%${query}%,subtitle.ilike.%${query}%`)
    .eq('published', true)
    .limit(limit)

  if (error || !data) return []
  return data
}

/**
 * Fetch ALL pages across categories for sitemap/static generation.
 */
export async function getAllPages(): Promise<{ category: string; slug: string; updated_at: string }[]> {
  const { data, error } = await supabaseServer
    .from('pages')
    .select('slug, category, updated_at')

  if (error || !data) return []
  return data
}

/**
 * Count total pages in database.
 */
export async function getTotalPageCount(): Promise<number> {
  const { count, error } = await supabaseServer
    .from('pages')
    .select('*', { count: 'exact', head: true })

  if (error) return 0
  return count || 0
}
