'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FoodDeliveryAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
<div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-screen-2xl mx-auto px-12 gap-12 py-24">
<div className="lg:col-span-7 flex flex-col justify-center z-10">
<span className="font-label text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-6">Sector Report 04: Culinary Logistics</span>
<h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[1.05] tracking-tighter mb-8">
                        Refining the <span className="italic text-primary">Quick-Service</span> Economy
                    </h1>
<p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
                        How Alexandria partnered with global hospitality leaders to architect a delivery ecosystem that preserves brand integrity from kitchen to doorstep.
                    </p>
<div className="flex items-center gap-8">
<button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                            View Case Study
                        </button>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-10 h-[1px] bg-outline-variant group-hover:w-16 group-hover:bg-primary transition-all duration-500"></span>
<span className="font-label text-xs uppercase tracking-widest">Scroll to explore</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] w-full bg-surface-dim rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="dramatic high-contrast studio photograph of an artisanal plated dish with microgreens and reduction sauce under soft spotlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFAJhffm8d1X1E9n4dX7KheQSPP3XqmQ50C5LiYHwFIpVcjdQw9BqFOtSrPmePtH2dmYWfIgR4WAHKVdOKluLItJndNQg33D08KOKDvnM5bApZhNRDCEZhylsjeQ2-fmdIHxf4LNoc_qUJdnbTi_QCnhWVqF2FVzGWZaAPuMEuU11bjO0kk44rY7cQTaQ5W02FhWeiBJSJD_REpXXlPsun4jOavImcBDldYKtFyNn2Zz4cl46KTrhnsuRDFgBl3DMBSw00-oxLt_Ti"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/40 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-12 bg-white p-8 max-w-xs shadow-2xl rounded-lg hidden xl:block">
<p className="font-headline text-lg leading-snug mb-4">"The delivery gap was once a compromise; now it is our competitive advantage."</p>
<div className="h-[1px] w-12 bg-tertiary mb-3"></div>
<p className="font-label text-[10px] uppercase tracking-widest text-secondary">Operational Excellence</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-5xl text-on-surface mb-6 tracking-tight">The Architecture of Delivery</h2>
<p className="font-body text-lg text-on-surface-variant">We dismantle the frictions of modern delivery through three interconnected operational disciplines.</p>
</div>
<div className="font-label text-xs text-secondary-fixed-dim tracking-widest uppercase">01 — Strategy</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 overflow-hidden rounded-xl">

<div className="bg-surface-container-lowest p-12 hover:bg-surface-container-low transition-colors duration-500">
<span className="material-symbols-outlined text-primary mb-8 text-4xl" >restaurant</span>
<h3 className="font-headline text-2xl mb-6">Restaurant Ecosystem Integration</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-8">
                            Unifying POS, inventory, and kitchen management into a singular flow that eliminates order friction and maximizes throughput during peak volatility.
                        </p>
<ul className="space-y-4 font-label text-[11px] uppercase tracking-widest text-secondary">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> POS Native Sync</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Dynamic Menu Control</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Automated Waste Auditing</li>
</ul>
</div>

<div className="bg-surface-container-lowest p-12 hover:bg-surface-container-low transition-colors duration-500">
<span className="material-symbols-outlined text-primary mb-8 text-4xl" >local_shipping</span>
<h3 className="font-headline text-2xl mb-6">Logistical Optimization</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-8">
                            Proprietary routing algorithms that consider humidity, temperature, and traffic patterns to ensure the culinary intent remains intact.
                        </p>
<ul className="space-y-4 font-label text-[11px] uppercase tracking-widest text-secondary">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Hyper-Local Routing</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Cold-Chain Integrity</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Predictive Demand Map</li>
</ul>
</div>

<div className="bg-surface-container-lowest p-12 hover:bg-surface-container-low transition-colors duration-500">
<span className="material-symbols-outlined text-primary mb-8 text-4xl" >star</span>
<h3 className="font-headline text-2xl mb-6">Premium User Experiences</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-8">
                            Interface design that mirrors the sophistication of a Michelin-starred service, prioritizing clarity and aesthetic delight.
                        </p>
<ul className="space-y-4 font-label text-[11px] uppercase tracking-widest text-secondary">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Curated Visual Menus</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Concierge Support</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Fidelity Order Tracking</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-12">
<div className="mb-20 text-center">
<h2 className="font-headline text-5xl mb-4">The Seamless Narrative</h2>
<p className="font-label text-sm uppercase tracking-widest text-primary font-bold">From Curation to Consumption</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[800px]">

<div className="lg:col-span-8 relative group overflow-hidden rounded-xl bg-surface-dim">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="top-down artistic view of a designer smartphone interface showing high-end food photography on a clean white tablecloth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTfZhNIEDlTzVCBVRoD0Zy17HJHSJIVIgkQRcur6ziIKYQB_AsKXRxN-SY9zsAdFe7LtXi9mc7R60RScACbDgQwFzrciFhcbiix2nDa4CCoelHMRx9Zwr4ghFPc_PFtdmeBclkoH_wrq8Tedq16Mou8BislfE9v5zB02LNIRqJvIPNrNBsf3BpbZ6DUlLE-i7lMRlMvbNNtmP0P_YIB6ivpL-cayk7AfTNbecKhBROJAGaNMVVsdRIBybME03_-gbVjLvI9ANbbBE2"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
<span className="font-label text-xs text-tertiary-fixed uppercase tracking-widest mb-2">Phase I</span>
<h4 className="font-headline text-3xl text-white mb-4">Intelligent Curation</h4>
<p className="text-stone-300 font-body max-w-lg">Using behavioral analytics to surface the right flavors at the right time, reducing cognitive load for the premium diner.</p>
</div>
</div>

