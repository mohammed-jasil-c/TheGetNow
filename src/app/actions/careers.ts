'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function submitApplication(formData: FormData) {
  try {
    const jobId = formData.get('job_id') as string
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const portfolioUrl = formData.get('portfolioUrl') as string
    const coverLetter = formData.get('coverLetter') as string
    const resumeFile = formData.get('resume') as File

    if (!fullName || !email || !resumeFile) {
      return { success: false, error: 'Full Name, Email, and Resume are required' }
    }

    // 1. Upload Resume to Supabase Storage
    const fileExt = resumeFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    const filePath = `resumes/${fileName}`

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('careers')
      .upload(filePath, resumeFile)

    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return { success: false, error: 'Failed to upload resume' }
    }

    // 2. Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from('careers')
      .getPublicUrl(filePath)

    // 3. Insert into Table
    const { error: dbError } = await supabase
      .from('job_applications')
      .insert([{
        job_id: jobId,
        full_name: fullName,
        email: email,
        resume_url: publicUrl,
        portfolio_url: portfolioUrl,
        cover_letter: coverLetter,
      }])

    if (dbError) {
      console.error('Database insert error:', dbError)
      return { success: false, error: dbError.message }
    }

    return { success: true }
  } catch (err: any) {
    console.error('Server action application error:', err)
    return { success: false, error: err.message || 'Unknown error' }
  }
}
