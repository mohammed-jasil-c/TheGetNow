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

async function polish() {
  console.log('--- STARTING FINAL VISUAL \u0026 CONTENT POLISH ---');

  // 1. Delete Duplicate Portfolio Entries (Keep only one per unique title)
  const { data: allPortfolio } = await supabase.from('pages').select('id, slug, title').eq('category', 'portfolio');
  const seenTitles = new Set();
  const toDelete = [];

  if (allPortfolio) {
    for (const p of allPortfolio) {
      if (seenTitles.has(p.title)) {
        toDelete.push(p.id);
      } else {
        seenTitles.add(p.title);
      }
    }
  }

  if (toDelete.length > 0) {
    console.log(`Deleting ${toDelete.length} duplicate portfolio entries...`);
    await supabase.from('pages').delete().in('id', toDelete);
  }

  // 2. High-Fidelity Unique Imagery \u0026 Content Map
  const polishData = {
    industries: [
      {
        slug: 'healthcare',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        title: 'Healthcare \u0026 MedTech Systems',
        desc: `## Engineering the Future of Global Health

Our engineering team specializes in building high-fidelity MedTech solutions that prioritize clinical reliability, data security, and seamless interoperability. We believe that the future of healthcare is digital, integrated, and patient-centric.

### Telemedicine \u0026 Virtual Care
We develop low-latency video consultation platforms that bridge the gap between patients and providers regardless of geography. These systems are enriched with real-time vitals tracking, integrated billing, and automated scheduling. Our architecture is designed to handle thousands of concurrent sessions while maintaining sub-second latency and end-to-end encryption.

### EHR \u0026 Interoperability
One of the biggest challenges in MedTech is data siloization. We build EHR (Electronic Health Record) systems from the ground up to support HL7 FHIR standards. This ensures that clinical data can be securely exchanged across different systems, creating a unified source of truth for patient history.

### AI-Driven Clinical Support
We integrate machine learning models directly into the clinician's workflow. By analyzing longitudinal patient data, our AI components help physicians identify patterns such as early indicators of sepsis or potential adverse drug interactions, improving both accuracy and patient outcomes.`
      },
      {
        slug: 'smart-mobility',
        img: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e',
        title: 'Smart Mobility \u0026 Automotive Tech',
        desc: `## Reimagining Urban Transportation Architecture

As cities grow more complex, the need for intelligent mobility ecosystems becomes paramount. Our team builds the digital infrastructure that powers the next generation of urban transportation, from EV charging networks to autonomous fleet coordination.

### Integrated Fleet Management
We develop real-time fleet orchestration platforms that utilize advanced routing algorithms and IoT telemetry. Our systems help logistics companies and transit agencies optimize vehicle deployment, reduce fuel consumption by up to 30%, and provide sub-second accuracy for passenger wait times.

### EV Charging \u0026 Infrastructure
We engineer the software layer for global electric vehicle charging networks. Our solutions handle everything from dynamic load balancing of energy grids to seamless mobile payment processing and real-time station availability mapping through high-performance geospatial APIs.

### Driver \u0026 Pedestrian Safety Systems
Safety is our highest engineering priority. We implement vision-based AI models that monitor road conditions and driver behavior in real-time, providing proactive alerts and emergency interventions that significantly reduce accident rates in urban environments.`
      },
      {
        slug: 'aerospace',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d06eb21aa',
        title: 'Aerospace \u0026 High-Altitude Solutions',
        desc: `## Engineering for the Extremes of Performance

Aerospace technology demands a level of precision and reliability that few other sectors require. We build the mission-critical software that powers high-altitude communications, satellite telemetry, and aerospace manufacturing logistics.

### Satellite Telemetry \u0026 Control
Our engineers develop high-performance ground station software that processes massive streams of telemetry from orbital assets. We implement complex signal processing algorithms and time-series databases to track satellite health and optimize mission objectives in real-time.

### Aerospace Supply Chain Orchestration
Manufacturing a modern aircraft involves millions of parts and thousands of global suppliers. We build blockchain-enabled supply chain ecosystems that provide 100% traceability for every critical component, ensuring compliance with global aviation safety standards and reducing production bottlenecks.

### Predictive Maintenance for Flight Ops
We utilize advanced predictive models and vibration analysis to monitor aircraft engines and structural integrity. Our systems analyze billions of rows of flight data to identify maintenance requirements weeks before they become operational issues, maximizing aircraft availability and safety.`
      }
    ],
    portfolio: [
      {
        slug: 'finova-banking',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        title: 'FinoVa Neo-Banking Architecture',
        desc: `## Modernizing Regional Banking at Massive Scale

FinoVa Financial faced a critical bottleneck: their core banking operations were running on decades-old COBOL systems. They needed a complete architectural overhaul—moving to an API-first, microservices-based platform—without a single second of downtime for their 2 million active accounts.

### Strategic Execution: The Strangler Pattern
We implemented the Strangler Pattern, gradually replacing legacy functionalities with new microservices while the old system was still running. This ensured that critical operations like interest calculation and ledger updates remained accurate throughout the migration journey.

### High-Frequency Transaction Engine
The new core engine processes transactions as immutable events using Apache Kafka. This allows for sub-second consistency across savings, loans, and credit modules, while providing a perfect audit trail that exceeds all regulatory banking standards.

### Impact \u0026 Future Readiness
The new platform achieved a 10x improvement in transaction throughput and a 45% reduction in infrastructure costs. Most importantly, it transformed FinoVa from a traditional bank into a technology-first financial services provider, capable of launching new products in days rather than months.`
      }
    ]
  };

  // 3. Apply Polished Data
  for (const item of polishData.industries) {
    console.log(`Polishing Industry: ${item.title}...`);
    await supabase.from('pages').update({
      title: item.title,
      description: item.desc,
      featured_image: `${item.img}?w=1200&auto=format&fit=crop`,
      published: true
    }).eq('slug', item.slug).eq('category', 'industries');
  }

  for (const item of polishData.portfolio) {
    console.log(`Polishing Portfolio: ${item.title}...`);
    await supabase.from('pages').update({
      title: item.title,
      description: item.desc,
      featured_image: `${item.img}?w=1200&auto=format&fit=crop`,
      published: true
    }).eq('slug', item.slug).eq('category', 'portfolio');
  }

  console.log('--- FINAL POLISH COMPLETE ---');
}

polish();
