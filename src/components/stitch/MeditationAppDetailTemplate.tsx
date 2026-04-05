'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MeditationAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center px-8 overflow-hidden bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6 z-10">
<span className="label-archival text-xs uppercase tracking-[0.3em] text-tertiary font-semibold mb-6 block">Volume IV: Mental Clarity</span>
<h1 className="serif-authority text-6xl md:text-8xl leading-[1.1] text-on-surface mb-8">Designing Inner Stillness.</h1>
<p className="sans-clarity text-lg text-on-surface-variant max-w-lg leading-relaxed mb-10">
                        A curation of silence in an era of noise. Explore the high-end editorial approach to mindfulness, where every breath is a deliberate act of scholarship.
                    </p>
<div className="flex items-center space-x-8">
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/10">
                            Begin Immersion
                        </button>
<button className="serif-authority italic text-primary hover:underline decoration-primary/30 underline-offset-8">
                            Read the Thesis
                        </button>
</div>
</div>
<div className="lg:col-span-6 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Minimalist abstract representation of mental peace with smooth stone textures and soft ethereal light in a Japanese garden style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpQB7qW2qiK3CuL_A5SBxrwHuoHcwFKEOLUnpvCUpneUr1rjCnLJ4xKSho_YhUN9yRutEn07hnen3W05ebu_zuOSzAUCsf0ZJi2VJ3inQ8nguqQoBT00wjaOj9R5RiXP-hlPjVm9Odn6PPYFkqHxLvsx4QEhMddJJ2-hicgsDZPob6bXUnRiNLqGK7Afv5VXptAr2Gvyj7QE1bNd1rWkPSIOzVmT-wkvtGPZp0nfZRb_6_1CA9lQqTfOw9p1ntb3oW0EfJTz0jmBu9"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/40 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="serif-authority text-4xl mb-4">The Architecture of Mind</h2>
<p className="sans-clarity text-on-surface-variant leading-relaxed">
                            Curated mental wellness journeys and audio experiences meticulously designed for the modern scholar. We treat meditation not as a task, but as a deliberate study of self.
                        </p>
</div>
<div className="flex space-x-4">
<div className="h-px w-24 bg-outline-variant mb-3"></div>
<span className="label-archival text-[10px] uppercase tracking-widest text-outline">Section 01 / Foundation</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-colors duration-500">
<div className="mb-12 h-48 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Overhead view of a minimalist workspace with a single lit candle and open notebook in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6P1dTQeJQpgaF2LDRa-oqsGlrCQA9GjcT8q5kVNeVw5nOCk2PemAVI73XpVNjQBXTKJanTcdTfrrh7kF2sO6EyYhAHR9l1P8COJEKaU-oCVqBb1PEaR_SRfoI9LuJ7oxzkpckc9o71wPfnkM7mOQ6yYV9FWaQhgumeaNq2mW8mG08zwOtN_Iar-MRDNFfM0caNaH6V0E8R-qXQF9MdhlZ2AiE_LFyZgntTsUt9brUjduFWlhkVK1gVGs4ekwjakODGyn5qbBtbUL"/>
</div>
<span className="text-tertiary label-archival text-[10px] tracking-widest font-bold mb-4 block">ESSENTIAL SERIES</span>
<h3 className="serif-authority text-2xl mb-4">The Scholar's Focus</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">A 14-day protocol focusing on cognitive endurance and deep-work preparation.</p>
<a className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all" href="#">
                            Explore Curriculum <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>

