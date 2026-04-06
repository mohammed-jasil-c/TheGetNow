'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChartLine, faMapLocationDot, faStethoscope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import type { DBPage } from '@/lib/supabase-pages';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
  faChartLine,
  faMapLocationDot,
  faStethoscope,
  faCheckCircle
};

export default function CaseStudyTemplate({ pageData }: { pageData: DBPage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const content = pageData.content_json as any || {};
  const Icon = iconMap[pageData.icon] || faCheckCircle;

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Setup parallax for hero image without opacity delays
      gsap.to('.cs-hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.cs-hero-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Staggered reveal for results
      gsap.from('.cs-result-item', {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.cs-results-grid',
          start: 'top 85%'
        }
      });

      // Simple slide-up for content blocks
      gsap.from('.cs-content-block', {
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cs-main-content',
          start: 'top 80%'
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, [pageData]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Dynamic Magazine-style Hero */}
      <section className="cs-hero-container relative h-[90vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-surface-dim z-0">
          <Image
            src={pageData.featured_image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2000&q=80'}
            alt={pageData.title}
            fill
            priority
            className="cs-hero-image object-cover object-center mix-blend-multiply opacity-80"
          />
          {/* Deep gradient overlay mapped to accent color */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-20 z-10 mix-blend-overlay" style={{ background: pageData.hero_gradient }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-md mb-8">
              <FontAwesomeIcon icon={Icon} style={{ color: pageData.accent_color }} />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Case Study: {content.client || 'Client Name'}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline text-on-surface leading-[1.05] tracking-tight mb-6 drop-shadow-lg">
              {pageData.title}
            </h1>
            <p className="text-xl md:text-3xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              {pageData.subtitle}
            </p>
          </div>
          <div className="flex md:flex-col gap-8 md:text-right shrink-0">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Timeline</p>
              <p className="text-xl font-medium text-on-surface">{content.timeline || '6 Months'}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Role</p>
              <p className="text-xl font-medium text-on-surface">{content.role || 'Full-Cycle Engineering'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid - High Impact */}
      <section className="py-12 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="cs-results-grid grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
            {content.results?.map((res: any, idx: number) => (
              <div key={idx} className="cs-result-item py-6 md:px-12 text-center md:text-left">
                <p className="text-6xl md:text-7xl font-black font-headline tracking-tighter drop-shadow-sm mb-2" style={{ color: pageData.accent_color }}>
                  {res.value}
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">{res.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <section className="cs-main-content py-32 bg-background relative overflow-hidden">
        {/* Soft atmospheric glow */}
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[180px] opacity-10 pointer-events-none" style={{ background: pageData.accent_color }} />
        
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Challenge */}
          <div className="cs-content-block mb-24">
            <h2 className="text-sm font-black uppercase tracking-widest text-secondary mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-border"></span> The Challenge
            </h2>
            <p className="text-3xl md:text-4xl leading-relaxed font-light text-on-surface">
              {content.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="cs-content-block mb-32">
            <h2 className="text-sm font-black uppercase tracking-widest text-secondary mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-border"></span> Our Solution
            </h2>
            <div className="p-10 md:p-14 bg-surface-container rounded-3xl border border-border shadow-xl">
              <p className="text-2xl leading-relaxed text-on-surface">
                {content.solution}
              </p>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="cs-content-block">
            <h2 className="text-sm font-black uppercase tracking-widest text-secondary mb-10 flex items-center gap-4">
              <span className="w-12 h-px bg-border"></span> Engineering Arsenal
            </h2>
            <div className="flex flex-wrap gap-4">
              {content.stack?.map((tech: string, i: number) => (
                <div key={i} className="px-6 py-3 rounded-full border border-border bg-surface text-on-surface font-semibold text-lg hover:-translate-y-1 hover:border-border-strong transition-transform cursor-default shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-40 relative group overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" style={{ background: pageData.hero_gradient }}>
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold font-headline text-white mb-8">
            Require similar architecture?
          </h2>
          <a href="/contact" className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full bg-white text-black font-bold uppercase tracking-widest group-hover:scale-110 transition-transform shadow-2xl">
            <span>Discuss</span>
            <FontAwesomeIcon icon={faArrowRight} className="mt-2 text-xl" />
          </a>
        </div>
      </section>

    </div>
  );
}
