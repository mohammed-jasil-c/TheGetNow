'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { stitchPagesMap } from '@/components/stitch';
import HeroCinematic from '@/components/dynamic/HeroCinematic';
import HeroIsometric from '@/components/dynamic/HeroIsometric';
import HeroCaseStudy from '@/components/dynamic/HeroCaseStudy';
import FeatureBento from '@/components/dynamic/FeatureBento';
import FeatureZigZag from '@/components/dynamic/FeatureZigZag';
import TechGridScroll from '@/components/dynamic/TechGridScroll';
import ResultGrid from '@/components/dynamic/ResultGrid';
import CTASection from '@/components/home/CTASection';
import type { DynamicPageData } from '@/lib/data/pages';

interface UnifiedPageRendererProps {
  slug: string;
  category: string;
  pageData: DynamicPageData | null;
}

export default function UnifiedPageRenderer({ slug, category, pageData }: UnifiedPageRendererProps) {
  // 1. High-Priority: Check if we have a high-fidelity Stitch template for this slug
  const StitchTemplate = stitchPagesMap[slug];
  if (StitchTemplate) {
    return (
      <div className="min-h-screen theme-page relative">
        <StitchTemplate />
      </div>
    );
  }

  // 2. Otherwise use the Dynamic Page Data (from Supabase or Fallback)
  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen theme-page relative">
      {pageData.sections.map((section) => {
        switch (section.type) {
          case 'HeroCinematic':
            return <HeroCinematic key={section.id} {...section.data} />;
          case 'HeroIsometric':
            return <HeroIsometric key={section.id} {...section.data} />;
          case 'HeroCaseStudy':
            return <HeroCaseStudy key={section.id} {...section.data} />;
          case 'TechGridScroll':
            return <TechGridScroll key={section.id} {...section.data} />;
          case 'ResultGrid':
            return <ResultGrid key={section.id} {...section.data} />;
          case 'FeatureBento':
            return <FeatureBento key={section.id} {...section.data} />;
          case 'FeatureZigZag':
            return <FeatureZigZag key={section.id} {...section.data} />;
          case 'CTA':
            return <CTASection key={section.id} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
