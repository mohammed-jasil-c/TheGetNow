'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HealthcareAppDevelopmentTemplate() {
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


<section className="relative overflow-hidden py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-[0.15em] mb-6">Medical Innovation</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-[1.1] mb-8">
                        Precision Digital <span className="text-primary">Health Architecture</span>
</h1>
<p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
                        We build high-performance healthcare ecosystems that connect patients and providers through secure, intuitive, and data-driven mobile and web experiences.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="signature-gradient text-on-primary px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/25 flex items-center gap-2">
                            Our Capabilities
                        </button>
<button className="bg-surface-container-low text-primary px-10 py-4 rounded-full font-bold border border-outline-variant/15 hover:bg-surface-container-high transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
<div className="relative">
<div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl"></div>
<div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Professional doctor using tablet" className="w-full h-[500px] object-cover" data-alt="Modern professional doctor in a clean clinical setting using a high-tech tablet for patient data management, soft natural daylight, minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIfDH2XwQJD2Uv0e6p7biVsD8MpdUzlJ8ZNMpm0D1kX4ryd17YdYEOoVebJmwQ8isl0Gwcc49XQ1CaOlD3ROP-qDd-Z0n8a7JuABuIb3betM52HCtBZ6KAWmAwowYcJxchd37lE_ImZUbWUpcyKAWHfQUrFhtgCntVdSu8m9GT9K1uFw87w8ClyHMPWBBlTCMC8sWE0-RLsvHj8ydIBCkoWZ4zJ-wlPhQzXCmX09_Ww_Rfy5PMBOY-CO-tGs3eDeVs8qb8aKNeaPhp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<label className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Security First</label>
<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">Fortified Compliance &amp; Security</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Beyond standard encryption. We engineer platforms that exceed HIPAA, GDPR, and SOC2 requirements.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="p-10 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="lock" data-weight="fill" >lock</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">HIPAA Integrity</h3>
<p className="text-on-surface-variant leading-relaxed">Full-stack compliance architecture ensuring all PHI remains encrypted at rest and in transit.</p>
</div>
<div className="p-10 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="security" data-weight="fill" >security</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Blockchain Ledgers</h3>
<p className="text-on-surface-variant leading-relaxed">Immutable audit trails for medical records providing unmatched transparency and security.</p>
</div>
<div className="p-10 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="shield_with_heart" data-weight="fill" >shield_with_heart</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Zero-Trust Access</h3>
<p className="text-on-surface-variant leading-relaxed">Multi-layered authentication protocols specifically tailored for clinical environments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<span className="text-tertiary font-bold text-sm tracking-widest uppercase mb-4 block">Intuitive Interfaces</span>
<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">Unified Clinical Intelligence</h2>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Our dashboards reduce cognitive load for clinicians while empowering patients with real-time health metrics. Seamlessly integrated with EHR/EMR systems.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<span className="text-on-surface font-medium">Real-time Biometric Visualization</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<span className="text-on-surface font-medium">AI-Assisted Diagnostic Triage</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<span className="text-on-surface font-medium">Secure Telehealth Video Integration</span>
</li>
</ul>
</div>
<div className="lg:col-span-7 relative">

