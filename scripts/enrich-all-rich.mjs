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

// --- Industry Data (Extra Long Form) ---
const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare \u0026 MedTech Engineering',
    subtitle: 'HIPAA-compliant telemedicine, intelligent EHR interfaces, and clinical decision support systems.',
    description: `## Engineering the Next Generation of Patient-Centric MedTech

The global healthcare landscape is at a critical inflection point. As traditional hospital systems struggle with fragmented data and siloed operations, the need for integrated, high-fidelity digital platforms has never been more urgent. Our engineering team specializes in bridging this gap by building MedTech solutions that prioritize clinical reliability, data security, and seamless interoperability.

### The Evolution of Telemedicine \u0026 Remote Monitoring
Telemedicine has moved beyond simple video calls. Today's premium platforms require a sophisticated orchestration of low-latency streaming, real-time vital signs integration, and automated clinical documentation. We utilize WebRTC frameworks optimized for variable network conditions, ensuring that a specialist in New York can provide crystal-clear guidance to a clinic in a remote region without a second of lag.

Our remote monitoring systems leverage IoT gateway protocols to ingest data from wearable devices, processing millions of data points per second. Using edge computing, we can trigger immediate alerts for medical staff when heart rate or blood oxygen thresholds are crossed, potentially saving lives through proactive intervention.

### Interoperability via HL7 FHIR Standards
One of the greatest challenges in MedTech is data fragmentation. We build EHR (Electronic Health Record) systems from the ground up to support HL7 FHIR (Fast Healthcare Interoperability Resources) standards. This ensures that the patient data generated within our platforms can be securely exchanged with other hospital systems, clinics, and insurance providers worldwide, creating a single, unified source of truth for every patient journey.

### Security, Compliance, \u0026 The Zero-Trust Model
Given the sensitivity of medical data, we implement a 'Zero-Trust' security architecture. Every request is authenticated, authorized, and encrypted. We use AES-256 for data at rest and TLS 1.3 for data in transit. Our systems are built to exceed HIPAA, GDPR, and SOC2 compliance requirements, featuring full audit logging and multi-factor authentication for every clinical user.

### AI-Driven Clinical Support
We integrate advanced machine learning models into the physician's workflow. By analyzing longitudinal patient data, our AI components can identify patterns that might be invisible to the human eye, such as early indicators of sepsis or adverse drug interactions. This doesn't replace the doctor; it provides them with a super-powered diagnostic tool that improves accuracy and patient outcomes.`,
    layout_template: 'healthcare-app-detail',
    accent_color: '#06B6D4',
    featured_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200\u0026auto=format\u0026fit=crop',
    stats: [
      { label: 'Patient Interactions', value: '5M+' },
      { label: 'Licensed Providers', value: '50K+' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Data Security', value: '100%' }
    ],
    features: [
      { title: 'Telemedicine Platforms', description: 'Multi-party video consultation with integrated medical imaging sharing.' },
      { title: 'EHR Orchestration', description: 'Unified patient records with real-time sync across hospital departments.' },
      { title: 'IoT Health Sync', description: 'Seamless integration with wearable medical devices for real-time monitoring.' },
      { title: 'Clinical AI', description: 'Diagnostic support models trained on verified medical data sets.' }
    ]
  },
  {
    slug: 'event-management',
    title: 'Global Event Technology Ecosystems',
    subtitle: 'Scalable digital infrastructure for conferences, music festivals, and corporate summits.',
    description: `## Engineering High-Concurrency Event Landscapes

In the high-stakes world of global events, technology is the silent partner that ensures everything from ticketing to live engagement happens without a hitch. We build the digital backbone for massive-scale gatherings where failure is not an option.

### Scalable Ticketing \u0026 Inventory Architecture
The primary challenge for any major event is the 'viral peak'—the moment tickets go on sale and hundreds of thousands of users hit the system simultaneously. Our ticketing engines utilize distributed queueing systems and serverless auto-scaling to handle requests without bottlenecking. By implementing transactional consistency at the database level, we prevent over-selling and ensure every fan has a fair chance to secure their spot.

### On-Site Connectivity \u0026 RFID Ecosystems
Once on-site, the attendee experience is driven by seamless connectivity. We integrate RFID and NFC technologies for contactless entry and cashless payment systems. This not only speeds up entry times by 40% but also provides organizers with real-time data on attendee flow and spending patterns. Our mobile companion apps provide indoor navigation using Bluetooth Low Energy (BLE) beacons, helping users find sessions and exhibitors in massive convention centers.

### Real-Time Behavioral Analytics
Understand your audience like never before. Our platforms ingest data from every touchpoint—app interactions, entry scans, and session attendance. We process this data using real-time stream processing, providing organizers with live dashboards that show venue density, popular workshops, and attendee sentiment. Post-event, we deliver deep-dive reports that help sponsors understand their ROI and assist organizers in planning the next iteration.

### The Hybrid Future: Virtual \u0026 Physical Integration
Modern events are no longer restricted to a physical venue. We build 'Phygital' (Physical + Digital) experiences that allow remote attendees to interact with the live stage in real-time. Whether it's through live-polling, virtual networking lounges, or high-definition broadcasting with sub-second latency, we ensure that every participant, regardless of location, feels like they're in the front row.`,
    layout_template: 'event-booking-app-detail',
    accent_color: '#8B5CF6',
    featured_image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200\u0026auto=format\u0026fit=crop',
    stats: [
      { label: 'Tickets Processed', value: '15M+' },
      { label: 'Peak Concurrency', value: '250K+' },
      { label: 'Event Partners', value: '1,200+' },
      { label: 'Engagement Rate', value: '85%' }
    ],
    features: [
      { title: 'Viral Ticketing Engine', description: 'Built to survive the most demanding on-sale windows in the industry.' },
      { title: 'RFID Access Control', description: 'Contactless entry systems that reduce wait times and improve security.' },
      { title: 'Live Streaming Hub', description: 'Ultra-low latency broadcasting for global hybrid event accessibility.' },
      { title: 'Sponsor Analytics', description: 'Detailed engagement metrics that prove value to event partners.' }
    ]
  }
];

