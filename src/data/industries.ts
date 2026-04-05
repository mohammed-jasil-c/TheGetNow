export interface Industry {
  slug: string
  title: string
  subtitle: string
  icon: string
  image: string
  gradient: string
  accentColor: string
  stats: { label: string; value: string }[]
  useCases: { title: string; description: string }[]
  techStack: string[]
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'finance',
    title: 'FinTech & Banking',
    subtitle: 'Digital banking platforms, payment gateways, and regulatory compliance systems.',
    icon: 'faBuildingColumns',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    accentColor: '#10B981',
    stats: [
      { label: 'Transactions Processed', value: '$50B+' },
      { label: 'Banking Platform Users', value: '10M+' },
      { label: 'Compliance Frameworks', value: '15+' },
    ],
    useCases: [
      { title: 'Digital Banking', description: 'Full-stack neobanking platforms with KYC, payments, and lending.' },
      { title: 'Payment Processing', description: 'PCI-compliant payment gateways with multi-currency support.' },
      { title: 'Wealth Management', description: 'Robo-advisory platforms with portfolio optimization.' },
      { title: 'RegTech', description: 'Automated compliance, AML screening, and regulatory reporting.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Plaid', 'Stripe'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    subtitle: 'HIPAA-compliant telemedicine, EHR integration, and clinical decision support.',
    icon: 'faHeartPulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #06B6D4, #0E7490)',
    accentColor: '#06B6D4',
    stats: [
      { label: 'Patient Interactions', value: '5M+' },
      { label: 'Healthcare Providers', value: '50K+' },
      { label: 'Countries', value: '12' },
    ],
    useCases: [
      { title: 'Telemedicine', description: 'Video consultation with EHR integration and e-prescriptions.' },
      { title: 'Clinical Decision Support', description: 'AI-powered diagnostic assistance and treatment recommendations.' },
      { title: 'Patient Portals', description: 'Self-service platforms for appointments, records, and billing.' },
      { title: 'Medical Device IoT', description: 'Connected device ecosystems for remote patient monitoring.' },
    ],
    techStack: ['React', 'Flutter', 'Python', 'GCP', 'HL7 FHIR', 'WebRTC'],
  },
  {
    slug: 'retail',
    title: 'E-Commerce & Retail',
    subtitle: 'Headless commerce, recommendation engines, and omnichannel retail platforms.',
    icon: 'faCartShopping',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    accentColor: '#F59E0B',
    stats: [
      { label: 'Annual GMV', value: '$2B+' },
      { label: 'SKUs Managed', value: '10M+' },
      { label: 'Conversion Lift', value: '35%' },
    ],
    useCases: [
      { title: 'Headless Commerce', description: 'API-first storefronts with personalized shopping experiences.' },
      { title: 'Recommendation Engine', description: 'ML-powered product suggestions and search optimization.' },
      { title: 'Inventory Management', description: 'Real-time stock across warehouses and fulfillment centers.' },
      { title: 'Loyalty Programs', description: 'Points, tiers, and gamification for customer retention.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Algolia', 'Stripe'],
  },
  {
    slug: 'education',
    title: 'EdTech & eLearning',
    subtitle: 'Adaptive learning platforms, virtual classrooms, and assessment systems.',
    icon: 'faGraduationCap',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    accentColor: '#8B5CF6',
    stats: [
      { label: 'Active Students', value: '2M+' },
      { label: 'Universities', value: '500+' },
      { label: 'Completion Rate Lift', value: '42%' },
    ],
    useCases: [
      { title: 'Adaptive Learning', description: 'AI-personalized content paths based on learner performance.' },
      { title: 'Virtual Classrooms', description: 'Real-time video, whiteboard, and collaboration tools.' },
      { title: 'Assessment Engines', description: 'Automated grading with anti-cheating measures.' },
      { title: 'LMS Platforms', description: 'Course management with analytics and certification.' },
    ],
    techStack: ['React', 'React Native', 'Python', 'TensorFlow', 'AWS', 'WebRTC'],
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    subtitle: 'Fleet management, route optimization, and warehouse automation systems.',
    icon: 'faTruck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    accentColor: '#0EA5E9',
    stats: [
      { label: 'Vehicles Tracked', value: '25K+' },
      { label: 'Deliveries/day', value: '200K' },
      { label: 'Fuel Savings', value: '22%' },
    ],
    useCases: [
      { title: 'Fleet Management', description: 'Real-time GPS tracking with predictive maintenance.' },
      { title: 'Route Optimization', description: 'ML-powered multi-stop route planning.' },
      { title: 'Warehouse Automation', description: 'Pick, pack, and ship with robotics integration.' },
      { title: 'Last-Mile Delivery', description: 'Driver apps with proof-of-delivery and customer notifications.' },
    ],
    techStack: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'AWS IoT', 'Google Maps'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Tech',
    subtitle: 'Property management, virtual tours, and real estate marketplace platforms.',
    icon: 'faBuilding',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    accentColor: '#EC4899',
    stats: [
      { label: 'Properties Listed', value: '500K+' },
      { label: 'Virtual Tours', value: '100K+' },
      { label: 'Transaction Volume', value: '$10B+' },
    ],
    useCases: [
      { title: 'Property Marketplace', description: 'Search, filter, and listing platforms with map integration.' },
      { title: '3D Virtual Tours', description: 'WebXR-powered property walkthroughs.' },
      { title: 'Property Management', description: 'Tenant portals, maintenance tracking, and rent collection.' },
      { title: 'Investment Analytics', description: 'Market analysis with ROI projections and comparables.' },
    ],
    techStack: ['Next.js', 'Three.js', 'PostgreSQL', 'Mapbox', 'Stripe', 'AWS'],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(i => i.slug === slug)
}

export function getIndustryFallbackImage(index: number = 0): string {
  const fallbacks = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200\u0026auto=format\u0026fit=crop', // Healthcare
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200\u0026auto=format\u0026fit=crop', // Events
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200\u0026auto=format\u0026fit=crop', // Real Estate
    'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200\u0026auto=format\u0026fit=crop', // Travel
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200\u0026auto=format\u0026fit=crop', // Fitness
    'https://images.unsplash.com/photo-1454165833767-1229d444455b?w=1200\u0026auto=format\u0026fit=crop', // Finance
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200\u0026auto=format\u0026fit=crop', // Retail
    'https://images.unsplash.com/photo-1558441719-ffb4d452074a?w=1200\u0026auto=format\u0026fit=crop', // Logistics
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200\u0026auto=format\u0026fit=crop', // AI/Tech
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200\u0026auto=format\u0026fit=crop', // Electronics
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200\u0026auto=format\u0026fit=crop', // Workplace
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200\u0026auto=format\u0026fit=crop', // Analytics
    'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200\u0026auto=format\u0026fit=crop', // Startup
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200\u0026auto=format\u0026fit=crop', // Science
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200\u0026auto=format\u0026fit=crop', // Collaboration
    'https://images.unsplash.com/photo-1519389950473-acc756fdf206?w=1200\u0026auto=format\u0026fit=crop', // Digital Marketing
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200\u0026auto=format\u0026fit=crop', // Engineering
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200\u0026auto=format\u0026fit=crop', // Cybersecurity
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200\u0026auto=format\u0026fit=crop', // Modern Office
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200\u0026auto=format\u0026fit=crop', // Network
  ]
  return fallbacks[index % fallbacks.length]
}
