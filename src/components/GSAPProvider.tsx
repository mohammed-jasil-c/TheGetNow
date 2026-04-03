'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scroll setup
    const sections = document.querySelectorAll('[data-gsap-fade]')
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    })

    const counters = document.querySelectorAll('[data-gsap-counter]')
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-gsap-counter') || '0', 10)
      gsap.fromTo(counter, { innerText: '0' }, {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      })
    })

    const slides = document.querySelectorAll('[data-gsap-slide-left]')
    slides.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    })

    const slidesRight = document.querySelectorAll('[data-gsap-slide-right]')
    slidesRight.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    })

    const scales = document.querySelectorAll('[data-gsap-scale]')
    scales.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return <>{children}</>
}
