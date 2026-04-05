'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EscooterAppDetailTemplate() {
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
<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover opacity-20 grayscale mix-blend-multiply" data-alt="Modern minimalist electric scooter parked on a clean urban sidewalk in morning light with glass buildings in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuwnRZxZRCoEGDbr9GasPoBkV08SPUoGv8ZEEGqZ-FcrSW94ZayTML2Pd7OqOffObmjxFTVKlDbSC01foDmR9Xpnbmbu_a8ux33ulHzS0npqLKtUGExRikVkK37Y3D2GzxPK44lcilRS6ASlFANq_dRBQZGq6tTltBbGz9qyEvIDscPVdVChxrpNbKnHOFA0vAuamD9GVVeOH7NS9F7R3uuQeNZnYhaLykPmACgUC3mQ8c9z83cGFvKsB8U8QTYcsvQ9giMgNJwb3_"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-8">
<span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container/20 text-tertiary font-label text-xs uppercase tracking-[0.2em] mb-8 font-bold">
                        Most Popular Case Study
                    </span>
<h1 className="font-headline text-6xl md:text-8xl leading-tight text-on-surface mb-8 tracking-tighter">
                        Sustainable Mobility, <br/>
<span className="serif-italic font-light">Curated.</span>
</h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-12">
                        Building market-leading micro-mobility platforms with real-time hardware integration, designed for the modern urban landscape.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                            View Platform Architecture
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl mb-6">Technological Excellence</h2>
<p className="font-body text-lg text-on-surface-variant">Precision engineering meets editorial design. Our core systems are built for reliability and aesthetic integration into city life.</p>
</div>
<div className="font-label text-xs uppercase tracking-widest text-secondary font-bold pb-2 border-b border-outline-variant/30">
                        Capabilities 01 — 04
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between group transition-all hover:bg-white">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-8" data-icon="grid_view">grid_view</span>
<h3 className="font-headline text-3xl mb-4">Fleet Management</h3>
<p className="font-body text-on-surface-variant leading-relaxed max-w-md">Proprietary dashboard providing real-time telemetry, battery health optimization, and predictive maintenance schedules for thousands of active units.</p>
</div>
<div className="mt-12 overflow-hidden rounded-lg">
<img alt="" className="w-full h-64 object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="Clean minimal data visualization dashboard on a tablet showing sleek dark mode charts and scooter location pins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbWvgKZ6sxCD3-fvOn2de1DvtCO8CqgJpNAu1GfmkvCKFUI0949PGEbvewneGIaKJVgArlREBhn8WsE4pfnuOybH49e2yfPmafUQgDKnfeK5DzudNG8Fh2w-li_DeyGMYx6JFzvH1jd3g_nsW29ZRieRVEc0_wfmiqH54EhAJHGk5yohXWzfNYF3GlavhtPsudBgGHnYJvz6EYG15WJdFQ-mPu-v3lF5KgHGDmHIR4A8bMzX2dd8ezWZYml4nLvu0EtJO-WDMm2yC7"/>
</div>
</div>

<div className="md:col-span-5 bg-primary-container text-on-primary-container rounded-xl p-10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-3xl mb-8" data-icon="fenced_fields">fence</span>
<h3 className="font-headline text-3xl mb-4">Dynamic Parking Zones</h3>
<p className="font-body opacity-80 leading-relaxed">Geofenced precision infrastructure that harmonizes fleet density with municipal urban planning requirements.</p>
</div>
<div className="mt-8 border-t border-white/20 pt-8">
<ul className="space-y-4 font-label text-sm uppercase tracking-widest font-semibold">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Sub-meter Precision</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Real-time Geo-fencing</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Multi-Tier Incentives</li>
</ul>
</div>
</div>

<div className="md:col-span-5 bg-surface-dim rounded-xl p-10 flex flex-col">
<span className="material-symbols-outlined text-tertiary text-3xl mb-8" data-icon="payments">payments</span>
<h3 className="font-headline text-3xl mb-4">Multi-Payment Integration</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-6">Seamless checkout experience supporting global digital wallets, regional banking protocols, and subscription models.</p>
<div className="mt-auto flex -space-x-4">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-surface-dim">
<span className="material-symbols-outlined text-lg" data-icon="credit_card">credit_card</span>
</div>
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-surface-dim">
<span className="material-symbols-outlined text-lg" data-icon="account_balance">account_balance</span>
</div>
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-2 border-surface-dim">
<span className="material-symbols-outlined text-lg" data-icon="contactless">contactless</span>
</div>
</div>
</div>

