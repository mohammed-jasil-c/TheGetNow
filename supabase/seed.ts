// TheGetNow - Seed Data Generator
// Run: npx tsx supabase/seed.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

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

interface PageData {
  slug: string; title: string; subtitle: string; description: string;
  category: string; layout_template: string; hero_gradient: string;
  accent_color: string; icon: string; meta_title: string; meta_description: string;
  content_json: object;
}

function pick<T>(arr: readonly T[] | T[]): T { return arr[Math.floor(Math.random() * arr.length)] }
function pickIdx(len: number): number { return Math.floor(Math.random() * len) }

// ─── Category Generators ───
const categories: Record<string, () => PageData[]> = {
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
      description: `TheGetNow delivers cutting-edge ${t.toLowerCase()} services that transform businesses. Our expert team builds scalable, secure, and performant solutions tailored to your unique requirements.`,
      category: 'services', layout_template: layouts[i % layouts.length],
      hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
      icon: icons[i % icons.length],
      meta_title: `${t} Services | TheGetNow - Digital Solutions`,
      meta_description: `Professional ${t.toLowerCase()} services by TheGetNow. We build scalable solutions for enterprises worldwide.`,
      content_json: { intro: `Our ${t.toLowerCase()} expertise spans over a decade of delivering mission-critical solutions.`, approach: 'We follow an agile methodology with continuous delivery and integration.' }
    }))
  },
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
      title: `${t} Solutions`, subtitle: `Digital Transformation for ${t}`,
      description: `Revolutionize the ${t.toLowerCase()} industry with TheGetNow's tailored digital solutions. We understand the unique challenges and opportunities in ${t.toLowerCase()}.`,
      category: 'industries', layout_template: layouts[(i + 3) % layouts.length],
      hero_gradient: gradients[(i + 2) % gradients.length], accent_color: accents[(i + 2) % accents.length],
      icon: icons[(i + 5) % icons.length],
      meta_title: `${t} Industry Solutions | TheGetNow`,
      meta_description: `Custom digital solutions for the ${t.toLowerCase()} industry. TheGetNow builds innovative apps and platforms.`,
      content_json: { challenge: `The ${t.toLowerCase()} industry faces digital disruption.`, solution: `Our tailored platform addresses core ${t.toLowerCase()} workflows.` }
    }))
  },
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
      title: `${t} Development`, subtitle: `Expert ${t} Development Services`,
      description: `Leverage the power of ${t} with TheGetNow's expert development team. We build high-performance applications using ${t} best practices.`,
      category: 'technologies', layout_template: layouts[(i + 5) % layouts.length],
      hero_gradient: gradients[(i + 4) % gradients.length], accent_color: accents[(i + 4) % accents.length],
      icon: icons[(i + 3) % icons.length],
      meta_title: `${t} Development Company | TheGetNow`,
      meta_description: `Hire expert ${t} developers at TheGetNow. We deliver production-ready solutions.`,
      content_json: { why: `${t} offers unmatched performance and developer experience.`, expertise: `Our team has delivered 100+ projects using ${t}.` }
    }))
  },
  blog: () => {
    const topics = ['AI','Cloud','Mobile','Web','Security','Blockchain','IoT','Data','DevOps','Design','Startup','Enterprise','SaaS','API','Performance','Testing','Scaling','Migration','Architecture','UX']
    const formats = ['How to Build','Complete Guide to','Top 10 Tips for','Understanding','Best Practices for','Future of','Why Choose','Getting Started with','Advanced','Mastering']
    const pages: PageData[] = []
    for (let i = 0; i < 300; i++) {
      const topic = topics[i % topics.length]
      const format = formats[i % formats.length]
      const title = `${format} ${topic} in ${2025 + Math.floor(i / 60)}`
      pages.push({
        slug: `${format.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase()}-${i}`,
        title, subtitle: `Expert insights on ${topic}`,
        description: `Discover ${format.toLowerCase()} ${topic.toLowerCase()} with actionable strategies from TheGetNow's expert team.`,
        category: 'blog', layout_template: 'magazine',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length],
        meta_title: `${title} | TheGetNow Blog`,
        meta_description: `${title}. Expert insights and practical strategies from TheGetNow.`,
        content_json: { readTime: `${5 + (i % 15)} min read`, author: ['Sarah Chen','James Wilson','Priya Sharma','Alex Morgan','David Kim'][i % 5] }
      })
    }
    return pages
  },
  'case-studies': () => {
    const clients = ['TechCorp','FinanceHub','HealthPlus','EduLearn','RetailMax','LogiTrack','TravelEase','FoodFast','FitLife','AgriTech']
    const outcomes = ['50% Revenue Growth','3x User Engagement','90% Faster Deployment','$2M Cost Savings','10x Scalability']
    const pages: PageData[] = []
    for (let i = 0; i < 100; i++) {
      const client = clients[i % clients.length]
      const outcome = outcomes[i % outcomes.length]
      pages.push({
        slug: `${client.toLowerCase()}-case-study-${i}`,
        title: `${client}: ${outcome}`, subtitle: `How we helped ${client} achieve results`,
        description: `Learn how TheGetNow partnered with ${client} to deliver ${outcome.toLowerCase()} through innovative digital solutions.`,
        category: 'case-studies', layout_template: layouts[(i + 7) % layouts.length],
        hero_gradient: gradients[(i + 6) % gradients.length], accent_color: accents[(i + 6) % accents.length],
        icon: icons[(i + 8) % icons.length],
        meta_title: `${client} Case Study | TheGetNow`,
        meta_description: `${client} achieved ${outcome.toLowerCase()} with TheGetNow. Read the full case study.`,
        content_json: { client, outcome, duration: `${3 + (i % 12)} months`, teamSize: `${4 + (i % 10)} experts` }
      })
    }
    return pages
  },
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
      title: t, subtitle: `Complete ${t} Solution`,
      description: `TheGetNow's ${t.toLowerCase()} solution streamlines operations, reduces costs, and accelerates growth for modern enterprises.`,
      category: 'solutions', layout_template: layouts[(i + 2) % layouts.length],
      hero_gradient: gradients[(i + 3) % gradients.length], accent_color: accents[(i + 3) % accents.length],
      icon: icons[(i + 7) % icons.length],
      meta_title: `${t} Software | TheGetNow Solutions`,
      meta_description: `Enterprise ${t.toLowerCase()} software by TheGetNow. Streamline your operations today.`,
      content_json: { benefits: ['Reduce costs by 40%','Increase efficiency by 60%','Real-time insights'] }
    }))
  },
  products: () => {
    const items = Array.from({length: 50}, (_, i) => {
      const names = ['DataSync Pro','CloudGuard','AppForge','SmartDash','DevFlow','CodePilot','SecureVault','AnalytiX','PayGate','ChatConnect']
      const n = names[i % names.length]
      return {
        slug: `${n.toLowerCase().replace(/ /g, '-')}-${i}`, title: `${n} v${(i % 5) + 1}.0`,
        subtitle: `Next-Gen ${n}`, description: `${n} is a powerful platform built by TheGetNow for modern enterprises.`,
        category: 'products' as const, layout_template: layouts[(i + 4) % layouts.length],
        hero_gradient: gradients[(i + 5) % gradients.length], accent_color: accents[(i + 5) % accents.length],
        icon: icons[(i + 2) % icons.length], meta_title: `${n} | TheGetNow Products`,
        meta_description: `Discover ${n} by TheGetNow. Enterprise software solutions.`,
        content_json: { version: `${(i%5)+1}.0`, pricing: ['Free','Pro','Enterprise'] }
      }
    })
    return items
  },
  resources: () => {
    const types = ['Whitepaper','Ebook','Template','Toolkit','Checklist','Webinar Recording','Infographic','Report','Playbook','Framework']
    const topics = ['AI Strategy','Cloud Migration','App Development','Cybersecurity','Data Analytics','Digital Marketing','DevOps','Blockchain','IoT','UX Design']
    const pages: PageData[] = []
    for (let i = 0; i < 100; i++) {
      const type = types[i % types.length]
      const topic = topics[i % topics.length]
      pages.push({
        slug: `${type.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase().replace(/ /g, '-')}-${i}`,
        title: `${topic} ${type}`, subtitle: `Free ${type} Download`,
        description: `Download our comprehensive ${topic.toLowerCase()} ${type.toLowerCase()} and accelerate your digital transformation journey.`,
        category: 'resources', layout_template: 'landing',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${topic} ${type} | TheGetNow Resources`,
        meta_description: `Free ${topic.toLowerCase()} ${type.toLowerCase()} by TheGetNow.`,
        content_json: { type, downloadCount: `${(i * 47 + 123) % 5000 + 500}+` }
      })
    }
    return pages
  },
  guides: () => {
    const items = Array.from({length: 50}, (_, i) => {
      const subjects = ['React Development','Node.js Backend','Mobile App Design','Cloud Deployment','API Security','Database Optimization','CI CD Pipeline','Microservices','Serverless','AI Integration']
      const s = subjects[i % subjects.length]
      return {
        slug: `guide-${s.toLowerCase().replace(/ /g, '-')}-${i}`, title: `${s} Guide`,
        subtitle: `Step-by-Step ${s}`, description: `Master ${s.toLowerCase()} with our comprehensive guide.`,
        category: 'guides' as const, layout_template: 'documentation',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${s} Guide | TheGetNow`,
        meta_description: `Complete ${s.toLowerCase()} guide by TheGetNow experts.`,
        content_json: { difficulty: ['Beginner','Intermediate','Advanced'][i % 3], steps: 8 + (i % 7) }
      }
    })
    return items
  },
  careers: () => {
    const roles = ['Frontend Developer','Backend Developer','Full Stack Developer','Mobile Developer','DevOps Engineer','Data Scientist','UI Designer','UX Researcher','Product Manager','QA Engineer',
      'Cloud Architect','Security Engineer','ML Engineer','Blockchain Developer','Technical Writer','Scrum Master','Tech Lead','CTO','VP Engineering','Engineering Manager',
      'React Developer','Angular Developer','Python Developer','Go Developer','Rust Developer','iOS Developer','Android Developer','Flutter Developer','Data Engineer','Solutions Architect']
    return roles.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Join TheGetNow as ${t}`,
      description: `We're looking for a talented ${t.toLowerCase()} to join our growing team at TheGetNow.`,
      category: 'careers', layout_template: 'split',
      hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
      icon: icons[i % icons.length], meta_title: `${t} Jobs | TheGetNow Careers`,
      meta_description: `Apply for ${t.toLowerCase()} position at TheGetNow.`,
      content_json: { location: ['Remote','Hybrid','On-site'][i%3], experience: `${2+(i%8)}+ years`, salary: 'Competitive' }
    }))
  },
  locations: () => {
    const cities = ['New York','San Francisco','London','Dubai','Singapore','Tokyo','Sydney','Berlin','Toronto','Mumbai',
      'Paris','Amsterdam','Stockholm','Seoul','Shanghai','São Paulo','Mexico City','Nairobi','Cape Town','Jakarta',
      'Bangkok','Istanbul','Warsaw','Dublin','Zurich','Milan','Madrid','Vienna','Oslo','Helsinki',
      'Bangalore','Hyderabad','Chennai','Pune','Kolkata','Delhi','Ahmedabad','Jaipur','Kochi','Chandigarh',
      'Los Angeles','Chicago','Seattle','Boston','Austin','Denver','Miami','Atlanta','Dallas','Houston']
    return cities.map((t, i) => ({
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: `TheGetNow ${t}`, subtitle: `Our ${t} Office`,
      description: `TheGetNow's ${t} office serves clients across the region with world-class digital solutions.`,
      category: 'locations', layout_template: layouts[(i + 6) % layouts.length],
      hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
      icon: 'Globe', meta_title: `TheGetNow ${t} | Digital Solutions`,
      meta_description: `TheGetNow ${t} office. Local digital solutions experts.`,
      content_json: { timezone: `GMT${i%12 > 6 ? '+' : '-'}${i%12}`, team: `${5+(i%20)}+ experts` }
    }))
  },
  comparisons: () => {
    const items = Array.from({length: 30}, (_, i) => {
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
        category: 'comparisons' as const, layout_template: 'comparison',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${p} Comparison | TheGetNow`,
        meta_description: `Detailed ${p.toLowerCase()} comparison by TheGetNow.`,
        content_json: { verdict: 'Both are excellent choices depending on your use case.' }
      }
    })
    return items
  },
  webinars: () => {
    const items = Array.from({length: 30}, (_, i) => {
      const titles = ['Building Scalable Apps','AI for Business','Cloud Migration Strategies','DevOps Best Practices','Mobile First Design',
        'Security in 2025','Data Driven Decisions','Blockchain Essentials','IoT Architecture','UX Research Methods',
        'React Advanced Patterns','Node.js Performance','API Design Principles','Database Scaling','CI CD Automation',
        'Microservices Patterns','Serverless Architecture','Edge Computing','WebAssembly Future','Design Systems']
      const t = titles[i % titles.length]
      return {
        slug: `webinar-${t.toLowerCase().replace(/ /g, '-')}-${i}`, title: `Webinar: ${t}`,
        subtitle: 'Free Online Event', description: `Join our expert-led webinar on ${t.toLowerCase()}.`,
        category: 'webinars' as const, layout_template: 'landing',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${t} Webinar | TheGetNow`,
        meta_description: `Free webinar on ${t.toLowerCase()} by TheGetNow.`,
        content_json: { duration: '60 min', speakers: 2 + (i % 3) }
      }
    })
    return items
  },
  faq: () => {
    const items = Array.from({length: 80}, (_, i) => {
      const cats = ['General','Technical','Pricing','Support','Security','Integration','Mobile','Cloud','AI','Data']
      const c = cats[i % cats.length]
      return {
        slug: `faq-${c.toLowerCase()}-${i}`, title: `${c} FAQ #${i+1}`,
        subtitle: `Frequently Asked Questions - ${c}`, description: `Find answers to common ${c.toLowerCase()} questions.`,
        category: 'faq' as const, layout_template: 'interactive',
        hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
        icon: icons[i % icons.length], meta_title: `${c} FAQ | TheGetNow`,
        meta_description: `${c} frequently asked questions at TheGetNow.`,
        content_json: { topic: c }
      }
    })
    return items
  },
  team: () => {
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
        content_json: { role, yearsExp: 5 + (i % 15) }
      }
    })
  }
}

