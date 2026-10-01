import type { ReferenceDimensionTable } from "./reference-dimensions";

/**
 * Reference dimensions transcribed from the original 2026 supplier catalogue:
 * physical PDF page 6 (printed pp. 08–09) and physical PDF page 18
 * (printed pp. 32–33). Source article codes are omitted; rows use model and
 * outline variant together to distinguish otherwise identical models.
 *
 * These are drawing-reference values, not Wenze-certified product dimensions.
 */

const oilPaperKeys = [
  "model", "voltageKv", "currentA", "L", "L4", "creepage", "L1", "L3",
  "D", "D1", "D2", "d2", "L2", "D3", "L5", "D4", "A", "B", "d", "d1", "D6", "d3",
] as const;

const oilPaperSource = [
  // model | Um | Ir | L | L4 | creepage | L1 | L3 | D | D1 | D2 | d2 | L2 | D3 | L5 | D4 | A | B | d | d1 | D6 | d3
  "BRDW-40.5/630-4|40.5|630|1310|1050|1260|485|40|255|225|145|14|235|130|50|100|80|40|14.5|27|200|35",
  "BRDLW-40.5/630-4|40.5|630|1570|1310|1260|485|300|255|225|145|14|495|130|50|100|80|40|14.5|27|200|35",
  "BRDLW-40.5/630-4|40.5|630|1780|1520|1260|485|500|255|225|145|14|705|130|50|100|80|40|14.5|27|200|35",
  "BRDW-40.5/1250-4|40.5|1250|1420|1120|1260|485|40|255|225|170|14|290|165|70|120|100|50|18|46|220|55",
  "BRDLW-40.5/1250-4|40.5|1250|1680|1380|1260|485|300|255|225|170|14|550|165|70|120|100|50|18|46|220|55",
  "BRDLW-72.5/630-4|72.5|630|1935|1675|2250|660|400|330|280|130|18|665|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|2085|1825|2250|660|550|330|280|130|18|815|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|1835|1575|2250|660|300|330|280|130|18|565|130|60|120|80|40|14.5|27|200|35",
  "BRDW-72.5/630-4|72.5|630|1575|1315|2250|660|40|330|280|130|18|305|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|2025|1765|2470|750|400|330|280|130|18|665|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|2175|1915|2470|750|550|330|280|130|18|815|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|2175|1915|2880|900|400|330|280|130|18|665|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/630-4|72.5|630|2325|2065|2880|900|550|330|280|130|18|815|130|60|120|80|40|14.5|27|200|35",
  "BRDLW-72.5/1250-4|72.5|1250|2100|1795|2740|750|400|400|350|170|24|695|165|90|140|100|50|18|46|220|55",
  "BRDLW-72.5/1250-4|72.5|1250|2250|1945|2470|750|550|400|350|170|24|845|165|90|140|100|50|18|46|220|55",
  "BRDLW-72.5/1250-4|72.5|1250|2010|1705|2250|660|400|400|350|170|24|695|165|90|140|100|50|18|46|220|55",
  "BRDLW-72.5/1250-4|72.5|1250|2160|1855|2250|660|550|400|350|170|24|845|165|90|140|100|50|18|46|220|55",
] as const;

