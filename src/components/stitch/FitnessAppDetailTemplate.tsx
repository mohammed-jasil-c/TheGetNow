'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FitnessAppDetailTemplate() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        
        const sections = gsap.utils.toArray('section', containerRef.current);
        sections.forEach((sec: any) => {
            gsap.fromTo(sec, 
                { y: 40 },
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


<section className="relative h-[921px] flex items-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0">
<img alt="Minimalist Gym" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" data-alt="A minimalist architectural gym interior with raw concrete walls, high ceilings, and soft natural light streaming through large windows onto professional equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsQTUmviy1pmKUy2roY6Zu0UDmMjSuBitlwf3VIvBsG6QFE3sBolzo9NnfB_AGhUGikKNiITkRvqOtXuHqiBjg1_p0idjcc8c1_tlkHkHfLdM73T0BDapEi2l6dn3r8PngT5YhqVSLfFBBfHIOCVInGfKoaFIe15MRSob3Jz4pcBleXDrZt8H6nusuN_rb-4JaXEOYCUpbzuocFtMKHeOK3vu2NPiz1fZ9aDem2oIrmzWxy92Ekgf4qmKPgqQCr6cN_LqXUUuBGJ2S"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-screen-2xl mx-auto px-12">
<div className="max-w-4xl">
<span className="font-label text-xs uppercase tracking-[0.4em] text-tertiary mb-6 block">Vol. 04 — Human Mechanics</span>
<h1 className="font-headline text-6xl md:text-8xl leading-[1.1] text-on-surface mb-8">Engineering the <br/><span className="italic text-primary">Architecture</span> of Wellness</h1>
<p className="font-serif text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                        A curated digital ecosystem designed for the rigorous athlete. We dismantle traditional fitness paradigms to build a foundation of precise, data-driven vitality.
                    </p>
</div>
</div>
</section>

<section className="py-32 px-12 max-w-screen-2xl mx-auto bg-surface-container-low">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-8 bg-surface-container-lowest p-12 flex flex-col justify-between min-h-[450px]">
<div>
<span className="font-label text-tertiary text-xs uppercase tracking-widest">Foundation 01</span>
<h3 className="font-headline text-4xl mt-4 mb-6">Custom Workout Engines</h3>
<p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-xl">
                            Our proprietary algorithmic core synthesizes your physiological profile into a non-linear training trajectory. It adapts in real-time, ensuring every repetition serves a metabolic purpose.
                        </p>
</div>
<div className="mt-8 flex items-center gap-4 text-primary font-label uppercase text-sm tracking-widest group cursor-pointer">
                        Explore Methodology 
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
</div>
</div>

<div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-end">
<span className="material-symbols-outlined text-5xl mb-8" >android_fingerprint</span>
<h3 className="font-headline text-3xl mb-4">Biometric Integration</h3>
<p className="font-body text-on-primary-container text-sm leading-loose opacity-80">
                        Synchronize with your biological rhythm. We ingest data from medical-grade wearables to map your recovery, strain, and readiness.
                    </p>
</div>

<div className="md:col-span-4 bg-surface-dim p-12 flex flex-col border-stone-200/20">
<h3 className="font-headline text-2xl mb-4">Community Engagement</h3>
<p className="font-body text-on-surface-variant text-sm mb-12">
                        Selective circles for high-performance individuals. Exchange protocols, celebrate milestones, and refine your practice among peers.
                    </p>
<div className="mt-auto overflow-hidden">
<img alt="Community" className="w-full h-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" data-alt="A focused group of diverse athletes in a premium dark-themed studio setting, exhibiting a sense of community and shared determination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcOyp3nzlZJAgyu7pUiOdnCbPVt9UP6BdtOJa1PvjH8jA36lMbdeSl0LYOAmMG5P0ru4qlOWX2y-oLUAfisLyebYxKk3RPOUnF5xFAHQOtdG7r50omCRk9PslaUBrpzYYPPMtKHooG75fTTl0SBEDDNeYnNEwEe38MAFFdeK-zy9eS-HBv5-pcXVahdhhlJMeL0JN69T31ZgN5ulw8GY952teo2VL_B9cd7Zczlla2JVyRNRDFOSRCkJtP5WTspx8g9y3sfOMoJ7BB"/>
</div>
</div>

<div className="md:col-span-8 bg-surface-container-lowest p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<span className="font-label text-tertiary text-xs uppercase tracking-widest">Curated Insight</span>
<h3 className="font-headline text-3xl mt-4 mb-6">The Kinetic Archive</h3>
<p className="font-body text-on-surface-variant text-sm leading-relaxed">
                            Access a library of movement patterns captured in high-fidelity 8K resolution, providing an anatomical perspective on form and function.
                        </p>
</div>
<div className="bg-surface-container-high aspect-square flex items-center justify-center p-8">
<div className="border border-outline-variant w-full h-full flex flex-col items-center justify-center gap-4">
<span className="material-symbols-outlined text-4xl text-primary">play_circle</span>
<span className="font-label text-xs uppercase tracking-widest">Preview Protocol</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-12 max-w-5xl mx-auto">
<div className="mb-24 text-center">
<h2 className="font-headline text-5xl mb-4">The Journey Inward</h2>
<div className="w-24 h-0.5 bg-primary mx-auto"></div>
</div>
<div className="space-y-32">

<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 font-serif text-5xl text-stone-200">01</div>
<div className="flex-[3]">
<h4 className="font-headline text-2xl mb-4">The Assessment</h4>
<p className="font-body text-on-surface-variant leading-loose serif-dropcap">
                            Before the first move, we analyze. A comprehensive digital intake covering metabolic history, orthopedic limitations, and psychological motivations. We don't just ask how much you lift; we ask why you strive.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-16 items-center">
<div className="flex-1 font-serif text-5xl text-stone-200">02</div>
<div className="flex-[3]">
<h4 className="font-headline text-2xl mb-4 text-right md:text-left">The Blueprint</h4>
<p className="font-body text-on-surface-variant leading-loose">
                            Our team of elite curators translates your data into a living schedule. Every workout is a chapter in your personal narrative of transformation, balanced perfectly between challenge and longevity.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 font-serif text-5xl text-stone-200">03</div>
<div className="flex-[3]">
<h4 className="font-headline text-2xl mb-4">The Evolution</h4>
<p className="font-body text-on-surface-variant leading-loose">
                            Fitness is not a destination. As you adapt, so does Alexandria. Continuous feedback loops ensure that your trajectory remains steep and your potential is never capped by static programming.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-lowest border-y border-stone-200/20">
<div className="max-w-4xl mx-auto px-12 text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-8">format_quote</span>
<blockquote className="font-headline text-3xl md:text-4xl leading-snug text-on-surface mb-12 italic">
                    "In an industry obsessed with trends, Alexandria stands as a monument to timeless principles and modern precision. It is the definitive tool for those who treat their body as their greatest work of art."
                </blockquote>
<cite className="not-italic flex flex-col items-center">
<span className="font-label text-sm uppercase tracking-widest text-on-surface">Julian Thorne</span>
<span className="font-body text-xs text-on-surface-variant mt-2">Founder, Thorne Athletic Studios — London</span>
</cite>
</div>
</section>

<section className="py-40 px-12 text-center max-w-4xl mx-auto">
<h2 className="font-headline text-5xl mb-8">Begin Your Curated Path</h2>
<p className="font-body text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
                Consultations are limited to ensure personalized attention for every member. Secure your place in the archive today.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<button className="bg-primary text-on-primary px-12 py-5 rounded-sm font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-colors">
                    Request Consultation
                </button>
<button className="text-on-surface-variant border border-outline-variant px-12 py-5 rounded-sm font-label text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                    View Membership
                </button>
</div>
</section>

</main>
        </div>
    );
}
