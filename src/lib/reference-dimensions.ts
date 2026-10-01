/** Tables contain preliminary reference dimensions transcribed from source drawings. */
export type ReferenceDimensionTable = {
  id: string;
  title: string;
  intro?: string;
  columns: { key: string; label: string; unit?: string }[];
  rows: Record<string, string>[];
  notes?: string[];
};
