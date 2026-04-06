'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TextRevealProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  stagger?: number
  duration?: number
  delay?: number
  splitBy?: 'chars' | 'words'
}

export default function TextReveal({
  text,
  className = '',
  tag: Tag = 'h1',
  stagger = 0.04,
  duration = 0.8,
  delay = 0.2,
  splitBy = 'words',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const el = containerRef.current
    const items = splitBy === 'chars' ? text.split('') : text.split(' ')
    
    el.innerHTML = items
      .map(
        (item) =>
          `<span style="display:inline-block;overflow:hidden"><span class="reveal-item" style="display:inline-block">${
            splitBy === 'words' ? item + '&nbsp;' : item
          }</span></span>`
      )
      .join('')

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.reveal-item'), {
        y: 60,
        duration,
        stagger,
        delay,
        ease: 'power4.out',
      })
    })

    return () => ctx.revert()
  }, [text, stagger, duration, delay, splitBy])

  return <Tag ref={containerRef as any} className={className} />
}
