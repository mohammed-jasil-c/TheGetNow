import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { supabaseServer } from '@/lib/supabase-pages'
import { getIndustryFallbackImage } from '@/data/industries'

export const metadata = {
  title: 'Industries | TheGetNow — Sector-Specific Solutions',
  description: 'From FinTech to Healthcare, Retail to Logistics — we build digital solutions tailored to your industry.',
}

export default async function IndustriesPage() {
  const { data: industries } = await supabaseServer
    .from('pages')
    .select('slug, title, subtitle, accent_color, featured_image')
    .eq('category', 'industries')
    .order('title', { ascending: true })

  const displayIndustries = industries || []

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <p className="section-label mb-4">Sector Intelligence</p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8 font-heading" style={{ color: 'var(--color-text)' }}>
          Curated solutions for{' '}
          <span className="gradient-text font-italic">every vertical.</span>
        </h1>
        <p className="text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
          From hyper-local delivery logistics to global financial ecosystems, we build the digital infrastructure that defines modern industry standards.
        </p>
      </section>

      {/* Featured Images */}
      <section className="px-6 max-w-[1400px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', label: 'Architectural Integrity' },
            { src: 'https://images.unsplash.com/photo-1558444479-c8f010524f06?w=800&q=80', label: 'Smart Mobility' },
            { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', label: 'Wellness Systems' },
          ].map((img, i) => (
            <div key={i} className="relative h-[350px] rounded-2xl overflow-hidden group enterprise-card">
              <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] uppercase tracking-widest opacity-80 mb-1">Reference 0{i + 1}</p>
                <h3 className="text-lg font-bold">{img.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-6 max-w-[1400px] mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayIndustries.map(ind => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="enterprise-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48">
                <Image 
                  src={ind.featured_image || getIndustryFallbackImage(ind.slug, displayIndustries.indexOf(ind))} 
                  alt={ind.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="33vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors font-heading" style={{ color: 'var(--color-text)' }}>
                  {ind.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {ind.subtitle}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: ind.accent_color || '#0057FF' }}>
                  Explore <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8 font-heading" style={{ color: 'var(--color-text)' }}>Ready to define your industry?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="glow-button justify-center min-w-[200px]">Start a Consultation</Link>
            <Link href="/portfolio" className="outline-button justify-center min-w-[200px]">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
