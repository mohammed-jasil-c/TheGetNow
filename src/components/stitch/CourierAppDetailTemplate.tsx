'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CourierAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center pt-16 overflow-hidden">
<div className="container mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 z-10">
<span className="font-label text-tertiary text-xs uppercase tracking-[0.2em] mb-6 block">Practice Area: Logistics</span>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8">
                        The Architecture of <span className="italic">Precise Logistics</span>
</h1>
<p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                        In the age of instant fulfillment, precision is no longer a luxury—it is the bedrock of trust. We engineer high-performance courier and last-mile delivery software for the modern era.
                    </p>
<div className="flex items-center gap-6">
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:opacity-90 transition-all active:scale-95">
                            Consultation
                        </button>
<button className="text-primary font-medium flex items-center gap-2 hover:underline">
                            View Case Studies <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative">
<img alt="Modern logistics interface" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" data-alt="Minimalist high-angle shot of a sleek delivery van driving on a clean urban street at dawn, muted tones and editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4GVxaTRDZ8dk6tJT-eX7hPYztXi0m0JuxH4hl8MNpbqqEqBK-5DRWYpFMOlixfue04WM9V-p0g-zstgkmu_SNXZJ3SZpAH8qsJ4McFmLvUten6C2xfdKcrFDMCEsPbPJ6QGgdKv9fhPBevamZ9Gciv0UU470uk-zEYvc2akDem3Z-L0lOrDmw_jnEdEhFYowE2fOtW5sZueK1wL_4bengBniHym6gzbZkb6UfuYPBqmNIURRzTVH2Rh0FjuvcE_w3NAkso-GcmX9"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-12 bg-white p-8 shadow-2xl rounded-lg max-w-xs hidden md:block">
<p className="font-headline text-3xl text-primary mb-2">99.9%</p>
<p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-tight">Uptime reliability for mission-critical dispatch systems</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-lowest">
<div className="container mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl mb-4">Engineering Certainty</h2>
<p className="font-body text-on-surface-variant">Our core engine addresses the four pillars of modern distribution through algorithmic precision and human-centric design.</p>
</div>
<div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant opacity-20"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">

<div className="md:col-span-2 lg:col-span-7 bg-surface-container rounded-2xl p-10 flex flex-col justify-between min-h-[400px]">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="route">route</span>
<h3 className="font-headline text-3xl mb-4">Route Optimization</h3>
<p className="font-body text-on-surface-variant leading-relaxed max-w-md">
                                Real-time dynamic routing that adapts to traffic, weather, and courier availability, reducing fuel consumption by up to 22% while shortening delivery windows.
                            </p>
</div>
<div className="mt-8 flex gap-4 overflow-hidden">
<div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
<div className="h-full bg-primary w-2/3"></div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-5 bg-tertiary-container text-on-tertiary-container rounded-2xl p-10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-3xl mb-6" data-icon="signature" >signature</span>
<h3 className="font-headline text-2xl mb-4">Digital Proof of Delivery</h3>
<p className="font-body opacity-90 leading-relaxed">
                                Beyond simple signatures. Capture high-resolution geo-tagged photo evidence and instant customer confirmation.
                            </p>
</div>
<div className="mt-8">
<img alt="Delivery confirmation" className="w-full h-32 object-cover rounded-lg mix-blend-overlay grayscale" data-alt="Close up of a hand signing a digital tablet screen with professional lighting and clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPjnpGTYAqhordpobcgCVSA57EZSnEkKv5NCUeFxQ9kUjFy5LGhtzKiDQsJtEUQjCuXU1LkrxlQ4eWU1cjoW80NVYZa386yNmr_viLiu-AgpSPpvEtYS66kilFr5p0aeJy-wedWZyaT5XGHYH5a21ArU_0M248qB04aUeBjnl8CuCtwYn-r7cC5xXy1bRhfL6__-jKDP59fpVb8s48IEN53gCWfAgyIwoNYqn-CZMjJE72e_GoltUaQ1K1_AhOEFfxz-M_9al9umXG"/>
</div>
</div>

<div className="md:col-span-2 lg:col-span-4 bg-surface-container-high rounded-2xl p-10 flex flex-col">
<span className="material-symbols-outlined text-primary text-3xl mb-6" data-icon="inventory_2">inventory_2</span>
<h3 className="font-headline text-2xl mb-4">Warehouse Integration</h3>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Seamless data handshakes between WMS systems and last-mile vehicles to ensure zero-loss loading and real-time inventory tracking.
                        </p>
