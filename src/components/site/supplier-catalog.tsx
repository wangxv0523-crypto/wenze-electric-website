import { useEffect, useMemo, useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import { yachenCatalogPages, type YachenCatalogPage } from "@/lib/yachen-catalog";

const catalogGroups = {
  bushings: [
    { id: "transformer-bushings", title: "Transformer Bushings", first: 6, last: 18 },
  ],
  "conservator-breathers-oil-accessories": [
    { id: "transformer-valves", title: "Transformer oil-system valves", first: 52, last: 54 },
    { id: "transformer-breathers", title: "Valve variants and transformer breathers", first: 55, last: 56 },
  ],
} as const;

type CatalogSection = keyof typeof catalogGroups;

const mixedPageAlts: Record<number, string> = {
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
  const modelColumns = entries.length > 1 ? "sm:grid-cols-2 xl:grid-cols-3" : "";

  return (
    <article className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm">
      <div className="border-l-4 border-accent bg-primary px-5 py-4 text-white sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/75">
          Selected model reference · {entries.length} {entries.length === 1 ? "model group" : "model groups"}
        </p>
        <h4 className="mt-1 text-lg font-bold leading-snug text-white">
          {cardTitle}
        </h4>
      </div>
      <div className={`grid gap-3 p-4 sm:p-5 ${modelColumns}`}>
          {entries.map((entry, entryIndex) => (
            <div
              key={`${pdfPage}-${entry.series}-${entryIndex}`}
              className="rounded-xl border border-primary/10 bg-slate-50/70 p-4"
            >
              {entries.length > 1 && (
                <h5 className="mb-2 border-b border-primary/10 pb-2 font-semibold text-primary">
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
                    <div key={`${spec.label}-${spec.value}`} className="grid gap-1 border-t border-primary/10 pt-2 sm:grid-cols-[minmax(0,34%)_minmax(0,1fr)]">
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
      <figure className="flex flex-col gap-4 border-t border-primary/10 bg-secondary/40 p-4 sm:flex-row sm:items-center sm:p-5">
          <button
            type="button"
            onClick={() => onExpand(pdfPage, imageAlt)}
            className="group relative block w-full shrink-0 overflow-hidden rounded-lg border border-primary/20 bg-white p-1 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-80"
            aria-label={`Enlarge original catalog drawing and product photo from PDF page ${pdfPage}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              width={2013}
              height={1140}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-sm"
              style={{ filter: "grayscale(1) sepia(1) saturate(2.4) hue-rotate(185deg) contrast(1.14)" }}
            />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm">
              <Expand className="h-3.5 w-3.5" aria-hidden="true" />
              View drawing
            </span>
          </button>
          <figcaption className="max-w-xl text-sm leading-relaxed text-foreground/80">
            <span className="block font-bold text-primary">Photo and dimension drawing</span>
            Preview shown in Wenze blue. Open the full-size original to check the product photo, complete part code and dimension table.
            <span className="mt-1 block text-xs text-muted-foreground">
              Hebei Yachen Electric 2026 supplier catalog · PDF page {pdfPage} · printed pages {printedPages}
            </span>
          </figcaption>
      </figure>
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
            ? "Transformer Bushings & Terminal Connectors"
            : "Transformer Valve & Breather Models, Photos & Dimension Drawings"}
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-foreground/80">
          {section === "bushings"
            ? "This page covers two products: transformer bushings and terminal connectors. The selected bushing examples below include model references and source dimension drawings from the Hebei Yachen Electric 2026 catalog. Terminal connectors are selected separately to match the approved bushing and conductor interface."
            : "Selected model references and dimension drawings below come from the Hebei Yachen Electric 2026 supplier catalog. They support preliminary enquiries; they are not a Wenze stock list or approved project drawings. Confirm the complete part code and mounting dimensions before ordering."}
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
          {section === "bushings" && (
            <a
              href="#terminal-connectors"
              className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:border-primary hover:bg-primary/5"
            >
              Terminal Connectors
            </a>
          )}
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
                {section === "bushings" && (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">Product 01</p>
                )}
                <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">
                  {group.title}
                </h3>
                {section === "bushings" && (
                  <p className="mb-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                    Selected oil-paper and porcelain bushing examples show how voltage class, rated current and mounting dimensions vary by model. Match the full part code and source drawing to the transformer before selection.
                  </p>
                )}
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

        {section === "bushings" && (
          <div id="terminal-connectors" className="mt-12 scroll-mt-24">
            <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">
              Terminal Connectors
            </h3>
            <article className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm lg:grid lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)]">
              <figure className="relative min-h-72 overflow-hidden bg-primary/5 lg:min-h-0">
                <img
                  src="/images/products/transformer-bushings-connectors.webp"
                  alt="Illustrative copper and aluminium transformer terminal connector forms"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full origin-bottom-right scale-[2.2] object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-primary/90 px-4 py-2 text-xs font-medium text-white">
                  Representative connection forms; final product follows the approved interface drawing.
                </figcaption>
              </figure>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Product 02</p>
                <h4 className="mt-1 text-lg font-bold text-primary">Transformer Terminal Connectors</h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Copper or aluminium terminal connectors join the transformer bushing to the specified cable or busbar. Their dimensions and current duty depend on the complete bushing and conductor assembly.
                </p>
                <h5 className="mt-5 text-sm font-bold text-primary">Information needed to match a connector</h5>
                <ul className="mt-3 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                  {[
                    "Conductor material and cross-section",
                    "Bushing stud or terminal-pad dimensions",
                    "Bolt-hole diameter, pitch and orientation",
                    "Required continuous current and surface finish",
                  ].map((item) => (
                    <li key={item} className="rounded-lg border border-primary/10 bg-secondary/40 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  The bushing supplier catalog does not provide a standalone terminal-connector model table. A connector model, rating and dimension drawing are confirmed against the project drawing before quotation.
                </p>
                <a
                  href="#product-inquiry"
                  className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
                >
                  Send connection drawing for review
                </a>
              </div>
            </article>
          </div>
        )}
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
