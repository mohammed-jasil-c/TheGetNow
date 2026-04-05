import HeroHome from '@/components/home/HeroHome'
import ClientMarquee from '@/components/home/ClientMarquee'
import BentoServices from '@/components/home/BentoServices'
import FeatureBlocks from '@/components/home/FeatureBlocks'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Full-screen hero with animated headline and floating tech logos */}
      <HeroHome />

      {/* Infinite marquee of client/partner logos */}
      <ClientMarquee />

      {/* Bento-grid services showcase */}
      <BentoServices />

      {/* Alternating feature blocks with real images */}
      <FeatureBlocks />

      {/* Horizontal scrolling testimonials */}
      <TestimonialsCarousel />

      {/* Gradient CTA section */}
      <HomeCTA />
    </div>
  )
}
