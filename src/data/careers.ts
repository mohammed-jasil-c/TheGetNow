export interface JobListing {
  slug: string
  title: string
  department: string
  location: string
  type: string
  tags: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

export const JOB_LISTINGS: JobListing[] = [
  {
    slug: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    tags: ['React', 'Node.js', 'AWS'],
    description: 'Join our core engineering team to build enterprise-grade web applications used by millions. You will own end-to-end feature development from database to UI.',
    responsibilities: [
      'Design and implement scalable full-stack features using React, Next.js, and Node.js',
      'Lead technical architecture for complex product initiatives',
      'Mentor junior engineers and conduct code reviews',
      'Collaborate with product and design on user-facing features',
      'Contribute to shared libraries, build tools, and developer experience',
    ],
    requirements: [
      '5+ years of production experience with React and Node.js',
      'Strong TypeScript skills and understanding of type systems',
      'Experience with PostgreSQL, Redis, and cloud services (AWS/GCP)',
      'Track record of shipping features in agile environments',
      'Excellent communication skills and collaborative mindset',
    ],
    benefits: ['Remote-first', 'Stock options', '$5K learning budget', 'Unlimited PTO', 'Health insurance', 'Latest MacBook Pro'],
  },
  {
    slug: 'staff-ai-ml-engineer',
    title: 'Staff AI/ML Engineer',
    department: 'AI Lab',
    location: 'Remote / NYC',
    type: 'Full-time',
    tags: ['Python', 'PyTorch', 'LangChain'],
    description: 'Lead AI/ML initiatives across our product portfolio. Build custom models, RAG pipelines, and intelligent agents that solve real business problems.',
    responsibilities: [
      'Design and train custom ML models for client projects',
      'Build and optimize RAG pipelines using LangChain and vector databases',
      'Deploy models to production with monitoring and retraining pipelines',
      'Evaluate and integrate new AI technologies (LLMs, agents, embeddings)',
      'Publish internal research and contribute to open-source',
    ],
    requirements: [
      '7+ years of ML engineering experience in production environments',
      'Deep expertise in Python, PyTorch/TensorFlow, and NLP',
      'Experience with LLM fine-tuning, prompt engineering, and RAG',
      'Strong understanding of MLOps (MLflow, Kubeflow, SageMaker)',
      'MS/PhD in Computer Science, ML, or related field preferred',
    ],
    benefits: ['Remote-first', 'Stock options', 'Conference sponsorship', 'GPU compute budget', 'Health insurance', 'Quarterly retreats'],
  },
  {
    slug: 'senior-blockchain-engineer',
    title: 'Senior Blockchain Engineer',
    department: 'Web3',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Solidity', 'Rust', 'Hardhat'],
    description: 'Build the next generation of decentralized protocols. Work on DeFi, NFT, and DAO projects that have secured $500M+ in TVL.',
    responsibilities: [
      'Write gas-optimized smart contracts in Solidity and Rust',
      'Design token economics and governance mechanisms',
      'Lead security audits and formal verification processes',
      'Build subgraph indexers and on-chain analytics',
      'Develop and maintain SDK libraries for dApp integration',
    ],
    requirements: [
      '4+ years of smart contract development experience',
      'Deep expertise in Solidity, EVM internals, and gas optimization',
      'Experience with DeFi protocols (AMMs, lending, vaults)',
      'Knowledge of formal verification tools (Certora, Scribble)',
      'Rust experience for Solana/Near development is a plus',
    ],
    benefits: ['Remote-first', 'Token allocation', '$5K learning budget', 'Hackathon sponsorship', 'Health insurance', 'Latest equipment'],
  },
  {
    slug: 'senior-product-designer',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Figma', 'Design Systems', 'UX Research'],
    description: 'Shape the visual identity of products used by millions. You will lead design across cross-functional pods and build scalable design systems.',
    responsibilities: [
      'Lead end-to-end design for web and mobile products',
      'Conduct user research, usability testing, and competitive analysis',
      'Build and maintain component libraries and design systems',
      'Collaborate closely with engineering on implementation quality',
      'Present design work to stakeholders and incorporate feedback',
    ],
    requirements: [
      '5+ years of product design experience for SaaS or consumer products',
      'Expert-level Figma skills including Auto Layout and Components',
      'Strong portfolio demonstrating systems thinking and visual craft',
      'Experience with user research methodologies and A/B testing',
      'Understanding of frontend development (HTML, CSS, React) is a plus',
    ],
    benefits: ['Remote-first', 'Stock options', 'Conference sponsorship', 'Design tool budget', 'Health insurance', 'Flexible hours'],
  },
  {
    slug: 'devops-sre-lead',
    title: 'DevOps / SRE Lead',
    department: 'Infrastructure',
    location: 'Remote / Gurugram',
    type: 'Full-time',
    tags: ['Kubernetes', 'Terraform', 'AWS'],
    description: 'Own our cloud infrastructure and developer experience. Build the platform that enables 300+ engineers to ship confidently.',
    responsibilities: [
      'Design and manage Kubernetes clusters across multiple cloud providers',
      'Build and maintain CI/CD pipelines using GitHub Actions and ArgoCD',
      'Implement infrastructure-as-code with Terraform and Pulumi',
      'Define SLOs, build monitoring dashboards, and manage incident response',
      'Improve developer experience with better tooling and documentation',
    ],
    requirements: [
      '6+ years of DevOps/SRE experience in production environments',
      'Expert-level Kubernetes, Docker, and container orchestration',
      'Deep AWS/GCP experience with cost optimization strategies',
      'Strong Terraform and IaC skills with module development',
      'On-call experience and incident management expertise',
    ],
    benefits: ['Remote-first', 'Stock options', 'Certification budget', 'On-call compensation', 'Health insurance', 'Latest equipment'],
  },
  {
    slug: 'mobile-engineer-flutter',
    title: 'Mobile Engineer (Flutter)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Flutter', 'Dart', 'Firebase'],
    description: 'Build beautiful, performant cross-platform mobile apps. You will work on consumer-facing and enterprise products used across 50+ countries.',
    responsibilities: [
      'Develop and maintain cross-platform mobile apps using Flutter',
      'Implement complex UI animations and interactions',
      'Integrate with REST/GraphQL APIs and local storage',
      'Write unit, widget, and integration tests',
      'Optimize app performance, size, and startup time',
    ],
    requirements: [
      '3+ years of Flutter development with published apps',
      'Strong Dart skills and understanding of Flutter internals',
      'Experience with state management (Riverpod, Bloc, Provider)',
      'Firebase experience (Auth, Firestore, FCM, Analytics)',
      'Published apps on App Store and/or Google Play',
    ],
    benefits: ['Remote-first', 'Stock options', '$5K learning budget', 'Mobile device testing budget', 'Health insurance', 'Unlimited PTO'],
  },
]

