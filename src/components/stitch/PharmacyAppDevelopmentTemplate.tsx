'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PharmacyAppDevelopmentTemplate() {
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


<section className="relative overflow-hidden pt-16 pb-32">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<span className="inline-block px-4 py-1.5 mb-6 text-[0.6875rem] font-bold tracking-[0.1em] text-primary bg-secondary-fixed rounded-full uppercase">Next-Gen Health-Tech</span>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
                        Transforming Healthcare with <span className="text-primary">Intelligent</span> Pharmacy Apps.
                    </h1>
<p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
                        Empower patients with seamless e-prescriptions, automated medication reminders, and doorstep delivery. We build secure, architecturally sound digital pharmacy ecosystems.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:translate-y-[-2px] transition-all premium-shadow">Inquire Now</button>
<button className="bg-surface-container-lowest text-primary border border-outline-variant/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container transition-all">View Our Portfolio</button>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 bg-white rounded-[2.5rem] overflow-hidden premium-shadow transform lg:rotate-3 transition-transform hover:rotate-0 duration-700">
<img alt="Professional pharmacist using digital tablet" className="w-full h-[500px] object-cover" data-alt="Modern high-tech pharmacy interior with a professional female pharmacist in a white coat holding a sleek tablet device" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ6V-VJyQloehq62GXtUoKJVeaFkk_OV4eb8yTBIIZjA2sWo6dOdiA9vmwQkNIqOyvzzucfcsoOA-mIISr3VF2McB4_dl2zGnl-FyynLx9jv_tlLQPOuYpVbRHIUZ8M7Yw1DFm9HY0HbdlFsowpJ-M1RYX4HrF5RMNI0h4Ju__qa4F6300GaD8stH--SkdaCU-pPSn5U3qvsVYT5-Chohi_GkIesWvaozMw40fXSn1liI2tZGD0JE_9bGAzSBeAqUR3frAGJLuojs"/>
<div className="absolute bottom-6 left-6 right-6 p-6 glass-nav rounded-2xl border border-white/40">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white">
<span className="material-symbols-outlined" data-icon="clinical_notes">clinical_notes</span>
</div>
<div>
<p className="font-headline font-bold text-slate-900">E-Prescription Verified</p>
<p className="text-sm text-slate-600">Order #4492 processed successfully</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-24 rounded-[3rem]">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-20">
<h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">The Patient-First Experience</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Every feature is engineered to simplify the patient journey, from the first symptom to the final dose.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" data-icon="upload_file">upload_file</span>
</div>
<h3 className="font-headline font-bold text-xl mb-3">E-Prescription Upload</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Secure OCR-powered scanning and instant validation of physical prescriptions.</p>
</div>

<div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" data-icon="notifications_active">notifications_active</span>
</div>
<h3 className="font-headline font-bold text-xl mb-3">Medication Reminders</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Smart notifications ensuring patients never miss a dose, synced across all devices.</p>
</div>

<div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" data-icon="chat_bubble">chat_bubble</span>
</div>
<h3 className="font-headline font-bold text-xl mb-3">24/7 Pharmacist Chat</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Direct access to certified medical professionals for immediate guidance and support.</p>
</div>

<div className="bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" data-icon="reorder">reorder</span>
</div>
<h3 className="font-headline font-bold text-xl mb-3">Refill Tracking</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Automated reordering systems that predict when a patient's supply is running low.</p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
<div className="lg:w-2/5 order-2 lg:order-1">
<h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">Expert Admin Control</h2>
<p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                        A centralized command center for pharmacists. Manage inventory in real-time, process orders with one-click verification, and monitor courier statuses on a single unified dashboard.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="check_circle">check_circle</span>
<span className="font-medium">Predictive Inventory Management</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="check_circle">check_circle</span>
<span className="font-medium">Multi-Store Synchronization</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="check_circle">check_circle</span>
<span className="font-medium">Revenue &amp; Growth Analytics</span>
</li>
</ul>
</div>
<div className="lg:w-3/5 order-1 lg:order-2 relative">
<div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl transform lg:translate-x-12 lg:-rotate-2 border border-slate-700">
<img alt="Pharmacist dashboard UI interface" className="rounded-xl w-full h-[450px] object-cover opacity-90" data-alt="Sleek modern dashboard interface showing medical inventory charts, order processing lists, and analytical graphs in a dark blue tech theme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK5DhpgwGy6XV_jWwagGdTdZS0z2uxruMkfAV0vvnbRsunrRnTRukwe71Lt-tXP0oFsRMltlmQM-zsuojqtQUAXkN97QFQNrJBsQnxPHw-QQsgicEtJB90Z-KD90dJenwxPjEeN7LG4-3wPQfBUgeRFIZng_8rAueC_MdodS9oOm--GfXgytIFjIZkp-APl-HqZfZQCR79oSQZalnP1Prxgxq8Pa-6G-IF3VR6M7tmgTUEcnqibaMS7-3rBAp7V2yjP-Or2bKJBYlz"/>
<div className="absolute -top-6 -left-6 bg-primary p-6 rounded-2xl premium-shadow text-white">
<p className="text-3xl font-bold">1,280+</p>
<p className="text-xs uppercase tracking-widest opacity-80">Daily Orders Handled</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">Uncompromising Security &amp; Compliance</h2>
<p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            Medical data is sacred. Our pharmacy apps are architected from the ground up to meet and exceed global regulatory standards.
                        </p>
