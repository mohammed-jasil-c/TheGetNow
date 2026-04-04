'use client';

import { useState, useEffect } from 'react';

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Back to top visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    // Cookie banner logic (show after 500ms if not dismissed)
    const timeout = setTimeout(() => {
      if (!localStorage.getItem('tgn-cookies-accepted')) {
        setShowCookieBanner(true);
      }
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const acceptCookies = () => {
    localStorage.setItem('tgn-cookies-accepted', 'true');
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('tgn-cookies-accepted', 'false');
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/16284324305" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-[24px] right-[24px] z-[9999] group flexitems-center"
      >
        {/* Tooltip */}
        <div className="absolute right-[80px] top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap bg-[#1A1A2E] text-white rounded-xl px-4 py-2 text-sm">
          Chat with us on WhatsApp
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#1A1A2E]"></div>
        </div>

        {/* Pulse ring */}<div className="absolute inset-[-12px] bg-[#25D366] rounded-full animate-whatsapp-pulse pointer-events-none"></div>
        {/* Button */}
        <div className="relative w-[68px] h-[68px] bg-[#25D366] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] flex items-center justify-center transition-transform hover:scale-110">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </div>
      </a>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-[104px] right-[24px] z-[9998] w-12 h-12 bg-[#0D1117]/80 backdrop-blur-md border border-[#1E2A3A] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0057FF]/20 hover:border-[#0057FF] ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>
      </button>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0A0D16]/95 backdrop-blur-[20px] border-t border-[#1E2A3A] p-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-5 animate-slide-up">
          <p className="text-[#A0AEC0] text-sm md:text-base leading-relaxed max-w-3xl">
            🍪 We use cookies to enhance your experience. By continuing, you agree to our Privacy Policy.
          </p>
          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-end">
            <button onClick={declineCookies} className="text-[#6B7A99] font-medium text-sm hover:text-white transition-colors">
              Decline
            </button>
            <button onClick={acceptCookies} className="btn-primary !px-6 !py-2.5 !text-sm">
              Accept All
            </button>
          </div>
        </div>
      )}
    </>
  );
}
