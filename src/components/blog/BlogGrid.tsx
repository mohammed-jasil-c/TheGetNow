'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Loader2 } from 'lucide-react'
import { DBPage } from '@/lib/supabase-pages'

interface BlogGridProps {
  initialPosts: DBPage[]
  initialCount: number
}

export default function BlogGrid({ initialPosts, initialCount }: BlogGridProps) {
  const [posts, setPosts] = useState<DBPage[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(initialPosts.length)
  const hasMore = posts.length < initialCount

  const loadMore = async () => {
    if (loading || !hasMore) return
    setLoading(true)

    try {
      const res = await fetch(`/api/blog?limit=12&offset=${offset}`)
      const { data } = await res.json()
      
      setPosts(prev => [...prev, ...data])
      setOffset(prev => prev + data.length)
    } catch (err) {
      console.error('Failed to load more posts:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block h-full group">
            <article className="enterprise-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={post.featured_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-3 left-3">
                  <span className="pill-badge text-xs">{(post.content_json?.category as string) || 'Engineering'}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-3 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {post.subtitle}
                </p>
                <div className="flex items-center justify-between pt-4 mt-auto border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">GT</div>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>TheGetNow</span>
                  </div>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <Clock className="w-3 h-3" /> {(post.content_json?.readTime as string) || '5 min'}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 text-center">
          <button 
            onClick={loadMore}
            disabled={loading}
            className="glow-button inline-flex items-center gap-2 min-w-[200px] justify-center"
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Loading...</>
            ) : (
              'Load More Articles'
            )}
          </button>
        </div>
      )}
    </>
  )
}
