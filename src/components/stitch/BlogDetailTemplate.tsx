'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShareNodes, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { DBPage } from '@/lib/supabase-pages';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogDetailTemplate({ pageData }: { pageData: DBPage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = pageData.content_json as any || {};

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Parallax hero image for depth
      gsap.to('.blog-hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.blog-hero-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Reading progress bar
      gsap.fromTo('.reading-progress', 
        { scaleX: 0 },
        { 
          scaleX: 1, 
          ease: 'none',
          scrollTrigger: {
            trigger: '.blog-article-content',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: 1
          }
        }
      );

      // Slide up content elements sequentially without opacity blocks
      gsap.from('.article-prose > *', {
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-article-content',
          start: 'top 85%',
        }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, [pageData]);

  const rawMarkdown = content.content || '# Blank post';

  return (
    <div ref={containerRef} className="min-h-screen bg-background pb-32 relative">
      
      {/* Sticky Progress Bar */}
      <div className="fixed top-[88px] left-0 w-full h-1 z-50 bg-border">
        <div 
          className="reading-progress h-full origin-left" 
          style={{ background: pageData.accent_color }}
        />
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-32 lg:pt-40 relative z-10">
        
        {/* Header Metadata */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            <span>Engineering</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: pageData.accent_color }}></span>
            <span>{content.readTime || '5 min read'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface mb-6 leading-tight tracking-tight">
            {pageData.title}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-10 max-w-3xl mx-auto">
            {pageData.subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: pageData.accent_color }}>
              <img src={content.author?.avatar || 'https://i.pravatar.cc/150'} alt="Author" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wide">{content.author?.name || 'Editorial Team'}</p>
              <p className="text-xs text-secondary flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} /> Published {new Date(pageData.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Featured Image */}
        <div className="blog-hero-container w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 relative border border-border shadow-2xl">
          <Image 
            src={pageData.featured_image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2000&q=80'}
            alt={pageData.title}
            fill
            priority
            className="blog-hero-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mix-blend-overlay" />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Social Sidebar */}
          <aside className="hidden lg:flex flex-col gap-4 sticky top-40 h-fit w-12 shrink-0">
             <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
               <FontAwesomeIcon icon={faTwitter} />
             </button>
             <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
               <FontAwesomeIcon icon={faLinkedin} />
             </button>
             <div className="w-10 h-px bg-border my-2 mx-auto"></div>
             <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
               <FontAwesomeIcon icon={faBookmark} />
             </button>
             <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
               <FontAwesomeIcon icon={faShareNodes} />
             </button>
          </aside>

          {/* Article Body */}
          <article className="blog-article-content flex-1 max-w-[700px]">
            <div className="article-prose prose prose-lg prose-invert text-on-surface-variant max-w-none 
              prose-headings:font-headline prose-headings:text-on-surface prose-headings:font-bold
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-surface-container prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:font-serif prose-blockquote:italic
              prose-img:rounded-2xl prose-img:shadow-xl
              prose-pre:bg-surface-container-high prose-pre:border prose-pre:border-border prose-pre:rounded-xl">
              <ReactMarkdown>{rawMarkdown}</ReactMarkdown>
            </div>
            
            {/* Article Footer */}
            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                 <span className="text-secondary font-bold text-sm tracking-wide uppercase">Share Article</span>
                 <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-surface-container border border-border flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors">
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-surface-container border border-border flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                 </div>
               </div>
               <div className="flex gap-3">
                 <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-bold uppercase tracking-wide">Enterprise</span>
                 <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-bold uppercase tracking-wide">Architecture</span>
               </div>
            </div>
          </article>
        </div>
      </main>

      {/* Recommended Articles Strip */}
      <section className="mt-32 border-t border-border bg-surface-dim py-24 relative z-10">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black font-headline text-on-surface mb-12">Related Engineering Topics</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <a href="/blog/future-of-ai-agents" className="group p-6 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl">
                 <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Artificial Intelligence</div>
                 <h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-3">
                   The Future of AI Agents in Enterprise Architecture
                 </h3>
                 <p className="text-sm text-on-surface-variant line-clamp-2">A deep dive into multi-agent systems, deterministic fallback mechanisms, and how we implement them.</p>
               </a>
               
               <a href="/blog/scaling-cloud-infrastructure" className="group p-6 rounded-3xl bg-surface border border-border hover:border-[var(--color-secondary)] transition-colors shadow-sm hover:shadow-xl">
                 <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-3">Cloud Systems</div>
                 <h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-[var(--color-secondary)] transition-colors line-clamp-2 mb-3">
                   Achieving Zero-Downtime on Massive Scalability
                 </h3>
                 <p className="text-sm text-on-surface-variant line-clamp-2">Our battle-tested playbook for cloud infrastructure and handling massive serverless throughput.</p>
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
