import type { Page, FullPage } from './types'

// ─── Content Data Arrays ───
const layouts = ['cinematic','split','magazine','dashboard','showcase','timeline','interactive','comparison','landing','documentation'] as const
const gradients = [
  'from-violet-600 to-indigo-900','from-emerald-500 to-teal-900','from-rose-500 to-pink-900',
  'from-amber-500 to-orange-900','from-cyan-500 to-blue-900','from-fuchsia-500 to-purple-900',
  'from-lime-500 to-green-900','from-sky-500 to-indigo-800','from-red-500 to-rose-900',
  'from-teal-400 to-cyan-900'
]
const accents = ['#7c3aed','#10b981','#f43f5e','#f59e0b','#06b6d4','#d946ef','#84cc16','#0ea5e9','#ef4444','#14b8a6']
const icons = ['Zap','Globe','Shield','Cpu','Code','Layers','Rocket','Target','TrendingUp','Award','Star','Heart','Database','Cloud','Lock','Smartphone','Monitor','Server','Wifi','BarChart']

function pickIdx(len: number): number { return Math.floor(Math.random() * len) }

// Local memory cache for all pages
let allPagesCache: FullPage[] | null = null

function generateAllPages(): FullPage[] {
  if (allPagesCache) return allPagesCache;

  const pages: FullPage[] = []
  let globalId = 1

  const addPages = (category: string, generateItems: () => any[]) => {
    const items = generateItems()
    items.forEach((item, i) => {
      const pageId = `page-${globalId++}`
      
      // Auto-generate features, stats, faqs
      const features = [
        { id: `f1-${pageId}`, page_id: pageId, title: 'Scalable Architecture', description: 'Built for enterprise growth.', icon: 'Layers', order_index: 0 },
        { id: `f2-${pageId}`, page_id: pageId, title: '24/7 Support', description: 'Round the clock monitoring.', icon: 'Shield', order_index: 1 },
        { id: `f3-${pageId}`, page_id: pageId, title: 'Custom Integration', description: 'Seamlessly works with your stack.', icon: 'Code', order_index: 2 },
      ]
      
      const stats = [
        { id: `s1-${pageId}`, page_id: pageId, label: 'Projects', value: `${500 + pickIdx(500)}`, suffix: '+', order_index: 0 },
        { id: `s2-${pageId}`, page_id: pageId, label: 'Success Rate', value: `99`, suffix: '%', order_index: 1 },
        { id: `s3-${pageId}`, page_id: pageId, label: 'Happy Clients', value: `${200 + pickIdx(300)}`, suffix: '+', order_index: 2 },
      ]

      const faqs = [
        { id: `faq1-${pageId}`, page_id: pageId, question: `What is ${item.title}?`, answer: `${item.title} is a comprehensive solution tailored to modern enterprise needs.`, order_index: 0 },
        { id: `faq2-${pageId}`, page_id: pageId, question: `How long does implementation take?`, answer: `Implementation typically ranges from 4 to 12 weeks based on complexity.`, order_index: 1 },
      ]

      const testimonials = [
        { id: `t1-${pageId}`, page_id: pageId, author: 'Jane Doe', role: 'CTO', company: 'TechCorp', quote: `TheGetNow completely revolutionized our approach to ${item.title}.`, rating: 5, order_index: 0 }
      ]

      pages.push({
        id: pageId,
        ...item,
        featured_image: null,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        page_features: features,
        page_stats: stats,
        page_faqs: faqs,
        page_testimonials: testimonials
      })
    })
  }

  // 1. Services (~50)
  addPages('services', () => [
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
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/ /g, '-'),
    title: t, subtitle: `Enterprise-Grade ${t} Solutions`,
    description: `TheGetNow delivers cutting-edge ${t.toLowerCase()} services that transform businesses. Our expert team builds scalable, secure, and performant solutions tailored to your unique requirements.`,
    category: 'services', layout_template: layouts[i % layouts.length],
    hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
    icon: icons[i % icons.length],
    meta_title: `${t} Services | TheGetNow - Digital Solutions`,
    meta_description: `Professional ${t.toLowerCase()} services by TheGetNow. We build scalable solutions for enterprises worldwide.`,
    content_json: {}
  })))

  // 2. Industries (~40)
  addPages('industries', () => [
    'Healthcare','Finance','Education','Real Estate','Retail','Manufacturing','Logistics','Travel',
    'Entertainment','Food Delivery','Fitness','Agriculture','Automotive','Energy','Insurance',
    'Legal Tech','Government','Nonprofit','Media','Telecom','Hospitality','Fashion','Sports',
    'Gaming','Pharmacy','Construction','Mining','Aerospace','Defense','Environmental',
    'Recruitment','Wedding Planning','Pet Care','Home Services','Beauty Salon',
    'Event Management','Music Industry','Publishing','Photography','Interior Design'
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/ /g, '-'),
    title: `${t} Solutions`, subtitle: `Digital Transformation for ${t}`,
    description: `Revolutionize the ${t.toLowerCase()} industry with TheGetNow's tailored digital solutions. We understand the unique challenges and opportunities in ${t.toLowerCase()}.`,
    category: 'industries', layout_template: layouts[(i + 3) % layouts.length],
    hero_gradient: gradients[(i + 2) % gradients.length], accent_color: accents[(i + 2) % accents.length],
    icon: icons[(i + 5) % icons.length],
    meta_title: `${t} Industry Solutions | TheGetNow`,
    meta_description: `Custom digital solutions for the ${t.toLowerCase()} industry.`,
    content_json: {}
  })))

  // 3. Technologies (~60)
  addPages('technologies', () => [
    'React','Angular','Vue.js','Next.js','Node.js','Python','Django','Flask','Ruby on Rails','Go',
    'Rust','Swift','Kotlin','Flutter','React Native','TypeScript','GraphQL','PostgreSQL','MongoDB','Redis',
    'Docker','Kubernetes','AWS','Azure','Google Cloud','Firebase','Supabase','Terraform','Jenkins','GitHub Actions',
    'Elasticsearch','RabbitMQ','Kafka','TensorFlow','PyTorch','OpenAI','LangChain','Solidity','Ethereum','Polygon',
    'Solana','IPFS','ThreeJS','WebGL','WebAssembly','Tailwind CSS','Prisma','Drizzle','tRPC','Bun',
    'Deno','Svelte','SvelteKit','Remix','Astro','Nuxt','Nest.js','FastAPI','Spring Boot','Laravel'
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/[\.\s]/g, '-'),
    title: `${t} Development`, subtitle: `Expert ${t} Development Services`,
    description: `Leverage the power of ${t} with TheGetNow's expert development team.`,
    category: 'technologies', layout_template: layouts[(i + 5) % layouts.length],
    hero_gradient: gradients[(i + 4) % gradients.length], accent_color: accents[(i + 4) % accents.length],
    icon: icons[(i + 3) % icons.length],
    meta_title: `${t} Development Company | TheGetNow`,
    meta_description: `Hire expert ${t} developers at TheGetNow.`,
    content_json: {}
  })))

  // 4. Blog (300)
  addPages('blog', () => {
    const topics = ['AI','Cloud','Mobile','Web','Security','Blockchain','IoT','Data','DevOps','Design','Startup','Enterprise','SaaS','API','Performance','Testing','Scaling','Migration','Architecture','UX']
    const formats = ['How to Build','Complete Guide to','Top 10 Tips for','Understanding','Best Practices for','Future of','Why Choose','Getting Started with','Advanced','Mastering']
    const items = []
    for (let i = 0; i < 300; i++) {
      const topic = topics[i % topics.length]
      const format = formats[i % formats.length]
      const title = `${format} ${topic} in ${2025 + Math.floor(i / 60)}`
      items.push({
        slug: `${format.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase()}-${i}`,
        title, subtitle: `Expert insights on ${topic}`,
        description: `Discover ${format.toLowerCase()} ${topic.toLowerCase()} with actionable strategies from TheGetNow's expert team.`,
        category: 'blog', layout_template: 'magazine',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length],
        meta_title: `${title} | TheGetNow Blog`,
        meta_description: `${title}. Expert insights and practical strategies.`,
        content_json: {}
      })
    }
    return items
  })

  // 5. Case Studies (100)
  addPages('case-studies', () => {
    const clients = ['TechCorp','FinanceHub','HealthPlus','EduLearn','RetailMax','LogiTrack','TravelEase','FoodFast','FitLife','AgriTech']
    const outcomes = ['50% Revenue Growth','3x User Engagement','90% Faster Deployment','$2M Cost Savings','10x Scalability']
    const items = []
    for (let i = 0; i < 100; i++) {
        const client = clients[i % clients.length]
        const outcome = outcomes[i % outcomes.length]
        items.push({
            slug: `${client.toLowerCase()}-case-study-${i}`,
            title: `${client}: ${outcome}`, subtitle: `How we helped ${client} achieve results`,
            description: `Learn how TheGetNow partnered with ${client} to deliver ${outcome.toLowerCase()} through innovative digital solutions.`,
            category: 'case-studies', layout_template: layouts[(i + 7) % layouts.length],
            hero_gradient: gradients[(i + 6) % gradients.length], accent_color: accents[(i + 6) % accents.length],
            icon: icons[(i + 8) % icons.length],
            meta_title: `${client} Case Study | TheGetNow`,
            meta_description: `${client} achieved ${outcome.toLowerCase()} with TheGetNow.`,
            content_json: {}
        })
    }
    return items
  })

  // 6. Solutions (~40)
  addPages('solutions', () => [
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
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/ /g, '-'),
    title: t, subtitle: `Complete ${t} Solution`,
    description: `TheGetNow's ${t.toLowerCase()} solution streamlines operations, reduces costs, and accelerates growth for modern enterprises.`,
    category: 'solutions', layout_template: layouts[(i + 2) % layouts.length],
    hero_gradient: gradients[(i + 3) % gradients.length], accent_color: accents[(i + 3) % accents.length],
    icon: icons[(i + 7) % icons.length],
    meta_title: `${t} Software | TheGetNow Solutions`,
    meta_description: `Enterprise ${t.toLowerCase()} software by TheGetNow.`,
    content_json: {}
  })))

  // 7. Products (50)
  addPages('products', () => {
    return Array.from({length: 50}, (_, i) => {
      const names = ['DataSync Pro','CloudGuard','AppForge','SmartDash','DevFlow','CodePilot','SecureVault','AnalytiX','PayGate','ChatConnect']
      const n = names[i % names.length]
      return {
        slug: `${n.toLowerCase().replace(/ /g, '-')}-${i}`, title: `${n} v${(i % 5) + 1}.0`,
        subtitle: `Next-Gen ${n}`, description: `${n} is a powerful platform built by TheGetNow for modern enterprises.`,
        category: 'products', layout_template: layouts[(i + 4) % layouts.length],
        hero_gradient: gradients[(i + 5) % gradients.length], accent_color: accents[(i + 5) % accents.length],
        icon: icons[(i + 2) % icons.length], meta_title: `${n} | TheGetNow Products`,
        meta_description: `Discover ${n} by TheGetNow.`,
        content_json: {}
      }
    })
  })

  // 8. Resources (100)
  addPages('resources', () => {
    const types = ['Whitepaper','Ebook','Template','Toolkit','Checklist','Webinar Recording','Infographic','Report','Playbook','Framework']
    const topics = ['AI Strategy','Cloud Migration','App Development','Cybersecurity','Data Analytics','Digital Marketing','DevOps','Blockchain','IoT','UX Design']
    const items = []
    for (let i = 0; i < 100; i++) {
        const type = types[i % types.length]
        const topic = topics[i % topics.length]
        items.push({
            slug: `${type.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase().replace(/ /g, '-')}-${i}`,
            title: `${topic} ${type}`, subtitle: `Free ${type} Download`,
            description: `Download our comprehensive ${topic.toLowerCase()} ${type.toLowerCase()} and accelerate your digital transformation.`,
            category: 'resources', layout_template: 'landing',
            hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
            icon: icons[i % icons.length], meta_title: `${topic} ${type} | TheGetNow Resources`,
            meta_description: `Free ${topic.toLowerCase()} ${type.toLowerCase()} by TheGetNow.`,
            content_json: {}
        })
    }
    return items
  })

  // 9. Guides (50)
  addPages('guides', () => {
    return Array.from({length: 50}, (_, i) => {
      const subjects = ['React Development','Node.js Backend','Mobile App Design','Cloud Deployment','API Security','Database Optimization','CI CD Pipeline','Microservices','Serverless','AI Integration']
      const s = subjects[i % subjects.length]
      return {
        slug: `guide-${s.toLowerCase().replace(/ /g, '-')}-${i}`, title: `${s} Guide`,
        subtitle: `Step-by-Step ${s}`, description: `Master ${s.toLowerCase()} with our comprehensive guide.`,
        category: 'guides', layout_template: 'documentation',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${s} Guide | TheGetNow`,
        meta_description: `Complete ${s.toLowerCase()} guide by TheGetNow.`,
        content_json: {}
      }
    })
  })

  // 10. Careers (~30)
  addPages('careers', () => [
    'Frontend Developer','Backend Developer','Full Stack Developer','Mobile Developer','DevOps Engineer','Data Scientist','UI Designer','UX Researcher','Product Manager','QA Engineer',
    'Cloud Architect','Security Engineer','ML Engineer','Blockchain Developer','Technical Writer','Scrum Master','Tech Lead','CTO','VP Engineering','Engineering Manager',
    'React Developer','Angular Developer','Python Developer','Go Developer','Rust Developer','iOS Developer','Android Developer','Flutter Developer','Data Engineer','Solutions Architect'
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/ /g, '-'),
    title: t, subtitle: `Join TheGetNow as ${t}`,
    description: `We're looking for a talented ${t.toLowerCase()} to join our growing team.`,
    category: 'careers', layout_template: 'split',
    hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
    icon: icons[i % icons.length], meta_title: `${t} Jobs | TheGetNow Careers`,
    meta_description: `Apply for ${t.toLowerCase()} position at TheGetNow.`,
    content_json: {}
  })))

  // 11. Locations (50)
  addPages('locations', () => [
    'New York','San Francisco','London','Dubai','Singapore','Tokyo','Sydney','Berlin','Toronto','Mumbai',
    'Paris','Amsterdam','Stockholm','Seoul','Shanghai','São Paulo','Mexico City','Nairobi','Cape Town','Jakarta',
    'Bangkok','Istanbul','Warsaw','Dublin','Zurich','Milan','Madrid','Vienna','Oslo','Helsinki',
    'Bangalore','Hyderabad','Chennai','Pune','Kolkata','Delhi','Ahmedabad','Jaipur','Kochi','Chandigarh',
    'Los Angeles','Chicago','Seattle','Boston','Austin','Denver','Miami','Atlanta','Dallas','Houston'
  ].map((t, i) => ({
    slug: t.toLowerCase().replace(/ /g, '-'),
    title: `TheGetNow ${t}`, subtitle: `Our ${t} Office`,
    description: `TheGetNow's ${t} office serves clients across the region with world-class digital solutions.`,
    category: 'locations', layout_template: layouts[(i + 6) % layouts.length],
    hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
    icon: 'Globe', meta_title: `TheGetNow ${t} | Digital Solutions`,
    meta_description: `TheGetNow ${t} office. Local digital solutions experts.`,
    content_json: {}
  })))

  // 12. Comparisons (30)
  addPages('comparisons', () => {
    return Array.from({length: 30}, (_, i) => {
      const pairs = ['React vs Angular','Next.js vs Nuxt','Flutter vs React Native','AWS vs Azure','PostgreSQL vs MySQL',
        'Docker vs Kubernetes','Python vs Node.js','GraphQL vs REST','MongoDB vs PostgreSQL','TypeScript vs JavaScript',
        'Vue vs Svelte','Django vs FastAPI','Firebase vs Supabase','Vercel vs Netlify','Tailwind vs Bootstrap',
        'Redis vs Memcached','Kafka vs RabbitMQ','Go vs Rust','Swift vs Kotlin','Prisma vs Drizzle',
        'Remix vs Next.js','Deno vs Bun','Jest vs Vitest','Cypress vs Playwright','GitHub vs GitLab',
        'Figma vs Sketch','Notion vs Confluence','Slack vs Teams','Linear vs Jira','Stripe vs PayPal']
      const p = pairs[i]
      return {
        slug: p.toLowerCase().replace(/ /g, '-'), title: p, subtitle: `Which is Right for You?`,
        description: `Compare ${p} side-by-side. TheGetNow's expert analysis helps you choose.`,
        category: 'comparisons', layout_template: 'comparison',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${p} Comparison | TheGetNow`,
        meta_description: `Detailed ${p.toLowerCase()} comparison by TheGetNow.`,
        content_json: {}
      }
    })
  })

  // 13. Webinars (30)
  addPages('webinars', () => {
    return Array.from({length: 30}, (_, i) => {
      const titles = ['Building Scalable Apps','AI for Business','Cloud Migration Strategies','DevOps Best Practices','Mobile First Design',
        'Security in 2025','Data Driven Decisions','Blockchain Essentials','IoT Architecture','UX Research Methods',
        'React Advanced Patterns','Node.js Performance','API Design Principles','Database Scaling','CI CD Automation',
        'Microservices Patterns','Serverless Architecture','Edge Computing','WebAssembly Future','Design Systems']
      const t = titles[i % titles.length]
      return {
        slug: `webinar-${t.toLowerCase().replace(/ /g, '-')}-${i}`, title: `Webinar: ${t}`,
        subtitle: 'Free Online Event', description: `Join our expert-led webinar on ${t.toLowerCase()}.`,
        category: 'webinars', layout_template: 'landing',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${t} Webinar | TheGetNow`,
        meta_description: `Free webinar on ${t.toLowerCase()} by TheGetNow.`,
        content_json: {}
      }
    })
  })

  // 14. FAQ (80)
  addPages('faq', () => {
    return Array.from({length: 80}, (_, i) => {
      const cats = ['General','Technical','Pricing','Support','Security','Integration','Mobile','Cloud','AI','Data']
      const c = cats[i % cats.length]
      return {
        slug: `faq-${c.toLowerCase()}-${i}`, title: `${c} FAQ #${i+1}`,
        subtitle: `Frequently Asked Questions - ${c}`, description: `Find answers to common ${c.toLowerCase()} questions.`,
        category: 'faq', layout_template: 'interactive',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${c} FAQ | TheGetNow`,
        meta_description: `${c} frequently asked questions at TheGetNow.`,
        content_json: {}
      }
    })
  })

  // 15. Team (30)
  addPages('team', () => {
    const members = ['Sarah Chen CEO','James Wilson CTO','Priya Sharma VP Engineering','Alex Morgan Design Lead','David Kim ML Lead',
      'Emma Davis Product Manager','Michael Brown DevOps Lead','Lisa Wang Frontend Lead','Robert Taylor Backend Lead','Jessica Lee UX Lead',
      'Chris Martin Cloud Architect','Anna Johnson QA Lead','Thomas White Security Lead','Maria Garcia Mobile Lead','Daniel Harris Data Lead',
      'Sophie Brown AI Researcher','Ryan Clark Blockchain Lead','Olivia Wilson IoT Lead','William Moore Solutions Architect','Emily Davis Technical Writer',
      'Kevin Zhang Full Stack Lead','Rachel Green Marketing Lead','Andrew Brown Sales Director','Laura White HR Director','Nathan Black Finance Lead',
      'Grace Kim Delivery Manager','Peter Hall Client Success','Diana Cruz Creative Director','Mark Stone Operations Lead','Julia Fox Partnerships Lead']
    return members.map((m, i) => {
      const parts = m.split(' ')
      const name = parts.slice(0, 2).join(' ')
      const role = parts.slice(2).join(' ')
      return {
        slug: name.toLowerCase().replace(/ /g, '-'),
        title: name, subtitle: role, description: `${name} is the ${role} at TheGetNow.`,
        category: 'team', layout_template: 'showcase',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: 'Award', meta_title: `${name} - ${role} | TheGetNow`,
        meta_description: `Meet ${name}, ${role} at TheGetNow.`,
        content_json: {}
      }
    })
  })

  allPagesCache = pages
  return pages
}

export async function getPageBySlug(category: string, slug: string): Promise<FullPage | null> {
  const pages = generateAllPages()
  return pages.find(p => p.category === category && p.slug === slug) || null
}

export async function getPagesByCategory(category: string): Promise<Page[]> {
  const pages = generateAllPages()
  return pages.filter(p => p.category === category)
}

export async function getAllSlugs(category: string): Promise<{ slug: string }[]> {
  const pages = generateAllPages()
  return pages.filter(p => p.category === category).map(p => ({ slug: p.slug }))
}

export async function getAllPages(): Promise<Page[]> {
  return generateAllPages()
}

export async function getPageCount(): Promise<number> {
  const pages = generateAllPages()
  return pages.length
}

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const pages = generateAllPages()
  const counts: Record<string, number> = {}
  pages.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })
  return counts
}

export async function searchPages(query: string): Promise<Page[]> {
  const pages = generateAllPages()
  const q = query.toLowerCase()
  return pages.filter(p => 
    p.title.toLowerCase().includes(q) || 
    (p.description && p.description.toLowerCase().includes(q))
  ).slice(0, 20)
}

export async function getFeaturedPages(limit = 6): Promise<Page[]> {
  const pages = generateAllPages()
  return pages.filter(p => ['services', 'case-studies', 'products'].includes(p.category)).slice(0, limit)
}
