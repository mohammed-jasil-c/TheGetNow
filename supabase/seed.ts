// TheGetNow - Enterprise Seed Data Generator (1,040+ Pages)
// Run: npx tsx --env-file=.env.local supabase/seed.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// ─── Design Tokens ───
const layouts = ['cinematic','split','magazine','dashboard','showcase','timeline','interactive','comparison','landing','documentation'] as const
const gradients = [
  'from-violet-600 to-indigo-900','from-emerald-500 to-teal-900','from-rose-500 to-pink-900',
  'from-amber-500 to-orange-900','from-cyan-500 to-blue-900','from-fuchsia-500 to-purple-900',
  'from-lime-500 to-green-900','from-sky-500 to-indigo-800','from-red-500 to-rose-900',
  'from-teal-400 to-cyan-900'
]
const accents = ['#7c3aed','#10b981','#f43f5e','#f59e0b','#06b6d4','#d946ef','#84cc16','#0ea5e9','#ef4444','#14b8a6']
const icons = ['Zap','Globe','Shield','Cpu','Code','Layers','Rocket','Target','TrendingUp','Award','Star','Heart','Database','Cloud','Lock','Smartphone','Monitor','Server','Wifi','BarChart']

const heroImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop',
]

interface PageData {
  slug: string; title: string; subtitle: string; description: string;
  category: string; layout_template: string; hero_gradient: string;
  accent_color: string; icon: string; featured_image: string; published: boolean;
  meta_title: string; meta_description: string; content_json: object;
}

function pick<T>(arr: readonly T[] | T[], i: number): T { return arr[i % arr.length] }

// ═══════════════════════════════════════════════════════════════
// CATEGORY GENERATORS — Each produces an array of PageData
// Total target: 1,040+ pages
// ═══════════════════════════════════════════════════════════════

