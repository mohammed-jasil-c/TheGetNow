import { getPageFromDB, type FullDBPage } from '../supabase-pages';

export type SectionType = 
  | 'HeroCinematic' 
  | 'HeroIsometric' 
  | 'HeroCaseStudy'
  | 'HeroLegacy' 
  | 'FeatureBento' 
  | 'FeatureZigZag' 
  | 'FeatureLegacy'
  | 'TechGridScroll'
  | 'ResultGrid'
  | 'CTA';

export interface PageSection {
  id: string;
  type: SectionType;
  data: any;
}

export interface DynamicPageData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  sections: PageSection[];
}

const defaultTechIcons = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' }
];

// High-fidelity Stitch Designs (Hardcoded Premium Routes)
export const premiumStitchPages: DynamicPageData[] = [
  { slug: 'industries-we-serve', category: 'industries', title: 'Industries We Serve', subtitle: 'Enterprise-grade digital solutions across 40+ sectors.', sections: [] },
  { slug: 'cab-booking-app-detail', category: 'services', title: 'Cab Booking App Solutions', subtitle: 'Real-time mobility platforms with GPS and secure payments.', sections: [] },
  { slug: 'stock-trading-app-development', category: 'industries', title: 'Stock Trading Platforms', subtitle: 'High-frequency trading engines with institutional-grade security.', sections: [] },
  { slug: 'pharmacy-app-development', category: 'industries', title: 'Pharmacy & E-Health Solutions', subtitle: 'HIPAA-compliant pharmaceutical delivery and management.', sections: [] },
  { slug: 'technology-ai-hero-section', category: 'services', title: 'AI & Machine Learning Hero', subtitle: 'The foundation of next-gen digital transformation.', sections: [] },
  { slug: 'travel-app-development', category: 'industries', title: 'Travel & Hospitality Apps', subtitle: 'Global booking engines with immersive user experiences.', sections: [] },
  { slug: 'bus-booking-app-detail', category: 'services', title: 'Bus Booking Ecosystems', subtitle: 'Centralized fleet management and passenger booking.', sections: [] },
  { slug: 'fitness-app-detail', category: 'services', title: 'Fitness & Wellness Platforms', subtitle: 'Interactive health tracking and subscription management.', sections: [] },
  { slug: 'music-streaming-app-detail', category: 'services', title: 'Music Streaming Solutions', subtitle: 'High-fidelity audio distribution and DRM management.', sections: [] },
  { slug: 'healthcare-app-detail', category: 'services', title: 'Healthcare Patient Portals', subtitle: 'Streamlined patient-doctor communication and EHR integration.', sections: [] },
  { slug: 'fuel-delivery-app-detail', category: 'services', title: 'Fuel Delivery Platforms', subtitle: 'On-demand energy distribution with real-time tracking.', sections: [] },
  { slug: 'real-estate-app-development', category: 'industries', title: 'Real Estate Ecosystems', subtitle: 'Virtual tours, listings, and agent management platforms.', sections: [] },
  { slug: 'courier-app-detail', category: 'services', title: 'Courier & Logistics Management', subtitle: 'Last-mile delivery engines with intelligent routing.', sections: [] },
  { slug: 'grocery-delivery-app-detail', category: 'services', title: 'Grocery & E-Commerce Delivery', subtitle: 'Scale your retail business with inventory-synced apps.', sections: [] },
  { slug: 'meditation-app-detail', category: 'services', title: 'Meditation & Mindfulness Apps', subtitle: 'Serene digital experiences for mental wellness.', sections: [] },
  { slug: 'bike-taxi-app-detail', category: 'services', title: 'Bike Taxi Solution', subtitle: 'Micro-mobility platforms for urban environments.', sections: [] },
  { slug: 'healthcare-app-development', category: 'industries', title: 'Healthcare Digital Transformation', subtitle: 'Comprehensive medical software and telemedicine apps.', sections: [] },
  { slug: 'scavenger-hunt-app-development', category: 'industries', title: 'Interactive Gaming Platforms', subtitle: 'AR-powered scavenger hunts and gamified experiences.', sections: [] },
  { slug: 'home-services-app-detail', category: 'services', title: 'One-Demand Home Services', subtitle: 'Booking engines for maintenance, cleaning, and more.', sections: [] },
  { slug: 'fantasy-football-app-detail', category: 'services', title: 'Fantasy Sports Ecosystems', subtitle: 'Real-time stats and competitive league management.', sections: [] },
  { slug: 'food-delivery-app-detail', category: 'services', title: 'Food Delivery Solutions', subtitle: 'Restaurant-to-door logistics with real-time tracking.', sections: [] },
  { slug: 'ev-app-detail', category: 'services', title: 'EV Charging Networks', subtitle: 'Locator and payment systems for electric vehicle charging.', sections: [] },
  { slug: 'wearable-app-development', category: 'industries', title: 'Wearable Tech Development', subtitle: 'IoT-synced apps for Apple Watch, Garmin, and more.', sections: [] },
  { slug: 'dating-app-development', category: 'industries', title: 'Premium Dating Solutions', subtitle: 'Safe, algorithm-driven matchmaking experiences.', sections: [] },
  { slug: 'event-booking-app-detail', category: 'services', title: 'Event Ticketing & Management', subtitle: 'Seamless booking for concerts, sports, and conferences.', sections: [] },
  { slug: 'e-scooter-sharing-app', category: 'services', title: 'E-Scooter Sharing Ecosystem', subtitle: 'Dockless mobility platforms with fleet tracking.', sections: [] },
  { slug: 'e-scooter-app-detail', category: 'services', title: 'E-Scooter Rental Management', subtitle: 'User-centric rental apps with integrated payments.', sections: [] },
];

