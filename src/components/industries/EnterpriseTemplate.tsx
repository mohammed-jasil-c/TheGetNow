'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IndustryContent } from '@/data/industryContent';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseTemplate({ data }: { data: IndustryContent }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.ent-hero-title', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1
      });
      gsap.from('.ent-hero-text', {
        y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3
      });
      gsap.from('.ent-hero-btn', {
        scale: 0.9, opacity: 0, duration: 0.5, ease: 'back.out(2)', delay: 0.6
      });

      // Features Animation
      gsap.from('.ent-feature', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.ent-features-block', start: 'top 80%' }
      });

      // CTA Animation
      gsap.from('.ent-cta-block', {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ent-cta-section', start: 'top 85%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen font-['Inter']" style={{ background: '#0a0a0a', color: '#ffffff' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at center, #3366cc 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#3366cc] font-bold tracking-widest uppercase text-sm mb-6">{data.heroSub}</p>
          <h1 className="ent-hero-title text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            {data.heroTitle}
          </h1>
          <p className="ent-hero-text text-xl max-w-3xl mx-auto mb-12 text-zinc-400">
            {data.heroDesc}
          </p>
          <Link href="/contact" className="ent-hero-btn bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors">
            Consult An Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="ent-features-block py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{data.featuresTitle}</h2>
            <p className="text-zinc-500">{data.featuresDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((f, i) => (
              <div key={i} className="ent-feature p-8 rounded-3xl bg-[#111111] border border-zinc-800/50 hover:border-zinc-700 transition-colors group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-[#3366cc] bg-[#3366cc]/10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-[#050505] border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-4xl font-medium leading-relaxed italic mb-8">&quot;{data.testimonialQuote}&quot;</h3>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    { }
                    <img className="w-full h-full object-cover" src={data.testimonialImage} alt={data.testimonialAuthor} />
                </div>
                <p className="font-bold">{data.testimonialAuthor}</p>
                <p className="text-zinc-500 text-sm">{data.testimonialRole}</p>
            </div>
        </div>
      </section>

      {/* Placeholder Details */}
      <section className="ent-cta-section py-32 text-center" style={{ background: '#0a0a0a' }}>
        <div className="ent-cta-block">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{data.ctaTitle}</h2>
            <p className="mb-10 text-zinc-400 text-lg max-w-xl mx-auto">{data.ctaDesc}</p>
            <Link href="/contact" className="px-10 py-5 rounded-2xl font-bold transition-all border border-zinc-800 hover:border-[#3366cc] hover:text-[#3366cc] inline-block bg-[#111111]">
            Schedule Discovery Call
            </Link>
        </div>
      </section>
    </div>
  );
}
