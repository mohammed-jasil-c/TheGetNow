'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureBentoProps {
  overview: string;
  features: { title: string; desc: string; icon: string; colSpan?: number }[];
}

export default function FeatureBento({ overview, features }: FeatureBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Bento grid reveal
    gsap.fromTo(containerRef.current.children,
      { y: 100, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section className="py-24 theme-page relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold theme-text-heading mb-6">
            Engineered for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl theme-text-secondary leading-relaxed">
            {overview}
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feature, i) => {
             // Use colSpan if provided, otherwise default to 1
             const spanClass = feature.colSpan === 2 ? 'md:col-span-2' : 
                               feature.colSpan === 3 ? 'md:col-span-3' : 'md:col-span-1';
             
             return (
               <div key={i} className={`relative glass-card p-8 flex flex-col justify-end group overflow-hidden ${spanClass}`}>
                 {/* Decorative background element on hover */}
                 <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-all duration-700 pointer-events-none" />
                 
                 <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl theme-card border theme-border flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <i className={`${feature.icon} text-2xl theme-text-heading`} />
                 </div>
                 
                 <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold theme-text-heading mb-3">{feature.title}</h3>
                    <p className="text-base theme-text-secondary leading-relaxed max-w-md">{feature.desc}</p>
                 </div>
               </div>
             )
          })}
        </div>

      </div>
    </section>
  )
}
