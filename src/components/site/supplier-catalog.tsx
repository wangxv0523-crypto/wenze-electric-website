import { useState } from "react";
import { OilPaperBushingDiagram, PorcelainBushingDiagram } from "@/components/site/bushing-diagrams";
import { OilAccessoryDiagram } from "@/components/site/oil-accessory-diagrams";
import { bushingDimensionTables } from "@/lib/bushing-dimensions";
import { oilDimensionTables } from "@/lib/oil-dimensions";
import type { ReferenceDimensionTable } from "@/lib/reference-dimensions";

function DimensionTable({ table }: { table: ReferenceDimensionTable }) {
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const bushingDiagram = table.id === "oil-paper-outline"
    ? "oil-paper"
    : table.id === "bjl-porcelain"
      ? "BJL"
      : table.id === "bjlw-porcelain"
        ? "BJLW"
        : null;
  const oilDiagram = table.id.startsWith("valve-") || table.id.startsWith("breather-");
  const selectedRow = table.rows[selectedRowIndex];

  return (
    <article id={table.id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm">
      <div className="border-l-4 border-accent bg-primary px-5 py-4 text-white sm:px-6">
        <h4 className="text-lg font-bold leading-snug">{table.title}</h4>
        {table.intro && <p className="mt-1 text-sm leading-relaxed text-white/80">{table.intro}</p>}
      </div>
      {bushingDiagram && (
        <div className="space-y-4 border-b border-primary/10 bg-secondary/20 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor={`${table.id}-model`} className="text-sm font-semibold text-primary">
              Select a reference configuration for the drawing
            </label>
            <select
              id={`${table.id}-model`}
              value={selectedRowIndex}
              onChange={(event) => setSelectedRowIndex(Number(event.target.value))}
              className="min-w-0 max-w-full rounded-lg border border-primary/25 bg-white px-3 py-2 text-sm text-primary"
            >
              {table.rows.map((row, index) => (
                <option key={`${table.id}-option-${index}`} value={index}>
                  {row.model}{row.variant ? ` — ${row.variant}` : ""}
                </option>
              ))}
            </select>
          </div>
          {bushingDiagram === "oil-paper" && <OilPaperBushingDiagram row={selectedRow} />}
          {bushingDiagram === "BJL" && <PorcelainBushingDiagram variant="BJL" row={selectedRow} />}
          {bushingDiagram === "BJLW" && <PorcelainBushingDiagram variant="BJLW" row={selectedRow} />}
        </div>
      )}
      {oilDiagram && (
        <div className="border-b border-primary/10 bg-secondary/20 p-4 sm:p-5">
          <OilAccessoryDiagram tableId={table.id} />
        </div>
      )}
      <p className="px-4 pt-4 text-xs font-medium text-muted-foreground sm:px-5">
        Dimensions are in millimetres unless the column says otherwise. Scroll the table sideways to see every field.
      </p>
      <div
        className="overflow-x-auto px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary sm:px-5"
        role="region"
        aria-label={`${table.title} dimensions`}
        tabIndex={0}
      >
        <table
          className="w-full border-separate border-spacing-0 text-left text-sm"
          style={{ minWidth: `${Math.max(680, table.columns.length * 118)}px` }}
        >
          <caption className="sr-only">{table.title}: reference dimensions by model</caption>
          <thead>
            <tr>
              {table.columns.map((column, index) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`border-b border-primary/20 bg-primary px-3 py-3 align-bottom font-semibold text-white ${index === 0 ? "sticky left-0 z-10" : ""}`}
                >
                  {column.label}
                  {column.unit && <span className="block text-xs font-normal text-white/70">{column.unit}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={`${table.id}-${rowIndex}`} className="even:bg-secondary/30">
                {table.columns.map((column, index) => {
                  const value = row[column.key] ?? "—";
                  const cellClass = `border-b border-border px-3 py-3 align-top whitespace-nowrap ${index === 0 ? "sticky left-0 z-10 bg-white font-semibold text-primary" : "text-foreground"}`;
                  return index === 0 ? (
                    <th key={column.key} scope="row" className={cellClass}>{value}</th>
                  ) : (
                    <td key={column.key} className={cellClass}>{value}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.notes && table.notes.length > 0 && (
        <div className="border-t border-primary/10 bg-secondary/40 px-5 py-4 text-xs leading-relaxed text-muted-foreground">
          {table.notes.map((note) => <p key={note} className="mt-1 first:mt-0">{note}</p>)}
        </div>
      )}
    </article>
  );
}

export function SupplierCatalog({ productId }: { productId: string }) {
  const isBushingPage = productId === "transformer-bushings-connectors";
  const isOilPage = productId === "transformer-conservator-breathers-oil-accessories";
  if (!isBushingPage && !isOilPage) return null;

  const valveTables = oilDimensionTables.filter((table) => table.id.startsWith("valve-"));
  const breatherTables = oilDimensionTables.filter((table) => table.id.startsWith("breather-"));

  return (
    <section id="supplier-catalog" className="border-t border-border bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary">
          {isBushingPage ? "Transformer Bushings & Terminal Connectors" : "Transformer Oil Valves & Breathers"}
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-foreground/80">
          {isBushingPage
            ? "This page covers two products: transformer bushings and terminal connectors. Original outline schematics identify the dimension symbols, while searchable tables give preliminary bushing dimensions by model. Terminal connectors are matched separately to the approved bushing and conductor interface."
            : "Original outline schematics and searchable dimension tables help compare selected transformer oil valves and breathers. Confirm the exact connection, model and final dimensions against an approved project drawing before ordering."}
        </p>
        <nav className="mt-5 flex flex-wrap gap-2" aria-label="Product families on this page">
          <a href={isBushingPage ? "#transformer-bushings" : "#transformer-valves"} className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:border-primary hover:bg-primary/5">
            {isBushingPage ? "Transformer Bushings" : "Oil Valves"}
          </a>
          <a href={isBushingPage ? "#terminal-connectors" : "#transformer-breathers"} className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary hover:border-primary hover:bg-primary/5">
            {isBushingPage ? "Terminal Connectors" : "Breathers"}
          </a>
        </nav>

        {isBushingPage ? (
          <>
            <div id="transformer-bushings" className="mt-10 scroll-mt-24">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">Product 01</p>
              <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">Transformer Bushings</h3>
              <div className="space-y-6">
                {bushingDimensionTables.map((table) => <DimensionTable key={table.id} table={table} />)}
              </div>
            </div>
            <div id="terminal-connectors" className="mt-12 scroll-mt-24">
              <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">Terminal Connectors</h3>
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
                    ].map((item) => <li key={item} className="rounded-lg border border-primary/10 bg-secondary/40 px-3 py-2">{item}</li>)}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    A model-specific connector dimension table is not yet independently verified. Final connector dimensions and ratings follow the approved project drawing.
                  </p>
                  <a href="#product-inquiry" className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90">
                    Send connection drawing for review
                  </a>
                </div>
              </article>
            </div>
          </>
        ) : (
          <>
            {valveTables.length > 0 && (
              <div id="transformer-valves" className="mt-10 scroll-mt-24">
                <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">Transformer Oil Valves</h3>
                <div className="space-y-6">{valveTables.map((table) => <DimensionTable key={table.id} table={table} />)}</div>
              </div>
            )}
            {breatherTables.length > 0 && (
              <div id="transformer-breathers" className="mt-12 scroll-mt-24">
                <h3 className="mb-5 border-b border-border pb-3 text-xl font-bold text-primary">Transformer Breathers</h3>
                <div className="space-y-6">{breatherTables.map((table) => <DimensionTable key={table.id} table={table} />)}</div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
