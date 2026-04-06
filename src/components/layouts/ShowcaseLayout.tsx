'use client'

import type { FullPage } from '@/lib/types'
import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Star, ExternalLink, ChevronRight, LayoutGrid } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

// ── 3D Shape that matches the DB Accent Color ──
function MorphingJewel({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[2.5, 0]}>
        <MeshDistortMaterial
          color={color || "#ffffff"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true}
        />
      </Icosahedron>
    </Float>
  )
}

export default function ShowcaseLayout({ page }: { page: FullPage }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const baseColor = page.accent_color || '#10b981' // emerald fallback

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin horizontal scroll section
      const hzWrapper = document.querySelector('.hz-wrapper') as HTMLElement
      if (hzWrapper) {
        const scrollWidth = hzWrapper.scrollWidth - window.innerWidth + 100
        gsap.to(hzWrapper, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: '.hz-section',
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${scrollWidth}`
          }
        })
      }
      
      // Floating content stagger
      gsap.from('.sc-content > *', {
        y: 40, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sc-content', start: 'top 80%' }
      })

    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} className="min-h-screen bg-[#020202] text-zinc-100 overflow-x-hidden">
      <nav className="fixed top-20 left-0 right-0 z-50 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link href={`/${page.category}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase" style={{ color: baseColor }}>
            {page.category}
          </div>
        </div>
      </nav>

      {/* ── 1. Hero with 3D Morphing Jewel ── */}
      <section className="pt-40 pb-20 overflow-hidden relative min-h-screen flex items-center">
        {/* Massive background glow */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] blur-[150px] rounded-full pointer-events-none opacity-20" 
             style={{ background: `linear-gradient(to bottom left, ${baseColor}, transparent)` }} />
        
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* 3D Visual Side */}
            <div className="relative group perspective-[1000px] h-[500px]">
              <div className="absolute inset-0 bg-[#0a0a0f] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-[url('/grid.svg')] bg-center">
                <Canvas camera={{ position: [0, 0, 8] }} gl={{ alpha: true, antialias: true }}>
                  <ambientLight intensity={1} />
                  <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                  <pointLight position={[-5, -5, -5]} intensity={1} color={baseColor} />
                  <MorphingJewel color={baseColor} />
                </Canvas>
              </div>
            </div>

            {/* Content Side */}
            <div className="sc-content">
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-white">
                {page.title}
              </h1>
              {page.subtitle && (
                <h2 className="text-2xl text-zinc-400 font-light mb-8 pb-8 border-b border-white/10">
                  {page.subtitle}
                </h2>
              )}
              
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-12 max-w-xl">
                {page.description}
              </p>

              {(page.page_stats?.length ?? 0) > 0 ? (
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {page.page_stats.slice(0, 2).map((stat) => (
                    <div key={stat.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                      <div className="text-4xl font-bold mb-2" style={{ color: baseColor }}>
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="text-4xl font-bold mb-2" style={{ color: baseColor }}>100%</div>
                    <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Reliability</div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="text-4xl font-bold mb-2" style={{ color: baseColor }}>24/7</div>
                    <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Support</div>
                  </div>
                </div>
              )}

              <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 group">
                Begin Deployment <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Horizontal Scroll Hijack Features ── */}
      <section className="hz-section w-full h-screen bg-[#050505] text-white overflow-hidden relative font-sans border-y border-white/5">
        <div className="absolute top-24 left-6 md:left-24 z-10 max-w-xl pr-6">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Key <span style={{ color: baseColor }}>Capabilities.</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium max-w-md">
            Scroll down to explore the core features driving {page.title}.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-24">
          <div className="hz-wrapper flex gap-8 md:gap-16 items-center w-[max-content]">
            <div className="w-[10vw] md:w-[20vw] shrink-0" />

            {(page.page_features?.length > 0 ? page.page_features : [
              { id: 1, title: 'Modular Design', description: 'Easily plug and play components matching your stack.' },
              { id: 2, title: 'Enterprise Auth', description: 'SSO, SAML, and OAuth 2.0 baked into the core layer.' },
              { id: 3, title: 'Global Edge', description: 'Deploy serverless logic globally with sub-50ms latency.' },
              { id: 4, title: 'Real-time Sync', description: 'WebSockets and WebRTC for immediate data parity.' }
            ]).map((feat, i) => (
              <div key={feat.id} className="shrink-0 group overflow-hidden bg-[#0f0f13] border border-white/10 rounded-[2.5rem] w-[350px] md:w-[500px] aspect-[4/5] md:aspect-square relative p-12 hover:border-white/30 transition-colors">
                <div className="text-8xl font-black opacity-10 absolute right-8 top-8" style={{ color: baseColor }}>0{i + 1}</div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-white/5">
                  <LayoutGrid className="w-8 h-8" style={{ color: baseColor }} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{feat.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{feat.description}</p>
              </div>
            ))}
            
            <div className="w-[10vw] shrink-0" />
          </div>
        </div>
      </section>

      {/* ── 3. Testimonials ── */}
      {page.page_testimonials?.length > 0 && (
        <section className="py-32 bg-[#020202] relative z-10">
          <div className="max-w-[1400px] mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-20">Endorsements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {page.page_testimonials.map((t) => (
                <div key={t.id} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current text-yellow-500" />)}
                  </div>
                  <p className="text-2xl text-zinc-300 italic leading-relaxed mb-10">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-white/10" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{t.author}</h4>
                      <p className="text-zinc-500">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Final Conversion Block ── */}
      <section className="py-24 border-t border-white/5 bg-[#050505] text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-8">Deploy {page.title} Today.</h2>
        <button className="px-10 py-5 rounded-full text-black font-bold text-lg hover:scale-105 transition-transform" 
                style={{ backgroundColor: baseColor, boxShadow: `0 0 40px ${baseColor}40` }}>
          Create an Account
        </button>
      </section>
    </div>
  )
}
