'use client'

import Link from 'next/link'
import { FaArrowRight, FaRocket } from 'react-icons/fa6'
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div
            className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
            style={{ background: 'var(--gradient-primary)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 bg-white/10 text-white/90 border border-white/20">
                <FaRocket className="w-3 h-3" />
                Start Your Project Today
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-heading leading-tight">
                Ready to build something<br className="hidden sm:block" /> extraordinary?
              </h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10">
                Our solution architects will analyze your requirements and provide a detailed proposal within 48 hours. Free consultation, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white text-[#0057FF] hover:bg-white/90 transition-all hover:shadow-xl hover:scale-105">
                  Get Free Consultation <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white border border-white/30 hover:bg-white/10 transition-all">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
