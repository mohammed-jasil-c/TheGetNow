export interface Page {
  id: string
  slug: string
  title: string
  subtitle: string | null
  description: string | null
  content_json: Record<string, unknown>
  category: string
  layout_template: string
  hero_gradient: string
  accent_color: string
  icon: string
  featured_image: string | null
  meta_title: string | null
  meta_description: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export interface PageFeature {
  id: string
  page_id: string
  title: string
  description: string | null
  icon: string
  order_index: number
}

export interface PageStat {
  id: string
  page_id: string
  label: string
  value: string
  suffix: string
  order_index: number
}

export interface PageFaq {
  id: string
  page_id: string
  question: string
  answer: string
  order_index: number
}

export interface PageTestimonial {
  id: string
  page_id: string
  author: string
  role: string | null
  company: string | null
  quote: string
  rating: number
  order_index: number
}

export interface FullPage extends Page {
  page_features: PageFeature[]
  page_stats: PageStat[]
  page_faqs: PageFaq[]
  page_testimonials: PageTestimonial[]
}

export type LayoutTemplate = 
  | 'cinematic' | 'split' | 'magazine' | 'dashboard' 
  | 'showcase' | 'timeline' | 'interactive' | 'comparison' 
  | 'landing' | 'documentation'

export type Category = 
  | 'services' | 'industries' | 'technologies' | 'solutions'
  | 'blog' | 'case-studies' | 'products' | 'resources'
  | 'guides' | 'careers' | 'locations' | 'comparisons'
  | 'webinars' | 'faq' | 'team'
