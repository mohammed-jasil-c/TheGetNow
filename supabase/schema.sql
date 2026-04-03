-- TheGetNow Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- CORE PAGES TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS pages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  content_json JSONB DEFAULT '{}',
  category TEXT NOT NULL,
  layout_template TEXT NOT NULL DEFAULT 'cinematic',
  hero_gradient TEXT DEFAULT 'from-violet-600 to-indigo-900',
  accent_color TEXT DEFAULT '#7c3aed',
  icon TEXT DEFAULT 'Zap',
  featured_image TEXT,
  meta_title TEXT,
  meta_description TEXT,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- PAGE FEATURES
-- ============================================================
CREATE TABLE IF NOT EXISTS page_features (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'CheckCircle',
  order_index INTEGER DEFAULT 0
);

-- ============================================================
-- PAGE STATS
-- ============================================================
CREATE TABLE IF NOT EXISTS page_stats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  suffix TEXT DEFAULT '',
  order_index INTEGER DEFAULT 0
);

-- ============================================================
-- PAGE FAQS
-- ============================================================
CREATE TABLE IF NOT EXISTS page_faqs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_index INTEGER DEFAULT 0
);

-- ============================================================
-- PAGE TESTIMONIALS
-- ============================================================
CREATE TABLE IF NOT EXISTS page_testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  role TEXT,
  company TEXT,
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  order_index INTEGER DEFAULT 0
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_pages_category ON pages(category);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_published ON pages(published);
CREATE INDEX IF NOT EXISTS idx_page_features_page_id ON page_features(page_id);
CREATE INDEX IF NOT EXISTS idx_page_stats_page_id ON page_stats(page_id);
CREATE INDEX IF NOT EXISTS idx_page_faqs_page_id ON page_faqs(page_id);
CREATE INDEX IF NOT EXISTS idx_page_testimonials_page_id ON page_testimonials(page_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public read access" ON pages FOR SELECT USING (published = true);
CREATE POLICY "Public read access" ON page_features FOR SELECT USING (true);
CREATE POLICY "Public read access" ON page_stats FOR SELECT USING (true);
CREATE POLICY "Public read access" ON page_faqs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON page_testimonials FOR SELECT USING (true);
