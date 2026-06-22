import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug, type Product } from "@/lib/products-data";

const homepageProductSlugs = [
  "oil-immersed-distribution-transformer",
  "dry-type-transformer",
  "pole-mounted-transformer",
  "power-transformer",
  "high-voltage-power-transformer",
  "compact-substation",
] as const;

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group mx-auto flex h-full w-full max-w-[360px] overflow-hidden border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:max-w-[380px] lg:max-w-[400px]">
      <a href={`/products/${product.id}`} className="flex h-full w-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
          <img
            src={product.cardImage ?? product.image}
            alt={`${product.titleEn} product view`}
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-12">
            <div className="flex items-center gap-2 text-white">
              <product.icon className="h-6 w-6 shrink-0" />
              <span className="line-clamp-2 overflow-hidden text-lg font-bold leading-tight">
                {product.titleEn}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="flex min-h-[348px] flex-1 flex-col space-y-4 p-5">
          <p className="line-clamp-3 overflow-hidden text-sm leading-relaxed text-muted-foreground">
            {product.shortDescriptionEn}
          </p>

          <div className="overflow-hidden rounded-lg border border-border">
            <div className="bg-primary px-4 py-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Specifications
              </h3>
            </div>
            <div className="divide-y divide-border">
              <SpecRow label="Voltage" value={product.specs.voltage} />
              <SpecRow label="Capacity" value={product.specs.capacity} alternate />
              <SpecRow label="Cooling" value={product.specs.cooling} />
            </div>
          </div>

          <Button className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </a>
    </Card>
  );
}

function SpecRow({
  label,
  value,
  alternate = false,
}: {
  label: string;
  value: string;
  alternate?: boolean;
}) {
  return (
    <div className={`flex items-center px-4 py-2 ${alternate ? "bg-secondary/30" : "bg-white"}`}>
      <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

export function Products() {
  const homepageProducts = homepageProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));

  return (
    <section id="products" className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Transformer Products
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Transformer and compact substation solutions configured for utility, industrial and
            infrastructure project requirements.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1248px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homepageProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
