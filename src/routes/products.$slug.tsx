import { createFileRoute, notFound } from '@tanstack/react-router'
import { Footer } from '@/components/site/footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'
import { ProductDetail } from '@/components/site/product-detail'
import { products } from '@/lib/products-data'

const iconNameMap: Record<string, 'droplets' | 'wind' | 'zap' | 'box' | 'radio' | 'sun'> = {
  'oil-immersed-transformer': 'droplets',
  'dry-type-transformer': 'wind',
  'distribution-transformer': 'zap',
  'high-voltage-power-transformer': 'box',
  'pole-mounted-transformer': 'radio',
  'renewable-energy-transformer': 'sun',
}

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.slug)
    if (!product) throw notFound()
    return { slug: params.slug }
  },
  head: ({ params }) => {
    const product = products.find((p) => p.id === params.slug)
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
  const product = products.find((p) => p.id === slug)!
  const { icon, ...data } = product
  return (
    <>
      <ProductDetail product={{ ...data, iconName: iconNameMap[product.id] }} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
