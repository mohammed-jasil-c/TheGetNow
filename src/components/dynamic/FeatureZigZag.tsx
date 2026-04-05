'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureZigZagProps {
  overview: string;
  features: { title: string; desc: string; icon: string; image?: string }[];
}

export default function FeatureZigZag({ overview, features }: FeatureZigZagProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Animate each row individually with a parallax scrub
    const rows = containerRef.current.querySelectorAll('.zigzag-row');
    
    rows.forEach((row, i) => {
      const textBlock = row.querySelector('.zigzag-text');
      const imgBlock = row.querySelector('.zigzag-img');
      const isEven = i % 2 === 0;

      gsap.fromTo(textBlock,
        { x: isEven ? -100 : 100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "center 50%",
            scrub: 1
          }
        }
      );

      gsap.fromTo(imgBlock,
        { x: isEven ? 100 : -100, opacity: 0, scale: 0.9 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "center 50%",
            scrub: 1
          }
        }
      );
    });

  }, []);

  return (
    <section className="py-32 theme-page relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-4xl md:text-6xl font-black theme-text-heading mb-6 tracking-tight">
            Designed for <span className="text-brand-blue">Impact</span>
          </h2>
          <p className="text-xl md:text-2xl theme-text-secondary leading-relaxed">
            {overview}
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col gap-32">
          {features.map((feature, i) => {
             const isEven = i % 2 === 0;
             return (
               <div key={i} className={`zigzag-row flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                 
                 {/* Text Block */}
                 <div className="zigzag-text lg:w-1/2 flex flex-col items-start text-left">
                   <div className="w-16 h-16 rounded-2xl theme-card border theme-border flex items-center justify-center shadow-[0_0_30px_rgba(var(--brand-blue),0.2)] mb-8">
                     <i className={`${feature.icon} text-3xl theme-text-heading`} />
                   </div>
                   <h3 className="text-4xl font-bold theme-text-heading mb-6">{feature.title}</h3>
                   <p className="text-lg theme-text-secondary leading-relaxed mb-8">
                     {feature.desc}
                   </p>
                   <ul className="flex flex-col gap-4">
                     {['Optimized workflows', 'Enterprise security', 'Seamless integration'].map((li, j) => (
                       <li key={j} className="flex items-center gap-3 theme-text-heading font-medium">
                         <i className="fa-solid fa-circle-check text-brand-blue" /> {li}
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Image Block */}
                 <div className="zigzag-img lg:w-1/2 w-full">
                   <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 border-4 theme-border max-h-[500px]">
                      {feature.image ? (
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                      ) : (
                        <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center">
                           <i className={`${feature.icon} text-8xl text-brand-blue opacity-20`} />
                        </div>
                      )}
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                   </div>
                 </div>

               </div>
             )
          })}
        </div>

      </div>
    </section>
  )
}
