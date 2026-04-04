'use client'

import type { FullPage } from '@/lib/types'
import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, PlayCircle, Layers, Fingerprint, Activity } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

// ── Interactive 3D Cursor-Tracking Blobs ──
function InteractiveBlobs({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null!)
  const mouse = useRef(new THREE.Vector2(0, 0))

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    // Lerp group rotation towards cursor
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.current.y * 0.5, 0.05)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.5, 0.05)
    
    // Slow continuous rotation
    groupRef.current.rotation.z += delta * 0.1
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color={color} />
      
      {/* Center Main Orb */}
      <Sphere args={[2.5, 64, 64]} position={[0, 0, 0]}>
        <MeshWobbleMaterial color={color || "#8b5cf6"} factor={0.6} speed={2} roughness={0} metalness={0.8} />
      </Sphere>
      
      {/* Orbiting Satellite Orbs */}
      <Sphere args={[0.6, 32, 32]} position={[4, 2, -1]}>
        <MeshWobbleMaterial color="#ffffff" factor={1} speed={3} roughness={0.2} metalness={0.5} />
      </Sphere>
      <Sphere args={[0.8, 32, 32]} position={[-3, -3, 2]}>
        <MeshWobbleMaterial color={color || "#8b5cf6"} factor={0.8} speed={1.5} roughness={0.1} metalness={0.9} />
      </Sphere>
      <Sphere args={[0.4, 32, 32]} position={[2, -4, 1]}>
        <MeshWobbleMaterial color="#ffffff" factor={0.4} speed={4} roughness={0} metalness={1} />
      </Sphere>
    </group>
  )
}

export default function InteractiveLayout({ page }: { page: FullPage }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const baseColor = page.accent_color || '#8b5cf6'

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Massive text stagger reveal
      gsap.from('.hero-word', {
        y: 100, opacity: 0, rotate: 10, stagger: 0.1, duration: 1.2, ease: 'back.out(1.5)',
      })

      // Expanding sections
      gsap.from('.feature-block', {
        scale: 0.9, opacity: 0, y: 50, stagger: 0.2, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-container', start: 'top 85%' }
      })

    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  const words = page.title.split(' ')

  return (
    <div ref={wrapperRef} className="min-h-screen bg-[#f3f4f6] text-zinc-900 overflow-x-hidden">
      
      {/* ── 1. Full Desktop Interactive 3D Hero ── */}
      <section className="relative h-screen min-h-[900px] flex flex-col justify-center overflow-hidden">
        {/* 3D Cursor tracking background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ alpha: true, antialias: true }}>
            <InteractiveBlobs color={baseColor} />
          </Canvas>
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pointer-events-none">
          <Link href={`/${page.category}`} className="inline-flex items-center gap-2 font-bold mb-10 tracking-widest uppercase transition-colors pointer-events-auto" style={{ color: baseColor }}>
            <ArrowLeft className="w-5 h-5" /> {page.category}
          </Link>
          
          <div className="flex flex-wrap overflow-hidden leading-tight mb-8">
            {words.map((w, i) => (
              <span key={i} className="hero-word text-[6rem] md:text-[9rem] font-black tracking-tighter mr-6">
                {w}
              </span>
            ))}
          </div>

          <p className="text-2xl md:text-4xl text-zinc-600 max-w-3xl font-medium leading-tight mb-12">
            {page.subtitle || page.description}
          </p>

          <div className="flex pointer-events-auto">
             <button className="flex items-center gap-4 px-8 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all shadow-2xl"
                     style={{ backgroundColor: baseColor, boxShadow: `0 20px 40px ${baseColor}40` }}>
               <PlayCircle className="w-6 h-6" /> Watch Interactive Demo
             </button>
          </div>
        </div>
      </section>

      {/* ── 2. Massive Floating Features ── */}
      <section className="py-32 features-container relative z-10 -mt-20">
        <div className="max-w-[1400px] mx-auto px-6 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(page.page_features?.length > 0 ? page.page_features : [
            { id: 1, title: 'Intelligent Workflows', description: 'AI-driven process automation executing millions of rules per second.' },
            { id: 2, title: 'Reactive Data Model', description: 'Changes propagate instantly to every client device synchronously.' },
            { id: 3, title: 'Quantum Encryption', description: 'Post-quantum cryptography securing enterprise data layers.' }
          ]).map((feat, i) => (
            <div key={feat.id} className="feature-block bg-white p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_80px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-4 border border-zinc-100">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl" style={{ backgroundColor: baseColor, color: 'white', boxShadow: `0 10px 20px ${baseColor}30` }}>
                {i === 0 ? <Activity className="w-10 h-10" /> : i === 1 ? <Layers className="w-10 h-10" /> : <Fingerprint className="w-10 h-10" />}
              </div>
              <h3 className="text-3xl font-black mb-4">{feat.title}</h3>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. High Contrast Details Block ── */}
      <section className="py-40 bg-zinc-900 text-white rounded-t-[5rem] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-[200px] opacity-30 rounded-full pointer-events-none" style={{ backgroundColor: baseColor }} />
        
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              An experience <br/> unlike any other.
            </h2>
             <div className="prose prose-invert prose-2xl max-w-none text-zinc-400 font-light leading-relaxed mb-12">
                <p>{page.description}</p>
             </div>
             
             {page.page_stats && page.page_stats.length > 0 && (
                <div className="grid grid-cols-2 gap-10 mt-16 border-t border-zinc-800 pt-16">
                  {page.page_stats.map((stat) => (
                    <div key={stat.id}>
                      <div className="text-6xl font-black text-white mb-2">{stat.value}<span style={{ color: baseColor }}>{stat.suffix}</span></div>
                      <div className="text-lg font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
          </div>
          
          <div className="flex-1 w-full bg-zinc-800/50 border border-zinc-700/50 rounded-[3rem] p-4 relative backdrop-blur-3xl">
             {/* Fake interactive UI window */}
             <div className="w-full h-[600px] rounded-[2.5rem] bg-zinc-950 overflow-hidden relative flex flex-col shadow-2xl">
                <div className="h-14 border-b border-zinc-800 flex items-center px-6 gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500" />
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <div className="ml-4 px-4 py-1.5 rounded-md bg-zinc-900 text-xs text-zinc-400 font-mono flex-1 text-center font-bold">interactive-demo.app</div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 rounded-full mb-8 animate-pulse shadow-[0_0_80px_currentColor]" style={{ backgroundColor: baseColor, color: baseColor }} />
                  <p className="font-mono text-zinc-500 text-lg">System Active.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── 4. Endorsements ── */}
      {page.page_testimonials?.length > 0 && (
        <section className="py-32 bg-[#f3f4f6]">
          <div className="max-w-[1400px] mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-24 text-zinc-900">Industry Recognized</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {page.page_testimonials.map((t) => (
                <div key={t.id} className="p-12 rounded-[3.5rem] bg-white shadow-xl hover:shadow-2xl transition-all border border-zinc-100">
                  <p className="text-2xl text-zinc-700 font-medium leading-relaxed mb-10">"{t.quote}"</p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-zinc-200" />
                    <div>
                      <h4 className="font-black text-zinc-900 text-xl">{t.author}</h4>
                      <p className="text-zinc-500 font-bold">{t.role}{t.company ? ` @ ${t.company}` : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
