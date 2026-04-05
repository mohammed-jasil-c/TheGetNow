'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FantasyFootballAppDetailTemplate() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        
        const sections = gsap.utils.toArray('section', containerRef.current);
        sections.forEach((sec: any) => {
            gsap.fromTo(sec, 
                { opacity: 0, y: 40 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 80%",
                    }
                }
            );
        });

        const images = gsap.utils.toArray('img', containerRef.current);
        images.forEach((img: any) => {
            gsap.to(img, {
                y: "-=15",
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full">
            <main className="relative pt-24 min-h-screen bg-surface">


<section className="relative h-[921px] min-h-[700px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale contrast-125 opacity-40" data-alt="dramatic wide shot of a professional american football player jumping for a catch at night under bright stadium floodlights with heavy atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF7dWTwneRsYopb8QK9h-d86mvTQct3fbuccm_YrpEgwUFL6UQczSF8J6s_XWAM_jXHZP8RLyQah6xrJ5j6bUiSnaaEKJHp5qDaGXFRkOjkdw2rpeiTwaRyQJsKMBw3nyhJOmazuJiC8Yi2-wtbJRn6vbdA0ScRX0VDEKMikrPrWXf1tevNkofzjeC7iTFg-zXrWUP6CLKeZV6oR8xideyPCd379GLG4dY5JChliOFY2nYaZugnaQIBRFAZ-OV28B_d2TkjRJNjbB0"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full">
<div className="max-w-4xl">
<span className="font-label text-tertiary uppercase tracking-[0.3em] text-sm mb-6 block font-bold">The Digital Arena</span>
<h1 className="font-headline text-7xl md:text-8xl text-on-surface leading-[1.1] mb-8 font-bold tracking-tighter">
                        Elevating the Digital Arena
                    </h1>
<p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                        A masterclass in fantasy sports architecture. Alexandria presents a seamless fusion of archival depth and real-time velocity for the modern league executive.
                    </p>
<div className="flex items-center gap-6">
<button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label uppercase tracking-widest text-sm font-bold shadow-xl shadow-primary/20">Explore Case Study</button>
<div className="h-px w-20 bg-outline-variant opacity-30"></div>
<span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">Project Ref: FF-2024</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-7 bg-surface-container-low rounded-xl p-16 flex flex-col justify-between aspect-[16/10]">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="database">database</span>
<h3 className="font-headline text-4xl mb-6 font-bold">Real-Time Data Streams</h3>
<p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
                            Sub-second latency processing of NFL GSIS feeds, delivering granular player metrics and drive-by-drive probabilities to every interface instantly.
                        </p>
</div>
<div className="pt-8 border-t border-outline-variant/15 flex items-center gap-4">
<span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold">Latency: &lt; 50ms</span>
<span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold">Uptime: 99.99%</span>
</div>
</div>
<div className="col-span-12 md:col-span-5 bg-primary-container text-on-primary-container rounded-xl p-12 aspect-[16/10] md:aspect-auto">
<span className="material-symbols-outlined text-4xl mb-8" data-icon="psychology">psychology</span>
<h3 className="font-headline text-4xl mb-6 font-bold">Advanced Draft Logic</h3>
<p className="font-body text-lg leading-relaxed opacity-90">
                        Proprietary algorithmic forecasting that balances historical deviation with current momentum, providing users with a curated "Best-Fit" strategy in high-pressure draft windows.
                    </p>
</div>
<div className="col-span-12 md:col-span-5 bg-surface-container-high rounded-xl p-12 aspect-square md:aspect-auto">
<img className="w-full h-48 object-cover rounded-lg mb-8" data-alt="clean minimal data visualization dashboard showing abstract purple and blue charts and player performance graphs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBlUVET7xFVFfdD52ZnqjJtRK0JDmadN6YFh7XSLlCOYnuh-kTO2iIjC_31NDTxNC6s0WpqJBORskHCMgcLg5ijJwzhW5GMCPZnk1ONylOGiDNJ978AbaAQAOF05R036xpzFgfIblpjzU6uvdvZdUIrv5mSfMdmCDRID_DtrHxcXR6mumi6KKtFSfdGlnlsIToP8RJNnE5NygLk-6kSLBfil88bVQ7lWbo3UQYmZvmPDasqVd3A3lAUt-c_l_OB6WSSD_29Y-UE3Eo"/>
<h3 className="font-headline text-3xl mb-4 font-bold">Fan Engagement Tools</h3>
<p className="font-body text-on-surface-variant leading-relaxed">
                        Interactive social modules and predictive polling that transform passive spectators into active participants within the league ecosystem.
                    </p>
</div>
<div className="col-span-12 md:col-span-7 bg-surface-container-lowest rounded-xl p-12 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-stone-900/5 transition-colors group-hover:bg-stone-900/0"></div>
<div className="text-center z-10">
<h3 className="font-headline text-5xl mb-4 italic font-bold">The Gold Standard</h3>
<p className="font-label text-sm uppercase tracking-[0.4em] text-tertiary">Curated Excellence</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-dim">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="mb-24">
<h2 className="font-headline text-5xl mb-6 font-bold">The Journey of a Champion</h2>
<div className="h-1 w-24 bg-primary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-20">
<div className="relative">
<span className="text-[12rem] font-serif text-outline-variant/20 absolute -top-24 -left-8 select-none">01</span>
<div className="relative z-10">
<h4 className="font-headline text-2xl mb-4 font-bold">The Strategic Intake</h4>
<p className="font-body text-on-surface-variant leading-relaxed">
                                Personalized onboarding captures playstyle and historical preferences to tailor the entire UI/UX to the executive's specific needs.
                            </p>
</div>
</div>
<div className="relative">
<span className="text-[12rem] font-serif text-outline-variant/20 absolute -top-24 -left-8 select-none">02</span>
<div className="relative z-10">
<h4 className="font-headline text-2xl mb-4 font-bold">Dynamic Orchestration</h4>
<p className="font-body text-on-surface-variant leading-relaxed">
                                During the active season, the platform morphs based on game-day context, highlighting urgent trades and critical injury alerts.
                            </p>
</div>
</div>
<div className="relative">
<span className="text-[12rem] font-serif text-outline-variant/20 absolute -top-24 -left-8 select-none">03</span>
<div className="relative z-10">
<h4 className="font-headline text-2xl mb-4 font-bold">Post-Game Synthesis</h4>
<p className="font-body text-on-surface-variant leading-relaxed">
                                Advanced archival reporting turns a week of data into a narrative recap, providing long-term value beyond the final whistle.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-surface-container-lowest overflow-hidden">
<div className="max-w-4xl mx-auto px-12 text-center">
<span className="material-symbols-outlined text-tertiary text-6xl mb-12 opacity-40" data-icon="format_quote">format_quote</span>
<blockquote className="font-headline text-4xl md:text-5xl leading-tight mb-12 italic text-on-surface">
                    "Alexandria didn't just build an app; they constructed a premium stadium for the digital fan. The level of editorial detail and data integrity is unprecedented in the sports tech landscape."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-stone-200">
<img className="w-full h-full object-cover" data-alt="professional portrait of a confident sports media executive in a modern workspace with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxqIiTCvghknTdrOVyQrahYkym7vw6wWaF9DSfai9tE6eeQ5nzskYykmydCcX831JL7lxPOYKbMde79k03opKEfYFUcoFlSnH-IFWcB2k0r-WlXtIlqBKQL-QHMCs1F__NtUbbKbE7KeiwSB2aheXyCotBwyr3RRU9PzRkIHXZn514dHZ9BZFMhJkK1ULmsEotvQxF6UWSRL9vWmu3HYeJe3tN0rZ9W-H7HY9_pc15t0rK31fK-wXtddSyHEZno2aeI1ucoFav2ZTy"/>
</div>
<cite className="not-italic">
<span className="block font-label text-sm uppercase tracking-widest font-bold text-on-surface">Marcus Thorne</span>
<span className="block font-body text-sm text-on-surface-variant">VP of Digital Media, Elite Sports Network</span>
</cite>
</div>
</div>
</section>

<section className="py-32 px-12">
<div className="max-w-screen-2xl mx-auto bg-stone-900 rounded-[2rem] p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#094cb2,transparent)] scale-150"></div>
</div>
<div className="relative z-10 max-w-2xl text-center md:text-left mb-12 md:mb-0">
<h2 className="font-headline text-5xl text-stone-50 mb-6 font-bold">Ready to Architect Your Digital Arena?</h2>
<p className="font-body text-stone-400 text-lg leading-relaxed">
                        Join the elite ranks of sports organizations leveraging Alexandria's design and data expertise. Schedule a private consultation with our strategy team.
                    </p>
</div>
<div className="relative z-10">
<button className="bg-stone-50 text-stone-950 px-12 py-5 rounded-xl font-label uppercase tracking-[0.2em] text-sm font-bold hover:bg-blue-50 transition-all flex items-center gap-3">
                        Book a Consultation
                        <span className="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</section>

</main>
        </div>
    );
}
