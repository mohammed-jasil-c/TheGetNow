'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Crafting dynamic web solutions with responsive design and highly scalable full-stack architectures.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind'],
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Building native and cross-platform mobile apps that deliver fluid, engaging user experiences.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    tags: ['Flutter', 'Swift', 'Kotlin', 'React Native'],
  },
  {
    title: 'Blockchain Development',
    slug: 'blockchain-development',
    description: 'Building decentralized applications, smart contracts, and Web3 platforms with enterprise-grade security.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    tags: ['Solidity', 'Ethereum', 'Smart Contracts'],
  },
  {
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'Integrating deep learning models, NLP pipelines, and computer vision into your business workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    tags: ['TensorFlow', 'PyTorch', 'GPT', 'LangChain'],
  },
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Designing scalable cloud architectures with CI/CD pipelines, containerization, and infrastructure as code.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Creating intuitive, human-centered interfaces that drive engagement and elevate brand perception.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Game Development',
    slug: 'game-development',
    description: 'Building immersive gaming experiences across platforms with stunning graphics and engaging mechanics.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    tags: ['Unity', 'Unreal', 'AR/VR'],
  },
]

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div ref={sectionRef} className="reveal max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Expertise & Services</p>
          <h2 className="section-title mb-4 mx-auto">
            Our Expertise And <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Explore our exceptional development prowess across a spectrum of dynamic sectors.
          </p>
        </div>

        {/* Interactive Service Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
          {/* Left: Service list */}
          <div className="space-y-1">
            {services.map((service, i) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-5 py-4 rounded-xl flex items-center justify-between group transition-all duration-300 ${
                  activeIndex === i ? 'glass-card !transform-none' : 'hover:bg-[var(--bg-hover)]'
                }`}
                style={activeIndex === i ? { borderColor: 'var(--brand-blue)', boxShadow: 'none', transform: 'none' } : {}}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full transition-all ${activeIndex === i ? 'bg-[var(--brand-blue)] scale-125' : 'bg-[var(--text-dim)]'}`} />
                  <span
                    className="text-sm sm:text-base font-semibold transition-colors"
                    style={{ color: activeIndex === i ? 'var(--brand-blue)' : 'var(--text-secondary)' }}
                  >
                    {service.title}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 transition-all ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                  style={{ color: 'var(--brand-blue)' }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right: Active service card */}
          <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: '400px' }}>
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {services[activeIndex].title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-md">
                {services[activeIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {services[activeIndex].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${services[activeIndex].slug}`}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/20"
              >
                Read More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
