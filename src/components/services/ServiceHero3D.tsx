'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Preload, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { usePathname } from 'next/navigation'

// A Particle swirl specifically for AI / General tech
function ParticleSwirl({ count = 2000, color = '#0057FF' }) {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * 8
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi)
      const z = distance * Math.cos(theta)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={0.03} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  )
}

// A Geometric abstract floating object for Web / SaaS
function AbstractGeometry({ color = '#7B2FFF' }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial 
          color={color} 
          wireframe={true} 
          transparent 
          opacity={0.3} 
          roughness={0.1} 
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Scene selector based on slug
function SceneContent({ slug, primaryColor }: { slug: string, primaryColor: string }) {
  if (slug === 'ai-development' || slug === 'blockchain-development') {
    return <ParticleSwirl color={primaryColor} count={5000} />
  }
  return <AbstractGeometry color={primaryColor} />
}

export default function ServiceHero3D({ 
  primaryColor = '#0057FF', 
  slug = 'web-development' 
}: { 
  primaryColor: string, 
  slug: string 
}) {
  const pathname = usePathname()

  // Ensure it only renders on client to avoid hydration mismatch
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color={primaryColor} />
        <SceneContent slug={slug} primaryColor={primaryColor} />
        <Preload all />
      </Canvas>
      {/* Heavy gradient mask so it fades out smoothly to the bottom */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)' }} />
    </div>
  )
}
