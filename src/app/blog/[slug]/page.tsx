import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaClock, FaLinkedinIn, FaXTwitter, FaLink } from 'react-icons/fa6'
import { BLOG_POSTS, getBlogBySlug } from '@/data/blog'
import { getPageFromDB, getAllSlugsForCategory } from '@/lib/supabase-pages'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const dbPost = await getPageFromDB('blog', slug)
  if (dbPost) {
    return { title: `${dbPost.title} | TheGetNow Blog`, description: dbPost.subtitle }
  }
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return { title: `${post.title} | TheGetNow Blog`, description: post.excerpt }
}

export async function generateStaticParams() {
  const dbSlugs = await getAllSlugsForCategory('blog')
  const staticSlugs = BLOG_POSTS.map(p => ({ slug: p.slug }))
  const allSlugs = Array.from(new Set([...dbSlugs, ...staticSlugs.map(s => s.slug)]))
  return allSlugs.map(slug => ({ slug }))
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  
  // 1. Try DB first
  const dbPost = await getPageFromDB('blog', slug)
  
  let post: any = null
  
  if (dbPost) {
    const contentJson = dbPost.content_json as any
    post = {
      slug: dbPost.slug,
      title: dbPost.title,
      category: dbPost.accent_color ? 'Expert Insight' : 'Engineering', // example mapping
      image: dbPost.featured_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80\u0026w=1200\u0026q=80',
      author: {
        name: contentJson?.author?.name || 'Editorial Team',
        avatar: contentJson?.author?.avatar || 'https://i.pravatar.cc/150?u=tech',
        role: contentJson?.author?.role || 'Contributor'
      },
      date: dbPost.created_at,
      readTime: contentJson?.readTime || '5 min read',
      content: dbPost.description || 'Full article content coming soon.', // fallback to description if content_json is empty
      excerpt: dbPost.subtitle
    }
  } else {
    // 2. Fallback to static
    const staticPost = getBlogBySlug(slug)
    if (!staticPost) notFound()
    post = staticPost
  }

  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-bg) 0%, rgba(0,0,0,0.3) 100%)' }} />
      </section>

      <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-32">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>
          <FaArrowLeft className="w-3 h-3" /> Back to Blog
        </Link>

        {/* Meta */}
        <span className="pill-badge mb-4 inline-flex">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading leading-tight" style={{ color: 'var(--color-text)' }}>{post.title}</h1>

        <div className="flex items-center gap-4 mb-10 pb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{post.author.name} · {post.author.role}</p>
            <p className="text-xs flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              <span>·</span>
              <FaClock className="w-3 h-3" /> {post.readTime}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }} aria-label="Share on LinkedIn"><FaLinkedinIn className="w-3.5 h-3.5" /></button>
            <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }} aria-label="Share on Twitter"><FaXTwitter className="w-3.5 h-3.5" /></button>
            <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }} aria-label="Copy link"><FaLink className="w-3.5 h-3.5" /></button>
          </div>
        </div>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none mb-16"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <div className="space-y-4">
            {(post.content as string).split('\n').filter(Boolean).map((line: string, i: number) => {
              if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 font-heading" style={{ color: 'var(--color-text)' }}>{line.replace('## ', '')}</h2>
              if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold mt-8 mb-3 font-heading" style={{ color: 'var(--color-text)' }}>{line.replace('### ', '')}</h3>
              if (line.startsWith('**')) return <p key={i} className="text-base leading-relaxed font-semibold" style={{ color: 'var(--color-text)' }}>{line.replace(/\*\*/g, '')}</p>
              return <p key={i} className="text-base leading-relaxed">{line}</p>
            })}
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <div className="border-t pt-12" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="text-xl font-bold mb-6 font-heading" style={{ color: 'var(--color-text)' }}>Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="enterprise-card rounded-2xl overflow-hidden group">
                  <div className="relative h-40">
                    <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="50vw" />
                  </div>
                  <div className="p-5">
                    <span className="pill-badge mb-2 inline-flex text-[8px]">{r.category}</span>
                    <h4 className="text-sm font-bold group-hover:text-[var(--color-primary)] transition-colors line-clamp-2" style={{ color: 'var(--color-text)' }}>{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