<div className="flex flex-wrap gap-8">
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-slate-800 flex items-center justify-center rounded-2xl mb-4 border border-slate-700">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="verified_user">verified_user</span>
</div>
<span className="font-bold text-sm uppercase tracking-widest">HIPAA Compliant</span>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-slate-800 flex items-center justify-center rounded-2xl mb-4 border border-slate-700">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="policy">policy</span>
</div>
<span className="font-bold text-sm uppercase tracking-widest">GDPR Ready</span>
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-slate-800 flex items-center justify-center rounded-2xl mb-4 border border-slate-700">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="lock">lock</span>
</div>
<span className="font-bold text-sm uppercase tracking-widest">HL7 Standards</span>
</div>
</div>
</div>
<div className="bg-slate-800/50 p-10 rounded-[3rem] border border-slate-700 backdrop-blur-md">
<div className="space-y-8">
<div className="flex gap-6">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="shield">shield</span>
<div>
<h4 className="font-bold text-xl mb-2">End-to-End Encryption</h4>
<p className="text-slate-400">All patient data and communications are protected by AES-256 grade encryption protocols.</p>
</div>
</div>
<div className="flex gap-6">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="security">security</span>
<div>
<h4 className="font-bold text-xl mb-2">Automated Audit Logs</h4>
<p className="text-slate-400">Traceable records for every prescription and transaction for complete regulatory accountability.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Precision Logistics Integration</h2>
<p className="text-on-surface-variant text-lg">Monitor the pulse of your delivery network with high-fidelity map tracking and courier optimization.</p>
</div>
<div className="bg-surface-container-high px-6 py-3 rounded-full flex items-center gap-4">
<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-sm font-bold uppercase tracking-tight">Active Deliveries: 242</span>
</div>
</div>
<div className="bg-white p-4 rounded-[2.5rem] premium-shadow h-[600px] relative overflow-hidden">
<img alt="Logistics map visual" className="w-full h-full object-cover rounded-[2rem]" data-alt="A stylized minimalist digital map of a city with blue glowing route lines and medical cross pins representing courier locations" data-location="Berlin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYVBgF3tRdSoossU22m60uxFliza8NfiaAmWO9zDqrGN0b7fUJoIGM362qb-3HUz38dg5pQTo4EXAtgcCLEU5MJyHfQapACCTWm5gxjIzFTUa3O2gJi-YHdh9OwqEJXFq1K0sGj39uXZi6PlAA1WmEnHyfEAajhe6Ht5wnSwzBS9cIc1nioRZcVtaa8xnt-ZTVlTWVE3Qm0_CYxunzXC_vRqg49ndc_RKH-POpmIPD7hNPyisC81JVZQ6Jiej7FBMWZ_WOeZEx1B5z"/>
<div className="absolute top-12 left-12 w-80 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-100">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold text-slate-900">Courier Tracking</h4>
<span className="material-symbols-outlined text-slate-400" data-icon="more_horiz">more_horiz</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="electric_moped">electric_moped</span>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-slate-500 mb-1">
<span>Order #512</span>
<span>3 Mins</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary w-4/5 h-full rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full">
<span className="material-symbols-outlined text-slate-400" data-icon="electric_moped">electric_moped</span>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-slate-500 mb-1">
<span>Order #513</span>
<span>12 Mins</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary w-1/4 h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 h-auto lg:h-[700px]">

<div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative">
<div className="z-10">
<span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 inline-block">Integration</span>
<h3 className="font-headline text-4xl font-extrabold tracking-tight mb-6">Seamless Hospital Ecosystem</h3>
<p className="text-on-surface-variant text-lg max-w-md">Our apps don't work in isolation. We bridge the gap between clinics, specialists, and patients through robust API integrations.</p>
</div>
<div className="relative mt-12 z-10 flex flex-wrap gap-4">
<span className="px-6 py-2 bg-white rounded-full font-bold shadow-sm">Epic EMR</span>
<span className="px-6 py-2 bg-white rounded-full font-bold shadow-sm">Cerner</span>
<span className="px-6 py-2 bg-white rounded-full font-bold shadow-sm">Allscripts</span>
<span className="px-6 py-2 bg-white rounded-full font-bold shadow-sm">AthenaHealth</span>
</div>
<div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
</div>

<div className="bg-primary text-white rounded-[3rem] p-10 flex flex-col justify-center text-center">
<p className="text-5xl font-black mb-2">17.4%</p>
<p className="text-xs uppercase tracking-widest opacity-80 mb-6">Annual Growth Rate</p>
<p className="font-medium">The e-pharmacy market is projected to grow by $177B by 2026. We help you lead the curve.</p>
</div>

<div className="bg-surface-container-highest rounded-[3rem] p-10 flex flex-col justify-between">
<h4 className="font-bold text-xl mb-4">Optimized Tech Stack</h4>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Flutter</span>
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Node.js</span>
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Python</span>
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">PostgreSQL</span>
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Redis</span>
<span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">AWS HealthLake</span>
</div>
<div className="mt-8">
<a className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">
                                Tech Sheet <span className="material-symbols-outlined" data-icon="arrow_right_alt">arrow_right_alt</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-5xl mx-auto px-8">
<div className="bg-slate-900 rounded-[4rem] p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 hero-gradient opacity-10"></div>
<div className="relative z-10">
<h2 className="font-headline text-5xl font-extrabold text-white mb-8 tracking-tighter">Ready to Build Your Digital Pharmacy?</h2>
<p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Join the digital revolution in healthcare engineering. Our experts are ready to curate your platform from concept to launch.</p>
<button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform premium-shadow">Build Your Digital Pharmacy Today</button>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
