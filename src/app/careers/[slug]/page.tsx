import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaLocationDot, FaClock, FaCheck } from 'react-icons/fa6'
import { supabase } from '@/lib/supabase'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: job } = await supabase
    .from('careers')
    .select('title, description')
    .eq('slug', slug)
    .single()

  if (!job) return { title: 'Job Not Found' }
  return { title: `${job.title} | Careers at TheGetNow`, description: job.description }
}

export async function generateStaticParams() {
  const { data: jobs } = await supabase
    .from('careers')
    .select('slug')
    .eq('published', true)

  return (jobs || []).map(j => ({ slug: j.slug }))
}

import ApplicationForm from '@/components/careers/ApplicationForm'

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params
  
  const { data: job } = await supabase
    .from('careers')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!job) notFound()

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-32">
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
          <FaArrowLeft className="w-3 h-3" /> Back to Careers
        </Link>

        {/* ... (Job header and details same as before) */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-heading" style={{ color: 'var(--color-text)' }}>{job.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            <span className="flex items-center gap-1.5"><FaLocationDot className="w-3.5 h-3.5" /> {job.location}</span>
            <span className="flex items-center gap-1.5"><FaClock className="w-3.5 h-3.5" /> {job.type}</span>
            <span className="pill-badge">{job.department}</span>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-10 pb-8 border-b" style={{ color: 'var(--color-text-secondary)', borderColor: 'var(--color-border)' }}>
          {job.description}
        </p>

        {/* Tags */}
        {job.tags && job.tags.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((t: string) => <span key={t} className="pill-badge">{t}</span>)}
            </div>
          </div>
        )}

        {/* Three columns: Responsibilities | Requirements | Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((r: string, i: number) => (
                  <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                    <FaCheck className="w-3 h-3 mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} /> {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((r: string, i: number) => (
                  <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                    <FaCheck className="w-3 h-3 mt-1 shrink-0" style={{ color: 'var(--color-secondary)' }} /> {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {job.benefits && job.benefits.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text)' }}>Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((b: string, i: number) => (
                  <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                    <FaCheck className="w-3 h-3 mt-1 shrink-0" style={{ color: '#10B981' }} /> {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Apply CTA Section */}
        <section id="apply-now" className="scroll-mt-24">
          <ApplicationForm jobId={job.id} jobTitle={job.title} />
        </section>
      </div>
    </div>
  )
}
