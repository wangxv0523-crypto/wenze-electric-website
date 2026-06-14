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
import { UnifiedHeader } from "../components/site/unified-header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wenze Electric",
  legalName: "Shandong Wenze Electric Co., Ltd.",
  alternateName: ["文则电气", "Wenzepower"],
  url: "https://www.wenzepower.com",
  logo: "https://www.wenzepower.com/wenze-logo-mark.png",
  description:
    "Professional power transformer manufacturer in Shandong, China. Products include oil immersed transformers, dry type transformers, distribution transformers, high voltage power transformers, [...]",
  foundingDate: "2009",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+86-159-0534-2475",
      contactType: "sales",
      email: "sales@wenzepower.com",
      availableLanguage: ["English", "Chinese"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CN",
    addressRegion: "Shandong",
  },
  sameAs: ["https://wa.me/8615905342475"],
};

/**
 * Safely serialize JSON to prevent XSS attacks
 * Escapes HTML special characters that could break out of JSON context
 */
function safeJsonStringify(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
      { title: "Power Transformer Manufacturer China | Wenze Electric | 文则电气" },
      { name: "description", content: "Wenze Electric (Shandong China) manufactures oil immersed, dry type, distribution, high voltage and renewable energy transformers. IEC 60076 & ANSI C57 certified." },
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
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: safeJsonStringify(organizationSchema),
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
      <UnifiedHeader />
      <Outlet />
    </QueryClientProvider>
  );
}
