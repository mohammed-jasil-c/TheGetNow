export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  author: { name: string; avatar: string; role: string }
  date: string
  readTime: string
  content: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-ai-enterprise-2025',
    title: 'The Future of AI in Enterprise: What 2025 Holds',
    excerpt: 'From autonomous agents to multimodal reasoning, AI is reshaping how enterprises operate. Here\'s what decision-makers need to know.',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    author: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face', role: 'CTO' },
    date: '2025-03-15',
    readTime: '8 min read',
    featured: true,
    content: `
## The AI Landscape in 2025

The pace of AI innovation has accelerated dramatically. What was research-grade capability 12 months ago is now production-ready infrastructure.

### Key Trends

**1. Autonomous AI Agents**
We're moving beyond chatbots to fully autonomous agents that can plan, execute, and iterate on complex multi-step tasks. These agents are transforming customer service, data analysis, and software development.

**2. Multimodal Reasoning**
Modern AI systems can now process text, images, video, and audio simultaneously. This enables use cases like automated video content analysis, cross-modal search, and rich document understanding.

**3. RAG at Scale**
Retrieval-Augmented Generation has matured from prototype to production. Organizations are building enterprise knowledge bases that connect LLMs to proprietary data with sub-second retrieval.

### What This Means for Your Business

The organizations that will win in 2025 are those that treat AI not as a feature, but as infrastructure. Start with high-impact, low-risk use cases and build organizational capability over time.
    `,
  },
  {
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices with Node.js and Kubernetes',
    excerpt: 'A deep dive into our architecture patterns for building microservices that scale to millions of requests.',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80',
    author: { name: 'James Wright', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', role: 'VP Engineering' },
    date: '2025-03-01',
    readTime: '12 min read',
    content: 'Full article content here...',
  },
  {
    slug: 'defi-security-best-practices',
    title: 'DeFi Security: Best Practices for Smart Contract Development',
    excerpt: 'Lessons learned from securing $500M+ in TVL across DeFi protocols.',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    author: { name: 'Arjun Mehta', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', role: 'CEO' },
    date: '2025-02-20',
    readTime: '10 min read',
    content: 'Full article content here...',
  },
  {
    slug: 'flutter-vs-react-native-2025',
    title: 'Flutter vs React Native in 2025: A Practical Comparison',
    excerpt: 'We\'ve built 200+ mobile apps. Here\'s our honest take on choosing the right cross-platform framework.',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    author: { name: 'Maria Lopez', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', role: 'Head of Design' },
    date: '2025-02-10',
    readTime: '7 min read',
    content: 'Full article content here...',
  },
  {
    slug: 'cloud-cost-optimization-guide',
    title: 'The Ultimate Guide to Cloud Cost Optimization',
    excerpt: 'How we helped clients save 40-60% on their AWS bills without sacrificing performance.',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    author: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face', role: 'CTO' },
    date: '2025-01-25',
    readTime: '9 min read',
    content: 'Full article content here...',
  },
  {
    slug: 'design-system-architecture',
    title: 'Building Design Systems That Scale: Lessons From 50+ Projects',
    excerpt: 'A practitioner\'s guide to designing, implementing, and maintaining design systems across distributed teams.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    author: { name: 'Maria Lopez', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', role: 'Head of Design' },
    date: '2025-01-10',
    readTime: '11 min read',
    content: 'Full article content here...',
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}

export function getBlogFallbackImage(index: number = 0): string {
  // Generic high-quality technical fallbacks
  const fallbacks = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200\u0026auto=format\u0026fit=crop', // AI/Abstract
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200\u0026auto=format\u0026fit=crop', // Network/Code
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200\u0026auto=format\u0026fit=crop', // Digital/Abstract
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200\u0026auto=format\u0026fit=crop', // Mobile
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200\u0026auto=format\u0026fit=crop', // Global/Data
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200\u0026auto=format\u0026fit=crop', // Design
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200\u0026auto=format\u0026fit=crop', // Programming
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200\u0026auto=format\u0026fit=crop', // Cybersecurity
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200\u0026auto=format\u0026fit=crop', // Electronics
    'https://images.unsplash.com/photo-1558494949-ef0109121c0b?w=1200\u0026auto=format\u0026fit=crop', // Server
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200\u0026auto=format\u0026fit=crop', // Web Dev
    'https://images.unsplash.com/photo-1504639725597-78f6ec6b5383?w=1200\u0026auto=format\u0026fit=crop', // Coding
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200\u0026auto=format\u0026fit=crop', // Laptop/Dev
    'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1200\u0026auto=format\u0026fit=crop', // Logic
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200\u0026auto=format\u0026fit=crop', // Circuit
    'https://images.unsplash.com/photo-1519389950473-acc756fdf206?w=1200\u0026auto=format\u0026fit=crop', // Digital Team
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200\u0026auto=format\u0026fit=crop', // Modern Desk
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200\u0026auto=format\u0026fit=crop', // Meeting
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200\u0026auto=format\u0026fit=crop', // Discussion
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200\u0026auto=format\u0026fit=crop', // Collaboration
  ]
  return fallbacks[index % fallbacks.length]
}
