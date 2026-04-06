'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ─── Animated particle sphere ─── */
function ParticleSphere() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 3000

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + (Math.random() - 0.5) * 0.4
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3)
    const c1 = new THREE.Color('#4f8eff')
    const c2 = new THREE.Color('#a855f7')
    const c3 = new THREE.Color('#06b6d4')
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const color = t < 0.33 ? c1 : t < 0.66 ? c2 : c3
      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b
    }
    return col
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* ─── Glowing inner sphere ─── */
function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04
    meshRef.current.scale.set(s, s, s)
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 4]} />
      <meshBasicMaterial
        color="#1a1a3e"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  )
}

/* ─── Orbital ring ─── */
function OrbitalRing({ radius = 3, speed = 0.3 }: { radius?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * speed) * 0.2
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color="#4f8eff" transparent opacity={0.25} />
    </mesh>
  )
}

/* ─── Main exported scene ─── */
export default function HeroThreeScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <ParticleSphere />
          <GlowSphere />
        </Float>

        <OrbitalRing radius={3.2} speed={0.25} />
        <OrbitalRing radius={3.8} speed={-0.15} />

        <Stars
          radius={50}
          depth={80}
          count={2000}
          factor={3}
          saturation={0.5}
          fade
          speed={0.8}
        />
      </Canvas>
    </div>
  )
}
