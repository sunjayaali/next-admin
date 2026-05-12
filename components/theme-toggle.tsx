"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      variant="default"
      size="lg"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? <MoonIcon /> : <SunIcon />}
    </ActionIcon>
  );
}
