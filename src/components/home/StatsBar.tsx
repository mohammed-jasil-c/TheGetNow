'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: '+', label: 'Projects', icon: '📊' },
  { value: 250, suffix: '+', label: 'Niche Experts', icon: '👨‍💻' },
  { value: 50, suffix: '+', label: 'Countries Reached', icon: '🌍' },
  { value: 35, suffix: '+', label: 'Tools & Languages', icon: '🛠️' },
]

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsBar() {
  return (
    <section className="py-6" style={{ background: 'var(--bg-page)' }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="rounded-2xl py-8 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ background: 'var(--gradient-main)' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-xs sm:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
