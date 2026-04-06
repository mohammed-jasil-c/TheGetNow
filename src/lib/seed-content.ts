import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

const blogPosts = [
  {
    slug: 'future-of-ai-agents',
    category: 'blog',
    title: 'The Future of AI Agents in Enterprise Architecture',
    subtitle: 'How autonomous agents are reshaping B2B software ecosystems.',
    description: 'A deep dive into multi-agent systems, deterministic fallback mechanisms, and how we implement them for Fortune 500s.',
    layout_template: 'BlogDetailTemplate',
    hero_gradient: 'linear-gradient(135deg, #0057FF, #7B2FFF)',
    accent_color: '#0057FF',
    icon: 'faMicrochip',
    featured_image: '/blog_ai_agents_1775502268386.png',
    meta_title: 'AI Agents in Enterprise Architecture | TheGetNow Engineering',
    meta_description: 'Explore the implementation of autonomous AI agents in enterprise systems.',
    content_json: {
      readTime: '8 min read',
      author: {
        name: 'Alexandria Engineering',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
      },
      content: `
# The Shift from Monolith to Multi-Agent

For the past decade, we've broken down monoliths into microservices. Now, we are breaking down microservices into **autonomous agents**. 

At TheGetNow, we've observed a 40% reduction in operational latency when replacing static cron-job processing with intent-driven AI agents.

## Deterministic Resilience

AI hallucinates. That's a feature in creative writing, but a fatal flaw in enterprise logistics. We build deterministic guardrails into our agent architectures using strict JSON schemas and secondary validation loops.

> "The architectural purity of an AI system isn't defined by how smart the model is, but by how elegantly it handles failure."

## Code Example

Here is a simplified example of how we structure our validation loop:

\`\`\`typescript
interface AgentResponse {
  intent: string;
  confidence: number;
  payload: Record<string, any>;
}

async function validateAgentOutput(output: any): Promise<AgentResponse> {
  if (output.confidence < 0.95) {
    throw new CriticalFallbackError('Confidence threshold unmatched. Rerouting to deterministic fallback.');
  }
  return output as AgentResponse;
}
\`\`\`
      `
    }
  },
  {
    slug: 'scaling-cloud-infrastructure',
    category: 'blog',
    title: 'Achieving Zero-Downtime on Massive Scalability',
    subtitle: 'Our battle-tested playbook for cloud infrastructure.',
    description: 'We outline our exact methodology for managing serverless deployments across massive data centers.',
    layout_template: 'BlogDetailTemplate',
    hero_gradient: 'linear-gradient(135deg, #00D4FF, #0057FF)',
    accent_color: '#00D4FF',
    icon: 'faCloud',
    featured_image: '/blog_cloud_1775502306778.png',
    meta_title: 'Zero Downtime Scaling | TheGetNow Engineering',
    meta_description: 'Discover how to achieve true zero-downtime scalability.',
    content_json: {
      readTime: '6 min read',
      author: {
        name: 'Infrastructure Team',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80'
      },
      content: `
# The Illusion of Infinite Scale

Serverless computing is often sold as magic. The reality is that cold starts, connection pooling limits, and API Gateway timeouts exist. 

## Our Multi-Region Approach

We employ active-active replication across multiple geographic regions to ensure that if us-east goes down, the transition is completely invisible to the end-user.

### Key Pillars
- Edge caching for all static configurations
- Read-replica databases deployed globally
- Asynchronous queue-based write processing
      `
    }
  },
  {
    slug: 'quantum-computing-readiness',
    category: 'blog',
    title: 'Quantum Readiness in Financial Tech',
    subtitle: 'Securing the ledger against next-generation threats.',
    description: 'Why we are implementing post-quantum cryptographic primitives in all new Fintech products.',
    layout_template: 'BlogDetailTemplate',
    hero_gradient: 'linear-gradient(135deg, #FF0057, #7B2FFF)',
    accent_color: '#FF0057',
    icon: 'faLock',
    featured_image: '/blog_quantum_1775502289446.png',
    meta_title: 'Quantum Readiness in Fintech | TheGetNow Engineering',
    meta_description: 'Preparing enterprise Fintech for the era of Quantum computing.',
    content_json: {
      readTime: '10 min read',
      author: {
        name: 'Security Research Group',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&q=80'
      },
      content: `
# Breaking RSA

Shor's algorithm isn't a theoretical threat anymore; the timelines are accelerating. For enterprises dealing with financial ledgers, the data intercepted today could be decrypted tomorrow (Harvest now, Decrypt later).

## Post-Quantum Protocols

We are actively rolling out Lattice-based cryptography across our secure message queues.

This ensures that even if traffic is captured, it remains mathematically unbreakable by both classical and quantum architectures.
      `
    }
  }
];

