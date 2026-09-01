// Copied from infinidraft's src/lib/playerFormatting.ts - just the one
// function (formatStatKey isn't needed here, no stat tables yet).
export function injuryColor(status: string): string {
  const s = status.toUpperCase();
  if (s.includes("IR") || s.includes("OUT")) return "red";
  if (s.includes("DOUBTFUL")) return "orange";
  if (s.includes("QUESTIONABLE")) return "yellow";
  return "gray";
}
