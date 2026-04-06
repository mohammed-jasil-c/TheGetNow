import { INDUSTRIES } from '@/data/industries'
import IndustriesShowcase from '@/components/industries/IndustriesShowcase'

export const metadata = {
  title: 'Industries | TheGetNow — Sector-Specific Digital Solutions',
  description: 'From FinTech to Healthcare, Retail to Logistics — we build purpose-built digital solutions tailored to your industry with deep domain expertise and enterprise-grade engineering.',
}

export default function IndustriesPage() {
  return <IndustriesShowcase industries={INDUSTRIES} />
}
