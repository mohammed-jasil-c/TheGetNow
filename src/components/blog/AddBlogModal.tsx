'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AddBlogModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: ''
  })

  // Basic slugify
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const slug = slugify(formData.title)
    
    try {
      const { error } = await supabase.from('pages').insert({
        slug,
        title: formData.title,
        subtitle: formData.excerpt,
        description: formData.content,
        category: 'blog',
        layout_template: 'Article',
        content_json: {
          author: {
            name: 'Editorial Team',
            avatar: 'https://i.pravatar.cc/150?u=tech',
            role: 'Author'
          },
          readTime: '3 min read'
        }
      })

      if (error) throw error
      
      setIsOpen(false)
      setFormData({ title: '', excerpt: '', content: '' })
      router.refresh()
    } catch (err: any) {
      alert(`Error adding blog: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 bg-[#0057FF] text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-[0_0_20px_rgba(0,87,255,0.4)] hover:scale-105 transition-all font-bold text-[10px] uppercase tracking-widest border border-white/10"
        title="Add Blog Post"
      >
        <span>+</span> Add New Blog
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface border border-border w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface"
            >
              Close
            </button>
            <h2 className="text-3xl font-black mb-6 text-on-surface font-headline">New Blog Post</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1">Title</label>
                <input 
                  type="text" 
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full form-input"
                  placeholder="Enter blog title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1">Excerpt (Subtitle)</label>
                <input 
                  type="text" 
                  required
                  value={formData.excerpt}
                  onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full form-input"
                  placeholder="Short description for the card"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-1">Content (Markdown supported lines)</label>
                <textarea 
                  required
                  rows={8}
                  value={formData.content}
                  onChange={e => setFormData({ ...formData, content: e.target.value })}
                  className="w-full form-textarea"
                  placeholder="Your full article content here. Use '## ' for headings."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary"
                >
                  {loading ? 'Publishing...' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
