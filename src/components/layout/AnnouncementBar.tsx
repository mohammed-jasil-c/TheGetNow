'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check localStorage to see if user has dismissed this
    const isDismissed = localStorage.getItem('tgn-announcement-dismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tgn-announcement-dismissed', 'true');
  };

  if (!isVisible) return null;

  const contentItems = [
    "✦ Rated #1 App Development Company on Clutch 2024",
    "✦ 500+ Apps Delivered Worldwide",
    "✦ Free Technical Consultation — Book Now",
    "✦ ISO 9001:2015 Certified Development Team",
    "✦ 250+ Expert Developers | Ex-MAANG Engineers",
    "✦ Offices in India • USA • UAE • Canada"
  ];

  // We repeat 3x for a seamless loop
  const loopContent = [...contentItems, ...contentItems, ...contentItems];

  return (
    <div className="relative w-full h-[40px] bg-[#F7C948] text-[#1A1200] overflow-hidden flex items-center z-50">
      <div className="absolute inset-0 flex items-center whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
        {loopContent.map((item, index) => (
          <span key={index} className="inline-block px-4 font-semibold text-sm">
            {item}
          </span>
        ))}
      </div>
      
      {/* Right side static close button container */}
      <div className="absolute right-0 top-0 bottom-0 bg-[#F7C948] flex items-center px-4 shadow-[drop-shadow(-10px_0_10px_rgba(247,201,72,1))] space-x-2">
        <button 
          onClick={handleClose}
          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[#1A1200]/10 transition-colors"
          aria-label="Close announcement"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
