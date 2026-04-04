'use client'

import type { FullPage } from '@/lib/types'
import { useRef, useLayoutEffect, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

// ── 3D Background: Cosmic Nebula ──
function Nebula({ color }: { color: string }) {
  const mesh = useRef<THREE.Points>(null!)
  const particleCount = 2000
  
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const sc = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
      sc[i] = Math.random() * 2
    }
    return [pos, sc]
  }, [])

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-scale" args={[scales, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color || "#ffffff"} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function CinematicLayout({ page }: { page: FullPage }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax hero text
      gsap.to('.hero-text', {
        y: 150, opacity: 0,
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true }
      })

      // Reveal features staggered
      gsap.from('.feature-card', {
        y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' }
      })

      // Expand line in process/info block
      gsap.from('.expand-line', {
        scaleX: 0, transformOrigin: 'left', duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: '.expand-line', start: 'top 85%' }
      })
    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  const baseColor = page.accent_color || '#3b82f6'

  return (
    <div ref={wrapperRef} className="min-h-screen bg-black text-white selection:bg-white/20 relative overflow-hidden">
      
      {/* ── 1. Hero with Live 3D ── */}
      <section className="hero-section relative h-screen min-h-[800px] flex items-center justify-center pt-20 pb-32">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <fog attach="fog" args={['#000', 5, 25]} />
            <ambientLight intensity={0.5} />
            <Nebula color={baseColor} />
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>
        
        <div className="hero-text relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-20 text-center flex flex-col items-center">
          <Link href={`/${page.category}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Return to {page.category}
          </Link>
          
          <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs tracking-widest font-bold uppercase mb-8 shadow-2xl"
               style={{ boxShadow: `0 0 20px ${baseColor}40` }}>
            {page.subtitle || 'Enterprise Ready'}
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none" 
              style={{ textShadow: `0 20px 60px ${baseColor}80` }}>
            {page.title}
          </h1>
          
          <p className="text-xl md:text-3xl text-zinc-300 max-w-4xl leading-relaxed mb-16 font-light">
            {page.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-zinc-200 transition-colors shadow-2xl shadow-white/10"
                    style={{ border: `2px solid ${baseColor}` }}>
              Deploy {page.title}
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Massive Stat Bar ── */}
      {page.page_stats && page.page_stats.length > 0 ? (
        <section className="py-24 border-y border-white/10 bg-white/5 backdrop-blur-xl relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {page.page_stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter" style={{ color: baseColor }}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Fallback Stats if Empty */
        <section className="py-24 border-y border-white/10 bg-white/5 backdrop-blur-xl relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {['100x', '24/7', '99.9%', 'Scale'].map((val, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="text-6xl md:text-8xl font-black mb-4 tracking-tighter" style={{ color: baseColor }}>{val}</div>
                <div className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Performance Target</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 3. High-Density Features Grid ── */}
      <section className="py-32 relative z-10 bg-[#020202]">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white max-w-2xl leading-tight">
              Architected for <span style={{ color: baseColor }}>scale.</span>
            </h2>
            <p className="text-2xl text-zinc-500 max-w-md font-light">
              Everything you need to integrate and deploy {page.title} infrastructure rapidly.
            </p>
          </div>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(page.page_features?.length > 0 ? page.page_features : [
              { id: 1, title: 'High Availability', description: 'Redundant architecture deployed across multiple availability zones.' },
              { id: 2, title: 'Zero-Trust Security', description: 'End-to-end encryption with advanced IAM policies.' },
              { id: 3, title: 'Real-time Telemetry', description: 'Advanced metrics and traces out of the box.' }
            ]).map((feature, i) => (
              <div key={feature.id} className="feature-card glass-card p-10 md:p-12 rounded-[2.5rem] group hover:bg-white/5 transition-all duration-500 border border-white/10 hover:border-white/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity" style={{ color: baseColor }}>
                  <span className="text-8xl font-black">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-white/5 border border-white/10 shadow-2xl" style={{ color: baseColor }}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Deep Dive / Documentation Hook ── */}
      <section className="py-32 relative z-10 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="aspect-square rounded-full border border-white/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.2)]" style={{ background: `linear-gradient(135deg, ${baseColor}, #000)` }}>
                <span className="text-white font-black text-6xl tracking-tighter">API</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="expand-line h-1 w-24 mb-10" style={{ backgroundColor: baseColor }} />
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Developer <br/>Ecosystem.</h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Integrate {page.title} directly into your existing stack with our heavily documented REST and GraphQL endpoints. Built by engineers, for engineers.
            </p>
            <ul className="flex flex-col gap-6 mb-12">
              {['Comprehensive SDKs for Node, Python, and Go', 'Postman collections included', '99.99% REST API Uptime SLA'].map((t, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle2 style={{ color: baseColor }} /> {t}
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-3 text-lg font-bold hover:gap-5 transition-all text-white border-b border-white pb-2 hover:border-zinc-500 hover:text-zinc-300">
              Read Developer Docs <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. FAQs ── */}
      {page.page_faqs?.length > 0 && (
        <section className="py-32 bg-[#020202] relative z-10 border-t border-white/5">
          <div className="max-w-[900px] mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">Frequently Asked</h2>
            <div className="space-y-6">
              {page.page_faqs.map((faq) => (
                <div key={faq.id} className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-white">{faq.question}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Bottom Edge CTA ── */}
      <div className="py-40 text-center relative z-10" style={{ background: `linear-gradient(to top, ${baseColor}20, transparent)` }}>
        <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-10">Start building.</h2>
        <button className="px-12 py-6 rounded-full bg-white text-black font-black text-2xl hover:scale-105 transition-transform shadow-[0_0_60px_rgba(255,255,255,0.3)]">
          Contact Sales
        </button>
      </div>

    </div>
  )
}

