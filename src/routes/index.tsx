import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/site/hero'
import { Products } from '@/components/site/products'
import { About } from '@/components/site/about'
import { Gallery } from '@/components/site/gallery'
import { Capabilities } from '@/components/site/capabilities'
import { FAQ } from '@/components/site/faq'
import { ContactForm } from '@/components/site/contact-form'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { Footer } from '@/components/site/footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <About />
        <Gallery />
        <Capabilities />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
