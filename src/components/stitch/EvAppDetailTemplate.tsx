'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EvAppDetailTemplate() {
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


<section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<span className="label-text text-primary font-semibold tracking-[0.2em] text-xs uppercase">E-Mobility Intelligence</span>
<h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-on-surface">The Architecture of Sustainable Motion</h1>
<p className="text-lg text-secondary max-w-lg leading-relaxed font-body">Alexandria curates high-performance digital ecosystems for the next generation of electric vehicles, merging aesthetic precision with logistical excellence.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl">Build Your EV Platform</button>
<button className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-surface-variant flex items-center gap-2">
                            Explore Capabilities <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors"></div>
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Futuristic minimalist electric vehicle charging station in a clean architectural setting with soft blue ambient lighting and sustainable glass textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHtxpvLgfVozQGY2jGaNhUx0FOrqbluJCGXr65zQ4hawOs2WXkQwgBHpvD9S44_JT0vRpnuHUqavgamzEBHJX4_LEC1zXnuJM-jazqjtVhWQ2PhCGSR3pJ-a-9XsroawbeQxEvnc04REw8B7Dkq84AUFsY2_sF6KEsC-HYb3rR3Oh9hholem-YG88DbTK5_aSFAvee0AWRMogcNU34H-a4uWoWqcbCMYkiOE2OxgGM8brOCAoKYhZHJBMncjTJTTsydQZSRbHbNet"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<span className="label-text text-tertiary font-bold tracking-[0.15em] text-xs uppercase mb-4 block">Core Infrastructure</span>
<h2 className="text-4xl md:text-5xl font-bold">Uncompromising Utility for a Seamless Grid</h2>
</div>
<p className="text-secondary font-body max-w-sm">Every feature is designed to reduce friction between the driver, the vehicle, and the global energy network.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-surface-container-low p-10 group hover:bg-primary transition-all duration-500 rounded-lg">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl mb-6 block" >schedule</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">Smart Charge Scheduling</h3>
<p className="text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">Dynamic algorithms that optimize charging windows based on grid load and peak energy rates.</p>
</div>

<div className="bg-surface-container p-10 group hover:bg-primary transition-all duration-500 rounded-lg">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl mb-6 block" >map</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">Live Charging Point Map</h3>
<p className="text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">Real-time telemetry from global charging networks with predictive availability metrics.</p>
</div>

<div className="bg-surface-container-low p-10 group hover:bg-primary transition-all duration-500 rounded-lg">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl mb-6 block" >analytics</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">Battery Health Analytics</h3>
<p className="text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">Deep-dive diagnostics into cell degradation, thermal efficiency, and lifecycle forecasting.</p>
</div>

<div className="bg-surface-container p-10 group hover:bg-primary transition-all duration-500 rounded-lg">
<span className="material-symbols-outlined text-primary group-hover:text-white text-4xl mb-6 block" >settings_suggest</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">Fleet Management Tools</h3>
<p className="text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">Enterprise-grade dashboard for multi-vehicle tracking, energy auditing, and operator insights.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-dim relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-bold mb-6">Powering the Future</h2>
<p className="text-secondary max-w-xl mx-auto">A three-stage methodology designed to transform raw mobility data into sophisticated user experiences.</p>
</div>
<div className="grid md:grid-cols-3 gap-16 relative">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-2xl mb-8 shadow-xl shadow-primary/20">1</div>
<h3 className="text-2xl font-bold mb-4">Network Integration</h3>
<p className="text-secondary font-body leading-relaxed">Connecting siloed energy data streams into a unified API architecture that scales with global demand.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-2xl mb-8 shadow-xl shadow-primary/20">2</div>
<h3 className="text-2xl font-bold mb-4">Intuitive UX for Drivers</h3>
<p className="text-secondary font-body leading-relaxed">Designing editorial-quality interfaces that humanize complex data, making EV ownership effortless.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-2xl mb-8 shadow-xl shadow-primary/20">3</div>
<h3 className="text-2xl font-bold mb-4">Advanced Data Insights</h3>
<p className="text-secondary font-body leading-relaxed">Applying machine learning to predict driver behavior and energy needs before they arise.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-lowest">
<div className="max-w-5xl mx-auto px-6">
<div className="relative p-12 md:p-20 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] rounded-xl border-l-4 border-primary">
<span className="material-symbols-outlined text-tertiary-container text-6xl opacity-50 absolute top-10 right-10">format_quote</span>
<blockquote className="text-2xl md:text-3xl font-headline font-semibold text-on-surface leading-tight mb-10">
                        "The platform developed by Alexandria didn't just digitize our fleet; it revolutionized how we perceive energy. Their editorial approach to UI has made sustainability intuitive for our entire workforce."
                    </blockquote>
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a visionary startup founder in a modern clean office setting with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbYlFYuD5sMi5zVnP5oVIXsYxYr2wbjL5INdzSM6oX8JTNyyVnIIv7WA8gyDf6yYzHnEUnaDHKRbYjGlNDzGzPtFwLwVlxkXoyTWmIv0SLhX14zIzCOKzm6f7RxRuY3u8OPE1E69bV5gli41ttHeqh5OuQozN1FSzqPxWucpLcIcmN3mRjupcNXe8jE5s_KGnJlgBonEpmXh2hJrKFtm9fAmuo0t_iMWdP4jgGrbHaYsXYBERiV0hytk3wIx665lfNE1JKMEc1uXm8"/>
</div>
<div>
<p className="font-bold text-on-surface">Julian Thorne</p>
<p className="label-text text-xs uppercase tracking-widest text-secondary">Founder, EcoDrive Dynamics</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-primary-container rounded-[2rem] p-12 md:p-24 flex flex-col items-center text-center text-on-primary-container relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-[#00419d] opacity-50"></div>
<div className="relative z-10 space-y-8">
<h2 className="text-4xl md:text-6xl font-bold">Ready to lead the transition?</h2>
<p className="text-xl text-on-primary-container/80 max-w-2xl mx-auto font-body">Partner with Alexandria to architect your industry-leading electric vehicle experience.</p>
<button className="bg-white text-primary hover:bg-surface-bright px-10 py-5 rounded-full font-bold text-lg transition-transform active:scale-95 shadow-2xl">
                            Build Your EV Platform
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
