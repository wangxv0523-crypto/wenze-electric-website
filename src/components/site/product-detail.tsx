import {
  ArrowLeft,
  ArrowRight,
  Box,
  BriefcaseBusiness,
  CircleCheck as CheckCircle2,
  ClipboardList,
  Droplets,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Radio,
  Settings,
  Sun,
  Wind,
  X,
  Zap,
  ZoomIn,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProductInquiryForm } from '@/components/site/product-inquiry-form'
import { getProductBySlug, type Product } from '@/lib/products-data'

type IconName = 'droplets' | 'wind' | 'zap' | 'box' | 'radio' | 'sun'
type ProductData = Omit<Product, 'icon'> & { iconName: IconName }

const iconMap = {
  droplets: Droplets,
  wind: Wind,
  zap: Zap,
  box: Box,
  radio: Radio,
  sun: Sun,
}

const primaryImageAlt: Record<string, string> = {
  'oil-immersed-distribution-transformer': 'Oil-immersed distribution transformer front view',
  'dry-type-transformer': 'Dry-type transformer front view with resin-cast windings',
  'pole-mounted-transformer': 'Single-phase pole-mounted transformer front view',
  'power-transformer': 'Oil-immersed power transformer front and side view',
  'high-voltage-power-transformer': 'High-voltage power transformer with bushings and radiator bank',
  'compact-substation': 'Compact substation exterior and transformer compartment view',
}

function getWhatsAppMessage(productName: string): string {
  return encodeURIComponent(
    `Hello, I am interested in the ${productName}. Please provide a quotation. My required capacity is __, primary voltage is __, secondary voltage is __, quantity is __, and destination country is __.`,
  )
}

function getEmailHref(productName: string): string {
  const subject = encodeURIComponent(`Inquiry for ${productName}`)
  const body = encodeURIComponent(
    `Hello,\n\nI am interested in the ${productName}. Please provide a quotation.\n\nRequired capacity:\nPrimary voltage:\nSecondary voltage:\nFrequency:\nPhase / vector group:\nQuantity:\nInstallation environment:\nDestination country:\nRequired delivery date:\nApplicable standard:\nSpecial technical requirements:\n\nThank you.`,
  )
  return `mailto:sales@wenzepower.com?subject=${subject}&body=${body}`
}