const categories: Record<string, () => PageData[]> = {

  // ── SERVICES (50 pages) ──────────────────────────────────────
  services: () => {
    const items = [
      'Web Development','Mobile App Development','UI UX Design','Cloud Computing','DevOps Services',
      'AI Development','Machine Learning Solutions','Blockchain Development','IoT Solutions','Cybersecurity',
      'Data Analytics','API Development','E-Commerce Solutions','CRM Development','ERP Solutions',
      'SaaS Development','Progressive Web Apps','Cross Platform Apps','Backend Development','Frontend Development',
      'Database Management','Quality Assurance','SEO Services','Digital Marketing','Content Management Systems',
      'Payment Integration','Social Media Apps','Video Streaming Solutions','Real Time Chat Apps','AR VR Development',
      'Wearable App Development','Smart TV Apps','Voice Assistant Apps','Chatbot Development','RPA Solutions',
      'Low Code Development','No Code Platforms','Microservices Architecture','Serverless Computing','Edge Computing',
      'Computer Vision','NLP Solutions','Predictive Analytics','Business Intelligence','Digital Transformation',
      'IT Consulting','Staff Augmentation','Dedicated Teams','Project Management','Technical Support'
    ]
    return items.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Enterprise-Grade ${t} Solutions`,
      description: `TheGetNow delivers cutting-edge ${t.toLowerCase()} services that transform businesses. Our expert team of 300+ engineers builds scalable, secure, and performant solutions tailored to your unique requirements across industries worldwide.`,
      category: 'services', layout_template: pick(layouts, i),
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: pick(icons, i), featured_image: pick(heroImages, i), published: true,
      meta_title: `${t} Services | TheGetNow - Enterprise Digital Solutions`,
      meta_description: `Professional ${t.toLowerCase()} services by TheGetNow. We build scalable solutions for enterprises in 50+ countries.`,
      content_json: { intro: `Our ${t.toLowerCase()} expertise spans over a decade of delivering mission-critical solutions.`, approach: 'We follow an agile methodology with continuous delivery and integration.', teamSize: '300+', deliveryModel: 'Agile' }
    }))
  },

  // ── INDUSTRIES (40 pages) ────────────────────────────────────
  industries: () => {
    const items = [
      'Healthcare','Finance','Education','Real Estate','Retail','Manufacturing','Logistics','Travel',
      'Entertainment','Food Delivery','Fitness','Agriculture','Automotive','Energy','Insurance',
      'Legal Tech','Government','Nonprofit','Media','Telecom','Hospitality','Fashion','Sports',
      'Gaming','Pharmacy','Construction','Mining','Aerospace','Defense','Environmental',
      'Recruitment','Wedding Planning','Pet Care','Home Services','Beauty Salon',
      'Event Management','Music Industry','Publishing','Photography','Interior Design'
    ]
    return items.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: `${t} Solutions`, subtitle: `Digital Transformation for the ${t} Industry`,
      description: `Revolutionize the ${t.toLowerCase()} industry with TheGetNow's tailored digital solutions. We understand the unique challenges and regulatory requirements in ${t.toLowerCase()}, delivering platforms that drive measurable results.`,
      category: 'industries', layout_template: pick(layouts, i + 3),
      hero_gradient: pick(gradients, i + 2), accent_color: pick(accents, i + 2),
      icon: pick(icons, i + 5), featured_image: pick(heroImages, i + 1), published: true,
      meta_title: `${t} Industry Solutions | TheGetNow - Digital Innovation`,
      meta_description: `Custom digital solutions for the ${t.toLowerCase()} industry. TheGetNow builds innovative apps, platforms, and AI-driven systems.`,
      content_json: { challenge: `The ${t.toLowerCase()} industry faces disruption from digital-native competitors.`, solution: `Our platform addresses core ${t.toLowerCase()} workflows with intelligent automation.` }
    }))
  },

  // ── TECHNOLOGIES (60 pages) ──────────────────────────────────
  technologies: () => {
    const items = [
      'React','Angular','Vue.js','Next.js','Node.js','Python','Django','Flask','Ruby on Rails','Go',
      'Rust','Swift','Kotlin','Flutter','React Native','TypeScript','GraphQL','PostgreSQL','MongoDB','Redis',
      'Docker','Kubernetes','AWS','Azure','Google Cloud','Firebase','Supabase','Terraform','Jenkins','GitHub Actions',
      'Elasticsearch','RabbitMQ','Kafka','TensorFlow','PyTorch','OpenAI','LangChain','Solidity','Ethereum','Polygon',
      'Solana','IPFS','ThreeJS','WebGL','WebAssembly','Tailwind CSS','Prisma','Drizzle','tRPC','Bun',
      'Deno','Svelte','SvelteKit','Remix','Astro','Nuxt','Nest.js','FastAPI','Spring Boot','Laravel'
    ]
    return items.map((t, i) => ({
      slug: t.toLowerCase().replace(/[\.\s]/g, '-'),
      title: `${t} Development`, subtitle: `Expert ${t} Development & Consulting Services`,
      description: `Leverage the power of ${t} with TheGetNow's expert development team. We build high-performance, production-ready applications using ${t} best practices and modern architecture patterns.`,
      category: 'technologies', layout_template: pick(layouts, i + 5),
      hero_gradient: pick(gradients, i + 4), accent_color: pick(accents, i + 4),
      icon: pick(icons, i + 3), featured_image: pick(heroImages, i + 2), published: true,
      meta_title: `${t} Development Company | TheGetNow - Expert Engineers`,
      meta_description: `Hire expert ${t} developers at TheGetNow. We deliver production-ready solutions with enterprise support.`,
      content_json: { why: `${t} offers unmatched performance and developer experience.`, expertise: `Our team has delivered 100+ projects using ${t}.`, certifications: true }
    }))
  },

  // ── BLOG (300 pages) ─────────────────────────────────────────
  blog: () => {
    const topics = ['AI','Cloud','Mobile','Web','Security','Blockchain','IoT','Data','DevOps','Design','Startup','Enterprise','SaaS','API','Performance','Testing','Scaling','Migration','Architecture','UX']
    const formats = ['How to Build','Complete Guide to','Top 10 Tips for','Understanding','Best Practices for','Future of','Why Choose','Getting Started with','Advanced','Mastering']
    const authors = ['Sarah Chen','James Wilson','Priya Sharma','Alex Morgan','David Kim','Emma Davis','Michael Brown','Lisa Wang','Robert Taylor','Jessica Lee']
    const pages: PageData[] = []
    for (let i = 0; i < 300; i++) {
      const topic = pick(topics, i)
      const format = pick(formats, i)
      const year = 2024 + Math.floor(i / 75)
      const title = `${format} ${topic} in ${year}`
      pages.push({
        slug: `${format.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase()}-${i}`,
        title, subtitle: `Expert insights on ${topic} development and strategy`,
        description: `Discover ${format.toLowerCase()} ${topic.toLowerCase()} with actionable strategies, code examples, and expert analysis from TheGetNow's engineering team.`,
        category: 'blog', layout_template: 'magazine',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i), published: true,
        meta_title: `${title} | TheGetNow Engineering Blog`,
        meta_description: `${title}. Expert insights, practical strategies, and real-world examples from TheGetNow.`,
        content_json: { readTime: `${5 + (i % 15)} min read`, author: pick(authors, i), category: topic, publishDate: `${year}-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}` }
      })
    }
    return pages
  },

  // ── PORTFOLIO / CASE STUDIES (50 pages) ──────────────────────
  portfolio: () => {
    const realProjects = [
      { title: 'EQL Trading Platform', cat: 'Blockchain', result: '$500M+ Daily Volume', desc: 'High-frequency crypto trading platform with real-time order books and institutional-grade liquidity', img: 'https://images.unsplash.com/photo-1639762681485-074b7f4aec1d?q=80&w=800' },
      { title: 'MedConnect Telehealth', cat: 'Mobile', result: '2M+ Patient Sessions', desc: 'HIPAA-compliant telemedicine platform with WebRTC video consultations and EHR integration', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800' },
      { title: 'FinanceFlow Banking', cat: 'Web', result: '$1.2B Processed Daily', desc: 'Digital banking mobile app for one of the largest banks in UAE with biometric authentication', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800' },
      { title: 'RetailMax AI Engine', cat: 'AI/ML', result: '40% Conversion Boost', desc: 'Predictive analytics and personalization engine powering product recommendations for 10M+ users', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800' },
      { title: 'LogiTrac Fleet OS', cat: 'Mobile', result: '10K+ Vehicles Tracked', desc: 'Real-time fleet management system with IoT telemetry, route optimization, and predictive maintenance', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800' },
      { title: 'DecentraLend Protocol', cat: 'Blockchain', result: '$200M TVL', desc: 'Cross-chain DeFi lending protocol with automated liquidation and yield optimization', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800' },
      { title: 'EduRev Learning App', cat: 'Mobile', result: '14M+ Learners', desc: 'Netflix-like e-learning platform with gamified courses, live classes, and adaptive assessments', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800' },
      { title: 'CloudScale Dashboard', cat: 'Web', result: '60% Cost Reduction', desc: 'Multi-cloud infrastructure management platform with automated cost optimization and alerting', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800' },
      { title: 'Artistry NFT Market', cat: 'Design', result: '500K+ NFTs Minted', desc: 'Premium NFT marketplace with lazy minting, royalty enforcement, and cross-chain support', img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800' },
      { title: 'VisionAI Analytics', cat: 'AI/ML', result: '99.2% Accuracy', desc: 'Computer vision pipeline for manufacturing quality control processing 1M+ images daily', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800' },
      { title: 'SwiftDeliver Logistics', cat: 'Mobile', result: '40% Faster Delivery', desc: 'Last-mile delivery platform with AI-driven routing serving 5M+ orders monthly', img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800' },
      { title: 'PropTech VR Tours', cat: 'Design', result: '3x Conversion Rate', desc: 'Virtual reality property tour platform with photorealistic 3D walkthroughs and staging', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800' },
    ]

    const pages: PageData[] = realProjects.map((p, i) => ({
      slug: p.title.toLowerCase().replace(/ /g, '-'),
      title: p.title, subtitle: p.desc, description: p.desc,
      category: 'portfolio', layout_template: 'case-study',
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: pick(icons, i), featured_image: p.img, published: true,
      meta_title: `${p.title} Case Study | TheGetNow Portfolio`,
      meta_description: `Learn how TheGetNow built ${p.title} to achieve ${p.result}.`,
      content_json: { result: p.result, industry: p.cat, tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'] }
    }))

    const clients = ['TechGen','StreamLine','DataPulse','Zenith','Nimbus','Aether','Quantum','Helix','Prism','Nexus']
    const outcomes = ['40% ROI Increase','2x Performance Gain','99.9% Uptime','5M+ Active Users','$50M Revenue','3x Faster Deployment','70% Cost Savings','200% Growth']
    for (let i = realProjects.length; i < 50; i++) {
      const client = pick(clients, i)
      const outcome = pick(outcomes, i)
      pages.push({
        slug: `${client.toLowerCase()}-project-${i}`,
        title: `${client} Digital Ecosystem`, subtitle: `Enterprise transformation platform for ${client}`,
        description: `Delivered a massive-scale digital ecosystem for ${client}, achieving ${outcome}.`,
        category: 'portfolio', layout_template: 'case-study',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i), published: true,
        meta_title: `${client} Project | TheGetNow Portfolio`,
        meta_description: `Case study: How TheGetNow built ${client}'s digital platform achieving ${outcome}.`,
        content_json: { result: outcome, industry: 'Enterprise', tags: ['Next.js', 'PostgreSQL', 'AWS'] }
      })
    }
    return pages
  },

  // ── SOLUTIONS (40 pages) ─────────────────────────────────────
  solutions: () => {
    const items = [
      'Enterprise Resource Planning','Customer Relationship Management','Supply Chain Management','Human Resource Management',
      'Project Management Tools','Business Process Automation','Inventory Management','Fleet Management',
      'Appointment Scheduling','Invoice Management','Payroll System','Asset Tracking',
      'Document Management','Visitor Management','Compliance Management','Risk Assessment',
      'Quality Control','Vendor Management','Contract Management','Expense Tracking',
      'Time Tracking','Employee Onboarding','Customer Support Portal','Knowledge Base Platform',
      'Feedback Collection','Survey Platform','Booking System','Subscription Management',
      'Marketplace Platform','Auction Platform','Crowdfunding Platform','Loyalty Program',
      'Referral System','Affiliate Marketing Platform','Lead Generation','Sales Pipeline',
      'Campaign Management','Email Marketing','Push Notifications','In App Messaging'
    ]
    return items.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Complete ${t} Solution for Modern Enterprises`,
      description: `TheGetNow's ${t.toLowerCase()} solution streamlines operations, reduces costs by up to 40%, and accelerates growth for modern enterprises across all industries.`,
      category: 'solutions', layout_template: pick(layouts, i + 2),
      hero_gradient: pick(gradients, i + 3), accent_color: pick(accents, i + 3),
      icon: pick(icons, i + 7), featured_image: pick(heroImages, i + 3), published: true,
      meta_title: `${t} Software | TheGetNow Enterprise Solutions`,
      meta_description: `Enterprise ${t.toLowerCase()} software by TheGetNow. Streamline operations and drive growth.`,
      content_json: { benefits: ['Reduce costs by 40%','Increase efficiency by 60%','Real-time insights','24/7 support'], pricing: ['Starter','Growth','Enterprise'] }
    }))
  },

  // ── PRODUCTS (50 pages) ──────────────────────────────────────
  products: () => {
    const names = ['DataSync Pro','CloudGuard','AppForge','SmartDash','DevFlow','CodePilot','SecureVault','AnalytiX','PayGate','ChatConnect']
    return Array.from({length: 50}, (_, i) => {
      const n = pick(names, i)
      const version = `${(i % 5) + 1}.0`
      return {
        slug: `${n.toLowerCase().replace(/ /g, '-')}-v${version.replace('.', '-')}`,
        title: `${n} v${version}`, subtitle: `Next-Generation ${n} Platform`,
        description: `${n} is a powerful SaaS platform built by TheGetNow for modern enterprises. Version ${version} introduces AI-powered automation, enhanced security, and seamless integrations.`,
        category: 'products', layout_template: pick(layouts, i + 4),
        hero_gradient: pick(gradients, i + 5), accent_color: pick(accents, i + 5),
        icon: pick(icons, i + 2), featured_image: pick(heroImages, i + 4), published: true,
        meta_title: `${n} v${version} | TheGetNow Products`,
        meta_description: `Discover ${n} v${version} by TheGetNow. Enterprise-grade SaaS platform.`,
        content_json: { version, pricing: ['Free','Pro','Enterprise'], features: ['AI Automation','Real-time Analytics','Custom Workflows'] }
      }
    })
  },

  // ── RESOURCES (100 pages) ────────────────────────────────────
  resources: () => {
    const types = ['Whitepaper','Ebook','Template','Toolkit','Checklist','Webinar Recording','Infographic','Report','Playbook','Framework']
    const topics = ['AI Strategy','Cloud Migration','App Development','Cybersecurity','Data Analytics','Digital Marketing','DevOps','Blockchain','IoT','UX Design']
    const pages: PageData[] = []
    for (let i = 0; i < 100; i++) {
      const type = pick(types, i)
      const topic = pick(topics, i)
      pages.push({
        slug: `${type.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase().replace(/ /g, '-')}-${i}`,
        title: `${topic} ${type}`, subtitle: `Free ${type} Download — Expert ${topic} Insights`,
        description: `Download our comprehensive ${topic.toLowerCase()} ${type.toLowerCase()} and accelerate your digital transformation journey with actionable strategies and frameworks.`,
        category: 'resources', layout_template: 'landing',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i + 5), published: true,
        meta_title: `${topic} ${type} | TheGetNow Resources`,
        meta_description: `Free ${topic.toLowerCase()} ${type.toLowerCase()} by TheGetNow. Download now.`,
        content_json: { type, downloadCount: `${(i * 47 + 123) % 5000 + 500}+`, fileSize: `${2 + (i % 15)} MB` }
      })
    }
    return pages
  },

  // ── GUIDES (50 pages) ────────────────────────────────────────
  guides: () => {
    const subjects = ['React Development','Node.js Backend','Mobile App Design','Cloud Deployment','API Security','Database Optimization','CI CD Pipeline','Microservices','Serverless','AI Integration']
    return Array.from({length: 50}, (_, i) => {
      const s = pick(subjects, i)
      const part = Math.floor(i / 10) + 1
      return {
        slug: `guide-${s.toLowerCase().replace(/ /g, '-')}-part-${part}-${i}`,
        title: `${s} Guide — Part ${part}`, subtitle: `Step-by-Step ${s} Tutorial`,
        description: `Master ${s.toLowerCase()} with our comprehensive guide. Part ${part} covers advanced patterns, best practices, and real-world implementations.`,
        category: 'guides', layout_template: 'documentation',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i + 6), published: true,
        meta_title: `${s} Guide Part ${part} | TheGetNow`,
        meta_description: `Complete ${s.toLowerCase()} guide by TheGetNow experts. Part ${part}.`,
        content_json: { difficulty: ['Beginner','Intermediate','Advanced'][i % 3], steps: 8 + (i % 7), estimatedTime: `${15 + (i % 45)} min` }
      }
    })
  },

  // ── CAREERS (30 pages) ───────────────────────────────────────
  careers: () => {
    const roles = [
      'Frontend Developer','Backend Developer','Full Stack Developer','Mobile Developer','DevOps Engineer',
      'Data Scientist','UI Designer','UX Researcher','Product Manager','QA Engineer',
      'Cloud Architect','Security Engineer','ML Engineer','Blockchain Developer','Technical Writer',
      'Scrum Master','Tech Lead','CTO','VP Engineering','Engineering Manager',
      'React Developer','Angular Developer','Python Developer','Go Developer','Rust Developer',
      'iOS Developer','Android Developer','Flutter Developer','Data Engineer','Solutions Architect'
    ]
    return roles.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Join TheGetNow as ${t} — Remote Friendly`,
      description: `We're looking for a talented ${t.toLowerCase()} to join our growing team of 300+ engineers at TheGetNow. Work on cutting-edge projects for Fortune 500 clients.`,
      category: 'careers', layout_template: 'split',
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: pick(icons, i), featured_image: pick(heroImages, i + 7), published: true,
      meta_title: `${t} Jobs | TheGetNow Careers — Apply Now`,
      meta_description: `Apply for ${t.toLowerCase()} position at TheGetNow. Remote-friendly, competitive salary.`,
      content_json: { location: ['Remote','Hybrid - NYC','Hybrid - Dubai','On-site - London'][i % 4], experience: `${2 + (i % 8)}+ years`, salary: 'Competitive + Equity', benefits: ['Health Insurance','401k Match','Unlimited PTO','Learning Budget'] }
    }))
  },

  // ── LOCATIONS (50 pages) ─────────────────────────────────────
  locations: () => {
    const cities = [
      'New York','San Francisco','London','Dubai','Singapore','Tokyo','Sydney','Berlin','Toronto','Mumbai',
      'Paris','Amsterdam','Stockholm','Seoul','Shanghai','São Paulo','Mexico City','Nairobi','Cape Town','Jakarta',
      'Bangkok','Istanbul','Warsaw','Dublin','Zurich','Milan','Madrid','Vienna','Oslo','Helsinki',
      'Bangalore','Hyderabad','Chennai','Pune','Kolkata','Delhi','Ahmedabad','Jaipur','Kochi','Chandigarh',
      'Los Angeles','Chicago','Seattle','Boston','Austin','Denver','Miami','Atlanta','Dallas','Houston'
    ]
    return cities.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-').replace(/ã/g, 'a'),
      title: `TheGetNow ${t}`, subtitle: `Digital Solutions Partner in ${t}`,
      description: `TheGetNow's ${t} office serves clients across the region with world-class digital solutions, powered by local talent and global expertise.`,
      category: 'locations', layout_template: pick(layouts, i + 6),
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: 'Globe', featured_image: pick(heroImages, i + 8), published: true,
      meta_title: `TheGetNow ${t} | Digital Solutions & App Development`,
      meta_description: `TheGetNow ${t} office. Local digital solutions experts serving businesses in ${t} and surrounding regions.`,
      content_json: { timezone: `GMT${i % 12 > 6 ? '+' : '-'}${i % 12}`, team: `${5 + (i % 20)}+ experts`, services: ['Web','Mobile','AI','Cloud'] }
    }))
  },

  // ── COMPARISONS (30 pages) ───────────────────────────────────
  comparisons: () => {
    const pairs = [
      'React vs Angular','Next.js vs Nuxt','Flutter vs React Native','AWS vs Azure','PostgreSQL vs MySQL',
      'Docker vs Kubernetes','Python vs Node.js','GraphQL vs REST','MongoDB vs PostgreSQL','TypeScript vs JavaScript',
      'Vue vs Svelte','Django vs FastAPI','Firebase vs Supabase','Vercel vs Netlify','Tailwind vs Bootstrap',
      'Redis vs Memcached','Kafka vs RabbitMQ','Go vs Rust','Swift vs Kotlin','Prisma vs Drizzle',
      'Remix vs Next.js','Deno vs Bun','Jest vs Vitest','Cypress vs Playwright','GitHub vs GitLab',
      'Figma vs Sketch','Notion vs Confluence','Slack vs Teams','Linear vs Jira','Stripe vs PayPal'
    ]
    return pairs.map((p, i) => ({
      slug: p.toLowerCase().replace(/ /g, '-'),
      title: p, subtitle: `In-Depth Comparison: Which Should You Choose in ${2025}?`,
      description: `Compare ${p} side-by-side with benchmarks, real-world performance data, and expert analysis from TheGetNow's engineering team.`,
      category: 'comparisons', layout_template: 'comparison',
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: pick(icons, i), featured_image: pick(heroImages, i + 3), published: true,
      meta_title: `${p} Comparison ${2025} | TheGetNow Tech Analysis`,
      meta_description: `Detailed ${p.toLowerCase()} comparison with benchmarks and expert analysis by TheGetNow.`,
      content_json: { verdict: 'Both are excellent choices depending on your use case, team size, and performance requirements.', lastUpdated: '2025-03' }
    }))
  },

  // ── WEBINARS (30 pages) ──────────────────────────────────────
  webinars: () => {
    const titles = [
      'Building Scalable Apps','AI for Business','Cloud Migration Strategies','DevOps Best Practices','Mobile First Design',
      'Security in 2025','Data Driven Decisions','Blockchain Essentials','IoT Architecture','UX Research Methods',
      'React Advanced Patterns','Node.js Performance','API Design Principles','Database Scaling','CI CD Automation',
      'Microservices Patterns','Serverless Architecture','Edge Computing','WebAssembly Future','Design Systems',
      'Startup Tech Stack','Enterprise AI','Cloud Cost Optimization','Zero Trust Security','GraphQL at Scale',
      'Flutter Production Apps','Kubernetes in Practice','Data Lake Architecture','ML Ops Pipeline','Web Performance'
    ]
    return titles.map((t, i) => ({
      slug: `webinar-${t.toLowerCase().replace(/ /g, '-')}`,
      title: `Webinar: ${t}`, subtitle: `Free Expert-Led Online Event — Register Now`,
      description: `Join our expert-led webinar on ${t.toLowerCase()}. Learn from TheGetNow's senior engineers with hands-on demos and Q&A sessions.`,
      category: 'webinars', layout_template: 'landing',
      hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
      icon: pick(icons, i), featured_image: pick(heroImages, i + 5), published: true,
      meta_title: `${t} Webinar | TheGetNow — Free Event`,
      meta_description: `Free webinar on ${t.toLowerCase()} by TheGetNow. Register for expert insights and live demos.`,
      content_json: { duration: '60 min', speakers: 2 + (i % 3), attendees: `${200 + (i * 37) % 800}+`, recording: i < 15 }
    }))
  },

  // ── FAQ (80 pages) ───────────────────────────────────────────
  faq: () => {
    const cats = ['General','Technical','Pricing','Support','Security','Integration','Mobile','Cloud','AI','Data']
    const pages: PageData[] = []
    for (let i = 0; i < 80; i++) {
      const c = pick(cats, i)
      const num = Math.floor(i / cats.length) + 1
      pages.push({
        slug: `faq-${c.toLowerCase()}-${num}-${i}`,
        title: `${c} FAQ Collection #${num}`, subtitle: `Frequently Asked Questions — ${c} Category`,
        description: `Find comprehensive answers to common ${c.toLowerCase()} questions about TheGetNow's services, processes, and technology solutions.`,
        category: 'faq', layout_template: 'interactive',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i + 6), published: true,
        meta_title: `${c} FAQ | TheGetNow — Frequently Asked Questions`,
        meta_description: `${c} frequently asked questions about TheGetNow's digital services and solutions.`,
        content_json: { topic: c, questionCount: 8 + (i % 12) }
      })
    }
    return pages
  },

  // ── TEAM (30 pages) ──────────────────────────────────────────
  team: () => {
    const members = [
      'Sarah Chen CEO','James Wilson CTO','Priya Sharma VP Engineering','Alex Morgan Design Lead','David Kim ML Lead',
      'Emma Davis Product Manager','Michael Brown DevOps Lead','Lisa Wang Frontend Lead','Robert Taylor Backend Lead','Jessica Lee UX Lead',
      'Chris Martin Cloud Architect','Anna Johnson QA Lead','Thomas White Security Lead','Maria Garcia Mobile Lead','Daniel Harris Data Lead',
      'Sophie Brown AI Researcher','Ryan Clark Blockchain Lead','Olivia Wilson IoT Lead','William Moore Solutions Architect','Emily Davis Technical Writer',
      'Kevin Zhang Full Stack Lead','Rachel Green Marketing Lead','Andrew Brown Sales Director','Laura White HR Director','Nathan Black Finance Lead',
      'Grace Kim Delivery Manager','Peter Hall Client Success','Diana Cruz Creative Director','Mark Stone Operations Lead','Julia Fox Partnerships Lead'
    ]
    return members.map((m, i) => {
      const parts = m.split(' ')
      const name = parts.slice(0, 2).join(' ')
      const role = parts.slice(2).join(' ')
      return {
        slug: name.toLowerCase().replace(/ /g, '-'),
        title: name, subtitle: role, description: `${name} is the ${role} at TheGetNow, leading digital transformation initiatives for Fortune 500 clients worldwide.`,
        category: 'team', layout_template: 'showcase',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: 'Award', featured_image: pick(heroImages, i + 7), published: true,
        meta_title: `${name} - ${role} | TheGetNow Team`,
        meta_description: `Meet ${name}, ${role} at TheGetNow. Leading digital innovation.`,
        content_json: { role, yearsExp: 5 + (i % 15), specialties: ['Leadership', 'Strategy', 'Innovation'] }
      }
    })
  },

  // ── CASE STUDIES by Industry (100 pages) ─────────────────────
  'case-studies': () => {
    const industries = ['Healthcare','Fintech','EdTech','E-Commerce','Logistics','Real Estate','SaaS','Gaming','Travel','Media']
    const types = ['Platform Build','Digital Transformation','Cloud Migration','AI Integration','Mobile Launch','Redesign','Scale-Up','Security Overhaul','Data Pipeline','Automation']
    const pages: PageData[] = []
    for (let i = 0; i < 100; i++) {
      const ind = pick(industries, i)
      const type = pick(types, i)
      const projectName = `${ind} ${type} — Client ${i + 1}`
      pages.push({
        slug: `${ind.toLowerCase().replace(/ /g, '-')}-${type.toLowerCase().replace(/ /g, '-')}-${i}`,
        title: projectName, subtitle: `How we delivered ${type.toLowerCase()} for a leading ${ind.toLowerCase()} company`,
        description: `In-depth case study of our ${type.toLowerCase()} engagement with a ${ind.toLowerCase()} enterprise. From discovery to deployment, see how TheGetNow drives measurable outcomes.`,
        category: 'case-studies', layout_template: 'case-study',
        hero_gradient: pick(gradients, i), accent_color: pick(accents, i),
        icon: pick(icons, i), featured_image: pick(heroImages, i), published: true,
        meta_title: `${ind} ${type} Case Study | TheGetNow`,
        meta_description: `Read how TheGetNow delivered ${type.toLowerCase()} for a ${ind.toLowerCase()} enterprise.`,
        content_json: { result: [`40% Cost Reduction`, `3x Revenue Growth`, `99.9% Uptime`, `2M+ Users`, `$10M Saved`][i % 5], industry: ind, type, duration: `${3 + (i % 9)} months` }
      })
    }
    return pages
  },
}

