import { Globe, Ship, FileCheck, Wrench } from 'lucide-react'

const markets = [
  {
    region: 'Southeast Asia',
    countries: ['Vietnam', 'Thailand', 'Indonesia', 'Philippines', 'Myanmar', 'Cambodia', 'Malaysia'],
  },
  {
    region: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Iraq'],
  },
  {
    region: 'Russia & CIS',
    countries: ['Russia', 'Kazakhstan', 'Uzbekistan', 'Belarus'],
  },
  {
    region: 'Africa',
    countries: ['Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Tanzania'],
  },
]

const exportCapabilities = [
  {
    icon: Globe,
    title: 'Technical Compliance',
    description: 'Transformer designs configured to meet project voltage and capacity requirements',
  },
  {
    icon: FileCheck,
    title: 'Documentation Support',
    description: 'Complete export documentation, certificates of origin, and compliance papers',
  },
  {
    icon: Wrench,
    title: 'Project Customization',
    description: 'Tailored solutions based on industrial project specifications',
  },
  {
    icon: Ship,
    title: 'Global Logistics',
    description: 'FOB / CIF / CFR terms with professional sea freight packaging',
  },
]

export function ExportMarkets() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Export Markets
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We supply transformer solutions for industrial, utility, and infrastructure projects
            across multiple regions, configured to meet project specifications and voltage requirements.
          </p>
        </div>

        {/* Market Regions */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {markets.map((market) => (
            <div
              key={market.region}
              className="bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-border">
                {market.region}
              </h3>
              <ul className="space-y-2">
                {market.countries.map((country) => (
                  <li key={country} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Export Capabilities */}
        <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">Export Capabilities</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exportCapabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{cap.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
