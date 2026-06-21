import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatNewsDate, type NewsContentBlock, type NewsItem } from "@/lib/news-data";
import { getProductBySlug, type Product } from "@/lib/products-data";
import { siteConfig } from "@/lib/site-config";

function getSafeEmbedUrl(value: string): string | null {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtube.com" && url.pathname === "/watch") {
      const videoId = url.searchParams.get("v");
      return videoId
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
        : null;
    }

    if (host === "youtu.be") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];
      return videoId
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
        : null;
    }

    if (host === "youtube-nocookie.com" && url.pathname.startsWith("/embed/")) {
      const videoId = url.pathname.split("/").filter(Boolean)[1];
      return videoId
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
        : null;
    }

    if (host === "vimeo.com") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];
      return videoId && /^\d+$/.test(videoId) ? `https://player.vimeo.com/video/${videoId}` : null;
    }

    if (host === "player.vimeo.com" && url.pathname.startsWith("/video/")) {
      const videoId = url.pathname.split("/").filter(Boolean)[1];
      return videoId && /^\d+$/.test(videoId) ? `https://player.vimeo.com/video/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function isLocalVideo(value: string): boolean {
  return value.startsWith("/") && /\.(mp4|webm)(\?.*)?$/i.test(value);
}

function NewsVideo({ block }: { block: Extract<NewsContentBlock, { type: "video" }> }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedUrl = getSafeEmbedUrl(block.embedUrl ?? block.videoUrl);

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <div className="aspect-video w-full overflow-hidden bg-slate-950">
        {embedUrl ? (
          showEmbed ? (
            <iframe
              src={embedUrl}
              title={block.title}
              loading="lazy"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowEmbed(true)}
              className="group relative h-full w-full"
              aria-label={`Play video: ${block.title}`}
            >
              <img
                src={block.poster}
                alt={`${block.title} video poster`}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-primary/25 transition-colors group-hover:bg-primary/35" />
              <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-xl">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </button>
          )
        ) : isLocalVideo(block.videoUrl) ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={block.poster}
            className="h-full w-full object-contain"
            aria-label={block.title}
          >
            <source src={block.videoUrl} />
            Your browser does not support HTML video.
          </video>
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm text-white/80">
            This video source is not available as a supported secure embed.
          </div>
        )}
      </div>
      <figcaption className="p-5">
        <p className="font-semibold text-primary">{block.title}</p>
        {block.transcript && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.transcript}</p>
        )}
      </figcaption>
    </figure>
  );
}

export function NewsArticle({ item }: { item: NewsItem }) {
  const relatedProducts = (item.relatedProductSlugs ?? [])
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to ask about the company update: ${item.title}`,
  );

  return (
    <main className="min-h-screen bg-background">
      <article>
        <header className="border-b border-border bg-secondary/25 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav
              className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <a href="/" className="transition-colors hover:text-primary">
                Home
              </a>
              <span>/</span>
              <a href="/news" className="transition-colors hover:text-primary">
                Company Updates
              </a>
              <span>/</span>
              <span className="line-clamp-1 font-medium text-foreground">{item.title}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-primary px-3 py-1 font-semibold text-white">
                {item.category}
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
              </span>
              {item.isPlaceholder && (
                <span className="rounded-md bg-accent px-3 py-1 font-bold text-accent-foreground">
                  Content Placeholder
                </span>
              )}
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {item.excerpt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <figure>
            <img
              src={item.coverImage}
              alt={item.coverAlt}
              width={1600}
              height={900}
              decoding="async"
              fetchPriority="high"
              className="aspect-video w-full rounded-xl border border-border bg-white object-cover shadow-sm"
            />
            {item.coverCaption && (
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                {item.coverCaption}
              </figcaption>
            )}
          </figure>

          <div className="mx-auto mt-10 max-w-3xl">
            {item.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="mb-4 mt-9 text-2xl font-bold text-primary">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-5 text-base leading-8 text-foreground/85">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="mb-5 list-disc space-y-2 pl-6 text-foreground/85">
                    {block.items.map((listItem) => (
                      <li key={listItem} className="pl-1 leading-7">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={index} className="my-8">
                    <img
                      src={block.src}
                      alt={block.alt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full rounded-xl border border-border bg-white object-contain shadow-sm"
                    />
                    {block.caption && (
                      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return <NewsVideo key={index} block={block} />;
            })}
          </div>
        </div>
      </article>

      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-secondary/20 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary">
              {item.relatedSectionTitle ?? "Related Products"}
            </h2>
            {item.relatedSectionDescription && (
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                {item.relatedSectionDescription}
              </p>
            )}
            {item.relatedSectionButtonLabel && (
              <Button asChild className="mb-8 mt-5 bg-primary text-white hover:bg-primary/90">
                <a href="/#products">
                  {item.relatedSectionButtonLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <a
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-[4/3] bg-white p-4">
                    <img
                      src={product.cardImage ?? product.image}
                      alt={`${product.titleEn ?? product.title} product view`}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary">{product.titleEn ?? product.title}</h3>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                      View Product{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Discuss Your Transformer Requirements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Send your project specifications for a product-specific technical and commercial review.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Inquiry
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 font-semibold text-white hover:bg-white/20"
            >
              <a href="/#contact">{item.inquiryButtonLabel ?? "Request a Quote"}</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-white py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="/news"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Company Updates
          </a>
        </div>
      </div>
    </main>
  );
}
