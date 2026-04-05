import { supabaseServer } from '@/lib/supabase-pages'
import PortfolioClient from './PortfolioClient'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center group">
      <p className="text-4xl lg:text-5xl font-black gradient-text mb-1 font-heading transition-transform group-hover:scale-110 duration-500">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--color-muted)' }}>{label}</p>
    </div>
  )
}

export const metadata = {
  title: 'Portfolio | TheGetNow',
  description: 'Explore how we engineered 1,000+ digital products for world-class startups and enterprises.'
}

export default async function PortfolioPage() {
  const { data: projects } = await supabaseServer
    .from('pages')
    .select('slug, title, subtitle, description, category, featured_image, hero_gradient, content_json, layout_template')
    .eq('category', 'portfolio')
    .order('title', { ascending: true })

  const displayProjects = projects || []

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'var(--gradient-glow)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="section-label">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 font-heading" style={{ color: 'var(--color-text)' }}>
            Engineering <span className="gradient-text">Excellence.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Explore how we&apos;ve engineered 1,000+ digital products for world-class startups and enterprises across 50+ countries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="1000+" label="Projects Delivered" />
          <Stat value="$3.2B+" label="Revenue Generated" />
          <Stat value="50+" label="Countries" />
          <Stat value="98%" label="Satisfaction" />
        </div>
      </section>

      {/* Interactive Filter and Grid from Client Component */}
      <PortfolioClient initialProjects={displayProjects} />
      
      {/* CTA */}
      <section className="py-24 text-center mt-auto" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 font-heading" style={{ color: 'var(--color-text)' }}>Ready to scale your business?</h2>
          <a href="/contact" className="glow-button justify-center min-w-[200px] inline-flex">
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  )
}
