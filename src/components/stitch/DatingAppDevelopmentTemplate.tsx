'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

import type { DBPage } from '@/lib/supabase-pages';

interface Props {
    pageData?: DBPage;
}

export default function DatingAppDevelopmentTemplate({ pageData }: Props) {
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


<section className="relative min-h-[921px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20" data-alt="Modern lifestyle photography of a diverse group of happy young people laughing and connecting in a bright urban social setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2D-ZouJ5NVmzR9KHJjNR1JeqgHHveXG9Obl2u_BYttkdXbSQ6IgPkYxGKBv3wQqQndyHGhKf7Yl_QLVFwN9PNN4fquTHW7Q5YTNotTvUfRS0rZlsZEYK2-8QHlC173SJw48slnDxZRNd0cYTzI-a2AaZEmgYgfGQHgtrG3Loc9kJ9WgCI8ptj7N0l1Abt83Hs9MAHRxejtJRVjNO8UR_FwMAyFrSbr5B-FgV_KrIjt0sJaM99tXmTl586D7c77TrGVMyvLP7l4e8a"/>
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-fixed font-label text-xs font-bold tracking-widest uppercase">
                        {pageData?.category === 'services' ? 'Service Profile' : 'Digital Architects for Modern Love'}
                    </span>
<h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1]">
                        {pageData ? pageData.title : <>Architecting the <span className="text-primary italic">Perfect</span> Match.</>}
                    </h1>
<p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                        {pageData?.subtitle || 'We build high-performance dating platforms that blend behavioral science with cutting-edge engineering. Scale your vision with precision and soul.'}
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="signature-gradient text-on-primary px-10 py-4 rounded-full font-bold flex items-center gap-2 group transition-all hover:shadow-2xl">
                            Start Development 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<button className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-10 py-4 rounded-full font-bold hover:bg-surface-container-low transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
<div className="relative hidden lg:block">
<div className="relative z-10 p-4 bg-surface-container-low/50 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-2xl">
<img className="rounded-[2rem] w-full aspect-[4/5] object-cover shadow-inner" data-alt="Sleek smartphone display showing a modern dating app interface with high-quality user profiles and vibrant interaction icons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOzIb8En8suBsQxxDqe6pDjoMYIXIWRz8wK82ac7ShWoRxISymys9Dm8APZiKSFGGbWNcGfcmujmgAhQmcJGIYcPLzMq_op2hUByN7m6SFvwe5tby5T5FCgp02kmkg3z-cDaFVStsADJ9pTNFFyZYYRpDzHScyepKhA7I_g4g22641fV3NJCeCPWcJ5fk7bXDYn50pPduQWws0kxfNnVLI2kZ_GL0LMQwAcojeQqeim2mkPQCB5-giZazepG5bzYpftVj2krAVZcBh"/>
</div>

<div className="absolute -bottom-10 -left-10 z-20 bg-surface-container-lowest p-6 rounded-xl shadow-xl flex items-center gap-4 border border-outline-variant/10">
<div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined" data-weight="fill">favorite</span>
</div>
<div>
<div className="font-bold text-lg leading-none">1.2M+</div>
<div className="text-xs text-on-surface-variant font-label uppercase tracking-tighter">Successful Matches</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for Connection</h2>
<p className="text-on-surface-variant text-lg">Beyond swiping. We integrate deep tech to ensure your users find meaningful relationships through a seamless interface.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">psychology</span>
</div>
<h3 className="text-2xl font-bold mb-4 font-headline">AI Matching Algorithms</h3>
<p className="text-on-surface-variant max-w-sm">Neural networks that learn user preferences, behaviors, and compatibility scores for hyper-accurate suggestions.</p>
</div>
<div className="absolute top-0 right-0 h-full w-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
<img className="w-full h-full object-cover" data-alt="Abstract visualization of neural network pathways and digital data points connecting in a blue luminous space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYBGu0Of76UzHb4dH8y0eI8lUmligYjLL4rls4A0iiqJRqr8L4MVtUT9DG-K17uXeao1FjYfnmzLHFYkFA3fr_bqi3zUEJk2AuafefGCRjpsmcgt8fE3OALVwUUbluC4JCmkbfMqE_GUhtyd56NBjzxIevEFB4S3aaTKOJ_36A6-pue-3zNMYgdOOarupKp6w8Zbf8gNZIPwS6qVBDMf9JZYc9Ii_5X2oIot5l9AWOys1S4MC09VAhbugEksBNDVQrns65pzK5x5D"/>
</div>
</div>

<div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:bg-primary-container/10 transition-colors">
<div>
<div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">chat</span>
</div>
<h3 className="text-2xl font-bold mb-4 font-headline">Real-time Chat</h3>
<p className="text-on-surface-variant">Low-latency messaging with rich media support, voice notes, and video calling capabilities.</p>
</div>
</div>

<div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:bg-primary-container/10 transition-colors">
<div>
<div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
</div>
<h3 className="text-2xl font-bold mb-4 font-headline">Profile Security</h3>
<p className="text-on-surface-variant">Biometric verification, end-to-end encryption, and AI-driven toxic behavior detection.</p>
</div>
</div>

