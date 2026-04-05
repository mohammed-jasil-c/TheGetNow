'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BikeTaxiAppDetailTemplate() {
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
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
<div className="lg:col-span-6 z-10">
<span className="label-text text-tertiary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Industry Analysis</span>
<h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-on-surface mb-8">Redefining Urban Transit via Two Wheels</h1>
<p className="text-lg text-secondary leading-relaxed max-w-xl mb-10 font-light">
                        The Bike Taxi App represents a paradigm shift in hyper-local mobility. We dissect the architecture of efficiency, security, and global scalability in the next generation of transport.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                            Request a Free Consultation
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-2xl">
<img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="a sleek black modern motorcycle parked on a minimalist cobblestone street in a historic European city at twilight with soft golden street lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWwLUu327Z2JW3C1tACw0IHWDflWr3NLnF0BxM69J1QiSFOMIMefL11ZPaXhK6vo-rWmy7RyS_1OAKl3d9WhbxhDqNxR-nnTPphFUJuRZjeSpzlDTQFriHULSgFUReXQeeyzI6KTYa7Q3TFSb7zZ2O3xA8K8tLlUV3u1gCut5X64L2IFXHH-KCclVCIZ3fILkHD5AIE7PZdnaZIs_trQRl3hWi6OH-vSxXb73KPQ2OGixieBVFkjl-qxQ2mosSpmwcrc_m05EPGXPu"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-surface-container-high p-8 backdrop-blur-xl hidden md:block max-w-xs border-l-4 border-primary">
<p className="font-headline italic text-lg text-on-surface">"Efficiency isn't just about speed; it's about the precision of the path taken."</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-4xl md:text-5xl font-bold mb-4">Functional Sovereignty</h2>
<p className="text-secondary label-text tracking-wide uppercase text-sm">Key Architectural Pillars</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">

<div className="md:col-span-2 md:row-span-2 bg-surface-container-low p-10 flex flex-col justify-between group hover:bg-primary-container transition-colors duration-500 rounded-xl">
<div>
<span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6" data-icon="location_on" >location_on</span>
<h3 className="text-3xl font-bold mb-4 group-hover:text-white">Real-Time Tracking</h3>
<p className="text-secondary group-hover:text-white/80 leading-relaxed font-light">Precision telemetry powered by sub-meter accuracy GPS protocols, ensuring every maneuver is accounted for in the digital twin of the city.</p>
</div>
<div className="mt-12 overflow-hidden rounded-lg aspect-video">
<img className="w-full h-full object-cover" data-alt="abstract top-down view of a city map with glowing neon blue digital route lines and moving light particles representing traffic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhj95DLbz1SgYwAodbbisO0GP09ptQCpgeOpqd2OZ3f9IwETHw3o2krA3PnADKT58pp8qWKg_4_Z_iayWYivzRxYqsaSOLI1BDufcYY0s6mOyYxgt2SQHUgv8ibyihUX-jXvUWX98MTVDPCCrzjbjpInGHsrB8LJhcC3ELfc6O5p5xxQ89xxPGZT1lh_lkg0Zt_j4eVFTT4yDRAMBR8CpMZd0_nuPcDwDOuYtFIx8Stf0PSDxw79MA-uMltZQdXCdpIFIVPQ2AqxNn"/>
</div>
</div>

<div className="md:col-span-2 bg-surface-container-low p-10 flex flex-col justify-between group hover:bg-surface-dim transition-colors rounded-xl">
<div className="flex items-start justify-between">
<div className="max-w-[70%]">
<h3 className="text-2xl font-bold mb-2">Secure In-App Payments</h3>
<p className="text-secondary text-sm leading-relaxed">End-to-end encrypted ledger processing for frictionless financial flows.</p>
</div>
<span className="material-symbols-outlined text-3xl text-tertiary" data-icon="encrypted">encrypted</span>
</div>
</div>

