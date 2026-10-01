import type { ReferenceDimensionTable } from "./reference-dimensions";

/**
 * Preliminary dimensional references transcribed from physical PDF pages 52–56.
 * Use only the dimensions explicitly paired with a DN or model in the source.
 * The inconsistent lower steel-plate-butterfly table on p54 is excluded.
 * Supplier codes, photographs and scanned drawing pages are intentionally absent.
 */
type Cell = string | number;
const rows = (keys: string[], values: Cell[][]): Record<string, string>[] =>
  values.map((value) => {
    if (value.length !== keys.length) {
      throw new Error(`Invalid oil-accessory dimension row: expected ${keys.length} values, found ${value.length}`);
    }
    return Object.fromEntries(keys.map((key, index) => [key, String(value[index])]));
  });

const ballColumns: ReferenceDimensionTable["columns"] = [
  { key: "dn", label: "Nominal size (DN)" },
  { key: "d1", label: "Flange OD D1", unit: "mm" },
  { key: "d2", label: "Bolt circle D2", unit: "mm" },
  { key: "holes", label: "Bolt holes" },
  { key: "b", label: "Handle reach B", unit: "mm" },
  { key: "h", label: "Height H", unit: "mm" },
  { key: "l", label: "Face-to-face L", unit: "mm" },
];
const ballKeys = ballColumns.map(({ key }) => key);

const butterflyColumns: ReferenceDimensionTable["columns"] = [
  { key: "dn", label: "Nominal size (DN)" },
  { key: "d1", label: "D1", unit: "mm" },
  { key: "d2", label: "D2", unit: "mm" },
  { key: "d3", label: "D3", unit: "mm" },
  { key: "d4", label: "D4", unit: "mm" },
  { key: "hole", label: "Hole diameter d", unit: "mm" },
  { key: "l", label: "L", unit: "mm" },
  { key: "c", label: "Sink depth C", unit: "mm" },
  { key: "h", label: "Overall height H", unit: "mm" },
  { key: "b", label: "Body thickness B", unit: "mm" },
];
const butterflyKeys = butterflyColumns.map(({ key }) => key);

const breatherColumns: ReferenceDimensionTable["columns"] = [
  { key: "model", label: "Model" },
  { key: "d", label: "Body diameter D", unit: "mm" },
  { key: "h", label: "Overall height H", unit: "mm" },
  { key: "gel", label: "Silica gel fill", unit: "kg" },
];
const breatherKeys = breatherColumns.map(({ key }) => key);
const referenceNote =
  "Preliminary dimensional reference only. Confirm the current drawing, mounting interface and selected duty before ordering.";

