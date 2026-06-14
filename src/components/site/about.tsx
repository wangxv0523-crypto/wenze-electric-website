import { Building2, Wrench, Cog, CircleCheck as CheckCircle, Award, Globe } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">About Wenze Electric</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            Professional Transformer Manufacturer in Shandong, China
          </h2>
          <p className="text-muted-foreground text-lg">
            Shandong Wenze Electric Co., Ltd. – Your trusted partner for reliable power transformer solutions
          </p>
        </div>

        {/* Factory Gate Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 bg-black shadow-lg">
          <img
            src="/factory-gate.png"
            alt="Wenze Electric Manufacturing Facility - Shandong China Transformer Factory"
            className="w-full object-cover aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-semibold text-lg">Shandong Wenze Electric Co., Ltd. – Manufacturing Facility</p>
          </div>
        </div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Company Overview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded in Shandong Province, China, Wenze Electric (山东文则电气有限公司) is a professional power transformer manufacturer with over 15 years of production experience. Our modern factory is equipped with advanced CNC winding machines, vacuum oil-filling systems, and a complete high-voltage testing laboratory.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We manufacture transformer solutions across a wide voltage and capacity range – from compact distribution transformers (30kVA, 10kV) to large industrial power transformers (100MVA, 220kV). Every unit undergoes comprehensive factory acceptance testing (FAT) to ensure performance meets IEC 60076 and ANSI C57 international standards.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-6">
              {['IEC 60076', 'ANSI C57', 'ISO 9001', 'CE Mark'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  {cert}
                </span>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Manufacturing</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Export Countries</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Units/Year Capacity</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground mt-1">Product Categories</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Manufacturing Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Cog className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Production Capacity</h4>
                  <p className="text-sm text-muted-foreground">Annual production exceeding 1,000 transformer units. Voltage classes from 0.4kV to 220kV. Capacity range 30kVA to 100MVA.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Wrench className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Assurance & Testing</h4>
                  <p className="text-muted-foreground">In-house high-voltage testing laboratory. Routine tests include resistance, ratio, polarity, no-load loss, impedance, and induced voltage tests. Type tests available on request.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Standards & Certifications</h4>
                  <p className="text-muted-foreground">Full compliance with IEC 60076, IEC 60076-11 (dry type), IEEE C57, and GB/T standards. Third-party inspection (SGS, BV, TÜV) available.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Globe className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Export & Logistics</h4>
                  <p className="text-muted-foreground">Experienced in export documentation including CO, Form E, HS codes, and sea/air freight. Active in Southeast Asia, Middle East, Africa, and South America markets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Award className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Custom Engineering</h4>
                  <p className="text-muted-foreground">Non-standard voltage ratios, special tap ranges, tropical insulation, ONAN/ONAF/OFAF cooling, and altitude derating for projects above 1,000m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Workshop Image */}
        <div className="relative rounded-xl overflow-hidden bg-black shadow-lg">
          <img
            src="/images/workshop.jpg"
            alt="Wenze Electric Production Workshop - Transformer Assembly Line Shandong China"
            className="w-full object-cover aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-medium text-lg">Production Workshop – Transformer Assembly & Testing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
