'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Send, MapPin, Mail, Phone } from 'lucide-react'

const serviceLinks = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI & Machine Learning', href: '/services/ai-development' },
  { label: 'Blockchain & Web3', href: '/services/blockchain-development' },
  { label: 'Cloud Architecture', href: '/services/cloud-computing' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'IoT Solutions', href: '/services/iot-solutions' },
  { label: 'AR/VR Development', href: '/services/ar-vr-development' },
  { label: 'DevOps & CI/CD', href: '/services/devops-services' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Pricing', href: '/pricing' },
]

const industryLinks = [
  { label: 'FinTech & Banking', href: '/industries/finance' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce', href: '/industries/retail' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Automotive', href: '/industries/automotive' },
  { label: 'Entertainment', href: '/industries/entertainment' },
]

const socialIcons = [
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: '#' },
  { name: 'Twitter', icon: 'fa-brands fa-x-twitter', href: '#' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram', href: '#' },
  { name: 'GitHub', icon: 'fa-brands fa-github', href: '#' },
  { name: 'Dribbble', icon: 'fa-brands fa-dribbble', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="mt-auto" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)' }}>

      {/* ─── Newsletter Bar ────────────────────────────────────────────── */}
      <div className="py-12 border-b" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-heading)' }}>
              Stay ahead of the curve
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Get engineering insights, industry trends, and company updates delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full h-11 pr-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all"
                style={{ background: 'var(--bg-input)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', paddingLeft: '2.5rem' }}
              />
            </div>
            <button type="submit" className="glow-button px-6 py-2.5 text-sm shrink-0">
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* ─── Main Footer Grid ──────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5 inline-flex">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-hero)' }}>
                <span className="text-white font-black text-lg">G</span>
              </div>
              <span className="text-lg font-black" style={{ color: 'var(--text-heading)' }}>
                TheGet<span className="gradient-text">Now</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              We engineer world-class digital products for startups and Fortune 500 enterprises — from AI-powered platforms to blockchain protocols and cloud infrastructure.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@thegetnow.com" className="flex items-center gap-2.5 text-sm hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                hello@thegetnow.com
              </a>
              <a href="tel:+16284327890" className="flex items-center gap-2.5 text-sm hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                +1 (628) 432-7890
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                <span>One World Trade Center, Floor 85,<br />New York, NY 10007</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-110"
                  style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-heading)' }}>Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--text-secondary)' }}>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-heading)' }}>Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--text-secondary)' }}>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Industries */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-heading)' }}>Industries</h3>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--text-secondary)' }}>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ───────────────────────────────────────────────── */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} TheGetNow. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Made with <span className="text-red-500">❤️</span> in India
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--text-muted)' }}>
            <Link href="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