</div>

<div className="md:col-span-2 lg:col-span-8 bg-surface-dim rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<span className="material-symbols-outlined text-primary text-3xl mb-6" data-icon="event_repeat">event_repeat</span>
<h3 className="font-headline text-2xl mb-4">Dynamic Scheduling</h3>
<p className="font-body text-on-surface-variant leading-relaxed">
                                Shift workers and automated logic unite to manage high-volume spikes without service degradation.
                            </p>
</div>
<div className="flex-1 w-full h-48 bg-background/50 rounded-xl flex items-center justify-center border border-white/20">
<span className="font-label text-xs uppercase tracking-widest text-primary/40">Visualized Capacity Matrix</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-8">
<div className="max-w-4xl mx-auto text-center mb-20">
<span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">The Experience</span>
<h2 className="font-headline text-5xl mb-6">Frictionless Fulfillment</h2>
<p className="font-body text-on-surface-variant text-lg">A meticulous journey designed for both the sender and the receiver.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -translate-y-1/2 hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="relative bg-white z-10 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-8 border-4 border-white transition-all group-hover:bg-primary group-hover:text-white">
<span className="font-headline text-xl">01</span>
</div>
<h4 className="font-headline text-xl mb-4">Order Placement</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Intelligent data entry with address validation and package profiling.</p>
</div>

<div className="relative bg-white z-10 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-8 border-4 border-white transition-all group-hover:bg-primary group-hover:text-white">
<span className="font-headline text-xl">02</span>
</div>
<h4 className="font-headline text-xl mb-4">Smart Dispatch</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Automated matching of orders to the optimal courier based on load and location.</p>
</div>

<div className="relative bg-white z-10 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-8 border-4 border-white transition-all group-hover:bg-primary group-hover:text-white">
<span className="font-headline text-xl">03</span>
</div>
<h4 className="font-headline text-xl mb-4">Real-Time Transit</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Live GPS tracking with dynamic ETA updates sent via secure communication channels.</p>
</div>

<div className="relative bg-white z-10 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-8 border-4 border-white transition-all group-hover:bg-primary group-hover:text-white">
<span className="font-headline text-xl">04</span>
</div>
<h4 className="font-headline text-xl mb-4">Final Receipt</h4>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Contactless delivery confirmed with photo evidence and archival receipt generation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-dim/30">
<div className="container mx-auto px-8 max-w-6xl">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Logistics CEO Profile" className="w-full aspect-square object-cover rounded-2xl grayscale" data-alt="Portrait of a sophisticated male executive in a neutral grey studio setting, professional editorial photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABRqR0ROCRpXd9yxtHlTCM9IHz9vPPYq1sMukugqlnszkrHx3cX9QprbOfcKaG_AGqtDKvteg_5f8L5Ahnj-Fk3do6cPLisJDC4KpK6sWNPreAhHRMYO3lQ0snXOgRNsDnwcxMyZ8b3J76er35qh0IrTFswuHZRuzZ7UdX5gBeHqIj3-llET462Uuzs5fommsvEqzPcX3E9rb592LYyiUkmeKGBxvlYrtgpFhfL534aOpUReQ0oVPywd7jT5fKYS5tv1p6PHuNzLP5"/>
<div className="absolute -bottom-4 -right-4 bg-primary p-6 rounded-lg text-white">
<span className="material-symbols-outlined text-4xl" data-icon="format_quote" >format_quote</span>
</div>
</div>
<div className="serif-dropcap">
<p className="font-headline text-3xl md:text-4xl text-on-surface leading-tight mb-8 italic">
                            "The transition to Alexandria's platform wasn't just a technical upgrade; it was a philosophical shift. Their editorial-quality UI reduced our dispatcher fatigue by 40% and reclaimed thousands of lost operational hours."
                        </p>
<div className="border-l-2 border-primary pl-6">
<h5 className="font-headline text-xl font-bold">Arthur Vance</h5>
<p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">CEO, Meridian Global Logistics</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary overflow-hidden relative">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
</div>
<div className="container mx-auto px-8 relative z-10 text-center">
<h2 className="font-headline text-4xl md:text-6xl text-white mb-8">Build the Future of Fulfillment</h2>
<p className="font-body text-blue-100 text-xl max-w-2xl mx-auto mb-12">Let's discuss how we can transform your logistics operations into a masterpiece of digital efficiency.</p>
<button className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-stone-100 transition-colors">
                    Begin Your Transformation
                </button>
</div>
</section>

</main>
        </div>
    );
}
