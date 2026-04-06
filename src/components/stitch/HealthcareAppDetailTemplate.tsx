'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HealthcareAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center bg-surface-container-lowest overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-xl">
<span className="label-text text-tertiary text-xs uppercase tracking-[0.2em] font-bold mb-6 block">Healthcare Excellence</span>
<h1 className="text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-8">Curating the future of digital care.</h1>
<p className="text-xl text-on-surface-variant leading-relaxed mb-10 font-body max-w-lg">
                        Transforming patient outcomes through serene, high-performance medical interfaces that balance clinical precision with human empathy.
                    </p>
<div className="flex items-center gap-6">
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label font-bold text-sm uppercase tracking-widest transition-all hover:shadow-xl">
                            Start Your Healthcare Project
                        </button>
</div>
</div>
<div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl group">
<img alt="Serene medical environment" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist modern doctor consultation room with soft natural light filtering through large windows and a clean white medical tablet on a wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7XBFlx6ahMdv5uf_843PGWfxxVSPXD2pkLNzB5MpTPt7kDAusAaSvqyHQ3PZ1M245ZtWIlZIWbWHjApYLTAtyQpRO5_oq7AApzPh6jBzTzA0dG_NN0do7uyuR0BJA2iFKDqm2tPB4QK4rQ_ShucHQHFWLgF5QYmUQ0BW4AZkQ77qeSty06LTVRY4vtrK5PX2E0JqIJI3OMheTHTtloQCtFDDIOoCAV_S0zWXqh_Rz_ud9SABzbLeufJO6eSDfCLIN7Aju7aIhbG5M"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
</div>
</div>
<div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-1/2"></div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<span className="label-text text-primary text-xs uppercase tracking-[0.2em] font-bold mb-4 block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-bold leading-tight">Core Capabilities</h2>
</div>
<p className="text-on-surface-variant font-body max-w-xs border-l-2 border-primary-fixed-dim pl-6">
                        Architecting robust solutions that empower providers and comfort patients.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-7 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-500">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-6">videocam</span>
<h3 className="text-2xl font-bold mb-4">Telemedicine Integration</h3>
<p className="text-on-surface-variant font-body leading-relaxed max-w-sm">Seamless high-definition virtual consultations that bridge the gap between patient and provider with zero latency.</p>
</div>
<div className="mt-8 flex justify-between items-end">
<img alt="Telehealth UI" className="w-32 h-32 object-cover rounded-lg opacity-40" data-alt="A clean UI wireframe showing a video call interface with medical vitals displayed on the side, minimalist and medical aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJ2Mjj0nggOL5Wf2Y09dAD_hzGSl3TCIW23ZC4UnQ8bt0aVT5hVRQOkg9Y08ndtWaOWJqiZZWJYctZsO8Cz0hQLMFurWVT0CUIs9EY-xtBvEf4btZFPdl0ik8pQtrZTIX_PdLd-Ua5MVRh91bx8O2DydB9-im6DBXXZGxqwTQA52E1bE18_0Y2m3QjxzEcAGhzZULBe9FZ-ZYcTzLXoZ5vZYlOvAetIiT1j0_ZQS6OcASpKU5JGHpR0pIpKQ5xiJCwqXOFhCaD34a"/>
<span className="label-text text-xs text-primary font-bold tracking-widest uppercase">Expertise 01</span>
</div>
</div>

<div className="md:col-span-5 bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-3xl mb-6" >security</span>
<h3 className="text-2xl font-bold mb-4">HIPAA-Compliant Patient Records</h3>
<p className="opacity-90 font-body leading-relaxed">Top-tier encryption protocols ensuring patient data remains private, secure, and accessible only to authorized personnel.</p>
</div>
<span className="label-text text-xs text-white font-bold tracking-widest uppercase opacity-60">Expertise 02</span>
</div>

<div className="md:col-span-5 bg-surface-container-highest p-10 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-tertiary text-3xl mb-6">medication</span>
<h3 className="text-2xl font-bold mb-4">Prescription Management</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Automated workflows for refill requests and digital pharmacy integrations that reduce administrative burden.</p>
</div>
<span className="label-text text-xs text-secondary font-bold tracking-widest uppercase">Expertise 03</span>
</div>

<div className="md:col-span-7 bg-white p-10 rounded-xl shadow-sm flex items-center gap-10 hover:shadow-md transition-shadow">
<div className="flex-1">
<span className="material-symbols-outlined text-primary text-3xl mb-6">calendar_month</span>
<h3 className="text-2xl font-bold mb-4">Appointment Scheduling</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Intuitive calendar systems with smart reminders to decrease no-shows and optimize clinic throughput.</p>
</div>
<div className="hidden md:block w-1/3 h-full bg-surface-container-low rounded-lg p-6">
<div className="space-y-3">
<div className="h-2 w-full bg-primary-fixed rounded-full"></div>
<div className="h-2 w-2/3 bg-surface-variant rounded-full"></div>
<div className="h-2 w-3/4 bg-surface-variant rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-dim">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-start">
<div className="sticky top-32">
<span className="label-text text-primary text-xs uppercase tracking-[0.2em] font-bold mb-6 block">Our Methodology</span>
<h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Developing for Compliance</h2>
<p className="text-xl text-on-surface-variant font-body leading-relaxed mb-12">
                            A rigorous, three-stage approach to building healthcare software that exceeds global regulatory standards.
                        </p>
<div className="w-24 h-1 bg-primary"></div>
</div>
<div className="space-y-24">

<div className="group">
<span className="text-6xl font-serif italic text-primary-fixed-dim block mb-6 group-hover:text-primary transition-colors">01</span>
<h3 className="text-2xl font-bold mb-4">Security Audit</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Comprehensive vulnerability assessments and penetration testing to identify and fortify every possible data entry point within your ecosystem.</p>
</div>

<div className="group">
<span className="text-6xl font-serif italic text-primary-fixed-dim block mb-6 group-hover:text-primary transition-colors">02</span>
<h3 className="text-2xl font-bold mb-4">Patient-Centric Design</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Accessibility-first interfaces crafted for clarity, ensuring that technology never becomes a barrier to receiving essential medical care.</p>
</div>

<div className="group">
<span className="text-6xl font-serif italic text-primary-fixed-dim block mb-6 group-hover:text-primary transition-colors">03</span>
<h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Bespoke API development that connects your new digital platform with existing Electronic Health Record (EHR) systems without friction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="material-symbols-outlined text-tertiary-container text-6xl mb-12" >format_quote</span>
<blockquote className="text-3xl md:text-4xl font-serif italic leading-snug text-on-surface mb-12">
                    "Alexandria didn't just build an app; they curated an experience that feels as professional and reliable as the physicians we employ. Our patient engagement has doubled since the launch."
                </blockquote>
<cite className="not-italic">
<span className="block font-label font-bold text-sm uppercase tracking-widest text-primary mb-2">Dr. Elena Rodriguez</span>
<span className="block font-body text-secondary text-sm">Chief Innovation Officer, North Star Health Systems</span>
</cite>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-primary p-12 md:p-20 rounded-xl text-center relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to elevate your patient experience?</h2>
<button className="bg-white text-primary px-10 py-5 rounded-full font-label font-bold text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-colors shadow-xl">
                            Start Your Healthcare Project
                        </button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
