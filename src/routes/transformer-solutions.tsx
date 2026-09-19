import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Download,
  FileText,
  Mail,
  MessageCircle,
} from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getProductBySlug, products, type Product } from "@/lib/products-data";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site-config";

const transformerSlugs = [
  "oil-immersed-distribution-transformer",
  "dry-type-transformer",
  "pole-mounted-transformer",
  "power-transformer",
  "high-voltage-power-transformer",
  "compact-substation",
] as const;

const transformers = transformerSlugs.map((slug) => {
  const product = getProductBySlug(slug);
  if (!product) throw new Error("Missing transformer category: " + slug);
  return product;
});
const accessories = products.filter((product) => !transformers.includes(product));
const catalog = [...transformers, ...accessories];
const documents = catalog.filter((product) => product.downloadableDatasheet);
const pageUrl = absoluteUrl("/transformer-solutions");
const pageTitle = "Transformers, Substations & Accessories | Wenze Electric";
const pageDescription =
  "Explore six transformer and substation categories plus accessories and spare parts. Send project specifications to Wenze Electric in China for a quotation.";

function inquiryText(product?: Product) {
  return [
    "Hello, I would like a quotation from Wenze Electric.",
    "",
    "Product / accessory: " + (product?.titleEn ?? ""),
    "Quantity:",
    "Country / project location:",
    "Capacity and voltage ratio (for transformers):",
    "Transformer model, nameplate or drawing reference (for accessories):",
    "Applicable standard and delivery requirements:",
  ].join("\n");
}

function whatsappUrl(product?: Product) {
  return (
    "https://wa.me/" +
    siteConfig.whatsappNumber +
    "?text=" +
    encodeURIComponent(inquiryText(product))
  );
}

const emailUrl =
  "mailto:" +
  siteConfig.email +
  "?subject=" +
  encodeURIComponent("Transformer and Accessory Project Inquiry") +
  "&body=" +
  encodeURIComponent(inquiryText());
const faqs = [
  {
    question: "Which products can I request a quotation for?",
    answer:
      "You can enquire about oil immersed, dry type, pole mounted, power and high voltage power transformers, compact substations, and the accessory and spare-part categories shown on this page. Select the product in the quotation form and include your required quantity.",
  },
  {
    question: "Can I enquire from different countries and regions?",
    answer:
      "Yes. Please specify the destination, local utility requirements and operating conditions. Technical suitability, export documentation and delivery terms are confirmed for each project.",
  },
  {
    question: "How are transformer specifications confirmed?",
    answer:
      "Send the rated capacity, primary and secondary voltage, frequency, installation conditions and applicable standard. The final design, losses, vector group, cooling method, accessories and testing scope follow the approved technical datasheet and agreement.",
  },
  {
    question: "What is needed to match an accessory or replacement part?",
    answer:
      "Please provide the transformer manufacturer and model, nameplate, part reference, dimensions, photos and drawings where available. Electrical ratings, mechanical interfaces, materials and wiring are checked against the existing equipment before compatibility is confirmed.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": pageUrl + "#webpage",
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  isPartOf: { "@type": "WebSite", "@id": absoluteUrl("/#website") },
  publisher: { "@type": "Organization", "@id": absoluteUrl("/#organization") },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: catalog.length,
    itemListElement: catalog.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.titleEn,
      url: absoluteUrl("/products/" + product.id),
    })),
  },
};

export const Route = createFileRoute("/transformer-solutions")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: absoluteUrl("/images/opengraph.jpg") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: absoluteUrl("/images/opengraph.jpg") },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      { type: "application/ld+json", children: serializeJsonLd(pageSchema) },
      {
        type: "application/ld+json",
        children: serializeJsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: TransformerSolutionsPage,
});