<div className="md:col-span-7 bg-surface-container-highest rounded-xl p-10 overflow-hidden relative group">
<div className="relative z-10">
<span className="material-symbols-outlined text-primary text-3xl mb-8" data-icon="solar_power">solar_power</span>
<h3 className="font-headline text-3xl mb-4">Solar-Powered Station Management</h3>
<p className="font-body text-on-surface-variant leading-relaxed max-w-sm">Off-grid charging hubs that utilize renewable energy to sustain urban micro-mobility cycles without city grid dependency.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
<img alt="" className="w-full h-full object-cover" data-alt="Solar panels reflecting blue sky in a clean architectural pattern with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD-mfbnyb5WwmBAxkq1F1kLyp3yaj7Ikh6y_sijufY9bsXbNny7Y93x8lJrmAOK-YdUbJMdodzZ_MySI7gSfbck6OSXe0t2pFUbHh06ofdIpOpVSyuRNO0UJsgdqq_9JV8vLEEMntFvTAxjJpnwFC2QByb_yk5njBw7LeFQN8oa7Ixe3xVT_m_dcUjjrPx4uHr9kaJQh5g-HyuyS1taFaY2Mt6QqnMZhr0lmAbjjg16rBmJ-puwvcg6G3qVMig7o8izb35WhyNnYF_"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="text-center mb-24">
<span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary font-bold mb-6 block">Seamless Interaction</span>
<h2 className="font-headline text-5xl md:text-6xl">The User Journey</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">

<div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-outline-variant/20 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-bright flex items-center justify-center mb-10 shadow-sm border border-outline-variant/10 group hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors" data-icon="qr_code_scanner">qr_code_scanner</span>
</div>
<h4 className="font-headline text-2xl mb-4 italic">01. Scan</h4>
<p className="font-body text-on-surface-variant leading-relaxed px-6">Instant recognition technology unlocks the device through a refined mobile interface in under 1.2 seconds.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-bright flex items-center justify-center mb-10 shadow-sm border border-outline-variant/10 group hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors" data-icon="electric_scooter">electric_scooter</span>
</div>
<h4 className="font-headline text-2xl mb-4 italic">02. Ride</h4>
<p className="font-body text-on-surface-variant leading-relaxed px-6">Premium hardware paired with intelligent speed curves provides a silent, sophisticated transit experience.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-bright flex items-center justify-center mb-10 shadow-sm border border-outline-variant/10 group hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors" data-icon="p_button_box">buttons</span>
</div>
<h4 className="font-headline text-2xl mb-4 italic">03. Park</h4>
<p className="font-body text-on-surface-variant leading-relaxed px-6">Precision geofencing ensures orderly parking, maintaining the aesthetic and functional flow of city sidewalks.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-primary overflow-hidden relative">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
</div>
<div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
<span className="material-symbols-outlined text-6xl text-primary-fixed mb-8 opacity-50" data-icon="format_quote">format_quote</span>
<blockquote className="font-headline text-3xl md:text-5xl text-white leading-tight mb-12">
                    "Alexandria's editorial approach to our UI didn't just look better; it built immediate trust. We've seen a <span className="serif-italic">42% increase</span> in citizen adoption within the first quarter due to the clarity and premium feel of the platform."
                </blockquote>
<div className="flex flex-col items-center">
<div className="font-label text-sm uppercase tracking-widest text-primary-fixed font-bold mb-1">Director of Innovation</div>
<div className="font-serif text-white/70 italic text-xl">City Transit Authority, London</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
<div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
<div>
<h2 className="font-headline text-4xl md:text-5xl mb-4">Ready to Curate Your <br/>City's Future?</h2>
<p className="font-body text-on-surface-variant text-lg">Partner with us to build micro-mobility that feels like a service, not just a tool.</p>
</div>
<div className="flex gap-6">
<button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform">
                        Request Case Study
                    </button>
<button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:bg-surface-dim transition-colors">
                        View Hardware Spec
                    </button>
</div>
</div>
</section>

</main>
        </div>
    );
}
