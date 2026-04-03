import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GSAPProvider from '@/components/GSAPProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TheGetNow | Next-Gen Digital Solutions',
  description: 'Enterprise-grade software development, AI solutions, and digital transformation for modern businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0a0a0f] text-zinc-100 min-h-screen flex flex-col selection:bg-violet-500/30 selection:text-white`}>
        <Navbar />
        <GSAPProvider>
          <main className="flex-grow pt-20">
            {children}
          </main>
        </GSAPProvider>
        <Footer />
      </body>
    </html>
  )
}
