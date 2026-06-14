import { Factory as FactoryIcon } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Production workshop',
    label: 'Production Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Manufacturing facility',
    label: 'Manufacturing Facility',
  },
]

export function Factory() {
  return (
    <section id="factory" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Manufacturing Facility
          </h2>
        </div>

        {/* Factory Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {galleryImages.map((image) => (
            <div key={image.label} className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-medium">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            文则电气 focuses on reliable transformer manufacturing and export solutions for industrial and power distribution projects.
          </p>
        </div>
      </div>
    </section>
  )
}
