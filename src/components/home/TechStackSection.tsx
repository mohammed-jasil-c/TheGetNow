'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    label: 'Frontend',
    color: '#0057FF',
    techs: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', years: '8+', projects: '200+', desc: 'Component-based UI library for building interactive interfaces at scale.' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', years: '6+', projects: '150+', desc: 'Full-stack React framework with SSR, ISR, and edge runtime support.' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', years: '5+', projects: '80+', desc: 'Progressive framework for building elegant, reactive user interfaces.' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg', years: '7+', projects: '100+', desc: 'Enterprise-grade TypeScript framework for complex single-page apps.' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg', years: '3+', projects: '25+', desc: 'Compiler-first framework producing minimal, highly-optimized bundles.' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', years: '7+', projects: '300+', desc: 'Strongly-typed JavaScript superset for reliable, maintainable codebases.' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', years: '5+', projects: '250+', desc: 'Utility-first CSS framework for rapidly building custom designs.' },
      { name: 'Flutter Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', years: '4+', projects: '45+', desc: 'Cross-platform framework compiling to native web, mobile, and desktop.' },
    ]
  },
  {
    label: 'Backend',
    color: '#10b981',
    techs: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', years: '9+', projects: '300+', desc: 'Asynchronous JavaScript runtime for building scalable network applications.' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', years: '10+', projects: '200+', desc: 'Versatile language powering AI/ML pipelines, APIs, and automation scripts.' },
      { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', years: '5+', projects: '60+', desc: 'Concurrency-first language ideal for microservices and high-throughput systems.' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', years: '12+', projects: '150+', desc: 'Rock-solid JVM language powering enterprise banking and trading systems.' },
      { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', years: '4+', projects: '35+', desc: 'Memory-safe systems language for blockchain runtimes and low-level infra.' },
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg', years: '7+', projects: '80+', desc: 'Elegant language with Rails framework for rapid MVP development.' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', years: '8+', projects: '90+', desc: 'Microsoft ecosystem framework for enterprise Windows-first applications.' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', years: '5+', projects: '120+', desc: 'Query language for APIs enabling precise, efficient data fetching.' },
    ]
  },
  {
    label: 'Mobile',
    color: '#7B2FFF',
    techs: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', years: '5+', projects: '120+', desc: 'Cross-platform SDK by Google for natively compiled mobile apps.' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', years: '7+', projects: '100+', desc: 'Meta framework for building native mobile apps using React.' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg', years: '8+', projects: '80+', desc: 'Native language for iOS, watchOS, and macOS development by Apple.' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg', years: '6+', projects: '90+', desc: 'Modern JVM language for concise, safe Android app development.' },
    ]
  },
  {
    label: 'Cloud & DevOps',
    color: '#f59e0b',
    techs: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', years: '10+', projects: '250+', desc: 'Market-leading cloud platform for compute, storage, and AI services.' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', years: '7+', projects: '120+', desc: 'Enterprise cloud by Microsoft with deep AD and .NET integration.' },
      { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', years: '6+', projects: '80+', desc: 'Google Cloud for BigQuery, Vertex AI, and Kubernetes workloads.' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', years: '8+', projects: '300+', desc: 'Containerization platform for consistent dev-to-prod deployments.' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', years: '6+', projects: '100+', desc: 'Container orchestration for auto-scaling production microservices.' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg', years: '5+', projects: '80+', desc: 'Infrastructure as Code for multi-cloud provisioning and governance.' },
    ]
  },
  {
    label: 'AI & Data',
    color: '#ec4899',
    techs: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', years: '6+', projects: '60+', desc: 'Industry-leading ML framework for training and deploying neural networks.' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', years: '5+', projects: '50+', desc: 'Research-friendly ML framework with dynamic computation graphs.' },
      { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', years: '3+', projects: '40+', desc: 'GPT-4, DALL-E, and Whisper API integrations for generative AI.' },
      { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', years: '2+', projects: '30+', desc: 'Framework for building LLM-powered agents and RAG pipelines.' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', years: '8+', projects: '150+', desc: 'Python library for data manipulation and quantitative analysis.' },
      { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg', years: '5+', projects: '40+', desc: 'Distributed computing engine for large-scale data processing.' },
    ]
  },
  {
    label: 'Blockchain',
    color: '#f97316',
    techs: [
      { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg', years: '5+', projects: '50+', desc: 'Smart contract language for Ethereum and EVM-compatible chains.' },
      { name: 'Rust (Solana)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', years: '3+', projects: '25+', desc: 'Building high-performance Solana programs and Anchor protocols.' },
      { name: 'Hardhat', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', years: '4+', projects: '45+', desc: 'Development environment for compiling, testing, and deploying contracts.' },
      { name: 'IPFS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', years: '4+', projects: '30+', desc: 'Decentralized storage protocol for NFT metadata and dApp assets.' },
    ]
  },
]

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-heading', {
        y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tech-heading', start: 'top 85%' }
      })
      gsap.from('.tech-tabs', {
        y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.tech-tabs', start: 'top 88%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 tech-heading">
          <p className="section-label">Technology Stack</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
            60+ Technologies.<br /><span className="gradient-text">Infinite Possibilities.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            We handpick the right tools for every project — from battle-tested enterprise stacks to cutting-edge emerging tech.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tech-tabs flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === i
                  ? 'text-white shadow-lg'
                  : 'hover:scale-105'
              }`}
              style={{
                background: activeTab === i ? cat.color : 'var(--color-card)',
                border: `1px solid ${activeTab === i ? cat.color : 'var(--color-border)'}`,
                color: activeTab === i ? '#FFFFFF' : 'var(--color-text-secondary)',
                boxShadow: activeTab === i ? `0 0 25px ${cat.color}40` : 'none',
              }}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-70">({cat.techs.length})</span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories[activeTab].techs.map((tech) => (
            <div
              key={tech.name}
              className="enterprise-card rounded-2xl p-6 cursor-default group relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: `radial-gradient(200px circle at 50% 30%, ${categories[activeTab].color}10, transparent)` }} />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 p-2.5 group-hover:scale-110 transition-transform" style={{ background: `${categories[activeTab].color}12`, border: `1px solid ${categories[activeTab].color}25` }}>
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>{tech.name}</h3>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: `${categories[activeTab].color}15`, color: categories[activeTab].color }}>
                      {tech.years}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed line-clamp-2 mb-2" style={{ color: 'var(--color-muted)' }}>{tech.desc}</p>
                  <p className="text-[10px] font-bold" style={{ color: categories[activeTab].color }}>
                    {tech.projects} projects
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10" style={{ borderTop: '1px solid var(--color-border)' }}>
          {[
            { val: '60+', label: 'Technologies' },
            { val: '12+', label: 'Years Average Exp.' },
            { val: '1000+', label: 'Combined Projects' },
            { val: '6', label: 'Tech Categories' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black font-accent gradient-text">{stat.val}</p>
              <p className="text-xs font-semibold" style={{ color: 'var(--color-muted)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
