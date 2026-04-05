'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function IndustriesWeServeTemplate() {
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


<header className="max-w-4xl mb-24">
<span className="font-label text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sector Intelligence</span>
<h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
                Curated solutions for <span className="italic text-primary">every vertical</span> imaginable.
            </h1>
<p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                From hyper-local delivery logistics to global financial ecosystems, we build the digital infrastructure that defines modern industry standards.
            </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
<div className="relative h-[400px] rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern abstract tech interface with deep blue glowing lines and minimalist geometric patterns representing digital architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkxtHReDxqUkNuWHzngoDfbDGxoGEBIhL6HXzgzUxgPiFupiZyT-l-PwUXmnmwyvHDR9CYt5Nq6ms-Mkb0y0BSAxtknV-w-rZhDXcXf-Ye5XenX4LO-Tli3KsHKoxtGsuxRJlHCE6Ax9leWVkY2WnLUr3YSVWa2MYmKWWalFdP0xF3z795cNHjs9P16_n3qk03l2oJj-4fXQ7nlBiMkillHKp1qaf0u2hgy8R_4VN2hgyRsSTF95iy2A8n8IXYt44Q3TwFflOu2Aig"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 01</p>
<h3 className="font-headline text-xl">Architectural Integrity</h3>
</div>
</div>
<div className="relative h-[400px] rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sophisticated urban mobility concept with electric scooter parked against a brutalist concrete wall in morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHA2FRFiPeTB9Z9NkZ6r8aITym6Q6DuJoO_ZFAuhywc5Zh_uWbacXHDtiiZgmjXE1EETzKLbfQOQx2B584kZZ8EigXLlFvWf3-yQgd6cgn_rt1BlKQ86EqpLtCXV57jC9St6o8ovBaxxDCZxHj-69qNHT9RHBaRamgRSMJBNu4YJF2E-doh1AgahfXPshRjQbSV9FZ0_Ib-JVBY9NgndpfTqrN5veIIlDRpcPciwEFdLN93baCokd43rbaCECK_bTtKUIoL015DMAO"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 02</p>
<h3 className="font-headline text-xl">Smart Mobility</h3>
</div>
</div>
<div className="relative h-[400px] rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A clean high-end smartphone screen showing a minimalist health tracking app with soft gradients and serif typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhMwzlmZ4MMAH8WYVLj_LxUWjmSdyCLI20FGQa4kmep-zu_f2y8y4OTgg8Utz6EP_W2sqpjIWFkAXHbV6TAm48QynwLGc7n-2PfjYEIiY1EifkYTJYqIGYDh29zVfWQr743I-INbmojRBA3eylPFNFi2bxJgXiEFJ-JJ8z2J5bj90uNbziCyOEfjd776CN2Cpg7gSHHyvJWj4xid6aPSlSWWeDU1F0qIJKEpChBmhUjAeoCseWB8KQZJMiy-uJksXcD1HgTiQzFAN"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 03</p>
<h3 className="font-headline text-xl">Wellness Systems</h3>
</div>
</div>
</div>

