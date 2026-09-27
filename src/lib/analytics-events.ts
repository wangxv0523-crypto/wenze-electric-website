declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type InquiryEventName = 'generate_lead' | 'whatsapp_click' | 'email_link_click' | 'email_draft_requested'

export function trackInquiryEvent(eventName: InquiryEventName, formType?: 'general_quote' | 'product_quote') {
  if (typeof window === 'undefined' || !window.gtag) return

  if (formType) {
    window.gtag('event', eventName, { form_type: formType })
  } else {
    window.gtag('event', eventName)
  }
}
