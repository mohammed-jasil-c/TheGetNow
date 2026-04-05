'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function RealEstateAppDevelopmentTemplate() {
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


<section className="relative h-[972px] min-h-[700px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Architectural Home" className="w-full h-full object-cover" data-alt="Modern luxury architectural mansion with floor-to-ceiling glass windows at dusk, soft warm interior lighting against a deep blue twilight sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtBwLID8hNVK-QCi4AHHeyUfjCIS2L-IXP_Sl-nHsi9vfZq4UlyXMmsc3TFLal4saw0iaEoOkeblvlckzeBHSVrOtDrSXoVqqs0CzensPGe-hTvQ9h7e5fiEPSdOzHIrvVJWdJdYSOTpBQV8pYohTcew7voV3SQcU8h90C4ORcuEkkb5isICvQDl2lkJdI_b-_4monle4EqXu60F3j3FXZXGENBSiveMDJOwmkKDSwsrKSLo--3frmVO8GCnX8LqAtPjsdadG-SV6T"/>
<div className="absolute inset-0 hero-gradient-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full mt-20">
<div className="max-w-3xl">
<span className="inline-block bg-primary/10 backdrop-blur-md text-primary-fixed-dim px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
                        Digital Engineering for Real Estate
                    </span>
<h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-tight mb-6 tracking-tighter">
                        Next-Gen Real Estate <br/><span className="text-primary-fixed-dim">App Development.</span>
</h1>
<p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
                        Transforming property ecosystems through VR tours, AI-driven matching, and seamless transaction engines. We build architectural digital products that scale.
                    </p>

<div className="glass-panel p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl border border-white/20">
<div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl">
<span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<input className="bg-transparent border-none focus:ring-0 w-full text-slate-800 placeholder:text-slate-500" placeholder="Search by location..." type="text"/>
</div>
<div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl">
<span className="material-symbols-outlined text-primary" data-icon="home_work">home_work</span>
<select className="bg-transparent border-none focus:ring-0 w-full text-slate-800">
<option>Property Type</option>
<option>Commercial</option>
<option>Residential</option>
</select>
</div>
<button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2">
<span>View Real Estate Solutions</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Immersive Capabilities</h2>
<p className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter">Redefining the Property <br/>Discovery Journey.</p>
</div>
<p className="text-on-surface-variant max-w-sm pb-2">Experience properties before they're built with high-fidelity visualizers and spatial computing integrations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm border border-transparent hover:border-primary/10">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="view_in_ar">view_in_ar</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">AR Property Visualizers</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Augmented Reality overlays for empty spaces, allowing buyers to furnish and layout interiors in real-time.</p>
</div>

<div className="group bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm border border-transparent hover:border-primary/10">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="360">360</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">360° Virtual Tours</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">High-resolution virtual walkthroughs integrated with Matterport and BIM data for true spatial awareness.</p>
</div>

<div className="group bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm border border-transparent hover:border-primary/10">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="filter_alt">filter_alt</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Advanced Filter Engine</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Multidimensional search queries including commute time, school ratings, and sun-path analysis.</p>
</div>

<div className="group bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm border border-transparent hover:border-primary/10">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="distance">distance</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Geolocation Search</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Precision map-based search with polygon drawing tools and point-of-interest clustering logic.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-20">
<h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Ecosystem Focused</h2>
<p className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter">Tools Built for Every Stakeholder.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative group h-[500px] rounded-[2.5rem] overflow-hidden">
<img alt="Person looking at mobile app" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Young professional couple sitting on a couch browsing a sleek modern real estate app on a high-resolution tablet." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCiLKNPA4AYGeGcxc9xi3VdH_l5SCOIImKo-5l1H4SKG2KlMcTCd_nYIFeZuzJuNiC9QvtBwbzmJ5a-AJm063UlE092Ga5CBqWP6KpbxQGSyX-XmQVh2JTtLd2bQiG5pPfwGz8meC99D5JKo6wWMENhoxnQuMlfdT7tGeoGEG2A9ICw0Z2gawFwYx7SWi3ePETeKxCbTOaxcBCcAwT_yEpbsc3yBr0uUR1YXd79Q8Ar3YZ8ZoQSIvY05W0zLeEGPsAcicoV2QqhT8"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<span className="text-primary-fixed-dim text-xs font-bold tracking-widest uppercase mb-2 block">For Buyers</span>
<h4 className="text-2xl font-bold mb-4">Discovery Excellence</h4>
<ul className="space-y-3 text-slate-300 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Personal Property Feeds</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Mortgage Calculators</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Direct Inquiry Messenger</li>
</ul>
</div>
</div>

