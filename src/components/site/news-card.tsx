import { ArrowRight, CalendarDays, Play } from "lucide-react";
import { formatNewsDate, newsHasVideo, type NewsItem } from "@/lib/news-data";

export function NewsCard({ item }: { item: NewsItem }) {
  const hasVideo = newsHasVideo(item);

  return (
    <article className="group h-full overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <a href={`/news/${item.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <img
            src={item.coverImage}
            alt={item.coverAlt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
          {hasVideo && (
            <span
              className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-primary shadow-md"
              aria-label="This update includes video"
            >
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
          )}
          <span className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {item.category}
          </span>
          {item.isPlaceholder && (
            <span className="absolute right-4 top-4 rounded-md bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              Content Placeholder
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
          </div>
          <h3 className="line-clamp-2 text-xl font-bold leading-snug text-primary">{item.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {item.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
            {item.cardButtonLabel ?? "Read More"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </article>
  );
}
