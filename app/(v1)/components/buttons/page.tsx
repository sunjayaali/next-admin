"use client";

import { Button, Card, Group, Stack } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </Group>
      </Card>

      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button size="compact-xs">Extra Small</Button>
          <Button size="compact-sm">Small</Button>
          <Button size="compact-md">Medium</Button>
          <Button size="compact-lg">Large</Button>
          <Button size="compact-xl">Extra Large</Button>
        </Group>
      </Card>

      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
          <Button color="blue">Blue</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="cyan">Cyan</Button>
          <Button color="orange">Orange</Button>
          <Button color="pink">Pink</Button>
          <Button color="gray">Gray</Button>
          <Button color="dark">Dark</Button>
          <Button color="indigo">Indigo</Button>
        </Group>
      </Card>

      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button variant="default">Default</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="light">Light</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="transparent">Transparent</Button>
        </Group>
      </Card>

      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button.Group>
            <Button variant="default">First</Button>
            <Button variant="default">Second</Button>
            <Button variant="default">Third</Button>
          </Button.Group>

          <Button.Group orientation="vertical">
            <Button variant="default">First</Button>
            <Button variant="default">Second</Button>
            <Button variant="default">Third</Button>
          </Button.Group>
        </Group>
      </Card>

      <Card shadow="xs" withBorder>
        <Group gap="xs" justify="center">
          <Button loading>Loading</Button>
          <Button loading loaderProps={{ type: "bars" }}>
            Bars
          </Button>
          <Button loading loaderProps={{ type: "dots" }}>
            Dots
          </Button>
        </Group>
      </Card>
    </Stack>
  );
}
