import Link from 'next/link'
import { ArrowRight, Zap, Globe, Shield, Code, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full animate-pulse" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center" data-gsap-fade>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
            Next-Generation Digital Agency
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-orange-500">Future</span><br />
            of your Business.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light">
            We engineer intelligent, scalable, and stunning digital solutions that transform bold ideas into market-leading reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 bg-black relative" id="explore">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20" data-gsap-fade>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore <span className="text-violet-400">TheGetNow</span> Ecosystem</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Over 1,000+ specialized solutions across industries, technologies, and services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { title: 'Services', desc: 'Custom enterprise software development', icon: Code, color: 'from-blue-500 to-indigo-600', link: '/services' },
               { title: 'Industries', desc: 'Tailored solutions per industry segment', icon: Globe, color: 'from-emerald-500 to-teal-600', link: '/industries' },
               { title: 'Solutions', desc: 'Ready-to-deploy platforms and tools', icon: Zap, color: 'from-orange-500 to-red-600', link: '/solutions' },
               { title: 'Case Studies', desc: 'Success stories and proven impact', icon: Shield, color: 'from-fuchsia-500 to-pink-600', link: '/case-studies' },
            ].map((cat, i) => (
              <Link key={cat.title} href={cat.link} className="glass-card rounded-3xl p-8 group relative overflow-hidden" data-gsap-fade>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-zinc-400 mb-8">{cat.desc}</p>
                <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors gap-2">
                  Explore <ChevronRight className="w-4 h-4" />
                </div>
                {/* Hover gradient effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              </Link>
            ))}
          </div>

          {/* More categories quick links */}
          <div className="mt-20 pt-12 border-t border-white/10" data-gsap-fade>
            <p className="text-center text-zinc-500 mb-8 font-medium tracking-widest uppercase text-sm">More specialized areas</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Technologies', 'Products', 'Resources', 'Guides', 'Careers', 'Locations', 'Comparisons', 'Webinars', 'Team'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 text-zinc-300 hover:text-white transition-all text-sm font-medium">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 px-6 relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Dynamic Pages', val: 1000, suffix: '+' },
            { label: 'Completed Projects', val: 500, suffix: '+' },
            { label: 'Global Clients', val: 200, suffix: '+' },
            { label: 'Expert Developers', val: 150, suffix: '+' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent mb-2">
                <span data-gsap-counter={stat.val}>0</span>{stat.suffix}
              </div>
              <p className="text-zinc-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