<div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-colors duration-500">
<div className="mb-12 h-48 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Blurred library interior with soft light beams hitting dark wooden shelves and old books" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Uw3SUPIipn2xdJI5KX4VlIghBIZawlcS00pqn8k76eNVldFGCBt_jxQuD3nt2_ZvkWNl2-E6z5B85RepzeREsmUbWo1o0PC40UOQvjH6PBNI10sduoqRizp_wgLr_48kZ54hs5j0kFTvwiRzzdBEV9OZu7N35JS13FxlQgkNi6Uti11FU4D1GuvU6xBK4YXjvgY8CzCbu_BaxZ26rbR_WkeGroba0OEXmtjecxdfR_JgXQ25NlU_Lc3v5ujNqq00C6CRE-sjdY1Y"/>
</div>
<span className="text-tertiary label-archival text-[10px] tracking-widest font-bold mb-4 block">ADVANCED ARCHIVE</span>
<h3 className="serif-authority text-2xl mb-4">Stoic Resurgence</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Guided reflections based on Marcus Aurelius’ Meditations for emotional resilience.</p>
<a className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all" href="#">
                            Enter Archive <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>

<div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-colors duration-500">
<div className="mb-12 h-48 overflow-hidden rounded-xl">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Abstract water ripples on a dark silver surface with crystalline reflections and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHifV8bxdezKWKOHavB7TuyILKxTa5uSFWaYsm6T9leFlK2FOc3zWFG8ZSM9HpScwAU03klRFM2gfBWh1G884Vs6NNH8WmRZOhiGRQKn0CsVQZPOsWYjZqkRZRqx-80Eogibtuq8ZRqEP-hb3_qcmV0HVre9Dn13eZBrnUJR4oDPKjgN0we3roxdD6YX3yTS36Vch1SSMKczjxag_XuyZMuP2ulUL6S0dwCjiJVqILXC9XWZSYkMH411_3POOGXI4wMa35GI3GOv2w"/>
</div>
<span className="text-tertiary label-archival text-[10px] tracking-widest font-bold mb-4 block">EVENING RITUALS</span>
<h3 className="serif-authority text-2xl mb-4">Digital Decompression</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Somatic tracking techniques to mitigate the sensory overload of modern interfaces.</p>
<a className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all" href="#">
                            Start Ritual <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-16">
<h2 className="serif-authority text-4xl mb-6">Digital Serenity</h2>
<div className="w-12 h-1 bg-tertiary mx-auto mb-6"></div>
<p className="sans-clarity text-on-surface-variant max-w-2xl mx-auto">
                        Technology repurposed for stillness. Immersive soundscapes, biometric integration for mood tracking, and personalized meditation paths.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-stone-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" data-alt="High-end professional sound recording studio with soft warm lighting and vintage analog gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY4vwwjK8SHwxGlrNZduTDlB_AoayG2feRAmU5pP6xLULo1W7v0aJsKVl4X3yi1xCE13qL2t9HNtXPf8rZWK0ej6Ww3o73yjqSGqYOoH9OHfB7j8C1MmVmlGIVfL1rz2Es2d79uCW2ptyuNIyrSKNYNrBb6cSgwyImTqBIxrgFipSxGYqHfDVuw72eIkq6IDWKBWpOqr7RJhL3jWZvguoEgEL4EhGT4_ol2FDInsKKJAGZnTYgrSp_deP1A6miOpy4Rtfp5MLfXD58"/>
<div className="absolute bottom-0 left-0 p-10 text-white z-10">
<span className="label-archival text-[10px] tracking-[0.4em] text-tertiary-container mb-4 block">IMMERSE</span>
<h3 className="serif-authority text-3xl mb-4">Sonic Curations</h3>
<p className="sans-clarity text-sm text-stone-300 max-w-sm">4D spatial audio soundscapes recorded in remote historical locations, from Tibetan peaks to Andean valleys.</p>
</div>
</div>
<div className="md:col-span-2 bg-surface-container p-10 rounded-2xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl text-primary mb-6">query_stats</span>
<h3 className="serif-authority text-2xl mb-4">Biometric Feedback</h3>
<p className="sans-clarity text-on-surface-variant text-sm">Integration with your wearables to adjust sound frequency based on your real-time heart rate variability.</p>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-2/3"></div>
</div>
</div>
<div className="md:col-span-1 bg-tertiary text-white p-8 rounded-2xl flex flex-col justify-center text-center">
<h4 className="serif-authority italic text-4xl mb-2">94%</h4>
<p className="label-archival text-[10px] tracking-widest uppercase">Focus Retention</p>
</div>
<div className="md:col-span-1 bg-surface-container-high p-8 rounded-2xl flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-3xl text-primary mb-4">spatial_audio_off</span>
<h3 className="serif-authority text-xl">Haptic Presence</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="max-w-screen-2xl mx-auto">
<div className="mb-16">
<h2 className="serif-authority text-4xl text-center">The Path to Presence</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

