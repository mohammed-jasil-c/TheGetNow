'use client'

import { useEffect, useRef } from 'react'

const techCategories = [
  {
    title: 'Artificial Intelligence',
    number: '01',
    description: 'We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and unlock transformative value.',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face', 'scikit-learn'],
    accent: '#0057FF',
  },
  {
    title: 'Generative AI',
    number: '02',
    description: 'Integrating Gen AI into internal knowledge systems and customer-facing tools with the highest security standards.',
    techs: ['GPT-4', 'Claude', 'Gemini', 'Stable Diffusion', 'RAG', 'Vector DBs'],
    accent: '#7B2FFF',
  },
  {
    title: 'Cloud & Infrastructure',
    number: '03',
    description: 'Designing resilient, auto-scaling cloud architectures that handle millions of requests with 99.99% uptime.',
    techs: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Docker', 'Kubernetes'],
    accent: '#00D4FF',
  },
  {
    title: 'Blockchain & Web3',
    number: '04',
    description: 'Building decentralized protocols, smart contracts, and tokenized economies for the next generation of the internet.',
    techs: ['Solidity', 'Rust', 'Ethereum', 'Polygon', 'Solana', 'IPFS'],
    accent: '#10B981',
  },
]

export default function TechExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section className="py-24 sm:py-32" style={{ background: 'var(--bg-page)' }}>
      <div ref={sectionRef} className="reveal max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Capabilities & Engineering</p>
          <h2 className="section-title mb-4 mx-auto">
            Deep <span className="gradient-text">Technical</span> Expertise,
            <br className="hidden sm:block" />
            Supporting <span className="gradient-text">Modern</span> Systems
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.number} className="glass-card p-8 rounded-2xl group relative overflow-hidden">
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ background: cat.accent }} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold" style={{ color: cat.accent }}>{cat.number}</span>
                  <div className="h-px flex-1" style={{ background: `${cat.accent}30` }} />
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {cat.title}
                </h3>
                
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {cat.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-bold"
                      style={{ background: `${cat.accent}10`, color: cat.accent, border: `1px solid ${cat.accent}20` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
