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
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop', // Fintech Dashboard
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop', // Healthcare Telemedicine
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop', // Web3/Blockchain
    'https://images.unsplash.com/photo-1512428559083-a401c33c46a6?w=1200&auto=format&fit=crop', // Mobile App Modern
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop', // EdTech University
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop', // Smart Factory/IoT
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop', // Data Analytics
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop', // Cybersecurity/Code
    'https://images.unsplash.com/photo-1451187530220-4e2a16823ca1?w=1200&auto=format&fit=crop', // Network/Cloud
    'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&auto=format&fit=crop', // Modern App UI
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop', // Hardware/IoT
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop', // AI/Robotics
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop', // Tech Minimalist
    'https://images.unsplash.com/photo-1519389950473-acc756fdf206?w=1200&auto=format&fit=crop', // Digital Team/Collaboration
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop', // Cyber Protection
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop', // Business Platform
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop', // Office Meeting
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop', // Students/Education
    'https://images.unsplash.com/photo-1558448531-9280cd5779a9?w=1200&auto=format&fit=crop', // Solar/Green Tech
    'https://images.unsplash.com/photo-1558403194-611308249627?w=1200&auto=format&fit=crop', // Industrial Design
    'https://images.unsplash.com/photo-1523474253046-2cd3bbed607a?w=1200&auto=format&fit=crop', // Logistics Center
    'https://images.unsplash.com/photo-1504868584819-f8e90526354c?w=1200&auto=format&fit=crop', // Global Dashboard
    'https://images.unsplash.com/photo-1454165833767-1229d444455b?w=1200&auto=format&fit=crop', // Corporate Strategy
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop', // Remote Work
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop', // Agency Team
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop', // Developer Desk
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop', // IT Professionals
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop', // Modern Office UI
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop', // Digital Education
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop', // Statistics/Growth
  ]
  return fallbacks[index % fallbacks.length]
}
