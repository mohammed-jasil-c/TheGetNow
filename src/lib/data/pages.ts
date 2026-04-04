export interface DynamicPageData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  gradientFrom: string;
  gradientTo: string;
  techIcons: { name: string; url: string }[];
  overview: string;
  features: { title: string; desc: string; icon: string }[];
  ctaText: string;
}

const defaultTechIcons = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

export const dynamicPages: DynamicPageData[] = [
  // SERVICES - CORE ENGINEERING
  {
    slug: 'web-development', category: 'services',
    title: 'Custom Web Platform Engineering',
    subtitle: 'High-performance React & Node.js stacks built for massive scale.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-blue-600/20', gradientTo: 'to-sky-600/20',
    overview: 'We build enterprise-grade web applications tailored for your unique workflow. Moving beyond templates, we engineer from the ground up for maximum performance.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Server-Side Rendering', desc: 'Unmatched SEO and initial load performance.', icon: 'fa-solid fa-server' },
      { title: 'Microservices', desc: 'Decoupled architecture for endless scalability.', icon: 'fa-solid fa-cubes' },
      { title: 'Real-time Data', desc: 'Socket integrations for live dashboards.', icon: 'fa-solid fa-bolt' },
    ],
    ctaText: 'Build Your Platform'
  },
  {
    slug: 'mobile-app-development', category: 'services',
    title: 'Native & Cross-Platform Mobile Apps',
    subtitle: 'Award-winning mobile experiences for iOS and Android built on Flutter and Swift.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-violet-600/20', gradientTo: 'to-purple-600/20',
    overview: 'Dominate the App Store with fluid, highly-responsive mobile architectures designed for maximum user engagement.',
    techIcons: [
      { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'Swift', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
      { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' }
    ],
    features: [
      { title: 'Native Performance', desc: 'Optimized rendering directly interacting with device hardware.', icon: 'fa-brands fa-apple' },
      { title: 'Offline First', desc: 'Robust sync engines for intermittent connectivity.', icon: 'fa-solid fa-wifi' },
      { title: 'App Store Optimization', desc: 'Built-in analytics for conversion tracking.', icon: 'fa-solid fa-chart-pie' },
    ],
    ctaText: 'Launch Your App'
  },
  {
    slug: 'saas-development', category: 'services',
    title: 'SaaS Platform Development',
    subtitle: 'Multi-tenant cloud architectures designed for explosive recurring revenue growth.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-cyan-600/20', gradientTo: 'to-blue-600/20',
    overview: 'We construct secure, scalable multi-tenant architectures that powers the next generation of B2B and B2C software products.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Multi-tenancy', desc: 'Data isolation and resource pooling logic.', icon: 'fa-solid fa-database' },
      { title: 'Subscription Billing', desc: 'Stripe integration and usage metering.', icon: 'fa-solid fa-credit-card' },
      { title: 'Audit Logging', desc: 'Enterprise-grade compliance mapping.', icon: 'fa-solid fa-list-check' },
    ],
    ctaText: 'Scale Your SaaS'
  },

  // SERVICES - EMERGING TECH
  {
    slug: 'ai-development', category: 'services',
    title: 'Agentic AI & Machine Learning',
    subtitle: 'Build autonomous AI agents that plan, execute, and optimize tasks independently.',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-fuchsia-600/20', gradientTo: 'to-pink-600/20',
    overview: 'Our AI engineers build proprietary large language models, enterprise computer vision pipelines, and intelligent predictive algorithms.',
    techIcons: [
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
    ],
    features: [
      { title: 'Generative AI', desc: 'Custom LLMs trained on your enterprise data.', icon: 'fa-solid fa-brain' },
      { title: 'Predictive Analytics', desc: 'Forecasting markets with 94% accuracy models.', icon: 'fa-solid fa-chart-line' },
      { title: 'Computer Vision', desc: 'Real-time object detection and spatial processing.', icon: 'fa-solid fa-eye' },
    ],
    ctaText: 'Start Your AI Project'
  },
  {
    slug: 'blockchain-development', category: 'services',
    title: 'Blockchain & Web3 Solutions',
    subtitle: 'Secure smart contracts, Layer 2 scaling, and decentralized application architecture.',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-amber-600/20', gradientTo: 'to-orange-600/20',
    overview: 'We engineer audited smart contracts and decentralized protocols that redefine transparency and security in digital transactions.',
    techIcons: [
       { name: 'Solidity', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg' },
       { name: 'Rust', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-plain.svg' }
    ],
    features: [
      { title: 'Smart Contracts', desc: 'Automated escrow and secure blockchain ledgers.', icon: 'fa-brands fa-ethereum' },
      { title: 'DeFi Protocols', desc: 'Liquidity pools and automated market makers.', icon: 'fa-solid fa-coins' },
      { title: 'NFT Marketplaces', desc: 'High-volume digital asset trading platforms.', icon: 'fa-solid fa-images' },
    ],
    ctaText: 'Build on Web3'
  },
  {
    slug: 'iot-solutions', category: 'services',
    title: 'IoT & Edge Computing',
    subtitle: 'Connected device ecosystems processing data with zero latency at the edge.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-emerald-600/20', gradientTo: 'to-teal-600/20',
    overview: 'Deploy resilient Internet of Things networks spanning thousands of devices with military-grade encryption and management.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Edge Processing', desc: 'Run compute algorithms directly on device.', icon: 'fa-solid fa-microchip' },
      { title: 'Digital Twins', desc: 'Virtual replicas of physical environments.', icon: 'fa-solid fa-vr-cardboard' },
      { title: 'Fleet Management', desc: 'Real-time telemetry and OTA firmware updates.', icon: 'fa-solid fa-satellite-dish' },
    ],
    ctaText: 'Connect Your Hardware'
  },

  // SERVICES - CLOUD
  {
    slug: 'cloud-computing', category: 'services',
    title: 'Cloud Architecture & Migration',
    subtitle: 'AWS, Azure, and Google Cloud infrastructure built for infinite scale and absolute resilience.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-sky-600/20', gradientTo: 'to-blue-600/20',
    overview: 'Modernize your entire IT infrastructure. We orchestrate zero-downtime migrations and architect serverless environments that slash operational costs.',
    techIcons: [
       { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
       { name: 'Azure', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
       { name: 'GCP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' }
    ],
    features: [
      { title: 'Serverless Functions', desc: 'Pay only for the exact milliseconds you compute.', icon: 'fa-solid fa-bolt' },
      { title: 'Data Lakes', desc: 'Petabyte-scale centralized data repositories.', icon: 'fa-solid fa-database' },
      { title: 'Disaster Recovery', desc: 'Multi-region automated failover systems.', icon: 'fa-solid fa-shield-virus' },
    ],
    ctaText: 'Migrate to Cloud'
  },

  // INDUSTRIES
  {
    slug: 'finance', category: 'industries',
    title: 'FinTech & Banking Solutions',
    subtitle: 'Bank-grade secure applications, trading platforms, and seamless digital wallets.',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-emerald-600/20', gradientTo: 'to-teal-600/20',
    overview: 'Developing PCI-DSS compliant financial technology that powers the future of banking, crypto exchanges, and algorithmic trading.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Smart Contracts', desc: 'Automated escrow and secure blockchain ledgers.', icon: 'fa-brands fa-ethereum' },
      { title: 'Fraud Detection', desc: 'AI models that halt anomalies instantly.', icon: 'fa-solid fa-shield-halved' },
      { title: 'High-Frequency', desc: 'Ultra-low latency trading matching engines.', icon: 'fa-solid fa-chart-line' },
    ],
    ctaText: 'Transform Your FinTech'
  },
  {
    slug: 'fitness', category: 'industries',
    title: 'Fitness & Wellness Platforms',
    subtitle: 'Connecting physical health with digital ecosystems providing immersive workout experiences.',
    heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-rose-600/20', gradientTo: 'to-red-600/20',
    overview: 'We build the platforms powering top fitness devices. From wearable integrations to live-streaming boutique workout classes.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Wearable Sync', desc: 'Apple Watch & Garmin real-time biometric ingestion.', icon: 'fa-solid fa-watch' },
      { title: 'VOD & Livestream', desc: 'Zero-latency global video delivery networks.', icon: 'fa-solid fa-video' },
      { title: 'Gamification', desc: 'Leaderboards, badges, and retention loops.', icon: 'fa-solid fa-trophy' },
    ],
    ctaText: 'Build Your Fitness App'
  },
  {
    slug: 'healthcare', category: 'industries',
    title: 'Healthcare & MedTech Software',
    subtitle: 'HIPAA-compliant platforms driving the future of telemedicine and patient care.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-sky-600/20', gradientTo: 'to-indigo-600/20',
    overview: 'Transforming clinical workflows with secure electronic health records (EHR), AI-assisted diagnostics, and virtual care platforms.',
    techIcons: defaultTechIcons,
    features: [
      { title: 'Telemedicine', desc: 'Secure, encrypted WebRTC video consults.', icon: 'fa-solid fa-stethoscope' },
      { title: 'HIPAA Compliance', desc: 'End-to-end encryption for patient data.', icon: 'fa-solid fa-lock' },
      { title: 'AI Diagnostics', desc: 'Computer vision for radiological analysis.', icon: 'fa-solid fa-microscope' },
    ],
    ctaText: 'Innovate Healthcare'
  }
];

