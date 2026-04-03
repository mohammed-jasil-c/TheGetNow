import type { FullPage } from '@/lib/types'
import CinematicLayout from './CinematicLayout'
import SplitLayout from './SplitLayout'
import ShowcaseLayout from './ShowcaseLayout'
import MagazineLayout from './MagazineLayout'
import ComparisonLayout from './ComparisonLayout'
import DashboardLayout from './DashboardLayout'

export default function LayoutRenderer({ page }: { page: FullPage }) {
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
    case 'documentation':
    case 'interactive':
      return <SplitLayout page={page} /> // Fallback mapped logically
    case 'timeline':
    case 'landing':
    case 'cinematic':
    default:
      return <CinematicLayout page={page} />
  }
}