<div className="lg:col-span-4 bg-primary p-12 flex flex-col justify-between rounded-xl">
<div>
<span className="font-label text-xs text-primary-fixed uppercase tracking-widest mb-4 block">Phase II</span>
<h4 className="font-headline text-3xl text-on-primary mb-6">Frictionless Orchestration</h4>
<p className="text-on-primary-container/80 font-body leading-relaxed">
                                Our backend logic manages the complex handshake between multi-point logistics and kitchen readiness, ensuring the meal is only prepped when the courier is within the precision arrival window.
                            </p>
</div>
<div className="flex flex-col gap-6">
<div className="bg-primary-container/30 p-6 rounded-lg backdrop-blur-sm">
<p className="font-headline text-lg text-white mb-1">0.4s</p>
<p className="font-label text-[10px] text-primary-fixed uppercase tracking-tighter">Avg. Logic Processing Speed</p>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-stone-100 p-12 rounded-xl border border-stone-200/50">
<span className="font-label text-xs text-primary uppercase tracking-widest mb-4 block">Phase III</span>
<h4 className="font-headline text-3xl text-on-background mb-6">The Handover</h4>
<p className="font-body text-on-surface-variant leading-relaxed">
                             A delivery experience that mirrors the white-glove standards of the venue, focusing on presentation and punctuality.
                         </p>
</div>

<div className="lg:col-span-8 relative group overflow-hidden rounded-xl bg-surface-dim">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="blurred urban lights of a city at night with a focused view of a high-tech delivery vehicle moving swiftly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8sRq7I-C06ot7aW-YrBzi4RyH701ZW_n-ZB3qxuO1kPhCGEECyU-U0-gumawtp_YZtFfgzN3uPeFUEl3L9VCMJq76ud9rwHtLCDs4ZfaiptMbKLgeTgp626SemIx7D0kZQQqJMa6m0B-gjcrdFAqo6NLG35XGHMqyeUJwWWQ-Pw98NMykDd1jB43q88R2uorRMuxSwtJzM7rrD0BJ1W1OWPer4WzI-gkhJxuOiTqb8e1L8i11uGXBLvyfd1zlPfypwQLvocbFW-hJ"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-md px-10 py-6 rounded-lg shadow-xl text-center">
<p className="font-headline text-2xl text-on-surface tracking-tight">Preserving Integrity</p>
<p className="font-label text-[10px] text-tertiary tracking-[0.3em] uppercase mt-1">End-to-End Excellence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
<div className="absolute right-0 top-0 opacity-10 pointer-events-none">
<span className="font-serif text-[30rem] leading-none select-none">“</span>
</div>
<div className="max-w-screen-xl mx-auto px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<div className="w-20 h-20 bg-primary-container rounded-full mb-12 flex items-center justify-center">
<span className="material-symbols-outlined text-white text-3xl" >format_quote</span>
</div>
<blockquote className="font-headline text-4xl md:text-5xl leading-tight mb-12 tracking-tight">
                            "Alexandria didn't just build us an app; they architected a new <span className="text-tertiary-fixed">revenue stream</span> that actually honors our culinary heritage. They understand that luxury is defined by the absence of friction."
                        </blockquote>
<div>
<p className="font-serif text-2xl font-bold tracking-tight">Julian Vercetti</p>
<p className="font-label text-sm uppercase tracking-widest text-stone-500 mt-2">CEO, Vercetti Restaurant Group</p>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-full border border-stone-800 p-8">
<div className="w-full h-full rounded-full bg-stone-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" data-alt="portrait of a distinguished middle-aged man in a charcoal suit, looking thoughtfully off-camera in a modern architectural space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSj1riA_65hPQ5u6MGbq-qUAfxFtRx3oJxKjbtP8fg0sSL3K6s-I_8Jl7_pGyPFCpqwvz1N86LP-xnE33dqWIOVFK9kfHZCednCoWT1zutG-WFKy7N40TaeP8JSmEHIVFBrkp57VyoZWPV2RzhtBDy7U50rug7plQPdgkEZl4tC0i1p6PNFTrSH7tn830jgY6E_8duRjvh0_6MFBHqxN50pA8CXZ0lqQ_ciMmRGKmSwNXGfezY4eStOAihBLwAG4f05VdEvpnexNK"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-surface-container-lowest">
<div className="max-w-4xl mx-auto px-12 text-center">
<span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-10 block">Direct Engagement</span>
<h2 className="font-headline text-6xl text-on-surface mb-12 tracking-tighter">Your ecosystem, redefined.</h2>
<p className="font-body text-xl text-on-surface-variant mb-16 leading-relaxed">
                    Schedule a private consultation with our culinary logistics specialists to explore how Alexandria can optimize your high-end delivery operations.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="w-full sm:w-auto bg-primary text-on-primary px-12 py-5 rounded-lg font-label text-xs uppercase tracking-[0.2em] hover:shadow-xl transition-all">
                        Request Consultation
                    </button>
<button className="w-full sm:w-auto border-b border-stone-300 py-4 px-8 font-label text-xs uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-all">
                        Download Whitepaper
                    </button>
</div>
</div>
</section>

</main>
        </div>
    );
}
