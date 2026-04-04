export interface IndustryFeature {
  title: string;
  desc: string;
  icon: string;
}

export interface IndustryStep {
  num: number;
  title: string;
  desc: string;
}

export interface IndustryContent {
  slug: string;
  theme: 'tech' | 'lifestyle' | 'enterprise'; // Determines the GSAP Component Layout
  heroSub: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  featuresTitle: string;
  featuresDesc: string;
  features: IndustryFeature[];
  stepsTitle: string;
  stepsDesc: string;
  steps: IndustryStep[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  testimonialImage: string;
  ctaTitle: string;
  ctaDesc: string;
}

// Store specifically crafted industry pages derived from Stitch Designs
export const specificIndustries: Record<string, IndustryContent> = {
  'electric-vehicle': {
    slug: 'electric-vehicle',
    theme: 'tech',
    heroSub: 'E-Mobility Intelligence',
    heroTitle: 'The Architecture of Sustainable Motion',
    heroDesc: 'Alexandria curates high-performance digital ecosystems for the next generation of electric vehicles, merging aesthetic precision with logistical excellence.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYHtxpvLgfVozQGY2jGaNhUx0FOrqbluJCGXr65zQ4hawOs2WXkQwgBHpvD9S44_JT0vRpnuHUqavgamzEBHJX4_LEC1zXnuJM-jazqjtVhWQ2PhCGSR3pJ-a-9XsroawbeQxEvnc04REw8B7Dkq84AUFsY2_sF6KEsC-HYb3rR3Oh9hholem-YG88DbTK5_aSFAvee0AWRMogcNU34H-a4uWoWqcbCMYkiOE2OxgGM8brOCAoKYhZHJBMncjTJTTsydQZSRbHbNet',
    featuresTitle: 'Uncompromising Utility for a Seamless Grid',
    featuresDesc: 'Every feature is designed to reduce friction between the driver, the vehicle, and the global energy network.',
    features: [
      { title: 'Smart Charge Scheduling', desc: 'Dynamic algorithms that optimize charging windows based on grid load.', icon: 'schedule' },
      { title: 'Live Charging Point Map', desc: 'Real-time telemetry from global charging networks with predictive availability.', icon: 'map' },
      { title: 'Battery Health Analytics', desc: 'Deep-dive diagnostics into cell degradation and thermal efficiency.', icon: 'analytics' },
      { title: 'Fleet Management Tools', desc: 'Enterprise-grade dashboard for multi-vehicle tracking.', icon: 'settings_suggest' }
    ],
    stepsTitle: 'Powering the Future',
    stepsDesc: 'A three-stage methodology designed to transform raw mobility data into sophisticated experiences.',
    steps: [
      { num: 1, title: 'Network Integration', desc: 'Connecting siloed energy data streams into a unified API.' },
      { num: 2, title: 'Intuitive UX for Drivers', desc: 'Designing editorial-quality interfaces that humanize complex data.' },
      { num: 3, title: 'Advanced Data Insights', desc: 'Applying machine learning to predict driver behavior and energy needs.' }
    ],
    testimonialQuote: "The platform developed didn't just digitize our fleet; it revolutionized how we perceive energy. Their editorial approach to UI has made sustainability intuitive.",
    testimonialAuthor: 'Julian Thorne',
    testimonialRole: 'Founder, EcoDrive Dynamics',
    testimonialImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbYlFYuD5sMi5zVnP5oVIXsYxYr2wbjL5INdzSM6oX8JTNyyVnIIv7WA8gyDf6yYzHnEUnaDHKRbYjGlNDzGzPtFwLwVlxkXoyTWmIv0SLhX14zIzCOKzm6f7RxRuY3u8OPE1E69bV5gli41ttHeqh5OuQozN1FSzqPxWucpLcIcmN3mRjupcNXe8jE5s_KGnJlgBonEpmXh2hJrKFtm9fAmuo0t_iMWdP4jgGrbHaYsXYBERiV0hytk3wIx665lfNE1JKMEc1uXm8',
    ctaTitle: 'Ready to lead the transition?',
    ctaDesc: 'Partner with us to architect your industry-leading electric vehicle experience.'
  },
  'dating': {
    slug: 'dating',
    theme: 'lifestyle',
    heroSub: 'Algorithmic Empathy',
    heroTitle: 'Meaningful Connections by Design',
    heroDesc: 'We build emotionally intelligent matchmaking platforms that prioritize genuine engagement over superficial scrolling paradigms.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkxtHReDxqUkNuWHzngoDfbDGxoGEBIhL6HXzgzUxgPiFupiZyT-l-PwUXmnmwyvHDR9CYt5Nq6ms-Mkb0y0BSAxtknV-w-rZhDXcXf-Ye5XenX4LO-Tli3KsHKoxtGsuxRJlHCE6Ax9leWVkY2WnLUr3YSVWa2MYmKWWalFdP0xF3z795cNHjs9P16_n3qk03l2oJj-4fXQ7nlBiMkillHKp1qaf0u2hgy8R_4VN2hgyRsSTF95iy2A8n8IXYt44Q3TwFflOu2Aig',
    featuresTitle: 'Safety, Serendipity, and Scale',
    featuresDesc: 'Our architecture ensures user security while fostering environments conducive to authentic human interactions.',
    features: [
      { title: 'Identity Verification Matrix', desc: 'Multi-tiered AI moderation eliminating synthetic behavioral actors.', icon: 'verified_user' },
      { title: 'Sentiment Analysis Match', desc: 'Moving beyond surface metrics to pair users based on conversational compatibility.', icon: 'forum' },
      { title: 'Immersive Video Profiles', desc: 'Secure RTC infrastructure enabling high-fidelity synchronous connections.', icon: 'videocam' },
      { title: 'Hyper-Local Discovery', desc: 'Privacy-first geospatial querying for spontaneous real-world meetups.', icon: 'explore' }
    ],
    stepsTitle: 'Engineering Romance',
    stepsDesc: 'How we translate human psychology into elegant backend architecture.',
    steps: [
      { num: 1, title: 'Behavioral Mapping', desc: 'Defining the core interaction loops that encourage respectful dialogue.' },
      { num: 2, title: 'Secure Infrastructure', desc: 'Deploying encrypted pipelines to protect intimate user data at rest and in transit.' },
      { num: 3, title: 'Iterative Refinement', desc: 'A/B testing interaction flows to continuously optimize for successful connections.' }
    ],
    testimonialQuote: "The matchmaking algorithm they deployed increased our day-30 retention by 400%. They understand that you aren't just writing code; you're facilitating human vulnerability.",
    testimonialAuthor: 'Sarah Jenkins',
    testimonialRole: 'CPO, Aura Connect',
    testimonialImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHA2FRFiPeTB9Z9NkZ6r8aITym6Q6DuJoO_ZFAuhywc5Zh_uWbacXHDtiiZgmjXE1EETzKLbfQOQx2B584kZZ8EigXLlFvWf3-yQgd6cgn_rt1BlKQ86EqpLtCXV57jC9St6o8ovBaxxDCZxHj-69qNHT9RHBaRamgRSMJBNu4YJF2E-doh1AgahfXPshRjQbSV9FZ0_Ib-JVBY9NgndpfTqrN5veIIlDRpcPciwEFdLN93baCokd43rbaCECK_bTtKUIoL015DMAO',
    ctaTitle: 'Build a Platform with Heart',
    ctaDesc: 'Ready to disrupt the dating landscape with a platform people actually trust?'
  }
};

// Dictionary of high-quality, relevant images for each industry slug
const industryImages: Record<string, string> = {
  'bike-taxi': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?max-w=1200&q=80',
  'bus-booking': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?max-w=1200&q=80',
  'cab-booking': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?max-w=1200&q=80',
  'courier': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?max-w=1200&q=80',
  'e-scooter-sharing': 'https://images.unsplash.com/photo-1595856426353-8de16c14115f?max-w=1200&q=80',
  'event-booking': 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?max-w=1200&q=80',
  'fantasy-football': 'https://images.unsplash.com/photo-1508344928928-7137b29de216?max-w=1200&q=80',
  'fitness': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?max-w=1200&q=80',
  'flower-delivery': 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?max-w=1200&q=80',
  'food-delivery': 'https://images.unsplash.com/photo-1526367790999-0150786686a2?max-w=1200&q=80',
  'fuel-delivery': 'https://images.unsplash.com/photo-1527018263358-7ca29af6e1eb?max-w=1200&q=80',
  'grocery-delivery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?max-w=1200&q=80',
  'healthcare': 'https://images.unsplash.com/photo-1504439468489-c8920d786a2b?max-w=1200&q=80',
  'home-services': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?max-w=1200&q=80',
  'meditation': 'https://images.unsplash.com/photo-1545389336-eaee74bc341b?max-w=1200&q=80',
  'music-streaming': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?max-w=1200&q=80',
  'onlyfans-clone': 'https://images.unsplash.com/photo-1616423640778-28d1b532296d?max-w=1200&q=80',
  'payments': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?max-w=1200&q=80',
  'pharmacy': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde8a?max-w=1200&q=80',
  'real-estate': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?max-w=1200&q=80',
  'salon-spa': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?max-w=1200&q=80',
  'scavenger-hunt': 'https://images.unsplash.com/photo-1506440905961-0ab11add4cbd?max-w=1200&q=80',
  'smart-tv': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?max-w=1200&q=80',
  'stock-trading': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?max-w=1200&q=80',
  'travel': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?max-w=1200&q=80',
  'video-streaming': 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?max-w=1200&q=80',
  'wearable': 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?max-w=1200&q=80'
};

// Fallback generator for unmapped industries (ensures 1000+ page scalability)
export function getIndustryData(slug: string): IndustryContent {
  if (specificIndustries[slug]) return specificIndustries[slug];
  
  // Format slug to Title Case
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Dynamically assign theme based on character count logic to randomize visually
  const themeType = slug.length % 3 === 0 ? 'tech' : (slug.length % 2 === 0 ? 'enterprise' : 'lifestyle');
  
  const resolvedImage = industryImages[slug] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?max-w=1200&q=80'; // Fallback global tech image

  return {
    slug,
    theme: themeType,
    heroSub: `Enterprise ${title}`,
    heroTitle: `Digital Transformation for ${title}.`,
    heroDesc: `We build scalable, high-performance software tailored for the ${title} industry. Empower your business with enterprise-grade architectures and award-winning UX.`,
    heroImage: resolvedImage,
    featuresTitle: 'Engineered for Performance',
    featuresDesc: `Our ${title} solutions are designed from the ground up for massive scale.`,
    features: [
      { title: 'High Availability Infrastructure', desc: '99.99% uptime guaranteed by redundant microservices architecture.', icon: 'cloud_done' },
      { title: 'AI-Driven Analytics', desc: 'Predictive modeling extracting actionable business intelligence from raw data.', icon: 'insights' },
      { title: 'Zero-Trust Security', desc: 'End-to-end encryption securing valuable proprietary data assets.', icon: 'shield' },
      { title: 'Conversion-Optimized UX', desc: 'Aesthetic interfaces relentlessly tested against user drop-off metrics.', icon: 'touch_app' }
    ],
    stepsTitle: `Deploying ${title} at Scale`,
    stepsDesc: 'A rigorous deployment framework.',
    steps: [
      { num: 1, title: 'Discovery & Blueprinting', desc: 'Complete architectural mapping and technical risk assessment.' },
      { num: 2, title: 'Agile Implementation', desc: 'Sprinting towards MVP with continuous integration and deployment pipelines.' },
      { num: 3, title: 'Hyper-Scaling', desc: 'Provisioning elastic computing resources and conducting final load tests.' }
    ],
    testimonialQuote: `The ${title} architecture they delivered exceeded our wildest performance expectations while looking absolutely breathtaking.`,
    testimonialAuthor: 'Director of Technology',
    testimonialRole: 'Global Enterprise Corp',
    testimonialImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbYlFYuD5sMi5zVnP5oVIXsYxYr2wbjL5INdzSM6oX8JTNyyVnIIv7WA8gyDf6yYzHnEUnaDHKRbYjGlNDzGzPtFwLwVlxkXoyTWmIv0SLhX14zIzCOKzm6f7RxRuY3u8OPE1E69bV5gli41ttHeqh5OuQozN1FSzqPxWucpLcIcmN3mRjupcNXe8jE5s_KGnJlgBonEpmXh2hJrKFtm9fAmuo0t_iMWdP4jgGrbHaYsXYBERiV0hytk3wIx665lfNE1JKMEc1uXm8',
    ctaTitle: `Ready to dominate ${title}?`,
    ctaDesc: 'Our engineering team is standing by to map out your infrastructure blueprint.'
  };
}
