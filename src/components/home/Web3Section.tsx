'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Network, Image as ImageIcon, Landmark, Layers, Wallet } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const web3Features = [
  { icon: ShieldCheck, title: 'Smart Contract Audit & Dev', desc: 'Battle-tested, gas-optimized Solidity & Rust across EVM, Solana and Cosmos ecosystems. We formally verify every critical path to eliminate exploits before they happen.', tags: ['Solidity', 'Rust', 'Cairo'] },
  { icon: Network, title: 'DeFi Protocol Engineering', desc: 'AMM, lending, staking, and yield vaults with institutional-grade cross-chain architecture. Our protocols have secured over $500M in total value locked.', tags: ['AMMs', 'Cross-Chain', 'Yield Vaults'] },
  { icon: ImageIcon, title: 'NFT & Digital Assets', desc: 'High-traffic NFT marketplaces with lazy minting, royalty enforcement, and IPFS storage. Built to handle 100K+ concurrent minters without degradation.', tags: ['ERC-721', 'ERC-1155', 'IPFS'] },
  { icon: Landmark, title: 'DAO & Governance', desc: 'On-chain governance with timelocks, multi-sig treasury and delegate voting mechanics. We build the democratic infrastructure for decentralized organizations.', tags: ['Snapshot', 'Governor', 'Gnosis Safe'] },
  { icon: Layers, title: 'Layer 2 & Rollups', desc: 'Deploy and optimize protocols natively on Arbitrum, Optimism, Polygon zkEVM and StarkNet. Reduce gas costs by up to 100x while maintaining security guarantees.', tags: ['Arbitrum', 'zkSync', 'StarkNet'] },
  { icon: Wallet, title: 'Crypto Exchange & Wallet', desc: 'Centralized, decentralized, and hybrid exchange infrastructure with real-time order books. We build the matching engines that process millions of trades per second.', tags: ['CEX Engines', 'DEX', 'HD Wallets'] },
]

const networks = ['Ethereum', 'Solana', 'Polygon', 'BNB Chain', 'Avalanche', 'Arbitrum', 'Cosmos', 'Algorand', 'StarkNet', 'Optimism']

export default function Web3Section() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.w3-title', {
        y: 60, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.w3-title', start: 'top 85%' }
      })
      // Removed w3-card and net-pill GSAP animations to test visibility
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--color-surface)' }}>
      {/* Glowing background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(0, 87, 255, 0.06)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(123, 47, 255, 0.04)' }} />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="pill-badge mx-auto mb-6 w-fit">
            ⛓ Web3 & Blockchain
          </div>
          <h2 className="w3-title text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
            The Future is<br />
            <span className="gradient-text-hero">Decentralized.</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            50+ production blockchain protocols shipped across DeFi, NFTs, DAOs, and enterprise chains. Over $500M in TVL secured.
          </p>
        </div>

        {/* Features Grid */}
        <div className="w3-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {web3Features.map((f) => (
            <div key={f.title} className="w3-card enterprise-card rounded-2xl p-8">
              <div className="text-4xl mb-5 text-blue-500">
                <f.icon className="w-10 h-10" strokeWidth={1.5} style={{ color: 'var(--color-text)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Network Strip */}
        <div className="net-strip flex flex-wrap gap-3 justify-center mb-12">
          {networks.map((n) => (
            <span key={n} className="net-pill enterprise-card px-5 py-2.5 rounded-full text-sm font-bold cursor-default flex items-center justify-center text-center" style={{ color: 'var(--color-text)' }}>
              {n}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services/blockchain-development" className="glow-button text-base">
            Explore Web3 Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