export const dynamicPages: DynamicPageData[] = [
  ...premiumStitchPages,
  // SERVICES - CORE ENGINEERING
  {
    slug: 'web-development', category: 'services',
    title: 'Custom Web Platform Engineering',
    subtitle: 'High-performance React & Node.js stacks built for massive scale.',
    sections: [
      {
        id: 'hero',
        type: 'HeroCinematic',
        data: {
          title: 'Custom Web Platform Engineering',
          subtitle: 'High-performance React & Node.js stacks built for massive scale.',
          heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
          gradientFrom: 'from-blue-600/20', gradientTo: 'to-sky-600/20',
          techIcons: defaultTechIcons,
          ctaText: 'Build Your Platform'
        }
      },
      {
        id: 'tech',
        type: 'TechGridScroll',
        data: {
          icons: defaultTechIcons
        }
      },
      {
        id: 'features',
        type: 'FeatureBento',
        data: {
          overview: 'We build enterprise-grade web applications tailored for your unique workflow. Moving beyond templates, we engineer from the ground up for maximum performance.',
          features: [
            { title: 'Server-Side Rendering', desc: 'Unmatched SEO and initial load performance.', icon: 'fa-solid fa-server', colSpan: 2 },
            { title: 'Microservices', desc: 'Decoupled architecture for endless scalability.', icon: 'fa-solid fa-cubes', colSpan: 1 },
            { title: 'Real-time Data', desc: 'Socket integrations for live dashboards.', icon: 'fa-solid fa-bolt', colSpan: 3 },
          ]
        }
      }
    ]
  },
  {
    slug: 'mobile-app-development', category: 'services',
    title: 'Native & Cross-Platform Mobile Apps',
    subtitle: 'Award-winning mobile experiences for iOS and Android built on Flutter and Swift.',
    sections: [
      {
        id: 'hero',
        type: 'HeroIsometric',
        data: {
          title: 'Native & Cross-Platform Mobile Apps',
          subtitle: 'Award-winning mobile experiences for iOS and Android built on Flutter and Swift.',
          heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920&auto=format&fit=crop',
          gradientFrom: 'from-violet-600/20', gradientTo: 'to-purple-600/20',
          techIcons: [
            { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
            { name: 'Swift', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
            { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' }
          ],
          ctaText: 'Launch Your App'
        }
      },
      {
        id: 'features',
        type: 'FeatureZigZag',
        data: {
          overview: 'Dominate the App Store with fluid, highly-responsive mobile architectures designed for maximum user engagement.',
          features: [
            { title: 'Native Performance', desc: 'Optimized rendering directly interacting with device hardware.', icon: 'fa-brands fa-apple', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Offline First', desc: 'Robust sync engines for intermittent connectivity.', icon: 'fa-solid fa-wifi', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop' },
          ]
        }
      }
    ]
  },
];

// Simple hash map generator logic to ensure that a given slug ALWAYS returns the same page schema
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Mapper function to convert Supabase DB Page to DynamicPageData
function mapDBPageToDynamicPageData(dbPage: FullDBPage): DynamicPageData {
  const sections: PageSection[] = [];
  
  // HERO SECTION
  let heroType: SectionType = dbPage.layout_template === 'cinematic' ? 'HeroCinematic' : 'HeroIsometric';
  if (dbPage.layout_template === 'case-study') heroType = 'HeroCaseStudy';

  sections.push({
    id: 'hero',
    type: heroType,
    data: {
      title: dbPage.title,
      subtitle: dbPage.subtitle,
      heroImage: dbPage.featured_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
      gradientFrom: dbPage.hero_gradient.split(' ')[0], 
      gradientTo: dbPage.hero_gradient.split(' ')[1],
      techIcons: defaultTechIcons,
      ctaText: 'View Case Study',
      result: dbPage.content_json?.result || ''
    }
  });

  // RESULT GRID (for case studies)
  if (dbPage.layout_template === 'case-study' && dbPage.stats.length > 0) {
    sections.push({
      id: 'results',
      type: 'ResultGrid',
      data: {
        stats: dbPage.stats.map(s => ({
          label: s.label,
          value: s.value,
          suffix: s.suffix
        }))
      }
    });
  }

  // FEATURES SECTION (if any)
  if (dbPage.features.length > 0) {
    sections.push({
      id: 'features',
      type: 'FeatureBento',
      data: {
        overview: dbPage.description || dbPage.subtitle,
        features: dbPage.features.map(f => ({
          title: f.title,
          desc: f.description || '',
          icon: f.icon || 'fa-solid fa-bolt',
          colSpan: 1
        }))
      }
    });
  }

  // CTA SECTION
  sections.push({
    id: 'cta',
    type: 'CTA',
    data: {}
  });

  return {
    slug: dbPage.slug,
    category: dbPage.category,
    title: dbPage.title,
    subtitle: dbPage.subtitle,
    sections
  };
}

// Fallback generator for 100+ slugs
const generateFallbackPage = (category: string, slug: string): DynamicPageData => {
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const hash = hashString(slug);
  
  // Decide layout type randomly based on fixed hash
  const isCinematic = hash % 2 === 0;
  // Feature type
  const isBento = hash % 3 !== 0;

  const bgImages = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop', // Space/Tech
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop', // Security
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop', // Finance
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop', // Hardware
    'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=1920&auto=format&fit=crop', // Crypto
  ];
  
  const gradients = [
    { from: 'from-blue-600/20', to: 'to-sky-600/20' },
    { from: 'from-violet-600/20', to: 'to-purple-600/20' },
    { from: 'from-cyan-600/20', to: 'to-blue-600/20' },
    { from: 'from-fuchsia-600/20', to: 'to-pink-600/20' },
    { from: 'from-emerald-600/20', to: 'to-teal-600/20' },
  ];

  let heroTitle = `${formattedTitle} Solutions`;
  let heroSubtitle = `Enterprise-grade software engineering tailored for the ${formattedTitle} sector. We combine industry expertise with bleeding-edge capabilities.`;
  let ctaText = `Scale Your ${formattedTitle}`;

  if (category === 'company') {
    heroTitle = formattedTitle;
    heroSubtitle = `Learn more about our ${formattedTitle} and how TheGetNow is driving digital transformation for enterprise clients worldwide.`;
    ctaText = `Contact Us Today`;
  } else if (category === 'resources') {
    heroTitle = `${formattedTitle}`;
    heroSubtitle = `Explore our expert ${formattedTitle} carefully curated for technology leaders and enterprise innovators.`;
    ctaText = `Access ${formattedTitle}`;
  }

  const imgChoice = bgImages[hash % bgImages.length];
  const colorChoice = gradients[hash % gradients.length];
  
  const featuresList = [
    { title: 'Custom Architecture', desc: 'Systems designed specifically for your operational needs.', icon: 'fa-solid fa-sitemap', colSpan: 2 },
    { title: 'Data Security', desc: 'Enterprise-grade encryption and compliance tools.', icon: 'fa-solid fa-shield-halved', colSpan: 1 },
    { title: 'Cloud Scaling', desc: 'Infrastructure that grows seamlessly with your user base.', icon: 'fa-solid fa-cloud', colSpan: 1 },
    { title: 'AI Integration', desc: 'Automated predictive modeling built directly into the platform.', icon: 'fa-solid fa-brain', colSpan: 2 },
  ];
  
  // Scramble the features uniquely for the layout
  const featuresForPage = [...featuresList].sort(() => 0.5 - ((hash % 100) / 100)).slice(0, isBento ? 3 : 2);

  const sections: PageSection[] = [];
  
  // HERO SECTION
  sections.push({
    id: 'hero',
    type: isCinematic ? 'HeroCinematic' : 'HeroIsometric',
    data: {
      title: heroTitle,
      subtitle: heroSubtitle,
      heroImage: imgChoice,
      gradientFrom: colorChoice.from,
      gradientTo: colorChoice.to,
      techIcons: defaultTechIcons,
      ctaText: ctaText
    }
  });
  
  // TECH TICKER (optional based on hash)
  if (hash % 4 !== 0) {
    sections.push({
      id: 'tech',
      type: 'TechGridScroll',
      data: { icons: defaultTechIcons }
    });
  }

  // FEATURES
  sections.push({
    id: 'features',
    type: isBento ? 'FeatureBento' : 'FeatureZigZag',
    data: {
      overview: `We deliver specialized technological transformation for ${formattedTitle}, completely shifting the velocity at which your enterprise functions.`,
      features: featuresForPage.map(f => ({
        ...f,
        image: bgImages[(hash + f.title.length) % bgImages.length] // Add images for zigzag
      }))
    }
  });
  
  // CTA
  sections.push({
    id: 'cta',
    type: 'CTA',
    data: {}
  });

  return {
    slug,
    category,
    title: heroTitle,
    subtitle: heroSubtitle,
    sections
  };
};

export async function getPageData(category: string, slug: string): Promise<DynamicPageData> {
  // 1. First, check static hardcoded pages (prioritize for performance/overrides)
  const page = dynamicPages.find(p => p.category === category && p.slug === slug);
  if (page) return page;

  // 2. Try Supabase for live dynamic data
  try {
    const dbPage = await getPageFromDB(category, slug);
    if (dbPage) {
      return mapDBPageToDynamicPageData(dbPage);
    }
  } catch (err) {
    console.error(`Supabase fetch failed for ${category}/${slug}:`, err);
  }

  // 3. Last resort: deterministic fallback generator (ensure NO 404s for 1000+ routes)
  return generateFallbackPage(category, slug);
}
