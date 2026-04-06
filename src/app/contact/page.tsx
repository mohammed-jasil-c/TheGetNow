'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhone, FaLocationDot, FaArrowRight, FaCheck, FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub, FaSpinner } from 'react-icons/fa6'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { submitContactForm } from '@/app/actions/contact'
import OrbisNftShowcase from '@/components/home/OrbisNftShowcase'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email Us', value: 'hello@thegetnow.com', href: 'mailto:hello@thegetnow.com' },
  { icon: FaPhone, label: 'Call Us', value: '+1 (628) 432-7890', href: 'tel:+16284327890' },
  { icon: FaLocationDot, label: 'Visit Us', value: 'One World Trade Center, Floor 85, New York, NY 10007', href: '#' },
]

const socials = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { name: 'Twitter', icon: FaXTwitter, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'GitHub', icon: FaGithub, href: '#' },
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', budget: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const submissionData = new FormData()
    // Map our local state to the expected keys in submitContactForm
    const nameParts = formData.name.trim().split(' ')
    submissionData.append('firstName', nameParts[0] || '')
    submissionData.append('lastName', nameParts.slice(1).join(' ') || '')
    submissionData.append('email', formData.email)
    submissionData.append('projectType', formData.service)
    submissionData.append('budgetRange', formData.budget)
    submissionData.append('description', `Company: ${formData.company}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`)

    const result = await submitContactForm(submissionData)
    
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Failed to send message')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--color-bg)' }}>
        <div className="text-center max-w-xl animate-fade-in">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}>
            <FaCheck className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>
            Message Received!
          </h1>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Our solution architects will review your requirements and respond within 24 hours.
          </p>
          <Link href="/" className="glow-button">Back to Home <FaArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <p className="section-label mb-4">Contact Us</p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
          Let&apos;s build <span className="gradient-text">together.</span>
        </h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Get a free consultation and project estimate within 48 hours.
        </p>
      </section>

      {/* Split Layout */}
      <section className="max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a href={c.href} className="enterprise-card rounded-2xl p-6 flex items-start gap-4 hover:border-[var(--color-primary)] transition-colors block">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,87,255,0.12)' }}>
                    <c.icon className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>{c.label}</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{c.value}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 border" style={{ borderColor: 'var(--color-border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.084813474439!2d-74.01369518459614!3d40.71277047933024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x7849fcded47d86a2!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Office Location"
              />
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}>
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="enterprise-card rounded-3xl p-8 lg:p-10 space-y-6">
              <h2 className="text-2xl font-bold mb-2 font-heading" style={{ color: 'var(--color-text)' }}>Request a Consultation</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Work Email *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+1 (628) 432-7890" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Company Inc." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Service Required *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="form-input" style={{ appearance: 'revert' }}>
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="cloud">Cloud Architecture</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="form-input" style={{ appearance: 'revert' }}>
                    <option value="">Select budget</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k+">$250K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-text-secondary)' }}>Project Description *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-textarea" placeholder="Tell us about your project, goals, and timeline..." />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-500 text-sm bg-rose-500/10 p-3 rounded-lg">
                  <FaCheck className="shrink-0 rotate-45" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button 
                disabled={status === 'loading'} 
                type="submit" 
                className="glow-button w-full justify-center text-base py-4 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <><FaSpinner className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Request <FaArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <OrbisNftShowcase />
    </div>
  )
}
