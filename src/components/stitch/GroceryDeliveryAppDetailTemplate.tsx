'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GroceryDeliveryAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Premium Grocery Presentation" className="w-full h-full object-cover" data-alt="Close-up of premium organic heirloom tomatoes and dark leafy greens in minimalist recycled craft paper packaging on a white marble surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnlNAd1dtMtTMJTqIGcAHBPTb4Di8sK4YwfHOaLn4EJowdUGbaEpgn7dMoeMvs042Dm3kAKkscCYATBGaF-_MbzeJaWLvXewK0n1g8Hk8JcmVJJOA1MEs12mEnZr0RhFi7Dn9-x92d2S0wJyLyx0_7ag6l2dKrKpjsZAclgs8i5PpR30j4xxz6iftX8t2MzL9wEnbtIqoG4ZzhWHxmdZwxPGmoaYO_DSNPr_Cx2eHRn_wtMvuw5DGoE8zOYBDKXyyMyrn7rjQoGpOq"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className="label-text text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block font-bold">Volume IV • The Retail Issue</span>
<h1 className="text-7xl md:text-8xl font-headline tracking-tighter leading-[1.05] text-on-surface mb-8">
                        Nourishment, <br/><span className="serif-italic font-normal">Curated.</span>
</h1>
<p className="text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-lg">
                        Elevating the daily ritual of sustenance through architecturally sound logistics and intuitive digital intelligence.
                    </p>
<div className="flex items-center space-x-6">
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-full font-label font-semibold text-sm tracking-widest uppercase transition-all hover:shadow-xl">
                            Explore Strategy
                        </button>
<button className="text-primary font-label font-bold text-sm tracking-widest uppercase flex items-center group">
                            Our Methodology 
                            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<span className="text-tertiary font-label text-xs uppercase tracking-widest block mb-4">Infrastructure</span>
<h2 className="text-5xl font-headline leading-tight mb-8">The Architecture of Freshness</h2>
<div className="space-y-8">
<div className="group">
<h3 className="text-xl font-bold font-headline mb-2 flex items-center">
<span className="text-primary-container mr-3">01.</span>
                                    Intelligent Inventory
                                </h3>
<p className="text-on-surface-variant font-body leading-relaxed pl-10 border-l border-outline-variant/30">
                                    Predictive analytics that synchronize seasonal harvests with localized demand, ensuring zero-waste cycles and peak nutritional density.
                                </p>
</div>
<div className="group">
<h3 className="text-xl font-bold font-headline mb-2 flex items-center">
<span className="text-primary-container mr-3">02.</span>
                                    Dark-Store Fulfillment
                                </h3>
<p className="text-on-surface-variant font-body leading-relaxed pl-10 border-l border-outline-variant/30">
                                    Automated micro-fulfillment centers optimized for speed without compromising the delicate handling of artisanal goods.
                                </p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="aspect-[16/10] bg-surface rounded-xl overflow-hidden shadow-2xl relative">
<img alt="Logistics Architecture" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" data-alt="Interior of a modern, clean micro-fulfillment center with organized shelves and soft lighting, reflecting high-end industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiTODmsU95PH_MFf9RNd_wN8x6btiellf9nucP0fj-ibhwBh_RkT0VAsKDULmH4_RARuTqc0J14FYcNjKOhFNQ95Eq3i03uidYIQFvjSls_1WG-1kNfdo1XGfzri1aIcuUJFNRrL78qm2a6Z1axrsgrXTOxf_nWo0lIp6_qjM2VQVGaaw478BTK_R4p1WlIVATARtt_vXThmdc76u5tquw_xDowAPle8q9d9rDfajhzTTEGCOcBm7HCopO2vVW5kI1iliK2kmwNQVI"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-label text-xs uppercase tracking-widest">Fig. 01 — Systemic Flow Analysis</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-5xl font-headline mb-6">Core Capabilities</h2>
<p className="text-on-surface-variant font-body text-lg">Precision engineering meets human-centric design in our suite of grocery-focused digital tools.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-surface-container rounded-2xl p-12 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6">checklist_rtl</span>
<h3 className="text-3xl font-headline mb-4">Smart Shopping Lists</h3>
<p className="text-on-surface-variant font-body max-w-md">Neural-link recipe integration and habitual purchase prediction create a seamless, one-tap reordering experience.</p>
</div>
<img alt="Smart List Concept" className="absolute bottom-[-10%] right-[-10%] w-1/2 opacity-20 group-hover:scale-110 transition-transform duration-700" data-alt="Artistic composition of a handwritten list next to a sleek modern smartphone showing a clean app interface for grocery shopping." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7yE9HnR27lWqWbS1QNxQHLn-RuBvfbwjqZIjAk4CNzfdfJSfPflMqvKXpQhs3Q_6TNk1oT07NjgkNyuGTBwdjeDwEwz36T6VKQapj97wc2H4IRYWuyFKYF9xFn_aR813L-drh-ofS-c3utf_Vy5aaga-gbYGek4eOATYN7_tIRShOmDzL17rierE9uz4uGqz7A1NwOSbxzflLN23HRebaQ7FDKjGvDPbfnnCBv2Zxz669bjsxtY0swZWDQkl3WUBvFj5U5ZjmhY6"/>
</div>

<div className="bg-primary-container text-white rounded-2xl p-12 flex flex-col justify-center">
<span className="material-symbols-outlined text-4xl mb-6">route</span>
<h3 className="text-3xl font-headline mb-4 text-white">Dynamic Delivery</h3>
<p className="font-body text-primary-fixed/80">Real-time routing algorithms that prioritize cold-chain integrity and minimize carbon footprint per mile.</p>
</div>

