'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Loader2, ArrowRight, Clock, MessageSquare, Shield, Globe2 } from 'lucide-react'

const offices = [
  { city: 'New York', address: 'One World Trade Center, Floor 85, New York, NY 10007', icon: '🇺🇸', timezone: 'EST (UTC-5)' },
  { city: 'London', address: '30 St Mary Axe, London EC3A 8BF, United Kingdom', icon: '🇬🇧', timezone: 'GMT (UTC+0)' },
  { city: 'Dubai', address: 'DIFC, Gate Village 8, Floor 15, Dubai, UAE', icon: '🇦🇪', timezone: 'GST (UTC+4)' },
  { city: 'Gurugram', address: 'Cybercity, DLF Phase 3, Sector 24, Gurugram 122002', icon: '🇮🇳', timezone: 'IST (UTC+5:30)' },
]

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>

      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="section-label">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Let&apos;s build something <span className="gradient-text-hero">extraordinary.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? Our solution architects will analyze your requirements and provide a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" style={{ color: 'var(--color-primary)' }} /> Response in &lt;2 hours</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} /> NDA on request</div>
            <div className="flex items-center gap-2"><Globe2 className="w-4 h-4" style={{ color: 'var(--color-primary)' }} /> Global team, any timezone</div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-6">

            {/* Quick Contact */}
            <div className="enterprise-card p-8 rounded-3xl">
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: 'var(--text-heading)' }}>Quick Contact</h2>
              <div className="space-y-4">
                <a href="mailto:hello@thegetnow.com" className="flex items-center gap-4 p-4 rounded-2xl transition-colors group" style={{ background: 'var(--bg-surface)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 87, 255, 0.12)' }}>
                    <Mail className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <p className="font-bold group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-heading)' }}>hello@thegetnow.com</p>
                  </div>
                </a>
                <a href="tel:+16284327890" className="flex items-center gap-4 p-4 rounded-2xl transition-colors group" style={{ background: 'var(--bg-surface)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 87, 255, 0.12)' }}>
                    <Phone className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>Phone</p>
                    <p className="font-bold group-hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-heading)' }}>+1 (628) 432-7890</p>
                  </div>
                </a>
                <a href="https://wa.me/919463407140" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-2xl transition-colors group" style={{ background: 'var(--bg-surface)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#25D366]/12">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>WhatsApp</p>
                    <p className="font-bold group-hover:text-[#25D366] transition-colors" style={{ color: 'var(--text-heading)' }}>Chat with us instantly</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Enterprise Support */}
            <div className="enterprise-card p-8 rounded-3xl">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-heading)' }}>Enterprise Support</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                Existing enterprise client? Contact your dedicated account manager or use the support portal for prioritized routing.
              </p>
              <a href="#" className="text-sm font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                Access Support Portal <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="enterprise-card p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-extrabold mb-8" style={{ color: 'var(--text-heading)' }}>Start Your Project</h2>

            {success ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(16, 185, 129, 0.12)' }}>
                  <Send className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We&apos;ll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>First Name</label>
                    <input required type="text" placeholder="John" className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>Last Name</label>
                    <input required type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>Email Address</label>
                  <input required type="email" placeholder="john@company.com" className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>Budget Range</label>
                    <select className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none appearance-none" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}>
                      <option>$5K – $15K</option>
                      <option>$15K – $50K</option>
                      <option>$50K – $100K</option>
                      <option>$100K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>Project Type</label>
                    <select className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none appearance-none" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}>
                      <option>Mobile App</option>
                      <option>Web Platform</option>
                      <option>AI / ML</option>
                      <option>Blockchain</option>
                      <option>Cloud / DevOps</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>Tell us about your project</label>
                  <textarea required rows={5} placeholder="Describe your project, goals, and timeline..." className="w-full px-4 py-3 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }} />
                </div>

                <button type="submit" disabled={loading} className="glow-button w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Offices */}
        <section className="mt-24">
          <p className="section-label text-center">Global Offices</p>
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            We&apos;re <span className="gradient-text">everywhere you need us.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map(o => (
              <div key={o.city} className="enterprise-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{o.city}</h3>
                <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{o.address}</p>
                <p className="text-[10px] font-bold" style={{ color: 'var(--color-primary)' }}>{o.timezone}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
