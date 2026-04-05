import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing config')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const stitchSlugs = [
  'industries-we-serve',
  'cab-booking-app-detail',
  'stock-trading-app-development',
  'pharmacy-app-development',
  'technology-ai-hero-section',
  'travel-app-development',
  'bus-booking-app-detail',
  'fitness-app-detail',
  'music-streaming-app-detail',
  'healthcare-app-detail',
  'fuel-delivery-app-detail',
  'real-estate-app-development',
  'courier-app-detail',
  'grocery-delivery-app-detail',
  'meditation-app-detail',
  'bike-taxi-app-detail',
  'healthcare-app-development',
  'scavenger-hunt-app-development',
  'home-services-app-detail',
  'fantasy-football-app-detail',
  'food-delivery-app-detail',
  'ev-app-detail',
  'wearable-app-development',
  'dating-app-development',
  'event-booking-app-detail',
  'e-scooter-sharing-app',
  'e-scooter-app-detail'
]

async function run() {
  const pages = stitchSlugs.map(slug => ({
    slug: slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: `Custom Stitch Template for ${slug}`,
    description: `High-fidelity custom Next.js layout for ${slug}`,
    category: 'services', // put them in services for easy routing
    layout_template: slug,
    hero_gradient: 'linear-gradient(135deg, #0057FF, #00D4FF)',
    accent_color: '#0057FF',
    icon: 'Star',
    featured_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    published: true,
    meta_title: `${slug} | TheGetNow`,
    meta_description: `Custom layout for ${slug}`,
    content_json: {}
  }))

  const { data, error } = await supabase
    .from('pages')
    .upsert(pages, { onConflict: 'category,slug' })

  if (error) {
    console.error('Error inserting stitch pages:', error)
  } else {
    console.log(`Successfully mapped and inserted ${stitchSlugs.length} Stitch templates to the database!`)
  }
}

run()
