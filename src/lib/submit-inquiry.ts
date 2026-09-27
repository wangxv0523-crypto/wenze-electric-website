import { siteConfig } from '@/lib/site-config'

export type InquirySubmissionResult =
  | { ok: true }
  | { ok: false; reason: 'activation' | 'rate_limit' | 'service' }

export async function submitInquiry(formData: FormData): Promise<InquirySubmissionResult> {
  const body = new URLSearchParams()
  for (const [key, value] of formData.entries()) {
    body.append(key, String(value))
  }

  const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
    method: 'POST',
    body,
    headers: { Accept: 'application/json' },
  })

  const result: unknown = await response.json().catch(() => null)
  if (response.ok && result && typeof result === 'object' && 'success' in result && String(result.success) === 'true') {
    return { ok: true }
  }

  if (response.status === 429) return { ok: false, reason: 'rate_limit' }

  const message = result && typeof result === 'object' && 'message' in result ? String(result.message) : ''
  return { ok: false, reason: /activat/i.test(message) ? 'activation' : 'service' }
}
