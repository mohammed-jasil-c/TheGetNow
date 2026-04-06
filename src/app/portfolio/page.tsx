import { supabaseServer } from '@/lib/supabase-pages'
import PortfolioClient from './PortfolioClient'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative group overflow-hidden">
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-500" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 ease-out" />
      <h3 className="text-5xl lg:text-6xl font-light tracking-tighter text-on-surface mb-3 font-headline group-hover:text-primary transition-colors duration-500">
        {value}
      </h3>
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-on-surface-variant/60 group-hover:text-primary/70 transition-colors duration-500">
        {label}
      </p>
    </div>
  )
}

export const metadata = {
  title: 'Portfolio | TheGetNow',
  description: 'Explore how we engineered 1,000+ digital products for world-class startups and enterprises.'
}

export default async function PortfolioPage() {
  // Fetch from DB
  const { data: projects } = await supabaseServer
    .from('pages')
    .select('slug, title, subtitle, description, category, featured_image, hero_gradient, content_json, layout_template')
    .eq('category', 'portfolio')
    .order('title', { ascending: true })

  // deduplicate projects by title/slug to prevent duplicate seed rows from showing
  const uniqueProjectsMap = new Map();
  (projects || []).forEach(p => {
    const key = p.title?.trim().toLowerCase();
    if (!uniqueProjectsMap.has(key)) {
      uniqueProjectsMap.set(key, p);
    }
  });

  const displayProjects = Array.from(uniqueProjectsMap.values());

  return (
    <div className="min-h-screen bg-background">

      {/* Cinematic Video Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-background flex flex-col justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)',
        }} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-32 pb-40 w-full flex flex-col justify-center">
          <h1
            className="text-6xl md:text-8xl lg:text-[110px] font-bold uppercase text-white tracking-tighter leading-[0.85] drop-shadow-2xl mix-blend-overlay"
          >
            NEW ERA<br />
            OF DESIGN<br />
            STARTS NOW
          </h1>

          <div className="mt-16">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{ width: 184, height: 65 }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 184 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 32.5C0 14.551 14.551 0 32.5 0H151.5C169.449 0 184 14.551 184 32.5C184 50.449 169.449 65 151.5 65H32.5C14.551 65 0 50.449 0 32.5Z"
                  fill="white"
                />
              </svg>
              <span className="relative z-10 font-bold uppercase text-[#161a20] text-sm tracking-widest">
                Initiate
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR Floating Overlay */}
      <section className="relative z-20 -mt-24 px-6 mb-20 pointer-events-none">
        <div className="max-w-[1200px] mx-auto pointer-events-auto">
          <div className="bg-surface/70 backdrop-blur-2xl rounded-[2.5rem] border border-border shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
            <Stat value="1000+" label="Projects Delivered" />
            <Stat value="$3.2B" label="Value Generated" />
            <Stat value="50+" label="Global Markets" />
            <Stat value="99.9%" label="Uptime Standard" />
          </div>
        </div>
      </section>

      {/* Interactive Filter and Grid from Client Component */}
      <PortfolioClient initialProjects={displayProjects} />
      
      {/* Deep CTA */}
      <section className="py-40 relative group overflow-hidden bg-on-surface">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold font-headline text-surface mb-8">
            Ready to scale your <span className="italic text-primary">vision?</span>
          </h2>
          <p className="text-xl text-surface-variant font-light mb-12 max-w-2xl mx-auto">
            Our engineering teams are ready to architect your next digital leap. Let's discuss your requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors border border-transparent hover:border-primary shadow-[0_0_40px_rgba(0,87,255,0.4)]">
            Start a Conversation <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  )
}
