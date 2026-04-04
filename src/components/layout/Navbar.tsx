'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnnouncementBar from './AnnouncementBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 300); // 300ms delay to prevent accidental triggers
  };

  return (
    <>
      <AnnouncementBar />
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'top-0' : 'top-[40px]' // offset for announcement bar if visible (in a real app we'd measure it)
        }`}
        style={{
          background: 'rgba(6, 8, 15, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          height: '76px'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo area */}
          <Link href="/" className="flex flex-col items-start translate-y-[2px]">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="url(#logo-grad)"/>
                <defs>
                  <linearGradient id="logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0057FF" />
                    <stop offset="1" stopColor="#7B2FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-heading font-bold text-xl tracking-tight text-[#F0F6FF]">TheGetNow</span>
            </div>
            <span className="text-[10px] text-[#6B7A99] font-medium tracking-widest pl-8 uppercase">Next-Gen Digital Solutions</span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            <div 
              className="relative h-full flex items-center group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="font-sans text-[14px] font-medium text-[#A0AEC0] flex items-center gap-1 transition-colors group-hover:text-white">
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-white' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0057FF] to-[#7B2FFF] transition-all duration-300 group-hover:w-full"></div>
              
              {/* Mega Menu */}
              {servicesMenuOpen && (
                <div 
                  className="fixed left-0 right-0 top-[76px] w-full origin-top"
                  // Actually the absolute positioning should be page-relative, using fixed for full screen width here to simplify max-width container inside
                  style={{
                    background: 'rgba(10, 13, 22, 0.97)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0 0 24px 24px',
                    animation: 'slide-up 200ms ease-out forwards',
                  }}
                >
                  <div className="max-w-[1200px] mx-auto p-10">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Column 1 */}
                      <div>
                        <div className="flex items-center gap-2 text-[#0057FF] font-semibold mb-4">
                          <span className="text-xl">🏗️</span> Product Development
                        </div>
                        <ul className="space-y-3">
                          {['Mobile App Development', 'Web Development', 'UI/UX Design', 'MVP Development', 'SaaS Development'].map(item => (
                            <li key={item} className="text-[#A0AEC0] text-sm hover:text-white cursor-pointer flex items-center group/item transition-colors">
                              {item}
                              <svg className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#0057FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <div className="flex items-center gap-2 text-[#7B2FFF] font-semibold mb-4">
                          <span className="text-xl">⚡</span> Emerging Tech
                        </div>
                        <ul className="space-y-3">
                          {['AI & ML Development', 'Blockchain Development', 'Web3 & NFT', 'IoT Development', 'AR/VR Development'].map(item => (
                            <li key={item} className="text-[#A0AEC0] text-sm hover:text-white cursor-pointer flex items-center group/item transition-colors">
                              {item}
                              <svg className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7B2FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <div className="flex items-center gap-2 text-[#00D4FF] font-semibold mb-4">
                          <span className="text-xl">🌐</span> Digital Services
                        </div>
                        <ul className="space-y-3">
                          {['Digital Marketing', 'Technical SEO', 'Content Strategy', 'CRO Optimization', 'Analytics Setup'].map(item => (
                            <li key={item} className="text-[#A0AEC0] text-sm hover:text-white cursor-pointer flex items-center group/item transition-colors">
                              {item}
                              <svg className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#00D4FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4 - Featured */}
                      <div className="relative rounded-2xl p-6 overflow-hidden border border-[#0057FF]/30 group/card cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0057FF]/20 to-[#7B2FFF]/20 -z-10 group-hover/card:scale-105 transition-transform duration-500"></div>
                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white mb-4">⭐ Most Popular</span>
                        <h4 className="text-white font-bold text-lg mb-2">Full-Stack App Development</h4>
                        <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">End-to-end product development from idea to launch in 12 weeks.</p>
                        
                        <div className="flex items-center text-sm font-semibold text-white">
                          Start a Project
                          <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#0057FF] to-[#7B2FFF] flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom bar */}
                  <div className="bg-[#0057FF]/5 border-t border-white/5 py-4 px-10 flex justify-between items-center">
                    <p className="text-[#A0AEC0] text-sm">Didn't find what you're looking for? Let us know your needs, and we'll tailor a solution just for you.</p>
                    <button className="px-6 py-2 bg-[#0057FF] text-white text-sm font-semibold rounded-full hover:bg-[#003FCC] transition-colors">
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Normal Links */}
            {['Industries', 'Technologies', 'Portfolio', 'About'].map(link => (
              <Link href={`/${link.toLowerCase()}`} key={link} className="relative h-full flex items-center group">
                <div className="font-sans text-[14px] font-medium text-[#A0AEC0] transition-colors group-hover:text-white">
                  {link} {['Industries', 'Technologies'].includes(link) && <span className="ml-1 text-[10px]">▼</span>}
                </div>
                <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0057FF] to-[#7B2FFF] transition-all duration-300 group-hover:w-full ${link === 'Portfolio' ? 'w-full' /* mockup active state */ : ''}`}></div>
              </Link>
            ))}
          </div>

          {/* Right side CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+16284324305" className="flex items-center gap-2 text-[#6B7A99] hover:text-white transition-colors text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +1 628 432 4305
            </a>
            
            <a href="https://wa.me/16284324305" className="flex items-center gap-2 border border-[#25D366]/30 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#25D366]/10 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </a>

            <button className="relative group px-6 py-2.5 rounded-full font-semibold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0057FF] to-[#7B2FFF] group-hover:scale-105 transition-transform duration-300"></div>
              {/* Load animation */}<div className="absolute inset-0 border-2 border-white/20 rounded-full animate-pulse-ring pointer-events-none"></div>
              <span className="relative text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`h-[2px] w-full bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
            <span className={`h-[2px] w-full bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] w-full bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden flex justify-end bg-black/50 backdrop-blur-sm -scale-100 origin-right transition-transform" style={{ transform: 'scaleX(-1)', animation: 'fade-in 0.3s forwards' }}>
           <div className="w-[85vw] h-full bg-[#0A0D16] border-l border-[#1E2A3A] flex flex-col p-6 pt-24" style={{ transform: 'scaleX(-1)' }}>
             <div className="flex flex-col gap-6 flex-grow">
               <Link href="/services" className="text-xl font-bold text-white border-b border-[#1E2A3A] pb-4 flex justify-between">Services <span>+</span></Link>
               <Link href="/industries" className="text-xl font-bold text-white border-b border-[#1E2A3A] pb-4 flex justify-between">Industries <span>+</span></Link>
               <Link href="/technologies" className="text-xl font-bold text-white border-b border-[#1E2A3A] pb-4 flex justify-between">Technologies <span>+</span></Link>
               <Link href="/portfolio" className="text-xl font-bold text-white border-b border-[#1E2A3A] pb-4">Portfolio</Link>
               <Link href="/about" className="text-xl font-bold text-white border-b border-[#1E2A3A] pb-4">About</Link>
             </div>
             <div className="mt-auto space-y-4 pt-10">
                <button className="w-full py-4 border border-white/20 rounded-xl text-white font-semibold flex justify-center gap-2">
                  <span>📞 Call Now</span>
                </button>
                <button className="w-full py-4 bg-[#25D366] rounded-xl text-[#0A0D16] font-bold flex justify-center gap-2">
                  <span>💬 WhatsApp</span>
                </button>
             </div>
           </div>
        </div>
      )}
    </>
  );
}
