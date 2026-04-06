'use client'

import { useState } from 'react'
import { FaPaperPlane, FaSpinner, FaCircleCheck, FaCircleExclamation, FaCloudArrowUp, FaFilePdf } from 'react-icons/fa6'
import { submitApplication } from '@/app/actions/careers'

export default function ApplicationForm({ jobId, jobTitle }: { jobId: string, jobTitle: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file')
        e.target.value = ''
        setFileName(null)
        return
      }
      setFileName(file.name)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    formData.append('job_id', jobId)
    
    const result = await submitApplication(formData)
    
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <div className="enterprise-card rounded-3xl p-10 text-center animate-fade-in shadow-2xl shadow-emerald-500/10">
        <FaCircleCheck className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground">
          Thank you for applying for the <strong>{jobTitle}</strong> position. 
          Our team will review your application and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="enterprise-card rounded-3xl p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-3xl font-extrabold mb-8 font-heading">Join Our Team</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2 ml-1 text-muted-foreground uppercase tracking-wider">Full Name *</label>
            <input 
              required
              name="fullName"
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all focus:bg-white/10"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 ml-1 text-muted-foreground uppercase tracking-wider">Email Address *</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all focus:bg-white/10"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 ml-1 text-muted-foreground uppercase tracking-wider">Portfolio Link (Optional)</label>
            <input 
              name="portfolioUrl"
              type="url" 
              placeholder="https://behance.net/john"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all focus:bg-white/10"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2 ml-1 text-muted-foreground uppercase tracking-wider">Resume (PDF Only) *</label>
            <div className="relative group">
              <input 
                required
                name="resume"
                type="file" 
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all ${fileName ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-white/5 group-hover:border-white/20'}`}>
                {fileName ? (
                  <>
                    <FaFilePdf className="w-10 h-10 text-rose-500 mb-3" />
                    <span className="text-sm font-semibold truncate max-w-full px-4">{fileName}</span>
                    <button type="button" onClick={() => setFileName(null)} className="mt-2 text-xs text-muted-foreground hover:text-white underline">Change File</button>
                  </>
                ) : (
                  <>
                    <FaCloudArrowUp className="w-10 h-10 text-primary mb-3" />
                    <span className="text-sm font-semibold">Click to upload or drag & drop</span>
                    <span className="text-xs text-muted-foreground mt-1">PDF max 5MB</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[148px] flex flex-col">
            <label className="block text-sm font-bold mb-2 ml-1 text-muted-foreground uppercase tracking-wider">Cover Letter (Optional)</label>
            <textarea 
              name="coverLetter"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all focus:bg-white/10 resize-none flex-1"
              placeholder="Tell us why you are a great fit..."
            ></textarea>
          </div>
        </div>

        {status === 'error' && (
          <div className="md:col-span-2 flex items-center gap-3 text-rose-500 text-sm bg-rose-500/10 p-4 rounded-2xl border border-rose-500/20">
            <FaCircleExclamation className="shrink-0 w-5 h-5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="md:col-span-2 pt-4">
          <button 
            disabled={status === 'loading'}
            type="submit" 
            className="glow-button w-full justify-center disabled:opacity-50 !py-5 !text-lg"
          >
            {status === 'loading' ? (
              <><FaSpinner className="animate-spin" /> Submitting Application...</>
            ) : (
              <><FaPaperPlane /> Send My Application</>
            )}
          </button>
          <p className="text-center text-xs text-muted-foreground mt-6">
            By clicking submit, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  )
}
