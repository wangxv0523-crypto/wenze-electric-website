import { ArrowRight, Droplets, Fan, Gauge, PackageCheck, PlugZap, Settings } from "lucide-react";
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

const accessoryProducts = [
  {
    id: "transformer-bushings-connectors",
    title: "Transformer Bushings & Connectors",
    description:
      "Porcelain and composite bushings, terminal connectors and project-matched transformer connection components.",
    image: "/images/products/transformer-bushings-connectors.png",
    icon: PlugZap,
    specifications: [
      ["Voltage class", "Um 7.2 / 12 / 17.5 / 24 / 36 kV"],
      ["Current", "250-3150 A typical"],
      ["Standard", "IEC 60137"],
    ],
  },
  {
    id: "transformer-protection-monitoring",
    title: "Protection & Monitoring Devices",
    description:
      "Buchholz relays, pressure relief devices, oil level indicators and monitoring accessories for oil-immersed transformers.",
    image: "/images/products/transformer-protection-monitoring.png",
    icon: Gauge,
    specifications: [
      ["Devices", "Buchholz / PRD / MOG"],
      ["Signals", "Alarm / trip contacts"],
      ["Selection", "By tank and wiring drawing"],
    ],
  },
  {
    id: "transformer-tap-changers-controls",
    title: "Transformer Tap Changers & Control Panels",
    description:
      "DETC and OLTC components, motor-drive mechanisms and control panels selected for transformer voltage-regulation projects.",
    image: "/images/products/transformer-tap-changers-controls.png",
    icon: Settings,
    specifications: [
      ["Type", "DETC / OLTC"],
      ["Control", "Motor drive / RTCC"],
      ["Standard", "IEC 60214-1 / -2"],
    ],
  },
  {
    id: "transformer-cooling-system-components",
    title: "Transformer Cooling System Components",
    description:
      "Radiators, cooling fans, oil pumps and associated components for transformer maintenance and cooling-system retrofit.",
    image: "/images/products/transformer-cooling-system-components.png",
    icon: Fan,
    specifications: [
      ["System", "ONAN / ONAF / OFAF"],
      ["Components", "Radiator / fan / pump"],
      ["Selection", "By heat-loss duty"],
    ],
  },
  {
    id: "transformer-conservator-breathers-oil-accessories",
    title: "Transformer Conservator, Breathers & Oil Accessories",
    description:
      "Breathers, oil-level indicators, air cells, valves and conservator fittings for oil-preservation and maintenance projects.",
    image: "/images/products/transformer-conservator-breathers-oil-accessories.png",
    icon: Droplets,
    specifications: [
      ["Items", "Breathers / OLI / air cells"],
      ["Materials", "Oil-compatible selection"],
      ["Selection", "By conservator drawing"],
    ],
  },
  {
    id: "transformer-maintenance-spares",
    title: "Transformer Maintenance Spare Parts",
    description:
      "Breathers, silica gel, gaskets, valves and related maintenance parts selected against the transformer model and drawing.",
    image: "/images/products/transformer-maintenance-spares.png",
    icon: PackageCheck,
    specifications: [
      ["Items", "Gaskets / seals / valves"],
      ["Supply", "Single item / repair kit"],
      ["Selection", "By model / BOM"],
    ],
  },
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

function AccessoryCard({ product }: { product: (typeof accessoryProducts)[number] }) {
  const Icon = product.icon;

  return (
    <Card className="group mx-auto flex h-full w-full max-w-[360px] overflow-hidden border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:max-w-[380px] lg:max-w-[400px]">
      <a href={`/products/${product.id}`} className="flex h-full w-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
          <img
            src={product.image}
            alt={`${product.title} product view`}
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-12">
            <div className="flex items-center gap-2 text-white">
              <Icon className="h-6 w-6 shrink-0" />
              <span className="line-clamp-2 overflow-hidden text-lg font-bold leading-tight">
                {product.title}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="flex min-h-[348px] flex-1 flex-col space-y-4 p-5">
          <p className="line-clamp-3 overflow-hidden text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="overflow-hidden rounded-lg border border-border">
            <div className="bg-primary px-4 py-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Scope
              </h3>
            </div>
            <div className="divide-y divide-border">
              {product.specifications.map(([label, value], index) => (
                <AccessorySpecRow
                  key={label}
                  label={label}
                  value={value}
                  alternate={index % 2 === 1}
                />
              ))}
            </div>
          </div>

          <Button className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90">
            View Technical Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </a>
    </Card>
  );
}

function AccessorySpecRow({
  label,
  value,
  alternate = false,
}: {
  label: string;
  value: string;
  alternate?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-2.5 ${alternate ? "bg-secondary/30" : "bg-white"}`}
    >
      <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="min-w-0 text-sm font-semibold leading-snug text-foreground">{value}</span>
    </div>
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

        <div className="mx-auto mt-14 max-w-[1248px] border-t border-border pt-12">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Transformer Accessories & Spare Parts
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Components and maintenance spares for oil-immersed and dry-type transformers.
            </p>
          </div>

          <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accessoryProducts.map((product) => (
              <AccessoryCard key={product.id} product={product} />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Compatibility is confirmed by transformer model, rating, nameplate and drawings.
          </p>
        </div>
      </div>
    </section>
  );
}