// ─── Seed Features/Stats/FAQs for each page ───
function genFeatures(pageId: string, category: string) {
  const featureSets: Record<string, string[][]> = {
    services: [['Scalable Architecture','Built for growth'],['24/7 Support','Round-the-clock assistance'],['Agile Delivery','Iterative development'],['Custom Solutions','Tailored to your needs'],['Security First','Enterprise-grade security'],['Cloud Native','Modern infrastructure']],
    industries: [['Domain Expertise','Deep industry knowledge'],['Compliance Ready','Regulatory adherence'],['Fast Deployment','Quick time to market'],['Integration Ready','Works with your stack']],
    technologies: [['Expert Team','Certified developers'],['Best Practices','Industry standards'],['Performance','Optimized solutions'],['Testing','Comprehensive QA']],
    default: [['Innovation','Cutting-edge solutions'],['Reliability','99.9% uptime'],['Support','Dedicated team'],['Quality','Premium deliverables']]
  }
  const set = featureSets[category] || featureSets.default
  return set.map(([title, description], i) => ({
    page_id: pageId, title, description, icon: icons[i % icons.length], order_index: i
  }))
}

function genStats(pageId: string) {
  return [
    { page_id: pageId, label: 'Projects Delivered', value: `${500 + pickIdx(500)}`, suffix: '+', order_index: 0 },
    { page_id: pageId, label: 'Happy Clients', value: `${200 + pickIdx(300)}`, suffix: '+', order_index: 1 },
    { page_id: pageId, label: 'Team Members', value: `${50 + pickIdx(150)}`, suffix: '+', order_index: 2 },
    { page_id: pageId, label: 'Countries', value: `${20 + pickIdx(30)}`, suffix: '+', order_index: 3 },
  ]
}

