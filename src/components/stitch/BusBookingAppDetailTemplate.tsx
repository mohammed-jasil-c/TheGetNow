'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BusBookingAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex flex-col justify-center px-8 pt-20 pb-32 max-w-screen-2xl mx-auto overflow-hidden">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 z-10">
<span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary font-bold mb-6 block">Mobility Solutions</span>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-on-surface">
                        The New Standard in <span className="italic">Long-Distance</span> Travel
                    </h1>
<p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                        Building seamless, modern bus ticketing and fleet management solutions designed for the digital nomad and the daily commuter alike.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label text-base tracking-tight hover:shadow-xl transition-all flex items-center gap-3">
                            Start Development
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button className="bg-surface-container-low border border-outline-variant/20 px-8 py-4 rounded-xl font-label text-base tracking-tight hover:bg-surface-container-high transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
<img className="w-full h-full object-cover" data-alt="Modern sleek luxury coach bus driving on a coastal highway at sunrise with cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9asBbAyChdGRnyDse89Q7vHkp456Ep9LW6ISQT0kIa733va5XzZC34FInwxHpFhCe5yVhLbVf5mh_XKJ-va_zFv8cGIOgVMippJ9GGI6w4N8bo3m4gQV6ip2oeKWKX4q8eMnIr7PiAyi5RQAL3S7pdZbCflEbjJhocF5OofeoGLCmMR0RDh70Y-VEIBhqE3SKZ7aHj0QPzUU8pZzCdnHYrhs3faJJW1Wplq8JmftzS7XRrly-aWIrMaOGKDGEISX0TQIcKo06zNGz"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>

<div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-outline-variant/10">
<div className="flex items-center gap-4 mb-4">
<span className="material-symbols-outlined text-primary scale-125">route</span>
<span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Global Connectivity</span>
</div>
<p className="font-headline text-lg italic">"Connecting cities through intelligent infrastructure."</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-32 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl mb-6">Built for the Modern Carrier</h2>
<p className="font-body text-lg text-on-surface-variant">Our engineering focuses on four primary pillars of the transport ecosystem, ensuring reliability at scale.</p>
</div>
<div className="font-label text-sm text-on-surface-variant">
                        [ REFINEMENT 04 / 2024 ]
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative border border-outline-variant/5">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6">chair</span>
<h3 className="font-headline text-3xl mb-4">Dynamic Seat Mapping</h3>
<p className="font-body text-on-surface-variant max-w-md">Precision 3D seating charts allow users to select comfort with surgical accuracy, integrated with real-time availability sync.</p>
</div>
<div className="mt-8 relative z-10">
<ul className="space-y-3 font-label text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Luxury Class Tiers</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Power Outlet Indicators</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Handicap Accessibility</li>
</ul>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-2/3 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[300px]" >airline_seat_recline_extra</span>
</div>
</div>

<div className="bg-surface-dim p-10 rounded-[2rem] flex flex-col justify-end border border-outline-variant/5 relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" data-alt="Top down view of a complex highway interchange with artistic long exposure light trails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu4tNBC_GqFertJii_5nDSmEi2iQ-O8XyWoz1TNjlkKej-YPKlMRvV1VYJgg3egBAYLqF_ArzA_RLJ0BAoAhrPivKAHwmBieHK7Mi7cMtNj0GXV3XJwU4UdrmYpkfXAzfB3jhw9JMqxTyDbOJ6op0b1QRF6L-PM5lX1qMcO9baSBbCZUR3jiyf5HzcEVw7KYrGE3HT4jB9zUvxsFE2sTp-dMr6ugG6qUrLNUWrTmAooaz_R0HUvaXklniUSU9l0BOcOGsMizR9EsGj"/>
<div className="relative z-10">
<span className="material-symbols-outlined text-3xl mb-4">alt_route</span>
<h3 className="font-headline text-2xl mb-3">Route Optimization</h3>
<p className="font-body text-sm text-on-surface-variant">Algorithmic pathfinding to maximize fleet efficiency and minimize fuel consumption across vast territories.</p>
</div>
</div>

<div className="bg-primary text-on-primary p-10 rounded-[2rem] border border-outline-variant/5 flex flex-col group">
<div className="flex-1">
<span className="material-symbols-outlined text-3xl mb-4" >location_city</span>
<h3 className="font-headline text-2xl mb-3">Multi-City Logic</h3>
<p className="font-label text-sm opacity-80 leading-relaxed">Complex itinerary management made simple. Seamlessly chain multiple legs of a journey in a single transaction.</p>
</div>
<div className="mt-8 border-t border-on-primary/10 pt-6">
<span className="font-label text-xs uppercase tracking-widest">Enterprise Feature</span>
</div>
</div>

