'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FaArrowRight, FaArrowUp, FaEnvelope, FaPhone, FaLocationDot,
  FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub, FaDribbble
} from 'react-icons/fa6'

const serviceLinks = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI & Machine Learning', href: '/services/ai-development' },
  { label: 'Blockchain & Web3', href: '/services/blockchain-development' },
  { label: 'Cloud Architecture', href: '/services/cloud-computing' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'DevOps & CI/CD', href: '/services/devops-services' },
  { label: 'AR/VR Development', href: '/services/ar-vr-development' },
  { label: 'IoT Solutions', href: '/services/iot-solutions' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const industryLinks = [
  { label: 'FinTech & Banking', href: '/industries/finance' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce', href: '/industries/retail' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Real Estate', href: '/industries/real-estate' },
]

const socials = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { name: 'Twitter', icon: FaXTwitter, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'GitHub', icon: FaGithub, href: '#' },
  { name: 'Dribbble', icon: FaDribbble, href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="mt-auto" role="contentinfo" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>

        {/* Newsletter Bar */}
        <div className="py-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1 font-heading" style={{ color: 'var(--color-text)' }}>
                Stay ahead of the curve
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Engineering insights, industry trends, and company updates — weekly.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-muted)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="form-input pl-10"
                />
              </div>
              <button type="submit" className="glow-button px-6 py-2.5 text-sm shrink-0">
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2.5 mb-5 inline-flex">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                  <span className="text-white font-black text-lg">G</span>
                </div>
                <span className="text-lg font-black" style={{ color: 'var(--color-text)' }}>
                  TheGet<span className="gradient-text">Now</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
                We engineer world-class digital products for startups and Fortune 500 enterprises — from AI platforms to blockchain protocols and cloud infrastructure.
              </p>

              <div className="space-y-3 mb-6">
                <a href="mailto:hello@thegetnow.com" className="flex items-center gap-2.5 text-sm hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                  <FaEnvelope className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  hello@thegetnow.com
                </a>
                <a href="tel:+16284327890" className="flex items-center gap-2.5 text-sm hover:text-[var(--color-primary)] transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                  <FaPhone className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  +1 (628) 432-7890
                </a>
                <div className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <FaLocationDot className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span>One World Trade Center, Floor 85,<br />New York, NY 10007</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all hover:scale-110"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-muted)' }}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--color-text)' }}>Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--color-text-secondary)' }}>
                      <FaArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--color-text)' }}>Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--color-text-secondary)' }}>
                      <FaArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--color-text)' }}>Industries</h3>
              <ul className="space-y-3">
                {industryLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors hover:text-[var(--color-primary)]" style={{ color: 'var(--color-text-secondary)' }}>
                      <FaArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              © {new Date().getFullYear()} TheGetNow. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--color-muted)' }}>
              <Link href="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
          style={{
            background: 'var(--gradient-primary)',
            color: '#fff',
            animation: 'scale-in 0.3s ease',
          }}
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  )
}
