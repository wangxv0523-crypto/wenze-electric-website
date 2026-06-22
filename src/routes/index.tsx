import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { Products } from "@/components/site/products";
import { About } from "@/components/site/about";
import { Gallery } from "@/components/site/gallery";
import { Capabilities } from "@/components/site/capabilities";
import { FAQ } from "@/components/site/faq";
import { ContactForm } from "@/components/site/contact-form";
import { CompanyUpdates } from "@/components/site/company-updates";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Footer } from "@/components/site/footer";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const pageTitle = "Power Transformer Manufacturer China | Wenze Electric";
const pageDescription =
  "Wenze Electric supplies oil-immersed, dry-type, pole-mounted and power transformers, plus compact substations, for approved project requirements.";
const pageUrl = siteConfig.url;
const socialImage = absoluteUrl("/images/opengraph.jpg");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:image", content: socialImage },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: socialImage },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <About />
        <Gallery />
        <Capabilities />
        <CompanyUpdates />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
