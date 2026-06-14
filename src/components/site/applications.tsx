import { Factory, Zap, Sun, HardHat, Building2, Fuel } from 'lucide-react'

const applications = [
  {
    icon: Factory,
    title: 'Industrial Plants',
    description: 'Power solutions for factories, production lines, and manufacturing facilities.',
    examples: ['Steel Mills', 'Chemical Plants', 'Automotive', 'Textile'],
  },
  {
    icon: HardHat,
    title: 'Mining Projects',
    description: 'Rugged transformers for demanding mining and extraction operations.',
    examples: ['Mining Sites', 'Quarries', 'Processing Plants', 'Remote Locations'],
  },
  {
    icon: Sun,
    title: 'Solar Energy Systems',
    description: 'Specialized step-up transformers for solar PV and renewable projects.',
    examples: ['Solar PV Farms', 'Wind Power', 'Energy Storage', 'Hybrid Systems'],
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'Safe indoor transformers for commercial and residential developments.',
    examples: ['Office Towers', 'Shopping Malls', 'Hospitals', 'Hotels'],
  },
  {
    icon: Zap,
    title: 'Power Distribution Networks',
    description: 'Reliable transformers for utility substations and grid distribution.',
    examples: ['Substations', 'Load Centers', 'Grid Expansion', 'Rural Electrification'],
  },
  {
    icon: Fuel,
    title: 'Oil & Gas Facilities',
    description: 'Explosion-proof and heavy-duty transformers for oil and gas sector.',
    examples: ['Refineries', 'Offshore Platforms', 'Pipelines', 'Gas Processing'],
  },
]

export function Applications() {
  return (
    <section id="applications" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Applications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our transformers serve a wide range of industries and infrastructure projects, 
            delivering reliable power solutions for diverse operational requirements.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <div 
              key={app.title}
              className="group p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-200"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white mb-4">
                <app.icon className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{app.description}</p>

              {/* Examples */}
              <div className="flex flex-wrap gap-1.5">
                {app.examples.map((example) => (
                  <span 
                    key={example}
                    className="text-xs px-2.5 py-1 rounded bg-secondary text-muted-foreground border border-border"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
