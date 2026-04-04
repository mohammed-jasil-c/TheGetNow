'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IndustryContent } from '@/data/industryContent';

gsap.registerPlugin(ScrollTrigger);

export default function LifestyleTemplate({ data }: { data: IndustryContent }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-text > *', {
        y: 40, opacity: 0, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.1
      });

      gsap.from('.hero-graphic', {
        scale: 0.9, opacity: 0, rotation: 2, duration: 1.8, ease: 'power2.out', delay: 0.4
      });

      // Features Animation (Floating Up)
      gsap.from('.feature-node', {
        y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-area', start: 'top 80%' }
      });

      // Steps Animation (Horizontal Slide)
      gsap.from('.step-card', {
        x: 60, opacity: 0, duration: 0.9, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.steps-track', start: 'top 75%' }
      });

      // Testimonial Animation (Fade & Scale)
      gsap.from('.testimonial-wrap', {
        scale: 0.95, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonial-block', start: 'top 85%' }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fff9f9] text-[#2c1f20] min-h-screen pt-20 overflow-hidden font-['Inter']">
      <style dangerouslySetInnerHTML={{__html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#fff0f3] to-[#ffe5ec]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#ffb3c6] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffcbf2] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full py-20">
          <div className="hero-text space-y-10 max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff8fab]/10 text-[#d00000] text-sm font-semibold tracking-wider uppercase font-['Public_Sans']">{data.heroSub}</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-[#370617]">{data.heroTitle}</h1>
            <p className="text-xl text-[#6a040f] leading-relaxed opacity-80">{data.heroDesc}</p>
            <div className="pt-4">
              <Link href="/contact" className="bg-[#d00000] text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:shadow-[0_20px_40px_-15px_rgba(208,0,0,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 inline-block">Start Building</Link>
            </div>
          </div>
          <div className="hero-graphic relative">
            <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative z-10 relative">
              { }
              <img className="w-full h-full object-cover scale-110" alt={data.heroTitle} src={data.heroImage}/>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
              <span className="material-symbols-outlined text-[#d00000] text-6xl">favorite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-area py-32 bg-white rounded-[4rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#370617] mb-6 tracking-tight">{data.featuresTitle}</h2>
            <p className="text-[#6a040f] max-w-2xl mx-auto opacity-70 text-lg leading-relaxed">{data.featuresDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, idx) => (
              <div key={idx} className="feature-node bg-[#fff0f3] p-10 rounded-[2.5rem] hover:bg-[#ffe5ec] transition-colors duration-500 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-[#d00000] text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#370617] mb-4">{feature.title}</h3>
                <p className="text-[#6a040f] opacity-80 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-track py-32 bg-[#ffb3c6]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#370617] leading-tight">{data.stepsTitle}</h2>
            <p className="text-[#6a040f] opacity-80 text-lg leading-relaxed mb-8">{data.stepsDesc}</p>
            <Link href="/contact" className="font-bold text-[#d00000] border-b-2 border-[#d00000] pb-1 hover:text-[#9d0208] hover:border-[#9d0208] transition-colors text-lg flex items-center gap-2 max-w-max">
              Review our methodology <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="lg:col-span-3 space-y-6">
            {data.steps.map((step, idx) => (
              <div key={idx} className="step-card bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow flex gap-8 items-center">
                <div className="text-6xl font-black text-[#ffb3c6] opacity-50 shrink-0">0{step.num}</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#370617] mb-2">{step.title}</h3>
                  <p className="text-[#6a040f] opacity-70 leading-relaxed shrink">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-block py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="testimonial-wrap space-y-12">
            <span className="material-symbols-outlined text-[#ffb3c6] text-6xl block">format_quote</span>
            <blockquote className="text-3xl md:text-5xl font-black text-[#370617] leading-tight tracking-tight">
                &quot;{data.testimonialQuote}&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl ring-4 ring-[#ffe5ec]">
                { }
                <img className="w-full h-full object-cover" alt={data.testimonialAuthor} src={data.testimonialImage}/>
              </div>
              <div>
                <p className="font-black text-[#370617] text-xl">{data.testimonialAuthor}</p>
                <p className="font-['Public_Sans'] text-sm uppercase tracking-widest text-[#d00000] mt-2 font-semibold">{data.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#370617] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d00000 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white space-y-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">{data.ctaTitle}</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{data.ctaDesc}</p>
            <Link href="/contact" className="bg-white text-[#d00000] hover:bg-[#ffb3c6] px-12 py-5 rounded-[2rem] font-black text-xl transition-all hover:scale-105 inline-block shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] mt-8">
                Initiate Project
            </Link>
        </div>
      </section>
    </div>
  );
}
