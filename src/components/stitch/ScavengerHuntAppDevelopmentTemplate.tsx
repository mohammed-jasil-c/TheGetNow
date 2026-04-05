'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ScavengerHuntAppDevelopmentTemplate() {
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


<section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 z-10">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold text-sm mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Bespoke App Solutions
                    </span>
<h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[0.9] tracking-tighter mb-8 text-on-background">
                        Scavenger Hunt <br/>
<span className="text-primary italic">App Development</span>
</h1>
<p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                        Transforming urban spaces into interactive playgrounds through cutting-edge AR and GPS technology.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold editorial-shadow hover:bg-primary-container transition-all">Start Your Hunt</button>
<button className="bg-surface-container-low text-on-background px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-surface-container-high">View Case Studies</button>
</div>
</div>
<div className="lg:col-span-5 relative h-full min-h-[500px]">
<div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-3 translate-x-4"></div>
<img alt="Exploration" className="w-full h-[600px] object-cover rounded-xl editorial-shadow relative z-0" data-alt="A group of diverse friends laughing and looking at a smartphone together in a vibrant European city square at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtQXa1Xe4A-Fb_YteP21vE3DbuxZ3VBrd2MmIk1HtE4mkEtJ-nod0Mo4MceR4-uoaHLW2XvHX6m14SMA4kp25IcUXGOdXvY1kKA1iX8xiOnp89EAH_E-gt76Xhv0QlH4e2IjUiteQt2_m-OAwvyclg_fxs9YTAZiuC89YM9Pz1Rdd-49NEW86khtZ6cNM4bfNm9UJ7xxKQbIBeAg97r7I4E29BGPZG7M95YzAoxqoWxIKpeD1lYAydOuaFUwwBTJCRNLgegZzxcjsZ"/>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Technology Core</h2>
<p className="text-on-surface-variant">Built for performance, scalability, and seamless user experiences.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-lg editorial-shadow flex flex-col justify-between">
<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">developer_mode_tv</span>
</div>
<div>
<h3 className="text-2xl font-bold mb-2">React Native</h3>
<p className="text-on-surface-variant">Native performance with a unified codebase for iOS and Android deployment.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow">
<div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-error text-3xl">local_fire_department</span>
</div>
<h3 className="text-2xl font-bold mb-2">Firebase</h3>
<p className="text-on-surface-variant">Real-time database sync for instant leaderboard updates.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow">
<div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-container text-3xl">map</span>
</div>
<h3 className="text-2xl font-bold mb-2">Google Maps</h3>
<p className="text-on-surface-variant">High-precision GPS tracking and geofencing.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface overflow-hidden">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
<div className="relative">
<img alt="GPS Tracking" className="rounded-xl shadow-2xl z-10 relative" data-alt="Close up of a smartphone screen showing a detailed 3D city map with colorful pins and a glowing GPS path" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbaOm6ercmmuY2Vn0HqY97xKZxXHAA_CnXWakoMAW0nlkhdk4cEiUSkaqucFFvSThZ3gI6oT-hT5DBynIWIP71V55NSBTqOh8A9W_lW105P5_T9HJxlilvAxuXIqR3PBm0lPJYDD4l6frMbW8RdN5q9pVA6HJsakwJiMa0KDVDSg7C3ZGh8bbDw6wp5JUmQm0z3VXFEO2rwXL-frpq9lyH90omWJRVUWSpXHsG1s_YZNRYjt1nVzdzl53rspJCyhUt26-PEQAIOIpn"/>
<div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-bold font-headline mb-8 leading-tight">Hyper-Precision <br/><span className="text-primary">GPS Tracking</span></h3>
<p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                            Navigate the urban jungle with confidence. Our geofencing technology ensures tasks only activate when players are within literal inches of the target location.
                        </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-lg font-semibold">
<span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                                Real-time Location Syncing
                            </li>
<li className="flex items-center gap-4 text-lg font-semibold">
<span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                                Offline Map Caching
                            </li>
<li className="flex items-center gap-4 text-lg font-semibold">
<span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                                Dynamic Geofence Radius
                            </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
<div className="order-2 lg:order-1">
<h3 className="text-4xl md:text-5xl font-bold font-headline mb-8 leading-tight">Immersive <br/><span className="text-primary">AR Clues</span></h3>
<p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                            Blend digital challenges with the physical world. Use Augmented Reality to project clues onto historic landmarks or reveal hidden treasure chests in mid-air.
                        </p>
