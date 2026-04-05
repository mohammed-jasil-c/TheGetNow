import React from 'react'
import { stitchPagesMap } from './index'
import ServiceDetailClient from '@/app/services/[slug]/ServiceDetailClient'
import type { DBPage } from '@/lib/supabase-pages'

interface Props {
  pageData: DBPage
}

export default function TemplateResolver({ pageData }: Props) {
  // Attempt to resolve from the Stitch Map first
  const TemplateComponent = stitchPagesMap[pageData.layout_template]
  
  if (TemplateComponent) {
    // If we have a Stitch component, render it and pass pageData down
    const Component = TemplateComponent as any
    return <Component pageData={pageData} />
  }

  // Fallback to our generic ServiceDetailClient for all other database records
  return (
    <ServiceDetailClient service={{
      slug: pageData.slug,
      title: pageData.title,
      subtitle: pageData.subtitle || '',
      description: pageData.description || '',
      icon: 'faCheck',
      gradient: pageData.hero_gradient || 'linear-gradient(135deg, #0057FF, #00D4FF)',
      accentColor: pageData.accent_color || '#0057FF',
      techStack: [],
      features: [],
      process: []
    }} />
  )
}
