'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FuelDeliveryAppDetailTemplate() {
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


<section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Future of Fluidity" className="w-full h-full object-cover scale-105" data-alt="a sleek modern fuel tanker truck parked on a clean minimalist urban street with futuristic architecture and soft blue hour lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKNs7yu478SPCREWMXAo9zfr2kXFTltL0NSePT6jPbu2YW-SEFCe6NEbKqgG6uOeQemFJkk9hk_MnC1tiu57vu-1Hmm1NCYOPazbRoefn1IGgATuXtvkhhy84WVMDVoyKLYQjE2dQ2ze24ADTYX7v54tNNr8jJuZMcS5pp_4ZUePWf0Jnz02gyQf2u25aa-8bKcpB7TftQYorAfCXirgAwuvE0XfJJioPy0SQcsF0ZqFSKChkoa_zjRPpJk6FxRRnPx0zCmL4d2Vy0"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block font-semibold">Editorial Feature — Mobility</span>
<h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[1.1] mb-8 font-bold">The Future of Fluidity</h1>
<p className="font-body text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg">
                        Redefining energy logistics for the modern enterprise. On-demand refueling that disappears into the background of your operations.
                    </p>
<div className="flex gap-4">
<button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-label font-bold rounded-lg hover:opacity-90 transition-opacity">
                            Experience the Platform
                        </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid md:grid-cols-2 gap-24 items-center">
<div>
<h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">Precision Fueling Architecture</h2>
<div className="space-y-6">
<p className="font-body text-lg text-on-surface-variant leading-relaxed">
                                Our delivery infrastructure is built on the philosophy of surgical precision. We provide on-demand energy fulfillment specifically tailored for high-performance fleets and mobile professionals who cannot afford the friction of traditional refueling stops.
                            </p>
<p className="font-body text-lg text-on-surface-variant leading-relaxed italic border-l-4 border-tertiary pl-6 py-2">
                                "The most efficient journey is the one that never has to stop for gas."
                            </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="h-64 bg-surface-container-high rounded-xl overflow-hidden">
<img alt="Logistics" className="w-full h-full object-cover" data-alt="aerial view of organized shipping containers in a modern port with high contrast lighting and clean lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo5zy-6WxzlxMEm2VW7RK--9SKUDjkkwlvieOVuofOIOU0sHBZrd4ag5BvE6BQw20s1WESoEtnz5gGVs04xNDatdk-TFIkxc1pqIhIdPxtl8YAAfin-n16TbOITKuvRU4rVVbRii4ptzmqhKw2Y5BAtxmSVY_VG-BPh_Z1fz2h6ymZozThp0bINrcXtDdWt28PHwN0yEbSvhwM8B0tZ8Lrch4mE1H_hSkza3d7vYh40xUTAO6gJGF0qDCiBVxLyJjPlgPpAbCgL2e6"/>
</div>
<div className="p-6 bg-surface-container rounded-xl">
<span className="font-label text-xs tracking-widest text-tertiary block mb-2 font-bold uppercase">01 / Fleet Optimized</span>
<p className="text-sm font-body text-on-surface-variant">Seamless integration with global logistics standards.</p>
</div>
</div>
<div className="space-y-4">
<div className="p-6 bg-surface-container-high rounded-xl">
<span className="font-label text-xs tracking-widest text-tertiary block mb-2 font-bold uppercase">02 / High Capacity</span>
<p className="text-sm font-body text-on-surface-variant">Industrial grade fulfillment for enterprise-level demand.</p>
</div>
<div className="h-80 bg-surface-container rounded-xl overflow-hidden">
<img alt="Urban Environment" className="w-full h-full object-cover" data-alt="modern skyscraper glass facade reflecting a clear blue sky and contemporary urban design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTYMEPHymfFHkg1oRVVrNsUhRAlRDwQl3FhWUgvQVvQYm3mBrjjbpjw2LFZjG8aOAGrzeNAIBDTumgNwFT2HPGUtpDYrgQaRCjmBjd7wlJLtNbqL1gz21BIY2hhn79iIl61Y7gw7Ni88GCkCLF3iIoW3C9Y1ae0s7rTD904uzam_wzaFrX3vA53NNoKAZTANEK9iZsIIwqZeSn_yQtBma-w7-qY2AZ9GShnFvelJJdgZ6rPad35E65kqz_gY-qJbBI5qedKTQw4Eap"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Technological Benchmarks</h2>
<p className="font-body text-on-surface-variant">Elevating fuel management through an integrated digital ecosystem.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">

<div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:bg-white transition-colors border border-outline-variant/15">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="sensors">sensors</span>
<span className="font-label text-[10px] uppercase tracking-widest text-outline">Active Telemetry</span>
</div>
<div>
<h3 className="font-headline text-2xl mb-2">Real-time Telemetry</h3>
<p className="font-body text-on-surface-variant text-sm max-w-md">Constant monitoring of tank levels and fuel quality ensures every drop is accounted for with absolute precision.</p>
</div>
</div>

<div className="bg-primary p-8 rounded-xl flex flex-col justify-end text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-8xl" data-icon="security">security</span>
</div>
<h3 className="font-headline text-xl mb-2 relative z-10">Secure Payment</h3>
<p className="text-primary-fixed text-sm relative z-10">Military-grade encryption for every transaction and refill event.</p>
</div>