<div className="relative group h-[500px] rounded-[2.5rem] overflow-hidden lg:mt-12">
<img alt="Luxury apartment interior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Ultra-modern minimalist apartment living room with panoramic city views through clean glass windows, daytime soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBueTEJQUMakFyJ783bO7X8Gf2-OoWUs6IBw-jdKOkqXuYAJYhITNvxVpQAJGxccbdcQsPboctHmal1mskE9FN40kIhPckVKPjPTMoZeRr0OaGxX_EenwP5flR9Bb2QXchbD2nHfFb6V04LIPMaMGRiI9HXqPsVacNJBgia3YRrNaYerlx1BwWa6YJ1I3DGkhdbK2488u69odmTWRvhrflCTw1PNoOnKLD1hEIH_hQ0AbRvTTxyDgkCdoE_XTzWmYWVvDQ-IjxPZVa"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<span className="text-primary-fixed-dim text-xs font-bold tracking-widest uppercase mb-2 block">For Sellers</span>
<h4 className="text-2xl font-bold mb-4">High-Conversion Lists</h4>
<ul className="space-y-3 text-slate-300 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Automated Listing Gen</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Property Analytics</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Smart Price Estimation</li>
</ul>
</div>
</div>

<div className="relative group h-[500px] rounded-[2.5rem] overflow-hidden">
<img alt="Real estate professional in office" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Confident real estate agent in a high-end corporate office, interacting with a digital dashboard on a large glass screen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWTkeQ7XeA59GTbotmXdZryI1gZvZrmgr4PSZTkeu7Jo54IL8S3gcv1M0bFZerDBKkiWNOOlSeDBK1NLJdaNk_rU8U_1AzeK0DsDHrBgUpsLgPCVAZwMVGYiy93DtaCy4EsgNZmxpRap5lxjKHv0Fi4lxxIACKSk5DriDps4VPIUm0cv4f8u8oaFx2u8YoOpuzPVj8HJFUn20NWzL4oCTrksu1VW4m1wrhnW03nu_XDHsYhGYwVYdx9NSFQ1dXY3wLAJfpMr9IzVCx"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 p-10 text-white">
<span className="text-primary-fixed-dim text-xs font-bold tracking-widest uppercase mb-2 block">For Agents</span>
<h4 className="text-2xl font-bold mb-4">Lead Velocity Engine</h4>
<ul className="space-y-3 text-slate-300 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> CRM Integration</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Digital Contract Management</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> In-App Call Scheduling</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Intelligence at Core</h2>
<h3 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-8">AI-Powered Price <br/>Prediction.</h3>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Our proprietary machine learning models analyze historical data, market trends, and neighborhood development to predict property values with 98% accuracy. Empower your users with data-backed investment confidence.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<span className="material-symbols-outlined text-primary" data-icon="insights">insights</span>
<div>
<h5 className="font-bold">Trend Analysis</h5>
<p className="text-sm text-on-surface-variant">Real-time tracking of neighborhood market appreciation.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<span className="material-symbols-outlined text-primary" data-icon="psychology">psychology</span>
<div>
<h5 className="font-bold">NLP Matching</h5>
<p className="text-sm text-on-surface-variant">Semantic search that understands user intent beyond keywords.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="bg-slate-950 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">

<div className="flex items-end justify-between h-64 gap-2 mb-8 px-4">
<div className="w-full bg-primary/20 h-[30%] rounded-t-lg group-hover:h-[45%] transition-all duration-700"></div>
<div className="w-full bg-primary/40 h-[50%] rounded-t-lg group-hover:h-[60%] transition-all duration-700"></div>
<div className="w-full bg-primary/60 h-[40%] rounded-t-lg group-hover:h-[55%] transition-all duration-700"></div>
<div className="w-full bg-primary h-[85%] rounded-t-lg group-hover:h-[95%] transition-all duration-700"></div>
<div className="w-full bg-primary/80 h-[70%] rounded-t-lg group-hover:h-[80%] transition-all duration-700"></div>
<div className="w-full bg-secondary h-[95%] rounded-t-lg group-hover:h-[100%] transition-all duration-700"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-widest px-4">
<span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
</div>
<div className="mt-8 p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="text-slate-400 text-xs">Estimated Value</span>
<span className="text-primary-fixed-dim text-xs font-bold">+12.4%</span>
</div>
<div className="text-2xl font-bold text-white">$1,240,000</div>
</div>