export const oilDimensionTables: ReferenceDimensionTable[] = [
  {
    id: "valve-brass-flanged-ball",
    title: "Brass flanged ball valve dimensions",
    intro: "Flange diameters, bolt pattern and external dimensions by DN.",
    columns: ballColumns,
    rows: rows(ballKeys, [
      [15, "88 ±1", 65, "4 × Ø14", 115, "72 ±2", "75 ±2"],
      [20, "102 ±1", 75, "4 × Ø14", 130, "77 ±2", "77 ±2"],
      [25, "108 ±1", 85, "4 × Ø14", 140, "86 ±2", "81 ±2"],
      [50, "152 ±1", 125, "4 × Ø18", 205, "93 ±2", "96 ±2"],
      [80, "192 ±1", 160, "8 × Ø18", 235, "123 ±2", "121 ±2"],
      [100, "212 ±1", 180, "8 × Ø18", 235, "133 ±2", "138 ±2"],
    ]),
    notes: [referenceNote],
  },
  {
    id: "valve-stainless-steel-ball",
    title: "Stainless-steel ball valve dimensions",
    intro: "External flange and handle dimensions by DN.",
    columns: ballColumns,
    rows: rows(ballKeys, [
      [15, "95 ±1", 65, "4 × Ø14", 128, "90 ±2", "130 ±2"],
      [20, "105 ±1", 75, "4 × Ø14", 128, "94 ±2", "140 ±2"],
      [25, "113 ±1", 85, "4 × Ø14", 128, "92 ±2", "150 ±2"],
      [50, "158 ±1", 125, "4 × Ø18", 224, "114 ±2", "200 ±2"],
      [65, "178 ±1", 145, "4 × Ø18", 245, "147 ±2", "220 ±2"],
      [80, "193 ±1", 160, "8 × Ø18", 278, "159 ±2", "250 ±2"],
      [100, "215 ±1", 180, "8 × Ø18", 315, "178 ±2", "280 ±2"],
    ]),
    notes: [referenceNote],
  },
  {
    id: "valve-cast-iron-oil-drain",
    title: "Cast-iron transformer oil drain valve dimensions",
    intro: "D1 and D2 retain the original dimension labels; verify the mounting drawing before selecting a flange.",
    columns: [
      { key: "dn", label: "Nominal size (DN)" },
      { key: "d1", label: "D1", unit: "mm" },
      { key: "d2", label: "D2", unit: "mm" },
      { key: "thread", label: "Mounting thread Md" },
      { key: "l", label: "Length L", unit: "mm" },
      { key: "h", label: "Height H", unit: "mm" },
    ],
    rows: rows(["dn", "d1", "d2", "thread", "l", "h"], [
      [25, 85, 80, "M10", 75, 105],
      [50, 125, 120, "M16", 118, 140],
      [80, 160, 160, "M16", 152, 155],
    ]),
    notes: [
      "A separate fill/drain/sample configuration exists for DN25 and DN50; its additional nozzle is not represented by these dimensions.",
      referenceNote,
    ],
  },
  {
    id: "valve-steel-plate-butterfly",
    title: "Steel-plate butterfly valve dimensions",
    intro: "Four DN rows with internally consistent identifiers and dimensions.",
    columns: butterflyColumns,
    rows: rows(butterflyKeys, [
      [25, 45, 66, 85, 90, 14, 22, 12, 120, 30],
      [40, 45, 66, 85, 90, 14, 22, 12, 120, 30],
      [50, 64, 84, 125, 125, 14, 22, 12, 150, 30],
      [80, 92, 115, 150, 150, 22, 35, 12, 150, 30],
    ]),
    notes: [referenceNote],
  },
  {
    id: "valve-vacuum-eccentric-butterfly",
    title: "Vacuum eccentric butterfly valve dimensions",
    intro: "The DN40–80 version uses a square four-hole flange; DN100–200 uses a round eight-hole flange.",
    columns: [
      butterflyColumns[0],
      { key: "flange", label: "Mounting flange" },
      ...butterflyColumns.slice(1),
    ],
    rows: rows(["dn", "flange", ...butterflyKeys.slice(1)], [
      [40, "Square, 4 holes", 45, 66, 85, 90, 14, 22, 12, 120, 30],
      [50, "Square, 4 holes", 64, 84, 125, 125, 14, 22, 12, 150, 30],
      [80, "Square, 4 holes", 92, 115, 150, 150, 22, 35, 12, 180, 30],
      [100, "Round, 8 holes", 120, 145, 180, 220, 19, 30, 12, 245, 38],
      [125, "Round, 8 holes", 140, 165, 200, 235, 19, 30, 12, 260, 38],
      [150, "Round, 8 holes", 165, 190, 240, 280, 22, 35, 12, 305, 42],
      [200, "Round, 8 holes", 220, 246, 295, 340, 22, 35, 12, 365, 42],
    ]),
    notes: [referenceNote],
  },
  {
    id: "valve-vacuum-eccentric-butterfly-dual-hole",
    title: "Vacuum eccentric butterfly valve, dual-hole version",
    intro: "The two hole diameters d1 and d2 are shown separately to distinguish this flange from the standard version.",
    columns: [
      { key: "dn", label: "Nominal size (DN)" },
      { key: "h", label: "H", unit: "mm" },
      { key: "d1", label: "D1", unit: "mm" },
      { key: "d2", label: "D2", unit: "mm" },
      { key: "d3", label: "D3", unit: "mm" },
      { key: "d4", label: "D4", unit: "mm" },
      { key: "d", label: "d", unit: "mm" },
      { key: "d_small_1", label: "d1", unit: "mm" },
      { key: "d_small_2", label: "d2", unit: "mm" },
      { key: "c", label: "C", unit: "mm" },
      { key: "a1", label: "A1", unit: "mm" },
      { key: "a2", label: "A2", unit: "mm" },
      { key: "b", label: "B", unit: "mm" },
    ],
    rows: rows(["dn", "h", "d1", "d2", "d3", "d4", "d", "d_small_1", "d_small_2", "c", "a1", "a2", "b"], [
      [50, 150, 62, 84, 125, 125, 14, 13, 20, 15, 50, 95, 30],
      [80, 180, 92, 115, 160, 160, 19, 13, 20, 15, 70, 130, 30],
    ]),
    notes: [referenceNote],
  },
  {
    id: "valve-vacuum-eccentric-butterfly-threaded",
    title: "Vacuum eccentric butterfly valve, threaded-hole version",
    intro: "The secondary hole set is threaded (Md); confirm the bolt pattern against the project mounting face.",
    columns: [
      { key: "dn", label: "Nominal size (DN)" },
      { key: "h", label: "H", unit: "mm" },
      { key: "d1", label: "D1", unit: "mm" },
      { key: "d2", label: "D2", unit: "mm" },
      { key: "d3", label: "D3", unit: "mm" },
      { key: "d4", label: "D4", unit: "mm" },
      { key: "d", label: "d", unit: "mm" },
      { key: "thread", label: "Thread Md" },
      { key: "a1", label: "A1", unit: "mm" },
      { key: "a2", label: "A2", unit: "mm" },
      { key: "b", label: "B", unit: "mm" },
    ],
    rows: rows(["dn", "h", "d1", "d2", "d3", "d4", "d", "thread", "a1", "a2", "b"], [
      [40, 120, 48, 66, 85, 90, 14, "M8", 30, 72, 30],
      [50, 150, 64, 84, 125, 125, 14, "M12", 36, 93, 30],
      [80, 180, 92, 115, 160, 160, 19, "M12", 55, 135, 30],
    ]),
    notes: [referenceNote],
  },
  {
    id: "breather-xs1",
    title: "XS1 transformer breather dimensions",
    intro: "D is the body diameter; H varies with square or round flange on the two smallest models.",
    columns: breatherColumns,
    rows: rows(breatherKeys, [
      ["XS1-0.2", 80, "160 square / 150 round", "0.2"],
      ["XS1-0.5", 100, "175 square / 160 round", "0.5"],
      ["XS1-1", 100, 250, "1"],
      ["XS1-1.5", 140, 240, "1.5"],
      ["XS1-2", 140, 280, "2"],
      ["XS1-3", 165, 280, "3"],
      ["XS1-5", 165, 360, "5"],
      ["XS1-10", 165, 610, "10"],
    ]),
    notes: [referenceNote],
  },
  {
    id: "breather-xs2",
    title: "XS2 transformer breather dimensions",
    intro: "D is the body diameter and H is the overall height.",
    columns: breatherColumns,
    rows: rows(breatherKeys, [
      ["XS2-0.2", 85, 170, "0.2"],
      ["XS2-0.5", 90, 200, "0.5"],
      ["XS2-1", 120, 260, "1"],
      ["XS2-1.5", 120, 300, "1.5"],
      ["XS2-2", 120, 330, "2"],
      ["XS2-3", 165, 355, "3"],
      ["XS2-5", 165, 435, "5"],
      ["XS2-10", 165, 680, "10"],
    ]),
    notes: [referenceNote],
  },
  {
    id: "breather-xs3",
    title: "XS3 transformer breather dimensions",
    intro: "D is the body diameter and H is the overall height.",
    columns: breatherColumns,
    rows: rows(breatherKeys, [
      ["XS3-0.5", 135, 200, "0.5"],
      ["XS3-1", 140, 390, "1"],
      ["XS3-1.5", 140, 430, "1.5"],
      ["XS3-2", 140, 460, "2"],
      ["XS3-3", 170, 500, "3"],
      ["XS3-5", 170, 550, "5"],
      ["XS3-10", 220, 670, "10"],
    ]),
    notes: [referenceNote],
  },
  {
    id: "breather-mx1",
    title: "MX1 regeneration breather dimensions",
    intro: "D is the body diameter; the MX1-10 dual-cylinder height is shown separately.",
    columns: breatherColumns,
    rows: rows(breatherKeys, [
      ["MX1-1.5", 175, 425, "1.5"],
      ["MX1-3", 225, 518, "3"],
      ["MX1-5", 225, 710, "5"],
      ["MX1-10", 460, "750 (dual cylinder)", "10"],
    ]),
    notes: [referenceNote],
  },
];
