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
    5,
    "Oil-impregnated paper condenser bushing overview",
    ["BRDLW"],
    [["Highest equipment voltage classes", "40.5, 72.5, 126, 145, 170, 252 kV"]],
    "BRDLW is a model-pattern example; refer to the following detailed tables.",
  ),
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
    7,
    "OIP cable-type bushings, 72.5 and 126 kV",
    [
      "BRDLW-72.5/630-4",
      "BRDLW-72.5/1250-4",
      "BRDW-126/630-4",
      "BRDLW-126/630-4",
      "BRDLW-126/1250-4",
    ],
    [
      ["Rated voltage", "72.5 or 126 kV, by model"],
      ["Rated current", "630 or 1250 A, by model"],
      ["Flange", "72.5 kV cast-flange version shown"],
    ],
    drawing,
  ),
  b(
    8,
    "OIP cast-flange cable-type bushings, 126 and 145 kV",
    ["BRDLW-126/630-4", "BRDLW-126/1250-4", "BRDLW-145/630-4", "BRDLW-145/1250-4"],
    [
      ["Rated voltage", "126 or 145 kV, by model"],
      ["Rated current", "630 or 1250 A, by model"],
    ],
    drawing,
  ),
  b(
    9,
    "OIP cast-flange cable-type bushings, 170 and 252 kV",
    ["BRDLW-170/630-4", "BRDLW-170/1250-4", "BRDLW-252/630-4", "BRDLW-252/1250-4"],
    [
      ["Rated voltage", "170 or 252 kV, by model"],
      ["Rated current", "630 or 1250 A, by model"],
    ],
    "252 kV codes include both YC and YCT prefixes. " + drawing,
  ),
  b(
    10,
    "OIP conductor-rod and voltage-tap bushings",
    [
      "BRDLW-40.5/2000-4",
      "BRDLW-72.5/1600-4",
      "BRDLW-72.5/2000-4",
      "BRDLW-72.5/2500-4",
      "BRDLW-126/1600-4",
      "BRDLW-126/2000-4",
      "BRDLW-126/2500-4",
      "BRDLW-145/1600-4",
      "BRDLW-145/2500-4",
      "BRDLW-252/1600-4",
      "BRDLW-252/2000-4",
      "BRDLW-252/2500-4",
      "BRDLW-252/3150-4",
      "YCC314012",
      "YCC415522",
      "YCCT725512",
    ],
    [
      ["Conductor-rod ratings", "40.5–252 kV; 1600–3150 A by model"],
      ["Voltage-tap cable-type ratings", "72.5, 126 or 252 kV; 630 A"],
    ],
    "YCC/YCCT strings are catalogue product codes for the voltage-tap versions. " + drawing,
  ),
  b(
    11,
    "RIP dry cable-type bushings, 72.5 and 126 kV",
    ["EBRDLW-72.5/630-4", "EBRDLW-72.5/1250-4", "EBRDLW-126/630-4", "EBRDLW-126/1250-4"],
    [
      ["Rated voltage", "72.5 or 126 kV, by model"],
      ["Rated current", "630 or 1250 A, by model"],
    ],
    drawing,
  ),
  b(
    12,
    "RIP dry cable-type and conductor-rod bushings",
    [
      "EBRDLW-252/630-4",
      "EBRDLW-252/1250-4",
      "EBRDLW-72.5/2500-4",
      "EBRDLW-126/1600-4",
      "EBRDLW-126/2000-4",
      "EBRDLW-126/2500-4",
    ],
    [
      ["Cable-type rating", "252 kV, 630 or 1250 A"],
      ["Conductor-rod ratings", "72.5 or 126 kV; 1600–2500 A by model"],
    ],
    drawing,
  ),
  b(
    13,
    "Low-voltage and medium-voltage bushing overview",
    ["BF", "BJL", "BD", "BDF", "BJFW"],
    [
      ["Rated voltage sequence", "1.2, 3.6, 7.2, 12, 24, 36, 40.5, 52, 72.5 kV"],
      ["Standards cited", "GB/T 4109-2022; IEC 60137:2017"],
    ],
    "Series prefixes and general tests appear here; exact models are on following spreads.",
  ),
  b(
    14,
    "BF and BFJ composite bushings, stud-tail",
    [
      ...model("BF-1", [315, 400, 630, 800, 1000, 1250]),
      ...model("BFJ-1", [315, 400, 630, 800, 1000, 1250]),
      ...model("BF-3", [315, 400, 630, 800, 1000, 1250]),
    ],
    [
      ["Rated voltage", "1 or 3 kV, by model"],
      ["Rated current", "315–1250 A, by model"],
    ],
    drawing,
  ),
  b(
    15,
    "BF composite bushings, flat-tail and plate-tail",
    [...model("BF-1", [800, 1000, 1250]), ...model("BF-3", [800, 1000, 1250])],
    [
      ["Rated voltage", "1 or 3 kV, by model"],
      ["Rated current", "800, 1000 or 1250 A"],
      ["Connection", "Flat-tail or plate-tail; product codes differ"],
    ],
    drawing,
  ),
  b(
    16,
    "BF and BFJ composite bushings, 1600–3150 A",
    [
      ...model("BF-1", [1600, 2000, 3150]),
      ...model("BFJ-1", [1600, 2000, 3150]),
      ...model("BF-3", [1600, 2000, 3150]),
    ],
    [
      ["Rated voltage", "1 or 3 kV, by model"],
      ["Rated current", "1600, 2000 or 3150 A"],
      ["Connection", "Flat-tail or plate-tail"],
    ],
    drawing,
  ),
  b(
    17,
    "BF and BFJ high-current composite bushings",
    [
      ...model("BF-1", [4000, 5000, 6000]),
      ...model("BFJ-1", [4000, 5000, 6000]),
      ...model("BF-3", [4000, 5000, 6000]),
    ],
    [
      ["Rated voltage", "1 or 3 kV, by model"],
      ["Rated current", "4000, 5000 or 6000 A"],
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
  b(
    19,
    "BJL extended-creepage and BLF/BLFW flanged cable-type bushings",
    [
      ...model("BJL-24", [50, 100, 275]),
      ...model("BLF-12", [50, 100, 315]),
      ...model("BLF-24", [50, 100, 315]),
      ...model("BLFW-24", [50, 100, 315, 400, 630]),
    ],
    [
      ["Rated voltage", "12 or 24 kV, by model"],
      ["Rated current", "50–630 A, by model"],
    ],
    "The detailed page lists BLFW-24/400 and /630 although the contents summary stops at 315 A. Confirm current validity and exact code.",
  ),
  b(
    20,
    "BD, BDW and BDLW rod-type porcelain bushings",
    [
      ...model("BD-12", [315, 400, 630, 800, 1000, 1250]),
      ...model("BD-24", [315, 400, 630, 800, 1000, 1250]),
      ...model("BDW-24", [315, 400, 630, 800, 1000, 1250]),
      ...model("BDLW-24", [800, 1000, 1250]),
    ],
    [
      ["Rated voltage", "12 or 24 kV, by model"],
      ["Rated current", "315–1250 A, by model"],
    ],
    drawing,
  ),
  b(
    21,
    "BD, BDW and BDLW rod-type porcelain bushings",
    [
      ...model("BD-12", [2000, 3150]),
      ...model("BD-24", [2000, 3150]),
      ...model("BDW-24", [2000, 3150]),
      ...model("BDLW-24", [2000, 3150]),
      "BD-12/800T",
      "BD-24/2000T",
      "BDW-24/3150T",
    ],
    [
      ["Rated voltage", "12 or 24 kV, by model"],
      ["Rated current classes", "800, 1000, 1250, 2000, 3150 A"],
      ["Connection", "Plate-tail and flat-tail T versions"],
    ],
    "T-suffix identifiers are verified examples, not an exhaustive model list. " + drawing,
  ),
  b(
    22,
    "BDF and BDFW flanged porcelain bushings",
    ["BDF-12", "BDF-24", "BDFW-24"],
    [
      ["Rated voltage", "12 or 24 kV"],
      ["Rated current classes", "315, 400, 630, 800, 1000, 1250, 2000, 3150 A"],
    ],
    "Identifiers are series prefixes. " + drawing,
  ),
  b(
    23,
    "BDFW and BJFW porcelain bushings",
    ["BDFW-24/4000", "BDFW-24/5000", "BJFW-24"],
    [
      ["BDFW flanged ratings", "24 kV; 4000 or 5000 A"],
      ["BJFW rod-type current classes", "630, 800, 1000, 1250, 2000, 3150, 4000, 5000 A"],
    ],
    "BJFW page heading starts at 800 A but its table includes 630 A. Confirm the full model and structure code.",
  ),
  b(
    24,
    "BJFW rod-type porcelain bushings",
    ["BJFW-24"],
    [
      ["Rated voltage", "24 kV"],
      ["Rated current classes", "630, 1250, 2000, 3150, 4000, 5000, 6000 A"],
    ],
    "Identifier is a series prefix. " + drawing,
  ),
  b(
    25,
    "BJ/BJW rod-type and BJF/BJFW flanged porcelain bushings",
    ["BJ-40.5", "BJW-40.5", "BJF-40.5", "BJFW-40.5"],
    [
      ["Rated voltage", "40.5 kV"],
      ["Rated current classes", "315, 400, 630, 800, 1000, 1250, 2000, 3150 A"],
    ],
    "Identifiers are series prefixes; multiple creepage and shed options exist. " + drawing,
  ),
  b(
    26,
    "BJFW high-current porcelain bushings",
    ["BJFW-40.5", "BJFW-46"],
    [
      ["Rated voltage", "40.5 or 46 kV, by table"],
      ["Rated current classes", "1250, 2000, 3150, 4000, 5000, 6000 A"],
    ],
    drawing,
  ),
  b(
    27,
    "BJLW cable-type and BLFW flanged porcelain bushings",
    ["BJLW-40.5", "BLFW-24"],
    [
      ["BJLW", "40.5 kV; 35, 100, 250, 400, 630, 800, 1000, 1250 A"],
      ["BLFW", "24 kV; 100, 400, 630, 800, 1000, 1250 A"],
    ],
    drawing,
  ),
  b(
    28,
    "BLF/BLFW flanged and BJFW very-high-current bushings",
    [
      "BLF-40.5",
      "BLFW-40.5",
      "BJFW-24/12000",
      "BJFW-24/16000",
      "BJFW-24/20000",
      "BJFW-24/31500",
      "BJFW-40.5/12000",
      "BJFW-40.5/16000",
      "BJFW-40.5/20000",
      "BJFW-40.5/25000",
    ],
    [
      ["BLF/BLFW", "40.5 kV; 35–1250 A by model"],
      ["BJFW", "24 or 40.5 kV; 12000–31500 A by model"],
    ],
    drawing,
  ),
  b(
    29,
    "DIN-pattern porcelain bushings, 1–3 kV",
    ["DIN 1 kV / 250 A", "DIN 3 kV / 250 A", "DIN 1 kV / 630 A", "DIN 3 kV / 630 A"],
    [
      ["Rated voltage", "1 or 3 kV"],
      ["Rated current classes", "250, 630, 1000, 2000, 3150 A"],
    ],
    "Chinese and product headings say DIN; the English running heading says ANSI in error. Identifiers are rating descriptions.",
  ),
  b(
    30,
    "DIN-pattern porcelain bushings, 12–52 kV",
    ["DIN 12 kV", "DIN 24 kV", "DIN 36 kV", "DIN 52 kV"],
    [
      ["12–36 kV current classes", "250 and 630 A"],
      ["52 kV current classes", "250, 630, 1000, 2000, 3150 A"],
    ],
    "Identifiers are voltage-class descriptions. Confirm exact table model and dimensions.",
  ),
  b(
    31,
    "ANSI-pattern porcelain bushings",
    [...model("ANSI-1", [315, 400, 630, 800, 1000]), "ANSI-15/50", "ANSI-18/50", "ANSI-27/50"],
    [
      ["Voltage classes", "1, 15, 18, 27 kV"],
      ["Current classes", "1 kV: 315–1000 A; 15–27 kV: 50 A"],
    ],
    drawing,
  ),
  b(
    32,
    "EN-pattern porcelain bushings, 1 kV",
    model("EN-1", [250, 630, 1000, 2000, 3150]),
    [
      ["Rated voltage", "1 kV"],
      ["Rated current", "250–3150 A by model"],
    ],
    drawing,
  ),
  b(
    33,
    "EN- and AS-pattern porcelain bushings",
    [
      "EN-24/250",
      "EN-36/250",
      "AS-1/200",
      "AS-1/315",
      ...model("AS-3", [315, 500, 630, 1000, 1250, 2000, 2500, 3150]),
    ],
    [
      ["EN ratings", "24 or 36 kV; 250 A"],
      ["AS ratings", "1 or 3 kV; 200–3150 A by model"],
    ],
    "EN-36/250 has two structure variants. " + drawing,
  ),
  b(
    34,
    "FTG epoxy-resin dry bushing overview",
    ["FTG"],
    [
      ["Rated voltage classes", "1, 3, 10, 20, 35 kV"],
      ["Highest equipment voltage classes", "1.2, 3.6, 12, 24, 40.5 kV"],
    ],
    "FTG is a series prefix; detailed ratings and codes follow.",
  ),
  b(
    35,
    "FTG epoxy-resin dry bushings",
    ["FTG3-1/6500", "FTG2-1/2000", "FTG3-2.5/6000", "FTG1-1/630"],
    [
      ["Rated voltage", "1 or 2.5 kV, by model"],
      ["Rated current", "630–6500 A, by model"],
    ],
    drawing,
  ),
  b(
    36,
    "FTG1 epoxy-resin dry bushings",
    model("FTG1-1", [1000, 1600, 2000]),
    [
      ["Rated voltage", "1 kV"],
      ["Rated current", "1000, 1600 or 2000 A"],
    ],
    drawing,
  ),
  b(
    37,
    "FTG1 epoxy-resin dry bushings",
    model("FTG1-1", [2500, 3150, 4000]),
    [
      ["Rated voltage", "1 kV"],
      ["Rated current", "2500, 3150 or 4000 A"],
    ],
    drawing,
  ),
  b(
    38,
    "FTG1 epoxy-resin dry bushings",
    [...model("FTG1-1", [4000, 5000, 7000]), "FTG1-1.2/1600"],
    [
      ["Rated voltage", "1 or 1.2 kV, by model"],
      ["Rated current", "1600–7000 A, by model"],
    ],
    drawing,
  ),
  b(
    39,
    "FTG1 epoxy-resin dry bushings, 1.2 kV",
    model("FTG1-1.2", [3150, 5000, 5500, 6000]),
    [
      ["Rated voltage", "1.2 kV"],
      ["Rated current", "3150, 5000, 5500 or 6000 A"],
    ],
    drawing,
  ),
  b(
    40,
    "FTG1 and FTG3 epoxy-resin dry bushings",
    ["FTG1-2.5/8000", ...model("FTG3-3", [1000, 2000, 3150])],
    [
      ["FTG1 rating", "2.5 kV / 8000 A"],
      ["FTG3 ratings", "3 kV / 1000, 2000 or 3150 A"],
    ],
    drawing,
  ),
  b(
    41,
    "FTG3 and multi-hole epoxy-resin dry bushings",
    ["FTG3-3/5000", "FTG3-3/7000", "YC.286.300X.K6", "YC.286.301.K6"],
    [
      ["FTG3 ratings", "3 kV / 5000 or 7000 A"],
      ["Multi-hole rating", "1 kV / 1250 A; K6–K20 variants shown"],
    ],
    "K6 identifiers are exact examples; other hole counts and parallel/vertical terminal codes are in the original table.",
  ),
  b(
    42,
    "Multi-hole epoxy-resin dry bushings",
    ["YC.286.302.K6", "YC.286.302S.K6", "YC.286.303.K6", "YC.286.303S.K6"],
    [
      ["Rated voltage", "1 kV"],
      ["Rated current", "1600 or 2500 A"],
      ["Hole-count variants", "K6, K8, K10, K12, K14, K16, K18, K20"],
    ],
    drawing,
  ),
  b(
    43,
    "Multi-hole epoxy-resin dry bushings",
    ["YC.286.304.K6", "YC.286.304S.K6", "YC.286.307.K6", "YC.286.307S.K6"],
    [
      ["Rated voltage", "1 kV"],
      ["Rated current", "3150 or 4000 A"],
      ["Hole-count variants", "K6–K20"],
    ],
    drawing,
  ),
  b(
    44,
    "Multi-hole epoxy-resin dry bushings",
    ["YC.286.310.K6", "YC.286.310S.K6", "YC.286.805.K6", "YC.286.805S.K6"],
    [
      ["Rated voltage/current", "1 kV / 5000 A or 3 kV / 1250 A"],
      ["Hole-count variants", "K6–K20"],
    ],
    drawing,
  ),
  b(
    45,
    "Multi-hole epoxy-resin dry bushings, 3 kV",
    ["YC.286.806.K6", "YC.286.806S.K6", "YC.286.807.K6", "YC.286.807S.K6"],
    [
      ["Rated voltage", "3 kV"],
      ["Rated current", "1600 or 2500 A"],
      ["Hole-count variants", "K6–K20"],
    ],
    drawing,
  ),
  b(
    46,
    "Multi-hole epoxy-resin dry bushings, 3 kV",
    ["YC.286.808.K6", "YC.286.808S.K6", "YC.286.810.K6", "YC.286.810S.K6"],
    [
      ["Rated voltage", "3 kV"],
      ["Rated current", "3150 or 5000 A"],
      ["Hole-count variants", "K6–K20"],
    ],
    "YC.286.810.K variants are distinct from the single-body YC.286.810/810B on PDF page 41.",
  ),
  b(
    47,
    "Multi-hole epoxy-resin dry bushing",
    ["YC.286.812.K6", "YC.286.812B.K6"],
    [
      ["Rated voltage/current", "3 kV / 6500 A"],
      ["Hole-count variants", "K6, K8, K10, K12, K14, K16, K18, K20"],
    ],
    drawing,
    "90",
  ),
  b(
    47,
    "FTG5 epoxy-resin dry bushing",
    ["FTG5-12/315", "YC.286.340"],
    [
      ["Rated voltage/current", "12 kV / 315 A"],
      ["Creepage for this code", "530 mm"],
    ],
    drawing,
    "91",
  ),
  b(
    47,
    "FTG5 epoxy-resin dry bushing",
    ["FTG5-12/315", "YC.286.341"],
    [
      ["Rated voltage/current", "12 kV / 315 A"],
      ["Creepage for this code", "340 mm"],
    ],
    drawing,
    "91",
  ),
  b(
    47,
    "FTG5 epoxy-resin dry bushing",
    ["FTG5-12/400", "YC.286.341.A"],
    [
      ["Rated voltage/current", "12 kV / 400 A"],
      ["Creepage for this code", "340 mm"],
    ],
    drawing,
    "91",
  ),
  b(
    48,
    "FTG5 epoxy-resin dry bushing",
    ["FTG5-24/315", "YC.286.340.A"],
    [
      ["Rated voltage/current", "24 kV / 315 A"],
      ["Creepage for this code", "640 mm"],
    ],
    drawing,
    "92",
  ),
  b(
    48,
    "FTG7 epoxy-resin dry bushing",
    ["FTG7-40.5/315", "YC.286.336"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1256 mm"],
    ],
    drawing,
    "92",
  ),
  b(
    48,
    "FTG7 epoxy-resin dry bushing",
    ["FTG7-40.5/315", "YC.286.337"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1420 mm"],
    ],
    drawing,
    "92",
  ),
  b(
    48,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.333.J10"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1256 mm"],
    ],
    drawing,
    "93",
  ),
  b(
    48,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.334"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1320 mm"],
    ],
    drawing,
    "93",
  ),
  b(
    48,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.338"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1420 mm"],
    ],
    drawing,
    "93",
  ),
  b(
    49,
    "FTG9 epoxy-resin dry bushing",
    ["FTG9-40.5/315", "YC.286.342"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1256 mm"],
    ],
    drawing,
    "94",
  ),
  b(
    49,
    "FTG9 epoxy-resin dry bushing",
    ["FTG9-40.5/315", "YC.286.342.A"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1420 mm"],
    ],
    drawing,
    "94",
  ),
  b(
    49,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.335"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1320 mm"],
    ],
    drawing,
    "95",
  ),
  b(
    49,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.338.G210"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1650 mm"],
    ],
    drawing,
    "95",
  ),
  b(
    50,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.338.G"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1650 mm"],
    ],
    drawing,
    "96",
  ),
  b(
    50,
    "FTG8 epoxy-resin dry bushing",
    ["FTG8-40.5/315", "YC.286.342.GP"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1650 mm"],
    ],
    drawing,
    "96",
  ),
  b(
    50,
    "Silicone-coated FTG outdoor resin bushing",
    ["FTG-40.5/315", "YC.286.350"],
    [
      ["Rated voltage/current", "40.5 kV / 315 A"],
      ["Creepage for this code", "1589 mm"],
    ],
    drawing,
    "97",
  ),
  b(
    50,
    "Silicone-coated FTG outdoor resin bushing",
    ["FTG-40.5/400", "YC.286.350.A"],
    [
      ["Rated voltage/current", "40.5 kV / 400 A"],
      ["Creepage for this code", "1589 mm"],
    ],
    drawing,
    "97",
  ),
  b(
    51,
    "TG1 epoxy-resin wall bushing",
    ["TG1-40.5kV", "YC.286.340"],
    [
      ["Rated voltage", "40.5 kV"],
      ["Creepage", "Outdoor 665 mm; indoor 585 mm, as shown for this model"],
    ],
    "The printed code YC.286.340 also appears for FTG5-12/315 on PDF page 47. Identify this item by its TG1 model and drawing, and ask the supplier to confirm the code.",
    "98",
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
    51,
    "99",
    "Brass flanged gate valve",
    "YC.586.201",
    [15, 20, 25, 32, 50, 80, 100, 125, 150],
    [
      ["Nominal pressure", "1.6 MPa"],
      ["Working temperature", "−20 to 110 °C"],
    ],
  ),
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
