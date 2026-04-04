'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // If it's the very first load, we don't need a curtain wipe animation.
    // We only trigger when path changes.
    if (!curtainRef.current) return;

    // A simple logic for "path changed"
    // Since Next.js suspense/layout doesn't fully unmount, we keep previous children
    // during the "exit" phase of the curtain and swap it midway.
    
    const tl = gsap.timeline();
    
    // Slide down from top
    tl.to(curtainRef.current, {
      y: '0%', // It starts at -100%
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        // Swap to the new route's content when the curtain covers the screen completely
        setDisplayChildren(children);
      }
    })
    // Show logo briefly
    .to(logoRef.current, { opacity: 1, duration: 0.1 })
    .to(logoRef.current, { opacity: 0, duration: 0.1, delay: 0.1 })
    // Slide up to reveal
    .to(curtainRef.current, {
      y: '-100%',
      duration: 0.5,
      ease: 'power2.out',
    });

  }, [pathname, children]);

  return (
    <>
      <div 
        ref={curtainRef}
        className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#0057FF] to-[#7B2FFF] flex flex-col items-center justify-center pointer-events-none origin-top"
        style={{ transform: 'translateY(-100%)' }} // Hidden by default
      >
        <div ref={logoRef} className="flex flex-col items-center opacity-0">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-2">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="white"/>
          </svg>
          <span className="text-white font-bold tracking-widest text-sm">Loading...</span>
        </div>
      </div>
      {displayChildren}
    </>
  );
}
