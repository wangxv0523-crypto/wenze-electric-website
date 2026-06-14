import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What types of power transformers does Wenze Electric manufacture?',
    answer: 'Wenze Electric manufactures six main types of power transformers: oil immersed transformers (S13 series, 30–2500kVA), dry type transformers (SCB12/SCB13 series, 125–2500kVA), distribution transformers (10kV–35kV), high voltage power transformers (110kV–220kV, 6.3–63MVA), pole mounted transformers (5–167kVA), and renewable energy transformers for solar PV and wind power applications.',
  },
  {
    question: 'What international standards do your transformers comply with?',
    answer: 'All Wenze Electric transformers comply with IEC 60076 (power transformers), IEC 60076-11 (dry type transformers), and ANSI/IEEE C57 standards. We also comply with Chinese national standard GB/T 6451. Third-party inspection by SGS, Bureau Veritas (BV), or TÜV is available upon request.',
  },
  {
    question: 'What is the voltage and capacity range available?',
    answer: 'Our standard voltage range is 0.4kV to 220kV. Capacity ranges from 30kVA (distribution transformers) up to 100MVA (high voltage power transformers). Custom voltage ratios and non-standard capacities are available for special projects.',
  },
  {
    question: 'Do you offer customized transformer solutions?',
    answer: 'Yes. We offer full custom engineering for non-standard applications including special tap ranges (±2×2.5% to ±8×1.25%), tropical insulation for humid climates, altitude derating for installations above 1,000m, ONAN/ONAF/OFAF cooling configurations, special impedance values, and dual-voltage secondary windings.',
  },
  {
    question: 'Which countries do you export transformers to?',
    answer: 'Wenze Electric exports to over 30 countries, with active markets in Southeast Asia (Vietnam, Indonesia, Philippines, Malaysia, Thailand), Middle East (Saudi Arabia, UAE, Iraq, Jordan), Africa (Nigeria, Kenya, Ethiopia, South Africa), and South America (Brazil, Peru, Chile). We handle all export documentation including certificates of origin, packing lists, and HS code declarations.',
  },
  {
    question: 'What is your typical lead time and minimum order quantity?',
    answer: 'Standard lead time for distribution transformers is 4–6 weeks. High voltage transformers typically require 8–12 weeks. There is no strict minimum order quantity — we supply single units for replacement orders as well as bulk orders for large projects. Please contact us with your specifications for an accurate delivery schedule.',
  },
  {
    question: 'What quality tests are performed before shipment?',
    answer: 'Every transformer undergoes factory acceptance testing (FAT) including: winding resistance measurement, voltage ratio and polarity test, no-load loss and current measurement, load loss and impedance voltage test, induced voltage test, and dielectric withstand test. Type tests (lightning impulse, temperature rise, short-circuit withstand) are available on request.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our power transformers, certifications, and ordering process
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
