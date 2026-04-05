import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing config')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const premiumImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
  'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
  'https://images.unsplash.com/photo-1627398246734-d88e0ce95761?q=80&w=2070',
  'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
  'https://images.unsplash.com/photo-1481481489700-302a2455938d?q=80&w=2056',
]

const stitchSlugs = [
  'cab-booking-app-detail',
  'stock-trading-app-development',
  'pharmacy-app-development',
  'technology-ai-hero-section',
  'travel-app-development',
  'bus-booking-app-detail',
  'fitness-app-detail',
  'real-estate-app-development',
  'grocerery-delivery-app-detail',
  'healthcare-app-development',
  'dating-app-development'
]

async function run() {
  // Fetch all portfolio items
  const { data: portfolios, error } = await supabase
    .from('pages')
    .select('id, title, slug')
    .eq('category', 'portfolio')

  if (error) {
    console.error('Failed to fetch', error)
    return
  }

  // Assign random images and random template layout
  for (let i = 0; i < portfolios.length; i++) {
    const item = portfolios[i]
    const imgInfo = premiumImages[i % premiumImages.length]
    // pick random template
    const templateIdx = Math.floor(Math.random() * stitchSlugs.length)
    const newTemplate = stitchSlugs[templateIdx]

    await supabase
      .from('pages')
      .update({
        featured_image: imgInfo,
        layout_template: newTemplate
      })
      .eq('id', item.id)
  }

  console.log(`Successfully randomized images and UI layouts for ${portfolios.length} portfolio items!`)
}

run()
