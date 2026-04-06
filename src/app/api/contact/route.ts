import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Support both formats:
    // Simple: { name, email, message }
    // Full:   { firstName, lastName, email, budgetRange, projectType, description }
    const firstName = body.firstName || (body.name ? body.name.split(' ')[0] : '')
    const lastName = body.lastName || (body.name ? body.name.split(' ').slice(1).join(' ') : '')
    const email = body.email || ''
    const description = body.description || body.message || ''
    const budgetRange = body.budgetRange || body.budget || ''
    const projectType = body.projectType || body.service || ''

    if (!firstName || !email || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('contact_requests')
      .insert([{
        first_name: firstName,
        last_name: lastName,
        email,
        budget_range: budgetRange,
        project_type: projectType,
        description,
      }])

    if (error) {
      console.error('Supabase contact insert error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Contact request submitted successfully.' },
      { status: 200 }
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('API contact error:', message)
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    )
  }
}
