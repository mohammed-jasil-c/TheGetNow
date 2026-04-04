import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWidgets from '@/components/layout/FloatingWidgets'
import PageTransition from '@/components/layout/PageTransition'

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500'],
  variable: '--font-inter', 
  display: 'swap' 
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['600', '700', '800', '900'], 
  variable: '--font-jakarta', 
  display: 'swap' 
})

const grotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['500', '700'], 
  variable: '--font-grotesk', 
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'TheGetNow | Enterprise Software Development & Digital Transformation',
  description: 'Enterprise IT agency delivering next-gen digital solutions in AI, Blockchain, Web3, and Mobile App Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jakarta.variable} ${grotesk.variable} antialiased min-h-screen flex flex-col bg-[#06080F] text-[#F0F6FF]`}>
        {/* We will add ThemeProvider wrapper in the components themselves if needed, but the prompt only explicitly requested ThemeProvider, FloatingWidgets. We'll wrap children with what we need. */}
        <Navbar />
        <PageTransition>
          <main className="flex-grow">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  )
}