export function ProductDetail({ product }: { product: ProductData }) {
  const Icon = iconMap[product.iconName]
  const productName = product.titleEn ?? product.title
  const whatsappMessage = getWhatsAppMessage(productName)
  const emailHref = getEmailHref(productName)
  const relatedProducts = product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((related): related is Product => Boolean(related && related.id !== product.id))
    .slice(0, 3)
  const mainImage = {
    src: product.detailImage ?? product.image,
    alt: primaryImageAlt[product.id] ?? `${productName} product view`,
  }
  const productImages = [mainImage, ...(product.galleryImages ?? [])]
    .filter((image, index, images) => images.findIndex((candidate) => candidate.src === image.src) === index)
    .slice(0, 6)
  const [selectedImage, setSelectedImage] = useState(mainImage)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    setSelectedImage(mainImage)
    setIsLightboxOpen(false)
  }, [mainImage.src, mainImage.alt])

  useEffect(() => {
    if (!isLightboxOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLightboxOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero: balanced image and product information columns */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)]">
            <div className="w-full min-w-0 space-y-6">
              <div className="mx-auto w-full max-w-[680px]">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Open larger view of ${selectedImage.alt}`}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1600}
                    height={1200}
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full object-contain object-center"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-primary/90 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                    Enlarge
                  </span>
                </button>

                {productImages.length > 1 && (
                  <div
                    className="mt-3 flex max-w-full gap-3 overflow-x-auto px-0.5 pb-2"
                    aria-label={`${productName} image gallery`}
                  >
                    {productImages.map((image, index) => {
                      const isSelected = image.src === selectedImage.src

                      return (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className={`aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-md border-2 bg-white p-1 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-28 ${
                            isSelected ? 'border-primary' : 'border-border hover:border-primary/50'
                          }`}
                          aria-label={`Show image ${index + 1}: ${image.alt}`}
                          aria-pressed={isSelected}
                        >
                          <img
                            src={image.src}
                            alt=""
                            width={160}
                            height={120}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain object-center"
                          />
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>

              {product.productDescription && (
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">产品简介</h3>
                  <p className="text-sm leading-relaxed text-foreground">{product.productDescription}</p>
                </div>
              )}

              {product.descriptionBullets && product.descriptionBullets.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">产品卖点</h3>
                  <ul className="space-y-3">
                    {product.descriptionBullets.map((bullet) => (
                      <li key={bullet.en} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium leading-relaxed text-foreground">{bullet.zh}</div>
                          <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{bullet.en}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-full min-w-0 space-y-5">
              <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <a href="/" className="transition-colors hover:text-primary">Home</a>
                <span>/</span>
                <a href="/#products" className="transition-colors hover:text-primary">Products</a>
                <span>/</span>
                <span className="font-medium text-foreground">{productName}</span>
              </nav>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{productName}</span>
              </div>

              <div>
                <h1 className="text-3xl font-bold leading-tight text-primary md:text-4xl">{product.title}</h1>
                {product.titleEn && <p className="mt-1 text-lg text-muted-foreground">{product.titleEn}</p>}
              </div>

              <p className="leading-relaxed text-muted-foreground">{product.fullDescription}</p>

              <div className="overflow-hidden rounded-xl border border-border">
                <div className="bg-primary px-5 py-3">
                  <h2 className="text-sm font-bold tracking-wider text-white">Technical Specifications</h2>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { label: product.id === 'power-transformer' ? 'Rated Voltage' : product.id === 'high-voltage-power-transformer' ? 'Voltage Class' : 'Voltage', value: product.specs.voltage },
                    { label: product.id === 'power-transformer' ? 'Rated Capacity' : 'Capacity', value: product.specs.capacity },
                    { label: 'Secondary Voltage', value: product.specs.secondaryVoltage },
                    { label: 'Frequency', value: product.specs.frequency },
                    { label: 'Phase', value: product.specs.phase },
                    { label: product.id === 'compact-substation' ? 'Transformer Cooling' : 'Cooling Method', value: product.specs.cooling },
                    { label: 'Vector Group', value: product.specs.vectorGroup },
                    { label: 'Standard', value: product.specs.standards },
                  ].filter((row) => row.value).map((row, index) => (
                    <div key={row.label} className={`flex items-start px-5 py-2.5 ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}`}>
                      <span className="w-32 shrink-0 text-xs font-semibold text-muted-foreground">{row.label}</span>
                      <span className="min-w-0 text-sm font-semibold text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature.en} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div>
                        <div className="font-medium text-foreground">{feature.zh}</div>
                        <div className="text-xs text-muted-foreground">{feature.en}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-12 bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90">
                  <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-primary px-6 font-semibold text-primary hover:bg-primary hover:text-white">
                  <a href={emailHref}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Inquiry
                  </a>
                </Button>
                <Button asChild size="lg" className="h-12 bg-primary px-6 font-semibold text-white hover:bg-primary/90">
                  <a href="#product-inquiry">Get a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.detailedSpecTable && product.detailedSpecTable.rows.length > 0 && (
        <section className="border-t border-border bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-primary">Typical Reference Specifications / 典型参考参数</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="bg-primary">
                    {product.detailedSpecTable.columns.map((column) => (
                      <th key={column.key} className="whitespace-nowrap px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-white">
                        {column.label}{column.unit ? ` (${column.unit})` : ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.detailedSpecTable.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}>
                      {product.detailedSpecTable!.columns.map((column, columnIndex) => (
                        <td key={column.key} className={`whitespace-nowrap px-4 py-3 text-sm text-foreground ${columnIndex === 0 ? 'font-semibold' : ''}`}>
                          {row[column.key] != null ? String(row[column.key]) : '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.detailedSpecTable.note && <p className="mt-4 text-sm text-muted-foreground">{product.detailedSpecTable.note}</p>}
            <p className="mt-2 text-sm text-muted-foreground">
              The above data is for reference only. Final technical parameters, losses, dimensions and weights are subject to the approved technical agreement and drawings.<br />
              以上数据仅供选型参考，最终技术参数、损耗、外形尺寸和重量以双方确认的技术协议及图纸为准。
            </p>
          </div>
        </section>
      )}

      <section className="border-t border-border bg-secondary/20 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <InfoListCard icon={BriefcaseBusiness} title="Applications" items={product.applications} />
          <InfoListCard icon={Settings} title="Customization Options" items={product.customizationOptions} />
        </div>
      </section>

      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-primary">Information Required for Quotation</h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              To prepare an accurate quotation, please provide the following technical information.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.quotationRequirements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-primary">Technical Documents</h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Available technical documents depend on the final project specification and contract requirements.
            </p>
            <ul className="space-y-3">
              {product.technicalDocuments.map((document) => (
                <li key={document} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{document}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Product FAQ</h2>
          </div>
          <div className="space-y-3">
            {product.faq.map((item) => (
              <details key={item.question} className="group rounded-xl border border-border bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-foreground marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-primary">Related Products</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <a
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-md"
                >
                  <div className="aspect-[4/3] bg-white p-4">
                    <img
                      src={related.cardImage ?? related.image}
                      alt={`${related.titleEn ?? related.title} product view`}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary">{related.titleEn ?? related.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{related.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                      View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Discuss Your Project Requirements</h2>
            <p className="mb-8 text-white/80">Send the project specifications for a product-specific technical and commercial review.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Inquiry
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-white/30 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20">
                <a href={emailHref}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProductInquiryForm productName={productName} />

      <section className="border-t border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <a href="/#products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <a href="#product-inquiry">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
          role="presentation"
        >
          <div
            className="relative flex max-h-full w-full max-w-6xl items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={`${productName} enlarged image`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              autoFocus
              className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 -translate-y-2 items-center justify-center rounded-full bg-white text-primary shadow-lg outline-none hover:bg-secondary focus-visible:ring-2 focus-visible:ring-white sm:right-2 sm:top-2 sm:translate-y-0"
              aria-label="Close enlarged image"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              decoding="async"
              className="max-h-[88vh] max-w-full rounded-lg bg-white object-contain object-center shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  )
}

interface InfoListCardProps {
  icon: typeof BriefcaseBusiness
  title: string
  items: string[]
}

function InfoListCard({ icon: Icon, title, items }: InfoListCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-primary">{title}</h2>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3 text-sm leading-relaxed text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
