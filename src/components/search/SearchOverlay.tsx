'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, X, Loader2, ArrowRight, CornerDownLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      setQuery('')
      setResults([])
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onClose() // Toggle or handle elsewhere
      }
      if (e.key === 'Escape') onClose()
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % results.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        handleSelect(results[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length < 2) {
        setResults([])
        return
      }
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const { data } = await res.json()
        setResults(data || [])
        setSelectedIndex(0)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleSelect = (item: any) => {
    router.push(`/${item.category}/${item.slug}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl enterprise-card rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" style={{ background: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
        <div className="flex items-center px-5 h-16 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <Search className="w-5 h-5 opacity-40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 1,000+ capabilities, pages, or insights..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-base font-medium"
            style={{ color: 'var(--text-primary)' }}
          />
          <div className="flex items-center gap-3">
            {loading && <Loader2 className="w-4 h-4 animate-spin opacity-40" />}
            <button 
              onClick={onClose}
              className="p-1 rounded-md transition-colors hover:bg-white/10"
              style={{ color: 'var(--text-muted)' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto py-4 px-2">
          {query.length < 2 ? (
            <div className="px-4 py-12 text-center">
              <div className="flex justify-center gap-8 mb-6 opacity-30">
                <Search className="w-12 h-12" />
              </div>
              <p className="text-sm font-boldAlpha" style={{ color: 'var(--text-muted)' }}>Start typing to search global intelligence...</p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['Services', 'Industries', 'Case Studies', 'AI & ML'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>{t}</span>
                ))}
              </div>
            </div>
          ) : results.length === 0 && !loading ? (
            <div className="px-4 py-12 text-center">
              <p className="text-sm font-boldAlpha" style={{ color: 'var(--text-muted)' }}>No results found for &quot;{query}&quot;</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, i) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIndex(i)}
                  onClick={() => handleSelect(item)}
                  className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedIndex === i ? 'bg-blue-600/10' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-600/10" style={{ color: 'var(--brand-blue)' }}>{item.category}</span>
                    </div>
                    <h3 className="text-base font-bold truncate" style={{ color: selectedIndex === i ? 'var(--brand-blue)' : 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-xs truncate opacity-60" style={{ color: 'var(--text-secondary)' }}>{item.subtitle}</p>
                  </div>
                  <div className={`flex items-center gap-2 transition-opacity duration-200 ${selectedIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-[10px] font-bold uppercase opacity-40">Open</span>
                    <CornerDownLeft className="w-4 h-4 opacity-40" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 h-10 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-elevated)' }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 opacity-40">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold">↵</kbd>
              <span className="text-[10px] font-bold">Select</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-40">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold">↑↓</kbd>
              <span className="text-[10px] font-bold">Navigate</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 opacity-40">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold">ESC</kbd>
            <span className="text-[10px] font-bold">Close</span>
          </div>
        </div>
      </div>
    </div>
  )
}
