'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use the service role key to insert records directly from the server securely
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      email: formData.get('email') as string,
      budget_range: formData.get('budgetRange') as string,
      project_type: formData.get('projectType') as string,
      description: formData.get('description') as string,
    }

    if (!rawData.first_name || !rawData.email || !rawData.description) {
      return { success: false, error: 'Missing required fields' }
    }

    const { error } = await supabase
      .from('contact_requests')
      .insert([rawData])

    if (error) {
      console.error('Supabase contact insert error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err: any) {
    console.error('Server action contact error:', err)
    return { success: false, error: err.message || 'Unknown error' }
  }
}
