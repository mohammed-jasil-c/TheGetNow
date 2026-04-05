'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HomeServicesAppDetailTemplate() {
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


<section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0">
<img alt="Modern Home Interior" className="w-full h-full object-cover grayscale-[20%] opacity-90" data-alt="serene and minimalist modern home interior with warm natural lighting reflecting off clean marble floors and soft linen textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqY93EkDraOedSbZi-EfbHIMTOA4BvwyHyN_3yPP7m4E0_5Aca3zuqt7_bE94C1f1SNLwrbMOAEiKBfd7gq-etqOW1HuhHJczZiTcY87qpwwQoq68F3g5Tn3cjZFEZ30Q8GxKP1_JWXUXXVqPg31Xf7_kzjkHgpXsr5SNtlpMUzXjeukVHYQedAiwzMbmSNDGkClgPYLZF1Nk-IucRB6BGt-GUHf-cz6P7GGSKGmBRfJCJdGY0FCgsk2eumXGTrx_WmFs_R2aleqkv"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className="label-anchor text-xs uppercase tracking-[0.3em] text-white/80 mb-6 block">The Curated Environment</span>
<h1 className="font-headline text-6xl md:text-8xl text-white leading-[1.1] mb-8 font-bold tracking-tight">The Sanctuary, Managed.</h1>
<p className="body-anchor text-xl text-stone-200 leading-relaxed font-light mb-10 max-w-lg">
                        Preserving the architectural integrity and daily harmony of your private residence through rigorous oversight and professional mastery.
                    </p>
<div className="flex items-center space-x-4">
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-label uppercase tracking-widest text-xs hover:opacity-90 transition-all">
                            Explore Services
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-5">
<h2 className="font-headline text-4xl text-on-surface mb-8 leading-tight font-bold">A Marketplace of Trust</h2>
<div className="h-1 w-12 bg-tertiary mb-8"></div>
<p className="body-anchor text-on-surface-variant text-lg leading-relaxed mb-6">
                            We bridge the gap between discerning homeowners and a vetted guild of service professionals. Every technician, artisan, and specialist is selected through a 24-point verification process.
                        </p>
<p className="body-anchor text-on-surface-variant text-lg leading-relaxed italic border-l-2 border-stone-200 pl-6 py-2">
                            Excellence is not an act, but a habit. We curate only the practitioners who embody this philosophy.
                        </p>
</div>
<div className="md:col-span-7 grid grid-cols-2 gap-4">
<div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-xl">
<img className="w-full h-full object-cover" data-alt="professional house cleaning specialist wearing a uniform in a bright modern kitchen setting with high-end appliances" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCubXkgHtQtzdxqMaB5D20V_JJ-JxR_Wb7aWULfRnzN1SSFGkGM9NtqJYJzoEJxw4CDtCJ4eu4HsNF4JxN8o_xtUQgX_WIffUUEum-w8jSxrqrNz1XQjuVoLqA-dXtXqe9tsRkOS8eAWLeMIFGrKvgfB798t1YxD5UHzErkrJAjq7TDeK6iGNSAzRp4jktT6POn-Vdn-CDhcGe-s9FaXfGsD0i9vTgD9UckIqpQkfMSdGQEgdFUNY573ht0n6z8rYxQh4NyojJRGUVr"/>
</div>
<div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-xl mt-12">
<img className="w-full h-full object-cover" data-alt="close up of a professional electrician working on a minimalist circuit board with precision tools and focused lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATnDy73otGPmgENZSACmz7WqMgCcNVgTzfJeI2g8W_gDKcPVguq3tpyErZwsd-txk4fnIdVCXhguBxtv_nN-tvLzxpXH1Zjs32uUX3cakqcBw-JI-_KfCCeueNGhN6qQpkFmQujevp1vls6is0dhBoib51HmsolY-Ab0JiJBCbgNlpyKCXluX-0Osw1NLR6XDqdvFILZ3K57tTKEvhiHXsbnp5VwvuQWElNe3boM09E_ZSMgH38syNTvl9kR9gME2Rw-vZ-9bsOs3I"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="mb-16 text-center">
<span className="label-anchor text-xs uppercase tracking-[0.3em] text-tertiary mb-4 block">Systemic Integrity</span>
<h2 className="font-headline text-5xl text-on-surface font-bold">Operational Excellence</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group hover:bg-primary transition-all duration-500">
<div>
<span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6">calendar_month</span>
<h3 className="font-headline text-3xl mb-4 group-hover:text-white transition-colors">Seamless Booking</h3>
<p className="body-anchor text-on-surface-variant group-hover:text-stone-200 leading-relaxed">
                                A frictionless interface designed for the rapid deployment of resources. Align your schedule with our top-tier professionals in seconds, not hours.
                            </p>
