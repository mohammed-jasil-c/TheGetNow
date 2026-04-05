'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function StockTradingAppDevelopmentTemplate() {
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

<section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6 z-10">
<span className="inline-block py-1 px-4 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">Fintech Solutions</span>
<h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-on-surface mb-8">
                        Stock Trading <br/>
<span className="text-primary italic">App Development</span>
</h1>
<p className="text-lg md:text-xl text-on-surface-variant font-body mb-10 max-w-xl leading-relaxed">
                        Engineer high-performance, institutional-grade trading platforms with sub-millisecond execution, AI-driven insights, and military-grade security.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-container transition-all editorial-shadow">Start Your Build</button>
<button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all">View Demo</button>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="relative z-10 rounded-2xl overflow-hidden editorial-shadow bg-surface-container-lowest p-2">
<img alt="Trading Dashboard" className="rounded-xl w-full h-auto" data-alt="Modern high-tech trading dashboard displayed on a sleek desktop monitor with vibrant glowing stock charts and financial data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLAUvhtQLAMYU-1rP77biT87-zWKQHE1YlW4uBIfH25y2mCFpzsJt2-j-SlQ3Gl0O3XdoVvtC5ECe1i3QZ2JuqWhzyVle26iHA_V6m4lnN_i2vzCyeLO0NRT6TXF18lLXuroGpYCNlQLpplFVsbXwrCNetbOAhQ3bL719TUgfZGvoajti16TX7DDDs6ZW6XqsNkCiS3byLMqRBvuwUOxqSORKd41K_zTQViYYznrgzohchwheddxwns9auTgtBriYgOXvDpy2I9s_2"/>
</div>
<div className="absolute -bottom-10 -left-10 z-20 w-48 md:w-64 rounded-3xl overflow-hidden editorial-shadow border-[6px] border-surface-container-lowest">
<img alt="Mobile Trading" className="w-full h-auto" data-alt="Sleek mobile app interface showing real-time stock price fluctuations with green and red candlesticks on a dark professional background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqjTyPrMfhZfPW2PM7k3ai4elDBqvCOzQGnsOfXeS0C1WuncrCW-RA0d0giDoHSfg0tPnyC0OQvyPfvArC1Lt60d1KyoA7vwF4OBx0zo7smgHHZo74CUuJpjBqPEsppjOBo_PJXsrEAxE8j9lBJM3mibFkhxaF2194jmAL06zpwk5HFKElbff3vKqj-rUn7j7GdBXHIJmSNodXVglun-JQJiQbnQU1IqwET8ZIRcI4brf1n3zeHkJ0KtvzY8U2gGC6eNe50l3ojTY3"/>
</div>
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
</div>
</div>
</section>
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">Institutional Features</h2>
<div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow hover:scale-[1.02] transition-transform">
<div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="query_stats">query_stats</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3">Real-time Data</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Low-latency websocket integrations for instant price updates across global markets and exchanges.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow hover:scale-[1.02] transition-transform">
<div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="psychology">psychology</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3">AI Stock Analysis</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Predictive modeling and sentiment analysis to provide traders with data-backed market signals.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow hover:scale-[1.02] transition-transform">
<div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3">Secure Wallet</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Multi-sig wallet integration for seamless fund management with cold-storage bridge capabilities.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow hover:scale-[1.02] transition-transform">
<div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="verified_user">verified_user</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3">Multi-factor Auth</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Biometric, TOTP, and hardware key support ensuring the highest tier of user account protection.</p>
</div>
</div>
</div>
</section>
<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="bg-surface-container-low rounded-2xl p-6 aspect-square flex flex-col justify-end">
<h4 className="text-4xl font-bold font-headline text-primary mb-2">99.9%</h4>
<p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Uptime SLA</p>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Financial District" className="object-cover h-full w-full" data-alt="Wide angle view of modern glass skyscrapers in a bustling financial district at sunset with orange light reflecting off windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgYXFPqg_lSQpEJ6B-mtOTLzIX3L6MiJpESM5qETKgULhorbNn64hWVcqqUoiW_GUq9Nw8B71xhAkLOMTXTHb-Gnxy1W-orOWeyFLmDEwXqPTuXAF8Dgx8F-WFkV8fgI0fSx3RTr18Ei1r4L5sy_K14vbFsiXwPacjGceqIOTBruu2NCXorHPccbySdLWKdkq_tOprEB5068yrOorIIGfzSU0k7XXWIW3dAXz2livX6aIgqfLkcKsmPTPwpdnmCe1tYxC_8wLgamcp"/>
</div>
</div>
<div className="space-y-4">
<div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Stock Chart" className="object-cover h-full w-full" data-alt="Cinematic close-up of a stock market ticker and glowing green data points on a digital screen in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3sXFD92mUKE06dJ-hR2-Zm97FhlUVsZkzUOW6Uf6HBxEVY1CcsFbGCRBvJtGS0lcq6K3V4W9z9bd1JzKnnZMRqwJpAP-UBJiXirOC_3z1Mo4tkMhJJdWTgFunODqxnlFmmO6O_r5NhwXuUKjpgtg9qAZTMLBKCVtGcjp8nGeC430ryJtszG3FR9PYnTTcfSPBEETwxQmYmKSpfGUkeAQQXDm9Sv_J4zZZlF5opiJOO93PM98noR5FzNF8sjv9l8kVI2FSTwdRmRRi"/>
</div>
<div className="bg-primary text-on-primary rounded-2xl p-6 aspect-square flex flex-col justify-end">
<h4 className="text-4xl font-bold font-headline mb-2">256-bit</h4>
<p className="text-xs font-bold tracking-widest uppercase opacity-80">Encryption</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Security First</span>
<h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight mb-8">Uncompromising Regulatory Compliance</h2>
<p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                            We don't just build apps; we build compliant financial ecosystems. Our engineering process strictly adheres to global financial regulations to ensure your platform is market-ready on day one.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-surface-container-high p-2 rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="policy">policy</span>
</div>
<div>
<h5 className="font-bold font-headline text-lg">SEC &amp; FINRA Frameworks</h5>
<p className="text-on-surface-variant text-sm">Pre-built modules for identity verification (KYC), AML, and trade reporting requirements.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-surface-container-high p-2 rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="security">security</span>
</div>
<div>
<h5 className="font-bold font-headline text-lg">GDPR &amp; PCI-DSS Mastery</h5>
<p className="text-on-surface-variant text-sm">State-of-the-art data encryption and payment gateway integrations that meet highest security standards.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-surface-container-high p-2 rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="gavel">gavel</span>
</div>
<div>
<h5 className="font-bold font-headline text-lg">Global Market Access</h5>
<p className="text-on-surface-variant text-sm">Unified API layer for MiFID II compliance across European and Asian markets.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-primary relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#ffffff_0%,transparent_50%)]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-bold font-headline text-on-primary mb-8 tracking-tighter">Ready to disrupt the <br/>market?</h2>
<p className="text-xl text-primary-fixed mb-12 font-body opacity-90">Book a technical consultation with our fintech architects to discuss your trading platform requirements.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform editorial-shadow">Book A Call</button>
<button className="bg-transparent border-2 border-primary-fixed text-primary-fixed px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">Explore Case Studies</button>
</div>
</div>
</section>

</main>
        </div>
    );
}
