'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    label: 'AI-Powered Solutions',
    title: 'Intelligent systems that learn and adapt.',
    desc: 'From custom LLMs and RAG pipelines to computer vision and predictive analytics — we build AI that delivers measurable ROI.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  },
  {
    label: 'Cloud Architecture',
    title: 'Infrastructure that scales automatically.',
    desc: 'Multi-cloud, serverless, and containerized architectures that handle millions of requests while optimizing cost.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
  },
  {
    label: 'Design Excellence',
    title: 'Interfaces that users love.',
    desc: 'Our design team creates pixel-perfect, accessible interfaces backed by user research and design systems that scale.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
  },
]

export default function FeatureBlocks() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Small delay to ensure layout is ready
      setTimeout(() => {
        const texts = gsap.utils.toArray('.fb-text-block') as HTMLElement[]
        const images = gsap.utils.toArray('.fb-image') as HTMLElement[]
        const progressBars = gsap.utils.toArray('.fb-progress') as HTMLElement[]

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.fb-pinned-section',
          pinSpacing: false,
        })

        texts.forEach((text, i) => {
          // Inner scroll trigger for the text blocks to drive the images
          gsap.timeline({
            scrollTrigger: {
              trigger: text,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1,
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            }
          })
          
          // Progress bar animation linking directly to scroll
          gsap.fromTo(progressBars[i], 
            { scaleY: 0 },
            { 
              scaleY: 1, 
              ease: 'none',
              transformOrigin: 'top',
              scrollTrigger: {
                trigger: text,
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: true,
              }
            }
          )
        })

        function setActive(index: number) {
          texts.forEach((t, i) => {
            if (i === index) {
              gsap.to(t, { opacity: 1, x: 20, duration: 0.6, ease: 'power2.out' })
            } else {
              gsap.to(t, { opacity: 0.3, x: 0, duration: 0.6, ease: 'power2.out' })
            }
          })

          images.forEach((img, i) => {
            if (i === index) {
              gsap.to(img, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', zIndex: 10 })
            } else {
              gsap.to(img, { scale: 1.05, duration: 0.8, ease: 'power2.out', zIndex: 0 })
            }
          })
        }

        // Initialize state
        setActive(0)
        
      }, 100)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left side: Scrolling Text Blocks */}
        <div className="py-[30vh] lg:py-[40vh] flex flex-col gap-[30vh]">
          {features.map((f, i) => (
            <div key={i} className="fb-text-block relative pl-8 lg:pl-12 opacity-30 transition-opacity">
              {/* Vertical timeline track */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full overflow-hidden" style={{ background: 'var(--color-border-strong)' }}>
                <div 
                  className="fb-progress w-full h-full" 
                  style={{ background: 'var(--gradient-primary)', transform: 'scaleY(0)' }} 
                />
              </div>

              <p className="section-label mb-5">{f.label}</p>
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                {f.title}
              </h3>
              <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right side: Pinned Image Section */}
        <div className="hidden lg:block relative h-screen">
          <div className="fb-pinned-section absolute top-0 left-0 w-full h-screen flex items-center justify-center">
            
            <div className="relative w-[80%] max-w-[460px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl" style={{ border: '1px solid var(--color-border)' }}>
              {features.map((f, i) => (
                <div 
                  key={i} 
                  className="fb-image absolute inset-0 w-full h-full opacity-0"
                  style={{
                    background: 'var(--color-surface)'
                  }}
                >
                  {/* Subtle noise/gradient overlay */}
                  <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)' }} />
                  
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                    <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">{f.label}</p>
                    <p className="text-2xl font-heading">{f.title}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
