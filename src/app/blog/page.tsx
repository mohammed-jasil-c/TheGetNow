import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaClock } from 'react-icons/fa6'
import { supabaseServer } from '@/lib/supabase-pages'
import { getBlogFallbackImage } from '@/data/blog'

export const metadata = {
  title: 'Blog | TheGetNow — Engineering Insights & Industry Trends',
  description: 'Technical deep dives, industry analysis, and engineering insights from the TheGetNow team.',
}

export default async function BlogPage() {
  const { data: posts } = await supabaseServer
    .from('pages')
    .select('slug, title, description, category, featured_image, content_json')
    .eq('category', 'blog')
    //.order('id', { ascending: false })

  const blogPosts = posts || []

  // Assign the first one as featured if it exists
  const featured = blogPosts.length > 0 ? blogPosts[0] : null
  const rest = blogPosts.slice(1)

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6 max-w-4xl mx-auto">
        <p className="section-label mb-4">Insights & Research</p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
          The Engineering <span className="gradient-text">Journal.</span>
        </h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Technical deep dives, industry analysis, and product thinking from our engineering team.
        </p>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 pb-32">
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="enterprise-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-16 group">
            <div className="relative h-64 lg:h-auto">
              <Image 
                src={featured.featured_image || getBlogFallbackImage(0)} 
                alt={featured.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                sizes="50vw" 
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="pill-badge mb-4 w-fit uppercase">{featured.category}</span>
              <h2 className="text-3xl font-extrabold mb-4 group-hover:text-[var(--color-primary)] transition-colors font-heading" style={{ color: 'var(--color-text)' }}>
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>{featured.description}</p>
              <div className="flex items-center gap-3">
                <img src={featured.content_json?.author?.avatar || 'https://i.pravatar.cc/150?u=tech'} alt={'Author'} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{featured.content_json?.author?.name || 'Editorial Team'}</p>
                  <p className="text-xs flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
                    <span>Recent Update</span>
                    <span>·</span>
                    <FaClock className="w-3 h-3" /> {featured.content_json?.readTime || '5 min read'}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="enterprise-card rounded-2xl overflow-hidden group">
              <div className="relative h-48">
                <Image 
                  src={post.featured_image || getBlogFallbackImage(blogPosts.indexOf(post))} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="33vw" 
                />
              </div>
              <div className="p-6">
                <span className="pill-badge mb-3 inline-flex uppercase">{post.category}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 font-heading" style={{ color: 'var(--color-text)' }}>
                  {post.title}
                </h3>
                <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--color-text-secondary)' }}>{post.description}</p>
                <div className="flex items-center gap-2.5">
                  <img src={post.content_json?.author?.avatar || 'https://i.pravatar.cc/150?u=tech2'} alt={'Author'} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--color-text)' }}>{post.content_json?.author?.name || 'Editorial Team'}</p>
                    <p className="text-[10px]" style={{ color: 'var(--color-muted)' }}>
                      {post.content_json?.readTime || '5 min read'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-24 text-center" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>Stay in the loop</h2>
          <p className="text-base mb-8" style={{ color: 'var(--color-text-secondary)' }}>Weekly engineering insights, no spam.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="form-input flex-1" />
            <button className="glow-button px-6">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