// ─── Related Data Generators ───
function genFeatures(pageId: string, category: string) {
  const featureSets: Record<string, string[][]> = {
    services: [['Scalable Architecture','Systems built for exponential growth'],['24/7 Support','Round-the-clock engineering assistance'],['Agile Delivery','Iterative development with bi-weekly demos'],['Custom Solutions','Tailored to your unique business needs'],['Security First','Enterprise-grade encryption and compliance'],['Cloud Native','Modern infrastructure on AWS/GCP/Azure']],
    industries: [['Domain Expertise','Deep understanding of industry regulations'],['Compliance Ready','Built-in regulatory adherence'],['Fast Deployment','Quick time to market with CI/CD'],['Integration Ready','Works seamlessly with your existing stack']],
    technologies: [['Expert Team','Certified developers with 5+ years experience'],['Best Practices','Industry-standard patterns and architecture'],['Performance','Optimized for speed and efficiency'],['Testing','Comprehensive QA with 95%+ coverage']],
    default: [['Innovation','Cutting-edge solutions using latest technology'],['Reliability','99.9% uptime guarantee'],['Support','Dedicated engineering team'],['Quality','Premium deliverables with code reviews']]
  }
  const set = featureSets[category] || featureSets.default
  return set.map(([title, description], i) => ({
    page_id: pageId, title, description, icon: pick(icons, i), order_index: i
  }))
}

