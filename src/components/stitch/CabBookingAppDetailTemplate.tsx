'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CabBookingAppDetailTemplate() {
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


<section className="relative min-h-[921px] flex flex-col justify-center px-8 md:px-24 bg-surface-container-lowest overflow-hidden">
<div className="max-w-4xl z-10">
<span className="font-label text-tertiary text-xs uppercase tracking-[0.2em] mb-4 block font-semibold">Mobility Architecture</span>
<h1 className="font-headline text-6xl md:text-8xl leading-tight text-on-surface tracking-tight mb-8">
                    Redefining the <br/><i className="italic">Urban Pulse</i>
</h1>
<p className="font-serif text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                    Engineering white-label ride-hailing platforms that bridge the gap between global scale and local nuance, empowering brands to compete with the world's market leaders.
                </p>
<div className="flex flex-wrap gap-6">
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold shadow-lg shadow-primary/20">
                        View Case Studies
                    </button>
<button className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold">
                        Our Methodology
                    </button>
</div>
</div>

<div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
<img className="w-full h-full object-cover object-center clip-path-hero" data-alt="Modern high-end sedan driving through a neon-lit city street at night with long exposure light trails and architectural reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfArOheB9vx8Jq5fTA3toYr3cm613-rzNh8If8IRuuyTXRqXLucEokRKZXcnFQlxxu8qlha1aN9Nqbj3WgRuLmqchiXwb1bsB4ojqTSRgVH9L-sw1udeiigO3hQ90nIIscZoQzgNB6PdTtASA9VgdsvOtD-QHM6bKkWYypDGs9KBraO_XzgCIn5rCiFz53YccBDAucH2j9UO81yG1dTtZlOdXBEhdVpsl4CVKukYPmZ_x4gYVir_iwyfSqkAQlitjgGijYEySL569W"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-surface">
<div className="mb-16">
<h2 className="font-headline text-4xl mb-4">Precision Engineering for Modern Fleets</h2>
<div className="w-24 h-1 bg-tertiary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-surface-container-low p-12 rounded-xl flex flex-col justify-between group overflow-hidden relative">
<div className="relative z-10">
<span className="material-symbols-outlined text-primary text-4xl mb-6">dynamic_feed</span>
<h3 className="font-headline text-3xl mb-4">Intelligent Dispatching</h3>
<p className="font-body text-on-surface-variant max-w-md text-lg leading-relaxed">
                            Algorithmic precision that calculates the optimal driver-rider match based on real-time traffic patterns, driver behavior, and predictive demand.
                        </p>
</div>
<img className="absolute right-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity" data-alt="Abstract data visualization of city traffic patterns with glowing nodes and interconnecting lines on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpUlyktiabdRRMDDQwPHMFzhstRlzGsCwK_k7pxUUaVcM6Err1VbZYzqCfEBW6NJH400iYl6QR32g2AFtgrbeUlbm5Ba2mA9Lp2jB2QzCDFnjauuSrwnoFWYpuyd17yqIZrEfKD4BPMyav07m_hbRE9wJkD2pWd_2ly6Cqr6U0mdWFqTWhyM40ajHXPhAVxPPcgnDlGGwPU1GuywgrxMiNI796DzpXmhyzHahTOiuBupwYKk2ypO9CMUIAMjSj59YrQq6CeKocjXG-"/>
</div>

<div className="md:col-span-4 bg-tertiary-container p-12 rounded-xl text-on-tertiary-container">
<span className="material-symbols-outlined text-4xl mb-6">payments</span>
<h3 className="font-headline text-3xl mb-4">Fare Estimation</h3>
<p className="font-body text-sm leading-relaxed">
                        Transparent, dynamic pricing models that adapt to surge conditions while maintaining rider trust through absolute upfront clarity.
                    </p>
</div>

<div className="md:col-span-4 bg-primary-container p-12 rounded-xl text-on-primary-container">
<span className="material-symbols-outlined text-4xl mb-6">translate</span>
<h3 className="font-headline text-3xl mb-4">Multi-Language Support</h3>
<p className="font-body text-sm leading-relaxed">
                        A truly global interface localized for diverse markets, ensuring seamless communication between passengers and captains across all borders.
                    </p>
</div>

<div className="md:col-span-8 bg-surface-dim p-12 rounded-xl flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<span className="material-symbols-outlined text-error text-4xl mb-6">gpp_good</span>
<h3 className="font-headline text-3xl mb-4">Driver Safety Suite</h3>
<p className="font-body text-on-surface-variant text-lg leading-relaxed">
                            Advanced biometric verification, SOS triggers, and real-time trip monitoring to ensure every journey is protected by a digital fortress.
                        </p>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-surface">
