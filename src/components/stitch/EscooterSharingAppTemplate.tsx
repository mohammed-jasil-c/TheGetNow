'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EscooterSharingAppTemplate() {
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


<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<span className="inline-block py-1 px-4 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold tracking-widest mb-6">URBAN MOBILITY 2.0</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
                        Glide through the <span className="text-primary">City Pulse</span>.
                    </h1>
<p className="text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                        Experience the next generation of eco-friendly micro-mobility. Effortless, sustainable, and connected travel for the modern urban architect.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:shadow-xl hover:shadow-primary/30">
                            Download Now
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-white/50 backdrop-blur-md border border-outline-variant/20 px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
                            View Fleet
                        </button>
</div>
</div>
<div className="relative lg:h-[800px] flex items-center justify-center">

<div className="absolute -right-20 lg:-right-40 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl"></div>
<img alt="modern electric scooter parked on a clean metropolitan sidewalk at sunrise with soft urban bokeh background" className="relative z-10 w-full max-w-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 rounded-xl drop-shadow-2xl" data-alt="sleek modern electric scooter parked on a sun-drenched urban sidewalk with tall buildings and soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWNB_sLWPJ9FN8kCdZZIdj1Ml2KkpBFGthHvrHv1de-9Eutq6GtaD94JOiuOgGqTL243eUjTPkdj_l7Wb7ZCjRbsjAltn-PsjJJJXJ1cpGBQGSnG-moMSvEB6RCMQxAj3_9K0a2__GHr8HBRdCn1Sg1_GEBeG4rUdzV34z_UPfu1629T6-EJKAYnX9-8RD7Zy3f_MFAdGJEI0wJ4m1xqry_1o4QMWuqJrrow4T5MybOA8c68kX4qq83bP4DMWrfthPCsbP99ngkus9"/>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Engineered for Precision</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Our technology stack ensures a seamless ride from the moment you unlock to your final destination.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between overflow-hidden relative group">
<div className="z-10">
<div className="w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">location_on</span>
</div>
<h3 className="text-2xl font-bold mb-4">Precision GPS Tracking</h3>
<p className="text-on-surface-variant max-w-sm">Never lose your ride. Real-time satellite positioning with meter-level accuracy across the entire city grid.</p>
</div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
<div className="mt-12 rounded-xl overflow-hidden shadow-lg">
<img alt="app interface showing dark mode map with blue glowing path and scooter icons" className="w-full h-48 object-cover" data-location="London" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKBMbY2oBH8TnWdzpf96sfQTWbVqdFVZNXalbTShLsf26ltoIiIg9MBr5cdIHgpE4Dh8j-bRYrhn76aXQr9GgpPRAom9s2s2AkitX8FEsID_NjEq971AVkV9dx0TNL_Zcb9d99WzClQGGMTgZojHYSBU5W7ia2iZGcqlN2IfFRw6gyXcSOant2foggEsbhcQjZlMdlbB2960TsbmyldkbLif1mURrfDGTTpzps4cuHuT9efemLiN-Sf7yCzUeSQ6PWykVnzSxXz-6y"/>
</div>
</div>

<div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col items-center text-center justify-center">
<div className="w-20 h-20 bg-primary-container rounded-3xl flex items-center justify-center mb-8 rotate-12">
<span className="material-symbols-outlined text-on-primary-container text-4xl">qr_code_scanner</span>
</div>
<h3 className="text-2xl font-bold mb-4">Instant QR Unlock</h3>
<p className="opacity-80">Scan and ride in under 2 seconds. Our proprietary hardware handshake ensures zero latency.</p>
</div>

<div className="bg-surface-container p-10 rounded-xl border border-outline-variant/10">
<div className="w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary text-3xl">account_balance_wallet</span>
</div>
<h3 className="text-2xl font-bold mb-4">Seamless Wallet</h3>
<p className="text-on-surface-variant mb-8">Integrated Apple Pay, Google Pay, and crypto-ready architecture for global roaming.</p>
<div className="space-y-3">
<div className="h-12 bg-white/50 rounded-lg flex items-center px-4 justify-between">
<span className="text-sm font-medium">Balance</span>
<span className="font-bold">$42.50</span>
</div>
<div className="h-12 bg-white/50 rounded-lg flex items-center px-4 justify-between">
<span className="text-sm font-medium">Monthly Savings</span>
<span className="text-tertiary font-bold">-$12.00</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-inverse-surface text-surface p-10 rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h3 className="text-3xl font-bold mb-4">One App. Total Control.</h3>
<p className="text-inverse-on-surface mb-8">The Stratos mobile interface is designed for high-glare environments, ensuring clarity during peak daylight rides.</p>
<div className="flex gap-4">
<div className="bg-white/10 p-3 rounded-xl flex items-center gap-3">
<span className="material-symbols-outlined">ios</span>
<div className="text-left"><p className="text-[10px] opacity-60 leading-none">Download on the</p><p className="text-xs font-bold leading-none">App Store</p></div>
</div>
<div className="bg-white/10 p-3 rounded-xl flex items-center gap-3">
<span className="material-symbols-outlined">play_arrow</span>
<div className="text-left"><p className="text-[10px] opacity-60 leading-none">Get it on</p><p className="text-xs font-bold leading-none">Google Play</p></div>
</div>
</div>
</div>
<div className="relative w-full max-w-[240px]">
<img alt="smartphone showing high-end mobile app interface with vibrant dashboard and map" className="rounded-[2.5rem] shadow-2xl border-4 border-white/10" data-alt="high-fidelity smartphone mockup showing a modern mobile app with dark mode interface, vibrant accents, and smooth typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfvMEtCBzTJ7OE80vJE6RCqpYnKHcyQYtLjLCbdotsvI9zflxi-Fh7giAZaeS-nKKyOlLZf5x5W5Q2bqk1Hh1TLEf4y9LvxyvyWv8ROlOY_zC1TAQ4zzkZpnWDZA6ldQJdp-klc6on-6xmtIoWaF0S8ra2xhwXlkeb7R__EFUncFisCRMCnX3SDZKNHKKABDcLSjq2bW8ir7M6in12XcxihHiQmLUo610jRTCj_5ktJLcPzNH7962BXJgkkJexqkSkvzfu2Au6sGHp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
<div className="lg:col-span-2">
<span className="text-primary font-bold font-label tracking-widest text-sm">B2B ENTERPRISE</span>
<h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">Master your Fleet with Stratos Console.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary text-sm">check</span>
</div>
<div>
<p className="font-bold">Real-time Telemetry</p>
<p className="text-sm text-on-surface-variant">Monitor battery health and hardware status across 10,000+ units simultaneously.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary text-sm">check</span>
</div>
<div>
<p className="font-bold">AI Predictive Maintenance</p>
<p className="text-sm text-on-surface-variant">Identify potential mechanical failures before they happen using machine learning.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary text-sm">check</span>
</div>
<div>
<p className="font-bold">Dynamic Geofencing</p>
<p className="text-sm text-on-surface-variant">Deploy virtual boundaries and speed limiters in high-traffic pedestrian zones.</p>
</div>
</li>
</ul>
</div>
<div className="lg:col-span-3 relative">

