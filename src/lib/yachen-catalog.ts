/**
 * Hebei Yachen Electric 2026 catalogue lookup. Each PDF page is a two-page spread.
 * These catalogue references are for drawing identification and supplier review,
 * not a Wenze stock, availability, certification, or interchangeability claim.
 */
export type YachenCatalogPage = {
  section: "bushings" | "conservator-breathers-oil-accessories";
  pdfPage: number;
  printedPages: string;
  series: string;
  modelIdentifiers: string[];
  specs: { label: string; value: string }[];
  imageAlt: string;
  note?: string;
};

type Pair = readonly [label: string, value: string];
type Section = YachenCatalogPage["section"];
const printed = (p: number) =>
  `${String(2 * p - 4).padStart(2, "0")}–${String(2 * p - 3).padStart(2, "0")}`;
const row = (
  section: Section,
  pdfPage: number,
  series: string,
  modelIdentifiers: string[],
  specs: Pair[],
  note?: string,
  printedPages = printed(pdfPage),
): YachenCatalogPage => ({
  section,
  pdfPage,
  printedPages,
  series,
  modelIdentifiers,
  specs: specs.map(([label, value]) => ({ label, value })),
  imageAlt: `${series}, Hebei Yachen Electric 2026 catalogue, printed page${printedPages.includes("–") ? "s" : ""} ${printedPages}`,
  ...(note ? { note } : {}),
});
const b = (p: number, name: string, ids: string[], specs: Pair[], note?: string, pages?: string) =>
  row("bushings", p, name, ids, specs, note, pages);
const a = (p: number, name: string, ids: string[], specs: Pair[], note?: string, pages?: string) =>
  row("conservator-breathers-oil-accessories", p, name, ids, specs, note, pages);
const model = (prefix: string, currents: number[]) =>
  currents.map((current) => `${prefix}/${current}`);
const drawing =
  "Dimensions and interfaces vary by full catalogue code. Confirm the original drawing and current specification with the supplier.";

export const yachenCatalogPages: YachenCatalogPage[] = [
  b(
    6,
    "OIP cable-type bushings, 40.5 and 72.5 kV",
    [
      "BRDW-40.5/630-4",
      "BRDLW-40.5/630-4",
      "BRDW-40.5/1250-4",
      "BRDLW-40.5/1250-4",
      "BRDLW-72.5/630-4",
      "BRDLW-72.5/1250-4",
    ],
    [
      ["Rated voltage", "40.5 or 72.5 kV, by model"],
      ["Rated current", "630 or 1250 A, by model"],
    ],
    drawing,
  ),
  b(
    18,
    "BJL and BJLW cable-type porcelain bushings",
    [
      ...model("BJL-12", [50, 100, 275]),
      ...model("BJL-24", [50, 100, 275]),
      ...model("BJLW-24", [50, 100, 275, 400, 630]),
    ],
    [
      ["Rated voltage", "12 or 24 kV, by model"],
      ["Rated current", "50–630 A, by model"],
    ],
    drawing,
  ),
];

// One valve record per complete part code keeps the DN/code relationship intact.
function valveRows(
  pdfPage: number,
  printedPage: string,
  series: string,
  prefix: string,
  nominalDiameters: number[],
  commonSpecs: Pair[] = [],
  note = drawing,
): YachenCatalogPage[] {
  return nominalDiameters.map((dn) =>
    a(
      pdfPage,
      series,
      [`${prefix}.${dn}`],
      [["Nominal diameter", `DN${dn}`], ...commonSpecs],
      note,
      printedPage,
    ),
  );
}

yachenCatalogPages.push(
  ...valveRows(
    52,
    "100",
    "Brass flanged ball valve",
    "YC.586.202",
    [15, 20, 25, 50, 80, 100],
    [
      ["Nominal pressure", "1.6 MPa"],
      ["Working temperature", "−20 to 110 °C"],
      ["Flange standard cited", "GB 9113"],
    ],
  ),
  a(
    52,
    "Brass oil-sampling stop valve",
    ["DN15"],
    [["Nominal diameter", "DN15"]],
    "No Yachen part code is printed for this valve; confirm the drawing and code with the supplier.",
    "101",
  ),
  a(
    52,
    "Brass oil-sampling stop valve",
    ["DN32"],
    [["Nominal diameter", "DN32"]],
    "No Yachen part code is printed for this valve; confirm the drawing and code with the supplier.",
    "101",
  ),
  a(
    52,
    "Brass flanged gate valve, Siemens-specific version",
    ["DN32"],
    [["Nominal diameter", "DN32"]],
    "This is separately shown without a Yachen part code. Do not substitute the YC.586.201.32 code without confirmation.",
    "101",
  ),
  ...valveRows(
    53,
    "102",
    "Stainless-steel ball valve",
    "YC.586.204",
    [15, 20, 25, 50, 65, 80, 100],
  ),
  ...valveRows(
    53,
    "103",
    "Cast-iron transformer oil drain valve",
    "YC.586.10",
    [25, 50, 80],
    [
      ["Working temperature", "−40 to 105 °C"],
      ["Catalogue tightness test", "0.5 MPa for 10 minutes without leakage"],
    ],
    "A two-purpose fill/drain/sample version is also described for DN25 and DN50; it needs to be specified separately. Confirm the exact body and port drawing.",
  ),
  ...valveRows(54, "104", "Steel-plate butterfly valve", "YC.386.20", [25, 40, 50, 80]),
  ...[100, 125, 150, 200].map((suffix) =>
    a(
      54,
      "Steel-plate butterfly valve",
      [`YC.386.20.${suffix}`],
      [["Nominal diameter", "Supplier confirmation required"]],
      "The printed DN cells on the lower table repeat 25/40/50/80 against the .100/.125/.150/.200 codes; the code suffix suggests a different size. Do not use either as confirmed DN without a corrected supplier drawing.",
      "104",
    ),
  ),
  ...valveRows(
    54,
    "105",
    "Vacuum eccentric butterfly valve",
    "YC.386.301",
    [40, 50, 80, 100, 125, 150, 200],
  ),
  ...valveRows(55, "106", "Vacuum eccentric butterfly valve", "YC.386.302", [50, 80]),
  ...valveRows(55, "106", "Vacuum eccentric butterfly valve", "YC.386.303", [40, 50, 80]),
);

