"use client";

import {
  Box,
  Button,
  Card,
  Group,
  LoadingOverlay,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Page() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <SimpleGrid>
      <Box pos="relative">
        <LoadingOverlay visible={visible} />
        <Card withBorder h={500}>
          Content...
        </Card>
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </SimpleGrid>
  );
}
