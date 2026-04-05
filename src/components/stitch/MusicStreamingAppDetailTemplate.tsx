'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MusicStreamingAppDetailTemplate() {
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


<section className="relative min-h-[870px] flex items-center overflow-hidden px-8 lg:px-24">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 grayscale scale-105" data-alt="Elegant close-up of a vintage tube amplifier glowing warmly next to a sleek minimalist modern digital tablet showing audio waveforms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8RhcU-xEW3SRY-AeR9Y8Ky6_e_SRmVU0jUs7woyh74Cdtte2BP9CbXwXXBpUOxX986BFRgrZuRPOZC3Vft-r9Q2GkVjTmN7gzgc6Yoa21RLPH1z5D9uBRZ1oVr3WRMi-7oNdAk_vJN_pOvsDLRutAccTi2_Yuzb12n1r5_tKREOVD1Hi8rkLR3f0GJbBZE-ag1vOUt7qfVFZJzxEmLGaYOfC9usEJBx0C__EBYjGb2DAdgxqZzB29ICM7V15WI4-qMNYGkvW2J0W"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<span className="label-text text-tertiary uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Editorial Edition № 04</span>
<h1 className="text-6xl md:text-8xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">The Sonic Archive.</h1>
<p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed mb-12 font-body">
                    A scholarly approach to high-fidelity audio. We've married the warmth of the analog past with the precision of a digital future.
                </p>
<div className="flex items-center space-x-8">
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-lg font-medium tracking-wide shadow-lg hover:brightness-110 transition-all">
                        Enter the Vault
                    </button>
<button className="text-primary font-medium hover:underline decoration-primary underline-offset-8 transition-all flex items-center gap-2">
                        View Technical Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>

<section className="py-32 px-8 lg:px-24 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
<div className="w-full md:w-1/2 space-y-8">
<h2 className="text-5xl font-bold text-on-surface leading-tight">Curation Beyond <br/><span className="italic text-primary">Algorithms.</span></h2>
<p className="text-lg text-on-surface-variant font-body leading-loose">
                        Alexandria eschews the mechanical coldness of predictive modeling. Instead, we rely on a global network of curators—archivists, musicians, and historians—to build collections that possess narrative weight and cultural context. 
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8">
<div className="space-y-3">
<div className="flex items-center gap-3 text-tertiary">
<span className="material-symbols-outlined" data-icon="high_quality">high_quality</span>
<span className="label-text font-bold text-xs uppercase tracking-widest">High-Fidelity</span>
</div>
<p className="text-sm text-on-surface-variant font-body">True-to-source studio masters up to 192kHz/24-bit.</p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-tertiary">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="label-text font-bold text-xs uppercase tracking-widest">Social Discovery</span>
</div>
<p className="text-sm text-on-surface-variant font-body">Connect with listeners who share your distinct auditory palate.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="relative rounded-2xl overflow-hidden shadow-2xl group">
<img className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Sophisticated black and white photograph of a hand gently placing a needle onto a vinyl record in a sunlit minimalist room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAt9Ne9Tiwhmmif-bud2DQZGomnXDUjkZ5Fj4J8OPrewVF39vJFLMNAtLXd1AC9xcIsdaRS7GxTyBmXkKScef1ZlT9I_VVYt8mClqZVzl9c6kckTiOH8j4eo_CqFk4IeJa0f19_jFEd6TkK93estz65M8GUuDdaL9Zi9_EMfeU49P7L6uNJu5AwXhH17F_OT2ozfXDtpgG2EOC-CJQthqbj27g5YMSC3JxRhV6nAxpkB9ZZjeGCqX2Pv383atW3fclHAtYGM_WqZDF"/>
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 lg:px-24 bg-surface">
<div className="max-w-screen-2xl mx-auto">
<div className="mb-20 text-center space-y-4">
<h2 className="text-5xl font-bold">Auditory Excellence</h2>
<p className="text-on-surface-variant max-w-xl mx-auto font-body">Defining the new standard for the digital medium through three pillars of uncompromising quality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-surface-container-low p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="waves">waves</span>
<h3 className="text-3xl font-bold mb-4">Lossless Streaming</h3>
<p className="text-on-surface-variant font-body leading-relaxed max-w-md">Every note as the artist intended. We deliver bit-perfect audio directly to your hardware, bypassing standard OS processing for pure signal integrity.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<img className="w-24 h-24 rounded-lg object-cover" data-alt="High-end professional studio headphones resting on a polished wooden desk with soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwBp8bXExPECXfvS40AvGexOyFVt0tZpdm2y86a72HZcPS0R7fPMUbTXPRkJFdHUoHgj1g76SJqIBRX7yulL-UY_tTySjRVsyMMQOxIrldWtSXpFyCIF55mgPT-LTsgJZ8jiTytC9hi3fI77j7iKm-wHD71oczBwqmQk_T1npQiAgHdKYfcrHLFQA7PMEpv6MEP1UXOtp0WclGPlqLJTKeZyG1ERMn-BIAEnz0zUduJF35KUb_r8CyIA0Sg6IsBbt0Gp-33CWjOz2e"/>
<span className="label-text text-xs uppercase tracking-widest font-semibold">Studio Grade Verified</span>
</div>
</div>

