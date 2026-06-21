import { createFileRoute } from "@tanstack/react-router";
import { NewsCard } from "@/components/site/news-card";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getNewsByDate } from "@/lib/news-data";
import { absoluteUrl } from "@/lib/site-config";

const pageTitle = "Company Updates | Wenze Electric";
const pageDescription =
  "Factory news, product insights and project highlights from Wenze Electric.";
const pageUrl = absoluteUrl("/news");
const socialImage = absoluteUrl("/factory-gate.png");

export const Route = createFileRoute("/news/")({
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
  component: NewsListPage,
});

function NewsListPage() {
  const updates = getNewsByDate();

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-primary py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              News & Insights
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Company Updates</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Factory News, Product Insights and Project Highlights
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {updates.map((item) => (
                <NewsCard key={item.slug} item={item} />
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
