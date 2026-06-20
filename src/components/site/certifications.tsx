import { Award, CheckCircle, Shield, FileCheck } from 'lucide-react'

const standards = [
  {
    name: 'IEC 60076',
    fullName: 'Power Transformers',
    body: 'International Electrotechnical Commission',
    description: 'Reference standard for power transformer rating, testing and performance requirements when applicable to the project.',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    name: 'IEC 60076-11',
    fullName: 'Dry-Type Transformers',
    body: 'International Electrotechnical Commission',
    description: 'Reference standard for dry-type transformer requirements when specified in the approved project documents.',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    name: 'ANSI / IEEE C57',
    fullName: 'Power Transformers',
    body: 'American National Standards Institute',
    description: 'North American transformer requirements can be reviewed when they are included in the project specification.',
    icon: Award,
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
  },
  {
    name: 'Project Specification',
    fullName: 'Approved Technical Agreement',
    body: 'Customer and Project Requirements',
    description: 'Final design, inspection and document scope is defined by the approved technical agreement and contract.',
    icon: CheckCircle,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    name: 'GB/T 6451',
    fullName: 'China National Standard',
    body: 'Standardization Administration of China',
    description: 'Chinese national standard for oil-immersed power transformers, aligned with IEC 60076.',
    icon: FileCheck,
    color: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-600',
  },
  {
    name: '3rd Party Inspection',
    fullName: 'Contract-Specified Inspection',
    body: 'Independent Testing Bodies',
    description: 'Independent inspection requirements may be reviewed when they are included in the agreed contract scope.',
    icon: CheckCircle,
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
]

const testItems = [
  'Winding resistance measurement',
  'Voltage ratio & polarity test',
  'No-load loss & current test',
  'Load loss & impedance voltage test',
  'Induced voltage withstand test',
  'Separate source voltage withstand test',
  'Lightning impulse test (on request)',
  'Temperature rise test (on request)',
  'Short-circuit withstand test (on request)',
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Quality Assurance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Standards & Testing
          </h2>
          <p className="text-muted-foreground text-lg">
            Products can be designed and tested against applicable standards and the approved project specification
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {standards.map((cert) => (
            <div key={cert.name} className={`rounded-xl border p-6 ${cert.color}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm`}>
                  <cert.icon className={`w-5 h-5 ${cert.iconColor}`} />
                </div>
                <div>
                  <div className="font-bold text-foreground">{cert.name}</div>
                  <div className="text-sm font-medium text-muted-foreground">{cert.fullName}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{cert.body}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Factory Test Items */}
        <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            Factory Acceptance Test (FAT) — Standard Test Items
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border">
            * Test items, witness requirements and any additional test scope must be confirmed in the technical agreement and contract.
          </p>
        </div>
      </div>
    </section>
  )
}
