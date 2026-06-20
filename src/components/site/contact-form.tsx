
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, Mail, Phone, MapPin, MessageCircle, Clock, AlertCircle } from 'lucide-react'
import { products } from '@/lib/products-data'

const productTypes = [
  ...products.map((product) => ({ label: product.titleEn ?? product.title, value: product.id })),
  { label: 'Custom Solution', value: 'custom-solution' },
  { label: 'Other', value: 'other' },
]

const countries = [
  'Vietnam',
  'Thailand',
  'Indonesia',
  'Philippines',
  'Malaysia',
  'Myanmar',
  'Cambodia',
  'UAE',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Oman',
  'Iraq',
  'Russia',
  'Kazakhstan',
  'Uzbekistan',
  'Nigeria',
  'Kenya',
  'South Africa',
  'Other',
]

// WhatsApp预设消息
const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Country/Project Location: 

Thank you.`
)

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 500) // Limit length
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      // Client-side validation
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const requirements = formData.get('requirements') as string

      if (!name || !email || !requirements) {
        setErrorMessage('Please fill in all required fields.')
        setIsSubmitting(false)
        return
      }

      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.')
        setIsSubmitting(false)
        return
      }

      if (requirements.length < 10) {
        setErrorMessage('Please provide at least 10 characters in requirements.')
        setIsSubmitting(false)
        return
      }

      // Sanitize inputs before sending
      const sanitizedData = new FormData()
      for (const [key, value] of formData.entries()) {
        sanitizedData.append(key, sanitizeInput(String(value)))
      }

      // Get form ID from environment variable
      const formId = import.meta.env.VITE_FORMSPREE_ID
      if (!formId || formId === 'YOUR_FORM_ID') {
        setErrorMessage(
          import.meta.env.DEV
            ? 'Development notice: VITE_FORMSPREE_ID is not configured. Please use WhatsApp or email for this preview.'
            : 'The inquiry form is temporarily unavailable. Please use WhatsApp or email instead.',
        )
        console.error('VITE_FORMSPREE_ID not configured')
        setIsSubmitting(false)
        return
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: sanitizedData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitted(true)
      } else if (response.status === 429) {
        setErrorMessage('Too many requests. Please wait a moment and try again.')
        setIsSubmitting(false)
      } else {
        setErrorMessage('Failed to submit form. Please try again or use WhatsApp.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Form submission error:', error instanceof Error ? error.message : 'Unknown error')
      setErrorMessage('Failed to submit form. Please try WhatsApp or email instead.')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quick Response Promise Banner */}
        <div className="bg-primary rounded-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-3">
                <Clock className="w-4 h-4" />
                Project Inquiry Support
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Send us your project requirements for technical and commercial review.
              </h3>
              <p className="text-white/70 text-sm">
                Each inquiry is reviewed against the information and specifications provided.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-6">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold h-12 px-6">
                <a href="mailto:sales@wenzepower.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance">
            Request a Quote
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Submit your project specifications and our engineering team will prepare a detailed quotation
            with technical recommendations for your application.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Info Card */}
            <div className="bg-secondary/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-n2GL5TaXQSDwwTPZmdjvvT0y5cX8oN.png"
                  alt="文则电气"
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="font-semibold text-foreground">山东文则电气有限公司</h3>
                  <p className="text-xs text-muted-foreground">Power Transformer Manufacturer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Official Email</p>
                    <a href="mailto:sales@wenzepower.com" className="text-primary hover:underline font-medium">
                      sales@wenzepower.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">For quotes, projects &amp; technical support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">WhatsApp / Phone</p>
                    <a href="https://wa.me/8615905342475" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      +86 159 0534 2475
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Click to chat instantly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Response Time</p>
                    <p className="text-muted-foreground">Based on project scope</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Location</p>
                    <p className="text-muted-foreground text-sm">
                      Shandong Province, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Primary Conversion */}
            <div className="bg-[#25D366] rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-7 h-7" />
                <span className="font-bold text-lg">Fastest Way to Get a Quote</span>
              </div>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Chat with our sales team directly on WhatsApp. 
                Available for urgent inquiries and quick responses.
              </p>
              <Button asChild className="w-full bg-white hover:bg-white/90 text-[#25D366] font-bold h-12 text-base">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp Now
                </a>
              </Button>
              <p className="text-white/70 text-xs text-center mt-3">
                No registration needed. Click to start chatting.
              </p>
            </div>

            {/* What to Prepare */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 text-sm">For Faster Quotation, Please Prepare:</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                  <span>Transformer Type (Oil-immersed / Dry-type / Distribution)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                  <span>Voltage Level (kV) and Capacity (kVA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                  <span>Country / Project Location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</span>
                  <span>Quantity and Delivery Requirements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Submit Your Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill in your project details so the technical and commercial requirements can be reviewed.</p>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your inquiry has been received and will be reviewed using the information provided.
                  </p>
                  <div className="space-y-3">
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
                      Submit Another Inquiry
                    </Button>
                    <Button asChild className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                      <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Or Chat on WhatsApp for Faster Response
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your name" required maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Company name" maxLength={100} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required maxLength={255} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input id="phone" name="phone" placeholder="+1 234 567 8900" maxLength={20} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select name="country" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase()}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Type *</Label>
                      <Select name="product" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productTypes.map((product) => (
                            <SelectItem key={product.value} value={product.value}>
                              {product.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Your Requirements *</Label>
                    <Textarea 
                      id="requirements" 
                      name="requirements" 
                      placeholder="Please describe your requirements: voltage (kV), capacity (kVA), quantity, application, project location, etc."
                      rows={5}
                      required
                      maxLength={2000}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Quote
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you acknowledge our{' '}
                    <a href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
                      privacy policy
                    </a>.
                  </p>

                  {/* Secondary WhatsApp CTA */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center mb-3">
                      Need faster response?
                    </p>
                    <Button asChild variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                      <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat on WhatsApp Instead
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
