'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, X, Command, ArrowRight, Zap, Globe, Shield, Cpu, Sparkles, Layout } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import gsap from 'gsap'
import { getSearchResults } from '@/app/actions/search'

const categories = [
  { name: 'Services', slug: 'services', icon: Zap, color: '#0057FF' },
  { name: 'Industries', slug: 'industries', icon: Globe, color: '#00D4FF' },
  { name: 'Portfolio', slug: 'portfolio', icon: Sparkles, color: '#7B2FFF' },
  { name: 'Blog', slug: 'blog', icon: Layout, color: '#FF2D55' },
]

export default function SearchOverlay() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  
  const overlayRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // 1. Listen for shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // 2. Animate Open/Close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, autoAlpha: 1 })
      gsap.fromTo(modalRef.current, 
        { y: -20, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)' }
      )
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, autoAlpha: 0 })
    }
  }, [open])

  // 3. Search Logic with Debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim().length >= 2) {
        setLoading(true)
        const data = await getSearchResults(query)
        setResults(data)
        setLoading(false)
        setActiveIndex(0)
      } else {
        setResults([])
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [query])

  // 4. Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => Math.min(prev + 1, results.length + categories.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      if (activeIndex < results.length) {
        const item = results[activeIndex]
        router.push(`/${item.category}/${item.slug}`)
        setOpen(false)
      } else {
        const cat = categories[activeIndex - results.length]
        router.push(`/${cat.slug}`)
        setOpen(false)
      }
    }
  }

  if (!open && !results.length && !loading) {
    // Hidden but accessible via Ref
  }

  return (
    <div 
      ref={overlayRef}
      className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-4 opacity-0 invisible`}
      onClick={() => setOpen(false)}
    >
      <div 
        ref={modalRef}
        className="w-full max-w-2xl bg-white dark:bg-[#111] rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar */}
        <div className="flex items-center px-6 h-16 border-b border-white/5 gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input 
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 1,000+ pages... (Apps, Industries, AI)"
            className="flex-1 bg-transparent border-none outline-none text-lg text-zinc-200 placeholder:text-zinc-500"
          />
          <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg text-[10px] font-bold text-zinc-400">
            <Command className="w-3 h-3" /> K
          </div>
          <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/5 rounded-full text-zinc-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
          {loading ? (
            <div className="py-20 text-center animate-pulse">
              <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-4 animate-spin" />
              <p className="text-zinc-400 text-sm">Analyzing digital assets...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Search Results</p>
              {results.map((res, i) => (
                <Link 
                  href={`/${res.category}/${res.slug}`}
                  key={res.id}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    activeIndex === i ? 'bg-blue-600/10 border border-blue-500/20 translate-x-1' : 'bg-transparent border border-transparent'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-800 text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-zinc-200 text-sm">{res.title}</h4>
                    <p className="text-xs text-zinc-400 flex items-center gap-2">
                       <span className="capitalize text-blue-500 font-bold">{res.category}</span>
                       <span>&bull;</span>
                       {res.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-blue-500 transition-opacity ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`} />
                </Link>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="py-20 text-center">
              <p className="text-zinc-400">No pages matching &quot;{query}&quot;</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-4">
                 <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fast Navigation</p>
                 {categories.map((cat, i) => {
                   const index = i + (results.length || 0);
                   return (
                   <Link 
                     href={`/${cat.slug}`}
                     key={cat.slug}
                     onClick={() => setOpen(false)}
                     onMouseEnter={() => setActiveIndex(index)}
                     className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                       activeIndex === index ? 'bg-zinc-800 translate-x-1' : 'bg-zinc-900/50'
                     }`}
                   >
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${cat.color}20`, color: cat.color }}>
                       <cat.icon className="w-4 h-4" />
                     </div>
                     <span className="text-sm font-bold text-zinc-300">{cat.name}</span>
                   </Link>
                 )})}
               </div>
               <div className="bg-gradient-to-br from-blue-600/10 to-transparent p-6 rounded-2xl border border-blue-500/10 flex flex-col justify-center">
                  <h3 className="text-lg font-extrabold text-blue-400 mb-2">1,000+ Realities</h3>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    Our platform is architected with a semantic engine that processes thousands of enterprise solutions instantly.
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-zinc-500">
                    <Command className="w-3.5 h-3.5" /> <span>+</span> <span>Arrows</span> <span>+</span> <span>Enter</span>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-900/50 border-t border-white/5 flex items-center justify-between text-[10px] font-medium text-zinc-500">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 rotate-90" /> Select</span>
            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3" /> Navigate</span>
          </div>
          <span className="bg-zinc-800 px-2 py-1 rounded uppercase tracking-tighter">Enterprise Search Engine v1.0</span>
        </div>
      </div>
    </div>
  )
}
