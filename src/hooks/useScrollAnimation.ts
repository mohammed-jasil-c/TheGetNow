'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationOptions {
  y?: number
  x?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  trigger?: string
  start?: string
  scrub?: boolean | number
  once?: boolean
  ease?: string
}

export function useScrollAnimation(
  selector: string,
  options: ScrollAnimationOptions = {}
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
      scrub = false,
      once = true,
      ease = 'power3.out',
    } = options

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll(selector)
      if (elements.length === 0) return

      gsap.from(elements, {
        y,
        x,
        opacity,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          scrub,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, options])

  return containerRef
}

export function useParallax(
  selector: string,
  yAmount: number = -40
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll(selector)
      elements.forEach(el => {
        gsap.to(el, {
          y: yAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, yAmount])

  return containerRef
}
