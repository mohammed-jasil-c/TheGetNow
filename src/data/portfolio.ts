export interface Project {
  slug: string
  title: string
  client: string
  industry: string
  tags: string[]
  image: string
  description: string
  challenge: string
  solution: string
  results: { label: string; value: string }[]
  techStack: string[]
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'finova-banking',
    title: 'FinoVa Banking Platform',
    client: 'FinoVa Financial',
    industry: 'FinTech',
    tags: ['Web App', 'AI', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    description: 'A next-generation digital banking platform serving 2M+ customers across Southeast Asia.',
    challenge: 'The client needed to replace a legacy COBOL-based core banking system with a modern, API-first platform while maintaining zero downtime.',
    solution: 'We designed a microservices architecture on AWS with event sourcing, CQRS, and real-time fraud detection powered by custom ML models.',
    results: [
      { label: 'Transaction Speed', value: '10x faster' },
      { label: 'Users Onboarded', value: '2M+' },
      { label: 'Downtime', value: '0 hours' },
      { label: 'Cost Reduction', value: '45%' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes', 'TensorFlow'],
    liveUrl: '#',
  },
  {
    slug: 'medisync-health',
    title: 'MediSync Telemedicine',
    client: 'MediSync Health',
    industry: 'Healthcare',
    tags: ['Mobile App', 'Web App', 'IoT'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description: 'HIPAA-compliant telemedicine platform connecting 50K+ doctors with patients across 12 countries.',
    challenge: 'Building a real-time video consultation platform with EHR integration, e-prescriptions, and multi-language support while maintaining HIPAA compliance.',
    solution: 'Cross-platform Flutter app with WebRTC video, HL7 FHIR integration, and end-to-end encryption. Backend on GCP with auto-scaling.',
    results: [
      { label: 'Active Doctors', value: '50K+' },
      { label: 'Consultations/month', value: '500K' },
      { label: 'Countries', value: '12' },
      { label: 'App Rating', value: '4.8★' },
    ],
    techStack: ['Flutter', 'Node.js', 'WebRTC', 'GCP', 'Firebase', 'HL7 FHIR'],
  },
  {
    slug: 'defichain-protocol',
    title: 'DefiChain DeFi Protocol',
    client: 'DefiChain Labs',
    industry: 'Web3',
    tags: ['Blockchain', 'DeFi', 'Smart Contracts'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    description: 'Decentralized lending protocol with $200M+ TVL across Ethereum and Polygon networks.',
    challenge: 'Creating a gas-optimized lending protocol with cross-chain liquidity and governance while passing rigorous security audits.',
    solution: 'Custom Solidity smart contracts with an innovative interest rate model, flash loan protection, and multi-sig governance.',
    results: [
      { label: 'Total Value Locked', value: '$200M+' },
      { label: 'Unique Wallets', value: '85K' },
      { label: 'Security Audits', value: '3 passed' },
      { label: 'Gas Savings', value: '60%' },
    ],
    techStack: ['Solidity', 'Hardhat', 'React', 'The Graph', 'IPFS', 'Chainlink'],
  },
  {
    slug: 'retailx-commerce',
    title: 'RetailX E-Commerce Engine',
    client: 'RetailX Global',
    industry: 'E-Commerce',
    tags: ['Web App', 'AI', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    description: 'AI-powered e-commerce platform processing $500M+ in annual GMV with predictive recommendations.',
    challenge: 'Migrating from a monolithic Magento setup to a headless commerce architecture while handling 50K concurrent users during flash sales.',
    solution: 'Next.js storefront with headless CMS, custom recommendation engine using collaborative filtering, and auto-scaling infrastructure.',
    results: [
      { label: 'Annual GMV', value: '$500M+' },
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Page Load Speed', value: '1.2s' },
      { label: 'Peak Concurrent', value: '50K' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Algolia'],
    liveUrl: '#',
  },
  {
    slug: 'eduverse-platform',
    title: 'EduVerse Learning Platform',
    client: 'EduVerse Inc.',
    industry: 'EdTech',
    tags: ['Web App', 'Mobile', 'AI'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
    description: 'Adaptive learning platform used by 500+ universities and 2M students worldwide.',
    challenge: 'Building an AI-driven adaptive learning engine that personalizes content delivery based on student performance patterns.',
    solution: 'React web app and React Native mobile app with real-time collaboration, AI-powered content recommendations, and automated assessment.',
    results: [
      { label: 'Universities', value: '500+' },
      { label: 'Active Students', value: '2M' },
      { label: 'Completion Rate', value: '+42%' },
      { label: 'Engagement', value: '+67%' },
    ],
    techStack: ['React', 'React Native', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'logismart-fleet',
    title: 'LogiSmart Fleet Management',
    client: 'LogiSmart Corp.',
    industry: 'Logistics',
    tags: ['IoT', 'Mobile', 'AI'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    description: 'IoT-powered fleet management system tracking 25K+ vehicles across 8 countries in real-time.',
    challenge: 'Designing an IoT platform that processes 10M+ telemetry events per day with real-time route optimization and predictive maintenance.',
    solution: 'Edge computing with Raspberry Pi gateways, MQTT messaging, time-series database, and ML-based route optimization.',
    results: [
      { label: 'Vehicles Tracked', value: '25K+' },
      { label: 'Fuel Savings', value: '22%' },
      { label: 'Delivery Speed', value: '+18%' },
      { label: 'Downtime Reduction', value: '40%' },
    ],
    techStack: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'AWS IoT', 'TensorFlow'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getProjectsByIndustry(industry: string): Project[] {
  return PROJECTS.filter(p => p.industry.toLowerCase() === industry.toLowerCase())
}

export function getPortfolioFallbackImage(index: number = 0): string {
  const fallbacks = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200\u0026auto=format\u0026fit=crop', // Fintech
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200\u0026auto=format\u0026fit=crop', // Health
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200\u0026auto=format\u0026fit=crop', // Blockchain
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200\u0026auto=format\u0026fit=crop', // E-Commerce
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200\u0026auto=format\u0026fit=crop', // EdTech
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200\u0026auto=format\u0026fit=crop', // Logistics
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200\u0026auto=format\u0026fit=crop', // Analytics
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200\u0026auto=format\u0026fit=crop', // Workplace
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200\u0026auto=format\u0026fit=crop', // Corporate
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200\u0026auto=format\u0026fit=crop', // Office
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200\u0026auto=format\u0026fit=crop', // Cyber
    'https://images.unsplash.com/photo-1519389950473-acc756fdf206?w=1200\u0026auto=format\u0026fit=crop', // Digital Team
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200\u0026auto=format\u0026fit=crop', // Collab
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200\u0026auto=format\u0026fit=crop', // Engineering
    'https://images.unsplash.com/photo-1504868584819-f8e90526354c?w=1200\u0026auto=format\u0026fit=crop', // Dashboard
    'https://images.unsplash.com/photo-1454165833767-1229d444455b?w=1200\u0026auto=format\u0026fit=crop', // Management
    'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=1200\u0026auto=format\u0026fit=crop', // Automation
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200\u0026auto=format\u0026fit=crop', // Electronics
    'https://images.unsplash.com/photo-1558441719-ffb4d452074a?w=1200\u0026auto=format\u0026fit=crop', // Supply Chain
    'https://images.unsplash.com/photo-1558494949-ef0109121c0b?w=1200\u0026auto=format\u0026fit=crop', // Infrastructure
  ]
  return fallbacks[index % fallbacks.length]
}
