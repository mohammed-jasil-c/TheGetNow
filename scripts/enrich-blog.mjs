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

const blogPosts = [
  {
    slug: 'future-of-ai-enterprise-2025',
    title: 'The Future of AI in Enterprise: What 2025 Holds',
    subtitle: 'From autonomous agents to multimodal reasoning, AI is reshaping how enterprises operate.',
    description: `## The AI Landscape in 2025

The pace of AI innovation has accelerated dramatically. What was research-grade capability 12 months ago is now production-ready infrastructure.

### Key Trends

**1. Autonomous AI Agents**
We're moving beyond chatbots to fully autonomous agents that can plan, execute, and iterate on complex multi-step tasks. These agents are transforming customer service, data analysis, and software development.

**2. Multimodal Reasoning**
Modern AI systems can now process text, images, video, and audio simultaneously. This enables use cases like automated video content analysis, cross-modal search, and rich document understanding.

**3. RAG at Scale**
Retrieval-Augmented Generation has matured from prototype to production. Organizations are building enterprise knowledge bases that connect LLMs to proprietary data with sub-second retrieval.

### What This Means for Your Business

The organizations that will win in 2025 are those that treat AI not as a feature, but as infrastructure. Start with high-impact, low-risk use cases and build organizational capability over time.`,
    featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    content_json: {
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
        role: 'CTO'
      },
      readTime: '8 min read'
    }
  },
  {
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices with Node.js and Kubernetes',
    subtitle: 'A deep dive into our architecture patterns for building microservices that scale to millions of requests.',
    description: `## Engineering for Scale

Building microservices that can handle millions of concurrent requests requires more than just good code—it requires a robust infrastructure and proven architectural patterns.

### Our Core Architecture

**Containerization with Docker**
Every service is containerized for consistency across development, staging, and production environments. This ensures that the code that runs on a developer's machine is exactly the same as what runs in the cloud.

**Orchestration with Kubernetes**
We leverage K8s for automated scaling, self-healing, and zero-downtime deployments. Our clusters are configured with horizontal pod autoscalers that react to traffic spikes in seconds.

**Event-Driven Communication**
To keep services decoupled, we use message brokers like RabbitMQ or Kafka. This prevents cascading failures and allows for asynchronous processing of intensive tasks.

### Lessons from Production

One of the biggest lessons we've learned is that observability is non-negotiable. Without distributed tracing and centralized logging, debugging a microservices environment is nearly impossible.`,
    featured_image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80',
    content_json: {
      author: {
        name: 'James Wright',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        role: 'VP Engineering'
      },
      readTime: '12 min read'
    }
  },
  {
    slug: 'defi-security-best-practices',
    title: 'DeFi Security: Best Practices for Smart Contract Development',
    subtitle: 'Lessons learned from securing $500M+ in TVL across DeFi protocols.',
    description: `## Security-First Blockchain Development

In the world of DeFi, code is law, and vulnerabilities are permanent. Securing smart contracts requires a rigorous, multi-layered approach to development and auditing.

### Critical Safety Patterns

**1. Reentrancy Protection**
Always use the Checks-Effects-Interactions pattern or reentrancy guards to prevent common exploits during external calls.

**2. Access Control**
Implement strict access controls using OpenZeppelin's Ownable or AccessControl contracts. Never assume a function should be public unless absolutely necessary.

**3. Formal Verification**
Moving beyond standard unit tests, we use formal verification tools to mathematically prove the correctness of our most critical contract logic.

### The Auditing Process

No matter how skilled the developers, a third-party audit is essential. We work with leading security firms to conduct deep-dive reviews of all production code before deployment.`,
    featured_image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    content_json: {
      author: {
        name: 'Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        role: 'CEO'
      },
      readTime: '10 min read'
    }
  },
  {
    slug: 'flutter-vs-react-native-2025',
    title: 'Flutter vs React Native in 2025: A Practical Comparison',
    subtitle: 'We\'ve built 200+ mobile apps. Here\'s our honest take on choosing the right cross-platform framework.',
    description: `## The Mobile Framework Choice

In 2025, the choice between Flutter and React Native isn't about which is "better"—it's about which is right for your specific project and team.

### Flutter: The High-Performance Visual Leader

Flutter's custom rendering engine (Impeller) ensures 60 FPS performance and absolute visual consistency across iOS and Android. It's our top choice for apps that require high-fidelity animations and unique UI designs.

### React Native: The Ecosystem and Web-Hybrid King

React Native continues to dominate for projects that need deep integration with existing React web apps. Its massive ecosystem of libraries and the familiarity of JavaScript make it a safe, scalable choice for most enterprise needs.

### How We Decide

We evaluate projects based on three criteria:
1. **Performance Requirements**: Does it need complex 3D or heavy animations? (Flutter)
2. **Team Expertise**: Is the team already proficient in React? (React Native)
3. **Third-Party Libraries**: Are there specific native SDKs that favor one platform?`,
    featured_image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    content_json: {
      author: {
        name: 'Maria Lopez',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
        role: 'Head of Design'
      },
      readTime: '7 min read'
    }
  }
];

async function enrich() {
  console.log('--- Enriching Blog Data ---');

  for (const post of blogPosts) {
    console.log(`Processing: ${post.title}...`);

    const { data: pageResult, error: pageError } = await supabase
      .from('pages')
      .upsert({
        slug: post.slug,
        category: 'blog',
        title: post.title,
        subtitle: post.subtitle,
        description: post.description,
        featured_image: post.featured_image,
        content_json: post.content_json,
        published: true,
        meta_title: `${post.title} | TheGetNow Blog`,
        meta_description: post.subtitle
      }, { onConflict: 'category,slug' })
      .select()
      .single();

    if (pageError || !pageResult) {
      console.error(`Error updating blog post ${post.slug}:`, pageError);
      continue;
    }

    console.log(`Successfully enriched: ${post.slug}`);
  }

  console.log('--- Blog Enrichment Complete! ---');
}

enrich();
