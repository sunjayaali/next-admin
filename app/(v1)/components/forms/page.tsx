"use client";

import { MailIcon } from "lucide-react";

import {
  Autocomplete,
  Card,
  Checkbox,
  Divider,
  Group,
  MultiSelect,
  NativeSelect,
  PasswordInput,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";

export default function Page() {
  const libraries = [
    {
      group: "Frontend libraries",
      items: [
        { label: "React", value: "react" },
        { label: "Angular", value: "angular" },
        { label: "Vue", value: "vue", disabled: true },
      ],
    },
    {
      group: "Backend libraries",
      items: [
        { label: "Express", value: "express" },
        { label: "Koa", value: "koa" },
        { label: "Django", value: "django" },
      ],
    },
  ];

  return (
    <div className="">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <Card withBorder>
          <Card.Section inheritPadding py="sm" withBorder>
            <Text fw={600}>Panel heading</Text>
          </Card.Section>

          <Stack>
            <TextInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />

            <PasswordInput label="Password" placeholder="Enter your password" />

            <NativeSelect label="Native select" data={libraries} />

            <Textarea label="Textarea label" placeholder="Enter your text" />

            <Autocomplete label="Autocomplete" data={libraries} clearable />

            <MultiSelect label="MultiSelect" data={libraries} clearable />

            <Select label="Select" data={libraries} clearable searchable />

            <TextInput
              disabled
              label="Disabled input"
              placeholder="Can't touch this"
            />

            <TextInput leftSection={<MailIcon />} />
          </Stack>
        </Card>

        <Card withBorder>
          <Card.Section inheritPadding py="sm" withBorder>
            <Text fw={600}>Panel heading</Text>
          </Card.Section>

          <Stack mt="lg">
            <TextInput size="xs" placeholder="Extra small" />
            <TextInput size="sm" placeholder="Small" />
            <TextInput size="md" placeholder="Medium" />
            <TextInput size="lg" placeholder="Large" />
            <TextInput size="xl" placeholder="Extra large" />

            <Divider />

            <SimpleGrid cols={2}>
              <Stack>
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox checked" defaultChecked />
                <Checkbox label="Checkbox disabled" disabled />
                <Checkbox label="Checkbox color" color="teal" />
              </Stack>

              <Stack>
                <Radio.Group name="name">
                  <Group>
                    <Radio label="Radio" value="radio1-1" />
                    <Radio label="Radio checked" value="radio1-2" />
                    <Radio label="Radio disabled" value="radio1-3" disabled />
                    <Radio label="Radio color" value="radio1-4" color="teal" />
                  </Group>
                </Radio.Group>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Card>
      </SimpleGrid>
    </div>
  );
}
