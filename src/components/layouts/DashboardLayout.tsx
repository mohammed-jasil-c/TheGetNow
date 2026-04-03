import type { FullPage } from '@/lib/types'
import { ArrowLeft, CheckCircle, BarChart, Server, Activity, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function DashboardLayout({ page }: { page: FullPage }) {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans">
      <div className="max-w-[1600px] mx-auto p-4 lg:p-6 pb-20">
        
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 pt-20" data-gsap-fade>
          <div className="flex items-center gap-6">
            <Link href={`/${page.category}`} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{page.title}</h1>
              <p className="text-sm text-zinc-500 mt-1 uppercase tracking-wider">{page.category} Overview / System Status</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Healthy
            </div>
          </div>
        </header>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {page.page_stats?.map((stat, i) => {
            const icons = [BarChart, Activity, Server, CheckCircle]
            const StatIcon = icons[i % icons.length]
            return (
              <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group" data-gsap-scale>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: i === 0 ? page.accent_color : 'transparent' }} />
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <StatIcon className="w-5 h-5" style={{ color: i === 0 ? page.accent_color : 'white' }} />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                    +12.5% <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight">
                  <span data-gsap-counter={stat.value}>{stat.value}</span>{stat.suffix}
                </div>
                <div className="text-sm font-medium text-zinc-500">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          
          {/* Main Chart/Visual Area */}
          <div className="lg:col-span-2 bg-[#111111] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col" data-gsap-slide-left>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Performance Overview</h2>
              <div className="text-xs bg-white/5 px-3 py-1 rounded-md text-zinc-400">Last 30 Days</div>
            </div>
            
            <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
              {page.description}
            </p>

            <div className="flex-1 min-h-[300px] border border-white/5 rounded-xl bg-black relative overflow-hidden flex items-end">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              {/* Mock Chart Bars */}
              <div className="w-full flex items-end justify-between px-4 lg:px-12 gap-2 pb-4">
                {[40, 20, 60, 45, 80, 50, 90, 70, 100, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative group cursor-pointer transition-all hover:bg-white/20" style={{ height: `${h}%` }}>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}k
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features/Details Panel */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 lg:p-8" data-gsap-slide-right>
            <h2 className="text-xl font-bold text-white mb-8">Module Integration</h2>
            <div className="space-y-6">
              {page.page_features?.map((feature, i) => (
                <div key={feature.id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-pointer">
                  <div className="mt-1 w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${page.accent_color}20`, color: page.accent_color }}>
                    {feature.icon === 'CheckCircle' ? <CheckCircle className="w-5 h-5"/> : <Server className="w-5 h-5"/>}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
              Deploy Solution
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
