"use client";

import { MailIcon, SearchIcon } from "lucide-react";

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
      <SimpleGrid cols={2}>
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
                    <Radio
                      label="Radio checked"
                      value="radio1-2"
                      defaultChecked
                    />
                    <Radio label="Radio disabled" value="radio1-3" disabled />
                    <Radio label="Radio color" value="radio1-4" color="teal" />
                  </Group>
                </Radio.Group>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Card>
      </SimpleGrid>

      <h1 className="font-title font-bold text-3xl">Forms</h1>
      <div className="grid grid-1 sm:grid-cols-2 gap-4 items-start">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">Quick Example</h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input w-full" />
              <label className="label">Max size 2MB</label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Datetime</legend>
              <input
                type="datetime-local"
                className="input w-full "
                placeholder="Enter password"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                <span className="label">https://</span>
                <input type="text" placeholder="URL" />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                <SearchIcon />
                <input type="search" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Label</legend>
              <label className="input w-full">
                Path
                <input type="text" placeholder="src/app/" />
                <span className="badge badge-neutral badge-xs">Optional</span>
              </label>
            </fieldset>

            <form>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Label</legend>
                <div className="join">
                  <div className="w-full">
                    <label className="input w-full validator join-item">
                      <MailIcon />
                      <input
                        type="email"
                        className="w-full"
                        placeholder="mail@site.com"
                        required
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid email address
                    </div>
                  </div>
                  <button className="btn btn-neutral join-item">Join</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