<div className="glass-panel p-8 rounded-xl shadow-2xl border border-white relative z-20">
<div className="flex justify-between items-center mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-error"></div>
<div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
<div className="w-3 h-3 rounded-full bg-surface-container-highest"></div>
</div>
<div className="text-xs font-bold text-on-surface-variant">DASHBOARD v4.2</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 bg-surface rounded-lg">
<p className="text-xs text-on-surface-variant mb-1">Active Rides</p>
<p className="text-2xl font-bold">1,284</p>
<div className="text-[10px] text-tertiary font-bold">↑ 14%</div>
</div>
<div className="p-4 bg-surface rounded-lg">
<p className="text-xs text-on-surface-variant mb-1">Avg. Battery</p>
<p className="text-2xl font-bold">78%</p>
<div className="text-[10px] text-on-surface-variant font-bold">Optimal</div>
</div>
<div className="p-4 bg-surface rounded-lg">
<p className="text-xs text-on-surface-variant mb-1">CO2 Saved</p>
<p className="text-2xl font-bold text-tertiary">2.4t</p>
<div className="text-[10px] text-tertiary font-bold">Lifetime</div>
</div>
</div>
<div className="h-48 bg-surface rounded-lg flex items-end p-4 gap-2">
<div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-primary/30 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-primary/40 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-primary/50 rounded-t-sm h-[95%]"></div>
<div className="w-full bg-primary/40 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-primary/30 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-primary/20 rounded-t-sm h-[45%]"></div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-full h-full bg-primary rounded-xl z-10 opacity-10 rotate-3"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-inverse-surface text-surface">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-16 tracking-tight">Our Footprint is Green.</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<p className="text-5xl font-extrabold text-tertiary-fixed mb-2">50+</p>
<p className="text-sm font-label uppercase tracking-widest text-inverse-on-surface">Cities Worldwide</p>
</div>
<div>
<p className="text-5xl font-extrabold text-tertiary-fixed mb-2">12M+</p>
<p className="text-sm font-label uppercase tracking-widest text-inverse-on-surface">Rides Completed</p>
</div>
<div>
<p className="text-5xl font-extrabold text-tertiary-fixed mb-2">800T</p>
<p className="text-sm font-label uppercase tracking-widest text-inverse-on-surface">Carbon Offset</p>
</div>
<div>
<p className="text-5xl font-extrabold text-tertiary-fixed mb-2">99%</p>
<p className="text-sm font-label uppercase tracking-widest text-inverse-on-surface">Uptime Reliability</p>
</div>
</div>
<div className="mt-24 relative rounded-xl overflow-hidden h-[400px]">
<img alt="world map with glowing data points and blue lines connecting major urban hubs" className="w-full h-full object-cover opacity-50" data-alt="stylized world map illustration with blue and green illuminated nodes connecting major global cities on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQtQ3RAi-24f6DsnsbePjamdRvdLmcJRcaqvsBlihR47FYsL97PNkMR8jx84tdbRdbrHrWBjyJK5jKlRW5HN98ixlzYRsK4kdAXBIJSTExjEZ66dCcJH9MLLEN91DLexY9p_FcfVFDoUQeIAU76IAlrxLgXUDg66gl6QuZ3jSpkZHipjbZdkeRaSvri6_uUGIDyjOUO99skYVR4u7uEGsA-udf3LsQpOdw8Kdf7uuMc74qAI6h_1g0S9VRtp0SG4PWmFlDvnhGCgMU"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="max-w-xl px-6">
<h3 className="text-3xl font-bold mb-6">Building a sustainable future, one ride at a time.</h3>
<button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                Partner with Us
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="bg-primary p-12 md:p-20 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-on-primary font-headline text-4xl md:text-5xl font-bold mb-8">Ready to revolutionize your commute?</h2>
<p className="text-on-primary/80 mb-10 text-lg">Join 2 million users and start riding today. First 10 minutes are on us.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<input className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-64" placeholder="Enter phone number" type="text"/>
<button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-surface-container-low transition-colors">
                                Get App Link
                            </button>
</div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
</div>
</div>
</section>

</main>
        </div>
    );
}