<div className="bg-surface-container rounded-xl p-8 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-tertiary text-5xl mb-4" data-icon="auto_awesome">auto_awesome</span>
<h3 className="font-headline text-lg">Automated Dispatching</h3>
<p className="text-xs font-label mt-2 tracking-wide uppercase text-on-surface-variant">Smart AI Scheduling</p>
</div>

<div className="md:col-span-2 bg-white rounded-xl overflow-hidden flex relative border border-outline-variant/15">
<div className="w-1/2 p-8 flex flex-col justify-center">
<h3 className="font-headline text-2xl mb-4">Ecosystem Integration</h3>
<p className="font-body text-on-surface-variant text-sm">Connect directly to your existing ERP and fleet management software via our robust API.</p>
</div>
<div className="w-1/2 relative">
<img alt="Data Analytics" className="w-full h-full object-cover" data-alt="a clean professional dashboard interface showing complex data visualizations and charts in a high-end corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuDFkVsAvmdHGarpRbjSShpCnaUbK0ZT2QYWp_uNxJVUJA-tnujqWjFKOabUQFdq3E8DpfoFSh-Fp7IUiCN5Yn8vz2Uf9WKjGbCUosGQ40GT45Ffeckv6yRZtY-YfNkj3IFHwZXWvExHZMocqZ7b1uIN8ykGViwJ7ebeoWFNsHKJQR_1_cGXSNQi2VK5tdeed4FrOSevxkFvH7vPBTJLK2ml0IuJX0MUqatau89vp0tyELlbd7J0oaJdzIsG8Fs8pYWF9JgAUs6Vag"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl">
<span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-4 block font-semibold">The Process</span>
<h2 className="font-headline text-4xl md:text-5xl text-on-surface">From Request to Refill</h2>
</div>
<div className="text-on-surface-variant font-label text-sm max-w-xs text-right">
                        Refinement at every touchpoint.
                    </div>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-10"></div>

<div className="space-y-6">
<div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center border border-white shadow-sm">
<span className="font-headline text-2xl text-primary font-bold">01</span>
</div>
<h3 className="font-headline text-xl">Smart Dispatch</h3>
<p className="font-body text-on-surface-variant leading-relaxed">Predictive algorithms identify optimal delivery windows based on your fleet's real-time usage and geographic distribution.</p>
</div>

<div className="space-y-6">
<div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center border border-white shadow-sm">
<span className="font-headline text-2xl text-primary font-bold">02</span>
</div>
<h3 className="font-headline text-xl">Secure Transfer</h3>
<p className="font-body text-on-surface-variant leading-relaxed">Closed-loop fueling systems and IoT-verified nozzles ensure zero leakage and total volume accuracy.</p>
</div>

<div className="space-y-6">
<div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center border border-white shadow-sm">
<span className="font-headline text-2xl text-primary font-bold">03</span>
</div>
<h3 className="font-headline text-xl">Real-Time Tracking</h3>
<p className="font-body text-on-surface-variant leading-relaxed">Monitor every liter delivered through a live dashboard with instant digital receipt generation and archival storage.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
<div className="absolute -right-24 -bottom-24 text-[20rem] font-serif italic text-stone-800 pointer-events-none opacity-50 select-none">"</div>
<div className="max-w-screen-2xl mx-auto px-8 relative z-10">
<div className="max-w-4xl">
<span className="material-symbols-outlined text-tertiary-container text-6xl mb-12" data-icon="format_quote" >format_quote</span>
<blockquote className="font-headline text-3xl md:text-5xl leading-tight mb-12 italic">
                        "Alexandria transformed our fleet's refueling efficiency. We've seen a 24% reduction in operational downtime since moving to their precision fueling architecture."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full overflow-hidden bg-stone-700">
<img alt="CEO Portrait" className="w-full h-full object-cover grayscale" data-alt="professional portrait of a high-level executive male in a dark suit with a neutral confident expression and soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdcFJVhc4qVXmMWxPcWjli3sl_GRVJlNLwwQlq3kZvdbiM8VavvT2zOHC-pItmptFiRKFShftpQ9EFmWcRKTIFsfh_h1xumMRJCYWR1l43fsuCENH2BJ2Kn87HFb9pMeX2qxrrVdbaxEXRqWpZUS3NB3hhYbtgoHBV1E-xt9-kpd5M6XaxsqWRCbC0kO_8OHTgVi88B78hqUcFvwmAkvGnvTO8WWgcxRxDC6BgKgy15JI009J5GodhEy95xfn0UlubCTmN1HLaWG7X"/>
</div>
<div>
<p className="font-label font-bold uppercase tracking-widest text-stone-100">CEO of a Logistics Giant</p>
<p className="font-body text-stone-400 text-sm italic">Strategic Operations Partner</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="font-headline text-4xl md:text-6xl mb-8 font-bold">Power Your Fleet's Future</h2>
<p className="font-body text-primary-fixed text-lg mb-12 opacity-90 leading-relaxed">
                            Join the elite circle of enterprises that treat energy as a strategic asset rather than a logistical hurdle. Our consultants are ready to audit your current architecture.
                        </p>
<button className="bg-white text-primary px-12 py-5 rounded-lg font-label font-bold uppercase tracking-widest hover:bg-stone-100 transition-colors shadow-lg">
                            Initiate Consultation
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
