// Copied from infinidraft's src/lib/positionColors.ts. These color names
// resolve against the qb/rb/wr/te/dst/k/flex/superflex/bn custom palettes
// in theme.ts, copied verbatim from infinidraft alongside the rest of the
// theme.
export const POSITION_COLORS: Record<string, string> = {
  QB: "qb",
  RB: "rb",
  WR: "wr",
  TE: "te",
  DST: "dst",
  K: "k",
};

const ADDITIONAL_POSITION_COLORS = {
  FLEX: "flex",
  SFLEX: "superflex",
  BENCH: "bn",
} as const;

// Same fallback infinidraft's SlotTable.tsx uses for a roster slot's group
// label (QB/RB/WR/TE/DST/K plus FLEX/SUPERFLEX/BENCH, which aren't real
// Positions) - startsWith rather than an exact key lookup since a league
// with more than one slot of a kind numbers them ("RB1", "FLEX2", ...).
export function positionColorOrDefault(key: string): string {
  const base = key.replace(/\d+$/, "");
  if (base in POSITION_COLORS) return POSITION_COLORS[base] ?? "gray";
  if (base.startsWith("FLEX")) return ADDITIONAL_POSITION_COLORS.FLEX;
  if (base.startsWith("SFLEX") || base.startsWith("SUPERFLEX")) {
    return ADDITIONAL_POSITION_COLORS.SFLEX;
  }
  if (base.startsWith("BN") || base.startsWith("BENCH")) {
    return ADDITIONAL_POSITION_COLORS.BENCH;
  }
  return "gray";
}