<div className="md:col-span-1 bg-surface-container-low p-10 flex flex-col group hover:bg-primary transition-colors rounded-xl">
<span className="material-symbols-outlined text-3xl text-primary group-hover:text-white mb-4" data-icon="trending_up">trending_up</span>
<h3 className="text-xl font-bold mb-2 group-hover:text-white">Dynamic Pricing</h3>
<p className="text-secondary text-xs group-hover:text-white/70">Algorithmic equilibrium between demand surges and rider availability.</p>
</div>

<div className="md:col-span-1 bg-surface-container-low p-10 flex flex-col group hover:bg-surface-container-highest transition-colors rounded-xl">
<span className="material-symbols-outlined text-3xl text-primary mb-4" data-icon="translate">translate</span>
<h3 className="text-xl font-bold mb-2">Multi-Language Support</h3>
<p className="text-secondary text-xs">Global accessibility with localized linguistic interfaces for universal adoption.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="max-w-2xl">
<span className="label-text text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">Process Design</span>
<h2 className="text-4xl md:text-5xl font-bold leading-tight">The User Journey</h2>
</div>
<p className="text-secondary font-light max-w-sm mb-2">A streamlined choreography from intent to destination, designed for the speed of modern life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mb-8 border border-surface-container">
<span className="text-2xl font-serif text-primary">01</span>
</div>
<h3 className="text-2xl font-bold mb-4">Book a Ride</h3>
<p className="text-secondary leading-relaxed font-light">With a single tap, the nearest navigator is dispatched. AI predicts pickup times with 98% accuracy.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mb-8 border border-surface-container">
<span className="text-2xl font-serif text-primary">02</span>
</div>
<h3 className="text-2xl font-bold mb-4">Safe Commute</h3>
<p className="text-secondary leading-relaxed font-light">Verified riders and safety-first protocols ensure a secure transit through city arteries.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mb-8 border border-surface-container">
<span className="text-2xl font-serif text-primary">03</span>
</div>
<h3 className="text-2xl font-bold mb-4">Arrival &amp; Feedback</h3>
<p className="text-secondary leading-relaxed font-light">Seamless arrival followed by qualitative analysis to maintain our gold-standard ecosystem.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-dim/30">
<div className="max-w-5xl mx-auto px-6 text-center">
<span className="material-symbols-outlined text-primary-fixed-dim text-6xl mb-8" data-icon="format_quote" >format_quote</span>
<blockquote className="text-3xl md:text-4xl font-headline italic leading-snug mb-12 text-on-surface">
                    "Alexandria's insight into the bike taxi sector transformed our fleet management. Their emphasis on editorial clarity and data-driven process is unmatched in the mobility space."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg">
<img className="w-full h-full object-cover" data-alt="headshot of a confident male executive with short dark hair and a tailored charcoal suit against a clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOY-LDhSO_Tkqyz69dzmi3vJOT_NTqXYfixwb4CXjTEkPs254S31j-7sYcjKkL6LdZS7Pb0oShWDuYxUuKD-mp1mKzcTH2nKzKEOEOrgQFpa5lNSWAaIJC5ToAsHb4pGPd5Jnm13gNPP6DLs5f7RWxrb-86ulxozWsPmls4hklfGSjvN4UV5fB7qUg_WhlF-pt7bdbKDgINnI4o05e_gk01UhOmzMLJFtBQxC4_N6zy2sq58hqw29eeJn2XabsONBaFAlXObdPAaGU"/>
</div>
<p className="font-bold text-on-surface">Julian Vasseur</p>
<p className="label-text text-xs text-secondary uppercase tracking-widest mt-1">Chief Operations Officer, Global Mobility Group</p>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-primary p-12 md:p-20 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20 transition-transform duration-1000 group-hover:translate-x-10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to curate your mobility future?</h2>
<p className="text-on-primary-container/80 text-lg">Partner with our experts to deploy world-class transit solutions tailored to your urban landscape.</p>
</div>
<button className="bg-white text-primary px-10 py-5 rounded-sm font-bold text-lg hover:bg-surface-container transition-colors shadow-2xl">
                            Request a Free Consultation
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
