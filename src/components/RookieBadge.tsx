import { Badge, Tooltip } from "@mantine/core";

// Copied from infinidraft's src/components/RookieBadge.tsx - "grape" so it
// never sits next to an injury-status badge in a similar color (those use
// red/orange/yellow/gray - see lib/injuryColor.ts).
export function RookieBadge() {
  return (
    <Tooltip label="Rookie" withArrow>
      <Badge color="grape" size="sm" variant="light">
        R
      </Badge>
    </Tooltip>
  );
}
