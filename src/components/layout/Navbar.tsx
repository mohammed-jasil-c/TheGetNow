'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'
import { gsap } from 'gsap'
import {
  FaBars, FaXmark, FaChevronDown, FaArrowRight,
  FaCode, FaMobile, FaBrain, FaCubes, FaCloud, FaPaintbrush,
  FaRocket, FaGears, FaShieldHalved, FaMicrochip, FaVrCardboard, FaArrowsRotate,
  FaBuildingColumns, FaHeartPulse, FaCartShopping, FaGraduationCap, FaTruck, FaBuilding,
  FaSun, FaMoon, FaCertificate, FaPhone
} from 'react-icons/fa6'

const serviceLinks = [
  {
    title: 'Core Engineering',
    icon: <FaCode className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />,
    links: [
      { label: 'Custom Web Development', href: '/services/web-development', sub: 'React & Node.js stacks' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development', sub: 'Flutter, Swift, Kotlin', badge: 'Popular' },
      { label: 'SaaS Platform Development', href: '/services/saas-development', sub: 'Multi-tenant cloud' },
    ],
  },
  {
    title: 'Emerging Tech',
    icon: <FaBrain className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />,
    links: [
      { label: 'AI & Machine Learning', href: '/services/ai-development', sub: 'LLMs, CV & NLP', badge: 'Trending' },
      { label: 'Blockchain & Web3', href: '/services/blockchain-development', sub: 'Smart Contracts & DApps' },
      { label: 'IoT & Edge Computing', href: '/services/iot-solutions', sub: 'Connected ecosystems' },
    ],
  },
  {
    title: 'Digital Experience',
    icon: <FaPaintbrush className="w-5 h-5" style={{ color: '#10B981' }} />,
    links: [
      { label: 'UI/UX Design', href: '/services/ui-ux-design', sub: 'Design systems & prototypes' },
      { label: 'AR/VR Development', href: '/services/ar-vr-development', sub: 'Immersive computing' },
      { label: 'Digital Transformation', href: '/services/digital-transformation', sub: 'Enterprise modernization' },
    ],
  },
  {
    title: 'Cloud & Infra',
    icon: <FaCloud className="w-5 h-5" style={{ color: '#0EA5E9' }} />,
    links: [
      { label: 'Cloud Architecture', href: '/services/cloud-computing', sub: 'AWS, Azure, GCP' },
      { label: 'DevOps & CI/CD', href: '/services/devops-services', sub: 'Automated pipelines' },
      { label: 'Cybersecurity', href: '/services/cybersecurity', sub: 'Zero-trust security' },
    ],
  },
]

const industryLinks = [
  {
    title: 'Finance & Commerce',
    icon: <FaBuildingColumns className="w-5 h-5" style={{ color: '#10B981' }} />,
    links: [
      { label: 'FinTech & Banking', href: '/industries/finance' },
      { label: 'E-Commerce & Retail', href: '/industries/retail' },
      { label: 'Insurance', href: '/industries/insurance' },
    ],
  },
  {
    title: 'Health & Education',
    icon: <FaHeartPulse className="w-5 h-5" style={{ color: '#06B6D4' }} />,
    links: [
      { label: 'Healthcare & MedTech', href: '/industries/healthcare' },
      { label: 'EdTech & eLearning', href: '/industries/education' },
      { label: 'Fitness & Wellness', href: '/industries/fitness' },
    ],
  },
  {
    title: 'Logistics & Property',
    icon: <FaTruck className="w-5 h-5" style={{ color: '#F59E0B' }} />,
    links: [
      { label: 'Logistics & Supply Chain', href: '/industries/logistics' },
      { label: 'Real Estate Tech', href: '/industries/real-estate' },
      { label: 'Automotive & Fleet', href: '/industries/automotive' },
    ],
  },
]

const navItems = [
  { label: 'Services', href: '/services', megaMenu: serviceLinks },
  { label: 'Industries', href: '/industries', megaMenu: industryLinks },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileAccordion(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // GSAP nav entrance
  useEffect(() => {
    if (!navRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.1,
      })
    })
    return () => ctx.revert()
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <nav
        ref={navRef}
        id="main-navbar"
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          background: scrolled ? 'var(--color-nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group z-50" id="nav-logo">
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="text-white font-black text-xl tracking-tighter">G</span>
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>
              <span className="text-xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
                TheGet<span className="gradient-text">Now</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 h-full">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-full text-[14px] font-semibold transition-all flex items-center gap-1 relative"
                    style={{
                      color: isActive(item.href) || activeDropdown === item.label
                        ? 'var(--color-primary)'
                        : 'var(--color-text-secondary)',
                    }}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <FaChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                    {isActive(item.href) && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                        style={{ background: 'var(--color-primary)' }}
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 backdrop-blur-3xl border rounded-2xl overflow-hidden"
                      style={{
                        background: 'var(--color-overlay)',
                        borderColor: 'var(--color-border)',
                        boxShadow: 'var(--shadow-xl)',
                        animation: 'slide-up 0.2s ease',
                        width: item.megaMenu.length > 3 ? '900px' : '700px',
                      }}
                    >
                      <div className={`p-8 grid gap-8`} style={{ gridTemplateColumns: `repeat(${Math.min(item.megaMenu.length, 4)}, 1fr)` }}>
                        {item.megaMenu.map((col, idx) => (
                          <div key={idx}>
                            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                              <div className="p-1.5 rounded-lg" style={{ background: 'var(--color-surface-alt)' }}>
                                {col.icon}
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>{col.title}</span>
                            </div>
                            <ul className="space-y-3">
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <Link href={link.href} className="group block">
                                    <div className="flex items-center gap-2 mb-0.5">
                                      <span className="font-semibold text-sm group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--color-text)' }}>
                                        {link.label}
                                      </span>
                                      {'badge' in link && (link as any).badge && (
                                        <span className="pill-badge text-[9px]">{(link as any).badge}</span>
                                      )}
                                    </div>
                                    {'sub' in link && (
                                      <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{(link as any).sub}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="px-8 py-3 border-t flex items-center justify-between" style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}>
                        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
                          <FaCertificate className="w-3.5 h-3.5" />
                          ISO 27001 & SOC2 Certified
                        </div>
                        <Link href={item.href} className="text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
                          View All {item.label} <FaArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2.5 z-50">
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 h-10 px-6 rounded-full font-bold text-sm text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
              >
                Get a Quote
              </Link>

              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                  color: theme === 'dark' ? '#FFD700' : 'var(--color-primary)',
                }}
              >
                {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors"
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 overflow-y-auto pt-[72px]"
          style={{ background: 'var(--color-bg)', animation: 'slide-up 0.3s ease' }}
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={item.href}
                    className="text-2xl font-black transition-colors"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-playfair)' }}
                    onClick={() => !item.megaMenu && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--color-card)', color: 'var(--color-text-secondary)' }}
                      aria-label={`Expand ${item.label}`}
                    >
                      <FaChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileAccordion === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.megaMenu && mobileAccordion === item.label && (
                  <div className="pb-4 pl-4 space-y-5" style={{ borderLeft: '2px solid var(--color-primary)', marginLeft: '4px', animation: 'slide-up 0.2s ease' }}>
                    {item.megaMenu.map((col, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                          {col.icon} {col.title}
                        </h4>
                        <div className="flex flex-col gap-2.5 pl-7">
                          {col.links.map(link => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-sm font-medium transition-colors"
                              style={{ color: 'var(--color-muted)' }}
                              onClick={() => setIsOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link href="/contact" className="glow-button justify-center text-base py-4" onClick={() => setIsOpen(false)}>
                <FaRocket className="w-4 h-4" /> Start Your Project
              </Link>
              <a href="tel:+16284327890" className="outline-button justify-center text-base py-4">
                <FaPhone className="w-4 h-4" /> +1 (628) 432-7890
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  )
}
