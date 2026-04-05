'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EventBookingAppDetailTemplate() {
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


<section className="relative h-[870px] w-full flex items-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-90 scale-105" data-alt="wide shot of a minimalist luxury event hall with soaring ceilings, floor to ceiling windows, and soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVnP9QBHanNLZG9DqD-1fFuiLZVM0peRne4lJvGYHVT0AGAuZbO4y_uRQ_1wrg1556jntFFkbZs5KyBgDRS52O-1S78m2S_-dTrsb9aY6rDQHJrFkoi8NnLqfnF72G7NBLv9ij3nM-jBFh0qHFXqTdj9cW7xB_9llTJHTxkltqPd87_yRcbCwJWvHKAjCQ2qcE0GuH5DMUVgF74N0UOTqdfkVBKQAwEH0x3ZltB28StIZNlAtuCLnw4ZzS4Bjp3h57MadrM1bn_W-w"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
</div>
<div className="relative z-10 px-12 max-w-screen-2xl mx-auto w-full">
<div className="max-w-2xl">
<span className="font-label text-tertiary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Event Excellence</span>
<h1 className="font-headline text-6xl md:text-8xl leading-[1.1] text-on-surface mb-8">
                        Seamless curation for <span className="italic">every stage</span>.
                    </h1>
<p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10">
                        An editorial approach to event architecture. Alexandria provides the digital infrastructure for the world's most discerning planners.
                    </p>
<div className="flex items-center gap-8">
<button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                            Explore Platform <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="font-label text-on-surface-variant border-b border-outline-variant pb-1 text-sm uppercase tracking-widest font-bold">
                            View Showcase
                        </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 max-w-screen-2xl mx-auto">
<div className="mb-20">
<h2 className="font-headline text-4xl mb-4">Core Infrastructure</h2>
<div className="h-1 w-24 bg-tertiary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 min-h-[700px]">

<div className="md:col-span-8 bg-surface-container-low p-12 flex flex-col justify-between group">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-6">location_away</span>
<h3 className="font-headline text-3xl mb-4">Venue Management</h3>
<p className="font-body text-on-surface-variant max-w-md">
                            Coordinate complex spatial logistics with precision. From seating charts to vendor load-in schedules, manage every square foot through a unified interface.
                        </p>
</div>
<div className="mt-8 overflow-hidden rounded-xl h-64">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="clean user interface showing a 3D architectural floor plan for a large event venue with data overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHvW52gF05HY0EyggIEu2DkUc4mXpvdp8XYnG_vTjlF26X6FqBAvZWT9QnAMn19CQN-rHZnKFCUo3JsjulXlHXiinNsqVPmemrcLtzzH0gluNtpwMo32FnsZaa9rOhEOconxG0K7aYc1KnO57Ai_cmkSofnJAqSbmWlvovZcQS0azoAvUcym96yk5GUuUWj_2D2SvjSKT_wI-hD0UEHA0kuk645ze18EE9u0onqjuY7LCogwLnZwW0kC2FNG_8t5Tn5awH4Ui087WX"/>
</div>
</div>

<div className="md:col-span-4 bg-tertiary-container/10 p-12 flex flex-col justify-between border border-tertiary-container/20">
<div>
<span className="material-symbols-outlined text-tertiary text-4xl mb-6">confirmation_number</span>
<h3 className="font-headline text-3xl mb-4">Dynamic Ticketing</h3>
<p className="font-body text-on-surface-variant">
                            Tiered access, early-bird automation, and seamless mobile entry. Sophisticated commerce for premium experiences.
                        </p>
</div>
<div className="mt-12">
<ul className="space-y-4 font-label text-xs uppercase tracking-widest text-tertiary font-bold">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> RFID Integration</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> VIP Allocation</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Real-time Resale</li>
</ul>
</div>
</div>

<div className="md:col-span-12 bg-on-surface text-surface p-12 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">analytics</span>
<h3 className="font-headline text-3xl mb-4 text-surface-bright">Real-Time Analytics</h3>
<p className="font-body text-surface-variant max-w-lg mb-8">
                            Monitor attendance flow, revenue generation, and attendee engagement as it happens. Knowledge is the foundation of flawless execution.
                        </p>
<button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-lg font-label text-xs uppercase tracking-widest font-bold">
                            Download Sample Report
                        </button>
</div>
<div className="flex-1 w-full h-full bg-surface-container-highest/10 rounded-xl p-8">
<img className="w-full h-full object-contain" data-alt="minimalist dark mode dashboard showing glowing blue data visualizations and heat maps" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ95JSwGNEp4ZHDC4_obML1gBNH_g0_03thlrXK7OydBByH-yiTAo47J8SxPeKdN_f4DrVvYzrAoM59qNtNN_uLDA2oISHRUGh9Ecke1zyWrvSYx5CSKSdeXR3Lz0V73IqhAmBsDnxFvHZzFCaXfSduWlcar6z2G65nIfDkfUZ-flWgpWKnbYBcQ-TXGABM58lQbcns1AcQBK-SlleG-7l1T-XmyDCgQ2O3_BzJQb0iLUfuWc7vkRz5zKLT1cMzlvnvDZhGVsc1sdR"/>
</div>
</div>
</div>
</section>