<div className="bg-surface-container-highest rounded-2xl p-12 flex flex-col md:col-span-3 lg:col-span-1">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6">psychiatry</span>
<h3 className="text-2xl font-headline mb-4">Traceability</h3>
<p className="text-on-surface-variant font-body mb-8">Every item tells a story. Complete farm-to-table visibility via encrypted ledger tracking.</p>
<div className="mt-auto pt-6 border-t border-outline-variant/30">
<a className="text-xs font-label font-bold uppercase tracking-widest text-primary flex items-center" href="#">
                                Learn More <span className="material-symbols-outlined text-sm ml-2">open_in_new</span>
</a>
</div>
</div>

<div className="md:col-span-2 bg-stone-900 text-stone-100 rounded-2xl p-12 relative overflow-hidden">
<div className="relative z-10 flex flex-col h-full justify-center">
<h3 className="text-4xl font-headline mb-6">The Future of <span className="serif-italic font-normal italic">Fulfillment</span></h3>
<p className="font-body text-stone-400 max-w-lg mb-8 text-lg">We build more than apps; we architect ecosystems where technology serves the most fundamental of human needs with dignity and grace.</p>
<button className="w-fit bg-stone-100 text-stone-900 px-8 py-3 rounded-full font-label font-bold text-xs uppercase tracking-widest">Whitepaper Download</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-screen-xl mx-auto px-8">
<div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
<div className="max-w-xl">
<span className="text-primary font-label text-xs uppercase tracking-widest block mb-4">Journey Map</span>
<h2 className="text-5xl font-headline">The Curated Basket</h2>
</div>
<p className="text-on-surface-variant font-body max-w-xs italic border-l-2 border-tertiary pl-6">
                        "Precision at every touchpoint, from the first search to the final delivery."
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-surface-container-highest">
<span className="text-2xl font-headline text-primary">01</span>
</div>
<h4 className="text-xl font-bold font-headline mb-4">Intelligent Discovery</h4>
<p className="text-on-surface-variant font-body text-sm leading-relaxed">Context-aware search that understands dietary nuances and seasonal availability in real-time.</p>
</div>
<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-surface-container-highest">
<span className="text-2xl font-headline text-primary">02</span>
</div>
<h4 className="text-xl font-bold font-headline mb-4">Precise Fulfillment</h4>
<p className="text-on-surface-variant font-body text-sm leading-relaxed">Artisanal packing protocols ensure that delicate produce is treated with the respect it deserves.</p>
</div>
<div className="relative z-10">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-surface-container-highest">
<span className="text-2xl font-headline text-primary">03</span>
</div>
<h4 className="text-xl font-bold font-headline mb-4">Doorstep Arrival</h4>
<p className="text-on-surface-variant font-body text-sm leading-relaxed">GPS-perfect drop-offs with photographic confirmation and thermal-state monitoring.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-100 overflow-hidden">
<div className="max-w-screen-xl mx-auto px-8 relative">
<span className="material-symbols-outlined text-8xl text-stone-300/40 absolute -top-10 -left-10 select-none">format_quote</span>
<div className="max-w-4xl mx-auto text-center">
<p className="text-4xl md:text-5xl font-headline leading-tight mb-12 text-stone-800">
                        "Our grocery brand now feels like a <span className="serif-italic font-normal">premium service</span>, not just a utility. Alexandria understood our vision for refinement."
                    </p>
<div className="flex flex-col items-center">
<img alt="Founder Portrait" className="w-20 h-20 rounded-full object-cover mb-4 grayscale" data-alt="Professional studio portrait of a visionary founder, soft cinematic lighting, monochrome finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNDLN1sKwOmg3UU-7uTjxRvvcCCYSqdYFlGvxtgWtalbiOZNa0-f1Dho10O_0u9CgYwcJxfZY1ZM5Rg2-Smz_joKoTIi4JG3vFHQ0iF4GEnQ174gaUEVyk6ROh1mAOdUd5jRVs3YFdq7EIHpNu_cLcIpJq4RuxZN_78l72GYtbaNNsUdBmN_QIcitne-GkkMOcn2mchzc5fYXDc8lQn_8vrAa8LWTh6-HNbcdzWs1ik2q5oX34zO3g5MFOqISNLP0nC1CueP47-2-x"/>
<span className="font-label font-bold text-sm tracking-widest uppercase text-primary">Founder of Freshly Curated</span>
<span className="text-stone-500 text-xs mt-1">Metropolitan Logistics Summit 2024</span>
</div>
</div>
</div>
</section>

<section className="py-40 bg-white relative">
<div className="max-w-screen-xl mx-auto px-8 text-center relative z-10">
<div className="inline-block px-4 py-1.5 bg-tertiary-fixed rounded-full text-on-tertiary-fixed font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                    Partnership Inquiry
                </div>
<h2 className="text-6xl md:text-7xl font-headline mb-10 tracking-tight">Curate Your Retail Future</h2>
<p className="text-on-surface-variant font-body text-xl max-w-2xl mx-auto mb-12">
                    Let’s discuss how we can transform your grocery logistics into a bespoke digital experience that resonates with the modern epicure.
                </p>
<button className="bg-stone-900 text-stone-100 px-12 py-5 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all duration-300">
                    Request a Strategy Session
                </button>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
</section>

</main>
        </div>
    );
}
