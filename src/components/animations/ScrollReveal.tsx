'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  x?: number
  once?: boolean
  start?: string
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
  once = true,
  start = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, 
        {
          y,
          x,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once
              ? 'play none none none'
              : 'play reverse play reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [y, x, duration, delay, once, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
