-- ============================================================
-- TheGetNow — Full Database Schema v2
-- Idempotent: safe to re-run on existing databases
-- Supports 1,040+ dynamic pages
-- ============================================================

-- ─── 1. PAGES (core routing table) ───────────────────────────
CREATE TABLE IF NOT EXISTS public.pages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT NOT NULL,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT,
    layout_template TEXT DEFAULT 'cinematic',
    hero_gradient TEXT DEFAULT 'from-violet-600 to-indigo-900',
    accent_color TEXT DEFAULT '#7c3aed',
    icon TEXT DEFAULT 'Zap',
    featured_image TEXT,
    published BOOLEAN DEFAULT true,
    meta_title TEXT,
    meta_description TEXT,
    content_json JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(category, slug)
);

-- Add missing columns to existing pages table (safe ALTER)
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS layout_template TEXT DEFAULT 'cinematic';
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS hero_gradient TEXT DEFAULT 'from-violet-600 to-indigo-900';
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS accent_color TEXT DEFAULT '#7c3aed';
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT 'Zap';
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS featured_image TEXT;
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT true;
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS meta_title TEXT;
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS meta_description TEXT;
ALTER TABLE public.pages ADD COLUMN IF NOT EXISTS content_json JSONB DEFAULT '{}'::jsonb;

-- ─── 2. PAGE SECTIONS (layout blocks) ────────────────────────
CREATE TABLE IF NOT EXISTS public.page_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    section_type TEXT NOT NULL,
    priority INTEGER NOT NULL,
    content_data JSONB DEFAULT '{}'::jsonb NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 3. PAGE FEATURES ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.page_features (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 4. PAGE STATS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.page_stats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    suffix TEXT DEFAULT '+',
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 5. PAGE FAQS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.page_faqs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 6. PAGE TESTIMONIALS ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.page_testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    author TEXT NOT NULL,
    role TEXT,
    company TEXT,
    quote TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 7. CONTACT REQUESTS ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.contact_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    email TEXT NOT NULL,
    budget_range TEXT,
    project_type TEXT,
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ─── 8. ROW LEVEL SECURITY ───────────────────────────────────
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Drop all policies first (idempotent)
DROP POLICY IF EXISTS "Public pages are viewable by everyone." ON public.pages;
DROP POLICY IF EXISTS "Admins can manage pages." ON public.pages;
DROP POLICY IF EXISTS "Public page sections are viewable by everyone." ON public.page_sections;
DROP POLICY IF EXISTS "Admins can manage page sections." ON public.page_sections;
DROP POLICY IF EXISTS "Public page features are viewable by everyone." ON public.page_features;
DROP POLICY IF EXISTS "Public page stats are viewable by everyone." ON public.page_stats;
DROP POLICY IF EXISTS "Public page faqs are viewable by everyone." ON public.page_faqs;
DROP POLICY IF EXISTS "Public page testimonials are viewable by everyone." ON public.page_testimonials;
DROP POLICY IF EXISTS "Service role can manage contact requests." ON public.contact_requests;
DROP POLICY IF EXISTS "Anyone can insert contact requests." ON public.contact_requests;

-- Recreate policies
CREATE POLICY "Public pages are viewable by everyone." ON public.pages FOR SELECT USING (true);
CREATE POLICY "Admins can manage pages." ON public.pages FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public page sections are viewable by everyone." ON public.page_sections FOR SELECT USING (true);
CREATE POLICY "Admins can manage page sections." ON public.page_sections FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public page features are viewable by everyone." ON public.page_features FOR SELECT USING (true);
CREATE POLICY "Public page stats are viewable by everyone." ON public.page_stats FOR SELECT USING (true);
CREATE POLICY "Public page faqs are viewable by everyone." ON public.page_faqs FOR SELECT USING (true);
CREATE POLICY "Public page testimonials are viewable by everyone." ON public.page_testimonials FOR SELECT USING (true);
CREATE POLICY "Service role can manage contact requests." ON public.contact_requests FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can insert contact requests." ON public.contact_requests FOR INSERT WITH CHECK (true);

-- ─── 9. INDEXES ──────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_pages_routing ON public.pages (category, slug);
CREATE INDEX IF NOT EXISTS idx_pages_category ON public.pages (category);
CREATE INDEX IF NOT EXISTS idx_pages_published ON public.pages (published);
CREATE INDEX IF NOT EXISTS idx_pages_category_published ON public.pages (category, published);
CREATE INDEX IF NOT EXISTS idx_page_sections_page_id ON public.page_sections (page_id);
CREATE INDEX IF NOT EXISTS idx_page_sections_order ON public.page_sections (page_id, priority ASC);
CREATE INDEX IF NOT EXISTS idx_page_features_page_id ON public.page_features (page_id, order_index ASC);
CREATE INDEX IF NOT EXISTS idx_page_stats_page_id ON public.page_stats (page_id, order_index ASC);
CREATE INDEX IF NOT EXISTS idx_page_faqs_page_id ON public.page_faqs (page_id, order_index ASC);
CREATE INDEX IF NOT EXISTS idx_page_testimonials_page_id ON public.page_testimonials (page_id, order_index ASC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_email ON public.contact_requests (email);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON public.contact_requests (created_at DESC);
NOTIFY pgrst, 'reload schema';