<div className="md:col-span-8 bg-primary text-on-primary rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-3xl font-bold mb-4 font-headline">Gamified Interaction</h3>
<p className="text-blue-100 mb-6">Interactive icebreakers and proximity-based features to spark conversation instantly.</p>
<button className="bg-surface-container-lowest text-primary px-6 py-2 rounded-full font-bold text-sm">Explore Logic</button>
</div>
<div className="flex-shrink-0 relative z-10 w-full md:w-48 h-48 rounded-full border-4 border-white/20 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl" data-weight="fill">celebration</span>
</div>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container rounded-full blur-[100px] opacity-30"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-primary font-label uppercase tracking-widest text-sm font-bold block mb-4">Engineering Excellence</span>
<h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4">Powered by Modern Stack</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">We use high-performance technologies to ensure your app is scalable, secure, and lightning-fast.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-20 h-20 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined text-5xl">deployed_code</span>
</div>
<h4 className="font-bold text-xl mb-2">React Native</h4>
<p className="text-sm text-on-surface-variant">Cross-platform fluid performance</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-20 h-20 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined text-5xl">dns</span>
</div>
<h4 className="font-bold text-xl mb-2">Node.js</h4>
<p className="text-sm text-on-surface-variant">Real-time event-driven architecture</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-20 h-20 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined text-5xl">cloud_done</span>
</div>
<h4 className="font-bold text-xl mb-2">AWS</h4>
<p className="text-sm text-on-surface-variant">Secure &amp; elastic cloud infrastructure</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-20 h-20 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined text-5xl">database</span>
</div>
<h4 className="font-bold text-xl mb-2">MongoDB</h4>
<p className="text-sm text-on-surface-variant">Flexible schema for rapid scaling</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-16">Trusted by Innovators</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
<div className="flex gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
</div>
<p className="text-on-surface-variant mb-8 italic leading-relaxed">"Stratos Core transformed our concept into a high-functioning dating platform in record time. Their architectural approach to matchmaking is unique."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a male tech founder in a professional yet relaxed environment with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8YEHoFhQQex2V_r-ZLARt3nc80NiGyuwaHK5uMl4EpFcGfOG6edz8Kqu68vK5xD4RGABn-M51X6wgEe1aF8_51ZPvmYFEClc7geL0UfXSkJOfVQdc1DeePf2-R7myqZxPszHLrqkC8YUj3nkzbXLm0GBq2deRFevcuB1wxV_3eBIbDTiq-5z_d0q3j4RrZ1vqoDX2xB_Sullswhqy_AJsITSTDglx-Ppq4xGeetK4Q-F86priWukuNOYScE2jM3cJ0zM6Y-RcUUfX"/>
</div>
<div>
<div className="font-bold">Marcus Chen</div>
<div className="text-xs text-on-surface-variant uppercase font-label">CEO, SoulBound</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 transform md:-translate-y-8">
<div className="flex gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
</div>
<p className="text-on-surface-variant mb-8 italic leading-relaxed">"The performance is unmatched. Even with 500k active users, the real-time interactions are buttery smooth. A true high-performance agency."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a female product manager in a modern office space with bright soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBewPIJNAGACGekAvolSIsd0lz48woyZZzgndcLZ3M6z0FXwu5Gh8XkmTT4MALjY6yc5ZLe5IHh_48EA4n5G_AH6OM_TrrgLlaHZs19mdw1HclVvV5tgINPFMr_ISUiA30wh-5FNoTGFB8td1zYwoovjM9DQROxHGAlHt4lYNB3VM4pp6yvNJK-_nBJbrgoLkandPtiDwdQ0ZanksHRisWraf0R-KZtZ3JRVasV3-XB53CS4bdIGiJHFOxC4-Iu32idFmKkEIv5lD7B"/>
</div>
<div>
<div className="font-bold">Sarah Jenkins</div>
<div className="text-xs text-on-surface-variant uppercase font-label">Product Lead, MatchFlow</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
<div className="flex gap-1 mb-6 text-tertiary-fixed-dim">
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
</div>
<p className="text-on-surface-variant mb-8 italic leading-relaxed">"Security was our #1 priority. Stratos Core delivered a rock-solid infrastructure that passed every audit while maintaining a beautiful UI."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a confident male entrepreneur in a minimalist studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA00Dcwwqw8O6OTyCcLbRTD8HyGodp1uakTt3UCLUV0dMb_yofqwt0rmdErIEaOfgPnXAzFNTtXmciL3zhLSSiN9h0uoUKqlVptJuoLOcZ1_Np__XUMzXd41VaoLwxlUzaXlkEj-HVr1ZPMCW2d8xyGPwx2F2cjE93ROI4UAsfFuwp23TV5LciWLcBBct-Jm7BGRj-mA2UMgSNmBAS8AffHwnMIGHjDvlIjX5jaVVYF2SgpGOlou-zqK-jao5BQLiyCWQrt8VrKDrUj"/>
</div>
<div>
<div className="font-bold">David Rossi</div>
<div className="text-xs text-on-surface-variant uppercase font-label">Founder, Aura Dating</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="signature-gradient rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-white font-headline text-4xl md:text-6xl font-extrabold mb-8">Ready to define the future of dating?</h2>
<p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">Let's build a platform that people fall in love with. Schedule your strategy call today.</p>
<button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
                            Book a Strategy Call
                        </button>
</div>

<div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
</div>
</div>
</section>

</main>
        </div>
    );
}
