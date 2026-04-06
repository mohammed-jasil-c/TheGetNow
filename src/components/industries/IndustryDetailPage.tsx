'use client'

import React from 'react'
import IndustryHero from './IndustryHero'
import IndustryOverview from './IndustryOverview'
import IndustryFeatures from './IndustryFeatures'
import IndustryProcess from './IndustryProcess'
import IndustryStats from './IndustryStats'
import IndustryTestimonial from './IndustryTestimonial'
import IndustryFAQ from './IndustryFAQ'
import IndustryCTA from './IndustryCTA'
import type { Industry } from '@/data/industries'

export default function IndustryDetailPage({ industry }: { industry: Industry }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <IndustryHero industry={industry} />
      <IndustryStats industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustryFeatures industry={industry} />
      <IndustryProcess industry={industry} />
      <IndustryTestimonial industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryCTA industry={industry} />
    </div>
  )
}
