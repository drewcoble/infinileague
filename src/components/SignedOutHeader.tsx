import { Box, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { MOBILE_HEADER_HEIGHT } from "../constants/general";
import { AppLogo } from "./AppLogo";

// Copied from infinidraft's src/components/SignedOutHeader.tsx - logo-only
// header for __root.tsx's loading/signed-out states, deliberately with zero
// Convex queries (unlike AppHeader, which needs a confirmed session). Same
// container styling as AppHeader so the two don't visually jump once auth
// resolves.
export function SignedOutHeader() {
  return (
    <Box
      pos={{ base: "fixed", sm: "static" }}
      top={0}
      left={0}
      right={0}
      px={{ base: "md", sm: 0 }}
      py={{ base: "sm", sm: "xs" }}
      h={{ base: MOBILE_HEADER_HEIGHT, sm: "auto" }}
      style={{
        zIndex: 220,
        display: "flex",
        alignItems: "center",
        background:
          "color-mix(in srgb, var(--mantine-color-body) 75%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Group
        justify="space-between"
        align="center"
        wrap="nowrap"
        gap="xs"
        style={{ flex: 1, minWidth: 0 }}
      >
        <Link to="/" style={{ flexShrink: 0, textDecoration: "none" }}>
          <AppLogo />
        </Link>
      </Group>
    </Box>
  );
}