<div className="relative bg-surface shadow-2xl rounded-xl border border-outline-variant/10 overflow-hidden">
<div className="h-10 bg-surface-container flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-error/40"></div>
<div className="w-3 h-3 rounded-full bg-primary/40"></div>
<div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
</div>
<div className="p-6 grid grid-cols-12 gap-6">
<div className="col-span-4 space-y-6">
<div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/5">
<div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter mb-2">Patient Vitality</div>
<div className="text-3xl font-bold text-primary tracking-tighter">98.2%</div>
<div className="w-full h-1 bg-surface-container mt-3 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-primary"></div>
</div>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm border border-outline-variant/5">
<div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter mb-2">Upcoming Consults</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container"></div>
<div className="text-xs font-semibold">Dr. Sarah Jenkins</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container"></div>
<div className="text-xs font-semibold">Dr. Michael Chen</div>
</div>
</div>
</div>
</div>
<div className="col-span-8">
<div className="p-6 bg-white rounded-lg h-full shadow-sm border border-outline-variant/5">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold">Health Trends</h4>
<span className="text-[10px] bg-tertiary-container px-2 py-0.5 rounded-full font-bold">LIVE DATA</span>
</div>
<img alt="Healthcare data visualization" className="w-full h-48 object-cover rounded" data-alt="Abstract colorful data visualization graph with clean professional lines representing health metrics on a white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo6ZPInqIWsa4kLbQ9PN5Kpnv8C9oCHCynHAXlOVTK714aB8FLRn0-wfd2w-aK3JtI8B5pX9A7jpEBLd3Ygz1AkJ2NNYiAYg5RlThrUp3pTtosN-DOLLbqQukN_GLTaVVwlSQ9-Psl0taYd4O3x5NnaY8gpChrd0H77t4Uh8FPLENiaaCTFI8lctDtCFEXHOr30-pXkyQIblDzcXrbx7PTOaGW1uS8Uh4mHCcREUYYFEq9cNDDyBEoDJGAXVERgScj05U36lenTErG"/>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-outline-variant/10 hidden md:block max-w-[240px]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full signature-gradient flex items-center justify-center text-white">
<span className="material-symbols-outlined">pill</span>
</div>
<div className="font-bold">Reminders</div>
</div>
<p className="text-xs text-on-surface-variant">Insulin dosage adjustment confirmed for Patient #4421</p>
</div>
</div>
</div>
</section>

<section className="bg-surface py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<label className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Proven Outcomes</label>
<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Impactful Clinical Success</h2>
</div>
<button className="text-primary font-bold flex items-center gap-2 group">
                        Explore Methodology
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-colors duration-500">
<div className="p-12">
<div className="flex items-center gap-4 mb-8">
<div className="text-5xl font-extrabold text-primary tracking-tighter">40%</div>
<div className="text-on-surface-variant font-bold leading-tight uppercase text-xs tracking-widest">Reduction in<br/>Patient Readmission</div>
</div>
<h3 className="text-2xl font-bold mb-4">VitalConnect RPM Platform</h3>
<p className="text-on-surface-variant mb-8">Implemented a remote patient monitoring system for a major cardiology clinic, resulting in significant clinical efficiency gains.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white text-xs font-bold rounded-full">iOS / Android</span>
<span className="px-3 py-1 bg-white text-xs font-bold rounded-full">Wearable Sync</span>
</div>
</div>
<div className="absolute top-0 right-0 h-full w-1/3 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[200px] absolute -right-20 top-10">monitor_heart</span>
</div>
</div>

<div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container transition-colors duration-500">
<div className="p-12">
<div className="flex items-center gap-4 mb-8">
<div className="text-5xl font-extrabold text-primary tracking-tighter">2.4x</div>
<div className="text-on-surface-variant font-bold leading-tight uppercase text-xs tracking-widest">Increase in<br/>Clinical Throughput</div>
</div>
<h3 className="text-2xl font-bold mb-4">SurgiTrack EMR Middleware</h3>
<p className="text-on-surface-variant mb-8">Optimized scheduling and reporting workflows for a regional surgery center using AI-driven queue management.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white text-xs font-bold rounded-full">React Native</span>
<span className="px-3 py-1 bg-white text-xs font-bold rounded-full">AWS Cloud</span>
</div>
</div>
<div className="absolute top-0 right-0 h-full w-1/3 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[200px] absolute -right-20 top-10">medical_services</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="signature-gradient rounded-xl p-12 md:p-20 text-center text-on-primary shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="grid grid-cols-12 h-full gap-4">
<div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div className="border-r border-white/20"></div><div></div>
</div>
</div>
<div className="relative z-10">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Ready to Architect Your Digital Health Future?</h2>
<p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join the leading healthcare organizations trust Stratos Core for precision-engineered digital products.</p>
<button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-surface-bright transition-all shadow-xl">
                            Request a Proposal
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