<div className="md:col-span-2 bg-surface-container-highest p-12 rounded-[2rem] border border-outline-variant/5 flex items-center gap-12 group">
<div className="flex-1">
<span className="material-symbols-outlined text-4xl text-primary mb-6">my_location</span>
<h3 className="font-headline text-3xl mb-4">Real-time GPS Tracking</h3>
<p className="font-body text-on-surface-variant leading-relaxed">Latency-free telematics that bridge the gap between dispatch, the driver, and the passenger's smartphone.</p>
</div>
<div className="hidden lg:block w-1/3 aspect-square rounded-full border-4 border-dashed border-primary/20 p-4 animate-pulse-slow">
<div className="w-full h-full rounded-full bg-surface-container-lowest shadow-inner flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-5xl">navigation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-surface-container-lowest">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-24">
<h2 className="font-headline text-5xl mb-6">The Journey Experience</h2>
<p className="font-body text-on-surface-variant text-lg">Every touchpoint meticulously crafted for tranquility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant to-transparent"></div>

<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-8 border border-outline-variant/20 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl">confirmation_number</span>
</div>
<h4 className="font-serif text-xl mb-3">Instant Issuance</h4>
<p className="font-body text-sm text-on-surface-variant">Digital tickets generated with blockchain-backed security, instantly available in-app and wallet.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-8 border border-outline-variant/20 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl">notifications_active</span>
</div>
<h4 className="font-serif text-xl mb-3">Live Fleet Alerts</h4>
<p className="font-body text-sm text-on-surface-variant">Proactive updates regarding departure gates, platform changes, and estimated time of arrival.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-8 border border-outline-variant/20 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl">qr_code_2</span>
</div>
<h4 className="font-serif text-xl mb-3">Smart Boarding</h4>
<p className="font-body text-sm text-on-surface-variant">Rapid contactless boarding using offline-first QR scanning technology for zero-delay departures.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-4">
<div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-8 border border-outline-variant/20 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl">travel</span>
</div>
<h4 className="font-serif text-xl mb-3">Destination Arrival</h4>
<p className="font-body text-sm text-on-surface-variant">Post-trip surveys and integrated local transport links to finish the last mile of the journey.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 overflow-hidden bg-white">
<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-20">
<div className="w-full lg:w-1/2">
<div className="relative">
<span className="font-serif text-[240px] leading-none absolute -top-40 -left-10 text-surface-container-highest/50 z-0">“</span>
<blockquote className="relative z-10">
<p className="font-headline text-3xl md:text-5xl leading-tight mb-12 italic">
                                Alexandria Collective transformed our entire logistical backbone. The efficiency and clarity of the platform have reduced our overhead by 22% while drastically increasing passenger satisfaction scores.
                            </p>
<footer className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional middle-aged male executive in a well-lit modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaaLXFSv8cBXR0cUm9T1LAYdW6JSkPXY22lOudyHpG_dOxP7DfCKcAphDOcfjj7DaLzgL_rqZNqsDj6erlGq6ArzM6lFQal-3G0knWoHSXymMYBg1U1RCZvb7g4eeFESskfgqPaYnzE7mfA_ydCwEhWGLCsrBzi-PtkW7p6B2yfZQmy-csJnWX_ZVm8xm1ip3xhUjHlZH_sq2C7jKRphm9qrvBvL0DU1MBP0OLFXI_uTmcYFPCNjat9c5SAhdH5lPgJeD_uBsg--6r"/>
</div>
<div>
<cite className="font-label font-bold text-lg not-italic">Marcus Thorne</cite>
<p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Director of Regional Transport</p>
</div>
</footer>
</blockquote>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-lg mt-12">
<img className="w-full h-full object-cover" data-alt="Close up of a luxury bus dashboard with glowing digital displays and modern controls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQFqTCD2MwOHZiybWxgN1oBQjx3BkVarrKVWXrOEAL49mLuA1C0HPdVpJJPo79X-EC2Y1gX4n5q8goGIvQF8q6wrnIGHnQDbzHm4q8hidg_0UQmI4f8vUBVlcbqe_MxIJc4sxq4cOUeutKc4r77HQLokU6Y8J-T1FuqIb3hkia9cE9qP4O2JTxrZRt3OZa-mimErTd4sdaQql1JyhsouG0Maf5BrjnPkI32Gzc0mq-JAl4BY_hiQ58Pxd3ZNwRmYk4_Gupg210zr01"/>
</div>
<div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="Minimalist waiting lounge at a high-end bus terminal with clean lines and soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMQ7aG8fWR0AENTbzx_9Pw6sFCwK6geP5f3UBTbhByiI9MvYcdepf3L7GN_r0sbs1mhy5rfd5OQkRFmwWdVuR8BGiFSZcCXHls7kY8HYu8jOIK8gSkEWcw8lHVV4OPeAeAqbH7Ss_77y9lAw2VW23dbBjGdqwI9e_FiP8NWmURvoDNYBknAIAoSnVMvIGmumevYfI8kGJ3QWWTmtXXERjpMDCGMCYMaegt8011Syp7Wl9qibkPk9hCi6rrupoUsD8GpwHZ1WKh4oTH"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-surface-container-lowest text-center">
<div className="max-w-3xl mx-auto">
<h2 className="font-headline text-4xl md:text-6xl mb-8">Ready to define the future of transport?</h2>
<p className="font-body text-on-surface-variant text-xl mb-12">Partner with our engineering team to build a bespoke booking ecosystem that scales with your fleet.</p>
<div className="flex justify-center">
<button className="bg-primary text-on-primary text-lg font-label px-12 py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                        Schedule a Strategy Session
                    </button>
</div>
</div>
</section>

</main>
        </div>
    );
}
