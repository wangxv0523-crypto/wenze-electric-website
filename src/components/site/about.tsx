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
            width={1600}
            height={686}
            loading="lazy"
            decoding="async"
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
              Wenze Electric (山东文则电气有限公司) is a power transformer manufacturer based in Shandong Province, China. The product range covers distribution, dry type, pole mounted and power transformers, together with compact substations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Product voltage, capacity, winding arrangement, cooling method and testing scope are reviewed against the approved project specification and applicable IEC or ANSI requirements.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-6">
              {['IEC 60076', 'ANSI / IEEE C57', 'Project-Specific Design', 'Agreed Test Plan'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  {cert}
                </span>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">Project</div>
                <div className="text-sm text-muted-foreground mt-1">Technical Review</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">Export</div>
                <div className="text-sm text-muted-foreground mt-1">Documentation Support</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">Routine</div>
                <div className="text-sm text-muted-foreground mt-1">Inspection Planning</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground mt-1">Product Categories</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-0">Manufacturing Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Cog className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Project Configuration</h4>
                  <p className="text-sm text-muted-foreground">Voltage class, rated capacity and product configuration are selected according to the approved technical requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Wrench className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Assurance & Testing</h4>
                  <p className="text-muted-foreground">Inspection and testing items are confirmed in the approved inspection plan and technical agreement for each order.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Standards & Project Requirements</h4>
                  <p className="text-muted-foreground">Products can be reviewed against applicable IEC, ANSI / IEEE, GB/T and customer project requirements, subject to the final technical agreement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Globe className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Export & Logistics</h4>
                  <p className="text-muted-foreground">Packing, shipping marks and export documentation requirements are reviewed according to the destination and contract scope.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                <Award className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Custom Engineering</h4>
                  <p className="text-muted-foreground">Non-standard voltage ratios, tap ranges, insulation, cooling and installation conditions can be reviewed for project-specific design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