type BreatherRow = readonly [
  model: string,
  code: string,
  diameterMm: number,
  heightMm: string,
  silicaGelKg: string,
  referenceOilKg: number,
];
const breatherNote =
  "Dimensions and transformer oil mass are catalogue references for the exact listed code. Confirm mounting flange, environment, transformer duty and current supplier data before selection.";
function breatherRows(
  pdfPage: number,
  printedPage: string,
  series: string,
  values: BreatherRow[],
): YachenCatalogPage[] {
  return values.map(([modelName, code, diameterMm, heightMm, silicaGelKg, referenceOilKg]) =>
    a(
      pdfPage,
      series,
      [modelName, code],
      [
        ["Body diameter D", `${diameterMm} mm`],
        ["Overall height H", heightMm],
        ["Silica gel mass", `${silicaGelKg} kg`],
        ["Reference transformer oil mass", `${referenceOilKg} kg`],
      ],
      breatherNote,
      printedPage,
    ),
  );
}

yachenCatalogPages.push(
  ...breatherRows(55, "107", "XS1 ordinary transformer breather", [
    ["XS1-0.2", "YC.683.1", 80, "160 mm (square flange) or 150 mm (round flange)", "0.2", 700],
    ["XS1-0.5", "YC.683.2", 100, "175 mm (square flange) or 160 mm (round flange)", "0.5", 1500],
    ["XS1-1", "YC.683.3", 100, "250 mm", "1", 3500],
    ["XS1-1.5", "YC.683.4", 140, "240 mm", "1.5", 5000],
    ["XS1-2", "YC.683.5", 140, "280 mm", "2", 7000],
    ["XS1-3", "YC.683.6", 165, "280 mm", "3", 10000],
    ["XS1-5", "YC.683.7", 165, "360 mm", "5", 22000],
    ["XS1-10", "YC.683.8", 165, "610 mm", "10", 35000],
  ]),
  ...breatherRows(55, "107", "XS2 ordinary transformer breather", [
    ["XS2-0.2", "YC.685.1", 85, "170 mm", "0.2", 700],
    ["XS2-0.5", "YC.685.2", 90, "200 mm", "0.5", 1500],
    ["XS2-1", "YC.685.3", 120, "260 mm", "1", 3500],
    ["XS2-1.5", "YC.685.4", 120, "300 mm", "1.5", 5000],
    ["XS2-2", "YC.685.5", 120, "330 mm", "2", 7000],
    ["XS2-3", "YC.685.6", 165, "355 mm", "3", 10000],
    ["XS2-5", "YC.685.7", 165, "435 mm", "5", 22000],
    ["XS2-10", "YC.685.8", 165, "680 mm", "10", 35000],
  ]),
  ...breatherRows(56, "108", "XS3 ordinary transformer breather", [
    ["XS3-0.5", "YC.686.2", 135, "200 mm", "0.5", 1500],
    ["XS3-1", "YC.686.3", 140, "390 mm", "1", 3500],
    ["XS3-1.5", "YC.686.4", 140, "430 mm", "1.5", 5000],
    ["XS3-2", "YC.686.5", 140, "460 mm", "2", 7000],
    ["XS3-3", "YC.686.6", 170, "500 mm", "3", 10000],
    ["XS3-5", "YC.686.7", 170, "550 mm", "5", 22000],
    ["XS3-10", "YC.686.8", 220, "670 mm", "10", 35000],
  ]),
  ...breatherRows(56, "109", "MX1 regeneration-type transformer breather", [
    ["MX1-1.5", "5YC-101.01", 175, "425 mm", "1.5", 5000],
    ["MX1-3", "5YC-101.02", 225, "518 mm", "3", 16000],
    ["MX1-5", "5YC-101.03", 225, "710 mm", "5", 35000],
    ["MX1-10", "5YC-101.04", 460, "750 mm (dual cylinder)", "10", 80000],
  ]),
);
