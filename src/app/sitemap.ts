import { MetadataRoute } from 'next'
import { getAllPages } from '@/lib/supabase-pages'
import { premiumStitchPages } from '@/lib/data/pages'

const BASE_URL = 'https://thegetnow.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch all 1,040+ dynamic pages from Supabase
  let dynamicRoutes: MetadataRoute.Sitemap = []
  
  try {
    const pages = await getAllPages()
    dynamicRoutes = pages.map((page) => ({
      url: `${BASE_URL}/${page.category}/${page.slug}`,
      lastModified: page.updated_at ? new Date(page.updated_at) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    console.warn('⚠️ Could not fetch pages for sitemap')
  }

  // 2. High-fidelity Stitch Premium routes (Priority 1.0)
  const premiumRoutes: MetadataRoute.Sitemap = premiumStitchPages.map((page) => ({
    url: `${BASE_URL}/${page.category}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  // 2. Static main routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/industries',
    '/portfolio',
    '/blog',
    '/contact',
    '/about',
    '/careers',
    '/pricing',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  // 3. Category index routes
  const categoryRoutes: MetadataRoute.Sitemap = [
    '/technologies',
    '/solutions',
    '/products',
    '/resources',
    '/guides',
    '/comparisons',
    '/webinars',
    '/locations',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...categoryRoutes, ...premiumRoutes, ...dynamicRoutes]
}
