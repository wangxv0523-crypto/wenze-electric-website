import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  Analytics,
  googleAnalyticsMeasurementId,
} from "../components/site/analytics";
import { UnifiedHeader } from "../components/site/unified-header";
import { products } from "../lib/products-data";
import {
  absoluteUrl,
  serializeJsonLd,
  siteConfig,
} from "../lib/site-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: ["Wenzepower", "Wenze Power", "文则电气", "山东文则电气有限公司"],
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logoPath),
  image: absoluteUrl("/images/opengraph.jpg"),
  description:
    "Power transformer manufacturer in China supplying transformers, compact substations, accessories and spare parts according to project requirements.",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  knowsAbout: products.map((product) => product.titleEn),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["English", "Chinese"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CN",
    addressRegion: "Shandong",
  },
  sameAs: ["https://wa.me/8615905342405"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <title>Page Not Found | Wenze Electric</title>
      <meta name="robots" content="noindex,follow" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Power Transformer Manufacturer in China | Wenze Electric" },
      {
        name: "description",
        content:
          "Power transformer manufacturer in China supplying transformers, compact substations, accessories and spare parts according to project requirements.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "author", content: "Wenze Electric" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wenze Electric" },
      { name: "twitter:card", content: "summary_large_image" },
      // Security headers
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { "http-equiv": "X-Content-Type-Options", content: "nosniff" },
      { "http-equiv": "X-Frame-Options", content: "SAMEORIGIN" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/wenze-favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: [
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;
gtag("js", new Date());
gtag("config", "${googleAnalyticsMeasurementId}");`,
      },
      {
        type: "application/ld+json",
        children: serializeJsonLd(organizationSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <UnifiedHeader />
      <Outlet />
    </QueryClientProvider>
  );
}