function genFaqs(pageId: string, title: string) {
  return [
    { page_id: pageId, question: `What is ${title}?`, answer: `${title} is a comprehensive solution offered by TheGetNow that addresses modern business challenges.`, order_index: 0 },
    { page_id: pageId, question: `How long does ${title} implementation take?`, answer: `Typically 4-12 weeks depending on complexity and customization needs.`, order_index: 1 },
    { page_id: pageId, question: `What is the pricing for ${title}?`, answer: `We offer flexible pricing models. Contact us for a custom quote.`, order_index: 2 },
  ]
}

function genTestimonials(pageId: string) {
  const testimonials = [
    { author: 'John Smith', role: 'CEO', company: 'TechStartup Inc', quote: 'TheGetNow transformed our digital presence completely.' },
    { author: 'Emily Johnson', role: 'CTO', company: 'FinanceFlow', quote: 'Outstanding technical expertise and delivery quality.' },
  ]
  return testimonials.map((t, i) => ({ ...t, page_id: pageId, rating: 5, order_index: i }))
}

// ─── Main Seed Function ───
async function seed() {
  console.log('🌱 Starting seed...')
  
  let totalPages = 0
  for (const [cat, generator] of Object.entries(categories)) {
    const pages = generator()
    console.log(`📦 Seeding ${pages.length} ${cat} pages...`)
    
    // Insert in batches of 50
    for (let i = 0; i < pages.length; i += 50) {
      const batch = pages.slice(i, i + 50)
      const { data, error } = await supabase.from('pages').upsert(batch, { onConflict: 'slug' }).select('id, slug, category, title')
      
      if (error) { console.error(`Error seeding ${cat}:`, error.message); continue }
      if (!data) continue

      // Insert related data for first 5 of each batch
      for (let j = 0; j < Math.min(5, data.length); j++) {
        const p = data[j]
        await supabase.from('page_features').upsert(genFeatures(p.id, p.category))
        await supabase.from('page_stats').upsert(genStats(p.id))
        await supabase.from('page_faqs').upsert(genFaqs(p.id, p.title))
        await supabase.from('page_testimonials').upsert(genTestimonials(p.id))
      }
      totalPages += data.length
    }
  }
  
  console.log(`\n✅ Seeded ${totalPages} pages total!`)
}

seed().catch(console.error)
