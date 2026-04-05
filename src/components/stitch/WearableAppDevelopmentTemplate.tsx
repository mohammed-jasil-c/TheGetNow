'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WearableAppDevelopmentTemplate() {
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


<section className="relative overflow-hidden min-h-[921px] flex items-center px-6 lg:px-12 bg-inverse-surface">

<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-tertiary/10 blur-[100px]"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-fixed-dim text-xs font-bold tracking-[0.15em] uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                        Next-Gen Wearables
                    </div>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter">
                        Engineering <span className="text-transparent bg-clip-text signature-gradient">High-Performance</span> Wristwear
                    </h1>
<p className="text-surface-container-highest text-lg lg:text-xl leading-relaxed max-w-xl font-body opacity-80">
                        Beyond the interface. We architect biometric-driven experiences that bridge the gap between human physiology and digital precision.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="signature-gradient text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3">
                            View Ecosystem
                            <span className="material-symbols-outlined">bolt</span>
</button>
<button className="bg-white/5 border border-outline-variant/20 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            Our Process
                        </button>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 signature-gradient opacity-20 blur-[100px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
<div className="relative transform lg:rotate-6 lg:translate-x-12 hover:rotate-0 transition-transform duration-1000">
<img alt="High-tech smartwatch" className="rounded-[3rem] shadow-2xl border-[12px] border-slate-900 ring-1 ring-white/20" data-alt="Futuristic high-tech smartwatch mockup floating in a dark studio setting with neon blue ambient lighting and particle effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgig0Qb6_l0q0kKRGg8rrzDsJfK3eQEEXkBdbl33Tc5myrQk4y_faWyHHZz4jfZe_6vgkxlXMJ-6TQ-D3a7Rr1jKBvKPxrLccbgCSUZpWeiQmGMbIwL_hF2kEKQz8WRmE9nWF7zkjk0thu5k7SOTCuay6ynH0S2XGCwj64QI3Sc3PD6lKGfjk0Bj7iPo2y4jK4Uw9f-GTCq9L66u-B1LIGBay_bwYJayKj1kStw_jsf89Mx0FoCivX2q7ALf1UIV1-tXaFE_aSZLaY"/>

<div className="absolute -top-10 -right-8 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl space-y-2">
<div className="text-primary-fixed-dim text-[10px] font-bold tracking-widest uppercase">HR Performance</div>
<div className="text-3xl font-bold text-white leading-none">142 <span className="text-sm font-normal opacity-60">BPM</span></div>
<div className="h-8 w-32 bg-primary/20 rounded-md overflow-hidden relative">
<div className="absolute bottom-0 left-0 w-full h-1/2 signature-gradient opacity-50"></div>
</div>
</div>
<div className="absolute -bottom-10 -left-8 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl space-y-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary-fixed">
<span className="material-symbols-outlined">sync_alt</span>
</div>
<div>
<div className="text-white font-bold text-sm">Sync Active</div>
<div className="text-[10px] text-white/60">0.02ms Latency</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 space-y-4 max-w-2xl">
<h2 className="font-label text-sm font-bold tracking-[0.2em] text-primary uppercase">Precision Core</h2>
<h3 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                        Real-time intelligence <br/>wrapped around the wrist.
                    </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-surface-container-low p-12 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[12rem]" >devices</span>
</div>
<div className="relative z-10 space-y-6">
<div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">sync</span>
</div>
<h4 className="font-headline text-3xl font-bold text-on-surface">Seamless Ecosystem Sync</h4>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                                Experience zero-latency data continuity between wearable, mobile, and desktop environments. Our proprietary sync protocols ensure your data is always exactly where you need it.
                            </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-primary text-xl" >check_circle</span>
                                    Instant Bluetooth LE Handshake
                                </li>
<li className="flex items-center gap-3 text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-primary text-xl" >check_circle</span>
                                    Cloud-to-Device background fetch
                                </li>
</ul>
</div>
</div>

<div className="bg-surface-container-low p-12 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[12rem]" >monitoring</span>
</div>
<div className="relative z-10 space-y-6">
<div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-3xl">favorite</span>
</div>
<h4 className="font-headline text-3xl font-bold text-on-surface">Advanced Health Biometrics</h4>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                                Harnessing medical-grade sensor integration for real-time heart rate variability, SpO2 monitoring, and predictive health insights powered by localized AI.
                            </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="bg-surface-container-lowest p-4 rounded-lg">
<div className="text-primary font-bold text-2xl">99.8%</div>
<div className="text-xs uppercase tracking-widest text-outline">Sensor Accuracy</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-lg">
<div className="text-tertiary font-bold text-2xl">&lt;10ms</div>
<div className="text-xs uppercase tracking-widest text-outline">Pulse Processing</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24 space-y-4">
<h2 className="font-label text-sm font-bold tracking-[0.2em] text-primary uppercase">Multi-Platform Mastery</h2>
<h3 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tighter">SDK Architecture &amp; Deployment</h3>
</div>
<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-shadow duration-500">
<div className="flex-1 space-y-6">
<div className="inline-block px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase">Apple Ecosystem</div>
<h4 className="font-headline text-4xl font-bold text-on-surface">watchOS Excellence</h4>
<p className="text-on-surface-variant leading-relaxed">
                                Custom SwiftUI and Combine implementations for the Apple Watch. We leverage HealthKit, WatchConnectivity, and Complications to create deeply integrated experiences.
                            </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-surface-container rounded-lg font-label text-xs font-semibold">SwiftUI</div>
<div className="px-4 py-2 bg-surface-container rounded-lg font-label text-xs font-semibold">HealthKit</div>
<div className="px-4 py-2 bg-surface-container rounded-lg font-label text-xs font-semibold">Core Motion</div>
</div>
</div>
<div className="w-full md:w-64 aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
<img alt="Apple Watch interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close up of a premium apple watch display showing complex health metrics and minimal dashboard design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgs2yToE5ESnxz2kKcLay-o8LJtvJiKgvxrVh3pGOgexN8Ex_r9jTo6nSbTsAbYaPGv6hnGSfuq-LiQmnLJx5dSFQMjptlY_te_gCJB9Xn6akBCAmfDSKVqyVeoadKR6gxQ6-03lHc0QNhW_ufi53B9v99Nl_AMYtxNM_JDhSY9mI7xwLutKaNddTbJs6iRBab7Nvs8fW4S6YPVVsgT6_W8VKd1zZ2G_CDMH6OBfXmsx1R0RJbvUL4xOJNLygUKcfPCfRR4Qqi10eK"/>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-500">
<div className="space-y-6">
<div className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase">Android Ecosystem</div>
<h4 className="font-headline text-3xl font-bold text-on-surface">Wear OS by Google</h4>
<p className="text-on-surface-variant leading-relaxed">
                                Robust Kotlin-based development for the diverse world of Android wearables, from Samsung Galaxy to Pixel Watch.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-surface-container flex justify-between items-center">
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary">Compose for Wear</span>
<span className="material-symbols-outlined text-primary">terminal</span>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-inverse-surface p-10 rounded-xl text-white relative overflow-hidden">
<div className="absolute -bottom-12 -right-12 w-48 h-48 signature-gradient rounded-full blur-[80px] opacity-30"></div>
<div className="relative z-10 space-y-6">
<h4 className="font-headline text-2xl font-bold">Custom RTOS Firmware</h4>
<p className="text-white/60 leading-relaxed">
                                When standard SDKs aren't enough, we build custom low-level C++ firmware for proprietary IoT and medical wearable devices.
                            </p>
<div className="flex items-center gap-4 text-sm text-primary-fixed-dim font-bold">
<span>Low-Level Architecture</span>
<span className="material-symbols-outlined">memory</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 flex items-center gap-8">
<div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-4xl text-primary">layers</span>
</div>
<div>
<h4 className="font-headline text-2xl font-bold text-on-surface">Hybrid Connectivity</h4>
<p className="text-on-surface-variant">Bridge the gap between cross-platform apps and native wearable modules using optimized Flutter and React Native plugins.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-950"></div>

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1549e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 px-6">
<div className="space-y-8">
<h2 className="font-headline text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                        Ready to <span className="text-glow text-primary-fixed-dim">Define the Future</span> of the Wrist?
                    </h2>
<p className="text-white/60 text-xl font-body leading-relaxed max-w-2xl mx-auto">
                        Connect with our senior architects to discuss your wearable roadmap. We provide technical auditing, prototype development, and full-scale production.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
<button className="w-full sm:w-auto signature-gradient text-on-primary px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(21,73,229,0.4)] flex items-center justify-center gap-3">
                            Talk to our Experts
                            <span className="material-symbols-outlined">chat_bubble</span>
</button>
<button className="w-full sm:w-auto px-12 py-6 rounded-full border border-white/20 text-white font-bold text-xl hover:bg-white/5 transition-all backdrop-blur-sm">
                            Schedule a Demo
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
