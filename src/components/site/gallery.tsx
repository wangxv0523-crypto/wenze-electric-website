const galleryItems = [
  {
    title: 'Manufacturing Workshop',
    image: '/images/dry-transformer-workshop.jpg',
  },
  {
    title: 'Dry Type Transformer',
    image: '/images/three-dry-type-transformers.jpg',
  },
  {
    title: 'Oil Immersed Distribution Transformer',
    image: '/images/outdoor-distribution-transformers.jpg',
  },
  {
    title: 'Power Transformer',
    image: '/power-transformer-2026.jpg',
  },
  {
    title: 'High Voltage Transformer',
    image: '/High_voltage_power_transformer.jpg',
  },
  {
    title: 'Delivery & Installation',
    image: '/Pole_transformer.jpg',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Factory & Products
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real transformer manufacturing and product photos from Wenze Electric.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-5 py-4 text-base font-semibold text-foreground">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