<div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
<p className="italic text-on-surface">"The AR clues completely changed the dynamic of our city tours. It feels like magic."</p>
</div>
</div>
<div className="relative order-1 lg:order-2">
<img alt="AR Clues" className="rounded-xl shadow-2xl z-10 relative" data-alt="Person holding a smartphone showing an augmented reality interface with glowing digital symbols overlaid on a real-world museum artifact" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD5yM7czPgmJFn1WILkL6PAbMCEfXhlGPunjr3OeENv_UIGNa2qrtSpFyfMQDykDrcHj_O-3CniBTVXmmKqDgiWOzFGNmxGPr5dLzMgOfpyIyjQ1A-2hvzg1C6MD02MrjhM9U1E6RZe-5snhKD9E4GRrUU57tayBpxEq-ynEj2pJpcDegkoVQxNuE87ZHQWVm2mGproOBWpa9oAgbb9mENZqsXC8sJjeYhQgD7xnzLEb0hvZrfGWoI51gYOtnAMhfGhhzN-ipggxQU"/>
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="relative">
<img alt="Branding" className="rounded-xl shadow-2xl z-10 relative" data-alt="Modern corporate office interior with teams collaborating on tablets, with a soft daylight focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcVXz37jntJx1SutVVfBhFPr5kPUZozzdqsj0Ta9yC5AaJpH4XtMfNhOdld-5xrhgya5gWWybrSyPAc1pxDUEHVApFDeDVYxs5z8nd45VrO8gTgbaZVXo-5cNetqLQ_TZxiLBKLURYHrcO-dshG3-PCSk5pcTYElJ65lorx28A4013p0Ps1iLSEuNGJqyrCuWbWRQf_-CVFEtDBdvTRy4R6JTzfZsI_zzh4cgTS6vIwnnen7o0geCrHTz4cuSYgt9ZtKCbnDYDdRKL"/>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-bold font-headline mb-8 leading-tight">White-Label <br/><span className="text-primary">Custom Branding</span></h3>
<p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                            Your brand, your hunt. Fully customize every pixel of the interface to match your corporate identity, from custom colors to branded icons and splash screens.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col items-center p-6 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-4xl mb-4 text-primary">palette</span>
<span className="font-bold">UI Styling</span>
</div>
<div className="flex flex-col items-center p-6 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-4xl mb-4 text-primary">verified</span>
<span className="font-bold">Custom Assets</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-on-background text-surface overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<img alt="Team Building" className="w-full h-full object-cover" data-alt="High angle shot of a large group of 500 people in matching blue shirts gathered in a circular formation in a sunny outdoor park" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEQ8dTCho5-XVKNb_w2xqfRf702Nilv_8aLveUz38HXnTxSBod1ZjnO8kqEGWaK1xeBusZQZkCbWhOd6cdMnjkYbDni-jxh3XlJURvjlLHtE1F0CJaS1qFPVH8vDOd8bejdw_uJgz7y-EnuPAHIN_jcDE-jH89p835zTpEcg0m5P95Vp3Y7Dt3tGgj6qafCN-Bnz-ts86znriseToNV_uOing0jhHwdb1Q0yAWJq_BnQ6AmaviBtyWQQAFbP1r_t0iO5hkoQfJrYM-"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl">
<span className="text-primary-container font-bold tracking-widest uppercase text-sm mb-4 block">Success Story</span>
<h2 className="text-5xl md:text-6xl font-bold font-headline mb-12">The 500-Participant <br/>Mega-Hunt</h2>
<div className="flex gap-12 mb-16">
<div>
<p className="text-4xl font-extrabold text-primary-container">500+</p>
<p className="text-on-surface-variant text-sm">Active Players</p>
</div>
<div>
<p className="text-4xl font-extrabold text-primary-container">0.1s</p>
<p className="text-on-surface-variant text-sm">Sync Latency</p>
</div>
<div>
<p className="text-4xl font-extrabold text-primary-container">100%</p>
<p className="text-on-surface-variant text-sm">Completion Rate</p>
</div>
</div>
<p className="text-xl text-surface/80 leading-relaxed mb-10">
                        We developed a custom scavenger hunt engine for a Fortune 500 corporate retreat. Our Firebase-powered leaderboard handled 5,000+ data points per minute as 500 participants raced through the streets of San Francisco.
                    </p>
<a className="inline-flex items-center gap-3 text-primary-container font-bold text-lg group" href="#">
                        Read full report
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-bold font-headline mb-6">Real-Time Leaderboards</h2>
<p className="text-on-surface-variant text-lg mb-8">Fuel the competitive spirit with live updates. Watch as teams leapfrog each other in real-time as they solve clues and earn points.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
<span className="font-bold text-primary w-6">01</span>
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<span className="font-bold flex-grow">Alpha Squad</span>
<span className="font-mono bg-primary text-white px-3 py-1 rounded text-sm">2,450 pts</span>
</div>
<div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg opacity-75">
<span className="font-bold text-on-surface-variant w-6">02</span>
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<span className="font-bold flex-grow">Mountain Lions</span>
<span className="font-mono bg-surface-container-high px-3 py-1 rounded text-sm">2,120 pts</span>
</div>
</div>
</div>
<div className="bg-primary p-12 rounded-xl shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50 rounded-xl"></div>
<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8">
<span className="material-symbols-outlined text-white text-5xl">trophy</span>
</div>
<h3 className="text-3xl font-bold text-white mb-4">Engagement Guaranteed</h3>
<p className="text-white/80">Gamification layers designed to keep players moving and thinking.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl font-bold font-headline mb-8">Ready to Build Your Adventure?</h2>
<p className="text-xl text-on-surface-variant mb-12">Let's craft an experience that turns any location into a story.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<input className="px-8 py-5 rounded-full bg-surface-container-lowest border-none shadow-sm focus:ring-2 focus:ring-primary w-full sm:w-96" placeholder="Your work email" type="email"/>
<button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg editorial-shadow">Get a Proposal</button>
</div>
</div>
</section>

</main>
        </div>
    );
}