const portfolioProjects = [
  {
    slug: 'meridian-fintech',
    category: 'portfolio',
    title: 'Meridian Global Fintech',
    subtitle: 'Redefining corporate banking interfaces.',
    description: 'We built a hyper-secure, scalable banking dashboard serving 2M+ active corporate users.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #0cebeb, #20e3b2, #29ffc6)',
    accent_color: '#20e3b2',
    icon: 'faChartLine',
    featured_image: '/portfolio_fintech_1775502329285.png',
    meta_title: 'Meridian Fintech Case Study | TheGetNow',
    meta_description: 'Case study on building a scalable enterprise fintech application.',
    content_json: {
      client: 'Meridian Banking Group',
      timeline: '8 Months',
      role: 'Full-Cycle Engineering & Design',
      tags: ['Fintech', 'Enterprise Web', 'Cloud'],
      results: [
        { label: 'Uptime', value: '99.999%' },
        { label: 'Active Users', value: '2M+' },
        { label: 'Latency Drop', value: '-60%' }
      ],
      challenge: 'Meridian was struggling with a monolithic architecture that took 4 seconds to load financial dashboards resulting in multi-million dollar trading delays.',
      solution: 'We orchestrated a complete micro-frontend teardown and rebuilt the core ledger on a highly optimized Rust service securely tied to a Next.js front-end.',
      stack: ['Next.js', 'Rust', 'PostgreSQL', 'AWS Elasticache']
    }
  },
  {
    slug: 'swiftdeliver-logistics',
    category: 'portfolio',
    title: 'SwiftDeliver Logistics',
    subtitle: 'Algorithmic route optimization at scale.',
    description: 'A global logistics tracking system processing real-time telemetry from 50,000 active vehicles.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #f12711, #f5af19)',
    accent_color: '#f5af19',
    icon: 'faMapLocationDot',
    featured_image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000', 
    meta_title: 'SwiftDeliver Logistics | TheGetNow',
    meta_description: 'How we built a global logistics tracking system processing millions of events.',
    content_json: {
      client: 'SwiftDeliver Inc.',
      timeline: '12 Months',
      role: 'Data Architecture & Cloud Engineering',
      tags: ['Logistics', 'Mobile Apps', 'Data Architecture'],
      results: [
        { label: 'Fuel Saved', value: '22%' },
        { label: 'Vehicles', value: '50k+' },
        { label: 'Event Throughput', value: '1M/sec' }
      ],
      challenge: 'Handling 1 million telemetry events per second without dropping packets while maintaining sub-second UI updates for dispatchers.',
      solution: 'Implemented Apache Kafka for massive event ingestion, processed through Go microservices, and beamed directly to a specialized WebGL dashboard via WebSockets.',
      stack: ['Kafka', 'Go', 'React WeGL', 'Google Maps API']
    }
  },
  {
    slug: 'aegis-healthcare',
    category: 'portfolio',
    title: 'Aegis Connected Health',
    subtitle: 'HIPAA-compliant telemedicine platforms.',
    description: 'An expansive ecosystem for remote patient monitoring and encrypted secure video consultations.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #1A2980, #26D0CE)',
    accent_color: '#26D0CE',
    icon: 'faStethoscope',
    featured_image: '/portfolio_health_1775503335679.png',
    meta_title: 'Aegis Healthcare Case Study | TheGetNow',
    meta_description: 'Building secure, compliant software for the medical industry.',
    content_json: {
      client: 'Aegis Medical Systems',
      timeline: '10 Months',
      role: 'Compliance & Application Development',
      tags: ['Healthcare', 'Enterprise Web', 'Security'],
      results: [
        { label: 'Consultations', value: '5M+' },
        { label: 'Compliance', value: 'HIPAA/SOC2' },
        { label: 'Patient Rating', value: '4.9/5' }
      ],
      challenge: 'Aegis needed a system that provided massive scalability for video consultations during extreme surges, while maintaining absolute 100% HIPAA compliance.',
      solution: 'We engineered a bespoke WebRTC gateway utilizing end-to-end encryption protocols, isolating PHI data entirely on dedicated private shards.',
      stack: ['WebRTC', 'Node.js', 'Redis', 'Kubernetes']
    }
  },
  {
    slug: 'lumina-ecommerce',
    category: 'portfolio',
    title: 'Lumina Digital Commerce',
    subtitle: 'Next-generation headless commerce.',
    description: 'A lightning-fast composable commerce platform that increased conversion rates by 35% for a global retailer.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #FF416C, #FF4B2B)',
    accent_color: '#FF416C',
    icon: 'faShoppingCart',
    featured_image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000',
    meta_title: 'Lumina E-Commerce Case Study | TheGetNow',
    meta_description: 'Building scalable headless commerce infrastructure.',
    content_json: {
      client: 'Lumina Retail Group',
      timeline: '6 Months',
      role: 'E-Commerce Architecture',
      tags: ['E-Commerce', 'Enterprise Web', 'Headless'],
      results: [
        { label: 'Conversion', value: '+35%' },
        { label: 'Page Load', value: '< 800ms' },
        { label: 'Revenue', value: '$120M+' }
      ],
      challenge: 'Lumina suffered from slow loading speeds due to a legacy monolithic e-commerce backend, resulting in a high cart abandonment rate.',
      solution: 'Migrated the entire frontend to a Next.js headless architecture, integrating Shopify Plus APIs and Algolia for instantaneous search.',
      stack: ['Next.js', 'Shopify Plus', 'Algolia', 'Tailwind CSS']
    }
  },
  {
    slug: 'nexus-ai',
    category: 'portfolio',
    title: 'Nexus AI Engine',
    subtitle: 'Generative AI for enterprise workflows.',
    description: 'An intelligent platform integrating LLMs directly into corporate data streams to automate standard operative tasks.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
    accent_color: '#8E2DE2',
    icon: 'faBrain',
    featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000',
    meta_title: 'Nexus AI Architecture | TheGetNow',
    meta_description: 'Integrating Generative AI into enterprise workflows seamlessly.',
    content_json: {
      client: 'Nexus Data Systems',
      timeline: '14 Months',
      role: 'AI / ML Integration',
      tags: ['AI/ML', 'Enterprise Web', 'Data Architecture'],
      results: [
        { label: 'Task Automation', value: '45%' },
        { label: 'Data Processing', value: '10TB/day' },
        { label: 'Accuracy', value: '99.2%' }
      ],
      challenge: 'Nexus employees spent 40% of their time manually sorting and tagging unstructured corporate documents.',
      solution: 'Developed a custom pipeline utilizing advanced RAG (Retrieval-Augmented Generation) and custom-trained open-source LLMs to automate document intelligence securely.',
      stack: ['Python', 'Pinecone', 'LangChain', 'Next.js']
    }
  },
  {
    slug: 'blocktrade-exchange',
    category: 'portfolio',
    title: 'BlockTrade Exchange',
    subtitle: 'High-frequency crypto trading platform.',
    description: 'A decentralized exchange aggregator capable of executing cross-chain trades with zero latency.',
    layout_template: 'CaseStudyTemplate',
    hero_gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    accent_color: '#38ef7d',
    icon: 'faBitcoin',
    featured_image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000',
    meta_title: 'BlockTrade UX Design | TheGetNow',
    meta_description: 'Case study on building a high-frequency trading platform UI.',
    content_json: {
      client: 'BlockTrade Labs',
      timeline: '9 Months',
      role: 'Blockchain & Frontend Engineering',
      tags: ['Blockchain', 'Fintech', 'Mobile Apps'],
      results: [
        { label: 'Trade Execution', value: '< 10ms' },
        { label: 'Daily Volume', value: '$500M+' },
        { label: 'Uptime', value: '100%' }
      ],
      challenge: 'Traders experienced slippage due to high latency on the frontend while executing trades across multiple chains.',
      solution: 'We engineered a React application powered by WebSockets to ensure real-time price parity, and optimized smart contract interactions to reduce gas fees.',
      stack: ['React', 'Solidity', 'WebSockets', 'Ethers.js']
    }
  }
];

async function runSeed() {
  console.log('Seeding Blog Posts...');
  for (const post of blogPosts) {
    const { data } = await supabase.from('pages').select('id').eq('slug', post.slug).single();
    if (data) {
      await supabase.from('pages').update(post).eq('id', data.id);
      console.log('Updated:', post.slug);
    } else {
      await supabase.from('pages').insert(post);
      console.log('Inserted:', post.slug);
    }
  }

  console.log('Seeding Portfolio Projects...');
  for (const proj of portfolioProjects) {
    const { data } = await supabase.from('pages').select('id').eq('slug', proj.slug).single();
    if (data) {
      await supabase.from('pages').update(proj).eq('id', data.id);
      console.log('Updated:', proj.slug);
    } else {
      await supabase.from('pages').insert(proj);
      console.log('Inserted:', proj.slug);
    }
  }
}

runSeed();
