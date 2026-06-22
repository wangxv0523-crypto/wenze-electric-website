import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/footer";
import { ProductCard } from "@/components/site/products";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { products } from "@/lib/products-data";
import { absoluteUrl } from "@/lib/site-config";

const pageTitle = "Transformer and Substation Products | Wenze Electric";
const pageDescription =
  "Explore Wenze Electric transformer and compact substation products for utility, industrial and infrastructure project requirements.";
const pageUrl = absoluteUrl("/products");
const socialImage = absoluteUrl("/images/opengraph.jpg");

export const Route = createFileRoute("/products/")({
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
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-primary py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Product Center
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Transformer and Substation Products
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              Review the six product categories and open each page for technical scope,
              customization options and inquiry requirements.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1248px] gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
