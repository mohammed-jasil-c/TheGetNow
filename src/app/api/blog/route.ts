import { NextResponse } from 'next/server'
import { getCategoryPages } from '@/lib/supabase-pages'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '12')
  const offset = parseInt(searchParams.get('offset') || '0')

  const { data, count } = await getCategoryPages('blog', limit, offset)

  return NextResponse.json({ data, count })
}
