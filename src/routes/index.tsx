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
import {
  absoluteUrl,
  serializeJsonLd,
  siteConfig,
  southeastAsiaMarketSchema,
  southeastAsiaTransformerTopics,
} from "@/lib/site-config";

const pageTitle = "China Transformer Manufacturer for Southeast Asia | Wenze Electric";
const pageDescription =
  "Wenze Electric is a China transformer manufacturer for Southeast Asia projects, supplying oil immersed distribution, dry type, pole mounted, power transformers and compact substations.";
const pageUrl = siteConfig.url;
const socialImage = absoluteUrl("/images/opengraph.jpg");
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en",
  about: southeastAsiaTransformerTopics.map((name) => ({ "@type": "Thing", name })),
  publisher: {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
};
const southeastAsiaSupplyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": absoluteUrl("/#southeast-asia-transformer-supply"),
  name: "Transformer manufacturing and export supply for Southeast Asia",
  serviceType: "Transformer manufacturing and export supply",
  provider: { "@type": "Organization", "@id": absoluteUrl("/#organization") },
  areaServed: southeastAsiaMarketSchema,
  audience: {
    "@type": "BusinessAudience",
    name: "Utility, industrial and infrastructure project buyers in Southeast Asia",
  },
};

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
    scripts: [
      { type: "application/ld+json", children: serializeJsonLd(websiteSchema) },
      { type: "application/ld+json", children: serializeJsonLd(southeastAsiaSupplyServiceSchema) },
    ],
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
