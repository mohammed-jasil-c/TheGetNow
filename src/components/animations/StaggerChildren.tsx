'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  stagger?: number
  duration?: number
  y?: number
  start?: string
  childSelector?: string
}

export default function StaggerChildren({
  children,
  className = '',
  stagger = 0.1,
  duration = 0.6,
  y = 30,
  start = 'top 85%',
  childSelector = ':scope > *',
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const children = ref.current!.querySelectorAll(childSelector)
      gsap.fromTo(children, 
        {
          y,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [stagger, duration, y, start, childSelector])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