function parseSourceRow(source: string, keys: readonly string[]): Record<string, string> {
  const values = source.split("|");
  if (values.length !== keys.length) {
    throw new Error(`Invalid reference-dimension transcription: expected ${keys.length} values, found ${values.length}`);
  }
  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

const oilPaperRows = oilPaperSource.map((source) => {
  const row = parseSourceRow(source, oilPaperKeys);
  return {
    ...row,
    variant: `Creepage ${row.creepage} / L3 ${row.L3}`,
  };
});

const ratingColumns = [
  { key: "model", label: "Reference model" },
  { key: "voltageKv", label: "Rated voltage", unit: "kV" },
  { key: "currentA", label: "Rated current", unit: "A" },
  { key: "variant", label: "Reference variant" },
];

const oilPaperCommonNotes = [
  "All outline dimensions and creepage distances are in millimetres. Symbols match the corresponding engineering drawing; do not select a mating part from the model name alone.",
  "Values are reference configurations. Confirm the latest approved outline drawing, installation interface and guaranteed electrical ratings for the ordered configuration.",
];

const bjlKeys = ["model", "H", "h1", "h2", "Md", "d1", "d2", "h3", "shed", "creepage", "weight"] as const;
const bjlSource = [
  // model | H | h1 | h2 | Md | d1 | d2 | h3 | shed count | creepage | weight
  "BJL-12/50|305|54|210|M12|115|7|125|3 single sheds|270|2.5",
  "BJL-12/100|305|54|210|M12|115|7|125|3 single sheds|270|2.5",
  "BJL-12/275|305|54|210|M12|115|10.5|125|3 single sheds|270|2.5",
  "BJL-24/50|370|54|280|M12|115|7|180|3 single sheds|340|2.8",
  "BJL-24/100|370|54|280|M12|115|7|180|3 single sheds|340|2.8",
  "BJL-24/275|370|54|280|M12|115|10.5|180|3 single sheds|340|2.8",
  "BJL-24/50|370|54|280|M12|115|7|180|4 single sheds|380|3.2",
  "BJL-24/100|370|54|280|M12|115|7|180|4 single sheds|380|3.2",
  "BJL-24/275|370|54|280|M12|115|10.5|180|4 single sheds|380|3.2",
] as const;

const bjlwKeys = ["model", "H", "h1", "h2", "d", "d1", "d2", "d3", "h3", "d0", "shed", "creepage", "weight"] as const;
const bjlwSource = [
  // model | H | h1 | h2 | d | d1 | d2 | d3 | h3 | d0 | shed count | creepage | weight
  "BJLW-24/50|350|59|250|M12|115|61|7|160|65|3 large + 2 small sheds|372|3.5",
  "BJLW-24/100|350|59|250|M12|115|61|7|160|65|3 large + 2 small sheds|372|3.5",
  "BJLW-24/275|350|59|250|M12|115|61|10.5|160|65|3 large + 2 small sheds|372|3.5",
  "BJLW-24/50|379|65|280|M12|135|65|7|180|70|3 large + 2 small sheds|490|3.7",
  "BJLW-24/100|379|65|280|M12|135|65|7|180|70|3 large + 2 small sheds|490|3.7",
  "BJLW-24/275|379|65|280|M12|135|65|10.5|180|70|3 large + 2 small sheds|490|3.7",
  "BJLW-24/400|405|65|275|M16|135|70|20|180|75|3 large + 2 small sheds|440|4.4",
  "BJLW-24/630|405|65|275|M20|135|70|20|180|75|3 large + 2 small sheds|440|4.5",
] as const;

function porcelainRows(sourceRows: readonly string[], keys: readonly string[], variant: (row: Record<string, string>) => string) {
  return sourceRows.map((source) => {
    const row = parseSourceRow(source, keys);
    const [, voltageKv, currentA] = row.model.match(/-(\d+)\/(\d+)$/) ?? [];
    if (!voltageKv || !currentA) throw new Error(`Invalid bushing model: ${row.model}`);
    return { ...row, voltageKv, currentA, variant: variant(row) };
  });
}

const bjlRows = porcelainRows(bjlSource, bjlKeys, (row) => row.shed);
const bjlwRows = porcelainRows(bjlwSource, bjlwKeys, (row) => `H ${row.H} / creepage ${row.creepage}`);

export const bushingDimensionTables: ReferenceDimensionTable[] = [
  {
    id: "oil-paper-outline",
    title: "Oil-paper bushing outline and insulation dimensions",
    intro: "40.5 kV and 72.5 kV cable-through reference configurations.",
    columns: [
      ...ratingColumns,
      { key: "L", label: "Overall length L", unit: "mm" },
      { key: "L4", label: "Cable entry length L4", unit: "mm" },
      { key: "creepage", label: "Creepage distance", unit: "mm" },
      { key: "L1", label: "External insulation L1", unit: "mm" },
      { key: "L3", label: "Drawing length L3", unit: "mm" },
    ],
    rows: oilPaperRows,
    notes: oilPaperCommonNotes,
  },
  {
    id: "oil-paper-mounting",
    title: "Oil-paper bushing mounting-flange dimensions",
    intro: "Use the model and reference variant together to match the outline row above.",
    columns: [
      { key: "model", label: "Reference model" },
      { key: "variant", label: "Reference variant" },
      ...["D", "D1", "D2", "d2", "A", "B", "d"].map((key) => ({ key, label: key, unit: "mm" })),
    ],
    rows: oilPaperRows,
    notes: ["D, D1, D2 and d2 are installation-flange drawing symbols; A, B and d identify the terminal-side hole pattern."],
  },
  {
    id: "oil-paper-connection",
    title: "Oil-paper bushing oil-end and connection dimensions",
    intro: "Additional drawing symbols for oil-side length, equal-pressure ball and connection interfaces.",
    columns: [
      { key: "model", label: "Reference model" },
      { key: "variant", label: "Reference variant" },
      ...["L2", "D3", "L5", "D4", "d1", "D6", "d3"].map((key) => ({ key, label: key, unit: "mm" })),
    ],
    rows: oilPaperRows,
    notes: ["L2 and D3: oil-end dimensions; L5 and D4: equal-pressure ball; d1: lead connector; D6: oil-pillow diameter; d3: conduit."],
  },
  {
    id: "bjl-porcelain",
    title: "BJL porcelain bushing outline dimensions",
    intro: "12 kV and 24 kV cable-through bushings; 24 kV models have distinct shed-profile variants.",
    columns: [
      ...ratingColumns,
      ...["H", "h1", "h2"].map((key) => ({ key, label: key, unit: "mm" })),
      { key: "Md", label: "Terminal thread Md" },
      ...["d1", "d2", "h3"].map((key) => ({ key, label: key, unit: "mm" })),
      { key: "shed", label: "Shed profile" },
      { key: "creepage", label: "Creepage distance", unit: "mm" },
      { key: "weight", label: "Reference mass", unit: "kg" },
    ],
    rows: bjlRows,
    notes: ["H, h1, h2, d1 and d2 follow the outline drawing; h3 is the dry-arcing distance. The original Chinese table distinguishes three- and four-shed profiles."],
  },
  {
    id: "bjlw-porcelain",
    title: "BJLW porcelain bushing outline dimensions",
    intro: "24 kV cable-through bushings with distinct body-height and creepage variants.",
    columns: [
      ...ratingColumns,
      ...["H", "h1", "h2"].map((key) => ({ key, label: key, unit: "mm" })),
      { key: "d", label: "Terminal thread d" },
      ...["d1", "d2", "d3", "h3", "d0"].map((key) => ({ key, label: key, unit: "mm" })),
      { key: "shed", label: "Shed profile" },
      { key: "creepage", label: "Creepage distance", unit: "mm" },
      { key: "weight", label: "Reference mass", unit: "kg" },
    ],
    rows: bjlwRows,
    notes: ["h3 is the dry-arcing distance; d0 is the box-cover opening dimension. Confirm the exact mounting structure before specifying holes or hardware."],
  },
];
