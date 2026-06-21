import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/news-card";
import { getNewsByDate } from "@/lib/news-data";

export function CompanyUpdates() {
  const latestUpdates = getNewsByDate().slice(0, 3);

  if (latestUpdates.length === 0) return null;

  return (
    <section id="company-updates" className="border-t border-border bg-secondary/20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            News & Insights
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Company Updates
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Factory News, Product Insights and Project Highlights
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestUpdates.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary px-7 font-semibold text-white hover:bg-primary/90"
          >
            <a href="/news">
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
