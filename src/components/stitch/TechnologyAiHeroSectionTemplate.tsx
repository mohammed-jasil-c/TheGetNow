'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NeuralSphere from '@/components/3d/NeuralSphere';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TechnologyAiHeroSectionTemplate() {
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


<section className="relative px-8 py-24 max-w-screen-2xl mx-auto overflow-hidden">

<div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-10 blur-3xl pointer-events-none bg-gradient-to-br from-primary to-tertiary-container rounded-full"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant text-xs font-bold uppercase tracking-widest mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                        Next Generation Intelligence
                    </div>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-on-background tracking-tighter leading-[0.95] mb-8">
                        Empowering <br/>the <span className="text-primary">Future</span> <br/>with AI Agents
                    </h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-medium opacity-80">
                        Deploy autonomous neural workers that learn your workflows, automate complex decisions, and scale your creative output at the speed of light.
                    </p>
<div className="flex flex-wrap gap-6 items-center">
<button className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            Get Started Free
                        </button>
<button className="group flex items-center gap-3 text-on-background font-bold text-lg">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant/30 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined">play_arrow</span>
</span>
                            Watch the Atelier
                        </button>
</div>

<div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-outline-variant/10">
<div>
<div className="text-3xl font-bold text-on-background tracking-tighter">99.9%</div>
<div className="text-sm font-label text-outline uppercase tracking-wider">Uptime Reliability</div>
</div>
<div>
<div className="text-3xl font-bold text-on-background tracking-tighter">2.4M</div>
<div className="text-sm font-label text-outline uppercase tracking-wider">Agents Deployed</div>
</div>
<div>
<div className="text-3xl font-bold text-on-background tracking-tighter">150+</div>
<div className="text-sm font-label text-outline uppercase tracking-wider">Integrations</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center">

<div className="relative z-20 w-full h-full flex items-center justify-center">
<div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-primary to-primary-container rounded-[4rem] rotate-12 absolute -z-10 blur-2xl opacity-20"></div>
<div className="relative group w-full flex items-center justify-center">
<div className="w-full max-w-[500px] aspect-square relative z-30">
    <NeuralSphere />
</div>

<div className="absolute -right-8 top-1/4 backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-xl z-40 border border-white/40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm" >bolt</span>
</div>
<div>
<div className="text-xs font-bold text-outline uppercase tracking-tighter">Latency</div>
<div className="text-sm font-bold text-on-background">12ms Response</div>
</div>
</div>
</div>
<div className="absolute -left-12 bottom-1/4 backdrop-blur-xl bg-slate-900/80 p-6 rounded-2xl shadow-xl z-40 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm" >check_circle</span>
</div>
<div>
<div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Neural Status</div>
<div className="text-sm font-bold text-white">Optimized</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-10 left-0 w-16 h-16 bg-tertiary-fixed rounded-full blur-xl opacity-40 animate-pulse"></div>
<div className="absolute bottom-20 right-0 w-32 h-32 bg-primary-fixed rounded-full blur-2xl opacity-30 animate-pulse delay-700"></div>
</div>
</div>
</section>

<section className="px-8 py-32 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-background mb-6">Designed for the Atelier. <br/>Built for the enterprise.</h2>
<p className="text-on-surface-variant text-lg font-medium opacity-70 leading-relaxed">Our platform provides the architectural foundation for the next decade of digital evolution.</p>
</div>
<button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold border border-outline-variant/10 hover:bg-surface-bright transition-all">View Ecosystem</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-primary-container p-12 rounded-[2rem] text-on-primary-container relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Neural Architecture</h3>
<p className="text-on-primary-container/80 text-lg leading-relaxed max-w-md">Our agents utilize proprietary LLM bridging to ensure zero-latency decision making across distributed clouds.</p>
</div>
</div>

<div className="absolute top-0 right-0 w-1/2 h-full -mr-16 mt-8 opacity-20 group-hover:scale-110 transition-transform duration-1000">
<img alt="Abstract neural network graphic" className="w-full h-full object-cover rounded-full" data-alt="Intricate glowing fiber optic lines intersecting in a dark space, representing a complex digital neural network connection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvlMZhyBhtK5APMMvBDq45rReQ9gmnWaSC4OfcIqE-8NcTHQ-8-Qs3Wqv7r9uwfjaZyXrxWwWHXfjO81T1nA9C3jPmjc18WDyNbRuQkjtRxNTRWCEhEL9ZHF5q-m3ChiH2S3saZ8Rj4p04WHkLtMn0aOmh0tirK1am3fSLmfQ4I4ou_by47mXwO0T-ilTgnZ7P6SkdLIe6iUgOjPgMstY15L48ugp4xITitaG9iPRBghnmkxw9_BOubLjn16EstpBXD0vz638Wb-R"/>
</div>
</div>

<div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/10 hover:shadow-2xl transition-all duration-500 group">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">shield</span>
</div>
<h3 className="text-2xl font-bold tracking-tight text-on-background mb-4">Fortified Privacy</h3>
<p className="text-on-surface-variant font-medium opacity-80 leading-relaxed mb-8">End-to-end encrypted model weights. Your data never leaves your infrastructure.</p>
<a className="text-primary font-bold inline-flex items-center gap-2 group/link" href="#">
                            Learn More 
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>

