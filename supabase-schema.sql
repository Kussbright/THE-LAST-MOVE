-- ============================================================
-- THE LAST MOVE — Supabase Database Schema
-- Run this in your Supabase SQL Editor: https://app.supabase.com
-- ============================================================

-- 1. Newsletter & Documentary Premier Subscribers
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'website_cta'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to subscribe
CREATE POLICY "Allow public insert to subscribers" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);


-- 2. Business & Production Inquiries
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL,
  type TEXT NOT NULL, -- 'Business', 'Partnerships', 'Press', 'Rights & Licensing'
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit an inquiry
CREATE POLICY "Allow public insert to inquiries" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);


-- 3. Documentaries Table (Optional dynamic CMS)
CREATE TABLE IF NOT EXISTS public.documentaries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL, -- 'IN POST-PRODUCTION', 'PRINCIPAL PRODUCTION', 'IN DEVELOPMENT'
  runtime TEXT,
  format TEXT DEFAULT '4K UHD',
  synopsis TEXT NOT NULL,
  youtube_url TEXT,
  thumbnail_url TEXT,
  released_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.documentaries ENABLE ROW LEVEL SECURITY;

-- Allow public read access to documentaries
CREATE POLICY "Allow public read access to documentaries" 
ON public.documentaries 
FOR SELECT 
USING (true);
