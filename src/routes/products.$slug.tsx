import { createFileRoute, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ProductDetail } from "@/components/site/product-detail";
import { getProductBySlug, getQuickSpecifications } from "@/lib/products-data";
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
      product.id === "power-transformer"
        ? "Oil-Immersed Power Transformers for Substations | Wenze Electric"
        : `${productName} Manufacturer in China | Wenze Electric`;
    const productUrl = absoluteUrl(`/products/${product.id}`);
    const imageUrl = absoluteUrl(product.detailImage ?? product.image);
    const quickSpecifications = getQuickSpecifications(product);
    const structuredSpecifications = Array.from(
      new Map(
        [...quickSpecifications, ...product.regionalSpecifications].map((specification) => [
          specification.label,
          specification,
        ]),
      ).values(),
    );
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${productUrl}#product`,
      name: productName,
      description: product.seoDescription,
      image: imageUrl,
      brand: { "@type": "Brand", name: siteConfig.name },
      manufacturer: {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
      category: "Power transformer and electrical distribution equipment",
      sku: product.id,
      url: productUrl,
      additionalProperty: structuredSpecifications.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
        { "@type": "ListItem", position: 3, name: productName, item: productUrl },
      ],
    };
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: product.seoDescription },
        { property: "og:type", content: "product" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: product.seoDescription },
        { property: "og:image", content: imageUrl },
        { property: "og:url", content: productUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: product.seoDescription },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: productUrl }],
      scripts: [
        { type: "application/ld+json", children: serializeJsonLd(productSchema) },
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