// --- Portfolio Data (Extra Long Case Studies) ---
const projects = [
  {
    slug: 'finova-banking',
    title: 'FinoVa: Orchestrating a Neo-Banking Revolution',
    subtitle: 'Replacing a 30-year-old core banking system with a modern, high-frequency microservices architecture.',
    description: `## The Strategic Context: Breaking the Legacy Cycle

FinoVa Financial, a regional powerhouse, was trapped in a cycle of maintenance. Their 30-year-old COBOL-based core banking system was preventing them from launching new features, such as instant payments and crypto-wallets, that their younger demographic demanded. They needed to migrate 2 million active accounts to a modern platform without a single millisecond of downtime.

## The Engineering Strategy: Transitioning via the Strangler Pattern

We didn't just 'flip a switch'. Instead, we implemented the Strangler Pattern, gradually replacing legacy functionalities with new microservices while the old system was still running. This ensured that critical operations like interest calculation and ledger updates remained accurate throughout the 18-month transition.

**Technical Architecture Pillars:**
- **Event-Driven Resilience**: We used Apache Kafka to process every transaction as an immutable event. This means if a service failed, it could replay the events and rebuild its state perfectly.
- **CQRS Implementation**: By separating the way we write data (Command) from the way we read it (Query), we allowed user dashboards to load in under 100ms while maintaining strict transactional integrity for transfers.
- **Cloud-Native Scalability**: Every component was containerized using Docker and orchestrated via Kubernetes on AWS, allowing the system to scale its resources automatically based on live traffic spikes.

## The Solution: A Unified Digital Core

We built a suite of internal APIs that unified various banking products—savings, loans, and wealth management—into a single interface. On the frontend, we developed a high-fidelity mobile app using React Native that featured biometrics, real-time spending insights, and a seamless onboarding flow that takes less than 3 minutes.

## The Impact: Banking at the Speed of Light

The results were transformative:
- **10x Improvement** in transaction processing throughput.
- **45% Reduction** in operational infrastructure costs within the first year.
- **ZERO Downtime** during the entire migration period.
- **Highest Rated** banking app in their region (4.8 stars).

FinoVa is no longer just a bank; it's a technology company that provides financial services. They can now go from 'idea' to 'launch' in weeks, rather than months.`,
    category: 'portfolio',
    layout_template: 'stock-trading-app-development',
    accent_color: '#0057FF',
    featured_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200\u0026auto=format\u0026fit=crop',
    content_json: {
      tags: ['FinTech', 'AWS', 'Neo-Banking'],
      client: 'FinoVa Financial Global',
      results: [
        { label: 'Speed Increase', value: '1,000%' },
        { label: 'Active Users', value: '2.1M' },
        { label: 'IT Cost Savings', value: '45%' }
      ]
    }
  },
  {
    slug: 'medisync-health',
    title: 'MediSync: Engineering Global Healthcare Accessibility',
    subtitle: 'Connecting thousands of doctors across 12 countries via a clinical-grade low-latency network.',
    description: `## The Ambition: Global Healthcare Delivery

MediSync Health's vision was bold: provide every person on earth with access to a specialist within 15 minutes. To achieve this, they needed more than a video app; they needed a clinical-grade ecosystem that could perform in high-stakes medical situations across wildly different network environments.

## The Challenge: Clinical Reliability \u0026 Fragmented Data

Medical consultations require absolute clarity. A drop in video quality could mean a doctor misses a critical physical symptom. Furthermore, the platform had to handle EHR data from disparate sources while maintaining the strictest HIPAA and GDPR compliance across multiple jurisdictions.

## The solution: Edge-First Medical Infrastructure

We engineered the MediSync core on a multi-regional Google Cloud architecture. By utilizing Cloud CDN and Edge compute, we placed the media processing as close to the user as possible, reducing round-trip latency by over 60%.

**Engineering Highlights:**
- **Diagnostic-Grade Video**: We developed a custom WebRTC stack that prioritizes frame clarity over frame rate, ensuring that medical visuals remain sharp even on 3.5G connections.
- **Interoperable EHR Vault**: A centralized data store built on PostgreSQL with specialized encryption layers, capable of ingesting and normalizing data from legacy hospital systems using HL7 FHIR protocols.
- **Global Provider Routing**: An intelligent load balancer that matches patients with doctors based on language, specialty, and current time-zone availability.

## The Impact: Saving Lives through Speed

Today, MediSync is a vital part of the healthcare infrastructure in 12 countries:
- **50,000+** licensed physicians active on the platform.
- **500,000+** successful consultations conducted every month.
- **60% Reduction** in patient wait times for specialist consultations.
- **Zero Data Breaches** in over 3 years of operation.

By removing the physical barriers to healthcare, MediSync has democratized medical expertise, ensuring that quality care is a right, not a privilege of geography.`,
    category: 'portfolio',
    layout_template: 'healthcare-app-detail',
    accent_color: '#10B981',
    featured_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200\u0026auto=format\u0026fit=crop',
    content_json: {
      tags: ['HealthTech', 'WebRTC', 'GCP'],
      client: 'MediSync International',
      results: [
        { label: 'Doctors', value: '50K+' },
        { label: 'Wait Time', value: '-60%' },
        { label: 'Regions', value: '12' }
      ]
    }
  }
];

