import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Provide absolute fallback data if JS dynamic compilation is tricky
import 'dotenv/config';

// 1. Initialize Supabase
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing Supabase URL or Service Role Key in .env.local");
  process.exit(1);
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// 2. Data to Migrate
const defaultTechIcons = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' }
];

const dynamicPages = [
  {
    slug: 'web-development', category: 'services',
    title: 'Custom Web Platform Engineering',
    subtitle: 'High-performance React & Node.js stacks built for massive scale.',
    sections: [
      {
        type: 'HeroCinematic',
        data: {
          title: 'Custom Web Platform Engineering',
          subtitle: 'High-performance React & Node.js stacks built for massive scale.',
          heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
          gradientFrom: 'from-blue-600/20', gradientTo: 'to-sky-600/20',
          techIcons: defaultTechIcons,
          ctaText: 'Build Your Platform'
        }
      },
      {
        type: 'TechGridScroll',
        data: { icons: defaultTechIcons }
      },
      {
        type: 'FeatureBento',
        data: {
          overview: 'We build enterprise-grade web applications tailored for your unique workflow. Moving beyond templates, we engineer from the ground up for maximum performance.',
          features: [
            { title: 'Server-Side Rendering', desc: 'Unmatched SEO and initial load performance.', icon: 'fa-solid fa-server', colSpan: 2 },
            { title: 'Microservices', desc: 'Decoupled architecture for endless scalability.', icon: 'fa-solid fa-cubes', colSpan: 1 },
            { title: 'Real-time Data', desc: 'Socket integrations for live dashboards.', icon: 'fa-solid fa-bolt', colSpan: 3 },
          ]
        }
      }
    ]
  },
  {
    slug: 'mobile-app-development', category: 'services',
    title: 'Native & Cross-Platform Mobile Apps',
    subtitle: 'Award-winning mobile experiences for iOS and Android built on Flutter and Swift.',
    sections: [
      {
        type: 'HeroIsometric',
        data: {
          title: 'Native & Cross-Platform Mobile Apps',
          subtitle: 'Award-winning mobile experiences for iOS and Android built on Flutter and Swift.',
          heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920&auto=format&fit=crop',
          gradientFrom: 'from-violet-600/20', gradientTo: 'to-purple-600/20',
          techIcons: [
            { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
            { name: 'Swift', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
            { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' }
          ],
          ctaText: 'Launch Your App'
        }
      },
      {
        type: 'FeatureZigZag',
        data: {
          overview: 'Dominate the App Store with fluid, highly-responsive mobile architectures designed for maximum user engagement.',
          features: [
            { title: 'Native Performance', desc: 'Optimized rendering directly interacting with device hardware.', icon: 'fa-brands fa-apple', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Offline First', desc: 'Robust sync engines for intermittent connectivity.', icon: 'fa-solid fa-wifi', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop' },
          ]
        }
      }
    ]
  }
];

async function seed() {
  console.log("Seeding Supabase Pages & Sections...");
  
  for (const page of dynamicPages) {
    // 1. Insert parent page
    const { data: pageResult, error: pageError } = await supabase
      .from('pages')
      .upsert({ 
        slug: page.slug, 
        category: page.category, 
        title: page.title, 
        subtitle: page.subtitle 
      }, { onConflict: 'category, slug' })
      .select()
      .single();

    if (pageError || !pageResult) {
      console.error(`Error inserting page ${page.slug}:`, pageError);
      continue;
    }

    // 2. Clear old sections for this page
    await supabase.from('page_sections').delete().eq('page_id', pageResult.id);

    // 3. Insert sections
    let priority = 0;
    for (const section of page.sections) {
      const { error: secError } = await supabase.from('page_sections').insert({
        page_id: pageResult.id,
        section_type: section.type,
        priority: priority++,
        content_data: section.data
      });

      if (secError) {
        console.error(`Error inserting section ${section.type} for ${page.slug}:`, secError);
      }
    }
    console.log(`Successfully migrated route: /${page.category}/${page.slug}`);
  }
  
  console.log("Migration Complete!");
}

seed();
