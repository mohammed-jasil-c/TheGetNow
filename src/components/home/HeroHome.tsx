'use client'

import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden" style={{ background: '#000000' }}>

      {/* ── Fullscreen Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── 50% Black Overlay ── */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* ── Hero Content ── */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center text-center"
        style={{
          paddingTop: 'clamp(200px, 20vw, 280px)',
          paddingBottom: 102,
          paddingLeft: 24,
          paddingRight: 24,
          gap: 0,
          fontFamily: "'General Sans', sans-serif",
        }}
      >
        {/* Badge / Pill */}
        <div
          className="inline-flex items-center gap-2 animate-fade-rise"
          style={{
            borderRadius: 20,
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.20)',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <span className="w-[4px] h-[4px] rounded-full bg-white flex-shrink-0" />
          <span style={{ color: 'rgba(255,255,255,0.60)' }}>
            Early access available from
          </span>
          <span className="text-white"> May 1, 2026</span>
        </div>

        {/* Heading */}
        <h1
          className="font-medium animate-fade-rise-delay"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.28,
            maxWidth: 613,
            marginTop: 40,
            background: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(0,0,0,0) 115%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Web3 at the Speed of Experience
        </h1>

        {/* Subtitle */}
        <p
          className="font-normal animate-fade-rise-delay-2"
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 680,
            marginTop: 24,
            color: 'rgba(255,255,255,0.70)',
          }}
        >
          Powering seamless experiences and real-time connections, EOS is the base for creators
          who move with purpose, leveraging resilience, speed, and scale to shape the future.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-rise-delay-3" style={{ marginTop: 48 }}>
          <div className="relative rounded-full" style={{ border: '0.6px solid rgba(255,255,255,0.6)' }}>
            {/* Glow streak */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: '60%',
                height: 1,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
                filter: 'blur(2px)',
              }}
            />
            <Link
              href="/contact"
              className="block rounded-full font-medium cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                fontSize: 14,
                padding: '11px 29px',
                background: '#FFFFFF',
                color: '#000000',
                fontFamily: "'General Sans', sans-serif",
                textDecoration: 'none',
              }}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
