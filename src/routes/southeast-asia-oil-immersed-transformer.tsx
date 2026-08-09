import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Download,
  FileText,
  Mail,
  MessageCircle,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getProductBySlug } from "@/lib/products-data";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site-config";

const product = getProductBySlug("oil-immersed-distribution-transformer")!;
const pagePath = "/southeast-asia-oil-immersed-transformer";
const pageUrl = absoluteUrl(pagePath);
const productName = product.titleEn ?? product.title;
const imageUrl = absoluteUrl(product.detailImage ?? product.image);
const datasheet = product.downloadableDatasheet;

const quotationItems = [
  "Rated capacity and quantity",
  "Primary and secondary voltage ratio",
  "50 Hz or 60 Hz system frequency",
  "Vector group, impedance and tapping requirement",
  "Indoor, outdoor, coastal or high-humidity installation condition",
  "Applicable utility standard and requested test scope",
];

const supplySteps = [
  {
    title: "Share the project basis",
    text: "Send the voltage ratio, capacity, quantity, installation condition and utility or tender requirements.",
  },
  {
    title: "Confirm the technical datasheet",
    text: "We review the configuration with the approved project requirements before quotation and production.",
  },
  {
    title: "Receive the quotation package",
    text: "The quotation is issued with the agreed configuration, documents and export-packing requirements.",
  },
];

