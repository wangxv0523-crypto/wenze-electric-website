import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What types of power transformers does Wenze Electric manufacture?',
    answer: 'The current product range includes oil immersed distribution transformers, dry type transformers, pole mounted transformers, power transformers, high voltage power transformers and compact substations. Final ratings and configurations are project-specific.',
  },
  {
    question: 'Which standards can be applied to a transformer project?',
    answer: 'Products can be designed according to applicable IEC, ANSI / IEEE, GB/T or customer requirements. The final standards, deviations and test scope must be confirmed in the approved technical agreement.',
  },
  {
    question: 'What is the voltage and capacity range available?',
    answer: 'Voltage and capacity depend on the selected product and project requirements. Please provide the required primary voltage, secondary voltage, capacity, frequency and installation conditions for review.',
  },
  {
    question: 'Do you offer customized transformer solutions?',
    answer: 'Project-specific voltage ratios, tap ranges, winding conductors, cooling methods, enclosure requirements and accessories can be reviewed. The final configuration is subject to technical confirmation.',
  },
  {
    question: 'What information is needed for an export project?',
    answer: 'Please provide the destination country, transport conditions, packing requirements and any required shipping documents. The final documentation scope is subject to contract requirements.',
  },
  {
    question: 'What is your typical lead time and minimum order quantity?',
    answer: 'Lead time and order quantity depend on the product configuration, material requirements, testing scope and production schedule. Please submit the project specification and required delivery date for review.',
  },
  {
    question: 'What quality tests are performed before shipment?',
    answer: 'Routine and additional test items are defined by the applicable standard, product design and approved inspection plan. The required witness or third-party inspection scope should be stated in the inquiry.',
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
            Common questions about transformer selection, standards and the inquiry process
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