<div className="editorial-grid border-l border-t border-outline-variant/15">

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="pedal_bike">pedal_bike</span>
<h4 className="font-headline text-xl mb-2">Bike Taxi</h4>
<p className="font-body text-sm text-on-surface-variant">Agile urban transport solutions for congested city landscapes.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="directions_bus">directions_bus</span>
<h4 className="font-headline text-xl mb-2">Bus Booking</h4>
<p className="font-body text-sm text-on-surface-variant">Intercity travel management with real-time seat mapping.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="local_taxi">local_taxi</span>
<h4 className="font-headline text-xl mb-2">Cab Booking</h4>
<p className="font-body text-sm text-on-surface-variant">Premium ride-hailing experiences with fleet tracking capabilities.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="package_2">package_2</span>
<h4 className="font-headline text-xl mb-2">Courier</h4>
<p className="font-body text-sm text-on-surface-variant">End-to-end logistics with intelligent route optimization.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="favorite">favorite</span>
<h4 className="font-headline text-xl mb-2">Dating</h4>
<p className="font-body text-sm text-on-surface-variant">Meaningful connections through advanced matchmaking algorithms.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase">New</div>
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="electric_car">electric_car</span>
<h4 className="font-headline text-xl mb-2">Electric Vehicle</h4>
<p className="font-body text-sm text-on-surface-variant">Charging network management and smart vehicle diagnostics.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative">
<div className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase">Most Popular</div>
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="moped">moped</span>
<h4 className="font-headline text-xl mb-2">E-Scooter Sharing</h4>
<p className="font-body text-sm text-on-surface-variant">Micro-mobility solutions for the sustainable modern metropolis.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="confirmation_number">confirmation_number</span>
<h4 className="font-headline text-xl mb-2">Event Booking</h4>
<p className="font-body text-sm text-on-surface-variant">Seamless ticketing and venue management for any scale.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="sports_soccer">sports_soccer</span>
<h4 className="font-headline text-xl mb-2">Fantasy Football</h4>
<p className="font-body text-sm text-on-surface-variant">High-performance gaming platforms with real-time data feeds.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="fitness_center">fitness_center</span>
<h4 className="font-headline text-xl mb-2">Fitness</h4>
<p className="font-body text-sm text-on-surface-variant">Personalized workout tracking and community engagement.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="local_florist">local_florist</span>
<h4 className="font-headline text-xl mb-2">Flower Delivery</h4>
<p className="font-body text-sm text-on-surface-variant">Gifting concierge services with precise delivery windows.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="restaurant">restaurant</span>
<h4 className="font-headline text-xl mb-2">Food Delivery</h4>
<p className="font-body text-sm text-on-surface-variant">Intuitive ordering systems for the quick-service economy.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="local_gas_station">local_gas_station</span>
<h4 className="font-headline text-xl mb-2">Fuel Delivery</h4>
<p className="font-body text-sm text-on-surface-variant">On-demand energy fulfillment for mobile professionals.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="shopping_basket">shopping_basket</span>
<h4 className="font-headline text-xl mb-2">Grocery Delivery</h4>
<p className="font-body text-sm text-on-surface-variant">Intelligent inventory and dark-store fulfillment logistics.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="medical_services">medical_services</span>
<h4 className="font-headline text-xl mb-2">Healthcare</h4>
<p className="font-body text-sm text-on-surface-variant">HIPAA-compliant telemedicine and patient record portals.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="home_repair_service">home_repair_service</span>
<h4 className="font-headline text-xl mb-2">Home Services</h4>
<p className="font-body text-sm text-on-surface-variant">Marketplace for trusted professionals and repair experts.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="self_improvement">self_improvement</span>
<h4 className="font-headline text-xl mb-2">Meditation</h4>
<p className="font-body text-sm text-on-surface-variant">Curated mental wellness journeys and audio experiences.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="music_note">music_note</span>
<h4 className="font-headline text-xl mb-2">Music Streaming</h4>
<p className="font-body text-sm text-on-surface-variant">High-fidelity audio delivery with social discovery features.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase">New</div>
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="star">star</span>
<h4 className="font-headline text-xl mb-2">OnlyFans Clone</h4>
<p className="font-body text-sm text-on-surface-variant">Sophisticated subscription-based content creator platforms.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="payments">payments</span>
<h4 className="font-headline text-xl mb-2">Payments</h4>
<p className="font-body text-sm text-on-surface-variant">Secure, scalable fintech gateways for global commerce.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="medication">medication</span>
<h4 className="font-headline text-xl mb-2">Pharmacy</h4>
<p className="font-body text-sm text-on-surface-variant">Prescription management and rapid medical delivery.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="domain">domain</span>
<h4 className="font-headline text-xl mb-2">Real Estate</h4>
<p className="font-body text-sm text-on-surface-variant">Immersive property listing and virtual tour ecosystems.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="content_cut">content_cut</span>
<h4 className="font-headline text-xl mb-2">Salon &amp; Spa</h4>
<p className="font-body text-sm text-on-surface-variant">Elegant appointment scheduling and loyalty management.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="explore">explore</span>
<h4 className="font-headline text-xl mb-2">Scavenger Hunt</h4>
<p className="font-body text-sm text-on-surface-variant">Gamified AR experiences for team building and tourism.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase">New</div>
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="tv">tv</span>
<h4 className="font-headline text-xl mb-2">Smart TV</h4>
<p className="font-body text-sm text-on-surface-variant">Next-gen OTT streaming for the modern living room.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="show_chart">show_chart</span>
<h4 className="font-headline text-xl mb-2">Stock Trading</h4>
<p className="font-body text-sm text-on-surface-variant">Low-latency market data and intuitive portfolio management.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="flight_takeoff">flight_takeoff</span>
<h4 className="font-headline text-xl mb-2">Travel</h4>
<p className="font-body text-sm text-on-surface-variant">Comprehensive itinerary planning for global explorers.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="smart_display">smart_display</span>
<h4 className="font-headline text-xl mb-2">Video Streaming</h4>
<p className="font-body text-sm text-on-surface-variant">Scalable VOD and live broadcast infrastructure.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase">New</div>
<span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform" data-icon="watch">watch</span>
<h4 className="font-headline text-xl mb-2">Wearable</h4>
<p className="font-body text-sm text-on-surface-variant">Syncing biometric data for glanceable user insights.</p>
</div>

<div className="p-8 border-r border-b border-outline-variant/15 bg-primary-container/10 group flex flex-col justify-center items-start">
<h4 className="font-headline text-xl mb-2">Custom Build</h4>
<p className="font-body text-sm text-on-surface-variant mb-6">Have a unique vision not listed here? Our team specializes in bespoke digital architecture.</p>
<a className="text-primary font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                    Inquire Now <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>

<section className="mt-32 rounded-2xl bg-gradient-to-br from-primary to-primary-container p-12 md:p-24 text-center">
<h2 className="font-headline text-4xl md:text-6xl text-white mb-8">Ready to define your industry?</h2>
<p className="text-on-primary-container font-body text-lg max-w-xl mx-auto mb-12 opacity-90">
                Partner with the digital curators at Alexandria to build a platform that transcends current standards.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-primary px-8 py-4 rounded-lg font-label font-bold tracking-widest uppercase text-xs shadow-xl transition-all hover:scale-105 active:scale-95">Start a Consultation</button>
<button className="bg-primary/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-label font-bold tracking-widest uppercase text-xs transition-all hover:bg-primary/40 active:scale-95">View Case Studies</button>
</div>
</section>

</main>
        </div>
    );
}