<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-primary/20 text-8xl" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
<img alt="Dashboard Interface" className="relative rounded-[2rem] shadow-2xl border border-white/10" data-alt="Clean, professional SaaS dashboard for real estate agents showing lead conversion charts, client profile cards, and communication logs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBleGbCqwDsmXEOf34w08ihZrqNYtRnSPl9DQETFzYTXStZBYP4QdRGChtCnks4U5lGjaohU7kjude7jIbRLYMkZjRs3SfW-ZqCip1Yaw3nOuyyAS9FRL25rA5OLoaazFcjVZ-3MbZRkKC_jJihjUmBDQ6bC6JNk14b_rFRv8bbjclevFmx1SW-sz49iWKl_oqPfsQDgz0XWY3RLsj4V2Vy3nYhKkS4-iSB8ngOpcfY6DgYsX99BwBxn00qiDBJl5fbPyT1E4POjxCT"/>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-primary-fixed-dim text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Centralized Operations</span>
<h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Integrated CRM &amp; <br/>Lead Logic.</h3>
<p className="text-slate-400 text-lg mb-10">Don't just capture leads, close them. Our custom backends provide agents with unified communication, automated follow-ups, and transaction milestone tracking.</p>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-bold mb-2">Auto-Lead Routing</h4>
<p className="text-slate-500 text-sm">Assign leads instantly based on agent specialty and location.</p>
</div>
<div>
<h4 className="text-white font-bold mb-2">Omnichannel Comms</h4>
<p className="text-slate-500 text-sm">WhatsApp, Email, and SMS integrated into a single client timeline.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 z-10">
<h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Success Story</h2>
<h3 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tighter mb-6">Skyline Portals: From Fragmented Listings to Market Leader.</h3>
<blockquote className="text-xl italic text-on-surface-variant mb-8">
                            "Curator AI didn't just build an app; they built our entire business engine. Our lead quality improved by 3x within ninety days."
                        </blockquote>
<div className="flex gap-12">
<div>
<div className="text-4xl font-bold text-primary mb-1">320%</div>
<div className="text-xs font-bold uppercase tracking-widest text-slate-400">Increase in Leads</div>
</div>
<div>
<div className="text-4xl font-bold text-primary mb-1">45%</div>
<div className="text-xs font-bold uppercase tracking-widest text-slate-400">Lower CAC</div>
</div>
</div>
</div>
<div className="flex-1 w-full md:w-auto h-80 relative z-10">
<img alt="Business Growth" className="w-full h-full object-cover rounded-[2rem] shadow-lg" data-alt="Dynamic corporate team celebrating a successful project launch in a modern, light-filled architectural office setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohWbh_r8w9GuBHFRXVS8eHDr_QO_TiIpNGWQRZmpM1ihhuiqXAtXAVsry-pAeQXgXfKQ0BYw2eOjaJJLdcE8HY1pCmRgTAf1cRPGO0jknJsiUTu8wKUPOnm5ypKDZpLzSf17kjkWwOUAhJFn_aiDBOEFJW7TkQ9uy9NOD_LTQMV50MvTI0BcFjL9dpAw_zc9IZsOC9U2StIMLViQLLS2F04lmtYIbwNUwx9GO5KvxrBTVDthkeUqPb0CgXSfVf9jqh6ikFqIdw9l2"/>
</div>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-50 rounded-full"></div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 mb-24">
<div className="h-10 flex items-center font-bold text-xl text-slate-900">ZILLOW GROUP</div>
<div className="h-10 flex items-center font-bold text-xl text-slate-900">REALTOR.COM</div>
<div className="h-10 flex items-center font-bold text-xl text-slate-900">RED FIN</div>
<div className="h-10 flex items-center font-bold text-xl text-slate-900">TRULIA</div>
<div className="h-10 flex items-center font-bold text-xl text-slate-900">COMPASS</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center px-6">
<span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="bolt">bolt</span>
<h4 className="text-xl font-bold mb-4">Low Latency</h4>
<p className="text-on-surface-variant text-sm">Sub-100ms response times for map rendering and asset loading.</p>
</div>
<div className="text-center px-6">
<span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="cloud_off">cloud_off</span>
<h4 className="text-xl font-bold mb-4">Offline Support</h4>
<p className="text-on-surface-variant text-sm">Cache property data and virtual tours for seamless viewing in low-signal areas.</p>
</div>
<div className="text-center px-6">
<span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="security">security</span>
<h4 className="text-xl font-bold mb-4">Enterprise Security</h4>
<p className="text-on-surface-variant text-sm">SOC2 Type II compliant data handling for sensitive financial transactions.</p>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