<img className="w-full h-full object-cover" data-alt="Close up of a professional driver's hand on a sleek modern steering wheel, evening light casting soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0NKaSdUX-dbDaKxouwDw-6hvlfhnNPD5k31Yhg6hwr-6Lx84na3nNvo7tOLVS3MHxgZfWckX9qgAQIhdTy7fX_cT5QTVmRLnwjpolMPTTiS6GcKSsb0ehWtapRScw1WyxhMIM9CAzFbBoc7glZnRzAp6aFX4t_7EmlmhVczAlZ3JxuCHlMx22TMgizsdOoP3L67qetzAlV5OaCnifNRabUz2mi5AeUiTJVwru6rq6M8RTTscZ54G9SZUN6witFzmmNOUPuMxCItJV"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 md:px-24 bg-surface-container-lowest">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-24">
<h2 className="font-headline text-5xl mb-6">A Choreography of Connection</h2>
<p className="font-serif text-xl text-on-surface-variant max-w-2xl mx-auto italic">The seamless transition from digital intent to physical arrival.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">

<div className="relative bg-surface-container-lowest z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-8 shadow-xl">
<span className="material-symbols-outlined">location_on</span>
</div>
<h4 className="font-headline text-2xl mb-4">1. Precise Intent</h4>
<p className="font-body text-on-surface-variant text-sm">Riders define their destination with high-accuracy geofencing and venue-specific pickup spots.</p>
</div>

<div className="relative bg-surface-container-lowest z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-8 shadow-xl">
<span className="material-symbols-outlined">router</span>
</div>
<h4 className="font-headline text-2xl mb-4">2. Smart Orchestration</h4>
<p className="font-body text-on-surface-variant text-sm">Our cloud infrastructure evaluates thousands of data points to dispatch the ideal vehicle instantly.</p>
</div>

<div className="relative bg-surface-container-lowest z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-8 shadow-xl">
<span className="material-symbols-outlined">hail</span>
</div>
<h4 className="font-headline text-2xl mb-4">3. The Arrival</h4>
<p className="font-body text-on-surface-variant text-sm">Real-time tracking and push notifications synchronize the exact moment of connection.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 md:px-24 bg-surface-container overflow-hidden relative">
<div className="max-w-5xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="material-symbols-outlined text-6xl text-primary/20 mb-6">format_quote</span>
<blockquote className="font-serif text-3xl md:text-4xl text-on-surface leading-tight mb-8">
                            "The scalability of Alexandria's custom-built infrastructure transformed our regional fleet into a national competitor. Their attention to technical detail is unmatched in the white-label space."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a middle-aged male executive with a confident expression in a business setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1aIlZ6_US_fMYo-1tlAERSK_ihH8yweE845K20T3HGK0WeZRt6nnnJqWULYv7h45XhA3u58E8VD4FS1njgfEqnx6oUVZPJwO8bJgTeQg-eByYJgayXAiJR8_jks_wHCmdcbofp8npjClAujgupYnDJSGDcTo01ddXovOSGwcuetEmJR-yx7tJZ-THKkPN5L70A9ECqQrfxU1qkkuYdxwIm1JqDznfqB1-RUAVaE8cyC0IjZdZ4AsGxBGlphYt8wlg8cIehhd24DFH"/>
</div>
<div>
<p className="font-label font-bold text-on-surface">Marcus Thorne</p>
<p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">CEO, Metropolitan Transit Group</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Modern glass-walled office boardroom overlooking a city skyline at dusk, professional atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8sjoxDLDjryVf3CysO6B_jgBuZVT637JMkfT9vrr-waa4kcRRhp-vPX28jAnNk-J_uAhtqKQfG7wmBjPQW6AOnfhw6X6Rs8HhcqTyPIsCGlg_NydWS2aUf3YcO2zYn8om7MdD08NWcWu_TFqdQSihKSz0F2K8PQVU-SSBRI8-5G6W8m7GAYgDY2o2yRnggJ4WFqTX_ikdb-f9aUxW2iaeMHgCjeGUGSKFJPeX72846TKzCXcRUZEJteRgx6_OhLt9MqNypzDyA6jI"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-tertiary text-on-tertiary p-8 rounded-xl max-w-[200px]">
<p className="text-4xl font-headline mb-2">15M+</p>
<p className="text-xs font-label uppercase tracking-widest">Trips facilitated annually via our architecture</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 text-center bg-surface-container-lowest">
<h2 className="font-headline text-5xl mb-8">Ready to Build Your Mobility Future?</h2>
<p className="font-serif text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">Join the ranks of leading transportation networks leveraging our high-performance editorial design and core engine.</p>
<button className="bg-primary text-on-primary px-12 py-5 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:scale-[0.98] transition-transform duration-150">
                Initiate Consultation
            </button>
</section>

</main>
        </div>
    );
}
