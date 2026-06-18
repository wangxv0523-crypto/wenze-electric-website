
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, MessageCircle, Mail, Droplets, Wind, Zap, Box, Radio, Sun, CircleCheck as CheckCircle2 } from 'lucide-react'
import type { DetailedSpecTable } from '@/lib/products-data'

interface ProductData {
  id: string
  iconName: 'droplets' | 'wind' | 'zap' | 'box' | 'radio' | 'sun'
  title: string
  titleEn?: string
  shortDescription: string
  fullDescription: string
  standardSizes: string[]
  image: string
  detailImage?: string
  specs: {
    voltage: string
    capacity: string
    secondaryVoltage?: string
    frequency: string
    phase?: string
    cooling: string
    vectorGroup?: string
    standards: string
  }
  features: Array<{ zh: string; en: string }>
  productDescription?: string
  descriptionBullets?: Array<{ zh: string; en: string }>
  specTable?: Array<{
    capacity: string
    voltage: string
    dimensions: string
    weight?: string
  }>
  detailedSpecTable?: DetailedSpecTable
}

const getWhatsAppMessage = (productName: string) => encodeURIComponent(
`您好，我想了解贵司的${productName}。

请提供以下报价信息：
1. 电压等级（kV）：
2. 容量（kVA）：
3. 数量：
4. 国家/项目地点：

谢谢。`
)

const iconMap = {
  droplets: Droplets,
  wind: Wind,
  zap: Zap,
  box: Box,
  radio: Radio,
  sun: Sun,
}

export function ProductDetail({ product }: { product: ProductData }) {
  const Icon = iconMap[product.iconName]
  const whatsappMessage = getWhatsAppMessage(product.title)

  return (
    <main className="min-h-screen bg-background">

      {/* ── Hero: 40/60 two-column ── */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Left – 40% image + description + selling points */}
            <div className="w-full lg:w-[40%] shrink-0 space-y-6">
              {/* Product Image */}
              <img
                src={product.detailImage ?? product.image}
                alt={product.title}
                className="aspect-[4/3] w-full rounded-lg bg-white object-contain object-center p-6"
              />

              {/* Product Description */}
              {product.productDescription && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">产品简介</h3>
                  <p className="text-sm text-foreground leading-relaxed">{product.productDescription}</p>
                </div>
              )}

              {/* Selling Points / Description Bullets */}
              {product.descriptionBullets && product.descriptionBullets.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">产品卖点</h3>
                  <ul className="space-y-3">
                    {product.descriptionBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm text-foreground font-medium leading-relaxed">
                            {typeof bullet === 'string' ? bullet : bullet.zh}
                          </div>
                          {typeof bullet !== 'string' && (
                            <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                              {bullet.en}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right – 60% content */}
            <div className="w-full lg:w-[60%] space-y-5">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <span>/</span>
                <a href="/#products" className="hover:text-primary transition-colors">Products</a>
                <span>/</span>
                <span className="text-foreground font-medium">{product.title}</span>
              </nav>

              {/* Badge */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{product.titleEn}</span>
              </div>

              {/* Title with English translation */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">{product.title}</h1>
                {product.titleEn && (
                  <p className="text-lg text-muted-foreground mt-1">{product.titleEn}</p>
                )}
              </div>

              {/* Short description */}
              <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>

              {/* Specs table */}
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-5 py-3">
                  <h2 className="text-sm font-bold text-white tracking-wider">Technical Specifications</h2>
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
                  ].filter(row => row.value).map((row, i) => (
                    <div key={row.label} className={`flex items-center px-5 py-2.5 ${i % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}`}>
                      <span className="w-32 shrink-0 text-xs font-semibold text-muted-foreground">{row.label}</span>
                      <span className="text-sm font-semibold text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 主要特点 / Key Features */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={typeof f === 'string' ? f : f.zh} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <div>
                        <div className="text-foreground font-medium">
                          {typeof f === 'string' ? f : f.zh}
                        </div>
                        {typeof f !== 'string' && (
                          <div className="text-muted-foreground text-xs">
                            {f.en}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 px-6">
                  <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold h-12 px-6">
                  <a href="mailto:sales@wenzepower.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-6">
                  <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed spec table ── */}
      {product.detailedSpecTable && product.detailedSpecTable.rows.length > 0 && (
        <section className="py-16 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">Typical Reference Specifications / 典型参考参数</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="bg-primary">
                    {product.detailedSpecTable.columns.map((col) => (
                      <th key={col.key} className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap">
                        {col.label}{col.unit ? ` (${col.unit})` : ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.detailedSpecTable.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}>
                      {product.detailedSpecTable!.columns.map((col, colIdx) => (
                        <td key={col.key} className={`px-4 py-3 text-sm text-foreground whitespace-nowrap ${colIdx === 0 ? 'font-semibold' : ''}`}>
                          {row[col.key] != null ? String(row[col.key]) : '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.detailedSpecTable.note && (
              <p className="text-sm text-muted-foreground mt-4">{product.detailedSpecTable.note}</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">
              The above data is for reference only. Final technical parameters, losses, dimensions and weights are subject to the approved technical agreement and drawings.<br />
              以上数据仅供选型参考，最终技术参数、损耗、外形尺寸和重量以双方确认的技术协议及图纸为准。
            </p>
          </div>
        </section>
      )}

      {/* ── Quote CTA ── */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Request a Quote</h2>
            <p className="text-white/80 mb-8">
              Send your project requirements and we'll provide a quote within <span className="font-bold text-accent">24 hours</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-8 text-base">
                <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Inquiry
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold h-14 px-8 text-base">
                <a href="mailto:sales@wenzepower.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back navigation ── */}
      <section className="py-8 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <a href="/#products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <a href="/#contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
