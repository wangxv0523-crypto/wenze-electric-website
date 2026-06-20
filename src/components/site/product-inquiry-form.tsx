import { useState } from 'react'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface ProductInquiryFormProps {
  productName: string
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '').slice(0, 2000)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const country = String(formData.get('country') ?? '')
    const quantity = String(formData.get('quantity') ?? '')
    const specifications = String(formData.get('requiredSpecifications') ?? '')

    if (!name || !email || !country || !quantity || !specifications) {
      setErrorMessage('Please complete all required fields marked with an asterisk.')
      setIsSubmitting(false)
      return
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    if (specifications.length < 10) {
      setErrorMessage('Please provide at least 10 characters describing the required specifications.')
      setIsSubmitting(false)
      return
    }

    const formId = import.meta.env.VITE_FORMSPREE_ID
    if (!formId || formId === 'YOUR_FORM_ID') {
      setErrorMessage(
        import.meta.env.DEV
          ? 'Development notice: VITE_FORMSPREE_ID is not configured. Please use WhatsApp or email for this preview.'
          : 'The inquiry form is temporarily unavailable. Please use WhatsApp or email instead.',
      )
      setIsSubmitting(false)
      return
    }

    const sanitizedData = new FormData()
    for (const [key, value] of formData.entries()) {
      sanitizedData.append(key, sanitizeInput(String(value)))
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: sanitizedData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setErrorMessage(
          response.status === 429
            ? 'Too many requests. Please wait a moment and try again.'
            : 'The inquiry could not be submitted. Please try again or use WhatsApp or email.',
        )
        setIsSubmitting(false)
        return
      }

      form.reset()
      setSubmitted(true)
    } catch (error) {
      console.error('Product inquiry submission error:', error instanceof Error ? error.message : 'Unknown error')
      setErrorMessage('The inquiry could not be submitted. Please use WhatsApp or email instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="product-inquiry" className="scroll-mt-24 border-t border-border bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Product Inquiry</p>
            <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">Request a Quotation</h2>
            <p className="mt-3 text-muted-foreground">
              Submit your project information and we will review the technical requirements for this product.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center" role="status">
              <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Inquiry submitted successfully</h3>
              <p className="mt-2 text-sm text-muted-foreground">Thank you. Your product inquiry has been received.</p>
              <Button type="button" variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errorMessage && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              )}

              <input type="hidden" name="product" value={productName} />
              <input type="hidden" name="_subject" value={`Inquiry for ${productName}`} />

              <div className="space-y-2">
                <Label htmlFor="inquiry-product">Product</Label>
                <Input id="inquiry-product" value={productName} readOnly className="bg-secondary/40 font-medium" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="inquiry-name">Name *</Label>
                  <Input id="inquiry-name" name="name" autoComplete="name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiry-company">Company</Label>
                  <Input id="inquiry-company" name="company" autoComplete="organization" maxLength={120} />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="inquiry-email">Email *</Label>
                  <Input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={255} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiry-phone">WhatsApp / Phone</Label>
                  <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="inquiry-country">Country *</Label>
                  <Input id="inquiry-country" name="country" autoComplete="country-name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiry-quantity">Quantity *</Label>
                  <Input id="inquiry-quantity" name="quantity" inputMode="numeric" required maxLength={40} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiry-specifications">Required specifications *</Label>
                <Textarea
                  id="inquiry-specifications"
                  name="requiredSpecifications"
                  rows={6}
                  required
                  maxLength={2000}
                  placeholder="Capacity, primary voltage, secondary voltage, frequency, phase, vector group, installation environment and any special requirements."
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you acknowledge our{' '}
                <a href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
                  privacy policy
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
