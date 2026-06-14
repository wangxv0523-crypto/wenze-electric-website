import { MapPin, CircleCheck as CheckCircle2 } from 'lucide-react'

const regions = [
  {
    region: 'Southeast Asia',
    countries: ['Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines', 'Myanmar', 'Cambodia'],
    standards: ['TNB Standards', 'PLN Requirements', 'PEA/MEA Specs', 'EVN Standards'],
  },
  {
    region: 'Middle East',
    countries: ['Saudi Arabia', 'United Arab Emirates', 'Oman', 'Qatar', 'Kuwait', 'Bahrain'],
    standards: ['SEC Standards', 'DEWA/ADDC Specs', 'Kahramaa Requirements'],
  },
  {
    region: 'Russia & CIS',
    countries: ['Russia', 'Kazakhstan', 'Uzbekistan', 'Belarus', 'Azerbaijan'],
    standards: ['GOST Standards', 'Russian Grid Codes', 'CIS Regional Standards'],
  },
  {
    region: 'Africa',
    countries: ['Nigeria', 'Kenya', 'Tanzania', 'Ghana', 'South Africa', 'Ethiopia'],
    standards: ['IEC Compliance', 'Regional Standards', 'Project Specifications'],
  },
]

export function RegionalAdaptation() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Export Markets
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Regional Technical Customization
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            文则电气 supplies transformers configured for industrial and utility projects
            across Southeast Asia, Middle East, Russia, and Africa.
          </p>
        </div>

        {/* Regional Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((item) => (
            <div 
              key={item.region}
              className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-primary mb-4">{item.region}</h3>
              
              {/* Countries */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Countries Served</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.countries.map((country) => (
                    <span 
                      key={country}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Standards */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Standards Supported</p>
                <ul className="space-y-1.5">
                  {item.standards.map((standard) => (
                    <li key={standard} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center bg-white rounded-xl p-6 border border-border">
          <p className="text-foreground font-medium mb-2">
            Project-Specific Technical Support
          </p>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Our engineering team provides specification support for industrial and utility projects.
            Voltage levels (50Hz / 60Hz), capacity, and cooling options are configured per project requirements.
            Contact us with your project details.
          </p>
        </div>
      </div>
    </section>
  )
}
