'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight, Monitor, Smartphone, Cpu, Cloud, PaintBucket, Blocks, Briefcase, Code2, Globe2, Brain, Fingerprint, Sun, Moon, Phone, Sparkles } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navItems = [
  {
    label: 'Services',
    href: '/services',
    megaMenu: [
      {
        title: 'Core Engineering',
        icon: <Code2 className="w-5 h-5 text-[#0057FF]" />,
        links: [
          { label: 'Custom Web Development', href: '/services/web-development', sub: 'High-performance React & Node.js stacks' },
          { label: 'Mobile App Development', href: '/services/mobile-app-development', sub: 'Native & Cross-platform (Flutter/Swift)' },
          { label: 'SaaS Platform Development', href: '/services/saas-development', sub: 'Multi-tenant cloud architectures', badge: 'Popular' },
        ]
      },
      {
        title: 'Emerging Tech',
        icon: <Cpu className="w-5 h-5 text-[#7B2FFF]" />,
        links: [
          { label: 'AI & Machine Learning', href: '/services/ai-development', sub: 'LLMs, Computer Vision & NLP', badge: 'Trending' },
          { label: 'Blockchain Solutions', href: '/services/blockchain-development', sub: 'Smart Contracts & Web3 DApps' },
          { label: 'IoT & Edge Computing', href: '/services/iot-solutions', sub: 'Connected device ecosystems' },
        ]
      },
      {
        title: 'Digital Experience',
        icon: <PaintBucket className="w-5 h-5 text-emerald-400" />,
        links: [
          { label: 'UI/UX Interactive Design', href: '/services/ui-ux-design', sub: 'Pixel-perfect prototypes & systems' },
          { label: 'AR / VR Development', href: '/services/ar-vr-development', sub: 'Immersive spatial computing' },
          { label: 'Digital Transformation', href: '/services/digital-transformation', sub: 'Enterprise modernization' },
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        icon: <Cloud className="w-5 h-5 text-sky-400" />,
        links: [
          { label: 'Cloud Architecture', href: '/services/cloud-computing', sub: 'AWS, Azure, Google Cloud' },
          { label: 'DevOps & CI/CD', href: '/services/devops-services', sub: 'Automated release pipelines' },
          { label: 'Cybersecurity', href: '/services/cybersecurity', sub: 'Zero-trust architecture' },
        ]
      }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: [
      {
        title: 'Finance & Banking',
        icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
        links: [
          { label: 'FinTech Platforms', href: '/industries/finance' },
          { label: 'Insurance Tech', href: '/industries/insurance' },
          { label: 'Wealth Management', href: '/industries/wealth' },
        ]
      },
      {
        title: 'Healthcare',
        icon: <Blocks className="w-5 h-5 text-teal-400" />,
        links: [
          { label: 'Telemedicine Systems', href: '/industries/healthcare', badge: 'Popular' },
          { label: 'Pharmacy Management', href: '/industries/pharmacy' },
          { label: 'Fitness & Wellness', href: '/industries/fitness' },
        ]
      },
      {
        title: 'Retail & Commerce',
        icon: <Globe2 className="w-5 h-5 text-amber-400" />,
        links: [
          { label: 'E-Commerce Platforms', href: '/industries/retail' },
          { label: 'Logistics & Supply Chain', href: '/industries/logistics' },
          { label: 'Food Delivery', href: '/industries/food-delivery' },
        ]
      },
      {
        title: 'Emerging Markets',
        icon: <Brain className="w-5 h-5 text-[#7B2FFF]" />,
        links: [
          { label: 'EdTech & eLearning', href: '/industries/education' },
          { label: 'Real Estate Tech', href: '/industries/real-estate' },
          { label: 'Automotive & Fleet', href: '/industries/automotive' },
        ]
      }
    ]
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setTopBarVisible(window.scrollY <= 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileAccordion(null)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ─── Top Bar ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] h-9 transition-all duration-500 ${
          topBarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between text-white">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Rated #1 App Development Company — Clutch 2024</span>
            <span className="sm:hidden">Top Agency — Clutch 2024</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="tel:+16284327890" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              +1 (628) 432-7890
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <a href="https://wa.me/919463407140" target="_blank" rel="noopener" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <i className="fa-brands fa-whatsapp text-sm" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Navbar ──────────────────────────────────────────────────── */}
      <nav
        id="main-navbar"
        className={`fixed left-0 right-0 z-50 transition-all duration-500 font-sans ${
          topBarVisible ? 'top-9' : 'top-0'
        } ${
          scrolled
            ? 'bg-[var(--bg-nav)] backdrop-blur-2xl border-b shadow-lg'
            : 'bg-transparent'
        }`}
        style={{
          borderColor: scrolled ? 'var(--border-subtle)' : 'transparent',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group z-50" id="nav-logo">
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${scrolled ? 'scale-95' : ''}`} style={{ background: 'var(--gradient-hero)' }}>
                <span className="text-white font-black text-xl tracking-tighter">G</span>
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>
              <span className="text-xl font-black tracking-tight" style={{ color: 'var(--text-heading)' }}>
                TheGet<span className="gradient-text">Now</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 h-full">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="h-full flex items-center"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all flex items-center gap-1 ${
                      activeDropdown === item.label || pathname.startsWith(item.href)
                        ? 'text-[var(--color-primary)]'
                        : 'hover:text-[var(--text-heading)]'
                    }`}
                    style={{
                      color: activeDropdown === item.label || pathname.startsWith(item.href) ? 'var(--color-primary)' : 'var(--text-secondary)',
                    }}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.megaMenu && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 w-full backdrop-blur-3xl border-b overflow-hidden"
                      style={{
                        background: 'var(--bg-overlay)',
                        borderColor: 'var(--border-subtle)',
                        animation: 'slide-up 0.2s ease',
                      }}
                    >
                      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-4 gap-10 relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(0, 87, 255, 0.06)' }} />

                        {item.megaMenu.map((col, idx) => (
                          <div key={idx} className="relative z-10">
                            <div className="flex items-center gap-2.5 mb-5 pb-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                              <div className="p-2 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                                {col.icon}
                              </div>
                              <h4 className="text-sm font-bold" style={{ color: 'var(--text-heading)' }}>{col.title}</h4>
                            </div>
                            <ul className="space-y-4">
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <Link href={link.href} className="group block">
                                    <div className="flex items-center gap-2 mb-0.5">
                                      <span className="font-semibold text-sm group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-primary)' }}>
                                        {link.label}
                                      </span>
                                      {(link as any).badge && (
                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(0, 87, 255, 0.15)', color: '#5B9AFF' }}>
                                          {(link as any).badge}
                                        </span>
                                      )}
                                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" style={{ color: 'var(--color-primary)' }} />
                                    </div>
                                    {(link as any).sub && (
                                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{(link as any).sub}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA bar */}
                      <div className="py-4 border-t" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                          <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                            <Fingerprint className="w-4 h-4" />
                            ISO 27001 & SOC2 Certified Development Agency
                          </div>
                          <Link href={item.href} className="text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
                            View All {item.label} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: CTA + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-2.5 z-50">
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 h-10 px-6 rounded-full font-bold text-sm text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: 'var(--gradient-hero)', boxShadow: 'var(--shadow-glow)' }}
              >
                Get a Free Quote
              </Link>

              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: theme === 'dark' ? '#FFD700' : 'var(--color-primary)',
                }}
              >
                {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-heading)',
                }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Drawer ────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
          style={{
            top: topBarVisible ? 'calc(36px + 72px)' : '72px',
            background: 'var(--bg-page)',
            animation: 'slide-up 0.3s ease',
          }}
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={item.href}
                    className="text-2xl font-black transition-colors"
                    style={{ color: 'var(--text-heading)' }}
                    onClick={() => !item.megaMenu && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === item.label ? null : item.label)}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Accordion Content */}
                {item.megaMenu && mobileAccordion === item.label && (
                  <div className="pb-4 pl-4 space-y-6" style={{ borderLeft: '2px solid var(--color-primary)', marginLeft: '4px', animation: 'slide-up 0.2s ease' }}>
                    {item.megaMenu.map((col, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                          {col.icon} {col.title}
                        </h4>
                        <div className="flex flex-col gap-3 pl-7">
                          {col.links.map(link => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
                              style={{ color: 'var(--text-muted)' }}
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

            {/* Mobile CTA */}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/contact"
                className="glow-button justify-center text-base py-4"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-rocket" /> Start Your Project
              </Link>
              <a
                href="https://wa.me/919463407140"
                target="_blank"
                rel="noopener"
                className="outline-button justify-center text-base py-4"
              >
                <i className="fa-brands fa-whatsapp text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to push content below fixed nav */}
      <div style={{ height: topBarVisible ? 'calc(36px + 72px)' : '72px', transition: 'height 0.5s ease' }} />
    </>
  )
}
