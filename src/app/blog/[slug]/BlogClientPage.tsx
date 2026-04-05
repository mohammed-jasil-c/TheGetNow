'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BlogPostProps = {
  post: {
    title: string
    slug: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    accent: string
    content: string
  }
}

// Function to format the basic markdown we provided into React elements
// In a real production app, you would use a library like react-markdown
const parseMarkdown = (text: string) => {
  const blocks = text.trim().split('\n\n')
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
          {block.replace('## ', '')}
        </h2>
      )
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n')
      return (
        <ul key={i} className="list-disc pl-6 space-y-3 mb-8" style={{ color: 'var(--text-secondary)' }}>
          {items.map((item, j) => {
            // Very hacky bold parsing for demo purposes
            let html = item.replace('- ', '')
            if (html.includes('**')) {
              const parts = html.split('**')
              return <li key={j}>{parts[0]}<strong className="font-bold text-[var(--text-primary)]">{parts[1]}</strong>{parts[2]}</li>
            }
            return <li key={j}>{html}</li>
          })}
        </ul>
      )
    }
    
    // Bold parsing for paragraphs
    let html = block
    if (html.includes('**')) {
      const parts = html.split('**')
      return (
        <p key={i} className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {parts[0]}<strong className="font-bold text-[var(--text-primary)]">{parts[1]}</strong>{parts[2]}
        </p>
      )
    }

    return (
      <p key={i} className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
        {block}
      </p>
    )
  })
}

export default function BlogClientPage({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen pb-32" style={{ background: 'var(--bg-page)' }}>
      {/* Blog Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 max-w-[1000px] mx-auto text-center">
        <Link href="/#blog" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--brand-blue)' }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Blog
        </Link>
        
        <div className="flex items-center justify-center gap-4 mb-6 text-sm font-bold tracking-widest uppercase">
          <span style={{ color: post.accent }}>{post.category}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-4 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
          <span>{post.date}</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span>{post.readTime}</span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 max-w-[1200px] mx-auto mb-20">
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
      </section>

      {/* Content Body */}
      <article className="px-4 sm:px-6 max-w-[800px] mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-12" style={{ color: 'var(--brand-blue)' }}>
            {post.excerpt}
          </p>
          
          {parseMarkdown(post.content)}
        </div>

        {/* Share/Footer */}
        <div className="mt-20 pt-10 border-t flex flex-col sm:flex-row justify-between items-center gap-6" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Share Article</span>
            <div className="flex gap-2">
              {['Twitter', 'LinkedIn', 'Facebook'].map(network => (
                <button key={network} className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>
                  {network[0]}
                </button>
              ))}
            </div>
          </div>
          <Link href="/contact" className="btn-primary">
            Discuss This Topic
          </Link>
        </div>
      </article>
    </div>
  )
}