// --- Blog Data (Full Technical Articles) ---
const blogPosts = [
  {
    slug: 'future-of-ai-enterprise-2025',
    title: 'The AI Infrastructure Horizon: Strategies for 2025',
    subtitle: 'Moving beyond the hype: Why the next phase of enterprise AI is about autonomous architecture, not just chatbots.',
    description: `## The Shift from Reactive to Autonomous AI

As the initial wave of Generative AI excitement matures into operational reality, engineering leaders are facing a fundamental shift. In 2023 and 2024, the goal was simply to 'get a chatbot running'. In 2025, the goal is to weave AI into the autonomous fabric of the organization.

### The Rise of Agentic Frameworks
The most significant trend we are seeing is the move from basic LLM prompts to complex Agentic Workflows. An autonomous agent doesn't just provide an answer; it plans a multi-step project, executes API calls to external systems, evaluates its own progress, and iterates until the goal is achieved. In an enterprise context, this means AI systems that can independently manage supply chain disruptions or conduct multi-layer security audits with minimal human intervention.

### Multimodal Intelligence as the Default
We are leaving the text-only era. The next generation of enterprise AI must be multimodal by design. This means models that can reason across technical diagrams, live factory floor video feeds, and unstructured documents simultaneously. In sectors like energy and manufacturing, this is unlocking 'Visual Digital Twins'—AI systems that can 'see' equipment wear and tear and cross-reference it with maintenance logs to predict failures weeks in advance.

### Solving the Hallucination Problem with Deep RAG
Retrieval-Augmented Generation (RAG) has become the standard for grounding AI in corporate facts. However, simple RAG is no longer enough. We are implementing what we call 'Deep RAG'—architectures that don't just find related documents, but understand the hierarchy and relationship between complex datasets. By using advanced vector graph databases and metadata-rich storage, we can ensure that AI outputs are 99.9% accurate and fully traceable to their source.

### The Sovereignty Challenge: Privacy \u0026 On-Premise AI
As organizations realize the value of their proprietary data, the move toward 'Private AI' is accelerating. Many of our enterprise clients are now deploying small, highly optimized models (like Llama-3 or specialized Mistral variants) within their own VPCs or on-premise data centers. This allows them to leverage the power of LLMs without ever exposing their intellectual property to the public cloud.

### Conclusion: Building for the Next Decade
The winners of 2025 will be those who stop treating AI as a 'plugin' and start treating it as core 'infrastructure'. This means redesigning your data pipelines, your security protocols, and your team structures to support a world where AI agents are first-class citizens in your technology stack.`,
    featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200\u0026auto=format\u0026fit=crop',
    content_json: {
      author: {
        name: 'Julian Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100\u0026h=100\u0026fit=crop\u0026crop=face',
        role: 'Head of AI Engineering'
      },
      readTime: '15 min read'
    }
  }
];

