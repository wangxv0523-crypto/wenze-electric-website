import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { getProductBySlug, type Product } from '@/lib/products-data'

const homepageProductSlugs = [
  'oil-immersed-distribution-transformer',
  'dry-type-transformer',
  'pole-mounted-transformer',
  'power-transformer',
  'high-voltage-power-transformer',
  'compact-substation',
] as const

export function Products() {
  const homepageProducts = homepageProductSlugs
    .map(slug => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product))

  return (
    <section id="products" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Transformer Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Comprehensive range of power transformers designed for diverse industrial and utility applications.
            All products comply with international standards including IEC and ANSI.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1248px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homepageProducts.map((product) => (
            <Card
              key={product.id}
              className="group mx-auto flex h-full w-full max-w-[360px] overflow-hidden border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:max-w-[380px] lg:max-w-[400px]"
            >
              <a href={`/products/${product.id}`} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
                  <img
                    src={product.image}
                    alt={product.titleEn ?? product.title}
                    className="block h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-12">
                    <div className="flex items-center gap-2 text-white">
                      <product.icon className="h-6 w-6 shrink-0" />
                      <span
                        className="overflow-hidden text-lg font-bold leading-tight"
                        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                      >
                        {product.titleEn ?? product.title}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="flex min-h-[348px] flex-1 flex-col space-y-4 p-5">
                  <p
                    className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                  >
                    {product.shortDescription}
                  </p>

                  <div className="overflow-hidden rounded-lg border border-border">
                    <div className="bg-primary px-4 py-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">Specifications</h4>
                    </div>
                    <div className="divide-y divide-border">
                      <div className="flex items-center bg-white px-4 py-2">
                        <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Voltage</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.voltage}</span>
                      </div>
                      <div className="flex items-center bg-secondary/30 px-4 py-2">
                        <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Capacity</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.capacity}</span>
                      </div>
                      <div className="flex items-center bg-white px-4 py-2">
                        <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cooling</span>
                        <span className="text-sm font-semibold text-foreground">{product.specs.cooling}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