function genStats(pageId: string) {
  const base = Math.floor(Math.random() * 500)
  return [
    { page_id: pageId, label: 'Projects Delivered', value: `${500 + base}`, suffix: '+', order_index: 0 },
    { page_id: pageId, label: 'Happy Clients', value: `${200 + Math.floor(base / 2)}`, suffix: '+', order_index: 1 },
    { page_id: pageId, label: 'Team Members', value: `${50 + (base % 150)}`, suffix: '+', order_index: 2 },
    { page_id: pageId, label: 'Countries', value: `${20 + (base % 30)}`, suffix: '+', order_index: 3 },
  ]
}

function genFaqs(pageId: string, title: string) {
  return [
    { page_id: pageId, question: `What is ${title}?`, answer: `${title} is a comprehensive solution offered by TheGetNow that addresses modern business challenges with cutting-edge technology.`, order_index: 0 },
    { page_id: pageId, question: `How long does ${title} take to implement?`, answer: `Typically 4-12 weeks depending on complexity, customization needs, and integration requirements.`, order_index: 1 },
    { page_id: pageId, question: `What is the pricing for ${title}?`, answer: `We offer flexible pricing models including fixed-price, time & materials, and dedicated team engagements. Contact us for a custom quote.`, order_index: 2 },
  ]
}