// Fallback generator for unknown slugs so they still return a beautiful generic template instead of 404
const generateFallbackPage = (category: string, slug: string): DynamicPageData => {
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    slug,
    category,
    title: `${formattedTitle} Solutions`,
    subtitle: `Enterprise-grade software engineering tailored for the ${formattedTitle} sector.`,
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    gradientFrom: 'from-violet-600/20',
    gradientTo: 'to-blue-600/20',
    overview: `We deliver specialized technological transformation for ${formattedTitle}, combining industry expertise with bleeding-edge engineering capabilities to accelerate your market position.`,
    techIcons: defaultTechIcons,
    features: [
      { title: 'Custom Architecture', desc: 'Systems designed specifically for your operational needs.', icon: 'fa-solid fa-sitemap' },
      { title: 'Data Security', desc: 'Enterprise-grade encryption and compliance tools.', icon: 'fa-solid fa-shield-halved' },
      { title: 'Cloud Scaling', desc: 'Infrastructure that grows seamlessly with your user base.', icon: 'fa-solid fa-cloud' },
    ],
    ctaText: `Scale Your ${formattedTitle}`
  };
}

export function getPageData(category: string, slug: string): DynamicPageData {
  const page = dynamicPages.find(p => p.category === category && p.slug === slug);
  return page || generateFallbackPage(category, slug);
}
