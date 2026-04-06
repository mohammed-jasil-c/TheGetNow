'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'How AI is Revolutionizing Enterprise Software in 2025',
    slug: 'how-ai-is-revolutionizing-enterprise-software-in-2025',
    excerpt: 'Discover the latest trends in artificial intelligence and how enterprises are leveraging AI to gain competitive advantages.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    category: 'Artificial Intelligence',
    date: 'Mar 28, 2025',
    readTime: '8 min read',
    accent: '#0057FF',
  },
  {
    title: 'The Complete Guide to Blockchain Development for Startups',
    slug: 'the-complete-guide-to-blockchain-development-for-startups',
    excerpt: 'Everything you need to know about building decentralized applications and smart contracts for your business.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    category: 'Blockchain',
    date: 'Mar 22, 2025',
    readTime: '12 min read',
    accent: '#7B2FFF',
  },
  {
    title: 'Building Scalable Cloud Architectures with Kubernetes',
    slug: 'building-scalable-cloud-architectures-with-kubernetes',
    excerpt: 'Learn best practices for designing resilient, auto-scaling cloud infrastructure that handles millions of requests.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    category: 'Cloud & DevOps',
    date: 'Mar 15, 2025',
    readTime: '10 min read',
    accent: '#00D4FF',
  },
]

const mediaLogos = [
  { name: 'TechCrunch', color: '#0A9E01' },
  { name: 'Forbes', color: '#B5131E' },
  { name: 'Bloomberg', color: '#2800D7' },
  { name: 'Reuters', color: '#FF6600' },
  { name: 'CNBC', color: '#005AAC' },
  { name: 'Wired', color: '#000' },
]

export default function MediaCoverage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.blog-card')
            cards.forEach((card, i) => {
              const htmlCard = card as HTMLElement
              setTimeout(() => {
                htmlCard.style.opacity = '1'
                htmlCard.style.transform = 'translateY(0)'
              }, i * 150)
            })
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section className="py-24 sm:py-32" style={{ background: 'var(--bg-page)' }}>
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* As seen in */}
        <div className="text-center mb-16">
          <p className="section-label mb-6">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {mediaLogos.map((logo) => (
              <div
                key={logo.name}
                className="text-lg sm:text-xl font-black tracking-tight transition-opacity opacity-30 hover:opacity-70 cursor-default"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-16" style={{ background: 'var(--border-subtle)' }} />

        {/* Blog Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Media Coverage & Insights</p>
            <h2 className="section-title">
              Latest From Our <span className="gradient-text">Blog</span>
            </h2>
          </div>
          <a href="/blog" className="btn-outline !py-2.5 !px-5 !text-sm">
            View All Posts
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.title} href={`/blog/${post.slug}`} className="block">
              <article
                className="blog-card glass-card rounded-2xl overflow-hidden group cursor-pointer h-full"
                style={{ transform: 'translateY(30px)', transition: 'all 0.6s ease' }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ background: post.accent }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: 'var(--text-dim)' }} />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold mb-3 leading-snug group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-2 mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--brand-blue)' }}>
                    Read Full Article
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
