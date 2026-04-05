'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TravelAppDevelopmentTemplate() {
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


<section className="relative min-h-[921px] flex flex-col md:flex-row overflow-hidden bg-surface">
<div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 md:py-24 z-10">
<span className="text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Travel Innovation Hub</span>
<h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] text-on-surface mb-8 tracking-tighter">
                    Travel App <br/><span className="text-editorial-gradient">Development</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-md mb-10 leading-relaxed">
                    Crafting immersive digital journeys. We build the engines that power the next generation of global exploration.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">Start Your Journey</button>
<div className="flex items-center gap-3 px-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-white" data-alt="portrait of a professional woman in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFO2MoryAQ5n9uIxw387Dy_XD1DXD1pTgEsrcTPQTWDCbWAumwqXtjr95NMawaam0Pb0blU1B9kgJk3u5hFYp4BmSsBlNG9Z_jVwzJ3vau2fFvuEnj3q-rIR4FJEQlmVw2OI2rR0b49otJfwgO7K_1wYneM5xlI19IUqtuRFZVfDk_YjWhrjS2FAjS-VtxGlcsV5yDrinr_MvTOUfjak3_2ZNLVXJhgS4RMw1046h3bP1EFFVRRAo6BBoZXd68HVgkMdmboBHv2npu"/>
<img className="w-10 h-10 rounded-full border-2 border-white" data-alt="portrait of a young male software engineer smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2NCwR7WNhBd1s3EbzsktgOG5evr6x9aYSP4DoSB8qeSjhYw_sTGPs4C7vhVEsiTF7RyX3or-_VzA-iwzBHzcT4w5LWjVtUadkPCNoJDeKsXxGotwAO1c4JRkg8nb7TkGCrrUAXAH77q6QJasmqOKG-gtgzFLriGVoePa32BuY2RLqDwK8TmpR2EvZP0N-1n1b_z9RJ0cKXsCz0kB9pwhb60Nl5O4C0OQeMV4_6UbUsOOKmmDS5V1ghZLRk7FeBJaMRKSqVWUV5K9"/>
</div>
<span className="text-sm font-medium text-on-surface-variant">Trusted by 50+ Global Brands</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="lone traveler silhouette sitting on a cliff watching a vibrant pink and orange sunset over a tropical island bay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3g376MGSpVfbaTFj6kkjxXdxGAu9e9gCD1gKbHrsQTMyS5fVPzYUhTXwVNHFlN_hg5xu6kMJYJqwQZNmA3g7jgnMJbtbZ_HByZcRY6iwRcLUrItw34diBG7B5_zEW41DkgC0jY0OGz3nyfmx0sqc19w9swT2DnxgibQQXSVo6SN9GPfpvlip8kxn100EGgfYP2dR98ux8kUqJIctVZDMMVn4eJGmRXju_MgCtgcLmBI_at7isKxXD-ONrXrZbtXm7ZVA3rpWIFiSa"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent hidden md:block"></div>