<div className="bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-center">
<h3 className="text-3xl font-bold mb-6 italic">Artist-Centric Monetization</h3>
<p className="text-primary-fixed/80 font-body mb-8">We believe in a fair ecosystem. Our 'User-Centric' payment model ensures your subscription goes directly to the artists you actually listen to.</p>
<a className="text-on-primary font-bold border-b border-on-primary w-fit pb-1 text-sm tracking-widest uppercase" href="#">Read Our Manifesto</a>
</div>

<div className="md:col-span-3 bg-surface-container-high p-12 rounded-xl flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<h3 className="text-3xl font-bold mb-4">Collaborative Curation</h3>
<p className="text-on-surface-variant font-body leading-relaxed">Join 'Archive Circles'—exclusive communities where members contribute to living discographies, surfacing rare B-sides and forgotten live performances.</p>
</div>
<div className="md:w-1/2 grid grid-cols-3 gap-4">
<div className="aspect-square bg-stone-200 rounded-full flex items-center justify-center">
<img className="w-full h-full object-cover rounded-full" data-alt="Portrait of a young woman curator in a studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDVk7f-096VqHUsCGN9XYUaZM3IQDAvX-h1MkV6PxZVwxL0uvmKwP1zE92q89-sKiUQCKazXReetEHYf6AAYOygLLeLaD9yD9Ox2G61-_IygT_g_fACszBGvNEbFuTU4xLpHfyqHHsM-w3PJl-nVtR6CtMTpfVQNV8uPJI4XxkEwrcKhQWwNjMXzCOLvfvEmxhPEPmoaWOINTlW_DsPE0p0WDlh62F5G4DLVm1D3XU2UAqafJmvHet4N8tQlC3qjM_GHeOrGl8pOFO"/>
</div>
<div className="aspect-square bg-stone-300 rounded-full flex items-center justify-center">
<img className="w-full h-full object-cover rounded-full" data-alt="Portrait of a male music historian with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkW_jrZnnZN68wvDaZ8TMck8ozhOmIixQ80Gc9yTCjA22RFnTAl2_OaebImCHf6w-m82QyHukXCkPyFUg2LCQDxDmr3cWwN9Ziy1sPnZEhGbuf1f9tbdaJHuQ5xLtkUCL4tBLn7GUnBGntxIhl_X4_T6gCjTthOtkrbPYjpQcdQ5T_i0TP_9dFz914x9o4Li1FCr182rYNA4aaHjRqo3YsB9Eas2iNGoUIbdekGI9kuIGHI5gVvdcEIJAkaGA23IkEgCHU1Gy-M4kS"/>
</div>
<div className="aspect-square bg-stone-400 rounded-full flex items-center justify-center">
<img className="w-full h-full object-cover rounded-full" data-alt="Portrait of a music collector in a library of vinyl records" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnX-ldijPL-vY_1laRuBppOgkQnlGz9984zitp_oyAe7NVv98Uvq56OXnxNx7E2iErAr58NKnnGBHi-Uaczafc92Fx0ZB8Vfa9uCOIb5PE2ckznT-EyEEFSg5hvJf213TaOI1mPozxosJ62c62VAPLKJXKX71kZqWeJiox4Dip-T4ei_g40Q3OaC-i-VIzRdANdpJixdb-RpSt-y6XE_t_NQ9qGVhYcFxB6E3v5x6ZZquQ9aUiPqZV0p7kEDJQZ0CqcYAvJAO82iNs"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 lg:px-24 bg-surface-dim">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div className="max-w-2xl">
<span className="label-text text-tertiary uppercase tracking-widest text-xs font-bold mb-4 block">The Process</span>
<h2 className="text-5xl font-bold leading-tight">The Listening <br/>Experience</h2>
</div>
<p className="text-on-surface-variant font-body max-w-sm mt-8 md:mt-0">Refining the way you interact with sound, from discovery to immersion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30">

