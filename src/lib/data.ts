import type { Page, FullPage } from './types'
import _database from './database.json'

const pages = _database as unknown as FullPage[]

export async function getPageBySlug(category: string, slug: string): Promise<FullPage | null> {
  const page = pages.find(p => p.category === category && p.slug === slug && p.published)
  return page || null
}

export async function getPagesByCategory(category: string): Promise<Page[]> {
  return pages.filter(p => p.category === category && p.published)
}

export async function getAllSlugs(category: string): Promise<{ slug: string }[]> {
  return pages.filter(p => p.category === category && p.published).map(p => ({ slug: p.slug }))
}

export async function getAllPages(): Promise<Page[]> {
  return pages.filter(p => p.published)
}

export async function getPageCount(): Promise<number> {
  return pages.filter(p => p.published).length
}

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {}
  pages.filter(p => p.published).forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })
  return counts
}

export async function searchPages(query: string): Promise<Page[]> {
  return pages
    .filter(p => p.published && p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 20)
}

export async function getFeaturedPages(limit = 6): Promise<Page[]> {
  return pages
    .filter(p => p.published && ['services', 'case-studies', 'products'].includes(p.category))
    .slice(0, limit)
}