export function getJobBySlug(slug: string): JobListing | undefined {
  return JOB_LISTINGS.find(j => j.slug === slug)
}

export const VALUES = [
  { icon: 'faLightbulb', title: 'Innovation First', description: 'We push boundaries daily — from AI agents to zero-knowledge proofs.', color: '#0057FF' },
  { icon: 'faGraduationCap', title: 'Continuous Growth', description: '$5,000 annual learning budget. Conferences, courses, and certifications.', color: '#7B2FFF' },
  { icon: 'faUsers', title: 'Real Collaboration', description: 'No silos. Engineers, designers, and product leads in autonomous pods.', color: '#10B981' },
  { icon: 'faHeart', title: 'Impact at Scale', description: 'Our code serves 50M+ users across healthcare, finance, and education.', color: '#F59E0B' },
]

export const PERKS = [
  { icon: '🌍', title: 'Remote-First', description: 'Work from anywhere. Team across 15 countries.' },
  { icon: '🏥', title: 'Health Insurance', description: 'Full medical, dental, and vision coverage.' },
  { icon: '📚', title: '$5K Learning Budget', description: 'Annual budget for courses and conferences.' },
  { icon: '💰', title: 'Stock Options', description: 'Own a piece of what you build from day one.' },
  { icon: '🏖️', title: 'Unlimited PTO', description: 'Take the rest you need to do your best work.' },
  { icon: '🖥️', title: 'Latest Equipment', description: 'MacBook Pro M3 + $1,000 home office budget.' },
  { icon: '🍼', title: 'Parental Leave', description: '16 weeks paid leave for all new parents.' },
  { icon: '🎯', title: 'Quarterly Retreats', description: 'Team offsites in Bali, Dubai, and Lisbon.' },
]
