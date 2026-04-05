'use server'

import { searchPages } from '@/lib/supabase-pages'

export async function getSearchResults(query: string) {
  if (!query || query.length < 2) return []
  
  try {
    const results = await searchPages(query, 8)
    return results.map(r => ({
      id: r.id,
      title: r.title,
      subtitle: r.subtitle,
      category: r.category,
      slug: r.slug,
      icon: r.icon,
    }))
  } catch (error) {
    console.error('Search action error:', error)
    return []
  }
}
