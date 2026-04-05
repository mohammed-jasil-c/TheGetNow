import Link from 'next/link'
import { FaArrowRight, FaCode, FaMobile, FaBrain, FaCubes, FaCloud, FaPaintbrush, FaRocket, FaGears, FaShieldHalved, FaMicrochip, FaVrCardboard, FaArrowsRotate } from 'react-icons/fa6'
import { supabaseServer } from '@/lib/supabase-pages'

const iconMap: Record<string, any> = {
  faCode: FaCode, faMobileScreenButton: FaMobile, faBrain: FaBrain, faCubes: FaCubes,
  faCloud: FaCloud, faPaintBrush: FaPaintbrush, faRocket: FaRocket, faGears: FaGears,
  faShieldHalved: FaShieldHalved, faMicrochip: FaMicrochip, faVrCardboard: FaVrCardboard,
  faArrowsRotate: FaArrowsRotate,
}

export const metadata = {
  title: 'Services | TheGetNow — Enterprise Software Development',
  description: 'Explore our full-spectrum engineering services: Web, Mobile, AI, Blockchain, Cloud, UI/UX, DevOps, and more.',
}

export default async function ServicesPage() {
  const { data: services } = await supabaseServer
    .from('pages')
    .select('slug, title, subtitle, accent_color, icon, layout_template')
    .eq('category', 'services')
    .order('title', { ascending: true })

  const displayServices = services || []

  return (
    <div className="min-h-screen pb-32" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center max-w-[900px] mx-auto">
        <p className="section-label mb-4">Our Expertise</p>
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] mb-6 tracking-tight font-heading" style={{ color: 'var(--color-text)' }}>
          Enterprise <span className="gradient-text">Capabilities</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Full-spectrum engineering, design, and strategic services to power your digital transformation.
        </p>
      </section>

      {/* Masonry / Staggered Grid */}
      <section className="px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const IconCmp = iconMap[service.icon] || FaCode
            const accent = service.accent_color || '#0057FF'
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="enterprise-card group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                style={{ background: `${accent}08` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${accent}15`, color: accent }}
                >
                  <IconCmp className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors font-heading" style={{ color: 'var(--color-text)' }}>
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
                  {service.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                   <span className="pill-badge text-[9px] uppercase">{service.layout_template.replace(/[_-]/g, ' ')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-auto" style={{ color: accent }}>
                  View Solutions <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 px-4 sm:px-6 max-w-[1000px] mx-auto text-center border-t pt-24" style={{ borderColor: 'var(--color-border)' }}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading" style={{ color: 'var(--color-text)' }}>Not sure where to start?</h2>
        <p className="text-lg mb-10" style={{ color: 'var(--color-text-secondary)' }}>Let our experts map out the right technology strategy for your business objectives.</p>
        <Link href="/contact" className="glow-button mx-auto inline-flex items-center gap-2">
          Request Free Consultation <FaArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}
