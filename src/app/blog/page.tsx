import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { supabaseServer } from '@/lib/supabase-pages'
import { getBlogFallbackImage } from '@/data/blog'
import AddBlogModal from '@/components/blog/AddBlogModal'

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog | TheGetNow — Engineering Insights & Industry Trends',
  description: 'Technical deep dives, industry analysis, and engineering insights from the TheGetNow team.',
}

export default async function BlogPage() {
  const { data: posts } = await supabaseServer
    .from('pages')
    .select('slug, title, description, category, featured_image, content_json, created_at')
    .eq('category', 'blog')
    .order('created_at', { ascending: false })

  const blogPosts = posts || []

  // Assign the first one as featured if it exists
  const featured = blogPosts.length > 0 ? blogPosts[0] : null
  const rest = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <p className="px-5 py-2 inline-flex rounded-full border border-primary/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">Insights & Research</p>
          <AddBlogModal />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 font-headline text-on-surface">
          The Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00D4FF] italic">Journal.</span>
        </h1>
        <p className="text-xl text-on-surface-variant font-light max-w-2xl mx-auto leading-relaxed">
          Technical deep dives, industry analysis, and product architecture breakdowns from our vanguard engineering team.
        </p>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 pb-32">
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block relative rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-20 group border border-border bg-surface shadow-md hover:shadow-2xl transition-all duration-700">
            <div className="relative h-80 lg:h-auto overflow-hidden bg-surface-container-high">
              <Image 
                src={featured.featured_image || getBlogFallbackImage(0)} 
                alt={featured.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0 relative z-10" 
                sizes="50vw" 
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-surface/10 to-surface opacity-0 lg:opacity-100" />
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10 bg-surface">
              <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-xs font-bold uppercase tracking-widest text-on-surface w-fit mb-6">
                {featured.category}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 group-hover:text-primary transition-colors font-headline text-on-surface drop-shadow-sm leading-tight">
                {featured.title}
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-on-surface-variant line-clamp-3">
                {featured.description}
              </p>
              <div className="flex items-center gap-4">
                <img src={(featured.content_json as any)?.author?.avatar || 'https://i.pravatar.cc/150?u=tech'} alt="Author" className="w-12 h-12 rounded-full object-cover border-2 border-border" />
                <div>
                  <p className="text-sm font-bold text-on-surface uppercase tracking-wide">{(featured.content_json as any)?.author?.name || 'Editorial Team'}</p>
                  <p className="text-xs text-secondary flex items-center gap-2 mt-1">
                    <FontAwesomeIcon icon={faClock} /> 
                    <span>{(featured.content_json as any)?.readTime || '5 min read'}</span>
                    <span>&middot;</span>
                    <span>{new Date(featured.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col rounded-[2rem] overflow-hidden group border border-border bg-surface hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={post.featured_image || getBlogFallbackImage(i + 1)} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" 
                  sizes="33vw" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="px-3 py-1 rounded-full bg-surface-container text-[10px] font-bold uppercase tracking-widest text-secondary w-fit mb-4">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 font-headline text-on-surface leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm line-clamp-3 mb-8 text-on-surface-variant leading-relaxed">
                  {post.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                  <div className="flex items-center gap-3">
                    <img src={(post.content_json as any)?.author?.avatar || 'https://i.pravatar.cc/150?u=tech2'} alt="Author" className="w-8 h-8 rounded-full object-cover border border-border" />
                    <div>
                      <p className="text-xs font-bold text-on-surface uppercase tracking-wide">{(post.content_json as any)?.author?.name || 'Editorial Team'}</p>
                      <p className="text-[10px] text-secondary">
                        {(post.content_json as any)?.readTime || '5 min read'}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-24 text-center bg-surface-container border-t border-border">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-4 font-headline text-on-surface">Stay firmly in the loop.</h2>
          <p className="text-lg mb-10 text-on-surface-variant font-light">Weekly engineering insights. No marketing fluff. Unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="senior.engineer@example.com" className="w-full px-6 py-4 rounded-full bg-surface border border-border text-on-surface focus:outline-none focus:border-primary transition-colors" />
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(0,87,255,0.3)] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
