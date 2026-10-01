import { useEffect, useMemo, useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import { yachenCatalogPages, type YachenCatalogPage } from "@/lib/yachen-catalog";

const catalogGroups = {
  bushings: [
    { id: "high-voltage-bushings", title: "High-voltage oil-paper and resin-paper bushings", first: 5, last: 12 },
    { id: "low-voltage-bushings", title: "Low-voltage and regional-standard bushings", first: 13, last: 33 },
    { id: "resin-bushings", title: "Epoxy and resin dry-type bushings", first: 34, last: 51 },
  ],
  "conservator-breathers-oil-accessories": [
    { id: "transformer-valves", title: "Transformer oil-system valves", first: 51, last: 54 },
    { id: "transformer-breathers", title: "Valve variants and transformer breathers", first: 55, last: 56 },
  ],
} as const;

type CatalogSection = keyof typeof catalogGroups;

const mixedPageAlts: Record<number, string> = {
  51: "Hebei Yachen 2026 catalog page 51: TG1-40.5 kV epoxy wall bushing and brass flange gate valves with outline and mounting dimensions",
  55: "Hebei Yachen 2026 catalog page 55: vacuum eccentric butterfly valves and XS1/XS2 transformer breathers with outline dimensions and model tables",
  56: "Hebei Yachen 2026 catalog page 56: XS3 silica-gel breathers and MX1 maintenance-free breathers with outline dimensions and model tables",
};

function getSection(productId: string): CatalogSection | undefined {
  if (productId === "transformer-bushings-connectors") return "bushings";
  if (productId === "transformer-conservator-breathers-oil-accessories") {
    return "conservator-breathers-oil-accessories";
  }
  return undefined;
}

function PageCard({
  pdfPage,
  entries,
  onExpand,
}: {
  pdfPage: number;
  entries: YachenCatalogPage[];
  onExpand: (page: number, alt: string) => void;
}) {
  const imageSrc = `/images/catalog-yachen/catalog-page-${pdfPage}.webp`;
  const printedPages = [...new Set(entries.map((entry) => entry.printedPages))].join(", ");
  const seriesLabels = [...new Set(entries.map((entry) => entry.series))];
  const cardTitle =
    seriesLabels.length > 3
      ? `${seriesLabels.slice(0, 2).join(" / ")} and ${seriesLabels.length - 2} more variants`
      : seriesLabels.join(" / ");
  const imageAlt = mixedPageAlts[pdfPage] ?? entries[0].imageAlt;
  const isDensePage = entries.length > 6;

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <div className="border-b border-border bg-secondary/30 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Source catalog · PDF page {pdfPage} · printed pages {printedPages}
        </p>
        <h4 className="mt-1 text-lg font-bold leading-snug text-primary">
          {cardTitle}
        </h4>
      </div>
      <div className={isDensePage ? "flex flex-col" : "grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"}>
        <div className={isDensePage ? "order-last grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3" : "order-last space-y-5 p-5 lg:order-first"}>
          {entries.map((entry, entryIndex) => (
            <div
              key={`${pdfPage}-${entry.series}-${entryIndex}`}
              className={isDensePage ? "rounded-lg border border-border bg-secondary/10 p-3" : entryIndex > 0 ? "border-t border-border pt-5" : ""}
            >
              {entries.length > 1 && (
                <h5 className="mb-2 font-semibold text-primary">
                  {isDensePage ? entry.modelIdentifiers[0] ?? entry.series : entry.series}
                </h5>
              )}
              {entry.modelIdentifiers.length > (isDensePage ? 1 : 0) && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {isDensePage ? entry.series : "Catalog model and part references"}
                  </p>
                  <p className="mt-1 break-words text-sm font-medium leading-relaxed text-foreground">
                    {(isDensePage ? entry.modelIdentifiers.slice(1) : entry.modelIdentifiers).join(" · ")}
                  </p>
                </div>
              )}
              {entry.specs.length > 0 && (
                <dl className="mt-3 grid gap-2 text-sm">
                  {entry.specs.map((spec) => (
                    <div key={`${spec.label}-${spec.value}`} className="grid gap-1 border-t border-border/70 pt-2 sm:grid-cols-[minmax(0,34%)_minmax(0,1fr)]">
                      <dt className="font-semibold text-primary">{spec.label}</dt>
                      <dd className="break-words leading-relaxed text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {entry.note && entries.findIndex((item) => item.note === entry.note) === entryIndex && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {entry.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <figure className={isDensePage ? "order-first border-b border-border bg-slate-50 p-4" : "order-first border-b border-border bg-slate-50 p-4 lg:order-last lg:border-b-0 lg:border-l"}>
          <button
            type="button"
            onClick={() => onExpand(pdfPage, imageAlt)}
            className="group relative block w-full overflow-hidden rounded-lg border border-border bg-white outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Enlarge original catalog drawing and product photo from PDF page ${pdfPage}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              width={2013}
              height={1140}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-primary/90 px-2.5 py-1.5 text-xs font-semibold text-white">
              <Expand className="h-3.5 w-3.5" aria-hidden="true" />
              Enlarge drawing
            </span>
          </button>
          <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Original supplier product photos, outline drawings and dimension tables. Enlarge to match the complete model or part code before selection.
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export function SupplierCatalog({ productId }: { productId: string }) {
  const section = getSection(productId);
  const entries = useMemo(
    () => yachenCatalogPages.filter((entry) => entry.section === section),
    [section],
  );
  const [expandedImage, setExpandedImage] = useState<{ page: number; alt: string } | null>(null);
  const drawingTriggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!expandedImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedImage(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      drawingTriggerRef.current?.focus();
    };
  }, [expandedImage]);

  if (!section || entries.length === 0) return null;

  const openDrawing = (page: number, alt: string) => {
    drawingTriggerRef.current = document.activeElement as HTMLElement;
    setExpandedImage({ page, alt });
  };

  return (
    <section id="supplier-catalog" className="border-t border-border bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">
          {section === "bushings"
            ? "Transformer Bushing Models, Photos & Dimension Drawings"
            : "Transformer Valve & Breather Models, Photos & Dimension Drawings"}
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-foreground/80">
          Model references and original dimension drawings below come from the Hebei Yachen Electric 2026 supplier catalog. They support preliminary searching and enquiries; they are not a Wenze stock list or approved drawings for a specific project. Confirm the complete part code, rated duty, mounting interface and dimensions with the supplier before ordering or installation.
        </p>
        <nav className="mt-5 flex flex-wrap gap-2" aria-label="Catalog product families">
          {catalogGroups[section].map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:border-primary hover:bg-primary/5"
            >
              {group.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-12">
          {catalogGroups[section].map((group) => {
            const groupEntries = entries.filter(
              (entry) => entry.pdfPage >= group.first && entry.pdfPage <= group.last,
            );
            const pageNumbers = [...new Set(groupEntries.map((entry) => entry.pdfPage))];
            if (pageNumbers.length === 0) return null;
            return (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">
                  {group.title}
                </h3>
                <div className="space-y-6">
                  {pageNumbers.map((pdfPage) => (
                    <PageCard
                      key={pdfPage}
                      pdfPage={pdfPage}
                      entries={groupEntries.filter((entry) => entry.pdfPage === pdfPage)}
                      onExpand={openDrawing}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-[110] overflow-auto bg-slate-950/95"
          role="presentation"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="mx-auto w-max min-w-full p-4 pt-20"
            role="dialog"
            aria-modal="true"
            aria-label={`Catalog PDF page ${expandedImage.page} enlarged drawing`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setExpandedImage(null)}
              className="fixed right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close enlarged catalog drawing"
              autoFocus
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <img
              src={`/images/catalog-yachen/catalog-page-${expandedImage.page}.webp`}
              alt={expandedImage.alt}
              width={2013}
              height={1140}
              className="mx-auto h-auto w-[2013px] max-w-none bg-white"
            />
            <p className="mt-3 text-center text-sm text-white/80">
              Hebei Yachen Electric 2026 catalog · PDF page {expandedImage.page} · scroll to inspect the original dimensions
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
