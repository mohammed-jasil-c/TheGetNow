'use client'

const logos = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix',
  'Spotify', 'Uber', 'Airbnb', 'Stripe', 'Shopify', 'Slack',
  'Figma', 'Adobe', 'Salesforce', 'Oracle',
]

export default function ClientMarquee() {
  const row = [...logos, ...logos]

  return (
    <section className="py-12 overflow-hidden" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: 'var(--color-muted)' }}>
        Trusted by industry leaders worldwide
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'var(--marquee-fade-l)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'var(--marquee-fade-r)' }} />
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center mx-8 sm:mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-black tracking-tight whitespace-nowrap" style={{ color: 'var(--color-text)' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
