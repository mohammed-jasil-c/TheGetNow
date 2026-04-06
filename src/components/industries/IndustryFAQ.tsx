'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { Industry } from '@/data/industries'

gsap.registerPlugin(ScrollTrigger)

function FAQItem({ q, a, accentColor, index }: { q: string; a: string; accentColor: string; index: number }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: open ? 'auto' : 0,
        opacity: open ? 1 : 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: open ? 180 : 0,
        duration: 0.3,
        ease: 'power2.inOut',
      })
    }
  }, [open])

  return (
    <div
      className="ind-faq-item border-b transition-colors"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <div className="flex items-center gap-4 flex-1">
          <span className="text-xs font-bold w-6" style={{ color: accentColor }}>
            0{index + 1}
          </span>
          <h4
            className="text-base md:text-lg font-semibold transition-colors duration-300 group-hover:opacity-80"
            style={{ color: 'var(--color-text)' }}
          >
            {q}
          </h4>
        </div>
        <div ref={iconRef} className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: open ? `${accentColor}15` : 'transparent' }}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-3.5 h-3.5 transition-colors"
            style={{ color: open ? accentColor : 'var(--color-muted)' }}
          />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="pl-10 pb-6 text-sm leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function IndustryFAQ({ industry }: { industry: Industry }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ind-faq-header > *', {
        y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-faq-header', start: 'top 85%' },
      })
      gsap.from('.ind-faq-item', {
        y: 20, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.ind-faq-list', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="ind-faq-header text-center mb-16">
          <span className="section-label mb-4 block" style={{ color: industry.accentColor }}>FAQ</span>
          <h2 className="section-title mb-6">Frequently asked questions</h2>
          <p className="section-subtitle mx-auto">
            Common questions about our {industry.title.toLowerCase()} solutions.
          </p>
        </div>

        <div className="ind-faq-list">
          {industry.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.question}
              a={faq.answer}
              accentColor={industry.accentColor}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
