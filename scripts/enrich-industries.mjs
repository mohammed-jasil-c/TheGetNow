import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Service Role Key in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare \u0026 MedTech',
    subtitle: 'HIPAA-compliant telemedicine, EHR integration, and clinical decision support.',
    description: 'We build secure, scalable healthcare solutions that connect patients with providers and streamline clinical workflows.',
    layout_template: 'healthcare-app-detail',
    accent_color: '#06B6D4',
    stats: [
      { label: 'Patient Interactions', value: '5M+' },
      { label: 'Healthcare Providers', value: '50K+' },
      { label: 'Compliance', value: 'HIPAA/GDPR' }
    ],
    features: [
      { title: 'Telemedicine Platforms', description: 'Real-time video consultation with integrated health records.' },
      { title: 'EHR Systems', description: 'Centralized electronic health records with secure access control.' },
      { title: 'AI Diagnostics', description: 'Machine learning models for medical image analysis and diagnosis.' }
    ]
  },
  {
    slug: 'event-management',
    title: 'Event Management Solutions',
    subtitle: 'Digital Transformation for global events, conferences, and festivals.',
    description: 'Empowering event organizers with seamless booking, attendee management, and real-time engagement tools.',
    layout_template: 'event-booking-app-detail',
    accent_color: '#8B5CF6',
    stats: [
      { label: 'Tickets Sold', value: '10M+' },
      { label: 'Global Events', value: '25K+' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    features: [
      { title: 'Seamless Booking', description: 'One-click registration and ticket purchasing with secure payments.' },
      { title: 'Live Engagement', description: 'Interactive polls, Q\u0026A, and networking during live events.' },
      { title: 'Real-time Analytics', description: 'Deep insights into attendee behavior and event performance.' }
    ]
  },
  {
    slug: 'real-estate',
    title: 'Real Estate \u0026 PropTech',
    subtitle: 'Property management, virtual tours, and real estate marketplaces.',
    description: 'Modernizing the real estate industry with immersive virtual experiences and streamlined transaction management.',
    layout_template: 'real-estate-app-development',
    accent_color: '#EC4899',
    stats: [
      { label: 'Properties Managed', value: '1M+' },
      { label: 'Virtual Tours', value: '500K+' },
      { label: 'Transaction Value', value: '$25B+' }
    ],
    features: [
      { title: '3D Virtual Tours', description: 'Immersive property walkthroughs using Matterport and WebGL.' },
      { title: 'Smart Contracts', description: 'Secure, automated lease agreements and transaction management.' },
      { title: 'AI Valuations', description: 'Predictive market analysis and automated property valuations.' }
    ]
  },
  {
    slug: 'travel',
    title: 'Travel \u0026 Hospitality',
    subtitle: 'Smart booking engines, itinerary management, and guest experiences.',
    description: 'Crafting personalized travel experiences through advanced recommendation engines and seamless booking ecosystems.',
    layout_template: 'travel-app-development',
    accent_color: '#F59E0B',
    stats: [
      { label: 'Bookings/Day', value: '100K+' },
      { label: 'Destinations', value: '150+' },
      { label: 'Customer Savings', value: '25%' }
    ],
    features: [
      { title: 'Dynamic Pricing', description: 'AI-driven pricing models that optimize for demand and availability.' },
      { title: 'Personalized Itineraries', description: 'Smart suggestions based on user preferences and past behavior.' },
      { title: 'Contactless Check-in', description: 'Mobile-first guest experiences for hotels and vacation rentals.' }
    ]
  },
  {
    slug: 'fitness',
    title: 'Fitness \u0026 Wellness',
    subtitle: 'On-demand training, activity tracking, and community platforms.',
    description: 'Connecting fitness enthusiasts with world-class trainers and data-driven wellness insights.',
    layout_template: 'fitness-app-detail',
    accent_color: '#10B981',
    stats: [
      { label: 'Active Members', value: '2M+' },
      { label: 'Workouts Logged', value: '50M+' },
      { label: 'Trainer Network', value: '10K+' }
    ],
    features: [
      { title: 'Live Classes', description: 'Interactive, real-time training sessions with global instructors.' },
      { title: 'Wearable Integration', description: 'Seamless sync with Apple Watch, Garmin, and Fitbit devices.' },
      { title: 'AI Coaching', description: 'Personalized workout plans that adapt to your performance.' }
    ]
  },
  {
    slug: 'finance',
    title: 'FinTech \u0026 Banking',
    subtitle: 'Digital banking, investment platforms, and secure payment rails.',
    description: 'Building the future of finance with PCI-compliant architectures and high-frequency trading systems.',
    layout_template: 'stock-trading-app-development',
    accent_color: '#0057FF',
    stats: [
      { label: 'AUM Managed', value: '$50B+' },
      { label: 'Daily Transactions', value: '10M+' },
      { label: 'Latency', value: '\u003c5ms' }
    ],
    features: [
      { title: 'Algo-Trading', description: 'High-speed execution engines for complex financial strategies.' },
      { title: 'Mobile Banking', description: 'Feature-rich neobanking platforms with instant transfers.' },
      { title: 'Crypto Solutions', description: 'Secure digital asset management and blockchain integrations.' }
    ]
  },
  {
    slug: 'retail',
    title: 'Retail \u0026 E-Commerce',
    subtitle: 'Omnichannel commerce, headless platforms, and AI search.',
    description: 'Scaling global retail brands with lightning-fast storefronts and personalized shopping experiences.',
    layout_template: 'grocery-delivery-app-detail',
    accent_color: '#f97316',
    stats: [
      { label: 'Annual GMV', value: '$5B+' },
      { label: 'Conversion Lift', value: '35%' },
      { label: 'Uptime', value: '99.99%' }
    ],
    features: [
      { title: 'Headless Commerce', description: 'Decoupled frontend for maximum performance and flexibility.' },
      { title: 'Visual Search', description: 'AI-powered image recognition for seamless product discovery.' },
      { title: 'Inventory Sync', description: 'Real-time stock management across all sales channels.' }
    ]
  }
];

async function enrich() {
  console.log('--- Enriching Industry Data ---');

  for (const ind of industries) {
    console.log(`Processing: ${ind.title}...`);

    // 1. Upsert the main page record
    const { data: pageResult, error: pageError } = await supabase
      .from('pages')
      .upsert({
        slug: ind.slug,
        category: 'industries',
        title: ind.title,
        subtitle: ind.subtitle,
        description: ind.description,
        layout_template: ind.layout_template,
        accent_color: ind.accent_color,
        published: true
      }, { onConflict: 'category,slug' })
      .select()
      .single();

    if (pageError || !pageResult) {
      console.error(`Error updating industry ${ind.slug}:`, pageError);
      continue;
    }

    // 2. Clear old stats/features to avoid duplicates
    await supabase.from('page_stats').delete().eq('page_id', pageResult.id);
    await supabase.from('page_features').delete().eq('page_id', pageResult.id);

    // 3. Insert specific stats
    if (ind.stats) {
      const { error: statError } = await supabase.from('page_stats').insert(
        ind.stats.map((s, i) => ({
          page_id: pageResult.id,
          label: s.label,
          value: s.value,
          order_index: i
        }))
      );
      if (statError) console.error(`Error inserting stats for ${ind.slug}:`, statError);
    }

    // 4. Insert specific features (Use Cases)
    if (ind.features) {
      const { error: featError } = await supabase.from('page_features').insert(
        ind.features.map((f, i) => ({
          page_id: pageResult.id,
          title: f.title,
          description: f.description,
          order_index: i
        }))
      );
      if (featError) console.error(`Error inserting features for ${ind.slug}:`, featError);
    }

    console.log(`Successfully enriched: ${ind.slug}`);
  }

  console.log('--- Industry Enrichment Complete! ---');
}

enrich();
