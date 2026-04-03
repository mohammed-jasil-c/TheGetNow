'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react'

const navItems = [
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'Cloud Computing', href: '/services/cloud-computing' },
      { label: 'UI UX Design', href: '/services/ui-ux-design' },
      { label: 'Blockchain Development', href: '/services/blockchain-development' },
      { label: 'View All Services →', href: '/services' },
    ]
  },
  {
    label: 'Industries', href: '/industries',
    children: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'View All Industries →', href: '/industries' },
    ]
  },
  {
    label: 'Solutions', href: '/solutions',
    children: [
      { label: 'Enterprise Resource Planning', href: '/solutions/enterprise-resource-planning' },
      { label: 'CRM', href: '/solutions/customer-relationship-management' },
      { label: 'Business Automation', href: '/solutions/business-process-automation' },
      { label: 'View All Solutions →', href: '/solutions' },
    ]
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false); setActiveDropdown(null) }, [pathname])

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
              <span className="text-white font-black text-lg">G</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              TheGetNow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    pathname.startsWith(item.href)
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 transition-transform" style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : '' }} />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-[#12121a] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/40 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-violet-400" />
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex h-10 items-center px-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300"
              id="nav-cta"
            >
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white"
              id="nav-mobile-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/[0.06] animate-in slide-in-from-top-4 duration-300">
          <div className="max-w-lg mx-auto px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname.startsWith(item.href)
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
