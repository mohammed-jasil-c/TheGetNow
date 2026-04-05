'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useCountUp(target: number, duration: number = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    if (!ref.current || triggered.current) return

    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
        onStart: () => {
          triggered.current = true
        },
        onUpdate: () => {
          setCount(Math.floor(obj.val))
        },
      })
    })

    return () => ctx.revert()
  }, [target, duration])

  return { count, ref }
}