<div className="bg-on-background p-10 rounded-[2rem] text-surface flex flex-col justify-between group">
<div>
<div className="text-primary text-5xl font-extrabold tracking-tighter mb-4 italic">01.</div>
<h3 className="text-2xl font-bold tracking-tight mb-4">Global Deployment</h3>
<p className="text-surface-variant font-medium opacity-60 leading-relaxed">Scale across 64 edge regions instantly with automated load balancing.</p>
</div>
<div className="mt-12 bg-white/5 rounded-2xl p-4 border border-white/10">
<div className="flex items-center gap-4 mb-4">
<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xs" >public</span>
</div>
<span className="text-xs font-bold uppercase tracking-widest text-surface/40">Active Nodes</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary w-2/3"></div>
</div>
</div>
</div>
<div className="md:col-span-2 bg-surface-bright p-12 rounded-[2rem] border border-outline-variant/10 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h3 className="text-3xl font-bold tracking-tight text-on-background mb-4">Dev-First SDK</h3>
<p className="text-on-surface-variant text-lg leading-relaxed mb-8">Integrate agentic workflows with three lines of code. Support for Python, TypeScript, and Rust.</p>
<div className="bg-on-background/5 p-6 rounded-2xl font-mono text-sm text-on-background/80 mb-6">
<span className="text-primary">import</span> {"{ Agent }"} <span className="text-primary">from</span> 'vanguard';<br/>
<span className="text-primary">const</span> bot = <span className="text-primary">new</span> Agent({"{"} task: <span className="text-green-600">'optimize'</span> {"});"}<br/>
<span className="text-primary">await</span> bot.start();
</div>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden relative shadow-lg">
<img alt="Code editor" className="w-full h-full object-cover" data-alt="Close up of a computer screen showing vibrant colorful code on a dark theme background in a modern workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5T8gt6AV8-Nuf8GinjBHOMNYIFZCV6f1ZcN8YyCJVePNP15dVdUkTW9yBlTfuUat50xDPBVruVUg41KIEPl8ZhuZ550IZAIdy08n8AvlJ0IyA_5bYZPaHK6lIs3CGBoZNTJuEC9hZu669F1wZ0S7B5JHWPGVQsPSUqSTt5nK34QztMbp3kFGpPG4yEj8mm8QA95rfNNX1455fLKO2V6rWzaQU9Yrl7ptahFcwRv4xcO8TWq7mo3Tgn7uT95IskD0r_EJFAJljkQ5q"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative px-8 py-32 max-w-screen-2xl mx-auto">
<div className="bg-on-background rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[120px]"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">Join the vanguard of AI.</h2>
<p className="text-surface-variant text-lg md:text-xl max-w-2xl opacity-70 mb-12">Get exclusive access to our beta features and early insights into the autonomous agent ecosystem.</p>
<form className="w-full max-w-lg flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-on-background px-10 py-5 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl">Subscribe</button>
</form>
<div className="mt-16 flex flex-wrap justify-center gap-10 opacity-30 grayscale invert">
<img alt="Tech Partner" className="h-8" data-alt="Generic technology company logo placeholder on a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCaR7jj4oxT3xH9EItnVRdyJb_uEts5XlJQo8dZhmSL4mc5QoEXoD1uKGDKyxsBcl-qS8ZeBXJAJV0XMQYbmy82PivTz-UQkZRN49JMckenEgAZss4YA5Y_uz9jXWcPzTg57_YibSyGLxQZMdZJm2KSAQTrMcOslI0ywKxY7CrRROcRGfMgfvL7OfmYSsA54I3bDJYhl4Y5slgln7kmrTg_w1x4bkRw1mEp-cCqeTYbHAuAAzv4kyzFvPRNuHabD9EgLaCct5f1t0q"/>
<img alt="Tech Partner" className="h-8" data-alt="Generic minimalist startup logo placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfG5ejNmzy5hlHRokYhaIXg-4092bv2uJuUv1pQgevdCR7xaCIqzVn8MrDOocGGaTg-GS_IpdKnutZyfv8Z4wUS1DUgAJithkp109EjROgPwsXzEls-q5mGro4OIWLavy63wi9hKfo4qvMjv-9mvhYfB0HTUUbA0SZjA4iBQdSj2zCgk8Z_42X3b3WofrM9eHNJItU9o1t_1BJDt-s9IEEggPS2OzUTOEbC86yfrtum5NmdHv3vtQvL9GHh8D1aia_paRir0-zB6k"/>
<img alt="Tech Partner" className="h-8" data-alt="Generic software company logo placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLV6FLTZ4NMJ04yPBtPC0FyFW1QKN0SNToSjUNp_qReKDfY7_GYKYIQnjgFZlPKjdgOFVr2bklnMdwZTxpy2WKbnJmuYAaYj9hQ7Y4h8L4AwUKtbx9YY1pqr9twxb-zwLwGkMoEF9kLCcfKSqSG2kM3mYf-lQrYYS0hmCRibAKC6Va296CqPiJdrzZvOdD68bla2QxN3Le6kUy-SNxWdMAvNf7y6n9iYTv3OfacbgpJb_9dkcG9zfCOO8Y8VNWMZ6y-fVFt25FlVqx"/>
<img alt="Tech Partner" className="h-8" data-alt="Modern corporate logo placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIgh5Xguo1zSj7tqpf9wrNp6W6bSsUYtHu472lsKNx6oixPaHLkkARjpU81BvixA72R16th0giGFbs6sAHaMOUPzwoaCSMEra_WGWzXYv09pv9RnsFsbX0qv9qjrtzkTv2sFDXAMxMITUvAYnqyadaNSUfYBuKSfyWm-X9hfJpQeLBzNIkoyVpw1iPrHQv7QRv0C4CvhHWQ-iVbzn4c3r7sArs9_uZlJpjnYVT5cM0vCIWPtOkkpDYVSOTXE-WEjjpzuVJqf1h_Lhz"/>
</div>
</div>
</div>
</section>

</main>
        </div>
    );
}
