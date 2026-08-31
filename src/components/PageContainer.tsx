import type { ReactNode } from "react";
import { Container, type MantineSpacing } from "@mantine/core";
import { APP_CONTENT_MAX_WIDTH, MOBILE_HEADER_HEIGHT } from "../constants/general";

type ResponsivePadding =
  MantineSpacing | { base?: MantineSpacing; sm?: MantineSpacing };

interface PageContainerProps {
  children: ReactNode;
  pt?: ResponsivePadding;
  pb?: ResponsivePadding;
}

// Copied from infinidraft's src/components/PageContainer.tsx - same max
// width and top/bottom padding on every top-level page, in both apps, so
// switching between infinidraft and infinileague doesn't feel like a
// different-feeling layout. pt's mobile default clears AppHeader's fixed
// mobile height (see AppHeader.tsx's own Box, same MOBILE_HEADER_HEIGHT).
export function PageContainer({
  children,
  pt = { base: MOBILE_HEADER_HEIGHT + 16, sm: "xl" },
  pb = "xl",
}: PageContainerProps) {
  return (
    <Container size={APP_CONTENT_MAX_WIDTH} pt={pt} pb={pb}>
      {children}
    </Container>
  );
}