function TransformerSolutionsPage() {
  return (
    <>
      <main>
        <section className="bg-primary py-12 text-white sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Wenze Electric · Manufactured in China
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Transformers &amp; accessories.
                <span className="mt-2 block text-accent">Matched to your project.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80">
                Six transformer and substation categories, plus the components and spares that
                support them. Share your project location and technical requirements for a
                configuration and quotation review.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:bg-accent/90"
                >
                  Request a Project Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#transformers"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Products <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-xs text-white/75">
                <span>Project-specific configuration</span>
                <span>Technical document review</span>
                <span>Export enquiry support</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {transformers.map((product) => (
                <a
                  key={product.id}
                  href={"#" + product.id}
                  className="group flex min-w-0 flex-col rounded-xl bg-white p-3 text-primary transition-transform hover:-translate-y-1 sm:p-4"
                >
                  <img
                    src={product.cardImage ?? product.image}
                    alt={product.titleEn}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-contain"
                  />
                  <span className="mt-3 text-xs font-semibold leading-5 sm:text-sm">
                    {product.titleEn}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <nav
          aria-label="Product solutions sections"
          className="sticky top-[72px] z-30 border-b border-border bg-white/95 backdrop-blur md:top-[76px]"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-sm font-semibold text-primary sm:justify-start sm:px-6 lg:px-8">
            <a href="#transformers" className="hover:underline">
              Transformers &amp; Substations
            </a>
            <a href="#accessories" className="hover:underline">
              Accessories &amp; Spares
            </a>
            <a href="#documents" className="hover:underline">
              Datasheets
            </a>
            <a href="#contact" className="hover:underline sm:ml-auto">
              Request a Quote <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>

        <section id="transformers" className="scroll-mt-44 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              01 / Transformers &amp; substations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Six product categories. One project enquiry.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              Choose the equipment category for your utility, industrial, commercial or
              infrastructure project. Ratings below are for initial selection; final specifications
              follow the approved technical agreement.
            </p>
            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {transformers.map((product) => (
                <CatalogCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="accessories"
          className="scroll-mt-44 border-y border-border bg-secondary/40 py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              02 / Components &amp; maintenance
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Accessories &amp; spare parts
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              Source components for new equipment, maintenance and replacement. Share the
              transformer model, nameplate, dimensions and drawings so the correct interface and
              rating can be confirmed.
            </p>
            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {accessories.map((product) => (
                <CatalogCard key={product.id} product={product} accessory />
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Compatibility and technical ratings are confirmed against the selected component and
              equipment drawings.
            </p>
          </div>
        </section>

        <section id="documents" className="scroll-mt-44 bg-background py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                03 / Technical documents
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
                Start with the right information.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Download the available English datasheets for initial review. For other categories,
                send your project requirements to request the applicable technical information.
              </p>
              <a
                href={emailUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Request technical information
              </a>
            </div>
            <div className="space-y-3">
              {documents.map((product) => (
                <a
                  key={product.id}
                  href={product.downloadableDatasheet!.href}
                  download={product.downloadableDatasheet!.fileName}
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary/40"
                >
                  <FileText className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-primary">
                      {product.titleEn}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      English product datasheet · PDF
                    </span>
                  </span>
                  <Download className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                A useful quote starts with your project.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/75">
                Enquiries are welcome from different countries and regions. Technical suitability,
                documentation and delivery terms are reviewed for each destination and order.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Discuss Your Requirement
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Product category and quantity",
                "Country and project location",
                "Capacity, voltages and frequency",
                "Nameplate and drawings for spare parts",
                "Applicable standard and test scope",
                "Delivery and packing requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-white/20 p-4 text-sm leading-6"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Before you enquire</h2>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="py-5">
                  <summary className="cursor-pointer text-base font-semibold text-primary">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div id="request-quotation" className="scroll-mt-44 [&>#contact]:scroll-mt-44">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function CatalogCard({ product, accessory = false }: { product: Product; accessory?: boolean }) {
  return (
    <article
      id={product.id}
      data-product-category={accessory ? "accessory" : "transformer"}
      className="flex min-w-0 scroll-mt-44 flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm"
    >
      <a
        href={"/products/" + product.id}
        className="block border-b border-border p-5"
        aria-label={"View " + product.titleEn}
      >
        <img
          src={product.cardImage ?? product.image}
          alt={product.titleEn}
          width={640}
          height={420}
          loading="lazy"
          decoding="async"
          className={(accessory ? "h-40" : "h-48") + " w-full object-contain"}
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-6 text-primary">
          <a href={"/products/" + product.id} className="hover:underline">
            {product.titleEn}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.shortDescriptionEn}</p>
        {!accessory && (
          <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
            {[
              ["Voltage", product.specs.voltage],
              ["Capacity", product.specs.capacity],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[4.5rem_1fr] gap-3">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="min-w-0 font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6 text-sm font-semibold">
          <a
            href={"/products/" + product.id}
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Enquire about " + product.titleEn + " on WhatsApp"}
            className="inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
