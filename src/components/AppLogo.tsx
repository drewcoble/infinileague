import { Group, Image, Text, Title } from "@mantine/core";
import logo from "../infini_logo.png";

// Same mark and wordmark treatment as infinidraft's AppLogo.tsx - shared
// icon (no product name baked into the image, just the infinity/football-
// laces mark), "infini" colored saddlebrown.7 the same way, with "league"
// standing in for infinidraft's "draft".
export function AppLogo() {
  return (
    <Group gap="sm" wrap="nowrap" style={{ minWidth: 0, flex: 1 }}>
      <Image src={logo} alt="infinileague" h={60} w="auto" />
      <Title order={2} c="var(--mantine-color-text)" fz="1.625rem">
        <Text component="span" inherit c="saddlebrown.7">
          infini
        </Text>
        league
      </Title>
    </Group>
  );
}
