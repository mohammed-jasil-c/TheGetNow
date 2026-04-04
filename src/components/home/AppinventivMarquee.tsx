'use client'

const clients = [
  { name: 'Google', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg', color: '#4285F4' },
  { name: 'Microsoft', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg', color: '#00A4EF' },
  { name: 'Amazon', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg', color: '#FF9900' },
  { name: 'Meta', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg', color: '#0082FB' },
  { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg', color: '#635BFF' },
  { name: 'Shopify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg', color: '#96BF48' },
  { name: 'Slack', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg', color: '#4A154B' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg', color: '#F24E1E' },
  { name: 'Netflix', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg', color: '#E50914' },
  { name: 'Airbnb', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airbnb.svg', color: '#FF5A5F' },
  { name: 'Uber', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/uber.svg', color: '#000000' },
  { name: 'Spotify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg', color: '#1DB954' },
  { name: 'Coinbase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/coinbase.svg', color: '#0052FF' },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg', color: '#412991' },
  { name: 'Tesla', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tesla.svg', color: '#CC0000' },
]

export default function AppinventivMarquee() {
  const row1 = [...clients, ...clients, ...clients]
  const row2 = [...clients.slice(7), ...clients.slice(0, 7), ...clients.slice(7), ...clients.slice(0, 7), ...clients.slice(7), ...clients.slice(0, 7)]

  return (
    <section
      className="w-full py-14 overflow-hidden relative"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      {/* Section label */}
      <div className="text-center mb-8">
        <p className="section-label">Trusted by industry leaders worldwide</p>
      </div>

      {/* Fade overlays */}
      <div className="absolute top-0 left-0 w-40 h-full marquee-fade-left z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-full marquee-fade-right z-10 pointer-events-none" />

      {/* Row 1 — left to right */}
      <div className="flex items-center gap-8 whitespace-nowrap mb-6" style={{ animation: 'marquee 50s linear infinite' }}>
        {row1.map((client, i) => (
          <div
            key={`r1-${i}`}
            className="enterprise-card flex items-center gap-3 px-5 py-3 rounded-xl shrink-0 cursor-default group"
          >
            <div
              className="w-7 h-7 flex items-center justify-center rounded-lg p-1 transition-all"
              style={{ backgroundColor: `${client.color}15` }}
            >
              <img src={client.icon} alt={client.name} className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(200deg)' }} />
            </div>
            <span className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{client.name}</span>
          </div>
        ))}
      </div>

      {/* Row 2 — right to left */}
      <div className="flex items-center gap-8 whitespace-nowrap" style={{ animation: 'marquee-reverse 55s linear infinite' }}>
        {row2.map((client, i) => (
          <div
            key={`r2-${i}`}
            className="enterprise-card flex items-center gap-3 px-5 py-3 rounded-xl shrink-0 cursor-default group"
          >
            <div
              className="w-7 h-7 flex items-center justify-center rounded-lg p-1 transition-all"
              style={{ backgroundColor: `${client.color}15` }}
            >
              <img src={client.icon} alt={client.name} className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(200deg)' }} />
            </div>
            <span className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
