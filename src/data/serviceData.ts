import { Code, Smartphone, BrainCircuit, Blocks, Cloud, PenTool, Rocket, Settings, Sparkles, Shield, Zap, Globe, Gauge, Database, ArrowRightLeft, Target } from 'lucide-react'

export const richServiceData: Record<string, any> = {
  'web-development': {
    primaryColor: '#0057FF',
    accentColor: '#00D4FF',
    heroTag: 'Scalable Architecture',
    overview: 'We construct high-octane React and Next.js applications that aren’t just functional—they are meticulously engineered for uncompromising scale, extreme performance, and stunning visual fidelity.',
    benefits: [
      { title: 'Millisecond Latency', desc: 'Global edge-network deployment ensuring your application loads instantly anywhere on Earth.', icon: Gauge },
      { title: 'Zero-Downtime Scalability', desc: 'Architecture that gracefully handles viral traffic spikes without breaking a sweat.', icon: Globe },
      { title: 'Military-Grade Security', desc: 'Advanced threat mitigation, rigorous OWASP compliance, and end-to-end data encryption.', icon: Shield }
    ],
    capabilities: [
      { id: '1', title: 'Progressive Web Apps (PWA)', desc: 'Immersive native-like experiences running natively in the browser.' },
      { id: '2', title: 'Enterprise Portals', desc: 'Complex role-based access management, dashboards, and deep integrations.' },
      { id: '3', title: 'Serverless SSR', desc: 'Hybrid static-dynamic rendering using Next.js App Router for optimal SEO.' },
      { id: '4', title: 'Headless Commerce', desc: 'Shopify Plus & custom backend connections using modern front-end layers.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Tailwind'],
    process: [
      { step: '01', title: 'Architecture Mapping', desc: 'Defining the optimal tech stack and database schema.' },
      { step: '02', title: 'Component Library', desc: 'Building a custom React design system.' },
      { step: '03', title: 'Backend Integration', desc: 'Wiring APIs and serverless microservices.' },
      { step: '04', title: 'Edge Deployment', desc: 'Pushing to Vercel/AWS with global CDN distribution.' }
    ]
  },
  'mobile-app-development': {
    primaryColor: '#7B2FFF',
    accentColor: '#EC4899',
    heroTag: 'Native Fluidity',
    overview: 'We forge beautiful, fluid native and cross-platform applications that dominate the App Store. Our mobile solutions combine cutting-edge UX with unbreakable performance.',
    benefits: [
      { title: 'Silky 60fps Animations', desc: 'Hardware-accelerated mobile rendering that feels instantaneously responsive.', icon: Zap },
      { title: 'Offline-First Modes', desc: 'Robust disconnected states letting users interact when signals drop.', icon: Database },
      { title: 'Cross-Platform ROI', desc: 'One codebase scaling effortlessly to both iOS and Android platforms natively.', icon: ArrowRightLeft }
    ],
    capabilities: [
      { id: '1', title: 'iOS Native (Swift)', desc: 'Absolute ecosystem integration and unparalleled Apple-tier refinement.' },
      { id: '2', title: 'React Native & Flutter', desc: 'Fast time-to-market without sacrificing native device capabilities.' },
      { id: '3', title: 'Wearable Tech', desc: 'WatchOS and WearOS extensions connecting the digital to the physical.' },
      { id: '4', title: 'Mobile CI/CD', desc: 'Automated TestFlight and Play Store rollout pipelines.' }
    ],
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite'],
    process: [
      { step: '01', title: 'UX Prototyping', desc: 'High-fidelity Figma flows and interactive mockups.' },
      { step: '02', title: 'Native Shell Building', desc: 'Constructing the core navigation and native bridging.' },
      { step: '03', title: 'State Management', desc: 'Redux/Zustand implementations for complex offline states.' },
      { step: '04', title: 'Store Deployment', desc: 'Managing app store approvals and release tracks.' }
    ]
  },
  'ai-development': {
    primaryColor: '#10B981',
    accentColor: '#00D4FF',
    heroTag: 'Cognitive Superiority',
    overview: 'Unleash the full potential of Large Language Models and custom neural networks. We transform generic business workflows into intelligent, autonomous, data-driven powerhouses.',
    benefits: [
      { title: 'Autonomic Operations', desc: 'Automating complex reasoning tasks 24/7 without human intervention.', icon: BrainCircuit },
      { title: 'Predictive ROI', desc: 'Forecasting trends and optimizing resource allocation via Deep Learning.', icon: Target },
      { title: 'Proprietary LLMs', desc: 'Training open-source models exclusively on your private company data.', icon: Sparkles }
    ],
    capabilities: [
      { id: '1', title: 'RAG Architecture', desc: 'Retrieval-Augmented Generation using Pinecone/Milvus vector databases.' },
      { id: '2', title: 'Computer Vision', desc: 'Real-time object detection, OCR, and spatial intelligence models.' },
      { id: '3', title: 'Conversational Agents', desc: 'Advanced LangChain and OpenAI-powered autonomous avatars.' },
      { id: '4', title: 'Predictive Forecasting', desc: 'Time-series analysis for financial and logistics optimization.' }
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Pinecone', 'Hugging Face'],
    process: [
      { step: '01', title: 'Data Cleaning', desc: 'Aggregating and sanitizing massive disparate datasets.' },
      { step: '02', title: 'Model Selection', desc: 'Choosing between LLMs, CNNs, or fine-tuned Transformer models.' },
      { step: '03', title: 'Training & Eval', desc: 'Iterative epoch training against validation data clusters.' },
      { step: '04', title: 'Inference Scaling', desc: 'Deploying Triton/TensorRT on scalable GPU clusters.' }
    ]
  },
  'blockchain-development': {
    primaryColor: '#F59E0B',
    accentColor: '#FF6B35',
    heroTag: 'Decentralized Trust',
    overview: 'Architecting unbreakable, trustless architectures. From core DeFi protocols to complex NFT ecosystems, we build the underlying fabric of Web3.',
    benefits: [
      { title: 'Immutable Ledgers', desc: 'Cryptographically secured records preventing any unauthorized manipulation.', icon: Shield },
      { title: 'Smart Autonomy', desc: 'Self-executing code that removes the need for centralized arbiters.', icon: Settings },
      { title: 'Instant Settlement', desc: 'Routing global value instantly via scalable L2 and core L1 networks.', icon: Globe }
    ],
    capabilities: [
      { id: '1', title: 'Smart Contract Auditing', desc: 'Formal verification protecting million-dollar TVL pools.' },
      { id: '2', title: 'DApp Interfaces', desc: 'Wallet integration and seamless web3 user experiences.' },
      { id: '3', title: 'Tokenomics Design', desc: 'Mathematical modeling for sustainable protocol economies.' },
      { id: '4', title: 'L2 Scaling Solutions', desc: 'Rollups and side-chains using Arbitrum and Optimism.' }
    ],
    techStack: ['Solidity', 'Rust', 'Hardhat', 'Ethers.js', 'Ethereum', 'Solana', 'IPFS'],
    process: [
      { step: '01', title: 'Architecture', desc: 'Defining protocol mechanics and token utility loops.' },
      { step: '02', title: 'Contract Writing', desc: 'Developing the core Solidity/Rust operational logic.' },
      { step: '03', title: 'Testnet Sim', desc: 'Rigorous staging and white-hat exploit testing.' },
      { step: '04', title: 'Mainnet Launch', desc: 'Deploying the final smart contracts to production.' }
    ]
  },
  'cloud-computing': {
    primaryColor: '#0EA5E9',
    accentColor: '#7B2FFF',
    heroTag: 'Infinite Infrastructure',
    overview: 'Design, migrate, and optimize resilient cloud architectures. We leverage serverless microservices to guarantee 99.999% uptime and drastically reduce operational overhead.',
    benefits: [
      { title: 'Elastic Spiking', desc: 'Auto-scaling horizontally matching traffic second-by-second.', icon: Rocket },
      { title: 'Cost Optimization', desc: 'Slashing AWS bills through Spot instances and serverless paradigms.', icon: Zap },
      { title: 'Disaster Recovery', desc: 'Multi-AZ active-active failovers ensuring zero data loss.', icon: Shield }
    ],
    capabilities: [
      { id: '1', title: 'Cloud Migration', desc: 'Lifting and shifting legacy monoliths into Dockerized landscapes.' },
      { id: '2', title: 'Serverless Computing', desc: 'AWS Lambda and API Gateway driven architectures.' },
      { id: '3', title: 'Infrastructure as Code', desc: 'Terraform and CloudFormation reproducible environments.' },
      { id: '4', title: 'Data Lakes', desc: 'Massive unstructured data pipelines using Snowpipe/Redshift.' }
    ],
    techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'Serverless Framework'],
    process: [
      { step: '01', title: 'Auditing', desc: 'Analyzing current infrastructure bottlenecks.' },
      { step: '02', title: 'VPC Mapping', desc: 'Designing secure subnets and isolated networking tiers.' },
      { step: '03', title: 'Migration', desc: 'Live data syncing and cut-over routing.' },
      { step: '04', title: 'Cost Monitoring', desc: 'Implementing FinOps dashboards for ongoing spend tracking.' }
    ]
  },
  'ui-ux-design': {
    primaryColor: '#EC4899',
    accentColor: '#F59E0B',
    heroTag: 'Human-Centric Elegance',
    overview: 'Pixel-perfect, strategy-led interface design. We dive deep into user psychology to build design systems that aren’t just beautiful—they convert.',
    benefits: [
      { title: 'Conversion Spikes', desc: 'Reduced friction interfaces consistently yield massive KPI leaps.', icon: Target },
      { title: 'Brand Distinction', desc: 'Custom iconography and typography defining your unique visual signature.', icon: Sparkles },
      { title: 'Accessibility Compliance', desc: 'WCAG standard adherence ensuring universal usability.', icon: Shield }
    ],
    capabilities: [
      { id: '1', title: 'Wireframing', desc: 'Iterative low-fidelity layouts to lock down flow.' },
      { id: '2', title: 'Design Systems', desc: 'Scalable token-based component libraries for development.' },
      { id: '3', title: 'Micro-Interactions', desc: 'Advanced After Effects/Lottie prototyping for visceral feel.' },
      { id: '4', title: 'User Testing', desc: 'A/B testing and heatmap analysis on live prototypes.' }
    ],
    techStack: ['Figma', 'Framer', 'Spline', 'After Effects', 'Lottie', 'Webflow'],
    process: [
      { step: '01', title: 'Discovery', desc: 'User persona mapping and competitor teardowns.' },
      { step: '02', title: 'Wireframing', desc: 'Structural UI framing ignoring aesthetic bias.' },
      { step: '03', title: 'Visual Polish', desc: 'Applying brand guides, glassmorphism, and color theory.' },
      { step: '04', title: 'Developer Handoff', desc: 'Preparing detailed specs and CSS token variables.' }
    ]
  },
  'saas-development': {
    primaryColor: '#6366F1',
    accentColor: '#EC4899',
    heroTag: 'Multi-Tenant Scale',
    overview: 'End-to-end SaaS engineering. From billing architectures to complex user tenancy models, we engineer digital products ready for immediate global commercialization.',
    benefits: [
      { title: 'Rapid Go-To-Market', desc: 'Pre-built modular authentication and billing accelerators.', icon: Rocket },
      { title: 'Bulletproof Tenancy', desc: 'Data isolation strategies ensuring enterprise-tier privacy compliance.', icon: Shield },
      { title: 'Zero-Maintenance', desc: 'Fully managed backend architectures with extreme resiliency.', icon: Gauge }
    ],
    capabilities: [
      { id: '1', title: 'Subscription Billing', desc: 'Advanced Stripe/Paddle integration for MRR management.' },
      { id: '2', title: 'RBAC Access', desc: 'Granular Role-Based Access Controls and SSO pipelines.' },
      { id: '3', title: 'Multi-Tenant DB', desc: 'Row-level security patterns scaling to thousands of orgs.' },
      { id: '4', title: 'Admin Dashboards', desc: 'Internal tooling for managing your platform securely.' }
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Stripe', 'Supabase', 'Clerk', 'Tailwind', 'Prisma'],
    process: [
      { step: '01', title: 'MVP Scoping', desc: 'Stripping out the fat for immediate core value delivery.' },
      { step: '02', title: 'Core Routing', desc: 'Setting up authentication, middleware, and layouts.' },
      { step: '03', title: 'Feature Sprinting', desc: 'Agile 2-week iterations on primary functionality.' },
      { step: '04', title: 'Beta Launch', desc: 'Soft-launching to early adopters for feedback loops.' }
    ]
  },
  'devops-services': {
    primaryColor: '#14B8A6',
    accentColor: '#0EA5E9',
    heroTag: 'Relentless Reliability',
    overview: 'Engineering the engines of deployment. We implement automated CI/CD pipelines and Kubernetes clusters that turn multi-hour manual deployments into single-click certainties.',
    benefits: [
      { title: 'Velocity Increase', desc: 'Shipping code 10x faster with absolute confidence.', icon: Zap },
      { title: 'Zero Downtime', desc: 'Rolling pod updates ensuring users never experience 503s.', icon: Globe },
      { title: 'Automated Recovery', desc: 'Self-healing clusters that restart failed microservices instantly.', icon: Shield }
    ],
    capabilities: [
      { id: '1', title: 'CI/CD Pipelines', desc: 'GitHub Actions/GitLab configurations running automated tests.' },
      { id: '2', title: 'Kubernetes', desc: 'Orchestrating hundreds of containers spanning multiple zones.' },
      { id: '3', title: 'Observability', desc: 'Datadog/Prometheus dashboards catching errors proactively.' },
      { id: '4', title: 'DevSecOps', desc: 'Automated vulnerability scanning in the build pipeline.' }
    ],
    techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Prometheus', 'Datadog'],
    process: [
      { step: '01', title: 'Containerization', desc: 'Writing minimal Dockerfiles for all microservices.' },
      { step: '02', title: 'Pipeline Linking', desc: 'Firing test scripts on PR commits.' },
      { step: '03', title: 'Cluster Deployment', desc: 'Configuring EKS/GKE nodes and Helm charts.' },
      { step: '04', title: 'Monitoring Sync', desc: 'Hooking up alerts and tracing tools.' }
    ]
  }
}