</div>
<div className="mt-8 border-t border-stone-100 pt-8 group-hover:border-white/20">
<span className="label-anchor text-xs uppercase tracking-widest group-hover:text-white transition-colors">Learn about availability →</span>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-highest p-10 rounded-xl flex items-center space-x-8">
<div className="flex-1">
<h3 className="font-headline text-2xl mb-2">Real-Time Tracking</h3>
<p className="body-anchor text-sm text-on-surface-variant leading-relaxed">
                                Complete transparency from transit to task completion. Monitor progress via our live curator dashboard.
                            </p>
</div>
<div className="w-32 h-32 bg-surface-container-low rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-tertiary" >location_on</span>
</div>
</div>
<div className="md:col-span-2 bg-stone-900 p-10 rounded-xl flex flex-col justify-center">
<h3 className="font-headline text-2xl mb-2 text-white">Integrated Insurance</h3>
<p className="body-anchor text-sm text-stone-400 leading-relaxed mb-6">
                            Tier-one protection protocols for every engagement. We assume the risk so you don't have to.
                        </p>
<div className="flex space-x-2">
<div className="h-1 flex-1 bg-tertiary"></div>
<div className="h-1 flex-1 bg-stone-700"></div>
<div className="h-1 flex-1 bg-stone-700"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<h2 className="font-headline text-5xl text-on-surface font-bold leading-tight">Restoring the Peace</h2>
<p className="body-anchor text-on-surface-variant mt-6 text-lg">Our methodology follows a precise sequence to ensure the sanctity of your environment is never compromised.</p>
</div>
<div className="text-right">
<span className="font-headline italic text-8xl text-surface-container-highest select-none">Method</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-stone-200">
<div className="pt-12 pr-12 pb-12 group hover:bg-stone-50 transition-colors cursor-default border-r border-stone-200">
<span className="font-label text-stone-300 text-4xl mb-6 block">01</span>
<h4 className="font-headline text-2xl mb-4 text-on-surface">Curated Matching</h4>
<p className="body-anchor text-on-surface-variant leading-relaxed">Our algorithmic engine pairs your specific spatial requirements with a specialist’s unique mastery profile.</p>
</div>
<div className="pt-12 px-12 pb-12 group hover:bg-stone-50 transition-colors cursor-default border-r border-stone-200">
<span className="font-label text-stone-300 text-4xl mb-6 block">02</span>
<h4 className="font-headline text-2xl mb-4 text-on-surface">Professional Execution</h4>
<p className="body-anchor text-on-surface-variant leading-relaxed">Discreet, thorough, and precise. Our professionals operate with a focus on silence and technical excellence.</p>
</div>
<div className="pt-12 pl-12 pb-12 group hover:bg-stone-50 transition-colors cursor-default">
<span className="font-label text-stone-300 text-4xl mb-6 block">03</span>
<h4 className="font-headline text-2xl mb-4 text-on-surface">Quality Assurance</h4>
<p className="body-anchor text-on-surface-variant leading-relaxed">A post-visit audit ensures that every metric of service was met with the Alexandria standard of care.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-dim">
<div className="max-w-4xl mx-auto px-8 text-center">
<span className="material-symbols-outlined text-tertiary text-5xl mb-8" >format_quote</span>
<blockquote className="font-headline text-3xl md:text-4xl text-on-surface italic leading-snug mb-10">
                    "The peace of mind this platform provides our clients is unprecedented. It isn't just about repairs; it's about the stewardship of one's most intimate space."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-stone-300">
<img className="w-full h-full object-cover" data-alt="portrait of a professional executive man in his 50s with grey hair and a warm confident expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSKIUM_iBx-cIPaBNjES7IjbXbhxkdOuNQX_tdYFw8pSA84sLQ5RUyKz-v0jTx9hClOJjSk12VNrPMvD9Cffkb-QQKusWfevhiiBQCe1ANTAEOl4_1wbe3y1PvADis7Ov9gJzmtynJaeJERQCruBWxubC02yDesNSGgo6C2KcGcDlE1pVRpmzV_yslYek6I6juZJz0ZCrNMQF_a4DUVugzSWRtRMbm2Zo3-0l6AQGkGXVZ70vlY20eKrahABtCSTRD_bM-_NAvK3QP"/>
</div>
<cite className="not-italic">
<span className="block font-label text-sm uppercase tracking-widest text-on-surface font-bold">CEO of Elite Home Care</span>
<span className="block body-anchor text-xs text-on-surface-variant mt-1">Founding Partner &amp; Strategic Curator</span>
</cite>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-primary-fixed-dim/20 z-0"></div>
<div className="max-w-screen-xl mx-auto px-8 relative z-10 text-center">
<h2 className="font-headline text-5xl md:text-6xl text-on-background font-bold mb-8">Build Your Service Ecosystem</h2>
<p className="body-anchor text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
                    Institutional-grade home management is now available for the modern estate. Begin your consultation today.
                </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<button className="bg-primary text-white px-12 py-5 rounded-lg font-label uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                        Inquiry
                    </button>
<button className="bg-transparent border border-outline px-12 py-5 rounded-lg font-label uppercase tracking-widest text-sm hover:bg-surface-variant transition-all">
                        View Portfolio
                    </button>
</div>
</div>
</section>

</main>
        </div>
    );
}
