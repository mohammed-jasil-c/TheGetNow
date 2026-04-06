'use client'

import React from 'react'
import { FaEnvelope as Mail, FaTwitter as Twitter, FaGithub as Github, FaLinkedinIn as Linkedin, FaGlobe as Globe } from 'react-icons/fa6'

export default function OrbisNftShowcase() {
  return (
    <section className="relative text-[#EFF4FF] font-mono overflow-hidden bg-[#010828] w-full" id="orbis-nft-landing">
      {/* Scope CSS */}
      {/* Scope CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        #orbis-nft-landing .font-anton { font-family: 'Anton', sans-serif; }
        #orbis-nft-landing .font-condiment { font-family: 'Condiment', cursive; }
        #orbis-nft-landing .text-neon { color: #6FFF00; }
        #orbis-nft-landing .bg-neon { background-color: #6FFF00; }
        
        #orbis-nft-landing .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        #orbis-nft-landing .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}} />

      {/* TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 z-50 pointer-events-none opacity-60 mix-blend-lighten" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", backgroundSize: 'cover' }} 
      />

      {/* SECTION 1: HERO */}
      <div className="relative min-h-[100svh] rounded-b-[32px] overflow-hidden flex flex-col pt-[32px]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 max-w-[1831px] w-full mx-auto px-[24px] sm:px-[60px] flex-1 flex flex-col">
          {/* Hero Content */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between relative pt-32 lg:pt-0">
            <div className="relative w-full max-w-[780px] lg:ml-32">
              <h1 className="font-anton uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1]">
                Beyond earth <br />
                and ( its ) familiar boundaries
              </h1>
              <div className="absolute right-0 bottom-[-20px] md:right-[-60px] lg:bottom-12 z-20">
                <span className="font-condiment text-neon text-[24px] sm:text-[36px] md:text-[48px] mix-blend-exclusion opacity-90 -rotate-1 inline-block whitespace-nowrap">Nft collection</span>
              </div>
            </div>

            {/* Social - Desktop */}
            <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 z-20">
              <a href="mailto:jasilchemmala@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="https://github.com/mohammed-jasil-c" target="_blank" rel="noopener noreferrer" title="GitHub" className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/mohammed-jasil-c/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://mohammed-jasil.vercel.app/" target="_blank" rel="noopener noreferrer" title="Portfolio" className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>

            {/* Social - Mobile */}
            <div className="flex lg:hidden items-center justify-center gap-4 sm:gap-6 mt-[60px] w-full z-20">
              <a href="mailto:jasilchemmala@gmail.com" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="https://github.com/mohammed-jasil-c" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/mohammed-jasil-c/" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://mohammed-jasil.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ABOUT / INTRO */}
      <div className="relative min-h-[80vh] py-[64px] lg:py-[96px] flex flex-col justify-between">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 max-w-[1831px] w-full mx-auto px-[24px] sm:px-[60px] flex-1 flex flex-col justify-between h-full space-y-16 lg:space-y-32">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="relative">
              <h2 className="font-anton uppercase text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05]">
                Hello! <br /> I'm orbis
              </h2>
              <span className="absolute bottom-[-10px] right-[-40px] font-condiment text-neon text-[36px] sm:text-[50px] md:text-[68px] mix-blend-exclusion -rotate-2">
                Orbis
              </span>
            </div>
            <p className="max-w-[266px] text-[14px] md:text-[16px] uppercase leading-[1.6]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex items-end justify-between uppercase text-[14px] md:text-[16px]">
            <p className="max-w-[266px] opacity-10 text-[#010828] md:text-[#EFF4FF]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.
            </p>
            <p className="max-w-[266px] opacity-10 hidden lg:block text-[#EFF4FF]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: NFT COLLECTION GRID */}
      <div className="bg-[#010828] py-[96px] z-10 relative">
        <div className="max-w-[1831px] w-full mx-auto px-[24px] sm:px-[60px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[72px] gap-10">
            <div>
              <h2 className="font-anton uppercase text-[32px] md:text-[60px] leading-[1.05]">
                Collection of <br/> 
                <span className="ml-[48px] md:ml-[96px] lg:ml-[128px] flex items-center gap-4">
                  <span className="font-condiment text-neon lowercase text-[42px] md:text-[72px] translate-y-[-10px]">Space</span> 
                  objects
                </span>
              </h2>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer relative md:pb-[10px]">
               <div className="flex items-end gap-3 md:gap-4">
                 <span className="font-anton text-[32px] md:text-[60px] leading-[0.9]">SEE</span>
                 <div className="flex flex-col font-anton text-[20px] md:text-[36px] leading-[0.9] -translate-y-1">
                   <span>ALL</span>
                   <span>CREATORS</span>
                 </div>
               </div>
               <div className="w-full h-[6px] md:h-[10px] bg-neon mt-2 md:mt-4 group-hover:scale-y-110 group-hover:opacity-90 transition-all origin-bottom"></div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              { score: '8.7/10', vid: 'hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4' },
              { score: '9.0/10', vid: 'hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4' },
              { score: '8.2/10', vid: 'hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4' },
            ].map((nft, idx) => (
               <div key={idx} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/[0.03] transition-all group duration-500">
                 <div className="relative pb-[100%] rounded-[24px] overflow-hidden mb-[18px]">
                   <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out">
                     <source src={`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/${nft.vid}`} type="video/mp4" />
                   </video>
                 </div>
                 <div className="liquid-glass rounded-[20px] px-[20px] py-[16px] flex items-center justify-between">
                   <div className="flex flex-col gap-1">
                     <span className="text-[11px] uppercase tracking-wider text-[#EFF4FF]/70">Rarity Score:</span>
                     <span className="text-[16px] font-anton tracking-wider">{nft.score}</span>
                   </div>
                   <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-[0_0_20px_rgba(183,36,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-300">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                   </button>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4: CTA / FINAL */}
      <div className="relative w-full overflow-hidden bg-[#010828] z-10 flex">
        <video autoPlay loop muted playsInline className="w-full h-auto block object-cover">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
        </video>

        {/* Text Array Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-[5%] lg:pr-[20%] pt-[10vw]">
          <div className="relative">
            <span className="absolute -top-[15px] md:-top-[25px] lg:-top-[40px] -left-[20px] md:-left-[40px] lg:-left-[60px] font-condiment text-neon text-[17px] sm:text-[32px] md:text-[50px] lg:text-[68px] mix-blend-exclusion z-20 whitespace-nowrap">
              Go beyond
            </span>
            <div className="font-anton uppercase text-[16px] sm:text-[30px] md:text-[45px] lg:text-[60px] leading-[1.1] text-right z-10 relative">
              <div className="mb-[1rem] sm:mb-[1.5rem] lg:mb-[3rem]">JOIN US.</div>
              <div>REVEAL WHAT'S HIDDEN.</div>
              <div>DEFINE WHAT'S NEXT.</div>
              <div>FOLLOW THE SIGNAL.</div>
            </div>
          </div>
        </div>

        {/* Social - Bottom Left (Refined Premium Layout) */}
        <div className="absolute left-[8%] bottom-[8%] sm:bottom-[12%] lg:bottom-[16%] z-20">
          <div className="flex items-center gap-3 md:gap-5">
            {[
              { Icon: Mail, href: 'mailto:jasilchemmala@gmail.com' },
              { Icon: Github, href: 'https://github.com/mohammed-jasil-c' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-jasil-c/' },
              { Icon: Globe, href: 'https://mohammed-jasil.vercel.app/' }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] liquid-glass rounded-[12px] md:rounded-[16px] flex items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
              >
                <item.Icon className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-[#EFF4FF] opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