<div className="absolute bottom-12 left-12 right-12 bg-white/20 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-2xl hidden lg:block">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="explore">explore</span>
</div>
<div>
<p className="text-white text-xs font-medium">Next Destination</p>
<p className="text-white font-bold">Santorini, Greece</p>
</div>
</div>
<span className="bg-white/40 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Active Now</span>
</div>
<div className="h-1 bg-white/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-white"></div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all gap-8">
<div className="flex items-center gap-2 font-headline font-bold text-2xl text-slate-400">Expedia</div>
<div className="flex items-center gap-2 font-headline font-bold text-2xl text-slate-400">Amadeus</div>
<div className="flex items-center gap-2 font-headline font-bold text-2xl text-slate-400">SkyScanner</div>
<div className="flex items-center gap-2 font-headline font-bold text-2xl text-slate-400">Booking.com</div>
<div className="flex items-center gap-2 font-headline font-bold text-2xl text-slate-400">Airbnb</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl font-headline font-extrabold mb-4">Core Ecosystem</h2>
<div className="w-20 h-1.5 bg-primary rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-8 bg-primary-container rounded-xl p-10 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-white/20 text-9xl" data-icon="flight_takeoff">flight_takeoff</span>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-headline font-bold text-white mb-4">Unified Booking Engine</h3>
<p className="text-white/80 max-w-md">Seamlessly integrate flight, hotel, and car rental APIs into a single, high-conversion interface designed for modern travelers.</p>
</div>
</div>
<div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col group hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-primary group-hover:text-white mb-6 text-4xl" data-icon="auto_awesome">auto_awesome</span>
<h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-white">AI Travel Assistant</h3>
<p className="text-on-surface-variant group-hover:text-white/80">Hyper-personalized recommendations powered by machine learning and natural language processing.</p>
</div>
<div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col group hover:bg-primary transition-colors duration-500">
<span className="material-symbols-outlined text-primary group-hover:text-white mb-6 text-4xl" data-icon="map">map</span>
<h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-white">Offline Smart Maps</h3>
<p className="text-on-surface-variant group-hover:text-white/80">Never lose your way. Vector-based maps that function beautifully without cellular data.</p>
</div>
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-10 flex flex-col justify-center relative overflow-hidden group">
<div className="flex items-center gap-8">
<div className="flex-1">
<h3 className="text-3xl font-headline font-bold mb-4">Itinerary Planner</h3>
<p className="text-on-surface-variant">Dynamic drag-and-drop planning with real-time sync across all devices and collaborative sharing options.</p>
</div>
<div className="hidden lg:block w-48 h-48 bg-surface-container-low rounded-full flex items-center justify-center border-8 border-surface">
<span className="material-symbols-outlined text-primary text-6xl" data-icon="calendar_month">calendar_month</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-on-background text-surface py-24 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 scale-105" data-alt="a high-end mobile app interface displayed on a tablet screen showcasing scenic boat ride in a crystal clear lake surrounded by mountains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGVQxPX4oSsf35pd6n0ePTpEoS3zkolXZ474f4Gd2hN2tb2TOddF6g0OITeW1ls3Ln7OA3imq1WDmUGSh5Xs3fsrkgVQcUaEoPHI3Y2JZPBPphfnsy5EvnNbJdg4rYHgIsJ974rAZgjI5foFbmbFVigSqSIwIP7FYrY03UJQ2Kvj7Sl7cH9RIAFs-8fLNYaSRp3BnwBKA8hzcEmaxfwy2hrq4fghW0-yhI3ohPzloRQR-eGN-phgg0qdvrrVHAdpf0tK7g0qMeB1Pm"/>
<div className="absolute -bottom-8 -right-8 bg-primary p-12 rounded-lg hidden md:block">
<p className="text-5xl font-extrabold font-headline leading-none">1M+</p>
<p className="text-sm font-label tracking-widest uppercase mt-2">Active Users</p>
</div>
</div>
<div>
<span className="text-primary-container font-bold tracking-widest uppercase text-xs mb-4 block">Case Study: Wanderlust Platform</span>
<h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 leading-tight">Scale Without Boundaries.</h2>
<p className="text-surface-variant text-lg mb-10 leading-relaxed">
                        We developed a comprehensive travel ecosystem that scaled from 10k to over 1 million active monthly users within 18 months. Our focus was on extreme performance, 99.9% uptime for API integrations, and a world-class UI.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle">check_circle</span>
<span>35% increase in hotel conversion rates</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle">check_circle</span>
<span>Global localized support for 24 languages</span>
</li>
</ul>
<button className="border border-outline-variant/30 px-8 py-3 rounded-full font-bold hover:bg-surface hover:text-on-background transition-colors">Read Full Case Study</button>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl font-headline font-extrabold mb-4">Immersive Visuals</h2>
<p className="text-on-surface-variant max-w-md">Our apps aren't just tools; they are portals to the world's most beautiful destinations.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 group">
                    View Portfolio <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="relative overflow-hidden rounded-xl group cursor-pointer">
