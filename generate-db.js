const fs = require('fs');
const path = require('path');

const layouts = ['cinematic','split','magazine','dashboard','showcase','timeline','interactive','comparison','landing','documentation'];
const gradients = [
  'from-violet-600 to-indigo-900','from-emerald-500 to-teal-900','from-rose-500 to-pink-900',
  'from-amber-500 to-orange-900','from-cyan-500 to-blue-900','from-fuchsia-500 to-purple-900',
  'from-lime-500 to-green-900','from-sky-500 to-indigo-800','from-red-500 to-rose-900',
  'from-teal-400 to-cyan-900'
];
const accents = ['#7c3aed','#10b981','#f43f5e','#f59e0b','#06b6d4','#d946ef','#84cc16','#0ea5e9','#ef4444','#14b8a6'];
const icons = ['Zap','Globe','Shield','Cpu','Code','Layers','Rocket','Target','TrendingUp','Award','Star','Heart','Database','Cloud','Lock','Smartphone','Monitor','Server','Wifi','BarChart'];

function pickIdx(len) { return Math.floor(Math.random() * len); }

const categories = {
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
    ];
    return items.map((t, i) => ({
      id: `svc-${i}`,
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Enterprise-Grade ${t} Solutions`,
      description: `TheGetNow delivers cutting-edge ${t.toLowerCase()} services that transform businesses. Our expert team builds scalable, secure, and performant solutions tailored to your unique requirements.`,
      category: 'services', layout_template: layouts[i % layouts.length],
      hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
      icon: icons[i % icons.length],
      meta_title: `${t} Services | TheGetNow - Digital Solutions`,
      meta_description: `Professional ${t.toLowerCase()} services by TheGetNow. We build scalable solutions for enterprises worldwide.`,
      content_json: { intro: `Our ${t.toLowerCase()} expertise spans over a decade of delivering mission-critical solutions.`, approach: 'We follow an agile methodology with continuous delivery and integration.' }
    }));
  },
  industries: () => {
    const items = [
      'Healthcare','Finance','Education','Real Estate','Retail','Manufacturing','Logistics','Travel',
      'Entertainment','Food Delivery','Fitness','Agriculture','Automotive','Energy','Insurance',
      'Legal Tech','Government','Nonprofit','Media','Telecom','Hospitality','Fashion','Sports',
      'Gaming','Pharmacy','Construction','Mining','Aerospace','Defense','Environmental',
      'Recruitment','Wedding Planning','Pet Care','Home Services','Beauty Salon'
    ];
    return items.map((t, i) => ({
      id: `ind-${i}`,
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: `${t} Solutions`, subtitle: `Digital Transformation for ${t}`,
      description: `Revolutionize the ${t.toLowerCase()} industry with TheGetNow's tailored digital solutions. We understand the unique challenges and opportunities in ${t.toLowerCase()}.`,
      category: 'industries', layout_template: layouts[(i + 3) % layouts.length],
      hero_gradient: gradients[(i + 2) % gradients.length], accent_color: accents[(i + 2) % accents.length],
      icon: icons[(i + 5) % icons.length],
      meta_title: `${t} Industry Solutions | TheGetNow`,
      meta_description: `Custom digital solutions for the ${t.toLowerCase()} industry. TheGetNow builds innovative apps and platforms.`,
      content_json: { challenge: `The ${t.toLowerCase()} industry faces digital disruption.`, solution: `Our tailored platform addresses core ${t.toLowerCase()} workflows.` }
    }));
  },
  solutions: () => {
    const items = [
      'Enterprise Resource Planning','Customer Relationship Management','Supply Chain Management','Human Resource Management',
      'Project Management Tools','Business Process Automation','Inventory Management','Fleet Management',
      'Appointment Scheduling','Invoice Management','Payroll System','Asset Tracking',
      'Document Management','Visitor Management','Compliance Management','Risk Assessment',
      'Quality Control','Vendor Management','Contract Management','Expense Tracking',
      'Time Tracking','Employee Onboarding','Customer Support Portal','Knowledge Base Platform',
      'Feedback Collection','Survey Platform','Booking System','Subscription Management'
    ];
    return items.map((t, i) => ({
      id: `sol-${i}`,
      slug: t.toLowerCase().replace(/ /g, '-'),
      title: t, subtitle: `Complete ${t} Solution`,
      description: `TheGetNow's ${t.toLowerCase()} solution streamlines operations, reduces costs, and accelerates growth for modern enterprises.`,
      category: 'solutions', layout_template: layouts[(i + 2) % layouts.length],
      hero_gradient: gradients[(i + 3) % gradients.length], accent_color: accents[(i + 3) % accents.length],
      icon: icons[(i + 7) % icons.length],
      meta_title: `${t} Software | TheGetNow Solutions`,
      meta_description: `Enterprise ${t.toLowerCase()} software by TheGetNow. Streamline your operations today.`,
      content_json: { benefits: ['Reduce costs by 40%','Increase efficiency by 60%','Real-time insights'] }
    }));
  },
  'case-studies': () => {
    const clients = ['TechCorp','FinanceHub','HealthPlus','EduLearn','RetailMax','LogiTrack','TravelEase','FoodFast','FitLife','AgriTech'];
    const outcomes = ['50% Revenue Growth','3x User Engagement','90% Faster Deployment','$2M Cost Savings','10x Scalability'];
    const pages = [];
    for (let i = 0; i < 50; i++) {
        const client = clients[i % clients.length];
        const outcome = outcomes[i % outcomes.length];
        pages.push({
            id: `cs-${i}`,
            slug: `${client.toLowerCase()}-case-study-${i}`,
            title: `${client}: ${outcome}`, subtitle: `How we helped ${client} achieve results`,
            description: `Learn how TheGetNow partnered with ${client} to deliver ${outcome.toLowerCase()} through innovative digital solutions.`,
            category: 'case-studies', layout_template: layouts[(i + 7) % layouts.length],
            hero_gradient: gradients[(i + 6) % gradients.length], accent_color: accents[(i + 6) % accents.length],
            icon: icons[(i + 8) % icons.length],
            meta_title: `${client} Case Study | TheGetNow`,
            meta_description: `${client} achieved ${outcome.toLowerCase()} with TheGetNow. Read the full case study.`,
            content_json: { client, outcome, duration: `${3 + (i % 12)} months`, teamSize: `${4 + (i % 10)} experts` }
        });
    }
    return pages;
  },
  blog: () => {
    const topics = ['AI','Cloud','Mobile','Web','Security','Blockchain','IoT','Data','DevOps','Design','Startup','Enterprise'];
    const formats = ['How to Build','Complete Guide to','Top 10 Tips for','Understanding','Best Practices for','Future of'];
    const pages = [];
    for (let i = 0; i < 150; i++) {
        const topic = topics[i % topics.length];
        const format = formats[i % formats.length];
        const title = `${format} ${topic} in ${2025 + Math.floor(i / 60)}`;
        pages.push({
            id: `blog-${i}`,
            slug: `${format.toLowerCase().replace(/ /g, '-')}-${topic.toLowerCase()}-${i}`,
            title: title, subtitle: `Expert insights on ${topic}`,
            description: `Discover ${format.toLowerCase()} ${topic.toLowerCase()} with actionable strategies from TheGetNow's expert team.`,
            category: 'blog', layout_template: 'magazine',
            hero_gradient: gradients[i % gradients.length], accent_color: accents[i % accents.length],
            icon: icons[i % icons.length],
            meta_title: `${title} | TheGetNow Blog`,
            meta_description: `${title}. Expert insights and practical strategies from TheGetNow.`,
            content_json: { readTime: `${5 + (i % 15)} min read`, author: ['Sarah Chen','James Wilson','Priya Sharma'][i % 3] }
        });
    }
    return pages;
  }
};

