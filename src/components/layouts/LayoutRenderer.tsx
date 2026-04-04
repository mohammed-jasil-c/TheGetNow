import type { FullPage } from '@/lib/types'
import CinematicLayout from './CinematicLayout'
import SplitLayout from './SplitLayout'
import ShowcaseLayout from './ShowcaseLayout'
import MagazineLayout from './MagazineLayout'
import ComparisonLayout from './ComparisonLayout'
import DashboardLayout from './DashboardLayout'
import TimelineLayout from './TimelineLayout'
import InteractiveLayout from './InteractiveLayout'
import LandingLayout from './LandingLayout'
import DocumentationLayout from './DocumentationLayout'
import IndustriesLayout from './IndustriesLayout'

export default function LayoutRenderer({ page }: { page: FullPage }) {
  // Category-level overrides — always use premium layouts for specific categories
  if (page.category === 'industries') return <IndustriesLayout page={page} />

  switch (page.layout_template) {
    case 'split':
      return <SplitLayout page={page} />
    case 'dashboard':
      return <DashboardLayout page={page} />
    case 'showcase':
      return <ShowcaseLayout page={page} />
    case 'magazine':
      return <MagazineLayout page={page} />
    case 'comparison':
      return <ComparisonLayout page={page} />
    case 'timeline':
      return <TimelineLayout page={page} />
    case 'interactive':
      return <InteractiveLayout page={page} />
    case 'landing':
      return <LandingLayout page={page} />
    case 'documentation':
      return <DocumentationLayout page={page} />
    case 'cinematic':
    default:
      return <CinematicLayout page={page} />
  }
}