function genTestimonials(pageId: string) {
  const testimonials = [
    { author: 'John Smith', role: 'CEO', company: 'TechStartup Inc', quote: 'TheGetNow transformed our entire digital presence. Their engineering quality is exceptional.' },
    { author: 'Emily Johnson', role: 'CTO', company: 'FinanceFlow', quote: 'Outstanding technical expertise and delivery quality. They shipped ahead of schedule.' },
  ]
  return testimonials.map((t, i) => ({ ...t, page_id: pageId, rating: 5, order_index: i }))
}

// ─── Main Seed Function ───
async function seed() {
  console.log('🚀 TheGetNow Enterprise Seed — Generating 1,040+ pages...\n')
  
  let totalPages = 0
  let totalErrors = 0

  for (const [cat, generator] of Object.entries(categories)) {
    const pages = generator()
    console.log(`📦 Seeding ${pages.length} ${cat} pages...`)
    
    // Insert in batches of 50
    for (let i = 0; i < pages.length; i += 50) {
      const batch = pages.slice(i, i + 50)
      const { data, error } = await supabase
        .from('pages')
        .upsert(batch, { onConflict: 'category,slug' })
        .select('id, slug, category, title')
      
      if (error) {
        console.error(`  ❌ Batch ${Math.floor(i/50)+1} error: ${error.message}`)
        totalErrors++
        continue
      }
      if (!data) continue

      // Insert related data for first 3 per batch (keeps seed fast while providing rich content)
      for (let j = 0; j < Math.min(3, data.length); j++) {
        const p = data[j]
        const features = genFeatures(p.id, p.category)
        const stats = genStats(p.id)
        const faqs = genFaqs(p.id, p.title)
        const testimonials = genTestimonials(p.id)
        
        await supabase.from('page_features').delete().eq('page_id', p.id)
        await supabase.from('page_stats').delete().eq('page_id', p.id)
        await supabase.from('page_faqs').delete().eq('page_id', p.id)
        await supabase.from('page_testimonials').delete().eq('page_id', p.id)
        
        await supabase.from('page_features').insert(features)
        await supabase.from('page_stats').insert(stats)
        await supabase.from('page_faqs').insert(faqs)
        await supabase.from('page_testimonials').insert(testimonials)
      }
      
      totalPages += data.length
      process.stdout.write(`  ✓ ${Math.min(i + 50, pages.length)}/${pages.length} inserted\r`)
    }
    console.log(`  ✅ ${cat} complete`)
  }
  
  console.log(`\n${'═'.repeat(50)}`)
  console.log(`✅ TOTAL: ${totalPages} pages seeded successfully!`)
  if (totalErrors > 0) console.log(`⚠️  ${totalErrors} batch errors occurred`)
  console.log(`${'═'.repeat(50)}`)

  // Verify counts
  const { count } = await supabase.from('pages').select('*', { count: 'exact', head: true })
  console.log(`\n📊 Database now contains ${count} total pages`)
  
  // Category breakdown
  const catCounts: Record<string, number> = {}
  for (const cat of Object.keys(categories)) {
    const { count: c } = await supabase.from('pages').select('*', { count: 'exact', head: true }).eq('category', cat)
    catCounts[cat] = c || 0
  }
  console.log('\n📋 Breakdown by category:')
  for (const [cat, cnt] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${cat.padEnd(15)} ${cnt} pages`)
  }
}

seed().catch(console.error)