function genFeatures(pageId, category) {
  const featureSets = {
    services: [['Scalable Architecture','Built for growth'],['24/7 Support','Round-the-clock assistance'],['Agile Delivery','Iterative development'],['Custom Solutions','Tailored to your needs'],['Security First','Enterprise-grade security'],['Cloud Native','Modern infrastructure']],
    industries: [['Domain Expertise','Deep industry knowledge'],['Compliance Ready','Regulatory adherence'],['Fast Deployment','Quick time to market'],['Integration Ready','Works with your stack']],
    default: [['Innovation','Cutting-edge solutions'],['Reliability','99.9% uptime'],['Support','Dedicated team'],['Quality','Premium deliverables']]
  };
  const set = featureSets[category] || featureSets.default;
  return set.map(([title, description], i) => ({
    id: `feat-${pageId}-${i}`, page_id: pageId, title, description, icon: icons[i % icons.length], order_index: i
  }));
}

function genStats(pageId) {
  return [
    { id: `stat-${pageId}-0`, page_id: pageId, label: 'Projects Delivered', value: `${500 + pickIdx(500)}`, suffix: '+', order_index: 0 },
    { id: `stat-${pageId}-1`, page_id: pageId, label: 'Happy Clients', value: `${200 + pickIdx(300)}`, suffix: '+', order_index: 1 },
    { id: `stat-${pageId}-2`, page_id: pageId, label: 'Team Members', value: `${50 + pickIdx(150)}`, suffix: '+', order_index: 2 },
    { id: `stat-${pageId}-3`, page_id: pageId, label: 'Countries', value: `${20 + pickIdx(30)}`, suffix: '+', order_index: 3 },
  ];
}

function genFaqs(pageId, title) {
  return [
    { id: `faq-${pageId}-0`, page_id: pageId, question: `What is ${title}?`, answer: `${title} is a comprehensive solution offered by TheGetNow that addresses modern business challenges.`, order_index: 0 },
    { id: `faq-${pageId}-1`, page_id: pageId, question: `How long does ${title} implementation take?`, answer: `Typically 4-12 weeks depending on complexity and customization needs.`, order_index: 1 },
    { id: `faq-${pageId}-2`, page_id: pageId, question: `What is the pricing for ${title}?`, answer: `We offer flexible pricing models. Contact us for a custom quote.`, order_index: 2 },
  ];
}

function genTestimonials(pageId) {
  const testimonials = [
    { author: 'John Smith', role: 'CEO', company: 'TechStartup Inc', quote: 'TheGetNow transformed our digital presence completely.' },
    { author: 'Emily Johnson', role: 'CTO', company: 'FinanceFlow', quote: 'Outstanding technical expertise and delivery quality.' },
  ];
  return testimonials.map((t, i) => ({ ...t, id: `test-${pageId}-${i}`, page_id: pageId, rating: 5, order_index: i }));
}

console.log('Generating dummy database...');
let allPages = [];
for (const cat in categories) {
    const pages = categories[cat]();
    console.log(`Generated ${pages.length} ${cat} items`);
    for (const p of pages) {
        p.published = true;
        p.page_features = genFeatures(p.id, p.category);
        p.page_stats = genStats(p.id);
        p.page_faqs = genFaqs(p.id, p.title);
        p.page_testimonials = genTestimonials(p.id);
        allPages.push(p);
    }
}

fs.writeFileSync(path.join(__dirname, 'src/lib/database.json'), JSON.stringify(allPages, null, 2));
console.log(`Successfully wrote ${allPages.length} pages to database.json!`);