<div className="hidden lg:block absolute top-1/4 left-0 w-full h-[1px] bg-stone-200 -z-10"></div>
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-xl font-serif text-primary shadow-sm">1</div>
<h3 className="serif-authority text-2xl">Daily Intention</h3>
<p className="sans-clarity text-sm text-on-surface-variant leading-relaxed px-4">Begin each dawn with a curated selection of philosophical prompts designed to frame your cognitive landscape.</p>
</div>
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-xl font-serif text-primary shadow-sm">2</div>
<h3 className="serif-authority text-2xl">Guided Immersion</h3>
<p className="sans-clarity text-sm text-on-surface-variant leading-relaxed px-4">Engage with auditory journals and breathwork modules that utilize rhythmic pacing tailored to your stress levels.</p>
</div>
<div className="flex flex-col items-center text-center space-y-6">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-xl font-serif text-primary shadow-sm">3</div>
<h3 className="serif-authority text-2xl">Reflective Analysis</h3>
<p className="sans-clarity text-sm text-on-surface-variant leading-relaxed px-4">Conclude your cycle with archival journaling. Review biometric data trends to visualize your internal evolution over time.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-surface-container-highest">
<div className="max-w-4xl mx-auto text-center">
<span className="material-symbols-outlined text-tertiary-container text-5xl mb-8">format_quote</span>
<blockquote className="serif-authority text-3xl md:text-4xl italic leading-relaxed text-on-surface mb-12">
                    "Alexandria's editorial approach makes wellness feel like a scholarly pursuit, removing the noise of modern life and replacing it with the profound weight of presence."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 grayscale">
<img className="w-full h-full object-cover" data-alt="Portrait of a sophisticated man with glasses in a turtleneck, classic editorial black and white style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNPsiv6m1m3g3Ki8q7dIC7V5PPTV1dOuOzHVUD4qtxNJRPLiJelaTvq2wHxOKb1egZZmTBa7WO9ROyOQk-C5-WSY_ro_MFIekFFyggBN5cnlEHYrRKWbC-vhpvH9LzxLyBcsGEf79uhKi-RuyN7yGYCy5Uwk2rdf6yM6i91iiuGhPGzcCucW1gUcKq7Tz01h0iGzv7v9DDpol96dGflqdyApN2HSwCXvndeVy4g0nhgdtnoZG2u5DTJ5GGDAGyc8Hg21HOWXIpltJ"/>
</div>
<cite className="sans-clarity not-italic">
<span className="block font-bold text-on-surface">Julian Vane</span>
<span className="block text-xs uppercase tracking-widest text-on-surface-variant mt-1">Mindfulness Author &amp; Cultural Critic</span>
</cite>
</div>
</div>
</section>

<section className="py-24 px-8 text-center relative overflow-hidden">

<div className="absolute inset-0 -z-10 opacity-5">
<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tertiary rounded-full blur-[100px]"></div>
</div>
<div className="max-w-3xl mx-auto">
<h2 className="serif-authority text-5xl mb-8 text-on-surface">Begin Your Journey to Clarity</h2>
<p className="sans-clarity text-lg text-on-surface-variant mb-12">Join the digital vanguard of mental wellness. Experience the intersection of technology and ancient wisdom.</p>
<button className="bg-primary text-white px-12 py-5 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20">
                    Start Your Free Trial
                </button>
<p className="label-archival text-[10px] tracking-widest text-outline mt-8 uppercase">COMPLIMENTARY 14-DAY ACCESS • NO REQUISITE BILLING</p>
</div>
</section>

</main>
        </div>
    );
}
