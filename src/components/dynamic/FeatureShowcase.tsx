'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FeatureShowcaseProps {
  overview: string
  features: { title: string; desc: string; icon: string }[]
  heroImage: string
}

export default function FeatureShowcase({ overview, features, heroImage }: FeatureShowcaseProps) {
  
  useEffect(() => {
    gsap.fromTo('[data-dyn-feature]', 
      { y: 50 }, 
      { 
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: '#feature-showcase', start: "top 75%" }
      }
    )
  }, [overview])

  return (
    <section id="feature-showcase" className="py-32 theme-page relative">
       <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20" data-dyn-feature>
            <h2 className="text-4xl md:text-5xl font-black theme-text-heading mb-6 tracking-tight">Our Core Capabilities</h2>
            <p className="text-lg theme-text-secondary leading-relaxed">{overview}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* The Features */}
            <div className="lg:col-span-1 space-y-4">
              {features.map((f, i) => (
                <div key={i} data-dyn-feature className="p-6 theme-card border theme-border rounded-2xl flex gap-4 items-start group hover:border-sky-500/50 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 flex items-center justify-center shrink-0">
                    <i className={`${f.icon} text-xl text-sky-500 group-hover:scale-110 transition-transform`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold theme-text-heading mb-2">{f.title}</h3>
                    <p className="theme-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Realistic Vector Mockup */}
            <div className="lg:col-span-2 relative min-h-[500px]" data-dyn-feature>
               <div className="absolute inset-0 theme-card border theme-border rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8">
                  {/* Background graphic */}
                  <div className="absolute inset-0 opacity-10 blur-xl">
                     <img src={heroImage} className="w-full h-full object-cover" alt="" />
                  </div>
                  
                  {/* Center showcase mimicking a complex architecture diagram / realistic vector dashboard */}
                  <div className="relative w-full h-full bg-black/5 dark:bg-white/5 border theme-border rounded-2xl flex flex-col p-6 overflow-hidden">
                     <div className="flex items-center gap-3 mb-8 border-b theme-border pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                     </div>
                     
                     {/* Vector nodes */}
                     <div className="flex-1 flex items-center justify-between px-10 relative">
                        {/* Connecting line */}
                        <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 -translate-y-1/2 opacity-50" />
                        
                        {[categories[0], 'Processing Engine', 'Client Delivery'].map((node, i) => (
                          <div key={i} className="relative z-10 w-32 h-32 theme-card border theme-border rounded-full flex flex-col items-center justify-center gap-2 shadow-xl backdrop-blur-md hover:-translate-y-2 transition-transform cursor-pointer">
                              <i className={`text-2xl ${i === 0 ? 'fa-solid fa-cloud text-sky-400' : i === 1 ? 'fa-solid fa-microchip text-indigo-400' : 'fa-solid fa-mobile-screen text-violet-400'}`} />
                              <span className="text-xs font-bold theme-text-heading text-center leading-tight">{node}</span>
                          </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>

          </div>

       </div>
    </section>
  )
}

const categories = ['Data Ingestion']
