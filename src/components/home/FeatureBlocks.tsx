'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/animations/ScrollReveal'

const features = [
  {
    label: 'AI-Powered Solutions',
    title: 'Intelligent systems that learn and adapt.',
    desc: 'From custom LLMs and RAG pipelines to computer vision and predictive analytics — we build AI that delivers measurable ROI.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    reverse: false,
  },
  {
    label: 'Cloud Architecture',
    title: 'Infrastructure that scales automatically.',
    desc: 'Multi-cloud, serverless, and containerized architectures that handle millions of requests while optimizing cost.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    reverse: true,
  },
  {
    label: 'Design Excellence',
    title: 'Interfaces that users love.',
    desc: 'Our design team creates pixel-perfect, accessible interfaces backed by user research and design systems that scale.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    reverse: false,
  },
]

export default function FeatureBlocks() {
  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-20 lg:space-y-32">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`flex flex-col ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative gradient blob */}
                <div
                  className="absolute -z-10 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                  style={{
                    background: 'rgba(0,87,255,0.1)',
                    top: '50%', left: f.reverse ? 'auto' : '-10%', right: f.reverse ? '-10%' : 'auto',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <p className="section-label mb-4">{f.label}</p>
                <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 font-heading" style={{ color: 'var(--color-text)' }}>
                  {f.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {f.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
