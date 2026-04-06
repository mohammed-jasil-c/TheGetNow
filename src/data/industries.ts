export interface IndustryChallenge {
  challenge: string
  solution: string
}

export interface IndustryFeature {
  icon: string // Font Awesome icon name
  title: string
  description: string
}

export interface IndustryProcessStep {
  step: number
  title: string
  description: string
}

export interface IndustryCaseStudy {
  client: string
  result: string
  metric: string
  metricLabel: string
}

export interface IndustryFAQ {
  question: string
  answer: string
}

export interface Industry {
  slug: string
  title: string
  subtitle: string
  description: string
  heroTagline: string
  icon: string
  image: string
  gradient: string
  accentColor: string
  darkAccent: string
  stats: { label: string; value: string; suffix?: string }[]
  features: IndustryFeature[]
  challenges: IndustryChallenge[]
  benefits: string[]
  processSteps: IndustryProcessStep[]
  caseStudy: IndustryCaseStudy
  faqs: IndustryFAQ[]
  techStack: string[]
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'finance',
    title: 'FinTech & Banking',
    subtitle: 'Digital banking platforms, payment gateways, and regulatory compliance systems that redefine how the world transacts.',
    description: 'The financial services industry is undergoing a seismic transformation. Legacy systems built decades ago are crumbling under the weight of modern consumer expectations — instant transfers, zero-fee accounts, algorithmic investing, and embedded finance everywhere. We architect next-generation FinTech platforms that replace brittle monoliths with elastic microservices, enabling our clients to launch digital banks, tokenized assets, and AI-driven lending engines that operate at the speed of global markets. Our engineering teams hold PCI-DSS Level 1 certification and have deployed solutions processing over $50 billion in cumulative transaction volume across 23 countries.',
    heroTagline: 'Engineering the future of money.',
    icon: 'faBuildingColumns',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    accentColor: '#10B981',
    darkAccent: '#059669',
    stats: [
      { label: 'Transactions Processed', value: '50', suffix: 'B+' },
      { label: 'Banking Platform Users', value: '10', suffix: 'M+' },
      { label: 'Compliance Frameworks', value: '15', suffix: '+' },
      { label: 'Countries Deployed', value: '23', suffix: '' },
    ],
    features: [
      { icon: 'faCreditCard', title: 'Digital Banking Core', description: 'Full-stack neobanking platforms with multi-currency wallets, KYC/AML pipelines, instant P2P transfers, and embedded lending modules built on event-driven architectures.' },
      { icon: 'faShieldHalved', title: 'PCI-DSS Payment Processing', description: 'End-to-end encrypted payment gateways supporting 140+ currencies, tokenized card storage, 3D Secure authentication, and real-time fraud scoring with sub-100ms latency.' },
      { icon: 'faChartLine', title: 'Wealth Management & Robo-Advisory', description: 'Algorithm-driven portfolio optimization engines with Modern Portfolio Theory, tax-loss harvesting, ESG scoring, and automated rebalancing across equity, fixed income, and crypto asset classes.' },
      { icon: 'faGavel', title: 'RegTech & Compliance Automation', description: 'Automated regulatory reporting for MiFID II, SOX, Basel III, and GDPR. Real-time transaction monitoring with ML-powered suspicious activity detection reducing false positives by 73%.' },
      { icon: 'faLock', title: 'Blockchain & DeFi Integration', description: 'Smart contract development for tokenized securities, decentralized lending protocols, cross-chain bridge infrastructure, and institutional-grade digital asset custody solutions.' },
      { icon: 'faMobile', title: 'Mobile-First Banking UX', description: 'Biometric-secured native apps with offline transaction queuing, real-time push notifications, spending analytics dashboards, and accessibility-compliant interfaces meeting WCAG 2.1 AA.' },
    ],
    challenges: [
      { challenge: 'Legacy core banking systems cannot scale to handle real-time transaction volumes.', solution: 'We migrate to cloud-native, event-sourced architectures using CQRS patterns that handle 50K TPS with sub-second settlement.' },
      { challenge: 'Regulatory compliance across multiple jurisdictions creates deployment bottlenecks.', solution: 'Our compliance-as-code framework auto-generates audit trails and adapts to regional regulations through configurable rule engines.' },
      { challenge: 'Fraud detection systems generate excessive false positives, blocking legitimate customers.', solution: 'Our ML models trained on 2B+ transactions reduce false positives by 73% while catching 99.2% of fraudulent activity.' },
      { challenge: 'Customer onboarding takes days due to manual KYC verification.', solution: 'AI-powered identity verification with liveness detection completes onboarding in under 90 seconds with 99.7% accuracy.' },
    ],
    benefits: [
      '99.999% uptime SLA with multi-region failover',
      'PCI-DSS Level 1 certified infrastructure',
      'Sub-100ms API response times under peak load',
      'SOC 2 Type II audited engineering processes',
      'Real-time regulatory reporting automation',
    ],
    processSteps: [
      { step: 1, title: 'Regulatory Mapping', description: 'We map every applicable regulation across your target markets — PCI-DSS, PSD2, SOX, MiFID II — and encode compliance requirements into architectural constraints from day one.' },
      { step: 2, title: 'Core System Architecture', description: 'Design event-driven microservices with CQRS, implement ledger-grade double-entry accounting, and establish encrypted data pipelines between services.' },
      { step: 3, title: 'Security-First Development', description: 'Every code commit passes automated SAST/DAST scanning, penetration testing runs weekly, and our zero-trust networking ensures lateral movement is impossible.' },
      { step: 4, title: 'Elastic Deployment & Monitoring', description: 'Deploy across multi-region Kubernetes clusters with auto-scaling, implement distributed tracing, and establish real-time anomaly detection dashboards.' },
    ],
    caseStudy: { client: 'NeoVault Digital Bank', result: 'Launched a fully licensed digital bank in 3 EU markets within 14 months, processing $2.1B in the first year with zero security incidents.', metric: '$2.1B', metricLabel: 'First-Year Volume' },
    faqs: [
      { question: 'What compliance certifications does your team hold?', answer: 'Our team maintains PCI-DSS Level 1, SOC 2 Type II, ISO 27001, and GDPR certifications. We also have in-house regulatory consultants specializing in PSD2, MiFID II, and Basel III requirements.' },
      { question: 'Can you integrate with existing core banking systems?', answer: 'Yes. We specialize in wrapping legacy core banking systems (Temenos, Finastra, FIS) with modern API layers, enabling gradual migration without service interruption.' },
      { question: 'What is your approach to fraud detection?', answer: 'We deploy ensemble ML models combining gradient boosting, neural networks, and graph analytics that analyze 200+ transaction features in real-time, achieving a 99.2% detection rate with a 0.03% false positive rate.' },
      { question: 'How do you handle multi-currency operations?', answer: 'Our treasury management module supports 140+ currencies with real-time FX rate feeds, automatic settlement, and configurable hedging strategies via integration with Reuters and Bloomberg data services.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Plaid', 'Stripe', 'Kafka', 'Redis'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    subtitle: 'HIPAA-compliant telemedicine, EHR integration, and clinical decision support systems powering the future of patient care.',
    description: 'Healthcare delivery is being reinvented by technology — from AI-assisted diagnostics to remote patient monitoring and genomics-driven precision medicine. But this is also one of the most heavily regulated industries on Earth, where a single data breach can result in seven-figure fines and destroyed patient trust. We build healthcare platforms that satisfy the most stringent compliance requirements — HIPAA, HITECH, FDA 21 CFR Part 11 — while delivering consumer-grade experiences that patients and clinicians actually want to use. Our solutions have facilitated over 5 million patient interactions across 50,000+ healthcare providers in 12 countries, improving clinical outcomes and reducing administrative burden by an average of 40%.',
    heroTagline: 'Where precision meets compassion.',
    icon: 'faHeartPulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #06B6D4, #0E7490)',
    accentColor: '#06B6D4',
    darkAccent: '#0E7490',
    stats: [
      { label: 'Patient Interactions', value: '5', suffix: 'M+' },
      { label: 'Healthcare Providers', value: '50', suffix: 'K+' },
      { label: 'Countries Active', value: '12', suffix: '' },
      { label: 'Admin Burden Reduction', value: '40', suffix: '%' },
    ],
    features: [
      { icon: 'faVideo', title: 'Telemedicine & Virtual Care', description: 'WebRTC-powered video consultations with real-time vital signs overlay, AI-assisted symptom triaging, e-prescriptions with pharmacy integration, and HIPAA-compliant recording with automatic clinical note generation.' },
      { icon: 'faBrain', title: 'Clinical Decision Support (CDS)', description: 'AI diagnostic engines trained on 10M+ anonymized patient records providing differential diagnoses, drug interaction alerts, evidence-based treatment recommendations, and radiology image analysis with 96.3% accuracy.' },
      { icon: 'faUserDoctor', title: 'Patient Portal & Engagement', description: 'Self-service platforms for appointment scheduling, lab results access, secure messaging with care teams, medication adherence tracking, and health literacy content personalized to each patient\'s condition.' },
      { icon: 'faWifi', title: 'IoT Remote Patient Monitoring', description: 'Connected device ecosystems integrating wearables, blood pressure cuffs, glucometers, and pulse oximeters — streaming real-time data to clinician dashboards with configurable alert thresholds.' },
      { icon: 'faDatabase', title: 'EHR/EMR Integration (HL7 FHIR)', description: 'Bidirectional HL7 FHIR R4 integration with Epic, Cerner, Allscripts, and Athenahealth. Our middleware normalizes data across systems, enabling unified patient timelines and reducing duplicate records by 89%.' },
      { icon: 'faDna', title: 'Genomics & Precision Medicine', description: 'Bioinformatics pipelines processing whole-genome sequencing data, pharmacogenomic profiling for drug response prediction, and CLIA-compliant reporting interfaces for clinical genetics programs.' },
    ],
    challenges: [
      { challenge: 'HIPAA compliance makes development cycles slow and expensive.', solution: 'Our pre-certified HIPAA infrastructure accelerates development by 60%, with BAAs, encryption, audit logging, and access controls built into our platform from the start.' },
      { challenge: 'EHR systems use proprietary formats, making data exchange nearly impossible.', solution: 'Our HL7 FHIR middleware normalizes data from 15+ EHR systems into a unified patient record, enabling seamless interoperability.' },
      { challenge: 'Clinician burnout from excessive data entry and documentation.', solution: 'AI-powered ambient clinical documentation captures conversations, extracts structured data, and auto-generates clinical notes — saving physicians 2 hours per day.' },
      { challenge: 'Patient engagement drops after initial consultation.', solution: 'Our engagement engine uses behavioral nudges, care plan reminders, and gamified health goals to maintain 78% 90-day retention.' },
    ],
    benefits: [
      'HIPAA, HITECH, and FDA 21 CFR Part 11 compliant',
      'BAA-covered cloud infrastructure with PHI encryption',
      '99.95% platform uptime for critical care systems',
      'Reduced clinician documentation time by 2 hours/day',
      'Interoperable with 15+ major EHR/EMR systems',
    ],
    processSteps: [
      { step: 1, title: 'Compliance & Security Framework', description: 'Establish HIPAA security controls, data classification, BAA framework, and role-based access control architecture before writing a single line of application code.' },
      { step: 2, title: 'Clinical Workflow Mapping', description: 'Shadow clinical staff, map existing workflows, identify bottlenecks, and co-design digital workflows that reduce — not increase — cognitive load on care teams.' },
      { step: 3, title: 'Interoperability Layer', description: 'Build HL7 FHIR R4 integration middleware connecting to existing EHR systems, lab information systems, and pharmacy networks with bidirectional data sync.' },
      { step: 4, title: 'Validation & Go-Live', description: 'Conduct clinical validation studies, user acceptance testing with real clinicians, HIPAA penetration testing, and phased rollout with 24/7 clinical support.' },
    ],
    caseStudy: { client: 'MedFirst Health Network', result: 'Deployed a telemedicine platform across 340 clinics serving 1.2M patients, reducing no-show rates by 52% and increasing patient satisfaction scores by 34 points.', metric: '52%', metricLabel: 'No-Show Reduction' },
    faqs: [
      { question: 'Is your platform HIPAA compliant?', answer: 'Yes, fully. Our infrastructure includes AES-256 encryption at rest and in transit, granular audit logging, role-based access controls, automatic session timeouts, and we maintain a signed BAA with all clients. We undergo annual HIPAA audits by independent third parties.' },
      { question: 'Can you integrate with our existing EHR system?', answer: 'We support bidirectional HL7 FHIR R4 integration with Epic, Cerner, Allscripts, Athenahealth, and MEDITECH. Our middleware also supports legacy HL7 v2 and CDA document exchange for older systems.' },
      { question: 'What kind of AI do you use for clinical decision support?', answer: 'Our CDS engine uses transformer-based NLP for clinical note analysis, computer vision models for radiology/pathology image analysis, and ensemble ML models for risk prediction — all trained on de-identified datasets and validated against peer-reviewed clinical guidelines.' },
      { question: 'How do you handle patient data sovereignty requirements?', answer: 'We deploy region-specific infrastructure with data residency guarantees. Patient data never leaves the jurisdiction it was created in, and we support data processing agreements compliant with GDPR, PIPEDA, LGPD, and Australia\'s Privacy Act.' },
    ],
    techStack: ['React', 'Flutter', 'Python', 'GCP', 'HL7 FHIR', 'WebRTC', 'TensorFlow', 'PostgreSQL'],
  },
  {
    slug: 'retail',
    title: 'E-Commerce & Retail',
    subtitle: 'Headless commerce, AI-powered recommendation engines, and omnichannel retail platforms built for billion-dollar scale.',
    description: 'Retail is no longer about storefronts — it\'s about experiences. Today\'s consumers expect hyper-personalized product discovery, seamless checkout across every touchpoint, same-day delivery, and post-purchase engagement that turns one-time buyers into brand advocates. We build commerce platforms that go far beyond cart-and-checkout, engineering complete retail ecosystems with AI-powered merchandising, real-time inventory orchestration across warehouses, marketplace integration, and loyalty programs that measurably increase customer lifetime value. Our platforms have collectively processed over $2 billion in gross merchandise value and manage 10 million+ SKUs across fashion, electronics, grocery, and luxury verticals.',
    heroTagline: 'Commerce without boundaries.',
    icon: 'faCartShopping',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    accentColor: '#F59E0B',
    darkAccent: '#D97706',
    stats: [
      { label: 'Annual GMV Processed', value: '2', suffix: 'B+' },
      { label: 'SKUs Managed', value: '10', suffix: 'M+' },
      { label: 'Conversion Lift', value: '35', suffix: '%' },
      { label: 'Avg. PageSpeed Score', value: '97', suffix: '' },
    ],
    features: [
      { icon: 'faCode', title: 'Headless Commerce Architecture', description: 'API-first storefronts decoupled from backend commerce logic, enabling lightning-fast page loads (sub-1s LCP), A/B tested layouts, and native-app-quality PWA experiences with offline catalog browsing.' },
      { icon: 'faWandMagicSparkles', title: 'AI Recommendation Engine', description: 'Collaborative filtering + content-based hybrid models analyzing browsing history, purchase patterns, and contextual signals to deliver hyper-personalized product suggestions that increase average order value by 23%.' },
      { icon: 'faWarehouse', title: 'Real-Time Inventory Orchestration', description: 'Unified inventory visibility across warehouses, stores, 3PL partners, and dropship vendors with millisecond-accurate stock counts, automated replenishment triggers, and intelligent order routing.' },
      { icon: 'faMedal', title: 'Loyalty & Gamification Engine', description: 'Points, tiers, challenges, and referral programs with real-time reward calculation, personalized offers based on predictive churn models, and seamless integration with POS systems.' },
      { icon: 'faMagnifyingGlass', title: 'Intelligent Search & Merchandising', description: 'NLP-powered search with typo tolerance, synonym matching, visual search capabilities, and AI-driven merchandising rules that automatically optimize product ranking based on margin, inventory levels, and conversion data.' },
      { icon: 'faTruckFast', title: 'Last-Mile & Fulfillment', description: 'Multi-carrier rate shopping, real-time delivery tracking, automated returns processing, buy-online-pick-up-in-store (BOPIS), and same-day delivery orchestration with driver assignment optimization.' },
    ],
    challenges: [
      { challenge: 'Slow page loads destroy conversion rates — every 100ms delay costs 1% revenue.', solution: 'Our headless architecture with edge caching delivers sub-1-second LCP and 97+ PageSpeed scores, recovering an average 35% conversion lift.' },
      { challenge: 'Inventory discrepancies between channels cause overselling and stockouts.', solution: 'Real-time inventory sync across all channels with event-sourced ledger accuracy, reducing overselling incidents to near zero.' },
      { challenge: 'Generic product recommendations fail to engage customers.', solution: 'Our hybrid ML recommendation engine increases average order value by 23% and session duration by 40% through deep personalization.' },
      { challenge: 'Scaling during flash sales and peak events causes outages.', solution: 'Auto-scaling serverless architecture handles 100x traffic spikes with zero downtime, pre-warming for planned events like Black Friday.' },
    ],
    benefits: [
      'Sub-1-second largest contentful paint (LCP)',
      '99.99% uptime through Black Friday and flash sales',
      '23% average order value increase from AI recommendations',
      'Unified inventory across all sales channels',
      'Support for 50+ payment methods and 140+ currencies',
    ],
    processSteps: [
      { step: 1, title: 'Commerce Audit & Strategy', description: 'Analyze current tech stack, conversion funnels, and customer journey to identify revenue leaks and define the optimal commerce architecture for your scale.' },
      { step: 2, title: 'Headless Platform Build', description: 'Implement API-first commerce backend with product catalog, pricing engine, cart/checkout, and order management — decoupled from the presentation layer for maximum flexibility.' },
      { step: 3, title: 'AI & Personalization Layer', description: 'Deploy recommendation engines, intelligent search, dynamic pricing, and personalized content modules trained on your historical customer data.' },
      { step: 4, title: 'Launch & Growth Optimization', description: 'Phased rollout with A/B testing framework, conversion rate optimization sprints, and continuous performance monitoring with automated alerting.' },
    ],
    caseStudy: { client: 'LuxeThread Fashion', result: 'Migrated from Magento monolith to headless architecture, achieving a 97 PageSpeed score, 35% conversion lift, and 15-second checkout experience across 4 markets.', metric: '35%', metricLabel: 'Conversion Lift' },
    faqs: [
      { question: 'Which e-commerce platforms do you work with?', answer: 'We build custom headless solutions and also integrate with Shopify Plus, commercetools, BigCommerce, and Medusa. Our API-first approach means you\'re never locked into a single vendor.' },
      { question: 'How do you handle peak traffic events like Black Friday?', answer: 'Our auto-scaling infrastructure pre-warms resources before planned events and elastically scales during unexpected spikes. We\'ve handled 100x normal traffic with zero downtime and sub-2-second response times.' },
      { question: 'Can you integrate with our existing ERP and warehouse systems?', answer: 'Yes. We build integration middleware for SAP, Oracle, NetSuite, and custom WMS/WES systems with real-time bidirectional sync for inventory, orders, and customer data.' },
      { question: 'What\'s your approach to mobile commerce?', answer: 'We build Progressive Web Apps (PWAs) that deliver native-app-quality experiences with offline support, push notifications, and add-to-home-screen capabilities — eliminating the need for separate native app development in most cases.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Algolia', 'Stripe', 'Kafka', 'Elasticsearch'],
  },
  {
    slug: 'education',
    title: 'EdTech & eLearning',
    subtitle: 'Adaptive learning platforms, virtual classrooms, and AI-powered assessment systems transforming education globally.',
    description: 'Education is experiencing its most significant transformation since the printing press. The pandemic permanently shifted expectations — learners now demand personalized, on-demand, and engaging digital experiences that adapt to their individual pace and style. We build EdTech platforms that go beyond digitized textbooks, engineering adaptive learning engines that use machine learning to optimize content delivery, virtual classrooms that rival in-person engagement, and assessment systems that measure genuine understanding rather than rote memorization. Our platforms serve over 2 million active students across 500+ universities and corporate training programs, consistently achieving 42% higher completion rates than industry benchmarks.',
    heroTagline: 'Learning reimagined, outcomes amplified.',
    icon: 'faGraduationCap',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    accentColor: '#8B5CF6',
    darkAccent: '#7C3AED',
    stats: [
      { label: 'Active Students', value: '2', suffix: 'M+' },
      { label: 'Universities Served', value: '500', suffix: '+' },
      { label: 'Completion Rate Lift', value: '42', suffix: '%' },
      { label: 'Content Hours', value: '100', suffix: 'K+' },
    ],
    features: [
      { icon: 'faRoute', title: 'Adaptive Learning Engine', description: 'AI-personalized content paths using Item Response Theory and Bayesian Knowledge Tracing that continuously model learner competency, adjusting difficulty, content type, and pacing in real-time to maximize learning velocity.' },
      { icon: 'faChalkboardUser', title: 'Virtual Classroom Platform', description: 'Real-time video with low-latency WebRTC, interactive whiteboard with multi-user collaboration, breakout rooms, hand-raising, polls, screen sharing, and automatic session recording with AI-generated summaries.' },
      { icon: 'faClipboardCheck', title: 'Intelligent Assessment Engine', description: 'Automated grading with NLP for essay evaluation, plagiarism detection, AI-proctored exams with gaze tracking and anomaly detection, competency-based rubrics, and detailed learning analytics dashboards.' },
      { icon: 'faBook', title: 'LMS & Course Management', description: 'Full learning management system with SCORM/xAPI compliance, drip content scheduling, cohort management, certification workflows, gamified progress tracking, and integration with SIS platforms.' },
      { icon: 'faGamepad', title: 'Gamification & Engagement', description: 'XP systems, achievement badges, leaderboards, streak tracking, collaborative challenges, and social learning features that increase daily active usage by 3.2x compared to traditional LMS interfaces.' },
      { icon: 'faChartPie', title: 'Learning Analytics & Reporting', description: 'Real-time dashboards for instructors showing at-risk students, engagement heatmaps, learning objective mastery, time-on-task analysis, and automated early intervention alerts with suggested remediation paths.' },
    ],
    challenges: [
      { challenge: 'One-size-fits-all content fails to engage diverse learner populations.', solution: 'Our adaptive engine creates unique learning paths for each student, resulting in 42% higher completion rates and 2.7x faster competency achievement.' },
      { challenge: 'Online exam integrity is nearly impossible to enforce at scale.', solution: 'AI proctoring with multi-modal behavior analysis detects 98.5% of cheating attempts while maintaining a student-friendly testing experience.' },
      { challenge: 'Low engagement and high dropout rates plague online courses.', solution: 'Gamification mechanics, social learning features, and micro-learning modules keep engagement 3.2x higher than traditional LMS platforms.' },
      { challenge: 'Manual grading creates weeks-long feedback loops.', solution: 'AI-powered auto-grading for essays, code assignments, and complex assessments provides instant feedback with 93% agreement with human graders.' },
    ],
    benefits: [
      'SCORM/xAPI and LTI 1.3 compliant',
      '42% higher course completion rates',
      'Supports 100+ languages with AI translation',
      'FERPA and COPPA compliant for K-12',
      'Offline mode for low-connectivity regions',
    ],
    processSteps: [
      { step: 1, title: 'Pedagogy-Driven Design', description: 'Work with learning design experts to define competency frameworks, assessment rubrics, and optimal content sequencing based on cognitive science research.' },
      { step: 2, title: 'Platform Development', description: 'Build the LMS core, adaptive engine, virtual classroom, and assessment modules with SCORM/xAPI/LTI compliance from the ground up.' },
      { step: 3, title: 'Content Ingestion & AI Training', description: 'Import existing content, train adaptive algorithms on learner data, calibrate assessment difficulty curves, and validate AI grading against human benchmarks.' },
      { step: 4, title: 'Pilot & Scale', description: 'Run controlled pilot programs with target learner groups, iterate based on analytics, and scale across institutions with white-labeling and SSO integration.' },
    ],
    caseStudy: { client: 'GlobalSkills Academy', result: 'Deployed an adaptive learning platform across 120 universities in Southeast Asia, serving 800K students with a 42% improvement in course completion and 3.1x increase in student engagement.', metric: '800K', metricLabel: 'Students Served' },
    faqs: [
      { question: 'Does your platform support SCORM and LTI standards?', answer: 'Yes. We support SCORM 1.2, SCORM 2004, xAPI (Tin Can), and LTI 1.3 for seamless integration with existing LMS ecosystems and third-party content providers.' },
      { question: 'How does your adaptive learning engine work?', answer: 'Our engine uses Bayesian Knowledge Tracing and Item Response Theory to model each learner\'s competency in real-time. It adjusts content difficulty, delivery format (video, text, interactive), and pacing based on performance data and learning style signals.' },
      { question: 'Can students access content offline?', answer: 'Yes. Our PWA supports offline content download with progress sync when connectivity is restored — critical for learners in regions with unreliable internet access.' },
      { question: 'What about data privacy for minors?', answer: 'Our platform is FERPA and COPPA compliant with parental consent workflows, data minimization, and strict age-gating controls for K-12 deployments.' },
    ],
    techStack: ['React', 'React Native', 'Python', 'TensorFlow', 'AWS', 'WebRTC', 'Redis', 'MongoDB'],
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    subtitle: 'Fleet management, AI route optimization, and warehouse automation systems engineered for global-scale operations.',
    description: 'The logistics industry moves $12 trillion in goods annually, yet it remains plagued by inefficiency — empty miles, warehouse bottlenecks, delayed shipments, and opaque supply chains. We build intelligent logistics platforms that turn operational chaos into orchestrated precision. Our solutions combine IoT telemetry, machine learning route optimization, and real-time visibility dashboards to help fleet operators, 3PL providers, and enterprise supply chain teams reduce costs, accelerate delivery, and achieve sustainability targets. Our platforms currently track 25,000+ vehicles, orchestrate 200,000+ daily deliveries, and have saved our clients a cumulative 22% in fuel costs through AI-optimized routing.',
    heroTagline: 'Every mile optimized, every shipment tracked.',
    icon: 'faTruckFast',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    accentColor: '#0EA5E9',
    darkAccent: '#0284C7',
    stats: [
      { label: 'Vehicles Tracked', value: '25', suffix: 'K+' },
      { label: 'Daily Deliveries', value: '200', suffix: 'K' },
      { label: 'Fuel Cost Savings', value: '22', suffix: '%' },
      { label: 'On-Time Delivery', value: '99.2', suffix: '%' },
    ],
    features: [
      { icon: 'faLocationDot', title: 'Real-Time Fleet Tracking', description: 'GPS/GLONASS tracking with 5-second update intervals, geofencing alerts, driver behavior scoring (harsh braking, speeding, idling), and predictive maintenance alerts based on engine diagnostic data.' },
      { icon: 'faRoute', title: 'AI Route Optimization', description: 'Multi-constraint route planning using genetic algorithms and reinforcement learning, considering traffic, weather, vehicle capacity, time windows, driver hours-of-service, and priority deliveries — reducing mileage by 18% on average.' },
      { icon: 'faRobot', title: 'Warehouse Automation & WMS', description: 'Pick-pack-ship workflows with barcode/RFID scanning, robotic integration for automated sorting, slotting optimization, wave planning, and real-time labor allocation balancing throughput and cost.' },
      { icon: 'faBell', title: 'Customer Delivery Notifications', description: 'Real-time tracking pages, ETA predictions with 95% accuracy, automated SMS/email notifications, electronic proof of delivery with photo capture, and customer rating integration.' },
      { icon: 'faChartBar', title: 'Supply Chain Visibility', description: 'End-to-end shipment tracking from manufacturer to customer, multi-modal transport visibility (ocean, air, rail, road), customs documentation automation, and predictive delay detection.' },
      { icon: 'faLeaf', title: 'Sustainability & Carbon Tracking', description: 'CO2 emission calculation per shipment, carbon offset integration, fuel consumption analytics, electric vehicle routing optimization, and ESG compliance reporting dashboards.' },
    ],
    challenges: [
      { challenge: 'Empty miles and inefficient routing waste 30% of fleet fuel budgets.', solution: 'AI route optimization with dynamic re-routing reduces fuel costs by 22% and empty miles by 34%, with continuous improvement from delivery data feedback loops.' },
      { challenge: 'Lack of real-time visibility causes customer dissatisfaction and missed SLAs.', solution: 'End-to-end IoT tracking with predictive ETAs (95% accuracy) and proactive customer notifications maintain a 99.2% on-time delivery rate.' },
      { challenge: 'Manual warehouse operations create bottlenecks during peak seasons.', solution: 'Automated WMS with robotic integration and AI-powered wave planning increases throughput by 60% during peak periods without additional labor.' },
      { challenge: 'ESG and carbon reporting requirements are becoming mandatory.', solution: 'Built-in carbon tracking per shipment with automated ESG reporting, enabling data-driven sustainability strategies and regulatory compliance.' },
    ],
    benefits: [
      '22% average reduction in fuel costs',
      '99.2% on-time delivery rate',
      'Real-time tracking with 5-second GPS updates',
      '60% warehouse throughput increase during peak',
      'Automated ESG/carbon compliance reporting',
    ],
    processSteps: [
      { step: 1, title: 'Operations Audit', description: 'Analyze existing fleet operations, warehouse workflows, delivery patterns, and technology stack to identify cost-saving opportunities and efficiency bottlenecks.' },
      { step: 2, title: 'IoT & Integration Layer', description: 'Deploy GPS/telematics devices, integrate with existing TMS/WMS systems, establish real-time data pipelines from vehicles, warehouses, and partner networks.' },
      { step: 3, title: 'AI Optimization Deployment', description: 'Train route optimization models on historical delivery data, implement predictive maintenance algorithms, and deploy dynamic dispatch engines.' },
      { step: 4, title: 'Continuous Optimization', description: 'Establish feedback loops from delivery outcomes, continuously retrain ML models, expand automation coverage, and scale across new regions and service types.' },
    ],
    caseStudy: { client: 'RapidShip Logistics', result: 'Optimized routing for a 5,000-vehicle fleet across 3 countries, reducing fuel costs by $4.2M annually and improving on-time delivery from 91% to 99.2%.', metric: '$4.2M', metricLabel: 'Annual Fuel Savings' },
    faqs: [
      { question: 'Does your platform integrate with existing TMS/WMS systems?', answer: 'Yes. We integrate with SAP TM, Oracle TMS, Manhattan WMS, Blue Yonder, and custom systems via REST APIs. Our middleware handles data normalization and bidirectional sync.' },
      { question: 'How accurate are your ETA predictions?', answer: 'Our ML-based ETA predictions achieve 95% accuracy within a 15-minute window by analyzing historical delivery data, real-time traffic, weather conditions, and driver behavior patterns.' },
      { question: 'Can you handle cold chain and specialized cargo?', answer: 'Yes. Our platform supports temperature-monitored cold chain tracking, hazmat compliance documentation, oversized cargo routing restrictions, and pharmaceutical GDP-compliant chain of custody.' },
      { question: 'What IoT hardware do you recommend?', answer: 'We are hardware-agnostic and integrate with Samsara, CalAmp, Geotab, and custom OBD-II devices. For warehouses, we support Zebra, Honeywell, and Impinj RFID systems.' },
    ],
    techStack: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'AWS IoT', 'Google Maps', 'Kafka', 'Python'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Tech',
    subtitle: 'Property management, virtual tours, and real estate marketplace platforms serving $10B+ in transaction volume.',
    description: 'Real estate — the world\'s largest asset class — is finally being digitized. From property search and virtual tours to transaction management and building operations, PropTech is transforming every stage of the real estate lifecycle. We build platforms that serve the complete ecosystem: buyers discovering properties through immersive 3D tours, agents managing pipelines with AI-powered CRMs, investors analyzing markets with predictive analytics, and property managers maintaining portfolios with IoT-enabled building management systems. Our platforms have facilitated over $10 billion in transaction volume, hosted 100,000+ virtual property tours, and manage 500,000+ active property listings across residential, commercial, and industrial verticals.',
    heroTagline: 'Digitizing the world\'s largest asset class.',
    icon: 'faBuilding',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    accentColor: '#EC4899',
    darkAccent: '#DB2777',
    stats: [
      { label: 'Transaction Volume', value: '10', suffix: 'B+' },
      { label: 'Virtual Tours Hosted', value: '100', suffix: 'K+' },
      { label: 'Active Listings', value: '500', suffix: 'K+' },
      { label: 'Markets Covered', value: '45', suffix: '' },
    ],
    features: [
      { icon: 'faSearch', title: 'Intelligent Property Search', description: 'NLP-powered search ("3BR with a view near good schools"), map-based browsing with polygon draw search, saved search alerts, price prediction overlays, and neighborhood comparison tools with crime, school, and transit data.' },
      { icon: 'faVrCardboard', title: '3D Virtual Tours & Staging', description: 'WebXR-powered property walkthroughs with dollhouse view, measurement tools, interactive hotspots, AI virtual staging that furnishes empty rooms, and compatibility with Meta Quest and Apple Vision Pro headsets.' },
      { icon: 'faHouseChimney', title: 'Property Management Suite', description: 'Tenant portals for rent payment and maintenance requests, landlord dashboards with financial reporting, automated lease generation, unit turnover checklists, and vendor management with bid comparison.' },
      { icon: 'faChartLine', title: 'Investment Analytics Platform', description: 'Market analysis with comp data from MLS feeds, ROI projections with Monte Carlo simulation, cap rate calculators, rehab cost estimators, and portfolio performance dashboards with IRR tracking.' },
      { icon: 'faFileContract', title: 'Digital Transaction Management', description: 'End-to-end digital closings with e-signature integration (DocuSign/HelloSign), title search automation, escrow tracking, commission management, and compliance document generation.' },
      { icon: 'faBuildingCircleCheck', title: 'Smart Building Operations', description: 'IoT-enabled building management with HVAC optimization, energy monitoring, occupancy tracking, predictive maintenance for elevators/plumbing, and tenant experience apps with amenity booking.' },
    ],
    challenges: [
      { challenge: 'Property search is frustrating — buyers can\'t express what they actually want.', solution: 'NLP-powered natural language search understands queries like "modern 3BR near parks with a view under $500K," delivering 89% search satisfaction scores.' },
      { challenge: 'Physical property tours are time-consuming and limit market reach.', solution: '3D virtual tours with AI staging let buyers tour properties remotely, reducing time-to-offer by 40% and expanding buyer pools beyond local markets.' },
      { challenge: 'Property management is fragmented across spreadsheets and legacy tools.', solution: 'Unified platform covering tenant portals, maintenance, accounting, and vendor management — reducing administrative overhead by 55%.' },
      { challenge: 'Investment analysis relies on incomplete data and gut feeling.', solution: 'ML-powered property valuation models with 94% accuracy, drawing from MLS, census, permit, and transaction data to enable data-driven investment decisions.' },
    ],
    benefits: [
      '3D virtual tours compatible with VR headsets',
      'ML property valuation with 94% accuracy',
      '40% reduction in time-to-offer',
      'Unified management across residential & commercial',
      'Integration with MLS, Zillow, and Realtor.com feeds',
    ],
    processSteps: [
      { step: 1, title: 'Market & Data Strategy', description: 'Define target markets, data sources (MLS, public records, census), user personas (agents, buyers, investors, managers), and core platform capabilities.' },
      { step: 2, title: 'Platform Architecture', description: 'Build listing management, search infrastructure, virtual tour hosting, user authentication, and payment processing with multi-tenancy support for brokerages.' },
      { step: 3, title: 'AI & Visualization Layer', description: 'Deploy NLP search, property valuation models, 3D tour rendering pipeline, AI virtual staging, and interactive map visualization with data overlays.' },
      { step: 4, title: 'Integration & Launch', description: 'Connect MLS feeds, IDX compliance, e-signature providers, payment processors, and CRM systems. Launch with SEO-optimized listing pages and performance marketing setup.' },
    ],
    caseStudy: { client: 'MetroHomes Realty', result: 'Built a marketplace platform with 3D tours serving 200K+ listings across 12 metropolitan areas, reducing average time-to-close by 18 days and generating $340M in first-year GMV.', metric: '$340M', metricLabel: 'First-Year GMV' },
    faqs: [
      { question: 'Do you integrate with MLS systems?', answer: 'Yes. We integrate with RETS and RESO Web API standards, supporting major MLS systems including Bright MLS, Stellar MLS, ARMLS, and regional REALTOR associations. Listings sync in near-real-time.' },
      { question: 'How do your virtual tours work?', answer: 'Our tours use either Matterport-hosted 3D scans or our proprietary WebXR viewer built on Three.js. Tours support dollhouse view, measurement tools, hotspot annotations, and can be experienced on desktop, mobile, or VR headsets.' },
      { question: 'Can the platform handle commercial real estate?', answer: 'Absolutely. We support CRE-specific features including NNN lease analysis, tenant improvement tracking, CAM charge reconciliation, Argus DCF integration, and institutional investor reporting.' },
      { question: 'What about fair housing compliance?', answer: 'Our platform includes Fair Housing Act compliance checks on all listing descriptions, automated redaction of discriminatory language, and advertising guidelines enforcement across marketing channels.' },
    ],
    techStack: ['Next.js', 'Three.js', 'PostgreSQL', 'Mapbox', 'Stripe', 'AWS', 'Redis', 'Elasticsearch'],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(i => i.slug === slug)
}

export function getIndustryFallbackImage(index: number = 0): string {
  const fallbacks = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454165833767-1229d444455b?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558441719-ffb4d452074a?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop',
  ]
  return fallbacks[index % fallbacks.length]
}
