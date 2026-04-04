/* eslint-disable @next/next/no-page-custom-font, @next/next/no-img-element */
'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { name: 'Bike Taxi', slug: 'bike-taxi', icon: 'pedal_bike', desc: 'Agile urban transport solutions for congested city landscapes.' },
  { name: 'Bus Booking', slug: 'bus-booking', icon: 'directions_bus', desc: 'Intercity travel management with real-time seat mapping.' },
  { name: 'Cab Booking', slug: 'cab-booking', icon: 'local_taxi', desc: 'Premium ride-hailing experiences with fleet tracking capabilities.' },
  { name: 'Courier', slug: 'courier', icon: 'package_2', desc: 'End-to-end logistics with intelligent route optimization.' },
  { name: 'Dating', slug: 'dating', icon: 'favorite', desc: 'Meaningful connections through advanced matchmaking algorithms.' },
  { name: 'Electric Vehicle', slug: 'electric-vehicle', icon: 'electric_car', desc: 'Charging network management and smart vehicle diagnostics.', tag: 'New', tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed' },
  { name: 'E-Scooter Sharing', slug: 'e-scooter-sharing', icon: 'moped', desc: 'Micro-mobility solutions for the sustainable modern metropolis.', tag: 'Most Popular', tagColor: 'bg-primary-container text-on-primary-container' },
  { name: 'Event Booking', slug: 'event-booking', icon: 'confirmation_number', desc: 'Seamless ticketing and venue management for any scale.' },
  { name: 'Fantasy Football', slug: 'fantasy-football', icon: 'sports_soccer', desc: 'High-performance gaming platforms with real-time data feeds.' },
  { name: 'Fitness', slug: 'fitness', icon: 'fitness_center', desc: 'Personalized workout tracking and community engagement.' },
  { name: 'Flower Delivery', slug: 'flower-delivery', icon: 'local_florist', desc: 'Gifting concierge services with precise delivery windows.' },
  { name: 'Food Delivery', slug: 'food-delivery', icon: 'restaurant', desc: 'Intuitive ordering systems for the quick-service economy.' },
  { name: 'Fuel Delivery', slug: 'fuel-delivery', icon: 'local_gas_station', desc: 'On-demand energy fulfillment for mobile professionals.' },
  { name: 'Grocery Delivery', slug: 'grocery-delivery', icon: 'shopping_basket', desc: 'Intelligent inventory and dark-store fulfillment logistics.' },
  { name: 'Healthcare', slug: 'healthcare', icon: 'medical_services', desc: 'HIPAA-compliant telemedicine and patient record portals.' },
  { name: 'Home Services', slug: 'home-services', icon: 'home_repair_service', desc: 'Marketplace for trusted professionals and repair experts.' },
  { name: 'Meditation', slug: 'meditation', icon: 'self_improvement', desc: 'Curated mental wellness journeys and audio experiences.' },
  { name: 'Music Streaming', slug: 'music-streaming', icon: 'music_note', desc: 'High-fidelity audio delivery with social discovery features.' },
  { name: 'OnlyFans Clone', slug: 'onlyfans-clone', icon: 'star', desc: 'Sophisticated subscription-based content creator platforms.', tag: 'New', tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed' },
  { name: 'Payments', slug: 'payments', icon: 'payments', desc: 'Secure, scalable fintech gateways for global commerce.' },
  { name: 'Pharmacy', slug: 'pharmacy', icon: 'medication', desc: 'Prescription management and rapid medical delivery.' },
  { name: 'Real Estate', slug: 'real-estate', icon: 'domain', desc: 'Immersive property listing and virtual tour ecosystems.' },
  { name: 'Salon & Spa', slug: 'salon-spa', icon: 'content_cut', desc: 'Elegant appointment scheduling and loyalty management.' },
  { name: 'Scavenger Hunt', slug: 'scavenger-hunt', icon: 'explore', desc: 'Gamified AR experiences for team building and tourism.' },
  { name: 'Smart TV', slug: 'smart-tv', icon: 'tv', desc: 'Next-gen OTT streaming for the modern living room.', tag: 'New', tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed' },
  { name: 'Stock Trading', slug: 'stock-trading', icon: 'show_chart', desc: 'Low-latency market data and intuitive portfolio management.' },
  { name: 'Travel', slug: 'travel', icon: 'flight_takeoff', desc: 'Comprehensive itinerary planning for global explorers.' },
  { name: 'Video Streaming', slug: 'video-streaming', icon: 'smart_display', desc: 'Scalable VOD and live broadcast infrastructure.' },
  { name: 'Wearable', slug: 'wearable', icon: 'watch', desc: 'Syncing biometric data for glanceable user insights.', tag: 'New', tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed' }
];

export default function IndustriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.gsap-hero > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from('.gsap-image', {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gsap-image-container',
          start: 'top 80%'
        }
      });

      gsap.from('.gsap-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.gsap-grid',
          start: 'top 85%'
        }
      });
      
      gsap.from('.gsap-cta', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-cta',
          start: 'top 85%'
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background font-body text-on-surface min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <main className="pt-24 pb-24 px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <header className="gsap-hero max-w-4xl mb-24">
          <span className="font-label text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sector Intelligence</span>
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
              Curated solutions for <span className="italic text-primary">every vertical</span> imaginable.
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              From hyper-local delivery logistics to global financial ecosystems, we build the digital infrastructure that defines modern industry standards.
          </p>
        </header>

        {/* Featured Visual Narrative */}
        <div className="gsap-image-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 cursor-pointer">
          <div className="gsap-image relative h-[400px] rounded-xl overflow-hidden group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Modern abstract tech interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkxtHReDxqUkNuWHzngoDfbDGxoGEBIhL6HXzgzUxgPiFupiZyT-l-PwUXmnmwyvHDR9CYt5Nq6ms-Mkb0y0BSAxtknV-w-rZhDXcXf-Ye5XenX4LO-Tli3KsHKoxtGsuxRJlHCE6Ax9leWVkY2WnLUr3YSVWa2MYmKWWalFdP0xF3z795cNHjs9P16_n3qk03l2oJj-4fXQ7nlBiMkillHKp1qaf0u2hgy8R_4VN2hgyRsSTF95iy2A8n8IXYt44Q3TwFflOu2Aig"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 01</p>
              <h3 className="font-headline text-xl">Architectural Integrity</h3>
            </div>
          </div>
          <div className="gsap-image relative h-[400px] rounded-xl overflow-hidden group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sophisticated urban mobility concept" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHA2FRFiPeTB9Z9NkZ6r8aITym6Q6DuJoO_ZFAuhywc5Zh_uWbacXHDtiiZgmjXE1EETzKLbfQOQx2B584kZZ8EigXLlFvWf3-yQgd6cgn_rt1BlKQ86EqpLtCXV57jC9St6o8ovBaxxDCZxHj-69qNHT9RHBaRamgRSMJBNu4YJF2E-doh1AgahfXPshRjQbSV9FZ0_Ib-JVBY9NgndpfTqrN5veIIlDRpcPciwEFdLN93baCokd43rbaCECK_bTtKUIoL015DMAO"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 02</p>
              <h3 className="font-headline text-xl">Smart Mobility</h3>
            </div>
          </div>
          <div className="gsap-image relative h-[400px] rounded-xl overflow-hidden group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A clean high-end smartphone screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhMwzlmZ4MMAH8WYVLj_LxUWjmSdyCLI20FGQa4kmep-zu_f2y8y4OTgg8Utz6EP_W2sqpjIWFkAXHbV6TAm48QynwLGc7n-2PfjYEIiY1EifkYTJYqIGYDh29zVfWQr743I-INbmojRBA3eylPFNFi2bxJgXiEFJ-JJ8z2J5bj90uNbziCyOEfjd776CN2Cpg7gSHHyvJWj4xid6aPSlSWWeDU1F0qIJKEpChBmhUjAeoCseWB8KQZJMiy-uJksXcD1HgTiQzFAN"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <p className="font-label text-[10px] uppercase tracking-widest opacity-80 mb-2">Reference 03</p>
              <h3 className="font-headline text-xl">Wellness Systems</h3>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="gsap-grid editorial-grid border-l border-t border-outline-variant/15 text-left">
          {industries.map((ind) => (
            <Link href={`/industries/${ind.slug}`} key={ind.slug} className="gsap-card block p-8 border-r border-b border-outline-variant/15 hover:bg-surface-container-low transition-colors group relative cursor-pointer outline-none focus:bg-surface-container-low">
              {ind.tag && (
                <div className={`absolute top-4 right-4 ${ind.tagColor} px-2 py-0.5 rounded text-[10px] font-label font-bold tracking-widest uppercase`}>
                  {ind.tag}
                </div>
              )}
              <span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform origin-left">{ind.icon}</span>
              <h4 className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{ind.name}</h4>
              <p className="font-body text-sm text-on-surface-variant pr-4">{ind.desc}</p>
            </Link>
          ))}

          {/* Custom Development CTA */}
          <div className="gsap-card p-8 border-r border-b border-outline-variant/15 bg-primary-container/10 group flex flex-col justify-center items-start">
            <h4 className="font-headline text-xl mb-2">Custom Build</h4>
            <p className="font-body text-sm text-on-surface-variant mb-6">Have a unique vision not listed here? Our team specializes in bespoke digital architecture.</p>
            <Link className="text-primary font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="/contact">
                Inquire Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="gsap-cta mt-32 rounded-2xl bg-gradient-to-br from-primary to-primary-container p-12 md:p-24 text-center">
          <h2 className="font-headline text-4xl md:text-6xl text-white mb-8">Ready to define your industry?</h2>
          <p className="text-on-primary-container font-body text-lg max-w-xl mx-auto mb-12 opacity-90">
              Partner with the digital curators at Alexandria to build a platform that transcends current standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-label font-bold tracking-widest uppercase text-xs shadow-xl transition-all hover:scale-105 active:scale-95 inline-block">Start a Consultation</Link>
            <Link href="/portfolio" className="bg-primary/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-label font-bold tracking-widest uppercase text-xs transition-all hover:bg-primary/40 active:scale-95 inline-block">View Case Studies</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
