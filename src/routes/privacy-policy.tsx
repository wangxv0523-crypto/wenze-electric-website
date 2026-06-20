import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/site/footer'
import { absoluteUrl, siteConfig } from '@/lib/site-config'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.name}` },
      { name: 'description', content: 'How Wenze Electric collects and uses information submitted through website inquiry forms, email and WhatsApp.' },
    ],
    links: [{ rel: 'canonical', href: absoluteUrl('/privacy-policy') }],
  }),
  component: PrivacyPolicyPage,
})

const sections = [
  {
    title: 'What information is collected',
    content: 'When you submit an inquiry, we may collect your name, company, email address, phone or WhatsApp number, country, product requirements, quantity and other information you choose to provide.',
  },
  {
    title: 'How inquiry information is used',
    content: 'Inquiry information is used to review your technical requirements, prepare a response or quotation, communicate about the project and maintain relevant business records.',
  },
  {
    title: 'Form submission information',
    content: 'Website forms may be processed through Formspree. Information submitted through a form is transmitted to the form service and then delivered to our designated business contact channel. Please avoid submitting passwords, payment card data or unrelated sensitive information.',
  },
  {
    title: 'Email and WhatsApp communication',
    content: 'If you contact us by email or WhatsApp, the information you send is processed through the relevant communication provider and used to respond to your inquiry. Those providers may apply their own privacy terms.',
  },
  {
    title: 'Cookies and website analytics',
    content: 'The website may use essential browser storage or basic analytics where configured. These technologies may collect technical information such as browser type, device type, referring page and general usage data. No complex cookie consent system is currently presented on this website.',
  },
  {
    title: 'Data retention',
    content: 'Inquiry and communication records are retained only for as long as reasonably needed for project follow-up, business recordkeeping and applicable operational requirements. Retention periods may vary according to the nature of the inquiry and any resulting contract.',
  },
  {
    title: 'Contact information',
    content: `Questions about this policy or your inquiry information can be sent to ${siteConfig.email}.`,
  },
]

function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-primary py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Website Information</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/80">
              This policy explains how information submitted through the Wenze Electric website and related communication channels is handled.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-5 px-4 sm:px-6 lg:px-8">
            {sections.map((section) => (
              <article key={section.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.content}</p>
              </article>
            ))}
            <p className="pt-3 text-sm text-muted-foreground">Last updated: June 20, 2026</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
