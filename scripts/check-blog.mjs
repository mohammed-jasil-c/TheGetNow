import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase
    .from('pages')
    .select('slug, title, featured_image, content_json')
    .eq('category', 'blog');

  if (error) {
    console.error('Error fetching blog posts:', error);
    return;
  }

  console.log(`Found ${data.length} blog posts:`);
  data.forEach(p => {
    console.log(`- [${p.slug}] ${p.title} (Image: ${p.featured_image ? 'YES' : 'NO'})`);
    console.log(`  Content keys: ${Object.keys(p.content_json || {})}`);
  });
}

check();
