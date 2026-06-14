import { Button } from '@/components/ui/button'
import { MessageCircle, FileText, CheckCircle } from 'lucide-react'

const whatsappMessage = encodeURIComponent(
`Hello, I'm interested in your transformer products.

Please provide a quote for:
1. Transformer Type: 
2. Voltage (kV): 
3. Capacity (kVA): 
4. Quantity: 
5. Country/Project Location: 

Thank you.`
)

export function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pb-16 pt-28 lg:h-[720px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/substation-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.15] object-cover object-[62%_72%] md:scale-100 md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a36]/95 via-[#0a2a55]/75 to-[#061a36]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            China Power Transformer Manufacturer & Exporter
          </div>

          {/* H1 - SEO optimized */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            Reliable Power Transformer Manufacturer from China
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl text-pretty">
            Wenze Electric manufactures and exports oil immersed transformers, dry type transformers, distribution transformers, and high voltage power transformers. IEC & ANSI certified. Shipped to 30+ countries.
          </p>

          {/* Key trust points */}
          <div className="mt-6 flex flex-col gap-2">
            {[
              'IEC 60076 & ANSI C57 certified transformer manufacturer',
              'Voltage range: 0.4kV – 220kV | Capacity: 30kVA – 100MVA',
              'Factory acceptance testing (FAT) for every unit',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 inline-flex flex-wrap gap-x-6 gap-y-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-3">
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Voltage:</span>
              <span className="font-semibold">0.4kV – 220kV</span>
            </div>
            <div className="w-px h-4 bg-white/20 self-center hidden sm:block" />
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Capacity:</span>
              <span className="font-semibold">30kVA – 100MVA</span>
            </div>
            <div className="w-px h-4 bg-white/20 self-center hidden sm:block" />
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Frequency:</span>
              <span className="font-semibold">50Hz / 60Hz</span>
            </div>
            <div className="w-px h-4 bg-white/20 self-center hidden sm:block" />
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-white/50 font-medium">Standard:</span>
              <span className="font-semibold">IEC 60076 / ANSI C57</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 h-12">
              <a href="#contact">
                <FileText className="w-5 h-5 mr-2" />
                Get a Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-base px-8 h-12 backdrop-blur-sm">
              <a href={`https://wa.me/8615905342475?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1,000+</div>
                <div className="text-white/70 text-sm">Units/Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-white/70 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">IEC</div>
                <div className="text-white/70 text-sm">& ANSI Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
