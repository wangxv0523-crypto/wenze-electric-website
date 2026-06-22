import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { products } from "@/lib/products-data";

const navItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Products", href: "/products", id: "products" },
  { label: "Factory", href: "/#capabilities", id: "factory" },
  { label: "About Us", href: "/#about", id: "about" },
  { label: "Contact Us", href: "/#contact", id: "contact" },
];

export function UnifiedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between md:h-[76px]">
          <a
            href="/"
            className="min-w-0 shrink-0 [&>span]:gap-3 [&>span>span:first-child]:h-11 [&>span>span:first-child]:w-11 md:[&>span>span:first-child]:h-12 md:[&>span>span:first-child]:w-12 [&>span>span:last-child>span:first-child]:text-sm md:[&>span>span:last-child>span:first-child]:text-base [&>span>span:last-child>span:last-child]:text-[9px] md:[&>span>span:last-child>span:last-child]:text-[11px]"
            aria-label="Wenze Electric home"
          >
            <BrandLogo />
          </a>

          <nav
            className="hidden items-center gap-9 lg:flex xl:gap-11"
            aria-label="Primary navigation"
          >
            {navItems.map((item) =>
              item.id === "products" ? (
                <div key={item.id} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 py-6 text-base font-semibold text-foreground/75 transition-colors hover:text-primary group-focus-within:text-primary group-hover:text-primary"
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </a>

                  <div className="invisible absolute left-1/2 top-full w-[390px] -translate-x-1/2 translate-y-2 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div role="menu" aria-label="Product navigation">
                      {products.map((product) => (
                        <a
                          key={product.id}
                          href={`/products/${product.id}`}
                          role="menuitem"
                          className="block rounded-lg px-4 py-3 transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
                        >
                          <span className="block text-sm font-semibold text-primary">
                            {product.titleEn}
                          </span>
                          <span className="mt-0.5 block line-clamp-1 text-xs text-muted-foreground">
                            {product.shortDescriptionEn}
                          </span>
                        </a>
                      ))}
                      <a
                        href="/products"
                        role="menuitem"
                        className="mt-1 block rounded-lg border-t border-border px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus:bg-secondary focus:outline-none"
                      >
                        View All Products
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-base font-semibold text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setMobileProductsOpen(false);
            }}
            className="rounded-lg p-2.5 transition-colors hover:bg-secondary lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            className="max-h-[calc(100vh-76px)] space-y-2 overflow-y-auto pb-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) =>
              item.id === "products" ? (
                <div key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    aria-expanded={mobileProductsOpen}
                    aria-controls="mobile-product-navigation"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileProductsOpen && (
                    <div
                      id="mobile-product-navigation"
                      className="ml-3 space-y-1 border-l border-border pl-3"
                    >
                      {products.map((product) => (
                        <a
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-secondary"
                          onClick={() => {
                            setMobileProductsOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <span className="block text-sm font-semibold text-primary">
                            {product.titleEn}
                          </span>
                          <span className="mt-0.5 block line-clamp-1 text-xs text-muted-foreground">
                            {product.shortDescriptionEn}
                          </span>
                        </a>
                      ))}
                      <a
                        href="/products"
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                        onClick={() => {
                          setMobileProductsOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        View All Products
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
