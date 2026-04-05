import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-pages'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json({ data: [] })
  }

  const { data, error } = await supabaseServer
    .from('pages')
    .select('id, title, subtitle, slug, category')
    .or(`title.ilike.%${query}%,subtitle.ilike.%${query}%`)
    .eq('published', true)
    .limit(10)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}
