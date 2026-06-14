import { Building2, Wrench, Box, CheckCircle, Package, Zap } from 'lucide-react'

interface GalleryItem {
  id: string
  title: string
  description: string
  icon: React.ElementType
  image: string
  category: 'factory' | 'products'
}

const galleryItems: GalleryItem[] = [
  {
    id: 'factory-exterior',
    title: 'Factory Exterior',
    description: 'Modern manufacturing facility with advanced infrastructure',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    category: 'factory',
  },
  {
    id: 'production-workshop',
    title: 'Production Workshop',
    description: 'State-of-the-art production equipment and machinery',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
    category: 'factory',
  },
  {
    id: 'assembly-area',
    title: 'Transformer Assembly',
    description: 'Precision assembly of transformer components',
    icon: Box,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    category: 'factory',
  },
  {
    id: 'quality-testing',
    title: 'Quality Testing',
    description: 'Comprehensive testing and quality control procedures',
    icon: CheckCircle,
    image: 'https://images.unsplash.com/photo-1581092162562-40038f56de91?w=800&h=600&fit=crop',
    category: 'factory',
  },
  {
    id: 'warehouse-storage',
    title: 'Warehouse Storage',
    description: 'Organized inventory management and storage facility',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1586578985520-e1339dcbc7d6?w=800&h=600&fit=crop',
    category: 'factory',
  },
  {
    id: 'finished-products',
    title: 'Finished Transformers',
    description: 'Completed transformers ready for deployment',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092165854-40129fb383fe?w=800&h=600&fit=crop',
    category: 'products',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Factory & Products Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Experience our state-of-the-art manufacturing facilities and precision-engineered transformer products.
            From production to quality assurance, we maintain the highest standards.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content Container */}
              <div className="relative p-6">
                {/* Icon */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Category Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary">
                    {item.category === 'factory' ? '🏭 Manufacturing' : '⚡ Products'}
                  </span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
            <p className="text-sm text-muted-foreground font-medium">Transformers Manufactured</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">80+</div>
            <p className="text-sm text-muted-foreground font-medium">Countries Deployed</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">ISO</div>
            <p className="text-sm text-muted-foreground font-medium">Certified Quality</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Advanced Technology</h4>
            <p className="text-sm text-muted-foreground">
              Equipped with cutting-edge manufacturing equipment and precision machinery for optimal quality.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Quality Assurance</h4>
            <p className="text-sm text-muted-foreground">
              Rigorous testing procedures ensure every transformer meets international standards.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Efficient Logistics</h4>
            <p className="text-sm text-muted-foreground">
              Organized warehouse systems enable rapid packaging and worldwide distribution.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Expert Team</h4>
            <p className="text-sm text-muted-foreground">
              Experienced engineers and technicians dedicated to excellence in manufacturing.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Environmental Care</h4>
            <p className="text-sm text-muted-foreground">
              Sustainable production practices with proper waste management and recycling.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-border shadow-sm">
            <h4 className="font-bold text-foreground mb-3">Full Traceability</h4>
            <p className="text-sm text-muted-foreground">
              Complete production documentation and traceability for all manufactured units.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
