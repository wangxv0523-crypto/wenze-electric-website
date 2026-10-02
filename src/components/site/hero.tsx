import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, FileText, MessageCircle } from 'lucide-react'

const whatsappMessage = encodeURIComponent(
  `Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type:
2. Voltage (kV):
3. Capacity (kVA):
4. Quantity:
5. Country/Project Location:

Thank you.`,
)

const trustPoints = [
  'Designed according to applicable IEC or ANSI requirements',
  'Voltage and capacity configured to project specifications',
  'Inspection and testing scope confirmed for each project',
]

export function Hero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden py-12 sm:py-14 lg:flex lg:h-[780px] lg:items-center lg:py-10">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/substation-hero-plant.webp"
          alt=""
          width={1920}
          height={1440}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full scale-[1.15] object-cover object-[62%_72%] md:scale-[1.06] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a36]/95 via-[#0a2a55]/78 to-[#061a36]/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            China Power Transformer Manufacturer & Exporter
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Reliable Power Transformer Manufacturer from China
          </h1>

          <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Wenze Electric supplies oil immersed transformers, dry type transformers, pole mounted transformers,
            power transformers and compact substations for utility, industrial and infrastructure projects.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">
                <FileText className="mr-2 h-5 w-5" />
                Get a Free Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <a
                href={`https://wa.me/8615905342405?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>

          <a
            href="#products"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-accent"
          >
            Choose a product below to review its voltage, capacity and technical details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
