import { createFileRoute, notFound } from '@tanstack/react-router'
import { Footer } from '@/components/site/footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { ProductDetail } from '@/components/site/product-detail'
import { getProductBySlug } from '@/lib/products-data'

const iconNameMap: Record<string, 'droplets' | 'wind' | 'zap' | 'box' | 'radio' | 'sun'> = {
  'oil-immersed-distribution-transformer': 'droplets',
  'dry-type-transformer': 'wind',
  'pole-mounted-transformer': 'radio',
  'power-transformer': 'zap',
  'high-voltage-power-transformer': 'box',
  'compact-substation': 'box',
}

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug)
    if (!product) throw notFound()
    return { slug: product.id }
  },
  head: ({ params }) => {
    const product = getProductBySlug(params.slug)
    if (!product) return { meta: [] }
    return {
      meta: [
        { title: `${product.titleEn ?? product.title} Manufacturer China | Wenze Electric` },
        { name: 'description', content: product.fullDescription },
        { property: 'og:title', content: `${product.titleEn ?? product.title} | Wenze Electric` },
        { property: 'og:description', content: product.fullDescription },
        { property: 'og:image', content: product.detailImage ?? product.image },
        { property: 'og:url', content: `/products/${product.id}` },
      ],
      links: [{ rel: 'canonical', href: `/products/${product.id}` }],
    }
  },
  component: ProductPage,
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center">
      <p>Product not found.</p>
    </main>
  ),
})

function ProductPage() {
  const { slug } = Route.useLoaderData()
  const product = getProductBySlug(slug)!
  const { icon, ...data } = product
  return (
    <>
      <ProductDetail product={{ ...data, iconName: iconNameMap[product.id] }} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
