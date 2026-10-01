import { createFileRoute, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ProductDetail } from "@/components/site/product-detail";
import { getProductBySlug } from "@/lib/products-data";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site-config";

const iconNameMap: Record<string, "droplets" | "wind" | "zap" | "box" | "radio" | "sun"> = {
  "oil-immersed-distribution-transformer": "droplets",
  "dry-type-transformer": "wind",
  "pole-mounted-transformer": "radio",
  "power-transformer": "zap",
  "high-voltage-power-transformer": "box",
  "compact-substation": "box",
  "transformer-bushings-connectors": "radio",
  "transformer-protection-monitoring": "zap",
  "transformer-tap-changers-controls": "box",
  "transformer-cooling-system-components": "wind",
  "transformer-conservator-breathers-oil-accessories": "droplets",
  "transformer-maintenance-spares": "box",
};

const voltageSearchMetadata: Record<string, { title: string; description: string }> = {
  "oil-immersed-distribution-transformer": {
    title: "Oil-Immersed Distribution Transformer 11 kV, 22 kV, 33 kV | Wenze",
    description:
      "Preliminary oil-immersed transformer references: 10/0.4, 11/0.415, 20/0.4, 22/0.415 and 33/0.415 kV. Confirm final ratings in the project datasheet.",
  },
  "dry-type-transformer": {
    title: "Dry-Type Transformer 11 kV, 22 kV, 33 kV Guide | Wenze",
    description:
      "Explore preliminary dry-type transformer voltage references: 10/0.4, 11/0.415, 20/0.4, 22/0.415 and 33/0.415 kV. Final design needs project review.",
  },
  "pole-mounted-transformer": {
    title: "Pole-Mounted Transformer 11 kV, 22 kV, 33 kV | Wenze",
    description:
      "Single-phase pole-mounted transformer enquiries for 11, 22 and 33 kV utility systems. Secondary voltage and terminals depend on the approved utility design.",
  },
  "power-transformer": {
    title: "Power Transformer Voltage-Ratio RFQ Guide | Wenze Electric",
    description:
      "Project-specific power transformer RFQ examples include 33/11, 66/11, 69/13.8, 110/22 and 115/34.5/13.8 kV. Final capability requires technical review.",
  },
  "high-voltage-power-transformer": {
    title: "110 kV-Class Three-Winding Power Transformer Guide | Wenze",
    description:
      "110 kV-class three-winding OLTC power transformer reference. Secondary and tertiary voltages, capacity and ratings are determined by the approved grid study.",
  },
  "compact-substation": {
    title: "Compact Substation 11 kV, 22 kV, 33 kV Guide | Wenze",
    description:
      "Compact substation project references: 6, 10, 11, 20, 22, 33 or 35 kV incoming and 0.4/0.415 kV outgoing. Final pairing follows the approved single-line diagram.",
  },
  "transformer-bushings-connectors": {
    title: "Transformer Bushings & Terminal Connectors | Wenze Electric",
    description:
      "Compare searchable BRDW, BRDLW, BJL and BJLW transformer bushing outline dimensions by model. Terminal connector fit and final dimensions require an approved project drawing.",
  },
  "transformer-conservator-breathers-oil-accessories": {
    title: "Transformer Breathers & Oil Valves: Dimensions | Wenze",
    description:
      "Compare searchable outline dimensions for selected transformer oil valves and XS1, XS2, XS3 and MX1 breathers. Confirm final models and interfaces before ordering.",
  },
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { slug: product.id };
  },
  head: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) {
      return {
        meta: [
          { title: "Product Not Found | Wenze Electric" },
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const productName = product.titleEn ?? product.title;
    const pageTitle =
      voltageSearchMetadata[product.id]?.title ??
      `${productName} Manufacturer in China | Wenze Electric`;
    const pageDescription =
      voltageSearchMetadata[product.id]?.description ?? product.seoDescription;
    const productUrl = absoluteUrl(`/products/${product.id}`);
    const imageUrl = absoluteUrl(product.detailImage ?? product.image);
    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${productUrl}#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: productUrl,
      inLanguage: "en",
      isPartOf: { "@id": absoluteUrl("/#website") },
      publisher: { "@id": absoluteUrl("/#organization") },
      about: { "@type": "Thing", name: productName },
      primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
      breadcrumb: { "@id": `${productUrl}#breadcrumb` },
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${productUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
        { "@type": "ListItem", position: 3, name: productName, item: productUrl },
      ],
    };
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: pageDescription },
        { property: "og:type", content: "website" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:image", content: imageUrl },
        { property: "og:url", content: productUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: productUrl }],
      scripts: [
        { type: "application/ld+json", children: serializeJsonLd(pageSchema) },
        { type: "application/ld+json", children: serializeJsonLd(breadcrumbSchema) },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center">
      <title>Product Not Found | Wenze Electric</title>
      <meta name="robots" content="noindex,follow" />
      <h1 className="text-3xl font-bold text-primary">Product not found.</h1>
    </main>
  ),
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = getProductBySlug(slug)!;
  const { icon, ...data } = product;
  return (
    <>
      <ProductDetail product={{ ...data, iconName: iconNameMap[product.id] }} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
