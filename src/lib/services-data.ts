export type LayoutMode = 'cinematic' | 'grid' | 'split' | 'minimal' | 'cards';

export const servicesData: Record<string, {
  title: string
  slug: string
  layoutMode: LayoutMode
  tagline: string
  description: string
  heroImage: string
  videoId: string
  features: { title: string; description: string; icon: string }[]
  technologies: { name: string; color: string }[]
  process: { step: string; title: string; description: string }[]
  stats: { value: string; label: string }[]
  useCases: string[]
  faq: { q: string; a: string }[]
}> = {
  'web-development': {
    title: 'Web Development',
    slug: 'web-development',
    layoutMode: 'cinematic',
    tagline: 'High-Performance Web Platforms',
    description: 'We architect and develop enterprise-grade web applications using modern frameworks like React and Next.js. Our full-stack engineering teams deliver responsive, highly scalable solutions designed for maximum performance, SEO optimization, and seamless user experiences.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    videoId: 'Tn6-PIqc4UM',
    features: [
      { title: 'Progressive Web Apps', description: 'Lightning-fast PWAs that work offline, load instantly, and feel native on any device with push notifications and background sync.', icon: '⚡' },
      { title: 'Server-Side Rendering', description: 'Next.js architectures providing blazingly fast load times and perfect SEO scores.', icon: '🚀' },
      { title: 'Real-Time Architecture', description: 'WebSocket-powered applications with live collaboration features, real-time dashboards, and instant data synchronization.', icon: '🔄' },
      { title: 'Headless CMS Integration', description: 'Decoupled frontend architectures with Strapi, Contentful, or Sanity for maximum content flexibility and performance.', icon: '🧩' },
      { title: 'API-First Development', description: 'RESTful and GraphQL APIs designed for scalability, security, and seamless third-party integrations.', icon: '🔗' },
      { title: 'E-Commerce Solutions', description: 'Custom storefronts with Shopify, WooCommerce, or bespoke cart systems natively integrated into the web platform.', icon: '🛒' },
    ],
    technologies: [
      { name: 'React', color: '#61DAFB' }, { name: 'Next.js', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' }, { name: 'Node.js', color: '#339933' },
      { name: 'PostgreSQL', color: '#4169E1' }, { name: 'Supabase', color: '#3FCF8E' },
      { name: 'Tailwind CSS', color: '#06B6D4' }, { name: 'GraphQL', color: '#E10098' },
    ],
    process: [
      { step: '01', title: 'Architecture Planning', description: 'Defining data models, API schemas, and component hierarchies.' },
      { step: '02', title: 'UI/UX Design', description: 'Creating pixel-perfect interfaces designed for web engagement.' },
      { step: '03', title: 'Sprint Development', description: 'Agile execution using CI/CD pipelines to deploy features fast.' },
      { step: '04', title: 'QA & Auditing', description: 'Comprehensive performance, accessibility, and security testing.' },
      { step: '05', title: 'Deployment', description: 'Zero-downtime launches on infinitely scalable cloud platforms.' },
    ],
    stats: [
      { value: '150+', label: 'Web Apps Built' },
      { value: '0.8s', label: 'Avg Load Time' },
      { value: '100', label: 'Lighthouse Score' },
      { value: '40%', label: 'Conversion Lift' },
    ],
    useCases: ['Enterprise SaaS', 'B2B Portals', 'E-Commerce Platforms', 'Admin Dashboards', 'Social Networks', 'Content Management Systems'],
    faq: [
      { q: 'Why Next.js?', a: 'It provides the best balance of fast rendering, stellar SEO, and developer experience available today.' },
      { q: 'Will the website be accessible?', a: 'Yes, we adhere strictly to WCAG 2.1 AA guidelines in all our web builds.' },
      { q: 'How do you handle security?', a: 'We employ strict CSRF, XSS prevention protocols, rate limiting, and robust authentication like OAuth2.' },
    ],
  },
  
  'mobile-app-development': {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    layoutMode: 'split',
    tagline: 'Native & Cross-Platform Mobile Solutions',
    description: 'We build award-winning mobile applications for iOS and Android. Whether using native Swift and Kotlin or cross-platform Flutter and React Native, we deliver fluid, responsive, and deeply integrated applications that drive mobile engagement.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    videoId: 'qYZF6oIZtfc',
    features: [
      { title: 'Native iOS & Android', description: 'Unhindered performance leveraging deep access to hardware integrations using Swift and Kotlin.', icon: '📱' },
      { title: 'Cross-Platform', description: 'Get to market 2x faster with a unified codebase built in Flutter or React Native without sacrificing UX.', icon: '⚡' },
      { title: 'IoT Integrations', description: 'Bluetooth Low Energy (BLE), wearable device connections, and smart-home hardware pairing.', icon: '⌚' },
      { title: 'Offline First', description: 'Robust local databases (SQLite/Realm) that sync automatically when the user regains connection.', icon: '📴' },
      { title: 'AR/VR Capabilities', description: 'Augmented reality features via ARKit and ARCore for immersive consumer experiences.', icon: '👓' },
      { title: 'Biometric Security', description: 'FaceID, TouchID, and advanced mobile encryption protocols for sensitive apps.', icon: '🔒' },
    ],
    technologies: [
      { name: 'Flutter', color: '#02569B' }, { name: 'React Native', color: '#61DAFB' },
      { name: 'Swift', color: '#FA7343' }, { name: 'Kotlin', color: '#7F52FF' },
      { name: 'Firebase', color: '#FFCA28' }, { name: 'Realm', color: '#8A2BE2' },
      { name: 'Fastlane', color: '#00F200' }, { name: 'CoreML', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Product Strategy', description: 'Market research, platform selection, and feature prioritization.' },
      { step: '02', title: 'App Prototyping', description: 'High-fidelity mobile wireframing validating touch targets and navigation.' },
      { step: '03', title: 'Development', description: 'Simultaneous coding of front-end and back-end integrated sequentially.' },
      { step: '04', title: 'Beta Testing', description: 'TestFlight and Play Console distributions for user feedback refinement.' },
      { step: '05', title: 'App Store Launch', description: 'App Store Optimization (ASO) and management of the approval process.' },
    ],
    stats: [
      { value: '50M+', label: 'App Downloads' },
      { value: '4.9', label: 'Avg Store Rating' },
      { value: '99%', label: 'Crash-free Rate' },
      { value: '85+', label: 'Apps Published' },
    ],
    useCases: ['mCommerce', 'Fitness Trackers', 'FinTech Wallets', 'Social Media', 'On-Demand Delivery', 'Telemedicine'],
    faq: [
      { q: 'Native vs Cross-Platform?', a: 'We recommend cross-platform (Flutter) for 80% of use cases to save time/budget. Native is best for heavy 3D rendering or deep OS-level access.' },
      { q: 'Do you guarantee app store approval?', a: 'While we cannot guarantee Apple/Google\'s final decision, we have a 99% first-time approval rate due to our strict adherence to their guidelines.' },
      { q: 'Can you rescue a failing app project?', a: 'Yes, we frequently audit existing codebases, refactor tech debt, and rebuild apps that are crashing or underperforming.' },
    ],
  },

  'blockchain-development': {
    title: 'Blockchain Development',
    slug: 'blockchain-development',
    layoutMode: 'grid',
    tagline: 'Build Decentralized, Trustless Systems',
    description: 'We design and develop blockchain-based solutions including smart contracts, DeFi protocols, NFT marketplaces, and enterprise distributed ledgers. Our engineers deliver audited, gas-optimized solutions across Ethereum, Polygon, Solana, and private chains.',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    videoId: 'aircAruvnKk',
    features: [
      { title: 'Smart Contract Development', description: 'Solidity and Rust smart contracts with formal verification, gas optimization, and comprehensive security audits.', icon: '📜' },
      { title: 'DeFi Protocols', description: 'Custom DEXs, lending platforms, yield farming, and liquidity pools built with battle-tested security patterns.', icon: '💰' },
      { title: 'Enterprise Blockchain', description: 'Hyperledger Fabric and private Ethereum networks for supply chain, identity management, and document verification.', icon: '🏢' },
      { title: 'Security Audits', description: 'Comprehensive smart contract auditing with static analysis, fuzzing, and formal verification to prevent exploits.', icon: '🔒' },
    ],
    technologies: [
      { name: 'Solidity', color: '#363636' }, { name: 'Rust', color: '#CE422B' },
      { name: 'Ethereum', color: '#627EEA' }, { name: 'Polygon', color: '#8247E5' },
      { name: 'Solana', color: '#14F195' }, { name: 'Hardhat', color: '#FFF100' },
      { name: 'Foundry', color: '#1C1C1C' }, { name: 'OpenZeppelin', color: '#4E5EE4' },
    ],
    process: [
      { step: '01', title: 'Tokenomics', description: 'Designing long-term sustainable economic models.' },
      { step: '02', title: 'Architecture', description: 'Modular, upgradeable contract patterns.' },
      { step: '03', title: 'Development', description: 'Writing gas-efficient, secure smart contracts.' },
      { step: '04', title: 'Auditing', description: 'Multi-phase security review and fuzz testing.' },
      { step: '05', title: 'Mainnet', description: 'Deployment, verification, and indexing.' },
    ],
    stats: [
      { value: '$2B+', label: 'TVL Secured' },
      { value: '50+', label: 'Audits Passed' },
      { value: '0', label: 'Security Breaches' },
      { value: '15+', label: 'Chains Supported' },
    ],
    useCases: ['DeFi Lending', 'DAO Governance', 'Supply Chain Tracking', 'Digital Identity'],
    faq: [
      { q: 'Which blockchain should I build on?', a: 'Ethereum for security, Polygon for low fees, Solana for high throughput.' },
      { q: 'How do you ensure security?', a: 'We follow OpenZeppelin standards and use formal verification tools prior to auditing.' },
    ],
  },

  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    layoutMode: 'cinematic',
    tagline: 'Transform Data Into Intelligent Decisions',
    description: 'We build production-grade AI systems including custom LLM applications, computer vision pipelines, predictive analytics engines, and conversational AI. Our ML engineers deliver accurate, explainable models.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    videoId: '5p248yoa3oE',
    features: [
      { title: 'Custom LLM Applications', description: 'RAG pipelines, fine-tuned models, and AI agents built on GPT-4, Claude, Gemini, and open-source LLMs.', icon: '🧠' },
      { title: 'Computer Vision', description: 'Object detection, image classification, OCR, and video analytics for real-world applications.', icon: '👁️' },
      { title: 'Predictive Analytics', description: 'ML models for demand forecasting, churn prediction, and recommendation engines.', icon: '📈' },
      { title: 'MLOps & Infrastructure', description: 'End-to-end ML pipelines with automated training, versioning, and production monitoring.', icon: '⚙️' },
    ],
    technologies: [
      { name: 'TensorFlow', color: '#FF6F00' }, { name: 'PyTorch', color: '#EE4C2C' },
      { name: 'OpenAI API', color: '#412991' }, { name: 'LangChain', color: '#1C3C3C' },
      { name: 'Hugging Face', color: '#FFD21E' }, { name: 'Pinecone', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Data Assessment', description: 'Evaluating data quality, volume, and structure.' },
      { step: '02', title: 'Prototyping', description: 'Rapid experimentation and benchmark evaluations.' },
      { step: '03', title: 'Engineering', description: 'Converting research models to production pipelines.' },
      { step: '04', title: 'Integration', description: 'Wiring APIs into existing business software.' },
      { step: '05', title: 'Monitoring', description: 'Watching for model drift and continuous retraining.' },
    ],
    stats: [
      { value: '95%+', label: 'Model Accuracy' },
      { value: '10x', label: 'Processing Speed' },
      { value: '60%', label: 'Cost Reduction' },
      { value: '100+', label: 'AI Projects' },
    ],
    useCases: ['Document Intelligence', 'Fraud Detection', 'Medical Imaging', 'Quality Inspection'],
    faq: [
      { q: 'Do we need a large dataset?', a: 'Not necessarily. We can leverage pre-trained models and synthetic data.' },
      { q: 'What is RAG?', a: 'Retrieval-Augmented Generation lets LLMs answer questions using your private data.' },
    ],
  },

  'cloud-devops': {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    layoutMode: 'split',
    tagline: 'Scale Infrastructure Without Limits',
    description: 'We build and manage cloud-native architectures on AWS, GCP, and Azure. Implementing CI/CD, containerization, and IaC to ensure resiliency, scalability, and cost-optimization.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    videoId: 'JMUxmLyrhSk',
    features: [
      { title: 'Architecture Design', description: 'Multi-region, fault-tolerant architectures with auto-scaling and load balancing.', icon: '☁️' },
      { title: 'CI/CD Pipelines', description: 'Automated delivery pipelines with GitHub Actions, GitLab CI, and ArgoCD.', icon: '🔄' },
      { title: 'Container Orchestration', description: 'Kubernetes cluster management, Helm charts, and service meshes.', icon: '📦' },
      { title: 'Infrastructure as Code', description: 'Terraform and Pulumi modules for version-controlled infrastructure.', icon: '🏗️' },
    ],
    technologies: [
      { name: 'AWS', color: '#FF9900' }, { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Azure', color: '#0078D4' }, { name: 'Terraform', color: '#7B42BC' },
      { name: 'Docker', color: '#2496ED' }, { name: 'Kubernetes', color: '#326CE5' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Identifying bottlenecks and optimization opportunities.' },
      { step: '02', title: 'Design', description: 'Cloud-native architecture and DR planning.' },
      { step: '03', title: 'Migration', description: 'Zero-downtime transition to the cloud.' },
      { step: '04', title: 'Automation', description: 'IaC scripting and pipeline setup.' },
      { step: '05', title: 'Management', description: '24/7 NOC monitoring and FinOps.' },
    ],
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '40%', label: 'Cost Savings' },
      { value: '10min', label: 'Deploy Time' },
      { value: '500+', label: 'Servers Managed' },
    ],
    useCases: ['Cloud Migration', 'Microservices', 'Serverless', 'Compliance Automation'],
    faq: [
      { q: 'Which cloud provider?', a: 'AWS for breadth, GCP for Data/ML, Azure for Microsoft integration.' },
      { q: 'How do you handle security?', a: 'VPC isolation, IAM policies, and encryption at rest/transit.' },
    ],
  },

  'ui-ux-design': {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    layoutMode: 'cards',
    tagline: 'Design Experiences That Convert',
    description: 'We create human-centered digital experiences that drive engagement and satisfaction. Combining user research, interaction design, and visual storytelling.',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    videoId: 'YiLUYf4HDh4',
    features: [
      { title: 'User Research', description: 'Qualitative testing, interviews, and heatmap analysis.', icon: '🔍' },
      { title: 'Prototyping', description: 'Interactive Figma prototypes with micro-interactions.', icon: '📐' },
      { title: 'Design Systems', description: 'Scalable component libraries, tokens, and guidelines.', icon: '🎨' },
      { title: 'Accessibility', description: 'AA/AAA compliant designs usable by everyone.', icon: '♿' },
    ],
    technologies: [
      { name: 'Figma', color: '#F24E1E' }, { name: 'Framer', color: '#0055FF' },
      { name: 'Principle', color: '#7B61FF' }, { name: 'Storybook', color: '#FF4785' },
    ],
    process: [
      { step: '01', title: 'Research', description: 'Understanding users and problem spaces.' },
      { step: '02', title: 'Architecture', description: 'Sitemaps and user flows.' },
      { step: '03', title: 'Wireframes', description: 'Low to high-fidelity clickable mockups.' },
      { step: '04', title: 'Visuals', description: 'Brand-aligned pixel-perfect UI.' },
      { step: '05', title: 'Handoff', description: 'Developer specs and QA.' },
    ],
    stats: [
      { value: '340%', label: 'Conversion Lift' },
      { value: '4.9/5', label: 'Client Rating' },
      { value: '10+', label: 'Design Awards' },
    ],
    useCases: ['SaaS Dashboards', 'E-Commerce UX', 'Mobile App Design', 'Design Systems'],
    faq: [
      { q: 'What is your process?', a: 'Empathize, Define, Ideate, Prototype, and Test.' },
    ],
  },

  'mvp-development': {
    title: 'MVP Development',
    slug: 'mvp-development',
    layoutMode: 'split',
    tagline: 'Validate Ideas, Fast',
    description: 'We help startups and enterprises rapidly prototype and launch Minimum Viable Products in weeks, not months. Test your market assumptions with real users while minimizing initial capital expenditure.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    videoId: 'qYZF6oIZtfc',
    features: [
      { title: 'Rapid Prototyping', description: 'Transform concepts into clickable prototypes within 7 days.', icon: '🚀' },
      { title: 'Market Validation', description: 'Built-in tracking and A/B testing infrastructure to measure user engagement instantly.', icon: '📊' },
      { title: 'Scalable Foundations', description: 'We build MVPs on production-ready stacks so you never have to throw away code when scaling.', icon: '🏗️' },
    ],
    technologies: [
      { name: 'Next.js', color: '#000000' }, { name: 'Supabase', color: '#3FCF8E' },
      { name: 'Tailwind', color: '#06B6D4' }, { name: 'Vercel', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Core feature prioritization.' },
      { step: '02', title: 'Design', description: 'Essential user journeys.' },
      { step: '03', title: 'Build', description: '2-4 week sprint cycle.' },
      { step: '04', title: 'Launch', description: 'Deploy and monitor analytics.' },
    ],
    stats: [
      { value: '4 Weeks', label: 'Avg Time to Market' },
      { value: '200+', label: 'Startups Launched' },
      { value: '$50M+', label: 'Follow-on Funding' },
    ],
    useCases: ['Seed Validation', 'Internal Tools', 'Beta Programs', 'Pitch Demos'],
    faq: [
      { q: 'Do I get the source code?', a: 'Yes, 100% IP ownership transfers to you.' },
    ],
  },

  'saas-development': {
    title: 'SaaS Development',
    slug: 'saas-development',
    layoutMode: 'grid',
    tagline: 'Scale Your Subscription Business',
    description: 'End-to-end engineering for B2B and B2C Software-as-a-Service platforms. Inherent multi-tenancy, complex billing integrations, and role-based access control built from day one.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    videoId: 'Tn6-PIqc4UM',
    features: [
      { title: 'Multi-Tenant Architecture', description: 'Data isolation and resource pooling tailored for your specific security and compliance needs.', icon: '🏢' },
      { title: 'Subscription Billing', description: 'Seamless Stripe/Chargebee integration covering metered usage, pro-ration, and dunning management.', icon: '💳' },
      { title: 'Admin Dashboards', description: 'Powerful internal tools for customer success and operational monitoring.', icon: '🎛️' },
    ],
    technologies: [
      { name: 'React', color: '#61DAFB' }, { name: 'Node.js', color: '#339933' },
      { name: 'PostgreSQL', color: '#4169E1' }, { name: 'Stripe API', color: '#635BFF' },
    ],
    process: [
      { step: '01', title: 'Schema', description: 'Database isolation planning.' },
      { step: '02', title: 'Auth', description: 'Identity and permissions.' },
      { step: '03', title: 'API', description: 'Core business logic construction.' },
      { step: '04', title: 'Billing', description: 'Integrating recurring models.' },
    ],
    stats: [
      { value: '50+', label: 'SaaS Built' },
      { value: '$100M+', label: 'ARR Managed' },
      { value: '99.9%', label: 'Uptime' },
    ],
    useCases: ['B2B Enterprise', 'MicroSaaS', 'Marketplaces', 'API as a Service'],
    faq: [
      { q: 'Can you handle GDPR compliance?', a: 'Yes, we implement localized datastores and right-to-be-forgotten protocols.' },
    ],
  },

  'web3-nft': {
    title: 'Web3 & NFT',
    slug: 'web3-nft',
    layoutMode: 'cinematic',
    tagline: 'The Next Generation of Digital Ownership',
    description: 'We develop smart contracts, minting engines, DAOs, and secondary marketplaces. Unleash the potential of tokenized assets and community-governed protocols.',
    heroImage: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=1200&q=80',
    videoId: 'aircAruvnKk',
    features: [
      { title: 'NFT Marketplaces', description: 'Custom auction houses with royalty enforcement and lazy minting.', icon: '🎨' },
      { title: 'Tokenomics & ICOs', description: 'Secure token generation events and vesting contract deployment.', icon: '🪙' },
      { title: 'DAO Tooling', description: 'On-chain voting mechanisms and treasury management.', icon: '🏛️' },
    ],
    technologies: [
      { name: 'Solidity', color: '#363636' }, { name: 'IPFS', color: '#65C2CB' },
      { name: 'Ether.js', color: '#292B45' }, { name: 'Wagmi', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Design', description: 'Token utility mapping.' },
      { step: '02', title: 'Contracts', description: 'Writing secure code.' },
      { step: '03', title: 'Audit', description: '3rd party verification.' },
      { step: '04', title: 'Mint', description: 'Deploying to network.' },
    ],
    stats: [
      { value: '2M+', label: 'NFTs Minted' },
      { value: '$50M+', label: 'Traded Volume' },
      { value: '10+', label: 'Marketplaces' },
    ],
    useCases: ['Digital Art', 'Gaming Assets', 'Real Estate Tokenization'],
    faq: [
      { q: 'Which chain is best for NFTs?', a: 'We typically recommend Polygon or Solana for consumer DApps due to low gas fees.' },
    ],
  },

  'iot-development': {
    title: 'IoT Development',
    slug: 'iot-development',
    layoutMode: 'split',
    tagline: 'Connecting the Physical World',
    description: 'End-to-end Internet of Things solutions from firmware development to cloud telemetry pipelines and user-facing control dashboards.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    videoId: '5p248yoa3oE',
    features: [
      { title: 'Device Firmware', description: 'Low-level C/C++ development for microcontrollers (ESP32, STM32).', icon: '🔌' },
      { title: 'Telemetry Ingestion', description: 'High-throughput MQTT brokers handling millions of pings per second.', icon: '📡' },
      { title: 'Digital Twins', description: 'Real-time 3D simulation of physical assets within secure dashboards.', icon: '👯' },
    ],
    technologies: [
      { name: 'C++', color: '#00599C' }, { name: 'AWS IoT', color: '#FF9900' },
      { name: 'MQTT', color: '#660066' }, { name: 'FreeRTOS', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Hardware', description: 'Component selection.' },
      { step: '02', title: 'Firmware', description: 'Writing embedded logic.' },
      { step: '03', title: 'Connectivity', description: 'Securing the data pipe.' },
      { step: '04', title: 'Dashboard', description: 'Visualizing telemetry.' },
    ],
    stats: [
      { value: '500K+', label: 'Connected Devices' },
      { value: '99.9%', label: 'Uptime' },
      { value: '10ms', label: 'Command Latency' },
    ],
    useCases: ['Smart Home', 'Industrial Monitoring', 'Wearables'],
    faq: [
      { q: 'How do you handle offline devices?', a: 'Queueing systems store state locally and sync automatically upon reconnection.' },
    ],
  },

  'ar-vr-development': {
    title: 'AR/VR Development',
    slug: 'ar-vr-development',
    layoutMode: 'cards',
    tagline: 'Immersive Spatial Experiences',
    description: 'We build mind-bending augmented and virtual reality experiences for marketing, training, and gaming using Unity, Unreal Engine, and WebXR.',
    heroImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80',
    videoId: 'JMUxmLyrhSk',
    features: [
      { title: 'Virtual Tours', description: 'Photorealistic 3D environments for real estate and hospitality.', icon: '🕶️' },
      { title: 'Training Simulators', description: 'Safe, repeatable VR environments for medical and industrial training.', icon: '🥽' },
      { title: 'WebAR Marketing', description: 'App-less augmented reality experiences directly in the mobile browser.', icon: '📱' },
    ],
    technologies: [
      { name: 'Unity', color: '#000000' }, { name: 'Unreal', color: '#313131' },
      { name: 'WebXR', color: '#2496ED' }, { name: 'ARKit/ARCore', color: '#FA7343' },
    ],
    process: [
      { step: '01', title: 'Storyboarding', description: 'Mapping spatial interactions.' },
      { step: '02', title: '3D Modeling', description: 'Asset creation.' },
      { step: '03', title: 'Development', description: 'Engine programming.' },
      { step: '04', title: 'Optimization', description: 'Ensuring 90+ FPS.' },
    ],
    stats: [
      { value: '3x', label: 'Engagement Increase' },
      { value: '120FPS', label: 'Performance' },
      { value: '50+', label: 'Spatial Apps' },
    ],
    useCases: ['Retail Try-Ons', 'Medical Sims', 'Automotive Showrooms'],
    faq: [
      { q: 'Do users need headsets?', a: 'For VR, yes. For AR, modern smartphones are incredibly capable.' },
    ],
  },

  'digital-marketing': {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    layoutMode: 'cinematic',
    tagline: 'Growth Accelerated',
    description: 'Data-driven marketing campaigns focusing exclusively on ROI. We combine performance media buying, lifecycle email marketing, and conversion rate optimization (CRO) to scale your user base aggressively.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    videoId: 'Tn6-PIqc4UM',
    features: [
      { title: 'Performance Media', description: 'ROAS-focused campaigns across Meta, Google, TikTok, and LinkedIn.', icon: '📈' },
      { title: 'CRO', description: 'Multivariate testing of landing pages to squeeze maximum conversions from existing traffic.', icon: '🧪' },
      { title: 'Lifecycle Marketing', description: 'Complex email and SMS automations to increase Customer Lifetime Value (LTV).', icon: '🔁' },
    ],
    technologies: [
      { name: 'Google Ads', color: '#4285F4' }, { name: 'Meta Ads', color: '#0668E1' },
      { name: 'Klaviyo', color: '#24E1B3' }, { name: 'HubSpot', color: '#FF7A59' },
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Pixel and tracking setup.' },
      { step: '02', title: 'Creative', description: 'Ad copy and asset generation.' },
      { step: '03', title: 'Launch', description: 'Campaign deployment.' },
      { step: '04', title: 'Scale', description: 'Budget optimization.' },
    ],
    stats: [
      { value: '4.5x', label: 'Avg ROAS' },
      { value: '$20M+', label: 'Ad Spend Managed' },
      { value: '-40%', label: 'Avg CPA Reduction' },
    ],
    useCases: ['E-Commerce Sales', 'B2B Lead Gen', 'App Installs'],
    faq: [
      { q: 'What is the minimum budget?', a: 'We typically require a minimum $10k/mo spend to gather statistically significant data.' },
    ],
  },

  'technical-seo': {
    title: 'Technical SEO',
    slug: 'technical-seo',
    layoutMode: 'grid',
    tagline: 'Dominate Organic Search',
    description: 'We dive deep under the hood of your web architecture to ensure search engines can effortlessly crawl, render, and index your content. Speed and structure are the new kings of organic growth.',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80',
    videoId: 'qYZF6oIZtfc',
    features: [
      { title: 'Core Web Vitals', description: 'We rewrite frontend code to guarantee green Lighthouse scores across mobile and desktop.', icon: '⚡' },
      { title: 'Programmatic SEO', description: 'Generating thousands of dynamic, perfectly optimized landing pages (like we did for this site!).', icon: '🤖' },
      { title: 'Schema Markup', description: 'Advanced JSON-LD deployment to secure rich snippets in Google search results.', icon: '📋' },
    ],
    technologies: [
      { name: 'Ahrefs', color: '#FF7B00' }, { name: 'Screaming Frog', color: '#56B847' },
      { name: 'Next.js', color: '#000000' }, { name: 'Google Search Console', color: '#4285F4' },
    ],
    process: [
      { step: '01', title: 'Crawl', description: 'Deep site architecture review.' },
      { step: '02', title: 'Fixes', description: 'Resolving 404s and canonicals.' },
      { step: '03', title: 'Speed', description: 'Asset and code optimization.' },
      { step: '04', title: 'Scale', description: 'Programmatic expansion.' },
    ],
    stats: [
      { value: '300%', label: 'Traffic Increase' },
      { value: '100', label: 'Lighthouse Score' },
      { value: 'Page 1', label: 'Rankings' },
    ],
    useCases: ['Marketplaces', 'SaaS Content', 'News Portals'],
    faq: [
      { q: 'How long until we see results?', a: 'Technical changes often show impact within a few weeks, though algorithmic trust takes months.' },
    ],
  },
  
  'content-strategy': {
    title: 'Content Strategy',
    slug: 'content-strategy',
    layoutMode: 'split',
    tagline: 'Words That Drive Action',
    description: 'Creating high-authority content ecosystems. From deep-dive technical whitepapers for B2B enterprises to viral short-form video scripts for consumer brands.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    videoId: 'aircAruvnKk',
    features: [
      { title: 'Authority Blogging', description: 'Long-form, heavily researched content designed to earn backlinks naturally.', icon: '✍️' },
      { title: 'Copywriting', description: 'Direct-response conversion copy for landing pages and emails.', icon: '🎯' },
      { title: 'Video Scripts', description: 'Engaging, hook-driven writing for YouTube and TikTok.', icon: '🎬' },
    ],
    technologies: [
      { name: 'Figma', color: '#F24E1E' }, { name: 'Clearscope', color: '#2752E7' },
      { name: 'Grammarly', color: '#15C39A' }, { name: 'Notion', color: '#000000' },
    ],
    process: [
      { step: '01', title: 'Research', description: 'Intent analysis.' },
      { step: '02', title: 'Outline', description: 'Structural approval.' },
      { step: '03', title: 'Draft', description: 'Writing and editing.' },
      { step: '04', title: 'Publish', description: 'Distribution strategy.' },
    ],
    stats: [
      { value: '10K+', label: 'Articles Written' },
      { value: '50M+', label: 'Words Published' },
      { value: '25%', label: 'Conversion Lift' },
    ],
    useCases: ['B2B Whitepapers', 'E-commerce Blogs', 'SaaS Onboarding'],
    faq: [
      { q: 'Do you use AI?', a: 'As a research tool, yes. But 100% of final deliverables are human-edited and fact-checked.' },
    ],
  }
}

export function getServiceBySlug(slug: string) {
  return servicesData[slug] || null
}

export function getAllServiceSlugs() {
  return Object.keys(servicesData)
}