<section className="bg-surface-dim py-32 px-12">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
<div>
<h2 className="font-headline text-5xl mb-12 leading-tight">The Architect's <span className="italic text-primary">Journey</span></h2>
<div className="space-y-12">
<div className="flex gap-8">
<span className="font-headline text-4xl text-outline-variant opacity-30">01</span>
<div>
<h4 className="font-label text-sm uppercase tracking-[0.2em] font-bold mb-2">Discovery &amp; Intent</h4>
<p className="font-body text-on-surface-variant">Define your vision within our planning suite, mapping key milestones and aesthetic requirements.</p>
</div>
</div>
<div className="flex gap-8">
<span className="font-headline text-4xl text-outline-variant opacity-30">02</span>
<div>
<h4 className="font-label text-sm uppercase tracking-[0.2em] font-bold mb-2">Spatial Orchestration</h4>
<p className="font-body text-on-surface-variant">Utilize our venue tools to arrange the flow, vendors, and technical requirements of your space.</p>
</div>
</div>
<div className="flex gap-8">
<span className="font-headline text-4xl text-outline-variant opacity-30">03</span>
<div>
<h4 className="font-label text-sm uppercase tracking-[0.2em] font-bold mb-2">Live Execution</h4>
<p className="font-body text-on-surface-variant">Monitor and adapt in real-time with centralized data feeds and on-site support tools.</p>
</div>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
<img className="relative z-10 rounded-2xl shadow-2xl" data-alt="close up of refined hands using a high-end tablet to move elements on an event blueprint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUS-0W-tDC4ydA4MFhdnTzIPLmIyn1UtfK6-HAEMx5o02jr7Wm0HXeBNED48vwSIDCEcKa77d7h8iSD7cI9Fpt_XZAhoXqhuGe94unVNk4ECXQOgbgJIqj_AHzuwOgL63V2XW64W2QYEvNUAmhRA795ztMAcWwCODQIYk0F7QDyoZUgKLQgyRyMEh67C4qJ9pzQazK01Rj4jd6sjYJ19D_j9a9i41dr1egaRcsOlCwRq8ncYBcBCVPoXFbEFXJfhmQRm4xLeDFF1Vi"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 bg-surface-container-lowest">
<div className="max-w-4xl mx-auto text-center">
<span className="material-symbols-outlined text-tertiary text-5xl mb-8">format_quote</span>
<blockquote className="font-headline text-4xl md:text-5xl leading-snug mb-12">
                    "Alexandria isn't just software; it's the digital backbone of our firm. It allows us to focus on the <span className="italic">art</span> of the event while the logistics take care of themselves."
                </blockquote>
<div className="flex flex-col items-center">
<img className="w-16 h-16 rounded-full object-cover mb-4 grayscale" data-alt="professional portrait of a woman in an elegant blazer looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgIntwwOBxPY_LY6ptUYZcT_og1yHMaGocuTcrE3RbI8NGli16v2M0qrUliC1xdwMFZzQCEAaeCzMc3FUH_S0Q9t9NkEUeunO5PRfnHcMWcM7Ln3qUi-X7Ro-KfBXUHYn-chlcaChuK1b09a7BPLZiYasJPQOyNdeo8LUekRlN7MCltSPR27B2VDWnUvlt9-5xM2ru4or9dwDECYa8_mgVSCygLZ5IRFZgFWh8s1593JeMjV7aHzUAhTSfqTSXu7fC3jHIGyX8LrG3"/>
<h5 className="font-label text-xs uppercase tracking-[0.3em] font-bold">Helena Vance</h5>
<p className="font-body text-sm text-on-surface-variant">Director of Curated Experiences, Vance &amp; Co.</p>
</div>
</div>
</section>

<section className="mb-32 px-12 max-w-screen-2xl mx-auto">
<div className="bg-primary text-on-primary rounded-2xl p-16 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-blue-900 opacity-50"></div>
<div className="relative z-10">
<h2 className="font-headline text-5xl md:text-7xl mb-8">Ready to curate?</h2>
<p className="font-body text-xl text-on-primary-container max-w-xl mx-auto mb-12">
                        Join the world's leading event architects and redefine what's possible for your next engagement.
                    </p>
<div className="flex flex-col md:flex-row gap-6 justify-center">
<button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-label text-sm uppercase tracking-widest font-bold">
                            Request Consultation
                        </button>
<button className="border border-on-primary-container text-on-primary px-10 py-5 rounded-xl font-label text-sm uppercase tracking-widest font-bold">
                            View Case Studies
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