const faqs = [
  {
    question: "Can the transformer be configured for 11 kV or 22 kV distribution networks?",
    answer:
      "Yes. 11 kV and 22 kV are common project enquiry classes. The final equipment voltage, insulation level, voltage ratio and tap range are confirmed against the destination utility or approved technical datasheet.",
  },
  {
    question: "Do you support both 50 Hz and 60 Hz projects?",
    answer:
      "Yes. Frequency is selected according to the destination-country utility and approved project specification. It is confirmed with the voltage, capacity and loss requirements before quotation.",
  },
  {
    question: "Which secondary voltages are commonly requested?",
    answer:
      "0.4 kV and 0.415 kV are common secondary-voltage requirements. The final ratio and vector group are selected for the specific distribution system.",
  },
  {
    question: "Can I receive a product datasheet before sending a full RFQ?",
    answer:
      "Yes. The English product datasheet is available below. For a quotation, please also provide the project voltage ratio, capacity, quantity and installation condition.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hello, I need a quotation for an oil immersed distribution transformer for a Southeast Asia project.\n\n" +
    "Capacity (kVA): \nPrimary voltage (kV): \nSecondary voltage (kV): \nFrequency: \nQuantity: \nCountry / project location: \n",
);
const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;
const emailSubject = "Southeast Asia Oil Immersed Transformer Inquiry";
const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(emailSubject)}`;

const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: "11 kV and 22 kV Oil Immersed Distribution Transformers for Southeast Asia",
  url: pageUrl,
  description:
    "Oil immersed distribution transformers for Southeast Asia projects, with 11 kV and 22 kV configurations, 50/60 Hz options and IEC 60076 project requirements.",
  isPartOf: { "@type": "WebSite", "@id": `${siteConfig.url}/#website` },
  about: {
    "@type": "Product",
    name: productName,
    image: imageUrl,
    url: absoluteUrl(`/products/${product.id}`),
  },
  publisher: { "@type": "Organization", "@id": `${siteConfig.url}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const Route = createFileRoute("/southeast-asia-oil-immersed-transformer")({
  head: () => ({
    meta: [
      {
        title: "11 kV & 22 kV Oil Immersed Distribution Transformers for Southeast Asia | Wenze Electric",
      },
      {
        name: "description",
        content:
          "Oil immersed distribution transformers for Southeast Asia utility and industrial projects. Common 11 kV and 22 kV configurations, 50/60 Hz options, 0.4/0.415 kV secondary voltage and IEC 60076 requirements.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "11 kV & 22 kV Oil Immersed Distribution Transformers | Wenze Electric",
      },
      {
        property: "og:description",
        content:
          "Request a project-specific quotation for oil immersed distribution transformers for Southeast Asia.",
      },
      { property: "og:image", content: imageUrl },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      { type: "application/ld+json", children: serializeJsonLd(landingPageSchema) },
      { type: "application/ld+json", children: serializeJsonLd(faqSchema) },
    ],
  }),
  component: SoutheastAsiaOilImmersedTransformerPage,
});

function SoutheastAsiaOilImmersedTransformerPage() {
  return (
    <main>
      <section className="border-b border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Southeast Asia Project Supply
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              11 kV &amp; 22 kV Oil Immersed Distribution Transformers
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Project-configured distribution transformers for utility, industrial, commercial and rural
              electrification applications across Southeast Asia.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold">
              {["30-2500 kVA", "50 / 60 Hz", "0.4 / 0.415 kV", "IEC 60076"].map((item) => (
                <span key={item} className="border border-white/25 bg-white/10 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request-quotation"
                className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Request a Project Quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {datasheet && (
                <a
                  href={datasheet.href}
                  download={datasheet.fileName}
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Datasheet
                </a>
              )}
            </div>
          </div>

          <div className="border border-white/20 bg-white p-4 sm:p-6">
            <img
              src={product.detailImage ?? product.image}
              alt="Oil immersed distribution transformer for Southeast Asia project enquiries"
              className="aspect-[4/3] w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Project Basis</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Common configurations, confirmed for each project
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              These values guide an initial enquiry. The final equipment voltage, vector group, impedance,
              losses, accessories and test scope follow the approved project technical datasheet.
            </p>
          </div>

          <div className="mt-9 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <SpecificationBlock
              icon={<Settings2 className="h-5 w-5" aria-hidden="true" />}
              title="Rated Capacity"
              value="30 to 2500 kVA"
              detail="Selected from the approved load and project requirements."
            />
            <SpecificationBlock
              icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
              title="Primary Voltage"
              value="11 kV / 22 kV"
              detail="10 kV, 20 kV and 33 kV options are reviewed by utility specification."
            />
            <SpecificationBlock
              icon={<Settings2 className="h-5 w-5" aria-hidden="true" />}
              title="Secondary Voltage"
              value="0.4 kV / 0.415 kV"
              detail="Final voltage ratio and vector group are confirmed by the distribution system."
            />
            <SpecificationBlock
              icon={<FileText className="h-5 w-5" aria-hidden="true" />}
              title="System Requirement"
              value="50 Hz / 60 Hz"
              detail="IEC 60076 and applicable utility or project requirements."
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/35 py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Technical Review</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Send the details that determine the correct transformer
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              A realistic quotation starts with the project data. This avoids a generic transformer offer that
              does not match the network, installation environment or utility requirement.
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {quotationItems.map((item) => (
              <div key={item} className="flex gap-3 bg-background p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Quotation Process</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Clear technical confirmation before supply
            </h2>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {supplySteps.map((step, index) => (
              <article key={step.title} className="border border-border bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Oil immersed transformer enquiries for Southeast Asia
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-primary marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="request-quotation" className="scroll-mt-24 bg-primary py-14 text-primary-foreground sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Request a Quotation</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Send your project requirement directly</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              Email or WhatsApp your initial requirement. Include capacity, voltage ratio, quantity, country and
              installation condition so the engineering review can start with the right basis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoUrl}
                className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Sales Team
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <aside className="border border-white/20 bg-white/10 p-6">
            <div className="flex items-start gap-3">
              <ClipboardList className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">Technical documents</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Download the English product datasheet for initial project review.
                </p>
              </div>
            </div>
            {datasheet && (
              <a
                href={datasheet.href}
                download={datasheet.fileName}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download product datasheet
              </a>
            )}
            <p className="mt-6 border-t border-white/15 pt-5 text-sm text-white/75">
              Email: <a className="font-semibold text-white hover:text-accent" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              WhatsApp: <a className="font-semibold text-white hover:text-accent" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.phone}</a>
            </p>
          </aside>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function SpecificationBlock({
  icon,
  title,
  value,
  detail,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="bg-background p-5 sm:p-6">
      <div className="text-accent">{icon}</div>
      <h3 className="mt-4 text-sm font-semibold text-muted-foreground">{title}</h3>
      <p className="mt-2 text-xl font-bold text-primary">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
    </article>
  );
}
