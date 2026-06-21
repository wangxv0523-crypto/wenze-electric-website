import { createFileRoute, notFound } from "@tanstack/react-router";
import { NewsArticle } from "@/components/site/news-article";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getNewsBySlug, type NewsContentBlock } from "@/lib/news-data";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site-config";

function getVideoSchemas(item: NonNullable<ReturnType<typeof getNewsBySlug>>) {
  return item.content
    .filter(
      (block): block is Extract<NewsContentBlock, { type: "video" }> => block.type === "video",
    )
    .filter((block) =>
      Boolean(block.description && block.uploadDate && (block.contentUrl || block.embedUrl)),
    )
    .map((block) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: block.title,
      description: block.description,
      thumbnailUrl: absoluteUrl(block.poster),
      uploadDate: block.uploadDate,
      ...(block.contentUrl
        ? {
            contentUrl: block.contentUrl.startsWith("/")
              ? absoluteUrl(block.contentUrl)
              : block.contentUrl,
          }
        : {}),
      ...(block.embedUrl ? { embedUrl: block.embedUrl } : {}),
      ...(block.duration ? { duration: block.duration } : {}),
    }));
}

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = getNewsBySlug(params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ params }) => {
    const item = getNewsBySlug(params.slug);
    if (!item) return { meta: [] };

    const articleUrl = absoluteUrl(`/news/${item.slug}`);
    const imageUrl = absoluteUrl(item.coverImage);
    const title = item.seoTitle ?? `${item.title} | Wenze Electric`;
    const description = item.seoDescription ?? item.excerpt;
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.title,
      description,
      image: imageUrl,
      datePublished: item.publishedAt,
      dateModified: item.modifiedAt ?? item.publishedAt,
      author: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.legalName,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logoPath),
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Company Updates", item: absoluteUrl("/news") },
        { "@type": "ListItem", position: 3, name: item.title, item: articleUrl },
      ],
    };
    const videoSchemas = getVideoSchemas(item);

    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...(item.isPlaceholder ? [{ name: "robots", content: "noindex, nofollow" }] : []),
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: imageUrl },
        { property: "og:url", content: articleUrl },
        { property: "article:published_time", content: item.publishedAt },
        { property: "article:modified_time", content: item.modifiedAt ?? item.publishedAt },
        { property: "article:section", content: item.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: articleUrl }],
      scripts: [
        { type: "application/ld+json", children: serializeJsonLd(articleSchema) },
        { type: "application/ld+json", children: serializeJsonLd(breadcrumbSchema) },
        ...videoSchemas.map((schema) => ({
          type: "application/ld+json",
          children: serializeJsonLd(schema),
        })),
      ],
    };
  },
  component: NewsDetailPage,
  notFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Update not found</h1>
        <a href="/news" className="mt-5 inline-block font-semibold text-primary underline">
          Back to Company Updates
        </a>
      </div>
    </main>
  ),
});

function NewsDetailPage() {
  const { slug } = Route.useLoaderData();
  const item = getNewsBySlug(slug)!;

  return (
    <>
      <NewsArticle item={item} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
