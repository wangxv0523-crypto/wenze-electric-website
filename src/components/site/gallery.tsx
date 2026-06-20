const galleryItems = [
  { title: 'Transformer Production Line', src: '/images/gallery-01.jpg' },
  { title: 'Dry Type Transformer Workshop', src: '/images/gallery-02.jpg' },
  { title: 'Coil Manufacturing Workshop', src: '/images/gallery-03.jpg' },
  { title: 'Large Power Transformer Workshop', src: '/images/gallery-04.jpg' },
  { title: 'Compact Substation Workshop', src: '/images/gallery-05.jpg' },
  { title: 'Finished Transformer Storage Yard', src: '/images/gallery-06.jpg' },
  { title: 'Distribution Transformer Inventory', src: '/images/gallery-07.jpg' },
]

export function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Warehouse, Workshop & Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Real photos of our warehouse, transformer production workshops, and finished products.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary/80 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary/80 to-transparent sm:w-28" />

        <div className="gallery-marquee flex w-max gap-5 px-2 hover:[animation-play-state:paused]">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 gap-5"
              aria-hidden={copyIndex === 1 ? true : undefined}
            >
              {galleryItems.map((item) => (
                <figure
                  key={`${copyIndex}-${item.src}`}
                  className="group relative w-[280px] shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm sm:w-[340px]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent px-5 pb-4 pt-12 text-left text-base font-semibold text-white">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