<div className="bg-surface-dim py-16 pr-12">
<div className="text-stone-300 text-8xl font-serif font-bold mb-8">01</div>
<h4 className="text-2xl font-bold mb-4">Sonic Discovery</h4>
<p className="text-on-surface-variant font-body leading-relaxed">Browse curated archives by epoch, mood, or instrument. Our curators build paths, not just playlists.</p>
</div>

<div className="bg-surface-dim py-16 px-12 border-x border-outline-variant/20">
<div className="text-stone-300 text-8xl font-serif font-bold mb-8">02</div>
<h4 className="text-2xl font-bold mb-4">Collective Curation</h4>
<p className="text-on-surface-variant font-body leading-relaxed">Engage with the community to refine tracklists, upload liner notes, and share archival metadata.</p>
</div>

<div className="bg-surface-dim py-16 pl-12">
<div className="text-stone-300 text-8xl font-serif font-bold mb-8">03</div>
<h4 className="text-2xl font-bold mb-4">Immersive Audition</h4>
<p className="text-on-surface-variant font-body leading-relaxed">Engage full-screen immersive mode with tactile interface controls and high-res cover art.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 lg:px-24 bg-surface-container-highest">
<div className="max-w-3xl mx-auto text-center">
<span className="material-symbols-outlined text-tertiary text-5xl mb-8" data-icon="format_quote">format_quote</span>
<blockquote className="text-4xl font-headline italic leading-snug mb-12 text-on-surface">
                    "Finally, a platform that respects music as much as the listener does. Alexandria is the digital sanctuary for serious audiophiles."
                </blockquote>
<div>
<p className="font-bold text-lg">Elias Thorne</p>
<p className="label-text text-xs uppercase tracking-widest text-on-surface-variant mt-1">CEO of Echo Records</p>
</div>
</div>
</section>

<section className="py-40 px-8 lg:px-24 bg-surface text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-6xl font-bold mb-8">Elevate Your Soundscape</h2>
<p className="text-xl text-on-surface-variant font-body mb-12 max-w-2xl mx-auto leading-loose">
                    Join the most discerning community of listeners in the digital world. The archive is waiting for your contribution.
                </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<button className="bg-primary text-on-primary px-12 py-6 rounded-lg font-bold tracking-widest uppercase text-sm shadow-xl hover:-translate-y-1 transition-all">
                        Join the Collective
                    </button>
<button className="bg-surface-container-high text-on-surface px-12 py-6 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-surface-container-highest transition-all">
                        Explore the Archive
                    </button>
</div>
</div>
</section>

</main>
        </div>
    );
}
