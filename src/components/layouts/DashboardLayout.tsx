'use client'

import type { FullPage } from '@/lib/types'
import { ArrowLeft, BarChart3, Server, Activity, ArrowUpRight, Network, Zap, Shield, Search, Bell, Settings } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function DashboardLayout({ page }: { page: FullPage }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dash-card',
        { y: 30 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo('.mock-bar',
        { scaleY: 0 },
        { scaleY: 1, duration: 1.2, stagger: 0.04, ease: 'bounce.out', delay: 0.5, transformOrigin: 'bottom' }
      )
      gsap.to('.radar-ring', {
        rotation: 360, duration: 20, repeat: -1, ease: 'linear'
      })
    }, container)
    return () => ctx.revert()
  }, [])

  const statFallback = [
    { label: 'Active Instances', value: '1,204', suffix: '' },
    { label: 'Bandwidth (TB)', value: '84.2', suffix: '' },
    { label: 'Latency (ms)', value: '12', suffix: '' },
    { label: 'Uptime', value: '99.99', suffix: '%' },
  ]
  const stats = (page.page_stats?.length ? page.page_stats : statFallback).slice(0, 4)
  const features = page.page_features?.length ? page.page_features : [
    { id: '1', title: 'Global Edge Network', description: 'Deploy instantly across 35 regions worldwide.' },
    { id: '2', title: 'Auto-Scaling Clusters', description: 'Traffic spikes handled automatically and elastically.' },
    { id: '3', title: 'Zero-Trust Security', description: 'End-to-end encryption with enterprise IAM policies.' },
    { id: '4', title: 'Serverless Functions', description: 'Run code without provisioning any infrastructure.' },
    { id: '5', title: 'Real-time Analytics', description: 'Sub-millisecond streaming query responses.' },
    { id: '6', title: 'Automated Backups', description: 'Continuous point-in-time recovery and snapshots.' },
  ]

  const barHeights = [30, 45, 25, 60, 80, 50, 70, 40, 90, 65, 35, 55, 100, 75, 55, 45, 85, 60, 40, 70, 50, 95, 30, 65]

  return (
    <div ref={container} className="min-h-screen bg-[#020205] text-zinc-300 font-mono selection:bg-violet-500/30">

      {/* Fixed SaaS Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-20 md:w-64 bg-[#0a0a0f] border-r border-white/[0.03] z-40 hidden sm:flex flex-col">
        <div className="h-20 border-b border-white/[0.03] flex items-center px-6">
          <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${page.accent_color}, #000)` }} />
          <span className="ml-3 font-bold text-white hidden md:block tracking-tight text-sm">TheGetNow</span>
        </div>
        <div className="p-4 flex-1 space-y-1">
          {['Overview', 'Analytics', 'Infrastructure', 'Security', 'Settings'].map((item, i) => {
            const SideIcons = [Activity, BarChart3, Server, Shield, Settings]
            const Icon = SideIcons[i]
            return (
              <div key={item} className={`px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${i === 0 ? 'bg-white/5 text-white' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium hidden md:block">{item}</span>
              </div>
            )
          })}
        </div>
        <div className="p-4 border-t border-white/[0.03]">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-black text-xs flex-shrink-0">
              {page.title.charAt(0)}
            </div>
            <div className="hidden md:block">
              <div className="text-xs font-bold text-white">Admin</div>
              <div className="text-[10px] text-zinc-500">admin@thegetnow.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="sm:pl-20 md:pl-64 min-h-screen flex flex-col">

        {/* Sticky Top Bar */}
        <header className="h-20 bg-[#020205]/90 backdrop-blur-md border-b border-white/[0.03] flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Link href={`/${page.category}`} className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
              <ArrowLeft className="w-4 h-4 text-white" />
            </Link>
            <div>
              <h1 className="text-base md:text-lg font-bold text-white tracking-tight">{page.title}</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{page.category} / Monitor</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-bold items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM HEALTHY
            </div>
            <div className="hidden sm:flex items-center gap-3 text-zinc-500 border-l border-white/5 pl-4">
              <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
              <Bell className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-4 md:p-8 overflow-hidden">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => {
              const Icons = [BarChart3, Activity, Server, Network]
              const Icon = Icons[i % Icons.length]
              return (
                <div key={i} className="dash-card bg-[#0a0a0f] border border-white/[0.04] rounded-2xl p-6 relative overflow-hidden group shadow-xl shadow-black/40">
                  <div className="absolute top-0 left-0 w-[2px] h-full transition-all duration-500 group-hover:w-1" style={{ backgroundColor: i === 0 ? page.accent_color : 'transparent' }} />
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                      <Icon className="w-4 h-4" style={{ color: i === 0 ? page.accent_color : '#71717a' }} />
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-[10px] font-bold">
                      +{(Math.random() * 18 + 2).toFixed(1)}% <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
                    {stat.value}<span className="text-xl text-zinc-600">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                  <svg className="absolute bottom-0 right-0 w-24 h-12 opacity-[0.07]" viewBox="0 0 100 50">
                    <path d="M0 50 L20 40 L40 45 L60 20 L80 30 L100 10 L100 50 Z" fill={i === 0 ? page.accent_color : 'white'} />
                  </svg>
                </div>
              )
            })}
          </div>

          {/* Big Middle Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            {/* Bar Chart Panel */}
            <div className="dash-card lg:col-span-2 bg-[#0a0a0f] border border-white/[0.04] rounded-2xl p-6 shadow-xl shadow-black/40">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-base font-bold text-white">Compute Usage Metrics</h3>
                  <p className="text-[11px] text-zinc-600 mt-1">{page.subtitle || 'Live system telemetry'}</p>
                </div>
                <select className="bg-black border border-white/10 text-[11px] px-3 py-1.5 rounded-lg text-zinc-400 font-mono outline-none">
                  <option>Last 24h</option>
                  <option>Last 7 Days</option>
                </select>
              </div>
              <div className="flex items-end gap-1 h-52">
                {barHeights.map((h, i) => (
                  <div key={i} className="flex-1 relative group cursor-pointer">
                    <div
                      className="mock-bar absolute bottom-0 left-0 right-0 rounded-t hover:opacity-100 transition-opacity"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i % 5 === 0 ? page.accent_color : '#27272a',
                        opacity: i % 5 === 0 ? 1 : 0.6,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:59</span>
              </div>
            </div>

            {/* Radar / Network Panel */}
            <div className="dash-card bg-[#0a0a0f] border border-white/[0.04] rounded-2xl p-6 shadow-xl shadow-black/40 flex flex-col">
              <h3 className="text-base font-bold text-white mb-4">Network Hub</h3>
              <div className="flex-1 flex items-center justify-center relative min-h-[220px]">
                <div className="absolute w-52 h-52 border border-white/5 rounded-full" />
                <div className="absolute w-36 h-36 border border-white/10 rounded-full" />
                <div className="radar-ring absolute w-52 h-52 border border-dashed border-white/[0.08] rounded-full" />
                <div className="w-14 h-14 rounded-full z-10 flex items-center justify-center shadow-lg" style={{ background: page.accent_color }}>
                  <Zap className="w-6 h-6 text-black" />
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div key={i} className="absolute w-full h-full flex items-center" style={{ transform: `rotate(${deg}deg)` }}>
                    <div className="w-2.5 h-2.5 rounded-full absolute right-8 border-2 border-black" style={{ background: page.accent_color }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-4 border-t border-white/5 pt-4">
                <span>6 Nodes</span>
                <span className="text-emerald-500">● All Online</span>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="dash-card bg-[#0a0a0f] border border-white/[0.04] rounded-2xl p-6 shadow-xl shadow-black/40">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-bold text-white">System Capabilities</h3>
              <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{features.length} Modules</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, i) => (
                <div key={feature.id || i} className="flex gap-3 p-4 bg-black/40 rounded-xl border border-white/[0.03] hover:border-white/10 transition-colors group cursor-pointer">
                  <div className="p-2 rounded-lg bg-white/5 h-fit flex-shrink-0" style={{ color: page.accent_color }}>
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5 group-hover:text-violet-300 transition-colors">{feature.title}</div>
                    <div className="text-[11px] text-zinc-500 leading-relaxed">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="block w-full mt-6 py-4 rounded-xl text-center font-black text-sm transition-all hover:opacity-90" style={{ background: page.accent_color, color: '#000' }}>
              Deploy {page.title} Solution
            </Link>
          </div>

        </main>
      </div>
    </div>
  )
}
