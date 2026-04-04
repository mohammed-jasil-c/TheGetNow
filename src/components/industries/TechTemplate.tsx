'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IndustryContent } from '@/data/industryContent';

gsap.registerPlugin(ScrollTrigger);

export default function TechTemplate({ data }: { data: IndustryContent }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2
      });

      gsap.from('.hero-image', {
        scale: 1.1, opacity: 0, duration: 1.5, ease: 'power2.out', delay: 0.5
      });

      // Features Animation
      gsap.from('.feature-card', {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
      });

      // Steps Animation
      gsap.from('.step-item', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.steps-container', start: 'top 80%' }
      });

      // Testimonial Animation
      gsap.from('.testimonial-box', {
        x: -50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonial-section', start: 'top 75%' }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#faf9fa] text-[#1b1c1d] min-h-screen pt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#f5f3f4]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full py-20">
          <div className="hero-content space-y-8">
            <span className="text-[#094cb2] font-semibold tracking-[0.2em] text-xs uppercase font-['Public_Sans']">{data.heroSub}</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] font-serif">{data.heroTitle}</h1>
            <p className="text-lg text-[#5a5f63] max-w-lg leading-relaxed font-['Inter']">{data.heroDesc}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-gradient-to-r from-[#094cb2] to-[#3366cc] text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105 active:scale-95 inline-block">Consult Our Experts</Link>
            </div>
          </div>
          <div className="hero-image relative group">
            <div className="absolute -inset-4 bg-[#094cb2]/10 rounded-[2rem] blur-3xl group-hover:bg-[#094cb2]/20 transition-colors duration-700"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              { }
              <img className="w-full h-full object-cover" alt={data.heroTitle} src={data.heroImage}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#faf9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#6d5e00] font-bold tracking-[0.15em] text-xs uppercase mb-4 block font-['Public_Sans']">Core Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif">{data.featuresTitle}</h2>
            </div>
            <p className="text-[#5a5f63] font-['Inter'] max-w-sm">{data.featuresDesc}</p>
          </div>
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-[#f5f3f4] p-10 group hover:bg-[#094cb2] transition-all duration-500 rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl">
                <span className="material-symbols-outlined text-[#094cb2] group-hover:text-white text-5xl mb-6 block transition-colors">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors font-serif">{feature.title}</h3>
                <p className="text-[#5a5f63] group-hover:text-white/80 text-sm leading-relaxed transition-colors font-['Inter']">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 bg-[#dbdadb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">{data.stepsTitle}</h2>
            <p className="text-[#5a5f63] max-w-xl mx-auto font-['Inter'] text-lg">{data.stepsDesc}</p>
          </div>
          <div className="steps-container grid md:grid-cols-3 gap-16 relative">
            {data.steps.map((step, idx) => (
              <div key={idx} className="step-item flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#094cb2] flex items-center justify-center text-white font-bold text-2xl mb-8 shadow-xl shadow-[#094cb2]/20 font-['Public_Sans']">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{step.title}</h3>
                <p className="text-[#5a5f63] font-['Inter'] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="testimonial-box relative p-12 md:p-20 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-3xl border-l-8 border-[#094cb2]">
            <span className="material-symbols-outlined text-[#bfab49] text-8xl opacity-30 absolute top-6 right-10">format_quote</span>
            <blockquote className="text-2xl md:text-3xl font-serif font-semibold text-[#1b1c1d] leading-relaxed mb-12 italic">
                &quot;{data.testimonialQuote}&quot;
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-md">
                { }
                <img className="w-full h-full object-cover" alt={data.testimonialAuthor} src={data.testimonialImage}/>
              </div>
              <div>
                <p className="font-bold text-[#1b1c1d] text-lg">{data.testimonialAuthor}</p>
                <p className="font-['Public_Sans'] text-xs uppercase tracking-widest text-[#5a5f63] mt-1">{data.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#faf9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#3366cc] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center text-[#e7ebff] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#094cb2] to-[#00419d] opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-white">{data.ctaTitle}</h2>
              <p className="text-xl text-[#e7ebff]/90 max-w-2xl mx-auto font-['Inter']">{data.ctaDesc}</p>
              <Link href="/contact" className="bg-white text-[#094cb2] hover:bg-[#faf9fa] px-12 py-5 rounded-full font-bold text-lg transition-transform active:scale-95 shadow-2xl inline-block mt-4">
                  Deploy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
