import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWidgets from '@/components/layout/FloatingWidgets'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TheGetNow | Enterprise Software Development & Digital Transformation',
  description: 'Enterprise IT agency delivering next-gen digital solutions in AI, Blockchain, Web3, and Mobile App Development. Trusted by leading brands worldwide.',
  keywords: 'AI development, blockchain, web3, mobile app development, enterprise software, digital transformation',
  openGraph: {
    title: 'TheGetNow | Enterprise Software Development',
    description: 'We engineer world-class digital products for startups and Fortune 500 enterprises.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TheGetNow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheGetNow | Enterprise Software Development',
    description: 'We engineer world-class digital products for startups and Fortune 500 enterprises.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TheGetNow',
    url: 'https://thegetnow.com',
    logo: 'https://thegetnow.com/logo.png',
    description: 'Enterprise IT agency delivering next-gen digital solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One World Trade Center, Floor 85',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10007',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-628-432-7890',
      contactType: 'sales',
      email: 'hello@thegetnow.com',
    },
    sameAs: [
      'https://linkedin.com/company/thegetnow',
      'https://twitter.com/thegetnow',
      'https://github.com/thegetnow',
    ],
  }

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${grotesk.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Rubik:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <SmoothScroll>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" role="main" className="flex-grow">
              {children}
            </main>
            <Footer />
            <FloatingWidgets />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