async function enrich() {
  console.log('--- STARTING MASTER ENRICHMENT (DEEP DIVE CONTENT) ---');

  // 1. Enrich Industries
  for (const ind of industries) {
    console.log(`Enriching Industry: ${ind.title}...`);
    const { data: pageResult, error: pageError } = await supabase
      .from('pages')
      .upsert({
        slug: ind.slug,
        category: 'industries',
        title: ind.title,
        subtitle: ind.subtitle,
        description: ind.description,
        layout_template: ind.layout_template,
        accent_color: ind.accent_color,
        featured_image: ind.featured_image,
        published: true,
        meta_title: `${ind.title} | Premium Industry Solutions`,
        meta_description: ind.subtitle
      }, { onConflict: 'category,slug' })
      .select().single();

    if (!pageError && pageResult) {
      // Clear and re-populate stats/features
      await supabase.from('page_stats').delete().eq('page_id', pageResult.id);
      await supabase.from('page_features').delete().eq('page_id', pageResult.id);
      await supabase.from('page_stats').insert(ind.stats.map((s, i) => ({ ...s, page_id: pageResult.id, order_index: i })));
      await supabase.from('page_features').insert(ind.features.map((f, i) => ({ ...f, page_id: pageResult.id, order_index: i })));
    } else if (pageError) {
        console.error(`Error for ${ind.slug}:`, pageError);
    }
  }

  // 2. Enrich Portfolio
  for (const proj of projects) {
    console.log(`Enriching Project: ${proj.title}...`);
    const { error } = await supabase.from('pages').upsert({
      ...proj,
      published: true,
      meta_title: `${proj.title} | Elite Case Study`,
      meta_description: proj.subtitle
    }, { onConflict: 'category,slug' });
    if (error) console.error(`Error for portfolio ${proj.slug}:`, error);
  }

  // 3. Enrich Blog
  for (const post of blogPosts) {
    console.log(`Enriching Blog: ${post.title}...`);
    const { error } = await supabase.from('pages').upsert({
      ...post,
      category: 'blog',
      published: true,
      meta_title: `${post.title} | The Engineering Journal`,
      meta_description: post.subtitle
    }, { onConflict: 'category,slug' });
    if (error) console.error(`Error for blog ${post.slug}:`, error);
  }

  console.log('--- MASTER ENRICHMENT COMPLETE ---');
}

enrich();
