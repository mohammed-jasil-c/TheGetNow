'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBullseye, faGlobe, faUserAstronaut, faRocket, faCubes, faCodeBranch, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useCountUp } from '@/hooks/useCountUp';
import { TEAM, TIMELINE } from '@/data/team';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

function StatCounter({ value, suffix, label, prefix, description }: { value: number; suffix: string; label: string; prefix?: string; description?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="relative z-10 w-full text-left">
      <div className="flex items-baseline gap-1 mb-2">
        <p className="text-5xl lg:text-7xl font-black text-inherit tracking-tighter tabular-nums">
          <span ref={ref}>{prefix || ''}{count.toLocaleString()}</span>{suffix}
        </p>
      </div>
      <p className="text-sm font-black uppercase tracking-[0.2em] mb-4 opacity-80">{label}</p>
      {description && (
        <p className="text-sm leading-relaxed opacity-60 font-medium max-w-[280px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to('.about-hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Stats Reveal
      gsap.from('.stat-card-anim', {
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
        }
      });

      // Timeline line growing
      const line = document.querySelector('.timeline-line');
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          }
        });
      }

      // Timeline items staggered slide
      gsap.from('.timeline-item-anim', {
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
        }
      });
      
      // Values Bento Grid
      gsap.from('.value-bento-card', {
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%'
        }
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden relative">
      
      {/* 1. Cinematic Hero */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Parallax Background */}
        <div className="about-hero-bg absolute inset-[-10%] w-[120%] h-[120%] z-0">
          <div className="absolute inset-0 bg-background z-0" />
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Premium minimalist architecture" 
            fill 
            className="object-cover grayscale opacity-25 dark:opacity-30 mix-blend-multiply dark:mix-blend-luminosity z-10 scale-[1.1]" 
            priority
          />
          <div className="absolute inset-0 z-20" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, transparent 40%, var(--color-bg) 100%)' }} />
          <div className="absolute inset-0 z-21 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-30 text-center px-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-xl animate-fade-in">
            <FontAwesomeIcon icon={faRocket} className="w-3 h-3" /> The Architects of Tomorrow
          </div>
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal tracking-tight leading-[0.85] text-on-surface mb-10 drop-shadow-2xl animate-fade-rise" 
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: '-2.46px'
            }}
          >
            Building <em className="not-italic text-on-surface/50">the</em> <br/> 
            <em className="not-italic text-on-surface/50">impossible</em>.
          </h1>
          <p className="text-lg md:text-2xl text-on-surface-variant font-medium max-w-2xl mx-auto leading-relaxed opacity-80 animate-fade-rise-delay">
            We are a vanguard engineering laboratory merging heavy-duty machine intelligence with architectural systems to redefine enterprise digital products.
          </p>
        </div>
      </section>

      {/* 2. Massive Impact Stats - Re-engineered Grid */}
      <section ref={statsRef} className="py-24 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* High Capacity Engineering */}
            <div className="md:col-span-4 group p-10 rounded-[2.5rem] bg-[var(--color-surface)] border border-[var(--color-border-medium)] hover:border-[var(--color-primary)] transition-all duration-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faCubes} className="text-2xl" />
              </div>
              <div className="stat-card-anim">
                <StatCounter value={300} suffix="+" label="Elite Engineers" description="Deploying specialized squads of senior engineers, architects, and researchers." />
              </div>
            </div>

            {/* Scale & Systems */}
            <div className="md:col-span-5 group p-10 rounded-[2.5rem] bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border-medium)] relative overflow-hidden transition-all duration-500 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500">
                  <FontAwesomeIcon icon={faMicrochip} className="text-2xl" />
                </div>
                <div className="stat-card-anim">
                  <StatCounter value={1000} suffix="+" label="Systems Deployed" prefix="&gt;" description="Powering mission-critical infrastructure across 12 high-growth sectors." />
                </div>
              </div>
            </div>

            {/* Global & Reliability Stack */}
            <div className="md:col-span-3 flex flex-col gap-6">
              {/* Markets */}
              <div className="flex-1 group p-8 rounded-[2.5rem] bg-[var(--color-surface)] border border-[var(--color-border-medium)] hover:border-[var(--color-accent)] transition-all duration-500 hover:shadow-md">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faGlobe} className="text-lg" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[var(--color-text-secondary)]">Presence</span>
                </div>
                <div className="stat-card-anim">
                  <StatCounter value={50} suffix="+" label="Global Markets" />
                </div>
              </div>
              
              {/* Uptime */}
              <div className="flex-1 group p-8 rounded-[2.5rem] bg-[#0057FF] text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,87,255,0.4)] relative overflow-hidden border border-transparent">
                <div className="flex items-center gap-5 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:animate-pulse">
                    <FontAwesomeIcon icon={faCodeBranch} className="text-lg" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">SLA Matrix</span>
                </div>
                <div className="stat-card-anim relative z-10">
                  <StatCounter value={99} suffix=".9%" label="Uptime Guaranteed" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Core Ideology (Bento Grid) */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-5xl md:text-6xl font-bold font-headline mb-6 text-on-surface">Our Ideology</h2>
             <p className="text-xl text-on-surface-variant">We don\'t just write code; we orchestrate complex operational structures designed to outlast and outperform.</p>
          </div>
          
          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Mission */}
            <div className="value-bento-card md:col-span-2 bg-[#0057FF] text-white p-12 rounded-[2rem] flex flex-col justify-end min-h-[400px] relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000 pointer-events-none" />
              <FontAwesomeIcon icon={faBullseye} className="text-5xl mb-6 opacity-80" />
              <h3 className="text-3xl font-bold mb-4 font-headline drop-shadow-md">The Mission</h3>
              <p className="text-lg leading-relaxed opacity-90 max-w-xl">
                To empower global enterprises by architecting beautiful, resilient, and deeply intelligent systems that resolve the most complex technical challenges of our generation.
              </p>
            </div>
            
            {/* Vision */}
            <div className="value-bento-card bg-surface-container-high p-12 rounded-[2rem] border border-border shadow-sm group hover:border-primary/50 transition-colors">
              <FontAwesomeIcon icon={faGlobe} className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 font-headline text-on-surface">The Vision</h3>
              <p className="text-secondary leading-relaxed">
                To be the absolute zenith of digital design and engineering—setting the immovable benchmark for quality, performance, and aesthetic dominance.
              </p>
            </div>

            {/* Principle 1 */}
            <div className="value-bento-card bg-surface p-10 rounded-[2rem] border border-border shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faCodeBranch} className="text-xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-on-surface">Architectural Purity</h4>
              <p className="text-sm text-secondary">Clean code architectures, strictly typed paradigms, and unyielding test coverage form our baseline.</p>
            </div>

            {/* Principle 2 */}
            <div className="value-bento-card bg-surface p-10 rounded-[2rem] border border-border shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faCubes} className="text-xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-on-surface">Atomic Design</h4>
              <p className="text-sm text-secondary">Building visual systems from the absolute smallest units ensuring infinite scalability and perfect consistency.</p>
            </div>

            {/* Principle 3 */}
            <div className="value-bento-card bg-surface p-10 rounded-[2rem] border border-border shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faMicrochip} className="text-xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-on-surface">AI-First Tooling</h4>
              <p className="text-sm text-secondary">Leveraging proprietary LLMs and generative pipelines to multiply our developer velocity by 10x.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Vanguard</p>
              <h2 className="text-5xl font-bold font-headline text-on-surface">The Leadership.</h2>
            </div>
            <p className="text-secondary max-w-md text-right hidden md:block">
              Directed by industry veterans who have forged systems for Fortune 50s and hyper-growth unicorns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(t => (
              <div key={t.name} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative mb-6 border border-border shadow-sm">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    sizes="(max-width: 640px) 100vw, 25vw" 
                  />
                  {/* Glassmorphic info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-white text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {t.bio}
                     </p>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">{t.name}</h3>
                    <p className="text-sm font-semibold text-primary">{t.role}</p>
                  </div>
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-secondary border border-border shrink-0">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Journey (Timeline) */}
      <section ref={timelineRef} className="py-32 bg-surface-dim">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold font-headline text-on-surface mb-6">Our Epochs</h2>
            <p className="text-lg text-secondary">The timeline of our evolution from a boutique squad to a global software powerhouse.</p>
          </div>
          
          <div className="relative pl-8 md:pl-0">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div 
              className="timeline-line absolute top-0 bottom-0 left-[23px] md:left-1/2 w-1 bg-gradient-to-b from-primary via-[#00D4FF] to-primary rounded-full md:-translate-x-1/2" 
            />
            
            {TIMELINE.map((t, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={t.year} className={`timeline-item-anim flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Node */}
                  <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-primary z-10 shadow-lg shadow-primary/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 ml-10 md:ml-0 bg-surface p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all">
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container mb-2 font-headline">{t.year}</p>
                    <h3 className="text-xl font-bold text-on-surface mb-3">{t.title}</h3>
                    <p className="text-secondary leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Grand CTA */}
      <section className="py-40 relative overflow-hidden bg-on-surface">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold font-headline text-surface mb-8">
            Deploy your <span className="italic text-primary">vision.</span>
          </h2>
          <p className="text-xl md:text-2xl text-surface-variant font-light mb-12 max-w-2xl mx-auto">
            Partner with the agency that architects the infrastructure of tomorrow. Let's engineer your masterpiece.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0057FF] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#0057FF] transition-colors border border-transparent hover:border-[#0057FF] shadow-[0_0_40px_rgba(0,87,255,0.4)]">
            Initialize Project <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

    </div>
  );
}
