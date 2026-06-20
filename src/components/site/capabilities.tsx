import { Settings, Globe, Shield, Cog, Zap, Award } from 'lucide-react'

const capabilities = [
  {
    icon: Zap,
    title: 'Voltage Range',
    value: 'Project Specific',
    description: 'Primary and secondary voltage requirements are reviewed for each transformer application.',
  },
  {
    icon: Settings,
    title: 'Capacity Range',
    value: 'Project Specific',
    description: 'Rated capacity is selected according to load requirements and the approved technical specification.',
  },
  {
    icon: Cog,
    title: 'Frequency Options',
    value: '50 Hz / 60 Hz',
    description: 'Frequency configuration is subject to the selected product and project requirements.',
  },
  {
    icon: Shield,
    title: 'Standards Compliance',
    value: 'IEC / ANSI',
    description: 'Designed according to applicable IEC or ANSI requirements, subject to project specifications.',
  },
  {
    icon: Globe,
    title: 'Export Projects',
    value: 'Multiple Regions',
    description: 'Destination, packing and documentation requirements are reviewed for each export project.',
  },
  {
    icon: Award,
    title: 'Quality Control',
    value: 'Agreed Test Plan',
    description: 'Inspection and testing scope is confirmed in the technical agreement for each order.',
  },
]

const projectTypes = [
  {
    title: 'Industrial Projects',
    items: ['Manufacturing Plants', 'Mining Operations', 'Steel Mills', 'Chemical Plants'],
  },
  {
    title: 'Energy Projects',
    items: ['Solar Power Plants', 'Wind Farms', 'Substations', 'Power Generation'],
  },
  {
    title: 'Infrastructure Projects',
    items: ['Railways', 'Airports', 'Ports', 'Urban Development'],
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Engineering & Customization Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our engineering team delivers custom transformer solutions designed to meet specific grid requirements 
            and operating conditions across different countries and industries.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {capabilities.map((capability) => (
            <div 
              key={capability.title} 
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <capability.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{capability.value}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Engineering Support for Your Projects
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our engineering team provides technical consultation and specification support
                for industrial, utility, and renewable energy projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Technical specification review and support</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom voltage and capacity configurations</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Special climate and environmental adaptations</span>
                </li>
              </ul>
            </div>

            {/* Project Types */}
            <div className="grid gap-4">
              {projectTypes.map((type) => (
                <div key={type.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h4 className="font-semibold text-white mb-3">{type.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-white/20 text-white/90">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