<img className="w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="a colorful street in an italian coastal village with vibrant houses overlooking the mediterranean sea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5A-as_ehfBKMn7vtFVq0ppS8QTfdDqAOwSI71RgD0K-vHJzXXpiBS4qxb5vMn33IQXDdL6UzXoZd1jWyME0jlUd4QRiI6Jj062Utkyc0K1U8OGLCdxR1nn_zl4LHPhwZWleg4pH3a32Q_b37ruOI9mJlsHqQ67B4obaFYf6aZkhqItEB9GLOxRRbxaC15-kovwBwL05nMLZwPsd09BLwKjJ3i0MrzKjkw_CBe2HOmCk1I3I2wZQESSpmdzM_BEX_c_EhL2nTYg5IQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
<h4 className="text-white font-bold text-xl">Cinque Terre, Italy</h4>
<p className="text-white/80 text-sm">Luxury Stay Interface</p>
</div>
</div>
<div className="relative overflow-hidden rounded-xl group cursor-pointer">
<img className="w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="jagged snow-capped mountain peaks reflecting in a pristine alpine lake during twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmYtCCRm8U2wbu0R1cLu5btFLXc5Y9u_q63w8FR9GBqzAHgcE_Gi5CIzxc_0XbvSX1a17hmeI6_6qoTMuxKRHiY-2omxebGjSBQZdGvqL9Ht3Q9eAN6tG0lD-UbWURAUKgW2yjTSLtItq5Re1l7VmFkUtEYYxk5SVaWvJWmJVaKHakBzraqR4hUV2GfgsymGs3dJkd6SNqwAZZvSh_KoMRVqIHESu4pppHu2Gq_Dbs0V-BVPPw1Op0JbhozJ0rbfgwq0oiZ69VFpte"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
<h4 className="text-white font-bold text-xl">Banff, Canada</h4>
<p className="text-white/80 text-sm">Outdoor Adventure Module</p>
</div>
</div>
<div className="relative overflow-hidden rounded-xl group cursor-pointer">
<img className="w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="the majestic taj mahal reflected in the calm water channel during a hazy sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5XX48SKNGIExy0JWRyve0wnmq4f781lzzASIk5bEH1qKRo9Z8T9ir82kMAwUm_ubtY3aEcDTWH3bYwCC5KxtY0akuLvkZltG4cPHRuzbYjFWBjBHcQPDDREYJauFvy6r1pOJg08-Ai5LY3nWrDlZ-TDaeMdDzNpD-4PFaMZ0zJjhnex7UflkIVnhwH9gZBH0q5F7gt0NjphqfU81Zvsc9QnLOvFaM1uUe3r8smCONrVz651f_ZK_w1m6ShzqmhV6XsTSKJKrtEpZt"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
<h4 className="text-white font-bold text-xl">Agra, India</h4>
<p className="text-white/80 text-sm">Cultural Experience Engine</p>
</div>
</div>
<div className="relative overflow-hidden rounded-xl group cursor-pointer">
<img className="w-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="dramatic view of Yosemite valley with towering granite cliffs and lush green forest floor under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAUxLdOe6m32eKbxtkVtToauPyxoPKjH7xbCScA1GWu8vGhpqE72xqOfcMIT_LU-8DPgpmfHlxpH5zNX-Tdth_DSKpZynG2_-EXucYOivCAE_2KtLNUStWMPwATfWqn2hPVKPO6eSYjm-NDouOjw_YACjw5FAvQxlyCa6T4OQ9In-rBvC4Nr-qk3QkNbLnfGwMnqMPikN_y1SDUPMYkKhqohmEVw47dfBsBJQl9S81oPyCX7Xd-3Lmo3Ppn8a2H26CMNvysiWpWI4W"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
<h4 className="text-white font-bold text-xl">Yosemite, USA</h4>
<p className="text-white/80 text-sm">Dynamic Itinerary Visuals</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-4xl mx-auto px-6 bg-surface-container-lowest p-12 md:p-16 rounded-xl shadow-2xl shadow-on-background/5 border border-outline-variant/10">
<div className="text-center mb-12">
<h2 className="text-4xl font-headline font-extrabold mb-4">Start Your Project</h2>
<p className="text-on-surface-variant">Ready to revolutionize travel? Let's build the future together.</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface ml-1">Full Name</label>
<input className="w-full bg-surface-container-low border-outline-variant/15 focus:border-primary focus:ring-0 rounded-sm p-4 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface ml-1">Email Address</label>
<input className="w-full bg-surface-container-low border-outline-variant/15 focus:border-primary focus:ring-0 rounded-sm p-4 transition-all" placeholder="john@agency.com" type="email"/>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-sm font-bold text-on-surface ml-1">Your Vision</label>
<textarea className="w-full bg-surface-container-low border-outline-variant/15 focus:border-primary focus:ring-0 rounded-sm p-4 transition-all" placeholder="Tell us about your travel app concept..." rows={4}></textarea>
</div>
<div className="md:col-span-2">
<button className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-container transition-all flex items-center justify-center gap-3">
                            Launch Project <span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
</button>
</div>
</form>
</div>
</section>

</main>
        </div>
    );
}
