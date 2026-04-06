'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Target rotation shifts based on mouse
      targetRotation.current.x = y * 0.5;
      targetRotation.current.y = x * 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Base slow rotation
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
      
      // Smooth interpolation towards mouse tilt
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]} scale={2.5}>
      <meshPhysicalMaterial 
        color="#0057FF" 
        emissive="#7B2FFF"
        emissiveIntensity={0.2}
        wireframe={true} 
        transparent 
        opacity={0.8}
        roughness={0.2}
      />
    </Icosahedron>
  );
}

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Word split effect would normally use SplitText plugin, but we can do a simple fade up here 
    // or manually wrap words if SplitText requires premium license.
    // For now we do robust standard element stagger.
    
    gsap.fromTo(badgeRef.current, { y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0 });
    gsap.fromTo(h1Ref.current, { y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.fromTo(subtextRef.current, { y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
    gsap.fromTo(ctaRef.current, { y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7 });
    gsap.fromTo(trustRef.current, { y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.9 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#06080F] flex items-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_-5%,rgba(0,87,255,0.22)_0%,rgba(123,47,255,0.10)_40%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>
      
      {/* Three.js Canvas Layer */}
      <div className="absolute right-0 lg:right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedMesh />
        </Canvas>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          
          <div ref={badgeRef} className="self-start inline-flex items-center gap-3 border border-[#00D4FF]/40 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full px-5 py-2 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"></span>
            ✦ Trusted by 500+ Global Brands
          </div>

          <h1 ref={h1Ref} className="font-heading font-extrabold text-[#F0F6FF] leading-[1.05] mb-6 translate-y-[0]">
            <div className="text-[clamp(42px,5vw,72px)]">We Build Digital</div>
            <div className="text-[clamp(42px,5vw,72px)]">Products That</div>
            <div className="text-[clamp(42px,5vw,72px)] gradient-text-hero">Scale Globally</div>
          </h1>

          <p ref={subtextRef} className="max-w-[520px] text-[#6B7A99] font-sans text-lg leading-[1.7] mb-10">
            From AI-powered platforms to full-scale blockchain solutions &mdash; we engineer products that users love and enterprises scale with. 250+ expert developers. 12+ years. 1000+ clients.
          </p>

          {/* CTA Row */}
          <div ref={ctaRef} className="flex items-center gap-4 flex-wrap mb-14">
            <button className="group btn-primary">
              Start Your Project
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-outline group">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
              Watch Our Story
            </button>
          </div>

          {/* Trust Indicators */}
          <div ref={trustRef} className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col">
              <span className="text-[#F7C948] tracking-widest leading-none mb-1 text-base">★★★★★</span>
              <span className="text-white text-sm">4.9/5 on Clutch</span>
            </div>
            
            <div className="w-[1px] h-5 bg-[#2A3545]"></div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0057FF]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              <span className="text-white text-sm font-medium">Top Development Company 2024</span>
            </div>

            <div className="w-[1px] h-5 bg-[#2A3545]"></div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span className="text-white text-sm font-medium">ISO 9001:2015 Certified</span>
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN (Visual Area) */}
        <div className="col-span-1 lg:col-span-5 relative hidden lg:block">
          
          {/* Floating Phones Mockup */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            {/* Phone 1 (Back) */}
            <div className="absolute top-1/2 left-1/2 w-[240px] h-[480px] bg-[#111827] rounded-[40px] border-[6px] border-[#1E2A3A] shadow-2xl -translate-x-[20px] -translate-y-[20px] -rotate-6 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#0057FF]/10 z-10 mix-blend-overlay"></div>
              {/* placeholder for app UI */}
              <div className="w-full h-full bg-[#0A0D16] p-4 flex flex-col gap-3">
                <div className="w-full h-32 bg-[#1E2A3A] rounded-xl flex items-center justify-center text-[#4A5568]">App UI</div>
                <div className="w-full h-16 bg-[#1A2235] rounded-xl"></div>
                <div className="w-full h-16 bg-[#1A2235] rounded-xl"></div>
                <div className="grid grid-cols-2 gap-3 mt-auto mb-4">
                  <div className="h-10 bg-[#0057FF]/40 rounded-lg"></div>
                  <div className="h-10 bg-[#1E2A3A] rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Phone 2 (Front) */}
            <div className="absolute top-1/2 left-1/2 w-[240px] h-[480px] bg-[#0D1117] rounded-[40px] border-[6px] border-[#263040] shadow-[0_30px_60px_rgba(0,0,0,0.6)] translate-x-[20px] translate-y-[30px] rotate-6 z-10 overflow-hidden">
               <div className="absolute inset-x-0 top-0 h-6 bg-black flex justify-center z-20 rounded-t-3xl"><div className="w-20 h-4 bg-black rounded-b-xl border border-white/5"></div></div>
               <div className="w-full h-full bg-gradient-to-b from-[#0A0D16] to-[#0D1117] p-4 flex flex-col gap-4 pt-10">
                  <div className="flex justify-between items-center px-1 text-xs text-white"><span>9:41</span><span>📶 🔋</span></div>
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#7B2FFF]/50 to-[#00D4FF]/30 p-2 opacity-80 backdrop-blur">
                    <div className="w-full h-full border border-white/20 rounded-xl flex items-center justify-center">Analytics</div>
                  </div>
                  <div className="h-20 bg-[#1E2A3A] rounded-xl flex items-center px-4"><div className="w-10 h-10 rounded-full bg-[#7B2FFF]"></div><div className="ml-3 h-2 w-20 bg-white/20 rounded"></div></div>
               </div>
            </div>
          </div>

          {/* Floating Stat Card A */}
          <div className="absolute top-1/4 -left-10 z-20 animate-float-offset bg-[#0D1117]/90 backdrop-blur border border-[#1E2A3A] rounded-xl p-3 px-4 shadow-xl">
             <div className="text-xl font-bold gradient-text">500+</div>
             <div className="text-xs text-[#A0AEC0]">Projects Delivered</div>
          </div>

          {/* Floating Stat Card B */}
          <div className="absolute bottom-1/4 -right-5 z-20 animate-float bg-[#0D1117]/90 backdrop-blur border border-[#1E2A3A] rounded-xl p-3 px-4 shadow-xl" style={{ animationDelay: '1.5s' }}>
             <div className="text-xl font-bold gradient-text-cyan">98%</div>
             <div className="text-xs text-[#A0AEC0]">Client Retention</div>
          </div>

          {/* Floating Stat Card C (Small) */}
          <div className="absolute top-[20%] right-10 z-20 animate-float-slow bg-[#0D1117]/90 backdrop-blur border border-[#1E2A3A] rounded-lg p-2 shadow-xl flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <div className="flex flex-col">
               <span className="text-[10px] text-white font-medium">Active Project</span>
               <div className="w-16 h-1 mt-1 bg-[#1E2A3A] rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[73%]"></div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
